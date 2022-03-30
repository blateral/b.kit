import React from 'react';
import styled from 'styled-components';

import { spacings, getColors as color } from 'utils/styles';
import { FC } from 'react';
import Link, { LinkProps } from 'components/typography/Link';
import { copyStyle } from 'components/typography/Copy';

const Column = styled.div<{
    isInverted?: boolean;
    takeSpace?: boolean;
    vAlign?: 'top' | 'center' | 'bottom';
}>`
    flex: ${({ takeSpace }) => (takeSpace ? 1 : undefined)};

    padding: ${spacings.nudge}px 0;
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

    text-align: center;
    color: ${({ theme, isInverted }) =>
        isInverted
            ? color(theme).new.text.inverted
            : color(theme).new.text.inverted};

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
    className?: string;
}> = ({ src, alt, className }) => {
    return <Logo src={src} alt={alt || ''} className={className} />;
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
    className?: string;
}> = ({ isInverted, isExpanded = false, onClick, children, className }) => {
    return (
        <Toggle
            isInverted={isInverted}
            aria-expanded={isExpanded}
            onClick={onClick}
            className={className}
        >
            {children}
        </Toggle>
    );
};

const NavListView = styled.nav<{ isInverted?: boolean }>`
    display: inline-flex;
    align-items: center;

    margin: 0 -${spacings.nudge}px;

    & > * + * {
        &:before {
            content: '';
            display: block;
            position: absolute;
            top: 3px;
            left: 0;
            height: 1em;
            width: 2px;
            background-color: ${({ isInverted, theme }) =>
                isInverted
                    ? color(theme).new.text.inverted
                    : color(theme).new.text.default};

            transition: background-color 0.2s ease-in-out;
        }
    }
`;

const NavLink = styled(Link)<{ isInverted?: boolean; isActive?: boolean }>`
    display: inline-block;
    position: relative;
    padding: 0 ${spacings.nudge}px;

    ${copyStyle('copy', 'medium')}
    font-weight: ${({ isActive }) => isActive && '700'};

    color: ${({ isInverted, theme }) =>
        isInverted
            ? color(theme).new.text.inverted
            : color(theme).new.text.default};
    text-decoration: none;

    @media (hover: hover) and (pointer: fine) {
        &:hover {
            color: ${({ isInverted, theme }) =>
                isInverted
                    ? color(theme).new.text.inverted
                    : color(theme).new.text.default};
            text-decoration: underline;
        }
    }
`;

export interface NavBarNavigationItem {
    label: string;
    isActive?: boolean;
    link: LinkProps;
}

const NavList: FC<{
    isInverted?: boolean;
    navLinks?: NavBarNavigationItem[];
    className?: string;
}> = ({ isInverted, navLinks, className }) => {
    return (
        <NavListView isInverted={isInverted} className={className}>
            {navLinks?.map((item, i) => (
                <NavLink
                    key={i}
                    {...item.link}
                    isInverted={isInverted}
                    isActive={item.isActive}
                >
                    {item.label}
                </NavLink>
            ))}
        </NavListView>
    );
};

export default {
    Col: Column,
    Logo: NavLogo,
    Toggle: NavToggle,
    Nav: NavList,
};
