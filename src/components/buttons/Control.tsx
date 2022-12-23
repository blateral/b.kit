import React, { FC } from 'react';
import styled from 'styled-components';

import { getColors as color } from 'utils/styles';

const View = styled.button<{ isInverted?: boolean; disabled?: boolean }>`
    display: inline-flex;
    align-items: center;
    justify-content: center;

    background: none;
    outline: none;
    padding: 0;
    margin: 0;
    border: none;

    color: ${({ theme, isInverted }) =>
        isInverted ? color(theme).text.inverted : color(theme).text.default};
    opacity: ${({ disabled }) => (disabled ? 0.4 : 1)};
    cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};

    transition: color 0.2s ease-in-out, opacity 0.2s ease-in-out;

    @media (hover: hover) and (pointer: fine) {
        &:hover {
            color: ${({ theme, isInverted }) =>
                isInverted
                    ? color(theme).primary.invertedHover
                    : color(theme).primary.hover};
        }
    }

    &:focus {
        outline: dotted 2px
            ${({ theme, isInverted }) =>
                isInverted
                    ? color(theme).primary.inverted
                    : color(theme).primary.default};
        outline-offset: 4px;

        color: ${({ theme, isInverted }) =>
            isInverted
                ? color(theme).primary.invertedHover
                : color(theme).primary.hover};
    }

    &:focus:not(:focus-visible) {
        outline: none;
    }
`;

const Control: FC<{
    isInverted?: boolean;
    isDisabled?: boolean;
    ariaLabel?: string;
    className?: string;
    children?: React.ReactNode;
    onClick?: (ev: React.SyntheticEvent<HTMLButtonElement>) => void;
}> = ({
    isInverted,
    isDisabled,
    ariaLabel = 'control',
    onClick,
    className,
    children,
}) => {
    return (
        <View
            isInverted={isInverted}
            disabled={isDisabled}
            aria-label={ariaLabel}
            onClick={onClick}
            className={className}
        >
            {children}
        </View>
    );
};

export default Control;
