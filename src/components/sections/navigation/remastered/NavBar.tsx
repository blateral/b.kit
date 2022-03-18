import React, { FC } from 'react';
import styled, { DefaultTheme } from 'styled-components';
import {
    spacings,
    mq,
    getColors as color,
    getGlobals as global,
} from 'utils/styles';
import Copy from 'components/typography/Copy';
import { useLibTheme } from 'utils/LibThemeProvider';

const getTopNavHeights = (
    theme: DefaultTheme,
    size?: NavBarSize
): [number, number] => {
    const heights =
        size === 'large'
            ? global(theme).navigation.navBar.topNavHeight.large
            : global(theme).navigation.navBar.topNavHeight.small;

    // if second value is not defined use first array index value for both
    return [heights[0], heights?.[1] === undefined ? heights[0] : heights[1]];
};

const getMainHeights = (
    theme: DefaultTheme,
    size?: NavBarSize
): [number, number] => {
    const heights =
        size === 'large'
            ? global(theme).navigation.navBar.height.large
            : global(theme).navigation.navBar.height.small;

    // if second value is not defined use first array index value for both
    return [heights[0], heights?.[1] === undefined ? heights[0] : heights[1]];
};

/**
 * Get full height of navigation bar.
 * Array values are like [mobile, desktop]
 */
export const getFullHeight = (
    theme: DefaultTheme,
    size?: NavBarSize
): [number, number] => {
    const hasTopNav = global(theme).navigation.navBar.isTopNavVisible;
    const topNavHeights = getTopNavHeights(theme, size);
    const mainHeights = getMainHeights(theme, size);

    // calculate mobile navbar height
    const mobile = (hasTopNav ? topNavHeights[0] : 0) + mainHeights[0];

    // calculate desktop navbar height
    const desktop = topNavHeights[1] + mainHeights[1];

    return [mobile, desktop];
};

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

// #TODO: Top navbar animiert auftauchen und einfahren lassen
const TopNav = styled.nav<{ size?: NavBarSize; clamp?: boolean }>`
    display: ${({ theme, size }) =>
        getTopNavHeights(theme, size)[0] === 0 ? 'none' : 'flex'};
    align-items: center;
    max-width: ${({ clamp }) =>
        clamp ? spacings.wrapper : spacings.wrapperLarge}px;
    padding: ${spacings.nudge}px ${spacings.nudge * 2}px;
    margin: 0 auto;

    height: ${({ theme, size }) => getTopNavHeights(theme, size)[0]}px;

    @media ${mq.semilarge} {
        display: ${({ theme, size }) =>
            getTopNavHeights(theme, size)[1] === 0 ? 'none' : 'flex'};

        height: ${({ theme, size }) => getTopNavHeights(theme, size)[1]}px;
    }
`;

const Content = styled.div<{ size?: NavBarSize; clamp?: boolean }>`
    display: flex;
    max-width: ${({ clamp }) =>
        clamp ? spacings.wrapper : spacings.wrapperLarge}px;
    padding: ${spacings.nudge * 2}px;
    margin: 0 auto;

    height: ${({ theme, size }) => getMainHeights(theme, size)[0]}px;

    transition: height 0.2s ease-in-out;
    will-change: height;

    @media ${mq.semilarge} {
        height: ${({ theme, size }) =>
            getMainHeights(theme, size)[1] || getMainHeights(theme, size)[0]}px;
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

const BarSpacer = styled.div`
    height: ${({ theme }) => getFullHeight(theme, 'large')[0]}px;

    @media ${mq.semilarge} {
        height: ${({ theme }) => getFullHeight(theme, 'large')[1]}px;
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
