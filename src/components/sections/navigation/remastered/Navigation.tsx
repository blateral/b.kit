import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import usePageScroll, { PageScrollDirection } from 'utils/usePageScroll';

import NavBar from './NavBar';

const StyledNavBar = styled(NavBar)<{ isOpen?: boolean; canStick?: boolean }>`
    position: ${({ canStick }) => (canStick ? 'fixed' : 'relative')};
    top: 0;
    left: 0;
    right: 0;

    transform: ${({ isOpen }) => !isOpen && 'translate3d(0, -100%, 0)'};
    opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};

    transition: transform 0.2s ease-in-out, height 0.2s ease-in-out,
        opacity 0.2s ease-in-out;
`;

const Navigation: FC = () => {
    const canStick = true;
    const [isNavBarOpen, setNavBarOpen] = useState<boolean>(true);
    const { isTop, scrollDirection } = usePageScroll({
        directionOffset: { up: 40 },
    });

    useEffect(() => {
        if (canStick) {
            setNavBarOpen(isTop || scrollDirection === PageScrollDirection.UP);
        }
    }, [scrollDirection, isTop, canStick]);

    return (
        <StyledNavBar
            isOpen={isNavBarOpen}
            canStick={canStick}
            size={isTop || !canStick ? 'large' : 'small'}
        />
    );
};

export default Navigation;
