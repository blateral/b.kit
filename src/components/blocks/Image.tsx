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
    /** Alternative text if image cannot be loaded */
    alt?: string;

    /** Image URL for small breakpoint */
    small: string;
    /** Image URL for medium breakpoint */
    medium?: string;
    /** Image URL for semilarge breakpoint */
    semilarge?: string;
    /** Image URL for large breakpoint */
    large?: string;
    /** Image URL for xlarge breakpoint */
    xlarge?: string;

    /** Cover full width of parent container */
    coverSpace?: boolean;

    /**
     * Image ratios for each breakpoint to avoid layout shifting.
     * Only works if coverSpace!
     * */
    ratios?: ImageAspectRatios;

    /** Show image placeholder background */
    showPlaceholder?: boolean;
}

const AspectContainer = styled.div<{
    ratios?: ImageAspectRatios;
    coverSpace?: boolean;
}>`
    display: inline-block;
    position: relative;
    border-radius: ${({ theme }) => global(theme).sections.edgeRadius};
    overflow: hidden;

    aspect-ratio: ${({ ratios }) => ratios?.small};
    max-width: 100%;

    object-position: center;

    img {
        width: 100%;
    }

    ${({ coverSpace }) =>
        coverSpace &&
        css`
            width: 100%;

            img {
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
            width: 100%;

            img {
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

const Img = styled.img<{ isInverted?: boolean; showPlaceholder?: boolean }>`
    display: block;

    &[data-img-loaded='false'] {
        background: ${({ theme, isInverted, showPlaceholder }) =>
            showPlaceholder
                ? isInverted
                    ? global(theme).sections.imagePlaceholderBg.inverted
                    : global(theme).sections.imagePlaceholderBg.default
                : undefined};
    }
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
    showPlaceholder = true,
}) => {
    const aspectRatios = coverSpace ? ratios : undefined;

    return (
        <AspectContainer
            ratios={aspectRatios}
            coverSpace={coverSpace}
            className={className}
        >
            <picture onClick={onClick}>
                {xlarge && <source srcSet={xlarge} media={mq.xlarge} />}
                {large && <source srcSet={large} media={mq.large} />}
                {semilarge && (
                    <source srcSet={semilarge} media={mq.semilarge} />
                )}
                {medium && <source srcSet={medium} media={mq.medium} />}
                <Img
                    data-img-loaded="false"
                    showPlaceholder={showPlaceholder && !!aspectRatios}
                    isInverted={isInverted}
                    srcSet={small}
                    alt={alt || ''}
                    loading="lazy"
                    onLoad={(ev) =>
                        ev.currentTarget?.setAttribute(
                            'data-img-loaded',
                            'true'
                        )
                    }
                />
            </picture>
        </AspectContainer>
    );
};

export default Image;
