import React, { FC } from 'react';
import styled, { css } from 'styled-components';

import { copyStyle } from 'components/typography/Copy';
import Link, { LinkProps } from 'components/typography/Link';

const View = styled(Link)<{
    isInverted?: boolean;
    isActive?: boolean;
    isClickable?: boolean;
    onClick?: () => void;
}>`
    display: inline-block;
    border: 1px solid
        ${({ isInverted }) => (isInverted ? '#dddddd' : '#444444')};
    border-radius: 15px;

    padding: 4px 12px;
    max-height: 28px;
    user-select: none;

    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    text-align: center;

    text-decoration: none;

    ${copyStyle('copy', 'small')}

    background: none;
    background-color: ${({ isActive, isInverted }) =>
        isActive && (isInverted ? '#dddddd' : '#444444')};

    color: ${({ isActive, isInverted }) => {
        if (isActive) {
            return isInverted ? '#444444' : '#ffff';
        } else {
            return isInverted ? '#dddddd' : '#444444';
        }
    }};

    cursor: ${({ isClickable }) => (isClickable ? 'pointer' : 'default')};

    transition: background-color 0.1s ease-in-out, color 0.1s ease-in-out;

    ${({ isClickable, isInverted }) =>
        isClickable &&
        css`
            @media (hover: hover) and (pointer: fine) {
                &:hover {
                    background-color: ${isInverted ? '#dddddd' : '#444444'};
                    color: ${isInverted ? '#444444' : '#ffff'};

                    & > * {
                        color: inherit;
                    }
                }
            }
        `}
`;

const Tag: FC<{
    name?: string;
    link?: LinkProps;

    /** Invert colors to use on dark background */
    isInverted?: boolean;

    /** Highlight tag if active */
    isActive?: boolean;

    /** Click callback */
    onClick?: () => void;
    className?: string;
}> = ({ name, link, isInverted, isActive, onClick, className, children }) => {
    return (
        <View
            isInverted={isInverted}
            isActive={isActive}
            onClick={onClick}
            isClickable={!!onClick || !!(link && link.href)}
            className={className}
            {...link}
        >
            {name ? name : children}
        </View>
    );
};

export default Tag;
