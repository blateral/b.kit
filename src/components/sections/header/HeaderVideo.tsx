import * as React from 'react';
import styled from 'styled-components';

import { useState, useEffect } from 'react';
import Image from 'components/blocks/Image';
import { useMediaQuery } from 'utils/useMediaQuery';
import { HeaderFocus } from './Header';

interface HeaderVideoImageProps {
    small: string;
    medium?: string;
    semilarge?: string;
    large?: string;
    xlarge?: string;
    webp?: {
        small: string;
        medium?: string;
        semilarge?: string;
        large?: string;
        xlarge?: string;
    };
}

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

    object-position: ${({ focus }) =>
        `${focus?.[0] || 'center'} ${focus?.[1] || 'center'}`};
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
    placeholderImg?: HeaderVideoImageProps;
    videoUrl?: string;
    className?: string;
    focus?: HeaderFocus;
}> = ({ placeholderImg, videoUrl, className, children, focus }) => {
    const [isLoaded, setLoaded] = useState<boolean>(false);
    const currentMq = useMediaQuery([
        'small',
        'medium',
        'semilarge',
        'large',
        'xlarge',
    ]) as HeaderVideoMq | undefined;

    const isMobile = currentMq === undefined || currentMq === 'small';

    useEffect(() => {
        if (isMobile) setLoaded(false);
    }, [isMobile]);

    return (
        <PosterView className={className}>
            {placeholderImg?.small && !isLoaded && (
                <PlaceholderImg coverSpace {...placeholderImg} focus={focus} />
            )}
            {videoUrl && !isMobile && (
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
