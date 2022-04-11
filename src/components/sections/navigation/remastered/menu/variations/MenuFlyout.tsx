import AngleRight from 'components/base/icons/AngleRight';
import { copyStyle } from 'components/typography/Copy';
import Link from 'components/typography/Link';
import React, { FC, useState } from 'react';
import styled from 'styled-components';
import {
    mq,
    spacings,
    getColors as color,
    getFonts as font,
} from 'utils/styles';
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

const NavContainer = styled.nav`
    /* position: relative; */
    display: block;
    max-height: 100%;
    min-height: 0;

    /* overflow: auto; */
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
            ? color(theme).new.sectionBg.medium
            : color(theme).new.sectionBg.light};

    border: solid 2px transparent;

    transition: background-color 0.2s ease-in-out;

    &:nth-child(even) {
        border-top: solid 2px
            ${({ theme }) => color(theme).new.sectionBg.medium};
        border-bottom: solid 2px
            ${({ theme }) => color(theme).new.sectionBg.medium};
    }

    &:last-child {
        border-bottom: solid 2px
            ${({ theme }) => color(theme).new.sectionBg.medium};
    }

    &:first-child {
        border-top: solid 2px
            ${({ theme }) => color(theme).new.sectionBg.medium};
    }

    @media ${mq.semilarge} {
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
    }

    @media (hover: hover) and (pointer: fine) {
        &:hover {
            background-color: ${({ theme }) =>
                color(theme).new.sectionBg.medium};
        }
    }

    &:focus-within {
        background-color: ${({ theme }) => color(theme).new.sectionBg.medium};
        border: solid 2px ${({ theme }) => color(theme).new.primary.default};
    }
`;

const MainNavLabel = styled.span<{ isCurrent?: boolean }>`
    display: flex;
    align-items: center;
    position: relative;
    min-height: 80px;
    text-transform: ${({ isCurrent }) => isCurrent && 'underline'};

    padding: 0 ${spacings.nudge * 2}px;

    ${copyStyle('copy-b', 'medium')}
    color: ${({ theme }) => font(theme)['copy-b'].medium.color};
`;

const NavCollapseIcon = styled(AngleRight)`
    margin-left: auto;
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
    width: 100%;
    cursor: pointer;
    outline: none;
`;

const SubNavList = styled.ul<{ isActive?: boolean }>`
    display: ${({ isActive }) => !isActive && 'none'};
    position: relative;
    margin: 0;
    padding: 0;
    padding-left: ${spacings.nudge * 3}px;
    list-style: none;

    max-height: 100%;
    overflow: auto;

    background-color: ${({ theme }) => color(theme).new.sectionBg.medium};

    @media ${mq.semilarge} {
        position: absolute;
        top: 0;
        left: 100%;
        width: 100vw;
        height: 100%;
        max-width: 384px;
    }
`;

const SubNavItem = styled.li`
    display: block;
    padding: ${spacings.nudge * 2}px;

    ${copyStyle('copy-b', 'medium')}
    color: ${({ theme }) => font(theme)['copy-b'].medium.color};

    @media ${mq.semilarge} {
        &:first-child {
            margin-top: 80px;
        }
    }
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
    header,
    footer,
    onClose,
}) => {
    const [activeItem, setActiveItem] = useState<number | null>(0);

    return (
        <React.Fragment>
            <Backdrop isOpen={isOpen} onClick={onClose} />
            <Stage isOpen={isOpen} clampWidth={clampWidth}>
                <Flyout isOpen={isOpen}>
                    {header
                        ? header({
                              isOpen,
                              mainNavigation,
                              subNavigation,
                              isIndexPage,
                          })
                        : ''}
                    <NavContainer aria-label="menu">
                        <NavList>
                            {mainNavigation?.map((navItem, i) => {
                                const hasSubItems =
                                    navItem.subItems &&
                                    navItem.subItems.length > 0;

                                return (
                                    <MainNavItem
                                        key={i}
                                        isActive={activeItem === i}
                                    >
                                        <MainNavLabel
                                            isCurrent={navItem.isCurrent}
                                        >
                                            {navItem.label}
                                            {!hasSubItems &&
                                                navItem.link.href && (
                                                    <NavLink
                                                        href={navItem.link.href}
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
                                                        onClick={() =>
                                                            setActiveItem(i)
                                                        }
                                                    />
                                                    <NavCollapseIcon />
                                                </React.Fragment>
                                            )}
                                        </MainNavLabel>

                                        <SubNavList
                                            isActive={
                                                activeItem === i && hasSubItems
                                            }
                                        >
                                            {navItem?.subItems?.map(
                                                (subNavItem, ii) => (
                                                    <SubNavItem key={ii}>
                                                        <a
                                                            href={
                                                                subNavItem.link
                                                                    .href
                                                            }
                                                        >
                                                            {subNavItem.label}
                                                        </a>
                                                    </SubNavItem>
                                                )
                                            )}
                                        </SubNavList>
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
