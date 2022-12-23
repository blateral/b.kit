import React, { useRef } from 'react';
import styled from 'styled-components';

import { useState, useEffect } from 'react';
import Image from 'components/blocks/Image';
import { useMediaQuery } from 'utils/useMediaQuery';
import { HeaderFocus, HeaderImage } from './Header';
import { mq, spacings } from 'utils/styles';
import { useObserverSupport } from 'utils/useObserverSupport';
import useUpdateEffect from 'utils/useUpdateEffect';

const PosterView = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`;

const PlaceholderImg = styled(Image)<{ focus?: HeaderFocus }>`
    position: relative;
    height: 100%;

    img {
        object-position: ${({ focus }) =>
            `${focus?.[0] || 'center'} ${focus?.[1] || 'center'}`};

        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        height: 100%;
        z-index: 0;
    }

    margin: 0 auto;

    @media ${mq.medium} {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        padding: ${spacings.spacer * 2}px;
        z-index: 2;

        & > * {
            margin-top: ${spacings.spacer}px;
            max-width: 880px;
        }
    }
`;

const AutoplayVideo = styled.video<{
    isVisible?: boolean;
    focus?: HeaderFocus;
}>`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: ${({ focus }) =>
        `${focus?.[0] || 'center'} ${focus?.[1] || 'center'}`};
    opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
    pointer-events: none;
    z-index: 1;

    transition: opacity 0.3s ease-in-out;
`;

type HeaderVideoMq = 'small' | 'medium' | 'semilarge' | 'large' | 'xlarge';

const HeaderVideo: React.FC<{
    isInverted?: boolean;
    loadOnMobile?: boolean;
    placeholderImg?: HeaderImage;
    focus?: HeaderFocus;
    videoUrl?: string;
    className?: string;
    children?: React.ReactNode;
}> = ({
    isInverted,
    loadOnMobile = true,
    placeholderImg,
    focus,
    videoUrl,
    className,
    children,
}) => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const viewRef = useRef<HTMLDivElement | null>(null);
    const [isLoaded, setLoaded] = useState<boolean>(
        !placeholderImg?.small || false
    );
    const isObserverSupported = useObserverSupport();
    const currentMq = useMediaQuery([
        'small',
        'medium',
        'semilarge',
        'large',
        'xlarge',
    ]) as HeaderVideoMq | undefined;

    const isMobile = currentMq === undefined || currentMq === 'small';
    const isVideoAllowed = loadOnMobile || !isMobile;

    const [isVideoActive, setVideoActive] = useState<boolean>(false);

    useEffect(() => {
        if (!isVideoAllowed) setLoaded(false);
    }, [isMobile, isVideoAllowed, loadOnMobile]);

    useEffect(() => {
        if (!videoRef.current) return;

        if (videoRef.current.readyState > 3) {
            setLoaded(true);
        }
    }, []);

    useUpdateEffect(() => {
        if (!isVideoAllowed || !videoUrl || !viewRef.current) return;
        if (!isObserverSupported) {
            setVideoActive(true);
            return;
        }

        const observer = new IntersectionObserver(
            (entries, observer) => {
                const [entry] = entries;

                if (entry.isIntersecting) {
                    observer.unobserve(entry.target);
                    setVideoActive(true);
                }
            },
            {
                rootMargin: '200px 0px 200px 0px',
            }
        );

        const viewEl = viewRef.current;
        observer.observe(viewEl);

        return () => {
            if (viewEl) observer.unobserve(viewEl);
        };
    }, [isObserverSupported, isVideoAllowed]);

    return (
        <PosterView ref={viewRef} className={className}>
            {placeholderImg?.small && !isLoaded && (
                <PlaceholderImg
                    {...placeholderImg}
                    coverSpace
                    ratios={undefined}
                    isInverted={isInverted}
                    focus={focus}
                />
            )}
            {videoUrl && isVideoAllowed && (
                <AutoplayVideo
                    ref={videoRef}
                    isVisible={isLoaded}
                    src={isVideoActive ? videoUrl : undefined}
                    muted
                    autoPlay
                    loop
                    playsInline
                    onCanPlayThrough={() => {
                        setLoaded(true);
                    }}
                    focus={focus}
                />
            )}
            {children}
        </PosterView>
    );
};

export default HeaderVideo;
