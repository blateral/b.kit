import AngleRight from 'components/base/icons/AngleRight';
import { copyStyle } from 'components/typography/Copy';
import Link from 'components/typography/Link';
import React, { FC, useState, useMemo } from 'react';
import styled, { DefaultTheme } from 'styled-components';
import { clampValue } from 'utils/clamp';
import { useLibTheme } from 'utils/LibThemeProvider';
import {
    mq,
    spacings,
    getColors as color,
    getFonts as font,
    getGlobals as global,
} from 'utils/styles';
import { NavBarSize } from '../../NavBar';
import MenuHeader from '../../partials/MenuHeader';
import { MenuBaseProps } from '../Menu';

const Backdrop = styled.div<{ isOpen?: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
    pointer-events: ${({ isOpen }) => (isOpen ? 'all' : 'none')};
    z-index: 101;

    transition: opacity 0.3s ease-in-out;

    @supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
        backdrop-filter: grayscale(1);
    }
`;

const Stage = styled.div<{ isOpen?: boolean; clampWidth?: 'content' | 'full' }>`
    position: fixed;
    top: 0;
    left: ${({ isOpen }) => (isOpen ? '50%' : '0px')};
    height: 100vh;
    width: 100vw;
    max-width: ${({ clampWidth }) =>
        clampWidth === 'content' ? spacings.wrapper : spacings.wrapperLarge}px;
    pointer-events: none;

    z-index: 102;

    transform: translate(${({ isOpen }) => (isOpen ? '-50%' : '-100%')}, 0px);

    transition: transform 0.4s ease-in-out, left 0.4s ease-in-out;
    will-change: transform;
`;

const Flyout = styled.div<{ isOpen?: boolean }>`
    display: flex;
    flex-direction: column;

    position: relative;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => color(theme).new.elementBg.light};

    pointer-events: ${({ isOpen }) => (isOpen ? 'all' : 'none')};

    @media ${mq.medium} {
        width: 384px;
    }

    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 2px;
        height: 100%;
        width: 40vw;
        background-color: ${({ theme }) => color(theme).new.elementBg.light};
        z-index: -1;

        transform: translateX(-100%);
    }
`;

export const getMenuHeaderHeights = (
    theme: DefaultTheme,
    size?: NavBarSize
): [number, number] => {
    const heights =
        size === 'large'
            ? global(theme).navigation.menu.headerHeight.large
            : global(theme).navigation.menu.headerHeight.small;

    // if second value is not defined use first array index value for both
    return [
        clampValue(heights[0], 0),
        clampValue(heights?.[1] === undefined ? heights[0] : heights[1], 0),
    ];
};

export const hasMenuHeader = (theme: DefaultTheme) => {
    const largeHeights = getMenuHeaderHeights(theme, 'large');
    const smallHeights = getMenuHeaderHeights(theme, 'small');

    return (
        largeHeights[0] > 0 ||
        largeHeights[1] > 0 ||
        smallHeights[0] > 0 ||
        smallHeights[1] > 0
    );
};

const Header = styled.div<{ navBarSize?: NavBarSize }>`
    flex: 0 0
        ${({ theme, navBarSize }) =>
            getMenuHeaderHeights(theme, navBarSize)[0]}px;
    height: ${({ theme, navBarSize }) =>
        getMenuHeaderHeights(theme, navBarSize)[0]}px;

    @media ${mq.semilarge} {
        height: ${({ theme, navBarSize }) =>
            getMenuHeaderHeights(theme, navBarSize)[1]}px;
    }
`;

const ScrollContainer = styled.div`
    display: block;
    max-height: 100%;
    min-height: 0;
`;

const ScrollArea = styled.div`
    display: block;
    width: 100vw;
    max-height: 100%;
    overflow: auto;
    -ms-overflow-style: none; /* for Internet Explorer, Edge */
    scrollbar-width: none; /* for Firefox */
    overflow-y: scroll;

    &::-webkit-scrollbar {
        display: none; /* for Chrome, Safari, and Opera */
    }

    @media ${mq.medium} {
        max-width: 384px;
    }
`;

const Nav = styled.nav``;

const NavList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
`;

