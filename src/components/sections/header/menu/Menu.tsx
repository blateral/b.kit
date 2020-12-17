import React, { FC, useContext, useEffect, useState } from 'react';
import styled, { ThemeContext } from 'styled-components';

import { getColors as color, mq, spacings } from 'utils/styles';
import Link from 'components/typography/Link';
import { ScrollDirection, useScroll } from 'utils/useScroll';
import Wrapper, { ClampWidthType } from 'components/base/Wrapper';

import MenuBurger from 'components/base/icons/MenuBurger';
import Cross from 'components/base/icons/Cross';
import { useMediaQuery } from 'utils/useMediaQuery';
import Flyout, { NavGroup } from './Flyout';
import SocialList from 'components/blocks/SocialList';

const View = styled.div<{ isMenuOpen?: boolean; isTop?: boolean }>`
    position: ${({ isTop, isMenuOpen }) =>
        isTop && !isMenuOpen ? 'absolute' : 'fixed'};
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 10;
`;

const TopBar = styled.div<{
    isInverted?: boolean;
    isMenuOpen?: boolean;
    isOpen?: boolean;
    isTop?: boolean;
    withAnim?: boolean;
    clampWidth?: ClampWidthType;
}>`
    max-width: ${({ clampWidth }) =>
        clampWidth === 'large' ? spacings.wrapperLarge : spacings.wrapper}px;
    padding: ${spacings.nudge * 3}px ${spacings.spacer}px;
    margin: 0 auto;

    background-color: ${({ theme, isInverted, isTop, isMenuOpen }) =>
        isInverted
            ? `rgba(0, 0, 0, ${!isTop && !isMenuOpen ? 0.3 : 0})`
            : !isTop && !isMenuOpen && color(theme).white};

    box-shadow: 0px 4px 4px
        ${({ isInverted, isTop, isMenuOpen, isOpen }) =>
            isInverted
                ? `transparent`
                : isOpen && !isMenuOpen && !isTop
                ? `rgba(0, 0, 0, 0.13)`
                : 'transparent'};

    transition: height 0.2s ease-in-out, background-color 0.2s ease-in-out,
        padding 0.2s ease-in-out,
        transform ${({ withAnim }) => (withAnim ? 0.2 : 0)}s ease-in-out,
        box-shadow 0.2s ease-in-out;
    transform: translate(0, ${({ isOpen }) => (!isOpen ? '-100%' : '0')});
    will-change: transform, background-color, padding, height, box-shadow;
`;

const TopBarContent = styled(Wrapper)`
    position: relative;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
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

const MenuBarCol = styled.div<{ isTop?: boolean }>`
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    color: ${({ theme }) => color(theme).white};

    transition: padding-top 0.2s ease-in-out;
`;

const LeftCol = styled(MenuBarCol)`
    flex: 1;
    justify-content: flex-start;
    align-self: ${({ isTop }) => (isTop ? 'flex-start' : 'center')};
    text-align: left;

    padding-top: ${({ isTop }) => (isTop ? spacings.spacer : 0)}px;

    @media ${mq.xlarge} {
        padding-left: ${spacings.spacer}px;
    }
`;

const CenterCol = styled(MenuBarCol)`
    padding: 0 ${spacings.nudge * 2}px;
    text-align: center;
`;

const RightCol = styled(MenuBarCol)`
    flex: 1;
    justify-content: flex-end;
    align-self: ${({ isTop }) => (isTop ? 'flex-start' : 'center')};
    text-align: right;

    padding-top: ${({ isTop }) => (isTop ? spacings.spacer : 0)}px;

    & > * + * {
        margin-left: ${spacings.nudge * 3}px;
    }

    @media ${mq.semilarge} {
        & > * + * {
            margin-left: ${spacings.spacer}px;
        }
    }

    @media ${mq.xlarge} {
        padding-right: ${spacings.spacer}px;
    }
`;

const ToggleContainer = styled.div<{ iconColor?: string }>`
    cursor: pointer;
    padding: ${spacings.nudge * 2}px;
    margin: -${spacings.nudge * 2}px;

    color: ${({ iconColor }) => iconColor && iconColor};
`;

const StyledMenuBurger = styled(MenuBurger)`
    margin-top: ${spacings.nudge}px;
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

const LogoLink = styled(Link)<{ logoHeight?: number; logoWidth?: number }>`
    display: inline-block;
    position: relative;
    height: ${({ logoHeight }) => logoHeight && logoHeight}px;
    width: ${({ logoWidth }) => logoWidth && logoWidth}px;

    color: ${({ theme }) => color(theme).white};
    transition: height 0.2s ease-in-out, width 0.2s ease-in-out;
    will-change: height, width;

    & > * {
        height: 100%;
        width: 100%;
    }
`;

const FlyoutSearchContainer = styled.div`
    padding: ${spacings.nudge * 3}px 0;
`;

const SocialContainer = styled.div<{ isLarge?: boolean }>`
    display: flex;
    justify-content: flex-start;
    padding-top: ${spacings.spacer}px;
    padding-left: ${spacings.spacer}px;

    @media ${mq.semilarge} {
        justify-content: ${({ isLarge }) =>
            isLarge ? 'flex-end' : 'flex-start'};
    }

    @media ${mq.xlarge} {
        padding-right: ${({ isLarge }) => isLarge && spacings.spacer}px;
    }
`;

