import React, { FC } from 'react';

import { LinkProps } from 'components/typography/Link';

/** Menu Variations */
import MenuFlyout, { FlyoutMenuProps } from './variations/MenuFlyout';
import MenuLarge, { LargeMenuProps } from './variations/MenuLarge';

/** Navigation item types */
interface NavItemBase {
    name?: string;
    link?: LinkProps;
    isActive?: boolean;
}

export interface NavItem extends NavItemBase {
    isFeatured?: boolean;
    icon?: React.ReactNode;
}

export type SubNavItem = NavItemBase;

export interface NavGroup extends NavItemBase {
    isFeatured?: boolean;
    icon?: React.ReactNode;
    subItems?: SubNavItem[];
}

/** Menu base type */
export interface MenuBaseProps {
    isOpen?: boolean;
    navItems?: Array<NavItem>;
}

export type MenuTypeProps = FlyoutMenuProps | LargeMenuProps;

const Menu: FC<MenuBaseProps & { typeMods?: MenuTypeProps }> = ({
    isOpen,
    navItems,
    typeMods,
}) => {
    switch (typeMods?.type) {
        case 'large': {
            return (
                <MenuLarge
                    isOpen={isOpen}
                    navItems={navItems}
                    {...(typeMods as LargeMenuProps)}
                />
            );
        }

        default:
        case 'flyout': {
            return (
                <MenuFlyout
                    isOpen={isOpen}
                    navItems={navItems}
                    {...(typeMods as FlyoutMenuProps)}
                />
            );
        }
    }
};

export default Menu;
