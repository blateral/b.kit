import React, { FC, useContext, useEffect, useState } from 'react';
import styled, { ThemeContext } from 'styled-components';

import { getColors as color, mq, spacings, withRange } from 'utils/styles';
import Link from 'components/typography/Link';
import { ScrollDirection, useScroll } from 'utils/useScroll';
import Wrapper, { ClampWidthType } from 'components/base/Wrapper';

import MenuBurger from 'components/base/icons/MenuBurger';
import Cross from 'components/base/icons/Cross';
import { useMediaQuery } from 'utils/useMediaQuery';
import Flyout, { NavGroup } from './Flyout';
import SocialList from 'components/blocks/SocialList';
import TopBar, { LogoProps } from './TopBar';

const View = styled.div<{
    isMenuOpen?: boolean;
    isTop?: boolean;
    isTopBarOpen?: boolean;
}>`
    position: ${({ isTop, isMenuOpen }) =>
        isTop && !isMenuOpen ? 'absolute' : 'fixed'};
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 10;
    pointer-events: ${({ isTopBarOpen }) => (isTopBarOpen ? 'all' : 'none')};
`;

const Backdrop = styled.div<{ isVisible?: boolean }>`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    height: 100vh;
    background-color: rgba(
        0,
        0,
        0,
        ${({ isVisible }) => (isVisible ? 0.4 : 0)}
    );

    pointer-events: ${({ isVisible }) => !isVisible && 'none'};
    transition: background-color 0.2s ease-in-out;
`;

const StyledClose = styled(Cross)`
    margin-top: ${spacings.nudge}px;
`;

const SearchContainer = styled.div<{ isVisible?: boolean }>`
    display: none;
    width: 100%;
    max-width: 420px;
    padding-top: ${spacings.nudge}px;
    padding-left: ${spacings.spacer * 3}px;
    padding-right: ${spacings.spacer * 2}px;

    transition: opacity 0.2s ease-in-out;
    will-change: opacity;

    @media ${mq.semilarge} {
        display: block;
        opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
        pointer-events: ${({ isVisible }) => (isVisible ? 'all' : 'none')};
    }
`;

const FlyoutSearchContainer = styled.div`
    padding: ${spacings.nudge * 3}px 0;
`;

const SocialContainer = styled.div<{ isLarge?: boolean }>`
    display: flex;
    justify-content: flex-start;
    padding-top: ${spacings.spacer}px;

    @media ${mq.semilarge} {
        justify-content: ${({ isLarge }) =>
            isLarge ? 'flex-end' : 'flex-start'};
    }

    @media ${mq.xlarge} {
        padding-right: ${({ isLarge }) => isLarge && spacings.spacer}px;
    }
`;

export interface ToggleIconProps {
    closed: React.ReactNode;
    opened: React.ReactNode;
}
interface MenuProps {
    size?: 'small' | 'full';
    isTopInverted?: boolean;
    isNavInverted?: boolean;
    withTopOffset?: boolean;
    hideOnScrollDown?: boolean;
    toggleIcons?: ToggleIconProps;
    search?: (isInverted?: boolean) => React.ReactNode;
    logo?: LogoProps;
    primaryAction?: (props: {
        isInverted?: boolean;
        currentMq?: MenuMq;
    }) => React.ReactNode;
    secondaryAction?: (props: {
        isInverted?: boolean;
        currentMq?: MenuMq;
    }) => React.ReactNode;
    activeNavItem?: string;
    navItems?: NavGroup[];
    socials?: Array<{ icon: React.ReactNode; href: string }>;
}

