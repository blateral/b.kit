import React, { FC } from 'react';
import styled from 'styled-components';
import { MenuBaseProps } from '../Menu';

const View = styled.div<{ isOpen?: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    width: 40vw;
    height: 100vh;
    background: white;

    transform: translate(${({ isOpen }) => (isOpen ? '0px' : '-100%')}, 0px);
    pointer-events: ${({ isOpen }) => (isOpen ? 'all' : 'none')};

    transition: transform 0.4s ease-in-out;
    will-change: transform:
`;

export interface FlyoutMenuProps {
    type: 'flyout';
}

const MenuFlyout: FC<MenuBaseProps & FlyoutMenuProps> = ({
    isOpen,
    navItems,
}) => {
    return (
        <View isOpen={isOpen}>
            isOpen: {isOpen} Menu Flyout Items: {navItems?.length || ''}
        </View>
    );
};

export default MenuFlyout;
