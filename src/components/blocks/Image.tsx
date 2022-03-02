import * as React from 'react';
import styled, { css } from 'styled-components';
import { mq, getGlobals as global } from 'utils/styles';

export interface ImageAspectRatios {
    small: number;
    medium?: number;
    semilarge?: number;
    large?: number;
    xlarge?: number;
}

export interface ImageProps {
    alt?: string;
    small: string;
    medium?: string;
    semilarge?: string;
    large?: string;
    xlarge?: string;
    coverSpace?: boolean;

    /** Image ratios for each breakpoint to avoid layout shifting */
    ratios?: ImageAspectRatios;
}

const AspectContainer = styled.div<{
    ratios?: ImageAspectRatios;
    isInverted?: boolean;
    coverSpace?: boolean;
}>`
    position: relative;
    border-radius: ${({ theme }) => global(theme).sections.edgeRadius};
    overflow: hidden;

    aspect-ratio: ${({ ratios }) => ratios?.small};
    max-width: 100%;

    background: ${({ theme, isInverted }) =>
        isInverted
            ? global(theme).sections.imagePlaceholderBg.inverted
            : global(theme).sections.imagePlaceholderBg.default};
    object-position: center;

    ${({ coverSpace }) =>
        coverSpace &&
        css`
            img {
                width: 100%;
                object-fit: cover;
            }
        `}

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
            img {
                height: 100%;
                width: 100%;

                @supports (aspect-ratio: auto) {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                }
            }
        `}
`;

const Img = styled.img`
    display: block;
`;

const Image: React.FC<
    {
        className?: string;
        onClick?: () => void;
        isInverted?: boolean;
    } & ImageProps
> = ({
    className,
    small,
    medium,
    semilarge,
    large,
    xlarge,
    alt,
    ratios,
    coverSpace,
    onClick,
    isInverted,
}) => {
    return (
        <AspectContainer
            ratios={ratios}
            coverSpace={coverSpace}
            isInverted={isInverted}
            className={className}
        >
            <picture onClick={onClick}>
                {xlarge && <source srcSet={xlarge} media={mq.xlarge} />}
                {large && <source srcSet={large} media={mq.large} />}
                {semilarge && (
                    <source srcSet={semilarge} media={mq.semilarge} />
                )}
                {medium && <source srcSet={medium} media={mq.medium} />}
                <Img srcSet={small} alt={alt || ''} loading="lazy" />
            </picture>
        </AspectContainer>
    );
};

export default Image;