const Menu: FC<MenuProps> = ({
    size = 'small',
    isTopInverted = false,
    isNavInverted = false,
    withTopOffset = false,
    hideOnScrollDown = false,
    toggleIcons,
    search,
    logo,
    primaryAction,
    secondaryAction,
    activeNavItem,
    navItems,
    socials,
}) => {
    const theme = useContext(ThemeContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isTopBarOpen, setTopBarOpen] = useState(true);
    const [topBarSize, setTopBarSize] = useState<'small' | 'large'>('large');
    const [withTopbarAnim, setTopBarAnim] = useState(true);

    // generate logo heights
    // const multFull = logo?.heightMultFull || 1;
    // const multSmall = logo?.heightMultSmall || 1;
    // const logoHeights = {
    //     heightSmall: 69 * multSmall,
    //     heightFull: 115 * multFull,
    // };

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : 'visible';
    }, [isMenuOpen]);

    // const showFullTopBar = hideOnScrollDown
    //     ? topBarSize === 'large'
    //     : isInOffset;

    // const isTopBarInverted = () => {
    //     if (isMenuOpen && (size === 'full' || currentMq === 'small')) {
    //         return isNavInverted;
    //     } else return isMenuOpen || showFullTopBar || isTopInverted;
    // };

    // const isToggleInverted = () => {
    //     return isMenuOpen ? isNavInverted : isTopBarInverted();
    // };

    // const isLogoFull = showFullTopBar
    //     ? (currentMq === 'small' ? true : isMenuOpen) ||
    //       (isMenuOpen && size === 'full')
    //         ? false
    //         : true
    //     : false;

    // const getLogoHeight = showFullTopBar
    //     ? (currentMq === 'small' ? true : isMenuOpen) ||
    //       (isMenuOpen && size === 'full')
    //         ? logoHeights.heightSmall * 1.2
    //         : logoHeights.heightFull
    //     : logoHeights.heightSmall;

    return (
        <View isMenuOpen={isMenuOpen} isTop={false} isTopBarOpen={isTopBarOpen}>
            <Backdrop
                isVisible={isMenuOpen}
                onClick={() => setIsMenuOpen(false)}
            />
            <Flyout.View
                isOpen={isMenuOpen}
                isLarge={size === 'full'}
                contentTopSpace={100}
                isInverted={isNavInverted}
            >
                {(size === 'full' ? currentMq === 'small' : true) && search && (
                    <FlyoutSearchContainer>
                        {search(isNavInverted)}
                    </FlyoutSearchContainer>
                )}
                {navItems && (
                    <Flyout.NavList
                        activeNavItem={activeNavItem}
                        navGroups={navItems}
                        isLarge={size === 'full'}
                        isInverted={isNavInverted}
                    />
                )}
                {socials && (
                    <SocialContainer isLarge={size === 'full'}>
                        <SocialList
                            isInverted={isNavInverted}
                            items={socials.map((item) => {
                                return {
                                    href: item.href,
                                    icon: item.icon,
                                };
                            })}
                        />
                    </SocialContainer>
                )}
            </Flyout.View>
            <TopBar
                isVisible={true}
                isInverted={isTopInverted}
                hideOnScrollDown={hideOnScrollDown}
            />
            {/* <TopBar
                isInverted={isTopInverted}
                isMenuOpen={isMenuOpen}
                isOpen={isTopBarOpen || isMenuOpen}
                isTop={showFullTopBar}
                withAnim={withTopbarAnim}
                clampWidth="large"
            >
                <TopBarContent clampWidth="normal" addWhitespace>
                    <LeftCol isTop={showFullTopBar} logoHeight={getLogoHeight}>
                        <ToggleContainer
                            onClick={() => setIsMenuOpen((prev) => !prev)}
                            iconColor={
                                isToggleInverted()
                                    ? color(theme).light
                                    : color(theme).dark
                            }
                        >
                            {isMenuOpen
                                ? toggleIcons?.opened || <StyledClose />
                                : toggleIcons?.closed || <StyledMenuBurger />}
                        </ToggleContainer>
                        {size === 'full' && search && (
                            <SearchContainer isVisible={isMenuOpen}>
                                {search(isTopBarInverted())}
                            </SearchContainer>
                        )}
                    </LeftCol>
                    <CenterCol>
                        {logo && (
                            <LogoLink
                                href={logo.link}
                                logoHeight={getLogoHeight}
                            >
                                {logo.icon &&
                                    logo.icon({
                                        isInverted: isTopBarInverted(),
                                        size: isLogoFull ? 'full' : 'small',
                                    })}
                            </LogoLink>
                        )}
                    </CenterCol>
                    <RightCol isTop={showFullTopBar} logoHeight={getLogoHeight}>
                        {secondaryAction &&
                            secondaryAction({
                                isInverted: isTopBarInverted(),
                                currentMq,
                            })}
                        {primaryAction &&
                            primaryAction({
                                isInverted: isTopBarInverted(),
                                currentMq,
                            })}
                    </RightCol>
                </TopBarContent>
            </TopBar> */}
        </View>
    );
};

export default Menu;
