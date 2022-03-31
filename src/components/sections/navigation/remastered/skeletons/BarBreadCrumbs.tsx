import React, { FC, useMemo } from 'react';
import styled from 'styled-components';

import { NavGroup, NavItem } from '../menu/Menu';
import Link from 'components/typography/Link';
import { spacings, getColors as color } from 'utils/styles';
import Copy, { copyStyle } from 'components/typography/Copy';

const View = styled.nav``;

const List = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;

    & > li + li {
        margin-left: ${spacings.nudge}px;
    }
`;

const ListItem = styled.li`
    display: flex;

    & > * + * {
        margin-left: ${spacings.nudge}px;
    }
`;

const NavLink = styled(Link)<{ isInverted?: boolean }>`
    ${copyStyle('copy', 'small')}
    color: ${({ theme, isInverted }) =>
        isInverted
            ? color(theme).new.text.inverted
            : color(theme).new.text.default};
    text-decoration: none;

    @media (hover: hover) and (pointer: fine) {
        &:hover {
            color: ${({ theme, isInverted }) =>
                isInverted
                    ? color(theme).new.text.inverted
                    : color(theme).new.text.default};

            text-decoration: underline;
        }
    }
`;

// #TODO: Stories erstellen
const BarBreadcrumbs: FC<{
    isInverted?: boolean;
    startItem?: NavItem;
    navItems?: Array<NavGroup>;
    seperator?: (props: { isInverted?: boolean }) => React.ReactNode;
    className?: string;
}> = ({ isInverted = false, startItem, navItems, seperator, className }) => {
    const currentNavPath = useMemo(() => {
        const navList: NavGroup[] = navItems || [];
        const path: Array<NavGroup | NavItem> = [];

        for (let i = 0; i < navList.length; i++) {
            // reset path
            path.length = 0;

            if (navList[i].isCurrent) {
                // check if current nav item is start item
                if (startItem?.link.href !== navList[i].link.href) {
                    path.push(navList[i]);
                }
                return path;
            }

            path.push(navList[i]);

            // check sub nav items
            const subItems = (navList[i] as NavGroup).subItems || [];
            for (let ii = 0; ii < subItems.length; ii++) {
                if (subItems[ii].isCurrent) {
                    // check if current nav item is start item
                    if (startItem?.link.href !== subItems[ii].link.href) {
                        path.push(subItems[ii]);
                    }
                    return path;
                }
            }
        }
        return path;
    }, [navItems, startItem?.link.href]);

    return (
        <View aria-label="breadcrumbs" className={className}>
            <List>
                {startItem?.label && (
                    <ListItem>
                        <NavLink {...startItem.link} isInverted={isInverted}>
                            {startItem?.label}
                        </NavLink>
                    </ListItem>
                )}
                {currentNavPath?.map((item, i) => (
                    <ListItem key={i}>
                        <Copy size="small" isInverted={isInverted}>
                            {seperator ? seperator({ isInverted }) : '/'}
                        </Copy>
                        <NavLink {...item.link} isInverted={isInverted}>
                            {item.label}
                        </NavLink>
                    </ListItem>
                ))}
            </List>
        </View>
    );
};

export default BarBreadcrumbs;
