import React, { FC } from 'react';
import styled from 'styled-components';

import { getColors as color, spacings } from 'utils/styles';

const Toggle = styled.button<{ isInverted?: boolean }>`
    background: transparent;
    border: none;
    color: ${({ isInverted, theme }) =>
        isInverted ? color(theme).text.inverted : color(theme).text.default};

    padding: ${spacings.nudge}px;
    margin-left: -${spacings.nudge}px;
    outline: none;

    cursor: pointer;

    transition: color 0.2s ease-in-out;

    @media (hover: hover) and (pointer: fine) {
        &:hover {
            color: ${({ theme, isInverted }) =>
                isInverted
                    ? color(theme).primary.invertedHover
                    : color(theme).primary.hover};
        }
    }

    &:focus > * {
        outline: solid 2px
            ${({ theme, isInverted }) =>
                isInverted
                    ? color(theme).primary.inverted
                    : color(theme).primary.default};
        outline-offset: 4px;
    }

    /* &:focus:not(:focus-visible) > * {
        outline: none;
    } */
`;

const BarMenuToggle: FC<{
    isInverted?: boolean;
    isExpanded?: boolean;
    onClick?: (ev?: React.SyntheticEvent<HTMLButtonElement>) => void;
    className?: string;
}> = ({ isInverted, isExpanded = false, onClick, children, className }) => {
    return (
        <Toggle
            isInverted={isInverted}
            aria-expanded={isExpanded}
            aria-label={isExpanded ? 'close menu' : 'open menu'}
            aria-haspopup="true"
            aria-controls="mainMenu"
            onClick={onClick}
            className={className}
        >
            {children}
        </Toggle>
    );
};

export default BarMenuToggle;
