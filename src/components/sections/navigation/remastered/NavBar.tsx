import React, { FC } from 'react';
import styled, { DefaultTheme } from 'styled-components';
import {
    spacings,
    mq,
    getColors as color,
    getGlobals as global,
    NavBarHeights,
} from 'utils/styles';
import Copy from 'components/typography/Copy';
import { useLibTheme } from 'utils/LibThemeProvider';

const View = styled.div<{
    isOpen?: boolean;
    isSticky?: boolean;
    isAnimated?: boolean;
}>`
    position: ${({ isSticky }) => (isSticky ? 'fixed' : 'absolute')};
    top: 0;
    left: 0;
    right: 0;

    transform: ${({ isOpen }) => !isOpen && 'translate3d(0, -100%, 0)'};
    opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};

    margin: 0 auto;
    max-width: ${spacings.wrapperLarge}px;

    ${({ isAnimated }) => `transition: ${
        isAnimated ? 'transform 0.3s ease-in-out, ' : ''
    }height 0.3s ease-in-out,
                opacity 0.3s ease-in-out;`}
    will-change: transform;
`;

const Header = styled.div`
    background: ${({ theme }) => color(theme).new.primary.default};
`;

const Main = styled.div`
    background: ${({ theme }) => color(theme).new.elementBg.light};
`;

const getTopNavHeights = (theme: DefaultTheme, bp: 'mobile' | 'desktop') => {
    return bp === 'desktop'
        ? global(theme).navigation.navBar.topNavHeight.desktop
        : global(theme).navigation.navBar.topNavHeight.mobile;
};

const TopNav = styled.nav<{ size?: NavBarSize; clamp?: boolean }>`
    display: flex;
    align-items: center;
    max-width: ${({ clamp }) =>
        clamp ? spacings.wrapper : spacings.wrapperLarge}px;
    padding: ${spacings.nudge}px ${spacings.nudge * 2}px;
    margin: 0 auto;

    height: ${({ theme, size }) =>
        size === 'large'
            ? getTopNavHeights(theme, 'mobile').large
            : getTopNavHeights(theme, 'mobile').small}px;

    @media ${mq.semilarge} {
        height: ${({ theme, size }) =>
            size === 'large'
                ? getTopNavHeights(theme, 'desktop').large
                : getTopNavHeights(theme, 'desktop').small}px;
    }
`;

const getMainHeights = (theme: DefaultTheme, bp: 'mobile' | 'desktop') => {
    return bp === 'desktop'
        ? global(theme).navigation.navBar.height.desktop
        : global(theme).navigation.navBar.height.mobile;
};

const Content = styled.div<{ size?: NavBarSize; clamp?: boolean }>`
    display: flex;
    max-width: ${({ clamp }) =>
        clamp ? spacings.wrapper : spacings.wrapperLarge}px;
    padding: ${spacings.nudge * 2}px;
    margin: 0 auto;

    height: ${({ theme, size }) =>
        size === 'large'
            ? getMainHeights(theme, 'mobile').large
            : getMainHeights(theme, 'mobile').small}px;

    transition: height 0.2s ease-in-out;

    @media ${mq.semilarge} {
        height: ${({ theme, size }) =>
            size === 'large'
                ? getMainHeights(theme, 'desktop').large
                : getMainHeights(theme, 'desktop').small}px;
    }
`;

const Column = styled(Copy)`
    text-align: center;
    min-width: -webkit-min-content;

    &:first-child {
        text-align: left;
    }

    &:last-child {
        text-align: right;
    }

    &:not(:first-child):not(:last-child) {
        margin: 0 ${spacings.nudge * 2}px;
    }
`;

const LeftCol = styled(Column)`
    flex: 1;
    min-width: -webkit-min-content;
`;

const CenterCol = styled(Column)``;

const RightCol = styled(Column)`
    flex: 1;
    min-width: -webkit-min-content;
`;

const Logo = styled.img`
    max-width: 100%;
    height: 100%;
    object-fit: contain;
`;

/** Get full height of navigation bar */
export const getFullHeight = (
    theme: DefaultTheme,
    bp: 'mobile' | 'desktop'
): NavBarHeights => {
    const hasTopNav = global(theme).navigation.navBar.isTopNavVisible;
    const topNavHeights = global(theme).navigation.navBar.topNavHeight;
    const mainHeights = global(theme).navigation.navBar.height;

    return {
        small:
            bp === 'desktop'
                ? (hasTopNav ? topNavHeights.desktop.small : 0) +
                  mainHeights.desktop.small
                : (hasTopNav ? topNavHeights.mobile.small : 0) +
                  mainHeights.mobile.small,
        large:
            bp === 'desktop'
                ? (hasTopNav ? topNavHeights.desktop.large : 0) +
                  mainHeights.desktop.large
                : (hasTopNav ? topNavHeights.mobile.large : 0) +
                  mainHeights.mobile.large,
    };
};

const BarSpacer = styled.div`
    height: ${({ theme }) => getFullHeight(theme, 'mobile').large}px;

    @media ${mq.semilarge} {
        height: ${({ theme }) => getFullHeight(theme, 'desktop').large}px;
    }
`;

export type NavBarSize = 'small' | 'large';

export interface NavBarProps {
    size?: NavBarSize;
    isOpen?: boolean;
    isSticky?: boolean;
    isAnimated?: boolean;
    clampWidth?: 'content' | 'full';
    reserveBarHeight?: boolean;
}

const NavBar: FC<
    NavBarProps & {
        className?: string;
    }
> = ({
    size = 'large',
    isOpen,
    isSticky,
    isAnimated,
    clampWidth,
    reserveBarHeight,
    className,
}) => {
    const { globals } = useLibTheme();
    const clampContent = clampWidth === 'content';

    return (
        <React.Fragment>
            {reserveBarHeight && <BarSpacer />}
            <View
                isOpen={isOpen}
                isSticky={isSticky}
                isAnimated={isAnimated}
                className={className}
            >
                {globals.navigation.navBar.isTopNavVisible && (
                    <Header>
                        <TopNav size={size} clamp={clampContent}>
                            <LeftCol size="small" isInverted>
                                Left
                            </LeftCol>
                            <RightCol size="small" isInverted>
                                Right
                            </RightCol>
                        </TopNav>
                    </Header>
                )}
                <Main>
                    <Content size={size} clamp={clampContent}>
                        <LeftCol>Column Left</LeftCol>
                        <CenterCol>
                            <Logo src="https://via.placeholder.com/320x80" />
                        </CenterCol>
                        <RightCol>Column Right</RightCol>
                    </Content>
                </Main>
            </View>
        </React.Fragment>
    );
};

export default NavBar;
