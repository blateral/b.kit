import * as React from 'react';
import styled, { css } from 'styled-components';
import { mq } from 'utils/styles';

export interface ImageProps {
    alt?: string;
    small: string;
    medium?: string;
    semilarge?: string;
    large?: string;
    xlarge?: string;
    coverSpace?: boolean;
}

const Img = styled.img<{ coverSpace?: boolean }>`
    max-width: 100%;
    display: block;
    align-self: flex-start;
    ${({ coverSpace }) =>
        coverSpace &&
        css`
            width: 100%;
            object-fit: cover;
            object-position: center;
        `}
`;

const Picture = styled.picture<{ coverSpace?: boolean }>`
    ${({ coverSpace }) =>
        coverSpace &&
        `
    display: flex;
    height: 100%;
    width: 100%;
`}
`;

const Image: React.FC<
    { className?: string; onClick?: () => void } & ImageProps
> = ({
    className,
    small,
    medium,
    semilarge,
    large,
    xlarge,
    alt,
    coverSpace,
    onClick,
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
                className={className}
            />
        </Picture>
    );
};

export default Image;
