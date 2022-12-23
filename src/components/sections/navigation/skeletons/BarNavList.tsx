import React, { FC } from 'react';
import styled from 'styled-components';

import Link from 'components/typography/Link';
import { spacings, getColors as color } from 'utils/styles';
import { copyStyle } from 'components/typography/Copy';
import { NavItem } from '../menu/Menu';

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
                    ? color(theme).text.inverted
                    : color(theme).text.default};

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
        isInverted ? color(theme).text.inverted : color(theme).text.default};
    text-decoration: none;

    @media (hover: hover) and (pointer: fine) {
        &:hover {
            color: ${({ isInverted, theme }) =>
                isInverted
                    ? color(theme).text.inverted
                    : color(theme).text.default};
            text-decoration: underline;
        }
    }
`;

const BarNavList: FC<{
    isInverted?: boolean;
    navLinks?: NavItem[];
    className?: string;
}> = ({ isInverted, navLinks, className }) => {
    return (
        <View isInverted={isInverted} className={className}>
            {navLinks?.map((item, i) => (
                <NavLink
                    key={i}
                    {...item.link}
                    isInverted={isInverted}
                    isActive={item.isCurrent}
                >
                    {item.label}
                </NavLink>
            ))}
        </View>
    );
};

export default BarNavList;
