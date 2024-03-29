import React, { FC } from 'react';
import styled, { css } from 'styled-components';

import { copyStyle } from 'components/typography/Copy';
import Link, { LinkProps } from 'components/typography/Link';
import { getColors, spacings } from 'utils/styles';

const View = styled(Link)<{
    isInverted?: boolean;
    isActive?: boolean;
    isClickable?: boolean;
}>`
    display: inline-block;
    border: 1px solid
        ${({ isInverted }) => (isInverted ? '#dddddd' : '#444444')};
    border-radius: 8px;

    padding: 1px ${spacings.nudge}px;
    max-height: 28px;
    min-width: 60px;
    user-select: none;

    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    text-align: center;

    text-decoration: none;

    ${copyStyle('copy', 'small')}

    background: none;

    && {
        background-color: ${({ isActive, isInverted }) =>
            isActive && (isInverted ? '#dddddd' : '#444444')};
        color: ${({ isActive, isInverted }) => {
            if (isActive) {
                return isInverted ? '#444444' : '#ffff';
            } else {
                return isInverted ? '#dddddd' : '#444444';
            }
        }};

        transition: background-color 0.2s ease-in-out, color 0.1s ease-in-out;
    }

    cursor: ${({ isClickable }) => (isClickable ? 'pointer' : 'default')};

    ${({ isClickable, isInverted }) =>
        isClickable &&
        css`
            @media (hover: hover) and (pointer: fine) {
                &&:hover {
                    background-color: ${isInverted ? '#dddddd' : '#444444'};
                    color: ${isInverted ? '#444444' : '#ffff'};
                }
            }
        `}

    &:focus {
        /* background-color: ${({ isInverted }) =>
            isInverted ? '#dddddd' : '#444444'};
        color: ${({ isInverted }) => (isInverted ? '#444444' : '#ffff')}; */
        outline: 2px solid
            ${({ isInverted, theme }) =>
                isInverted
                    ? getColors(theme).primary.inverted
                    : getColors(theme).primary.default};
        outline-offset: -1px;
        text-decoration: underline;
    }

    &:focus:not(:focus-visible) {
        outline: none;
        text-decoration: none;
    }
`;

export interface TagProps {
    name?: string;
    link?: LinkProps;
}

const Tag: FC<
    TagProps & {
        /** Invert colors to use on dark background */
        isInverted?: boolean;

        /** Highlight tag if active */
        isActive?: boolean;

        /** Click callback */
        onClick?: (ev?: React.SyntheticEvent<HTMLElement>) => void;
        className?: string;
        children?: React.ReactNode;
    }
> = ({ name, link, isInverted, isActive, onClick, className, children }) => {
    const tag = link?.href ? 'a' : onClick ? 'button' : 'span';

    return (
        <View
            as={tag}
            isInverted={isInverted}
            isActive={isActive}
            onClick={onClick}
            isClickable={!!onClick || !!(link && link.href)}
            className={className}
            {...link}
        >
            {name || children}
        </View>
    );
};

export default Tag;
