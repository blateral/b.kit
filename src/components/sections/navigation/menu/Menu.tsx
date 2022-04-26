import React, { FC } from 'react';

import { LinkProps } from 'components/typography/Link';

/** Menu Variations */
import MenuFlyout, { FlyoutMenuProps } from './variations/MenuFlyout';
import { /* MenuLarge,*/ LargeMenuProps } from './variations/MenuLarge';
import { NavBarSize } from '../NavBar';

/** Navigation item types */

export interface NavItem {
    uid: string;
    label: string;
    link?: LinkProps;
    isCurrent?: boolean;
    subItems?: NavItem[];
    isFeatured?: boolean;
    icon?: React.ReactNode;
    hideFromMenu?: boolean;
}

/** Menu base type */
export interface MenuStates {
    isOpen?: boolean;
    isIndexPage?: boolean;
    mainNavigation?: Array<NavItem>;
    subNavigation?: Array<NavItem>;
    navBarSize?: NavBarSize;
}

export interface MenuBaseProps {
    isOpen?: boolean;
    clampWidth?: 'content' | 'full';
    isIndexPage?: boolean;
    mainNavigation?: Array<NavItem>;
    subNavigation?: Array<NavItem>;
    navBarSize?: NavBarSize;
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
    navBarSize,
    header,
    footer,
    onClose,
    typeSettings,
}) => {
    if (!typeSettings) {
        typeSettings = { type: 'flyout' };
    }

    switch (typeSettings?.type) {
        // case 'large': {
        //     return (
        //         <MenuLarge
        //             isOpen={isOpen}
        //             clampWidth={clampWidth}
        //             isIndexPage={isIndexPage}
        //             mainNavigation={mainNavigation}
        //             subNavigation={subNavigation}
        //             navBarSize={navBarSize}
        //             header={header}
        //             footer={footer}
        //             onClose={onClose}
        //             {...(typeSettings as LargeMenuProps)}
        //         />
        //     );
        // }

        default:
        case 'flyout': {
            return (
                <MenuFlyout
                    isOpen={isOpen}
                    clampWidth={clampWidth}
                    isIndexPage={isIndexPage}
                    mainNavigation={mainNavigation}
                    subNavigation={subNavigation}
                    navBarSize={navBarSize}
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
