import React, { FC, useEffect, useMemo, useState } from 'react';
import { DefaultTheme } from 'styled-components';
import {
    LibThemeProvider,
    ThemeMods,
    useLibTheme,
} from 'utils/LibThemeProvider';
import { useMediaQueries } from 'utils/useMediaQuery';
import { useMenuKeyboard } from 'utils/menuHooks';
import usePageScroll, { PageScrollDirection } from 'utils/usePageScroll';
import Menu, { MenuStates, MenuTypeProps, NavItem } from './menu/Menu';

import NavBar, {
    getFullHeight,
    NavBarSize,
    BarStates,
    hasTopBar,
    hasBottomBar,
    ExcludeType,
    PageFlow,
} from './NavBar';

/**
 * Checks which navbar parts are defined in navigation.
 * With this values you can calculate each height by the Navbar component functions
 * @param ident Identification string from Navigation component
 * @returns
 */
export const getNavbarState = (ident: string) => {
    const navbarIdent = ident || '';

    let pageFlow: PageFlow | undefined = undefined;
    switch (true) {
        case navbarIdent.search('overContent') !== -1: {
            pageFlow = 'overContent';
            break;
        }

        case navbarIdent.search('beforeContent') !== -1: {
            pageFlow = 'beforeContent';
            break;
        }
    }

    return {
        hasTop: navbarIdent.search('top') !== -1,
        hasMain: navbarIdent.search('main') !== -1,
        hasBottom: navbarIdent.search('bottom') !== -1,
        pageFlow: pageFlow,
        isStickable: navbarIdent.search('stickable') !== -1,
    };
};

/**
 * Get full navbar heights
 * @param theme Theme object
 * @param ident Indentification string from Navigation component
 * @returns
 */
export const getFullNavbarHeights = (theme: DefaultTheme, ident: string) => {
    const { hasTop, hasBottom } = getNavbarState(ident || '');
    const excludes: ExcludeType[] = [];
    if (!hasTop) excludes.push('top');
    if (!hasBottom) excludes.push('bottom');

    return {
        large: getFullHeight(theme, 'large', excludes),
        small: getFullHeight(theme, 'small', excludes),
    };
};

export interface NavBarStates extends BarStates {
    isMenuOpen?: boolean;
    openMenu?: () => void;
    closeMenu?: () => void;
    mainNavigation?: Array<NavItem>;
    subNavigation?: Array<NavItem>;
    isOnPageTop?: boolean;
    isInTopOffset?: boolean;
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
    mainNavigation?: Array<NavItem>;
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
    const { isMenuOpen, setMenu, setRoot } = useMenuKeyboard(false, {});

    const openMenu = () => {
        setMenu(true);
    };

    const closeMenu = () => {
        setMenu(false);
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
                  isOnPageTop: isTop,
                  isInTopOffset: isInOffset,
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
                  isOnPageTop: isTop,
                  isInTopOffset: isInOffset,
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
                  isOnPageTop: isTop,
                  isInTopOffset: isInOffset,
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

    /**
     * Get ident string that shows if each navbar section is defined.
     * @returns Navbar ident string
     */
    const getNavBarIdent = (theme: DefaultTheme) => {
        const identParts: string[] = [];
        if (topBar !== null && hasTopBar(theme)) identParts.push('top');
        if (mainBar !== null) identParts.push('main');
        if (bottomBar !== null && hasBottomBar(theme))
            identParts.push('bottom');

        if (navBar?.pageFlow) identParts.push(navBar?.pageFlow);
        if (navBar?.isStickable) identParts.push('stickable');

        return identParts.join('-');
    };

    return (
        <header ref={setRoot} data-navbar-ident={getNavBarIdent(theme)}>
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
                    typeSettings={menu?.typeSettings}
                    navBarSize={navbarSize}
                    header={menuHeader}
                    footer={menuFooter}
                    onClose={closeMenu}
                />
            </LibThemeProvider>
        </header>
    );
};

export default Navigation;
