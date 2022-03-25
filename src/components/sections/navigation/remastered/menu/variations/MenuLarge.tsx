import React, { FC } from 'react';
import styled from 'styled-components';
import { MenuBaseProps } from '../Menu';

const View = styled.div``;

export interface LargeMenuProps {
    type: 'large';
    columns?: number;
}

const MenuLarge: FC<MenuBaseProps & LargeMenuProps> = ({
    navItems,
    columns = 3,
}) => {
    return (
        <View>
            Menu Large: With {columns} columns. Items: {navItems?.length || ''}
        </View>
    );
};

export default MenuLarge;
