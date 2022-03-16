import React, { FC } from 'react';
import styled from 'styled-components';

import Copy from 'components/typography/Copy';

const View = styled(Copy)<{
    isInverted?: boolean;
    isActive?: boolean;
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

    background: ${({ isActive, isInverted }) =>
        isActive && (isInverted ? '#dddddd' : '#444444')};

    color: ${({ isActive, isInverted }) => {
        if (isActive) {
            return isInverted ? '#444444' : '#ffff';
        } else {
            return isInverted ? '#dddddd' : '#444444';
        }
    }};

    cursor: ${({ onClick }) => (onClick ? 'pointer' : 'default')};

    transition: background 0.1s ease-in-out, color 0.1s ease-in-out;

    @media (hover: hover) and (pointer: fine) {
        &:hover {
            background: ${({ isInverted }) =>
                isInverted ? '#dddddd' : '#444444'};
            color: ${({ isInverted }) => (isInverted ? '#444444' : '#ffff')};
        }
    }
`;

const Tag: FC<{
    /** Invert colors to use on dark background */
    isInverted?: boolean;

    /** Highlight tag if active */
    isActive?: boolean;

    /** Click callback */
    onClick?: () => void;
    className?: string;
}> = ({ isInverted, isActive, onClick, className, children }) => {
    return (
        <View
            size="small"
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
