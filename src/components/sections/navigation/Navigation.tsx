import React, { FC, useEffect, useState } from 'react';
import { LibThemeProvider, ThemeMods } from 'utils/LibThemeProvider';
import { FlyoutBackgroundSettings, NavGroup } from './menu/Flyout';

import Menu from './menu/Menu';

import TopBar, { TopBarMq } from './TopBar';

export interface LogoProps {
    icon?: (props: {
        isInverted?: boolean;
        size?: 'full' | 'small';
        currentMq?: TopBarMq;
        name?: string;
        isNavLarge?: boolean;
    }) => React.ReactNode;
    link?: string;
    pageTopScale?: {
        // icon scale factor
        mobile?: number | [number, number];
        desktop?: number | [number, number];
    };
    /** Logo scale if is shown from scroll up */
    scrolledScale?: {
        /** Default is 0.6 */
        mobile?: number | [number, number];
        desktop?: number | [number, number];
    };
}

export interface NavProps {
    isLargeMenu?: boolean;
    isMenuInverted?: boolean;
    isTopbarInverted?: boolean;
    isMirrored?: boolean;
    activeNavItem?: string;
    navItems?: NavGroup[];
    navItemIndicator?: (isInverted: boolean) => React.ReactNode;
    backdropOpacity?: number;
    socials?: Array<{ icon: React.ReactNode; href: string }>;
    logo?: LogoProps;
    background?: FlyoutBackgroundSettings;
    /** Allow overflow of topbar over content if page is on top */
    allowTopbarOverflow?: boolean;
    /** Hide topbar background if menu overlay is open */
    hideTopbarBackUnderMenu?: boolean;
    isTopbarLargeOnPageTop?: boolean;
    customGradient?: string;
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
    theme?: ThemeMods;
}

const Navigation: FC<NavProps> = ({
    isMenuInverted,
    isLargeMenu,
    activeNavItem,
    navItems,
    navItemIndicator,
    socials,
    search,
    logo,
    background,
    backdropOpacity,
    customGradient,
    primaryCta,
    secondaryCta,
    isTopbarInverted,
    allowTopbarOverflow,
    hideTopbarBackUnderMenu,
    isTopbarLargeOnPageTop,
    openMenuIcon,
    closeMenuIcon,
    isMirrored,
    theme,
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
        <LibThemeProvider theme={theme}>
            <TopBar
                isMirrored={isMirrored}
                isBackVisible={hideTopbarBackUnderMenu ? !isMenuOpen : true}
                isInverted={isTopbarInverted}
                allowTopOverlow={allowTopbarOverflow}
                isLargeOnPageTop={isTopbarLargeOnPageTop}
                customGradient={customGradient}
                toggleIcon={openMenuIcon}
                onToggleClick={() => setIsMenuOpen(true)}
                {...sharedProps}
            />
            <Menu
                isMirrored={isMirrored}
                isOpen={isMenuOpen}
                backdropOpacity={backdropOpacity}
                size={isLargeMenu ? 'full' : 'small'}
                isInverted={isMenuInverted}
                activeNavItem={activeNavItem}
                navItems={navItems}
                socials={socials}
                search={search}
                onCloseClick={() => setIsMenuOpen(false)}
                toggleIcon={closeMenuIcon}
                background={background}
                navItemIndicator={navItemIndicator}
                {...sharedProps}
            />
        </LibThemeProvider>
    );
};

export default Navigation;
