import React, { FC } from 'react';
import styled from 'styled-components';

import Link, { LinkProps } from 'components/typography/Link';
import { spacings, getColors as color } from 'utils/styles';
import { copyStyle } from 'components/typography/Copy';

const View = styled.nav<{ isInverted?: boolean }>`
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

const BarNavList: FC<{
    isInverted?: boolean;
    navLinks?: NavBarNavigationItem[];
    className?: string;
}> = ({ isInverted, navLinks, className }) => {
    return (
        <View isInverted={isInverted} className={className}>
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
        </View>
    );
};

export default BarNavList;
