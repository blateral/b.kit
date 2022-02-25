import React, { FC, useState } from 'react';
import styled from 'styled-components';

import { ImageProps } from 'components/blocks/Image';
import { mq, getColors as color, getGlobals as global } from 'utils/styles';
import Play from 'components/base/icons/Play';

const View = styled.div<{ bgImage?: ImageProps; isActive?: boolean }>`
    text-align: center;

    cursor: pointer;
    position: relative;

    padding-bottom: 56.25%;

    background-image: url('${({ bgImage }) => (bgImage ? bgImage.small : '')}');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    border-radius: ${({ theme }) => global(theme).sections.edgeRadius};
    overflow: hidden;

    @media ${mq.medium} {
        text-align: left;

        background-image: ${({ bgImage }) =>
            bgImage?.medium && `url("${bgImage.medium}")`};
    }

    @media ${mq.semilarge} {
        background-image: ${({ bgImage }) =>
            bgImage?.semilarge && `url("${bgImage.semilarge}")`};
    }

    @media ${mq.large} {
        background-image: ${({ bgImage }) =>
            bgImage?.large && `url("${bgImage.large}")`};
    }

    @media ${mq.xlarge} {
        background-image: ${({ bgImage }) =>
            bgImage?.xlarge && `url("${bgImage.xlarge}")`};
    }

    &:before {
        content: ${({ isActive, bgImage }) => !isActive && bgImage && '""'};
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-color: ${({ theme }) => color(theme).new.elementBg.medium};
        opacity: ${({ bgImage }) => (bgImage ? '0.3' : '0')};

        pointer-events: none;
    }

    &:after {
        content: ${({ isActive, bgImage }) => !isActive && bgImage && '""'};
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        pointer-events: none;

        background: linear-gradient(
            358.19deg,
            rgba(29, 34, 35, 0.52) 12.37%,
            rgba(29, 34, 35, 0) 59.02%
        );
    }
`;

const VideoControls = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: ${({ theme }) => color(theme).new.elementBg.light};
    z-index: 1;

    & > * {
        opacity: 0.8;
        transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out;
    }

    ${View}:hover > & > * {
        transform: scale(1.05);
        opacity: 1;
    }

    ${View}:active > & > * {
        transform: scale(0.95);
        opacity: 1;
    }
`;

const Iframe = styled.iframe`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    border: none;
`;

export interface VideoCardProps {
    bgImage: ImageProps;
    embedId: string;
    playIcon?: React.ReactChild;
}

const VideoCard: FC<VideoCardProps & { className?: string }> = ({
    bgImage,
    embedId,
    playIcon,
    className,
}) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <View
            onClick={() => setIsActive(true)}
            bgImage={isActive ? undefined : bgImage}
            isActive={isActive}
            className={className}
        >
            {!isActive && <VideoControls>{playIcon || <Play />}</VideoControls>}
            {isActive && (
                <Iframe
                    id="ytplayer"
                    src={`https://www.youtube.com/embed/${embedId}?autoplay=1`}
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                />
            )}
        </View>
    );
};

export default VideoCard;
