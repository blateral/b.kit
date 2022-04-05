import React, { FC } from 'react';
import styled from 'styled-components';

import { getColors as color, spacings } from 'utils/styles';

const Toggle = styled.button<{ isInverted?: boolean }>`
    background: transparent;
    border: none;
    color: ${({ isInverted, theme }) =>
        isInverted
            ? color(theme).new.text.inverted
            : color(theme).new.text.default};

    padding: ${spacings.nudge}px;
    margin-left: -${spacings.nudge}px;

    cursor: pointer;

    transition: color 0.2s ease-in-out;

    @media (hover: hover) and (pointer: fine) {
        &:hover {
            color: ${({ theme, isInverted }) =>
                isInverted
                    ? color(theme).new.primary.invertedHover
                    : color(theme).new.primary.hover};
        }
    }
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
            aria-label="menu"
            onClick={onClick}
            className={className}
        >
            {children}
        </Toggle>
    );
};

export default BarMenuToggle;
