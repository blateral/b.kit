import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import { getGlobals as global, mq } from 'utils/styles';

const AspectContainer = styled.div<{ ratios?: VideoAspectRatios }>`
    position: relative;
    border-radius: ${({ theme }) => global(theme).sections.edgeRadius};
    overflow: hidden;

    aspect-ratio: ${({ ratios }) => ratios?.small};
    width: ${({ ratios }) => ratios?.small && '100%'};

    @supports not (aspect-ratio: auto) {
        height: ${({ ratios }) => ratios?.small && 0};
        padding-top: ${({ ratios }) =>
            ratios?.small && `calc(100% / ${ratios?.small})`};
    }

    @media ${mq.medium} {
        aspect-ratio: ${({ ratios }) => ratios?.medium};

        @supports not (aspect-ratio: auto) {
            padding-top: ${({ ratios }) =>
                ratios?.medium && `calc(100% / ${ratios?.medium})`};
        }
    }

    @media ${mq.semilarge} {
        aspect-ratio: ${({ ratios }) => ratios?.semilarge};

        @supports not (aspect-ratio: auto) {
            padding-top: ${({ ratios }) =>
                ratios?.semilarge && `calc(100% / ${ratios?.semilarge})`};
        }
    }

    @media ${mq.large} {
        aspect-ratio: ${({ ratios }) => ratios?.large};

        @supports not (aspect-ratio: auto) {
            padding-top: ${({ ratios }) =>
                ratios?.large && `calc(100% / ${ratios?.large})`};
        }
    }

    @media ${mq.xlarge} {
        aspect-ratio: ${({ ratios }) => ratios?.xlarge};

        @supports not (aspect-ratio: auto) {
            padding-top: ${({ ratios }) =>
                ratios?.xlarge && `calc(100% / ${ratios?.xlarge})`};
        }
    }

    ${({ ratios }) =>
        ratios &&
        css`
            video {
                height: 100%;
                width: 100%;
                object-fit: cover;

                @supports not (aspect-ratio: auto) {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                }
            }
        `}
`;

const Video = styled.video<{ ratios?: VideoAspectRatios }>`
    display: block;
    max-width: 100%;
`;

export interface VideoAspectRatios {
    small: number;
    medium?: number;
    semilarge?: number;
    large?: number;
    xlarge?: number;
}

export interface VideoProps {
    urls?: string[];
    ratios?: VideoAspectRatios;

    muted?: boolean;
    autoPlay?: boolean;
    loop?: boolean;
    controls?: boolean;
    onCanPlayThrough?: (ev: React.SyntheticEvent<HTMLVideoElement>) => void;
}

const VideoBlock: FC<VideoProps & { className?: string }> = ({
    urls,
    ratios,
    muted = false,
    autoPlay = false,
    loop = false,
    controls = false,
    onCanPlayThrough,
    className,
}) => {
    return (
        <AspectContainer ratios={ratios} className={className}>
            <Video
                muted={muted}
                autoPlay={autoPlay}
                loop={loop}
                controls={controls}
                onCanPlayThrough={onCanPlayThrough}
            >
                {urls?.map((url, i) => (
                    <source src={url} key={i} />
                ))}
            </Video>
        </AspectContainer>
    );
};
export default VideoBlock;