const MainNavItem = styled.li<{ isActive?: boolean }>`
    flex: 0 0 80px;

    height: 100%;
    background-color: ${({ theme, isActive }) =>
        isActive
            ? color(theme).new.elementBg.medium
            : color(theme).new.elementBg.light};

    transition: background-color 0.2s ease-in-out;

    li + &:not([data-featured='true']) {
        border-top: solid 2px
            ${({ theme }) => color(theme).new.elementBg.medium};
    }

    &[data-featured='true']:first-child {
        margin-top: ${spacings.spacer}px;
    }

    li[data-featured='true'] + &:not([data-featured='true']) {
        margin-top: ${spacings.spacer}px;
    }

    &:not([data-featured='true']):first-child {
        border-top: solid 2px
            ${({ theme }) => color(theme).new.elementBg.medium};
    }

    &:last-child {
        border-bottom: solid 2px
            ${({ theme }) => color(theme).new.elementBg.medium};
    }

    @media ${mq.semilarge} {
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
    }

    @media (hover: hover) and (pointer: fine) {
        &:hover {
            background-color: ${({ theme }) =>
                color(theme).new.elementBg.medium};
        }
    }

    &:focus-within {
        background-color: ${({ theme }) => color(theme).new.elementBg.medium};
    }
`;

const MainNavLabel = styled.span<{ isCurrent?: boolean }>`
    display: flex;
    align-items: center;
    position: relative;
    min-height: 80px;

    padding: 0 ${spacings.nudge * 2}px;

    ${copyStyle('copy-b', 'medium')}
    color: ${({ theme }) => font(theme)['copy-b'].medium.color};
    text-decoration: ${({ isCurrent }) => (isCurrent ? 'underline' : 'none')};
`;

const Icon = styled.span`
    display: block;
    width: 48px;
    max-width: 48px;

    * {
        width: 100%;
        max-width: 48px;
    }
`;

const Label = styled.span`
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    &:not(:first-child) {
        margin-left: ${spacings.nudge * 2}px;
    }
`;

const CollapseIconContainer = styled.span`
    display: block;
    margin-left: auto;
    padding-left: ${spacings.nudge * 3}px;
`;

const CollapseIcon = styled(AngleRight)<{ isCollapsed?: boolean }>`
    transform: ${({ isCollapsed }) => !isCollapsed && 'rotate(90deg)'};

    transition: transform 0.2s ease-in-out;

    @media ${mq.semilarge} {
        transform: rotate(0deg);
    }
`;

const NavLink = styled(Link)`
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    outline: none;
`;

const NavButton = styled.button`
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    background: none;
    border: none;
    border-bottom: solid 2px ${({ theme }) => color(theme).new.elementBg.light};
    width: 100%;
    cursor: pointer;
    outline: none;
    border-radius: 0px;

    @media ${mq.semilarge} {
        border-bottom: none;
    }
`;

const SubNavList = styled.ul<{ isActive?: boolean; hasIcons?: boolean }>`
    display: ${({ isActive }) => !isActive && 'none'};
    position: relative;
    margin: 0;
    padding: 0;
    padding-left: ${({ hasIcons }) =>
        hasIcons ? 48 + spacings.nudge * 4 : spacings.nudge * 2}px;
    padding-right: ${spacings.nudge * 2}px;
    list-style: none;

    max-height: 100%;
    overflow: auto;
    -ms-overflow-style: none; /* for Internet Explorer, Edge */
    scrollbar-width: none; /* for Firefox */
    overflow-y: scroll;

    &::-webkit-scrollbar {
        display: none; /* for Chrome, Safari, and Opera */
    }

    background-color: ${({ theme }) => color(theme).new.elementBg.medium};

    @media ${mq.semilarge} {
        position: absolute;
        top: 0;
        left: calc(100% - 1px);
        width: 100vw;
        height: 100%;
        max-width: 384px;
        padding-left: ${spacings.nudge * 3}px;
    }
`;

