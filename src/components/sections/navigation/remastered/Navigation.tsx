import React, { FC, useEffect, useMemo, useState } from 'react';
import { LibThemeProvider, ThemeMods } from 'utils/LibThemeProvider';
// import styled from 'styled-components';
import usePageScroll, { PageScrollDirection } from 'utils/usePageScroll';

import NavBar, { NavBarSize, TopNavProps } from './NavBar';

export interface NavBarSettings {
    isStickable?: boolean;
    isCollapsible?: boolean;
    pageFlow?: 'overContent' | 'beforeContent';

    /** Custom background value for NavBar with pageFlow === overContent and large size  */
    customBg?: string;
    topNav?: (props: TopNavProps) => React.ReactNode;
    theme?: ThemeMods;
}

export interface NavigationProps {
    navBar?: NavBarSettings;
    clampWidth?: 'content' | 'full';
}

const Navigation: FC<NavigationProps> = ({
    navBar,
    clampWidth = 'content',
}) => {
    const isStickable = navBar?.isStickable || false;
    const isCollapsible = navBar?.isCollapsible || false;

    const [isSticky, setIsSticky] = useState<boolean>(false);
    const [isAnimated, setIsAnimated] = useState<boolean>(false);
    const [isNavBarOpen, setNavBarOpen] = useState<boolean>(true);
    const { isTop, scrollDirection, isInOffset, leftOffsetFromTop } =
        usePageScroll({
            directionOffset: { up: 40, down: 40 },
            offset: 160,
            onLeftOffset: (dir) => {
                if (isStickable) {
                    setIsSticky(dir === PageScrollDirection.DOWN);
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
        if (isTop) setIsAnimated(false);
        else if (
            leftOffsetFromTop &&
            scrollDirection === PageScrollDirection.UP
        ) {
            setIsAnimated(true);
        }
    }, [isTop, leftOffsetFromTop, scrollDirection]);

    useEffect(() => {
        if (!isStickable) return;
        if (leftOffsetFromTop || !isCollapsible) {
            setIsSticky(true);
        } else if (isTop) {
            setIsSticky(false);
        }
    }, [isCollapsible, isStickable, isTop, leftOffsetFromTop]);

    return (
        <LibThemeProvider theme={navBar?.theme}>
            <NavBar
                isOpen={isNavBarOpen}
                isSticky={isSticky}
                isAnimated={isAnimated}
                size={navbarSize}
                clampWidth={clampWidth}
                pageFlow={navBar?.pageFlow}
                topNav={navBar?.topNav}
                customBg={navBar?.customBg}
            />
        </LibThemeProvider>
    );
};

export default Navigation;
