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
    subItems?: NavItem[];
}

export interface MainNavItem extends NavItem {
    isFeatured?: boolean;
    icon?: React.ReactNode;
}

/** Menu base type */
export interface MenuStates {
    isOpen?: boolean;
    isIndexPage?: boolean;
    mainNavigation?: Array<MainNavItem>;
    subNavigation?: Array<NavItem>;
}

export interface MenuBaseProps {
    isOpen?: boolean;
    clampWidth?: 'content' | 'full';
    isIndexPage?: boolean;
    mainNavigation?: Array<MainNavItem>;
    subNavigation?: Array<NavItem>;
    header?: (props: MenuStates) => React.ReactNode;
    footer?: (props: MenuStates) => React.ReactNode;
    onClose?: () => void;
}

export type MenuTypeProps = FlyoutMenuProps | LargeMenuProps;

const Menu: FC<MenuBaseProps & { typeSettings?: MenuTypeProps }> = ({
    isOpen,
    clampWidth,
    isIndexPage,
    mainNavigation,
    subNavigation,
    header,
    footer,
    onClose,
    typeSettings,
}) => {
    switch (typeSettings?.type) {
        case 'large': {
            return (
                <MenuLarge
                    isOpen={isOpen}
                    clampWidth={clampWidth}
                    isIndexPage={isIndexPage}
                    mainNavigation={mainNavigation}
                    subNavigation={subNavigation}
                    header={header}
                    footer={footer}
                    onClose={onClose}
                    {...(typeSettings as LargeMenuProps)}
                />
            );
        }

        default:
        case 'flyout': {
            return (
                <MenuFlyout
                    isOpen={isOpen}
                    clampWidth={clampWidth}
                    isIndexPage={isIndexPage}
                    mainNavigation={mainNavigation}
                    subNavigation={subNavigation}
                    header={header}
                    footer={footer}
                    onClose={onClose}
                    {...(typeSettings as FlyoutMenuProps)}
                />
            );
        }
    }
};

export default Menu;
