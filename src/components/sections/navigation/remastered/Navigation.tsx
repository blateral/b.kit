import React, { FC, useEffect, useMemo, useState } from 'react';
import {
    LibThemeProvider,
    ThemeMods,
    useLibTheme,
} from 'utils/LibThemeProvider';
import { useMediaQueries } from 'utils/useMediaQuery';
// import styled from 'styled-components';
import usePageScroll, { PageScrollDirection } from 'utils/usePageScroll';
import Menu, {
    MenuStates,
    MenuTypeProps,
    NavGroup,
    NavItem,
} from './menu/Menu';

import NavBar, { getFullHeight, NavBarSize, BarStates } from './NavBar';

export interface NavBarStates extends BarStates {
    isMenuOpen?: boolean;
    openMenu?: () => void;
    closeMenu?: () => void;
    mainNavigation?: Array<NavGroup>;
    subNavigation?: Array<NavItem>;
}

export interface NavMenuStates extends MenuStates {
    isMenuOpen?: boolean;
    openMenu?: () => void;
    closeMenu?: () => void;
    navBarSize?: NavBarSize;
}

export interface NavBarSettings {
    isStickable?: boolean;
    isCollapsible?: boolean;
    pageFlow?: 'overContent' | 'beforeContent';

    topBg?: string;
    mainBg?: string;
    bottomBg?: string;
    /** Custom background value for NavBar with pageFlow === overContent and large size  */
    onContentBg?: string;

    topBar?: ((props: NavBarStates) => React.ReactNode) | null;
    mainBar?: ((props: NavBarStates) => React.ReactNode) | null;
    bottomBar?: ((props: NavBarStates) => React.ReactNode) | null;
    theme?: ThemeMods;
}

export interface MenuSettings {
    isIndexPage?: boolean;
    mainNavigation?: Array<NavGroup>;
    subNavigation?: Array<NavItem>;
    header?: (props: NavMenuStates) => React.ReactNode;
    footer?: (props: NavMenuStates) => React.ReactNode;
    typeSettings: MenuTypeProps;

    theme?: ThemeMods;
}

export interface NavigationProps {
    navBar?: NavBarSettings;
    menu?: MenuSettings;
    clampWidth?: 'content' | 'full';
}

