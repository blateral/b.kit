import React, { FC } from 'react';

import { LinkProps } from 'components/typography/Link';

/** Menu Variations */
import MenuFlyout, { FlyoutMenuProps } from './variations/MenuFlyout';
import MenuLarge, { LargeMenuProps } from './variations/MenuLarge';

/** Navigation item types */

export interface NavItem {
    label: string;
    link: LinkProps;
    isCurrent?: boolean;
}

export interface NavGroup extends NavItem {
    isFeatured?: boolean;
    icon?: React.ReactNode;
    subItems?: NavItem[];
}

/** Menu base type */
export interface MenuStates {
    isOpen?: boolean;
    indexPage?: Array<NavGroup>;
    mainNavigation?: Array<NavGroup>;
    subNavigation?: Array<NavItem>;
}

export interface MenuBaseProps {
    isOpen?: boolean;
    indexPage?: Array<NavGroup>;
    mainNavigation?: Array<NavGroup>;
    subNavigation?: Array<NavItem>;
    header?: (props: MenuStates) => React.ReactNode;
    footer?: (props: MenuStates) => React.ReactNode;
}

export type MenuTypeProps = FlyoutMenuProps | LargeMenuProps;

const Menu: FC<MenuBaseProps & { typeSettings?: MenuTypeProps }> = ({
    isOpen,
    indexPage,
    mainNavigation,
    subNavigation,
    header,
    footer,
    typeSettings,
}) => {
    switch (typeSettings?.type) {
        case 'large': {
            return (
                <MenuLarge
                    isOpen={isOpen}
                    indexPage={indexPage}
                    mainNavigation={mainNavigation}
                    subNavigation={subNavigation}
                    header={header}
                    footer={footer}
                    {...(typeSettings as LargeMenuProps)}
                />
            );
        }

        default:
        case 'flyout': {
            return (
                <MenuFlyout
                    isOpen={isOpen}
                    indexPage={indexPage}
                    mainNavigation={mainNavigation}
                    subNavigation={subNavigation}
                    header={header}
                    footer={footer}
                    {...(typeSettings as FlyoutMenuProps)}
                />
            );
        }
    }
};

export default Menu;