const SubNavItem = styled.li<{ navBarSize?: NavBarSize }>`
    display: flex;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;
    height: 56px;

    ${copyStyle('copy-b', 'medium')}
    color: ${({ theme }) => font(theme)['copy-b'].medium.color};

    @media ${mq.semilarge} {
        &:first-child {
            margin-top: ${({ theme, navBarSize }) =>
                getMenuHeaderHeights(theme, navBarSize)[1]}px;
        }

        &:last-child {
            margin-bottom: ${spacings.spacer}px;
        }
    }
`;

const SubNavLink = styled(Link)<{ isCurrent?: boolean }>`
    width: 100%;
    padding: ${spacings.nudge}px 0;
    outline-color: ${({ theme }) => color(theme).new.primary.default};
    vertical-align: middle;

    ${copyStyle('copy-b', 'medium')}
    color: ${({ theme }) => font(theme)['copy-b'].medium.color};
    text-decoration: ${({ isCurrent }) => (isCurrent ? 'underline' : 'none')};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const SecondaryNavList = styled.ul`
    display: block;
    list-style: none;
    padding: 0 ${spacings.nudge * 2}px;
    margin: ${spacings.spacer}px 0;

    li {
        display: flex;
        margin: 0;
        padding; 0;
    }
`;

const SecondaryNavLink = styled(Link)<{ isCurrent?: boolean }>`
    display: inline-block;
    padding: ${spacings.nudge * 0.5}px 0;
    outline-color: ${({ theme }) => color(theme).new.primary.default};
    vertical-align: middle;

    ${copyStyle('copy', 'medium')}
    color: ${({ theme }) => font(theme)['copy-b'].medium.color};
    text-decoration: ${({ isCurrent }) => (isCurrent ? 'underline' : 'none')};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export interface FlyoutMenuProps {
    type: 'flyout';
    collapseIcon?: (props: { isCollapsed?: boolean }) => React.ReactNode;
    topSubNavLabel?: string;
}