const Navigation: FC<NavigationProps> = ({
    clampWidth = 'content',
    navBar,
    menu,
}) => {
    const isStickable = navBar?.isStickable || false;
    const isCollapsible = navBar?.isCollapsible || false;

    const mediaQueries = useMediaQueries();

    const { theme } = useLibTheme();

    /** Navigation bar states */
    const [isNavBarSticky, setIsNavBarSticky] = useState<boolean>(false);
    const [isNavBarAnimated, setIsNavBarAnimated] = useState<boolean>(false);
    const [isNavBarOpen, setNavBarOpen] = useState<boolean>(true);
    const { isTop, scrollDirection, isInOffset, leftOffsetFromTop } =
        usePageScroll({
            directionOffset: { up: 40, down: 40 },
            offset: getFullHeight(theme, 'large')[
                mediaQueries.semilarge ? 1 : 0
            ],
            onLeftOffset: (dir) => {
                if (isStickable) {
                    setIsNavBarSticky(dir === PageScrollDirection.DOWN);
                }
            },
        });

    const navbarSize = useMemo<NavBarSize>(() => {
        return isTop || isInOffset || !isStickable ? 'large' : 'small';
    }, [isTop, isInOffset, isStickable]);

    useEffect(() => {
        if (isStickable && isCollapsible) {
            setNavBarOpen(
                isTop ||
                    isInOffset ||
                    scrollDirection === PageScrollDirection.UP
            );
        }
    }, [scrollDirection, isTop, isStickable, isInOffset, isCollapsible]);

    useEffect(() => {
        if (isTop) setIsNavBarAnimated(false);
        else if (
            leftOffsetFromTop &&
            scrollDirection === PageScrollDirection.UP
        ) {
            setIsNavBarAnimated(true);
        }
    }, [isTop, leftOffsetFromTop, scrollDirection]);

    useEffect(() => {
        if (!isStickable) return;
        if (leftOffsetFromTop || !isCollapsible) {
            setIsNavBarSticky(true);
        } else if (isTop) {
            setIsNavBarSticky(false);
        }
    }, [isCollapsible, isStickable, isTop, leftOffsetFromTop]);

    /** Menu states */
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const openMenu = () => {
        setIsMenuOpen(true);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : 'visible';
    }, [isMenuOpen]);

    const topBar = navBar?.topBar
        ? (props: BarStates) => {
              if (!navBar?.topBar) return '';
              return navBar.topBar({
                  ...props,
                  isMenuOpen,
                  openMenu,
                  closeMenu,
                  mainNavigation: menu?.mainNavigation,
                  subNavigation: menu?.subNavigation,
              });
          }
        : navBar?.topBar;

    const mainBar = navBar?.mainBar
        ? (props: BarStates) => {
              if (!navBar?.mainBar) return '';
              return navBar.mainBar({
                  ...props,
                  isMenuOpen,
                  openMenu,
                  closeMenu,
                  mainNavigation: menu?.mainNavigation,
                  subNavigation: menu?.subNavigation,
              });
          }
        : navBar?.mainBar;

    const bottomBar = navBar?.bottomBar
        ? (props: BarStates) => {
              if (!navBar?.bottomBar) return '';
              return navBar.bottomBar({
                  ...props,
                  isMenuOpen,
                  openMenu,
                  closeMenu,
                  mainNavigation: menu?.mainNavigation,
                  subNavigation: menu?.subNavigation,
              });
          }
        : navBar?.bottomBar;

    const menuHeader = menu?.header
        ? (props: MenuStates) => {
              if (!menu?.header) return '';
              return menu?.header({
                  ...props,
                  openMenu,
                  closeMenu,
                  mainNavigation: menu?.mainNavigation,
                  subNavigation: menu?.subNavigation,
                  navBarSize: navbarSize,
              });
          }
        : undefined;

    const menuFooter = menu?.footer
        ? (props: MenuStates) => {
              if (!menu?.footer) return '';
              return menu?.footer({
                  ...props,
                  openMenu,
                  closeMenu,
                  mainNavigation: menu?.mainNavigation,
                  subNavigation: menu?.subNavigation,
                  navBarSize: navbarSize,
              });
          }
        : undefined;

    return (
        <header
            data-nav-ident={`${topBar !== null ? 't-' : ''}${
                mainBar !== null ? 'm' : ''
            }${bottomBar !== null ? '-b' : ''}`}
        >
            <LibThemeProvider theme={navBar?.theme}>
                <NavBar
                    isOpen={isNavBarOpen}
                    isSticky={isNavBarSticky}
                    isAnimated={isNavBarAnimated}
                    size={navbarSize}
                    clampWidth={clampWidth}
                    pageFlow={navBar?.pageFlow}
                    topBar={topBar}
                    mainBar={mainBar}
                    bottomBar={bottomBar}
                    topBg={navBar?.topBg}
                    mainBg={navBar?.mainBg}
                    bottomBg={navBar?.bottomBg}
                    onContentBg={navBar?.onContentBg}
                />
            </LibThemeProvider>
            <LibThemeProvider theme={menu?.theme}>
                <Menu
                    isOpen={isMenuOpen}
                    clampWidth={clampWidth}
                    isIndexPage={menu?.isIndexPage}
                    mainNavigation={menu?.mainNavigation}
                    subNavigation={menu?.subNavigation}
                    header={menuHeader}
                    footer={menuFooter}
                    onClose={closeMenu}
                />
            </LibThemeProvider>
        </header>
    );
};

export default Navigation;
