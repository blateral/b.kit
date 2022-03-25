import React, { FC, useEffect, useMemo, useState } from 'react';
import {
    LibThemeProvider,
    ThemeMods,
    useLibTheme,
} from 'utils/LibThemeProvider';
import { useMediaQueries } from 'utils/useMediaQuery';
// import styled from 'styled-components';
import usePageScroll, { PageScrollDirection } from 'utils/usePageScroll';
import Menu, { MenuVariationProps, NavItem } from './menu/Menu';

import NavBar, {
    BottomSettings,
    getFullHeight,
    MainSettings,
    NavBarSize,
    TopSettings,
} from './NavBar';

export interface NavBarMainSettings extends MainSettings {
    isMenuOpen?: boolean;
    openMenu?: () => void;
    closeMenu?: () => void;
}

export interface NavBarSettings {
    isStickable?: boolean;
    isCollapsible?: boolean;
    pageFlow?: 'overContent' | 'beforeContent';

    /** Custom background value for NavBar with pageFlow === overContent and large size  */
    customBg?: string;
    topBar?: (props: TopSettings) => React.ReactNode;
    mainBar?: (props: NavBarMainSettings) => React.ReactNode;
    bottomBar?: (props: BottomSettings) => React.ReactNode;
    theme?: ThemeMods;
}

export interface MenuSettings {
    navItems?: Array<NavItem>;
    variation: MenuVariationProps;

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
    // #TODO: Main bar definieren mit callback handler zum Menü öffnen
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const openMenu = () => {
        setIsMenuOpen(true);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <React.Fragment>
            <LibThemeProvider theme={navBar?.theme}>
                <NavBar
                    isOpen={isNavBarOpen}
                    isSticky={isNavBarSticky}
                    isAnimated={isNavBarAnimated}
                    size={navbarSize}
                    clampWidth={clampWidth}
                    pageFlow={navBar?.pageFlow}
                    topBar={navBar?.topBar}
                    mainBar={(props) =>
                        navBar?.mainBar
                            ? navBar.mainBar({
                                  ...props,
                                  isMenuOpen,
                                  openMenu,
                                  closeMenu,
                              })
                            : undefined
                    }
                    bottomBar={navBar?.bottomBar}
                    customBg={navBar?.customBg}
                />
            </LibThemeProvider>
            <LibThemeProvider theme={menu?.theme}>
                <Menu isOpen={isMenuOpen} navItems={menu?.navItems} />
            </LibThemeProvider>
        </React.Fragment>
    );
};

export default Navigation;
