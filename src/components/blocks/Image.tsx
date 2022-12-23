import Copy from 'components/typography/Copy';
import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { useLibTheme } from 'utils/LibThemeProvider';
import {
    mq,
    getColors as color,
    getGlobals as global,
    spacings,
} from 'utils/styles';

export interface ImageAspectRatios {
    small: { w: number; h: number };
    medium?: { w: number; h: number };
    semilarge?: { w: number; h: number };
    large?: { w: number; h: number };
    xlarge?: { w: number; h: number };
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
     * Only works if coverSpace = true!
     * */
    ratios?: ImageAspectRatios;

    /** Show image placeholder background */
    showPlaceholder?: boolean;

    /** Image copyright text (richtext)  */
    copyright?: string;
}

const getAspectRatio = (width?: number, height?: number) => {
    if (!width || !height) return undefined;
    if (isNaN(width) || isNaN(height)) return undefined;

    return width / height;
};

const isValid = (ratio?: { w?: number; h?: number }) => {
    return ratio && ratio?.w && ratio?.h ? true : false;
};

const aspectFallback = (ratio?: { w?: number; h?: number }) => css`
    @supports not (aspect-ratio: auto) {
        height: 0;
        padding-top: ${isValid(ratio) &&
        `calc(100% / ${getAspectRatio(ratio?.w, ratio?.h)})`};
    }
`;

const AspectContainer = styled.div<{
    ratios?: ImageAspectRatios;
    coverSpace?: boolean;
    allowEdgeRadius?: boolean;
}>`
    display: inline-block;
    position: relative;
    border-radius: ${({ theme, allowEdgeRadius }) =>
        allowEdgeRadius && global(theme).sections.edgeRadius};
    overflow: hidden;

    aspect-ratio: ${({ ratios }) =>
        getAspectRatio(ratios?.small?.w, ratios?.small?.h)};

    width: ${({ ratios, coverSpace }) =>
        !coverSpace && ratios?.small?.w ? `${ratios?.small?.w}px` : ''};

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

    // fallback if browsers do not support aspect-ratio
    ${({ ratios, coverSpace }) => coverSpace && aspectFallback(ratios?.small)}

    @media ${mq.medium} {
        aspect-ratio: ${({ ratios }) =>
            getAspectRatio(ratios?.medium?.w, ratios?.medium?.h)};

        // fallback if browsers do not support aspect-ratio. (Only works with width = 100%)
        ${({ ratios, coverSpace }) =>
            coverSpace && aspectFallback(ratios?.medium)}
    }

    @media ${mq.semilarge} {
        aspect-ratio: ${({ ratios }) =>
            getAspectRatio(ratios?.semilarge?.w, ratios?.semilarge?.h)};

        // fallback if browsers do not support aspect-ratio (Only works with width = 100%)
        ${({ ratios, coverSpace }) =>
            coverSpace && aspectFallback(ratios?.semilarge)}
    }

    @media ${mq.large} {
        aspect-ratio: ${({ ratios }) =>
            getAspectRatio(ratios?.large?.w, ratios?.large?.h)};

        // fallback if browsers do not support aspect-ratio (Only works with width = 100%)
        ${({ ratios, coverSpace }) =>
            coverSpace && aspectFallback(ratios?.large)}
    }

    @media ${mq.xlarge} {
        aspect-ratio: ${({ ratios }) =>
            getAspectRatio(ratios?.xlarge?.w, ratios?.xlarge?.h)};

        // fallback if browsers do not support aspect-ratio (Only works with width = 100%)
        ${({ ratios, coverSpace }) =>
            coverSpace && aspectFallback(ratios?.xlarge)}
    }

    ${({ ratios, coverSpace }) =>
        ratios &&
        css`
            img {
                height: 100%;
                width: 100%;
                object-fit: ${coverSpace ? 'cover' : 'contain'};

                @supports not (aspect-ratio: auto) {
                    position: ${coverSpace && 'absolute'};
                    top: 0;
                    left: 0;
                    right: 0;
                }
            }
        `}
`;

const Img = styled.img<{ isInverted?: boolean; showPlaceholder?: boolean }>`
    display: block;
    color: ${({ theme, isInverted }) =>
        isInverted ? color(theme).text.inverted : color(theme).text.default};

    &[data-img-loaded='false'] {
        background: ${({ theme, isInverted, showPlaceholder }) =>
            showPlaceholder
                ? isInverted
                    ? global(theme).sections.imagePlaceholderBg.inverted
                    : global(theme).sections.imagePlaceholderBg.default
                : undefined};
    }
`;

const Copyright = styled(Copy)`
    display: inline-block;
    position: absolute;
    max-height: 100%;
    bottom: 0;
    right: 0;

    padding: ${spacings.nudge * 2}px ${spacings.nudge}px;

    pointer-events: none;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    -ms-writing-mode: tb-rl;
    writing-mode: vertical-rl;
    text-orientation: sideways-right;
    transform: rotate(180deg);
`;

const Image: React.FC<
    {
        className?: string;

        /** Click handler */
        onClick?: () => void;

        /** Show inverted image placeholder background */
        isInverted?: boolean;

        /** Allow edge radius defined by theme settings */
        allowEdgeRadius?: boolean;
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
    allowEdgeRadius,
    copyright,
}) => {
    const { colors } = useLibTheme();
    const imgRef = useRef<HTMLImageElement>(null);
    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    useEffect(() => {
        if (!imgRef.current) return;
        const ref = imgRef.current;

        const handleLoad = () => {
            setIsLoaded(true);
        };

        const handleError = () => {
            setIsLoaded(false);
        };

        if (!ref.complete) {
            ref.addEventListener('load', handleLoad);
            ref.addEventListener('error', handleError);
        } else {
            ref.removeEventListener('load', handleLoad);
            ref.removeEventListener('error', handleError);
            handleLoad();
        }

        return () => {
            ref.removeEventListener('load', handleLoad);
            ref.removeEventListener('error', handleError);
        };
    }, []);

    return (
        <AspectContainer
            ratios={ratios}
            coverSpace={coverSpace}
            allowEdgeRadius={allowEdgeRadius}
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
                    ref={imgRef}
                    data-img-loaded={isLoaded}
                    showPlaceholder={showPlaceholder}
                    isInverted={isInverted}
                    srcSet={small}
                    alt={alt || ''}
                    loading="lazy"
                />
            </picture>
            {copyright && (
                <Copyright
                    size="small"
                    textColor={colors.text.inverted}
                    innerHTML={`&copy; ${copyright}`}
                    renderAs="span"
                />
            )}
        </AspectContainer>
    );
};

export default Image;