const MenuFlyout: FC<MenuBaseProps & FlyoutMenuProps> = ({
    isOpen,
    clampWidth,
    isIndexPage,
    mainNavigation,
    subNavigation,
    navBarSize,
    topSubNavLabel,
    header,
    footer,
    onClose,
    collapseIcon,
}) => {
    const { theme } = useLibTheme();
    const mainList = useMemo(() => {
        const featured = mainNavigation?.filter((n) => n.isFeatured) || [];
        const main = mainNavigation?.filter((n) => !n.isFeatured) || [];

        return [...featured, ...main];
    }, [mainNavigation]);

    const [activeItem, setActiveItem] = useState<number | null>(() => {
        const currentNavIndex =
            mainNavigation?.findIndex((item) => {
                if (item.isCurrent) return true;
                return item.subItems
                    ? item.subItems.findIndex(
                          (subItem) => subItem.isCurrent
                      ) !== -1
                    : false;
            }) || -1;
        return currentNavIndex >= 0 ? currentNavIndex : null;
    });

    const hasIcons = useMemo(() => {
        return !!mainNavigation?.find((item) => item.icon);
    }, [mainNavigation]);

    const hasHeader = useMemo(() => hasMenuHeader(theme), [theme]);

    return (
        <React.Fragment>
            <Backdrop isOpen={isOpen} onClick={onClose} />
            <Stage isOpen={isOpen} clampWidth={clampWidth}>
                <Flyout isOpen={isOpen}>
                    {hasHeader && (
                        <Header navBarSize={navBarSize}>
                            {header ? (
                                header({
                                    isOpen,
                                    mainNavigation,
                                    subNavigation,
                                    isIndexPage,
                                    navBarSize,
                                })
                            ) : (
                                <MenuHeader
                                    menuStates={{
                                        isOpen,
                                        mainNavigation,
                                        subNavigation,
                                        isIndexPage,
                                        navBarSize,
                                    }}
                                />
                            )}
                        </Header>
                    )}
                    <ScrollContainer>
                        <ScrollArea>
                            <Nav aria-label="menu">
                                <NavList>
                                    {mainList?.map((navItem, i) => {
                                        const hasSubItems =
                                            navItem.subItems &&
                                            navItem.subItems.length > 0;

                                        const hasCurrentSubItem =
                                            navItem?.subItems
                                                ? navItem.subItems.findIndex(
                                                      (item) => item.isCurrent
                                                  ) >= 0
                                                : false;

                                        const isActiveItem = activeItem === i;

                                        return (
                                            <MainNavItem
                                                key={i}
                                                isActive={isActiveItem}
                                                data-featured={
                                                    navItem.isFeatured
                                                }
                                            >
                                                <MainNavLabel
                                                    isCurrent={
                                                        navItem.isCurrent ||
                                                        hasCurrentSubItem
                                                    }
                                                >
                                                    {hasIcons && (
                                                        <Icon>
                                                            {navItem.icon}
                                                        </Icon>
                                                    )}
                                                    {navItem.label && (
                                                        <Label>
                                                            {navItem.label}
                                                        </Label>
                                                    )}
                                                    {hasSubItems && (
                                                        <CollapseIconContainer>
                                                            {collapseIcon ? (
                                                                collapseIcon({
                                                                    isCollapsed:
                                                                        !isActiveItem,
                                                                })
                                                            ) : (
                                                                <CollapseIcon
                                                                    isCollapsed={
                                                                        !isActiveItem
                                                                    }
                                                                />
                                                            )}
                                                        </CollapseIconContainer>
                                                    )}
                                                    {!hasSubItems &&
                                                        navItem.link.href && (
                                                            <NavLink
                                                                {...navItem.link}
                                                                ariaLabel={
                                                                    navItem.label
                                                                }
                                                            />
                                                        )}
                                                    {hasSubItems && (
                                                        <React.Fragment>
                                                            <NavButton
                                                                aria-label={
                                                                    navItem.label
                                                                }
                                                                aria-expanded={
                                                                    isActiveItem
                                                                }
                                                                onClick={() =>
                                                                    setActiveItem(
                                                                        i
                                                                    )
                                                                }
                                                            />
                                                        </React.Fragment>
                                                    )}
                                                </MainNavLabel>

                                                {hasSubItems && (
                                                    <SubNavList
                                                        isActive={
                                                            activeItem === i &&
                                                            hasSubItems
                                                        }
                                                        hasIcons={hasIcons}
                                                    >
                                                        {navItem?.link
                                                            ?.href && (
                                                            <SubNavItem
                                                                key={`navItem_${i}_overview`}
                                                                navBarSize={
                                                                    navBarSize
                                                                }
                                                            >
                                                                <SubNavLink
                                                                    isCurrent={
                                                                        navItem.isCurrent
                                                                    }
                                                                    {...navItem.link}
                                                                >
                                                                    {topSubNavLabel ||
                                                                        'Overview'}
                                                                </SubNavLink>
                                                            </SubNavItem>
                                                        )}

                                                        {navItem?.subItems?.map(
                                                            (
                                                                subNavItem,
                                                                ii
                                                            ) => (
                                                                <SubNavItem
                                                                    key={ii}
                                                                    navBarSize={
                                                                        navBarSize
                                                                    }
                                                                >
                                                                    <SubNavLink
                                                                        isCurrent={
                                                                            subNavItem.isCurrent
                                                                        }
                                                                        {...subNavItem.link}
                                                                    >
                                                                        {
                                                                            subNavItem.label
                                                                        }
                                                                    </SubNavLink>
                                                                </SubNavItem>
                                                            )
                                                        )}
                                                    </SubNavList>
                                                )}
                                            </MainNavItem>
                                        );
                                    })}
                                </NavList>
                                <SecondaryNavList>
                                    {subNavigation?.map((navItem, i) => (
                                        <li key={i}>
                                            <SecondaryNavLink
                                                isCurrent={navItem.isCurrent}
                                                href={navItem.link.href}
                                            >
                                                {navItem.label}
                                            </SecondaryNavLink>
                                        </li>
                                    ))}
                                </SecondaryNavList>
                            </Nav>
                            {footer
                                ? footer({
                                      isOpen,
                                      mainNavigation,
                                      subNavigation,
                                      isIndexPage,
                                  })
                                : ''}
                        </ScrollArea>
                    </ScrollContainer>
                </Flyout>
            </Stage>
        </React.Fragment>
    );
};

export default MenuFlyout;
