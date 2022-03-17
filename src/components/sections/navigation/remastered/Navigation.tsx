import React, { FC, useEffect, useMemo, useState } from 'react';
// import styled from 'styled-components';
import usePageScroll, { PageScrollDirection } from 'utils/usePageScroll';

import NavBar, { NavBarSize } from './NavBar';

interface NavBarBase {
    isStickable?: boolean;
    reserveBarHeight?: boolean;
}

interface NavBarCollapse extends NavBarBase {
    isStickable: true;
    isCollapsible?: boolean;
}

export interface NavigationProps {
    navBar?: NavBarBase | NavBarCollapse;
    clampWidth?: 'content' | 'full';
}

const Navigation: FC<NavigationProps> = ({
    navBar,
    clampWidth = 'content',
}) => {
    const isStickable = navBar?.isStickable || false;
    const isCollapsible = (navBar as NavBarCollapse)?.isCollapsible || false;

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
        return isTop || !leftOffsetFromTop || !isStickable ? 'large' : 'small';
    }, [isTop, leftOffsetFromTop, isStickable]);

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
        <NavBar
            isOpen={isNavBarOpen}
            isSticky={isSticky}
            isAnimated={isAnimated}
            size={navbarSize}
            clampWidth={clampWidth}
            reserveBarHeight={navBar?.reserveBarHeight}
        />
    );
};

export default Navigation;
