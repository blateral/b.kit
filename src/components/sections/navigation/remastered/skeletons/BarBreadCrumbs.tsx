import React, { FC } from 'react';
import styled from 'styled-components';

import { NavGroup, NavItem } from '../menu/Menu';
import Link from 'components/typography/Link';
import { spacings } from 'utils/styles';

const View = styled.nav``;

const List = styled.ul`
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;

    & > li + li {
        margin-left: ${spacings.nudge * 2}px;
    }
`;

const ListItem = styled.li``;

const BarBreadcrumbs: FC<{
    isInverted?: boolean;
    startItem?: NavItem;
    navItems?: Array<NavGroup>;
    seperator?: (props: { isInverted?: boolean }) => React.ReactNode;
    className?: string;
}> = ({ isInverted = false, startItem, navItems, seperator, className }) => {
    // const items =
    //     navItems?.reduce<NavItem[]>((acc, current) => {
    //         return acc;
    //     }, []) || [];

    return (
        <View aria-label="breadcrumbs" className={className}>
            <List>
                {startItem?.label && (
                    <ListItem>
                        <Link {...startItem.link}>{startItem?.label}</Link>
                    </ListItem>
                )}
                {navItems?.map((item, i) => (
                    <ListItem key={i}>
                        <Link {...item.link}>{item.label}</Link>
                    </ListItem>
                ))}
            </List>
        </View>
    );
};

export default BarBreadcrumbs;
