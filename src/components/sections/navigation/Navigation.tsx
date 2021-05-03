import React, { FC, useEffect, useState } from 'react';
import { NavGroup } from './menu/Flyout';
import Menu from './menu/Menu';

import TopBar from './TopBar';

export interface LogoProps {
    icon?: (props: {
        isInverted?: boolean;
        size?: 'full' | 'small';
        name?: string;
    }) => React.ReactNode;
    link?: string;
    scale?: {
        // icon scale factor
        mobile?: number;
        desktop?: number;
    };
}

export interface NavProps {
    isLargeMenu?: boolean;
    isMenuInverted?: boolean;
    isTopbarInverted?: boolean;
    activeNavItem?: string;
    navItems?: NavGroup[];
    backdropOpacity?: number;
    socials?: Array<{ icon: React.ReactNode; href: string }>;
    logo?: LogoProps;
    /** Allow overflow of topbar over content if page is on top */
    allowTopbarOverflow?: boolean;
    /** Hide topbar background if menu overlay is open */
    hideTopbarBackUnderMenu?: boolean;
    primaryCta?: (props: {
        isInverted?: boolean;
        size?: 'desktop' | 'mobile';
        name?: string;
    }) => React.ReactNode;
    secondaryCta?: (props: {
        isInverted?: boolean;
        size?: 'desktop' | 'mobile';
        name?: string;
    }) => React.ReactNode;
    search?: (isInverted?: boolean) => React.ReactNode;
    openMenuIcon?: (isInverted?: boolean) => React.ReactNode;
    closeMenuIcon?: (isInverted?: boolean) => React.ReactNode;
}

const Navigation: FC<NavProps> = ({
    isMenuInverted,
    isLargeMenu,
    activeNavItem,
    navItems,
    socials,
    search,
    logo,
    backdropOpacity,
    primaryCta,
    secondaryCta,
    isTopbarInverted,
    allowTopbarOverflow,
    hideTopbarBackUnderMenu,
    openMenuIcon,
}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const sharedProps = {
        logo: logo,
        primaryAction: primaryCta,
        secondaryAction: secondaryCta,
    };

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : 'visible';
    }, [isMenuOpen]);

    return (
        <>
            <TopBar
                isBackVisible={hideTopbarBackUnderMenu ? !isMenuOpen : true}
                isInverted={isTopbarInverted}
                allowTopOverlow={allowTopbarOverflow}
                toggleIcon={openMenuIcon}
                onToggleClick={() => setIsMenuOpen(true)}
                {...sharedProps}
            />
            <Menu
                isOpen={isMenuOpen}
                backdropOpacity={backdropOpacity}
                size={isLargeMenu ? 'full' : 'small'}
                isInverted={isMenuInverted}
                activeNavItem={activeNavItem}
                navItems={navItems}
                socials={socials}
                search={search}
                onCloseClick={() => setIsMenuOpen(false)}
                {...sharedProps}
            />
        </>
    );
};

export default Navigation;
