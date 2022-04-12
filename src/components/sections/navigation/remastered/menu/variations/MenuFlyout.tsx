import AngleRight from 'components/base/icons/AngleRight';
import { copyStyle } from 'components/typography/Copy';
import Link from 'components/typography/Link';
import React, { FC, useState } from 'react';
import styled, { DefaultTheme } from 'styled-components';
import { clampValue } from 'utils/clamp';
import {
    mq,
    spacings,
    getColors as color,
    getFonts as font,
    getGlobals as global,
} from 'utils/styles';
import { NavBarSize } from '../../NavBar';
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

const Header = styled.div<{ navBarSize?: NavBarSize }>`
    height: ${({ theme, navBarSize }) =>
        getMenuHeaderHeights(theme, navBarSize)[0]}px;

    @media ${mq.semilarge} {
        height: ${({ theme, navBarSize }) =>
            getMenuHeaderHeights(theme, navBarSize)[1]}px;
    }
`;

const NavContainer = styled.nav`
    display: block;
    max-height: 100%;
    min-height: 0;
`;

const NavList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    width: 100vw;
    max-height: 100%;
    overflow: auto;

    @media ${mq.medium} {
        max-width: 384px;
    }
`;

const MainNavItem = styled.li<{ isActive?: boolean }>`
    flex: 0 0 80px;

    height: 100%;
    background-color: ${({ theme, isActive }) =>
        isActive
            ? color(theme).new.elementBg.medium
            : color(theme).new.elementBg.light};

    transition: background-color 0.2s ease-in-out;

    li + & {
        border-top: solid 2px
            ${({ theme }) => color(theme).new.elementBg.medium};
    }

    &:last-child {
        border-bottom: solid 2px
            ${({ theme }) => color(theme).new.elementBg.medium};
    }

    &:first-child {
        border-top: solid 2px
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

    &:not(:first-child) {
        margin-left: ${spacings.nudge * 3}px;
    }
`;

const Label = styled.span`
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    &:not(:first-child) {
        margin-left: ${spacings.nudge * 3}px;
    }
`;

const CollapseIcon = styled.span`
    display: block;
    margin-left: auto;
    padding-left: ${spacings.nudge * 3}px;
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

const SubNavList = styled.ul<{ isActive?: boolean }>`
    display: ${({ isActive }) => !isActive && 'none'};
    position: relative;
    margin: 0;
    padding: 0;
    padding-left: ${spacings.nudge * 3}px;
    padding-right: ${spacings.nudge * 2}px;
    list-style: none;

    max-height: 100%;
    overflow: auto;

    background-color: ${({ theme }) => color(theme).new.elementBg.medium};

    @media ${mq.semilarge} {
        position: absolute;
        top: 0;
        left: calc(100% - 1px);
        width: 100vw;
        height: 100%;
        max-width: 384px;
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
    }
`;

const SubNavLink = styled(Link)<{ isCurrent?: boolean }>`
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

export interface FlyoutMenuProps {
    type: 'flyout';
}

const MenuFlyout: FC<MenuBaseProps & FlyoutMenuProps> = ({
    isOpen,
    clampWidth,
    isIndexPage,
    mainNavigation,
    subNavigation,
    navBarSize,
    header,
    footer,
    onClose,
}) => {
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

    return (
        <React.Fragment>
            <Backdrop isOpen={isOpen} onClick={onClose} />
            <Stage isOpen={isOpen} clampWidth={clampWidth}>
                <Flyout isOpen={isOpen}>
                    <Header navBarSize={navBarSize}>
                        {header
                            ? header({
                                  isOpen,
                                  mainNavigation,
                                  subNavigation,
                                  isIndexPage,
                                  navBarSize,
                              })
                            : ''}
                    </Header>
                    <NavContainer aria-label="menu">
                        <NavList>
                            {mainNavigation?.map((navItem, i) => {
                                const hasSubItems =
                                    navItem.subItems &&
                                    navItem.subItems.length > 0;

                                const hasCurrentSubItem = navItem?.subItems
                                    ? navItem.subItems.findIndex(
                                          (item) => item.isCurrent
                                      ) >= 0
                                    : false;

                                return (
                                    <MainNavItem
                                        key={i}
                                        isActive={activeItem === i}
                                    >
                                        <MainNavLabel
                                            isCurrent={
                                                navItem.isCurrent ||
                                                hasCurrentSubItem
                                            }
                                        >
                                            <Icon>icon</Icon>
                                            {navItem.label && (
                                                <Label>{navItem.label}</Label>
                                            )}
                                            {hasSubItems && (
                                                <CollapseIcon>
                                                    <AngleRight />
                                                </CollapseIcon>
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
                                                            activeItem === i
                                                        }
                                                        onClick={() =>
                                                            setActiveItem(i)
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
                                            >
                                                {navItem?.subItems?.map(
                                                    (subNavItem, ii) => (
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
                        {/* <ul>
                            {subNavigation?.map((navItem, i) => (
                                <li key={i}>
                                    <a href={navItem.link.href}>
                                        {navItem.label}
                                    </a>
                                </li>
                            ))}
                        </ul> */}
                    </NavContainer>
                    {footer
                        ? footer({
                              isOpen,
                              mainNavigation,
                              subNavigation,
                              isIndexPage,
                          })
                        : ''}
                </Flyout>
            </Stage>
        </React.Fragment>
    );
};

export default MenuFlyout;
