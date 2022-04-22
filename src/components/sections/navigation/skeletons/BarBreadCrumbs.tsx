import React, { FC, useMemo } from 'react';
import styled from 'styled-components';

import { NavItem } from '../menu/Menu';
import Link, { LinkProps } from 'components/typography/Link';
import { spacings, getColors as color, mq } from 'utils/styles';
import Copy, { copyStyle } from 'components/typography/Copy';
import AngleLeft from 'components/base/icons/AngleLeft';

export const getCurrentNavPath = (
    items?: NavItem[],
    exludeHrefs?: string[]
) => {
    if (!items || items.length === 0) return [];
    const excludes = exludeHrefs || [];

    const isItemValid = (item: NavItem) => {
        return item.link?.href && !excludes.includes(item.link.href);
    };

    const getPathToCurrent = (item: NavItem): NavItem[] => {
        if (item.isCurrent && isItemValid(item)) return [item];
        if (!item.subItems) return [];

        for (let i = 0; i < item.subItems.length; i++) {
            const subPath = getPathToCurrent(item.subItems[i]);
            if (subPath.length > 0) return [item, ...subPath];
        }

        return [];
    };

    for (let i = 0; i < items.length; i++) {
        const path = getPathToCurrent(items[i]);
        if (path.length > 0) return [...path];
    }

    return [];
};

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

    @media ${mq.semilarge} {
        display: flex;

        & > * + * {
            margin-left: ${spacings.nudge}px;
        }
    }
`;

const NavLink = styled(Link)<{
    isInverted?: boolean;
    clamp?: boolean;
    showOnMobile?: boolean;
    showOnDesktop?: boolean;
}>`
    display: ${({ showOnMobile }) => (showOnMobile ? 'inline-flex' : 'none')};
    align-items: center;
    max-width: ${({ clamp }) => clamp && '120px'};

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    ${copyStyle('copy', 'small')}
    color: ${({ theme, isInverted }) =>
        isInverted ? color(theme).text.inverted : color(theme).text.default};
    text-decoration: underline;

    & > * + * {
        margin-left: ${spacings.nudge}px;
    }

    @media (hover: hover) and (pointer: fine) {
        &:hover {
            color: ${({ theme, isInverted }) =>
                isInverted
                    ? color(theme).text.inverted
                    : color(theme).text.default};
        }
    }

    @media ${mq.semilarge} {
        display: ${({ showOnDesktop }) =>
            showOnDesktop ? 'inline-flex' : 'none'};
    }
`;

const NavLabel = styled.span<{
    isInverted?: boolean;
    clamp?: boolean;
    showOnMobile?: boolean;
    showOnDesktop?: boolean;
}>`
    display: ${({ showOnMobile }) => (showOnMobile ? 'inline-flex' : 'none')};
    align-items: center;
    max-width: ${({ clamp }) => clamp && '120px'};

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    ${copyStyle('copy', 'small')}
    color: ${({ theme, isInverted }) =>
        isInverted ? color(theme).text.inverted : color(theme).text.default};
    text-decoration: none;

    & > * + * {
        margin-left: ${spacings.nudge}px;
    }

    @media ${mq.semilarge} {
        display: ${({ showOnDesktop }) =>
            showOnDesktop ? 'inline-flex' : 'none'};
    }
`;

const Seperator = styled(Copy)`
    display: none;

    transition: color 0.2s ease-in-out;

    @media ${mq.semilarge} {
        display: inline-block;
    }
`;

const BreadcrumbItem: FC<
    NavItem & {
        isInverted?: boolean;
        showOnMobile?: boolean;
        showOnDesktop?: boolean;
    }
> = ({ isInverted, label, link, showOnMobile, showOnDesktop, children }) => {
    if (link?.href) {
        return (
            <NavLink
                {...link}
                isInverted={isInverted}
                showOnMobile={showOnMobile}
                showOnDesktop={showOnDesktop}
            >
                {children || label}
            </NavLink>
        );
    } else {
        return (
            <NavLabel
                isInverted={isInverted}
                showOnMobile={showOnMobile}
                showOnDesktop={showOnDesktop}
            >
                {children || label}
            </NavLabel>
        );
    }
};

const BarBreadcrumbs: FC<{
    isInverted?: boolean;
    rootLink?: LinkProps;
    rootLabel?: string;
    navItems?: Array<NavItem>;
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
        return getCurrentNavPath(
            navItems,
            rootLink?.href ? [rootLink?.href] : []
        );
    }, [navItems, rootLink?.href]);

    const rootItem: NavItem = {
        label: rootLabel || 'Home',
        link: rootLink,
    };

    return (
        <View aria-label="breadcrumbs" className={className}>
            <List>
                <ListItem>
                    <BreadcrumbItem
                        showOnDesktop
                        isInverted={isInverted}
                        {...rootItem}
                    />
                </ListItem>

                {currentNavPath?.map((item, i) => {
                    const isCurrent = i === currentNavPath.length - 1;
                    const prev = i - 1 >= 0 ? currentNavPath[i - 1] : rootItem;

                    return (
                        <ListItem key={i} isCurrent={isCurrent}>
                            <Seperator size="small" isInverted={isInverted}>
                                {seperator ? seperator({ isInverted }) : '/'}
                            </Seperator>
                            {isCurrent ? (
                                <>
                                    {prev && (
                                        <BreadcrumbItem
                                            {...prev}
                                            showOnMobile
                                            isInverted={isInverted}
                                        >
                                            <span>
                                                {back ? (
                                                    back({ isInverted })
                                                ) : (
                                                    <AngleLeft />
                                                )}
                                            </span>
                                            <span>{prev.label}</span>
                                        </BreadcrumbItem>
                                    )}
                                    {/* {prev && (
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
                                    )} */}
                                    <BreadcrumbItem
                                        {...item}
                                        link={{}}
                                        showOnDesktop
                                        isInverted={isInverted}
                                    />
                                </>
                            ) : (
                                <BreadcrumbItem
                                    {...item}
                                    showOnDesktop
                                    isInverted={isInverted}
                                />
                            )}
                        </ListItem>
                    );
                })}
            </List>
        </View>
    );
};

export default BarBreadcrumbs;
