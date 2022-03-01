import React, { FC } from 'react';
import styled from 'styled-components';
import { getGlobals as global, mq } from 'utils/styles';

const View = styled.video<{ ratios?: VideoAspectRatios }>`
    display: block;
    max-width: 100%;

    aspect-ratio: ${({ ratios }) => ratios?.small};
    object-fit: ${({ ratios }) => ratios?.small && 'cover'};
    border-radius: ${({ theme }) => global(theme).sections.edgeRadius};

    @media ${mq.medium} {
        @supports (aspect-ratio: auto) {
            aspect-ratio: ${({ ratios }) => ratios?.medium};
            object-fit: ${({ ratios }) => ratios?.medium && 'cover'};
        }
    }

    @media ${mq.semilarge} {
        @supports (aspect-ratio: auto) {
            aspect-ratio: ${({ ratios }) => ratios?.semilarge};
            object-fit: ${({ ratios }) => ratios?.semilarge && 'cover'};
        }
    }

    @media ${mq.large} {
        @supports (aspect-ratio: auto) {
            aspect-ratio: ${({ ratios }) => ratios?.large};
            object-fit: ${({ ratios }) => ratios?.large && 'cover'};
        }
    }

    @media ${mq.xlarge} {
        @supports (aspect-ratio: auto) {
            aspect-ratio: ${({ ratios }) => ratios?.xlarge};
            object-fit: ${({ ratios }) => ratios?.xlarge && 'cover'};
        }
    }
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
        <View
            muted={muted}
            autoPlay={autoPlay}
            loop={loop}
            controls={controls}
            ratios={ratios}
            onCanPlayThrough={onCanPlayThrough}
            className={className}
        >
            {urls?.map((url, i) => (
                <source src={url} key={i} />
            ))}
        </View>
    );
};
export default VideoBlock;
