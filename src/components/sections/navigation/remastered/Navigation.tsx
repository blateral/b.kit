import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import usePageScroll, { PageScrollDirection } from 'utils/usePageScroll';

import NavBar from './NavBar';

const StyledNavBar = styled(NavBar)<{ isOpen?: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    transform: ${({ isOpen }) => !isOpen && 'translate3d(0, -100%, 0)'};
    transition: transform 0.2s ease-in-out, height 0.2s ease-in-out;
`;

const Navigation: FC = () => {
    const [isNavBarOpen, setNavBarOpen] = useState<boolean>(true);
    const { isTop, scrollDirection } = usePageScroll({
        directionOffset: { up: 40 },
    });

    useEffect(() => {
        setNavBarOpen(isTop || scrollDirection === PageScrollDirection.UP);
    }, [scrollDirection, isTop]);

    return (
        <StyledNavBar
            isOpen={isNavBarOpen}
            size={
                !isTop && scrollDirection === PageScrollDirection.UP
                    ? 'small'
                    : 'large'
            }
        />
    );
};

export default Navigation;
