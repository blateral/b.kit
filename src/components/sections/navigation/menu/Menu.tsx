import React, { FC } from 'react';

import { LinkProps } from 'components/typography/Link';

/** Menu Variations */
import MenuFlyout, { FlyoutMenuProps } from './variations/MenuFlyout';
import { /* MenuLarge,*/ LargeMenuProps } from './variations/MenuLarge';
import { NavBarSize } from '../NavBar';

/** Navigation item types */

export interface NavItem {
    label: string;
    link: LinkProps;
    isCurrent?: boolean;
    subItems?: NavItem[];
    isFeatured?: boolean;
    icon?: React.ReactNode;
    hideFromMenu?: boolean;
}

export const getCurrentNavItem = (
    items?: NavItem[],
    includeHidden?: boolean
) => {
    if (!items || items.length === 0) return null;

    const findCurrent = (item?: NavItem): NavItem | null => {
        if (!item) return null;
        if (item.isCurrent && (includeHidden || !item.hideFromMenu)) {
            return item;
        }
        if (item.subItems && item.subItems.length > 0) {
            for (let i = 0; i < item.subItems.length; i++) {
                const result = findCurrent(item.subItems[i]);
                if (result) return result;
            }
        }
        return null;
    };

    for (let i = 0; i < items.length; i++) {
        const result = findCurrent(items[i]);
        if (result) {
            return {
                current: result,
                root: items[i],
                rootIndex: i,
            };
        }
    }
    return null;
};

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
