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

const Img = styled.img<{
    coverSpace?: boolean;
    ratios?: ImageAspectRatios;
    isInverted?: boolean;
}>`
    max-width: 100%;
    display: block;
    align-self: flex-start;

    @supports (aspect-ratio: auto) {
        aspect-ratio: ${({ ratios }) => ratios?.small};
        object-fit: ${({ ratios }) => ratios?.small && 'cover'};
    }

    background: ${({ theme, isInverted }) =>
        isInverted
            ? global(theme).sections.imagePlaceholderBg.inverted
            : global(theme).sections.imagePlaceholderBg.default};
    object-position: center;

    ${({ coverSpace }) =>
        coverSpace &&
        css`
            width: 100%;
            object-fit: cover;
        `}

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

const Picture = styled.picture<{ coverSpace?: boolean }>`
    ${({ coverSpace }) =>
        coverSpace &&
        css`
            display: flex;
            height: 100%;
            width: 100%;
        `}
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
        <Picture coverSpace={coverSpace} onClick={onClick}>
            {xlarge && <source srcSet={xlarge} media={mq.xlarge} />}
            {large && <source srcSet={large} media={mq.large} />}
            {semilarge && <source srcSet={semilarge} media={mq.semilarge} />}
            {medium && <source srcSet={medium} media={mq.medium} />}
            <Img
                srcSet={small}
                alt={alt || ''}
                coverSpace={coverSpace}
                loading="lazy"
                ratios={ratios}
                isInverted={isInverted}
                className={className}
            />
        </Picture>
    );
};

export default Image;
