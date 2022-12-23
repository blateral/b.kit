import React, {
    forwardRef,
    useEffect,
    useImperativeHandle,
    useRef,
} from 'react';
import styled, { css } from 'styled-components';
import { getGlobals as global, mq } from 'utils/styles';

const AspectContainer = styled.div<{
    ratios?: VideoAspectRatios;
    isInverted?: boolean;
}>`
    position: relative;
    border-radius: ${({ theme }) => global(theme).sections.edgeRadius};
    overflow: hidden;

    aspect-ratio: ${({ ratios }) => ratios?.small};
    width: ${({ ratios }) => ratios?.small && '100%'};
    max-width: 100%;

    background: ${({ theme, isInverted }) =>
        isInverted
            ? global(theme).sections.imagePlaceholderBg.inverted
            : global(theme).sections.imagePlaceholderBg.default};
    object-position: center;

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

const Video = styled.video`
    display: block;
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
    isInverted?: boolean;

    muted?: boolean;
    autoPlay?: boolean;
    loop?: boolean;
    controls?: boolean;
    playsInline?: boolean;
    onCanPlayThrough?: () => void;
}

const VideoBlock = forwardRef<
    HTMLVideoElement,
    VideoProps & { className?: string }
>(
    (
        {
            urls,
            ratios,
            isInverted,
            muted = false,
            autoPlay = false,
            loop = false,
            controls = false,
            playsInline = true,
            onCanPlayThrough,
            className,
        },
        ref
    ) => {
        const videoRef = useRef<HTMLVideoElement | null>(null);

        useImperativeHandle<HTMLVideoElement | null, HTMLVideoElement | null>(
            ref,
            () => videoRef.current
        );

        useEffect(() => {
            if (videoRef.current && videoRef.current.readyState > 3) {
                onCanPlayThrough?.();
            }
        }, [onCanPlayThrough]);

        return (
            <AspectContainer
                ratios={ratios}
                isInverted={isInverted}
                className={className}
            >
                <Video
                    ref={videoRef}
                    muted={muted}
                    autoPlay={autoPlay}
                    loop={loop}
                    controls={controls}
                    onCanPlayThrough={onCanPlayThrough}
                    playsInline={playsInline}
                >
                    {urls?.map((url, i) => (
                        <source src={url} key={i} />
                    ))}
                </Video>
            </AspectContainer>
        );
    }
);

VideoBlock.displayName = 'VideoBlock';

export default VideoBlock;
