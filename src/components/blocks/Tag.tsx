import React, { FC } from 'react';
import styled from 'styled-components';

import { spacings, getColors as color } from 'utils/styles';
import Copy from 'components/typography/Copy';

const View = styled(Copy)<{
    isInverted?: boolean;
    isActive?: boolean;
    onClick?: () => void;
}>`
    display: inline-block;
    border: 1px solid
        ${({ isInverted, theme }) =>
            isInverted ? color(theme).light : '#434F55'};
    border-radius: 15px;

    padding: 3px ${spacings.nudge * 2}px;
    user-select: none;

    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    text-align: center;
    background: ${({ isActive, isInverted, theme }) =>
        isActive && (isInverted ? color(theme).light : '#434F55')};
    color: ${({ isActive, isInverted, theme }) =>
        isActive &&
        (isInverted ? color(theme).primary.dark : color(theme).light)};
    cursor: ${({ onClick }) => (onClick ? 'pointer' : 'default')};

    transition: background 0.1s ease-in-out, color 0.1s ease-in-out;

    &:hover {
        background: ${({ theme, isInverted, onClick }) =>
            onClick && (isInverted ? color(theme).light : '#434F55')};
        color: ${({ theme, isInverted, onClick }) =>
            onClick &&
            (isInverted ? color(theme).primary.dark : color(theme).light)};
    }
`;

const Tag: FC<{
    isInverted?: boolean;
    isActive?: boolean;
    onClick?: () => void;
    className?: string;
}> = ({ isInverted, isActive, onClick, className, children }) => {
    return (
        <View
            isInverted={isInverted}
            isActive={isActive}
            onClick={onClick}
            className={className}
        >
            {children}
        </View>
    );
};

export default Tag;
