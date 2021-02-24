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

const View = styled.div<{
    isMenuOpen?: boolean;
    isTop?: boolean;
    isTopBarOpen?: boolean;
    withAnim?: boolean;
}>`
    position: ${({ isTop, isMenuOpen }) =>
        isTop && !isMenuOpen ? 'absolute' : 'fixed'};
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 10;
    pointer-events: ${({ isTopBarOpen }) => (isTopBarOpen ? 'all' : 'none')};
    transform: translate(
        0,
        ${({ isTopBarOpen }) => (!isTopBarOpen ? '-100%' : '0')}
    );

    transition: transform ${({ withAnim }) => (withAnim ? 0.2 : 0)}s ease-in-out;
    will-change: transform;
`;

const TopBar = styled.div<{
    isInverted?: boolean;
    isMenuOpen?: boolean;
    isOpen?: boolean;
    isTop?: boolean;
    clampWidth?: ClampWidthType;
}>`
    max-width: ${({ clampWidth }) =>
        clampWidth === 'large' ? spacings.wrapperLarge : spacings.wrapper}px;
    padding: ${({ isTop, isOpen }) =>
            !isTop && isOpen ? spacings.nudge : spacings.spacer}px
        0 ${spacings.nudge}px 0;
    margin: 0 auto;
    overflow: hidden;

    background-color: ${({ theme, isInverted, isTop, isMenuOpen }) =>
        isInverted
            ? `rgba(0, 0, 0, ${!isTop && !isMenuOpen ? 0.3 : 0})`
            : !isTop && !isMenuOpen && color(theme).light};

    box-shadow: 0px 4px 4px
        ${({ isInverted, isTop, isMenuOpen, isOpen }) =>
            isInverted
                ? `transparent`
                : isOpen && !isMenuOpen && !isTop
                ? `rgba(0, 0, 0, 0.13)`
                : 'transparent'};

    transition: height 0.2s ease-in-out, background-color 0.2s ease-in-out,
        padding 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
    will-change: background-color, padding, height, box-shadow;

    @media ${mq.medium} {
        padding: ${({ isTop, isOpen }) =>
                !isTop && isOpen ? spacings.nudge * 3 : spacings.nudge * 7}px
            0 ${spacings.nudge * 3}px 0;
    }
`;

const TopBarContent = styled(Wrapper)`
    position: relative;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;

    padding: 0 ${({ addWhitespace }) => (addWhitespace ? spacings.spacer : 0)}px;

    @media ${mq.semilarge} {
        padding-left: ${({ addWhitespace }) =>
            addWhitespace ? (1 / 28) * 100 : 0}%;
        padding-right: ${({ addWhitespace }) =>
            addWhitespace ? spacings.spacer : 0}px;
    }

    @media ${mq.xlarge} {
        padding-left: ${({ addWhitespace }) =>
            addWhitespace ? (1 / 28) * spacings.wrapper : 0}px;
        padding-right: ${({ addWhitespace }) =>
            addWhitespace ? spacings.spacer : 0}px;
    }
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

const MenuBarCol = styled.div<{
    isTop?: boolean;
    logoHeight?: number;
}>`
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    color: ${({ theme }) => color(theme).light};

    transition: padding-top 0.2s ease-in-out;
`;

const LeftCol = styled(MenuBarCol)`
    flex: 1;
    justify-content: flex-start;
    align-self: ${({ isTop }) => (isTop ? 'flex-start' : 'center')};
    text-align: left;

    ${({ isTop }) =>
        isTop &&
        withRange([spacings.nudge, spacings.nudge * 1.5], 'padding-top')}

    /* @media ${mq.xlarge} {
        padding-left: ${spacings.spacer}px;
    } */
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

    ${({ isTop }) =>
        isTop &&
        withRange([spacings.nudge, spacings.nudge * 1.5], 'padding-top')}

    & > * + * {
        margin-left: ${spacings.nudge * 3}px;
    }

    @media ${mq.semilarge} {
        & > * + * {
            margin-left: ${spacings.spacer}px;
        }
    }

    /* @media ${mq.xlarge} {
        padding-right: ${spacings.spacer}px;
    } */
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

const LogoLink = styled(Link)<{ logoHeight?: number }>`
    display: inline-block;
    position: relative;
    height: ${({ logoHeight }) => logoHeight && logoHeight}px;
    width: auto;

    color: ${({ theme }) => color(theme).light};
    transition: height 0.2s ease-in-out, width 0.2s ease-in-out;
    will-change: height, width;

    & > * {
        max-height: 100%;
        height: 100%;
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

export interface LogoProps {
    icon?: (props: {
        isInverted?: boolean;
        size?: 'full' | 'small';
    }) => React.ReactNode;
    link?: string;
    /**
     * Multiplier for small logo height.
     */
    heightMultSmall?: number;
    /**
     * Multiplier for full logo height.
     */
    heightMultFull?: number;
}

export interface ToggleIconProps {
    closed: React.ReactNode;
    opened: React.ReactNode;
}

type MenuMq = 'small' | 'semilarge';

interface MenuProps {
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

    const mqs: MenuMq[] = ['small', 'semilarge'];
    const currentMq = useMediaQuery(mqs) as MenuMq | undefined;

    // generate logo heights
    const multFull = logo?.heightMultFull || 1;
    const multSmall = logo?.heightMultSmall || 1;
    const logoHeights = {
        heightSmall: 69 * multSmall,
        heightFull: 115 * multFull,
    };

    const { isTop, isInOffset, scrollDirection } = useScroll(
        withTopOffset ? logoHeights.heightFull : 0,
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
        } else return isMenuOpen || showFullTopBar || isTopInverted;
    };

    const isToggleInverted = () => {
        return isMenuOpen ? isNavInverted : isTopBarInverted();
    };

    const isLogoFull = showFullTopBar
        ? (currentMq === 'small' ? true : isMenuOpen) ||
          (isMenuOpen && size === 'full')
            ? false
            : true
        : false;

    const getLogoHeight = showFullTopBar
        ? (currentMq === 'small' ? true : isMenuOpen) ||
          (isMenuOpen && size === 'full')
            ? logoHeights.heightSmall * 1.2
            : logoHeights.heightFull
        : logoHeights.heightSmall;

    return (
        <View
            isMenuOpen={isMenuOpen}
            isTop={showFullTopBar}
            isTopBarOpen={isTopBarOpen}
            withAnim={withTopbarAnim}
        >
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
                isTop={showFullTopBar}
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
                        {secondaryAction && secondaryAction(isTopBarInverted())}
                        {primaryAction && primaryAction(isTopBarInverted())}
                    </RightCol>
                </TopBarContent>
            </TopBar>
        </View>
    );
};

export default Menu;
