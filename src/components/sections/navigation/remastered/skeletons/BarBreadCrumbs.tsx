import React, { FC, useMemo } from 'react';
import styled from 'styled-components';

import { NavGroup, NavItem } from '../menu/Menu';
import Link, { LinkProps } from 'components/typography/Link';
import { spacings, getColors as color, mq } from 'utils/styles';
import Copy, { copyStyle } from 'components/typography/Copy';
import AngleLeft from 'components/base/icons/AngleLeft';

const View = styled.nav`
    min-width: 0;
`;

const List = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;
    min-width: inherit;

    @media ${mq.semilarge} {
        & > li + li {
            margin-left: ${spacings.nudge}px;
        }
    }
`;

const ListItem = styled.li<{ isCurrent?: boolean }>`
    display: ${({ isCurrent }) => (isCurrent ? 'flex' : 'none')};
    min-width: inherit;

    & > * + * {
        margin-left: ${spacings.nudge}px;
    }

    @media ${mq.semilarge} {
        display: flex;
    }
`;

const NavLink = styled(Link)<{ isInverted?: boolean; clamp?: boolean }>`
    display: inline-block;
    max-width: ${({ clamp }) => clamp && '120px'};

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    ${copyStyle('copy', 'small')}
    color: ${({ theme, isInverted }) =>
        isInverted
            ? color(theme).new.text.inverted
            : color(theme).new.text.default};
    text-decoration: underline;

    @media (hover: hover) and (pointer: fine) {
        &:hover {
            color: ${({ theme, isInverted }) =>
                isInverted
                    ? color(theme).new.text.inverted
                    : color(theme).new.text.default};
        }
    }
`;

const NavLabel = styled.span<{ isInverted?: boolean; clamp?: boolean }>`
    display: inline-block;
    max-width: ${({ clamp }) => clamp && '120px'};

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    ${copyStyle('copy', 'small')}
    color: ${({ theme, isInverted }) =>
        isInverted
            ? color(theme).new.text.inverted
            : color(theme).new.text.default};
    text-decoration: none;
`;

const Seperator = styled(Copy)<{ isCurrent?: boolean }>`
    display: ${({ isCurrent }) => isCurrent && 'none'};

    transition: color 0.2s ease-in-out;

    @media ${mq.semilarge} {
        display: inline-block;
    }
`;

const BackLink = styled(Link)`
    display: inline-flex;
    align-items: center;
    margin: 0;
    padding: 0 ${spacings.nudge}px;

    ${copyStyle('copy', 'small')}
    color: ${({ theme, isInverted }) =>
        isInverted
            ? color(theme).new.text.inverted
            : color(theme).new.text.default};
    text-decoration: none;

    transition: color 0.2s ease-in-out;

    @media ${mq.semilarge} {
        display: none;
    }
`;

// #TODO: Stories erstellen
const BarBreadcrumbs: FC<{
    isInverted?: boolean;
    rootLink?: LinkProps;
    rootLabel?: string;
    navItems?: Array<NavGroup>;
    seperator?: (props: { isInverted?: boolean }) => React.ReactNode;
    back?: (props: { isInverted?: boolean }) => React.ReactNode;
    className?: string;
}> = ({
    isInverted = false,
    rootLink,
    rootLabel,
    navItems,
    seperator,
    back,
    className,
}) => {
    const currentNavPath = useMemo(() => {
        const navList: NavGroup[] = navItems || [];
        const path: Array<NavGroup | NavItem> = [];
        for (let i = 0; i < navList.length; i++) {
            // reset path
            path.length = 0;

            // check if current nav item is start item
            if (rootLink?.href === navList[i].link.href) {
                continue;
            }

            path.push(navList[i]);

            // check sub nav items
            const subItems = (navList[i] as NavGroup).subItems || [];
            if ((!subItems || subItems.length === 0) && navList[i].isCurrent) {
                return path;
            }

            for (let ii = 0; ii < subItems.length; ii++) {
                if (subItems[ii].isCurrent) {
                    // check if current nav item is start item
                    if (rootLink?.href !== subItems[ii].link.href) {
                        path.push(subItems[ii]);
                    }
                    return path;
                }
            }
        }
        return path;
    }, [navItems, rootLink?.href]);

    return (
        <View aria-label="breadcrumbs" className={className}>
            <List>
                <ListItem>
                    <NavLink {...rootLink} isInverted={isInverted} clamp>
                        {rootLabel || 'Home'}
                    </NavLink>
                </ListItem>

                {currentNavPath?.map((item, i) => {
                    const isCurrent = i === currentNavPath.length - 1;
                    const prev =
                        i - 1 >= 0 ? currentNavPath[i - 1] : { link: rootLink };

                    return (
                        <ListItem key={i} isCurrent={isCurrent}>
                            <Seperator
                                size="small"
                                isInverted={isInverted}
                                isCurrent={isCurrent}
                            >
                                {seperator ? seperator({ isInverted }) : '/'}
                            </Seperator>
                            {isCurrent ? (
                                <>
                                    {prev && (
                                        <BackLink
                                            isInverted={isInverted}
                                            {...prev.link}
                                        >
                                            {back ? (
                                                back({ isInverted })
                                            ) : (
                                                <AngleLeft />
                                            )}
                                        </BackLink>
                                    )}
                                    <NavLabel isInverted={isInverted}>
                                        {item.label}
                                    </NavLabel>
                                </>
                            ) : (
                                <NavLink
                                    {...item.link}
                                    isInverted={isInverted}
                                    clamp
                                >
                                    {item.label}
                                </NavLink>
                            )}
                        </ListItem>
                    );
                })}
            </List>
        </View>
    );
};

export default BarBreadcrumbs;
