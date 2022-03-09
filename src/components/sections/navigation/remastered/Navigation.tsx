import React, { FC, useEffect, useState } from 'react';
// import styled from 'styled-components';
import usePageScroll, { PageScrollDirection } from 'utils/usePageScroll';

import NavBar from './NavBar';

interface NavigationProps {
    isNavbarStickable?: boolean;
}

const Navigation: FC<NavigationProps> = ({ isNavbarStickable }) => {
    const [isSticky, setIsSticky] = useState<boolean>(false);
    const [isAnimated, setIsAnimated] = useState<boolean>(false);
    const [isNavBarOpen, setNavBarOpen] = useState<boolean>(true);
    const { isTop, scrollDirection, isInOffset, leftOffsetFromTop } =
        usePageScroll({
            directionOffset: { up: 40, down: 40 },
            offset: 160,
            onLeftOffset: (dir) => {
                if (isNavbarStickable) {
                    setIsSticky(dir === PageScrollDirection.DOWN);
                }
            },
        });

    useEffect(() => {
        if (isNavbarStickable) {
            setNavBarOpen(
                isTop ||
                    isInOffset ||
                    scrollDirection === PageScrollDirection.UP
            );
        }
    }, [scrollDirection, isTop, isNavbarStickable, isInOffset]);

    useEffect(() => {
        if (isTop) setIsAnimated(false);
        else if (scrollDirection === PageScrollDirection.UP) {
            setIsAnimated(true);
        }
    }, [isTop, scrollDirection]);

    useEffect(() => {
        if (!isNavbarStickable) return;
        if (leftOffsetFromTop) {
            setIsSticky(true);
        } else if (isTop) {
            setIsSticky(false);
        }
    }, [isNavbarStickable, isTop, leftOffsetFromTop]);

    return (
        <NavBar
            isOpen={isNavBarOpen}
            isSticky={isSticky}
            isAnimated={isAnimated}
            size={isTop || !isNavbarStickable ? 'large' : 'small'}
        />
    );
};

export default Navigation;
