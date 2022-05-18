import React from 'react';
import styled from 'styled-components';

import { useState, useEffect } from 'react';
import Image from 'components/blocks/Image';
import { useMediaQuery } from 'utils/useMediaQuery';
import { HeaderFocus, HeaderImage } from './Header';

const PosterView = styled.div`
    position: relative;
    width: 100%;
    height: 100%;

    /* required to align items at flex-end in ie11 */
    &:before {
        content: '';
        min-height: 200px;
        display: block;
        flex: 1 0 0px;
    }
`;

const PlaceholderImg = styled(Image)<{ focus?: HeaderFocus }>`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    height: 100%;
    z-index: 0;

    img {
        object-position: ${({ focus }) =>
            `${focus?.[0] || 'center'} ${focus?.[1] || 'center'}`};
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
    const [isLoaded, setLoaded] = useState<boolean>(false);
    const currentMq = useMediaQuery([
        'small',
        'medium',
        'semilarge',
        'large',
        'xlarge',
    ]) as HeaderVideoMq | undefined;

    const isMobile = currentMq === undefined || currentMq === 'small';
    const isVideoAllowed = loadOnMobile || !isMobile;

    useEffect(() => {
        if (!isVideoAllowed) setLoaded(false);
    }, [isMobile, isVideoAllowed, loadOnMobile]);

    return (
        <PosterView className={className}>
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
                    isVisible={isLoaded}
                    src={videoUrl}
                    muted
                    autoPlay
                    loop
                    onCanPlayThrough={() => setLoaded(true)}
                    focus={focus}
                />
            )}
            {children}
        </PosterView>
    );
};

export default HeaderVideo;