export interface LogoProps {
    icon?: (isInverted?: boolean) => React.ReactNode;
    iconTop?: (isInverted?: boolean) => React.ReactNode;
    link?: string;
    size?: { height: number; width: number };
    sizeTop?: { height: number; width: number };
}

export interface ToggleIconProps {
    closed: React.ReactNode;
    opened: React.ReactNode;
}

type MenuMq = 'small' | 'semilarge';

const Menu: FC<{
    size?: 'small' | 'full';
    isTopInverted?: boolean;
    isNavInverted?: boolean;
    withTopOffset?: boolean;
    hideOnScrollDown?: boolean;
    toggleIcons?: ToggleIconProps;
    search?: (isInverted?: boolean) => React.ReactNode;
    logo?: LogoProps;
    primaryAction?: (isInverted?: boolean) => React.ReactNode;
    secondaryAction?: (isInverted?: boolean) => React.ReactNode;
    activeNavItem?: string;
    navItems?: NavGroup[];
    socials?: Array<{ icon: React.ReactNode; href: string }>;
}> = ({
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
    const [topBarSize, setTopBarSize] = useState<'small' | 'large'>('small');
    const [withTopbarAnim, setTopBarAnim] = useState(true);

    const mqs: MenuMq[] = ['small', 'semilarge'];
    const currentMq = useMediaQuery(mqs) as MenuMq | undefined;

    const logoSizes = {
        small: {
            height: logo?.size?.height || 69,
            width: logo?.sizeTop?.width || 64,
        },
        large: {
            height: logo?.size?.height || 115,
            width: logo?.size?.width || 107,
        },
    };

    const { isTop, isInOffset, scrollDirection } = useScroll(
        withTopOffset ? logoSizes.large.height : 0,
        () => {
            setTopBarOpen(hideOnScrollDown ? false : true);
            setTopBarSize('small');
            setTopBarAnim(false);
        }
    );

    useEffect(() => {
        if (isTop) setTopBarSize('large');
    }, [isTop]);

    useEffect(() => {
        if (!isInOffset && hideOnScrollDown) {
            if (scrollDirection === ScrollDirection.UP) {
                setTopBarOpen(true);
                setTopBarSize('small');
                setTopBarAnim(true);
            } else if (scrollDirection === ScrollDirection.DOWN) {
                setTopBarOpen(false);
                setTopBarSize('small');
            }
        }
    }, [hideOnScrollDown, isInOffset, scrollDirection]);

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : 'visible';
    }, [isMenuOpen]);

    const showFullTopBar = hideOnScrollDown
        ? topBarSize === 'large'
        : isInOffset;

    const isTopBarInverted = () => {
        if (isMenuOpen && (size === 'full' || currentMq === 'small')) {
            return isNavInverted;
        } else return showFullTopBar || isMenuOpen || isTopInverted;
    };

    const isToggleInverted = () => {
        return isMenuOpen ? isNavInverted : isTopBarInverted();
    };

    const getLogoHeight =
        showFullTopBar || isMenuOpen
            ? currentMq === 'small' || (isMenuOpen && size === 'full')
                ? logoSizes.large.height * 0.8
                : logoSizes.large.height
            : logoSizes.small.height;

    return (
        <View isMenuOpen={isMenuOpen} isTop={showFullTopBar || isMenuOpen}>
            <Backdrop
                isVisible={isMenuOpen}
                onClick={() => setIsMenuOpen(false)}
            />
            <Flyout.View
                isOpen={isMenuOpen}
                isLarge={size === 'full'}
                contentTopSpace={getLogoHeight + 40}
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
                isInverted={isTopInverted}
                isMenuOpen={isMenuOpen}
                isOpen={isTopBarOpen || isMenuOpen}
                isTop={showFullTopBar || isMenuOpen}
                withAnim={withTopbarAnim}
                clampWidth="large"
            >
                <TopBarContent clampWidth="normal">
                    <LeftCol isTop={showFullTopBar || isMenuOpen}>
                        <ToggleContainer
                            onClick={() => setIsMenuOpen((prev) => !prev)}
                            iconColor={
                                isToggleInverted()
                                    ? color(theme).white
                                    : color(theme).black
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
                    <CenterCol isTop={showFullTopBar || isMenuOpen}>
                        {logo && (
                            <LogoLink
                                href={logo.link}
                                logoHeight={getLogoHeight}
                                logoWidth={
                                    showFullTopBar || isMenuOpen
                                        ? logoSizes.large.width
                                        : logoSizes.small.width
                                }
                            >
                                {logo.iconTop && (showFullTopBar || isMenuOpen)
                                    ? logo.iconTop &&
                                      logo.iconTop(isTopBarInverted())
                                    : logo.icon &&
                                      logo.icon(isTopBarInverted())}
                            </LogoLink>
                        )}
                    </CenterCol>
                    <RightCol isTop={showFullTopBar || isMenuOpen}>
                        {secondaryAction && secondaryAction(isTopBarInverted())}
                        {primaryAction && primaryAction(isTopBarInverted())}
                    </RightCol>
                </TopBarContent>
            </TopBar>
        </View>
    );
};

export default Menu;
