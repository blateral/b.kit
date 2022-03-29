import React from 'react';
import styled from 'styled-components';

import Copy from 'components/typography/Copy';
import { spacings, getColors as color } from 'utils/styles';
import { FC } from 'react';

const Column = styled(Copy)<{
    takeSpace?: boolean;
    vAlign?: 'top' | 'center' | 'bottom';
}>`
    text-align: center;
    min-width: -webkit-min-content;
    align-self: ${({ vAlign }) => {
        switch (vAlign) {
            case 'center':
                return 'center';

            case 'bottom':
                return 'flex-end';

            case 'top':
                return 'flex-start';

            default:
                return undefined;
        }
    }};

    flex: ${({ takeSpace }) => (takeSpace ? 1 : undefined)};

    &:first-child {
        text-align: left;
    }

    &:last-child {
        text-align: right;
    }

    &:not(:first-child):not(:last-child) {
        margin: 0 ${spacings.nudge * 2}px;
    }
`;

const Logo = styled.img`
    max-width: 100%;
    height: 100%;
    object-fit: contain;
`;

const NavLogo: FC<{
    src?: string;
    alt?: string;
}> = ({ src, alt }) => {
    return <Logo src={src} alt={alt || ''} />;
};

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

const NavToggle: FC<{
    isInverted?: boolean;
    isExpanded?: boolean;
    onClick?: (ev?: React.SyntheticEvent<HTMLButtonElement>) => void;
}> = ({ isInverted, isExpanded = false, onClick, children }) => {
    return (
        <Toggle
            isInverted={isInverted}
            aria-expanded={isExpanded}
            onClick={onClick}
        >
            {children}
        </Toggle>
    );
};

export default {
    Col: Column,
    Logo: NavLogo,
    Toggle: NavToggle,
};
