import React, { FC, useMemo } from 'react';
import styled, { DefaultTheme } from 'styled-components';
import {
    spacings,
    mq,
    getGlobals as global,
    getColors as color,
} from 'utils/styles';
import { clampValue } from 'utils/clamp';
import { useLibTheme } from 'utils/LibThemeProvider';
import Skeletons from './skeletons/Skeletons';

export const getTopHeights = (
    theme: DefaultTheme,
    size?: NavBarSize
): [number, number] => {
    const heights =
        size === 'large'
            ? global(theme).navigation.navBar.topHeight.large
            : global(theme).navigation.navBar.topHeight.small;

    // if second value is not defined use first array index value for both
    return [
        clampValue(heights[0], 0),
        clampValue(heights?.[1] === undefined ? heights[0] : heights[1], 0),
    ];
};

export const hasTopBar = (theme: DefaultTheme) => {
    const largeHeights = getTopHeights(theme, 'large');
    const smallHeights = getTopHeights(theme, 'small');

    return (
        largeHeights[0] > 0 ||
        largeHeights[1] > 0 ||
        smallHeights[0] > 0 ||
        smallHeights[1] > 0
    );
};

export const getMainHeights = (
    theme: DefaultTheme,
    size?: NavBarSize
): [number, number] => {
    const heights =
        size === 'large'
            ? global(theme).navigation.navBar.mainHeight.large
            : global(theme).navigation.navBar.mainHeight.small;

    // if second value is not defined use first array index value for both
    return [
        clampValue(heights[0], 0),
        clampValue(heights?.[1] === undefined ? heights[0] : heights[1], 0),
    ];
};

export const getBottomHeights = (
    theme: DefaultTheme,
    size?: NavBarSize
): [number, number] => {
    const heights =
        size === 'large'
            ? global(theme).navigation.navBar.bottomHeight.large
            : global(theme).navigation.navBar.bottomHeight.small;

    // if second value is not defined use first array index value for both
    return [
        clampValue(heights[0], 0),
        clampValue(heights?.[1] === undefined ? heights[0] : heights[1], 0),
    ];
};

export const hasBottomBar = (theme: DefaultTheme) => {
    const largeHeights = getBottomHeights(theme, 'large');
    const smallHeights = getBottomHeights(theme, 'small');

    return (
        largeHeights[0] > 0 ||
        largeHeights[1] > 0 ||
        smallHeights[0] > 0 ||
        smallHeights[1] > 0
    );
};

export type ExcludeType = 'top' | 'main' | 'bottom';

/**
 * Get full height of navigation bar
 * @param theme Theme object
 * @param size Navigation bar size
 * @param exclude Exclude parts of the navbar for height calculation
 * @returns [mobile, desktop]
 */
export const getFullHeight = (
    theme: DefaultTheme,
    size?: NavBarSize,
    exclude?: ExcludeType[]
): [number, number] => {
    const includeTop = exclude ? exclude.indexOf('top') === -1 : true;
    const includeMain = exclude ? exclude.indexOf('main') === -1 : true;
    const includeBottom = exclude ? exclude.indexOf('bottom') === -1 : true;

    const topHeights = includeTop ? getTopHeights(theme, size) : [0, 0];
    const mainHeights = includeMain ? getMainHeights(theme, size) : [0, 0];
    const bottomHeights = includeBottom
        ? getBottomHeights(theme, size)
        : [0, 0];

    // calculate mobile navbar height
    const mobile = topHeights[0] + mainHeights[0] + bottomHeights[0];

    // calculate desktop navbar height
    const desktop = topHeights[1] + mainHeights[1] + bottomHeights[1];

    return [mobile, desktop];
};

const View = styled.div<{
    isOpen?: boolean;
    isSticky?: boolean;
    isAnimated?: boolean;
    bgGradient?: string;
}>`
    position: ${({ isSticky }) => (isSticky ? 'fixed' : 'absolute')};
    top: 0;
    left: 0;
    right: 0;

    transform: ${({ isOpen }) => !isOpen && 'translate3d(0, -101%, 0)'};

    margin: 0 auto;
    max-width: ${spacings.wrapperLarge}px;
    z-index: 100;

    ${({ isAnimated }) => `transition: ${
        isAnimated ? 'transform 0.3s ease-in-out, ' : ''
    }height 0.3s ease-in-out,
                opacity 0.3s ease-in-out;`}
    will-change: transform;

    &:before {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: ${({ bgGradient }) => bgGradient || ''};
        z-index: -1;
    }
`;

const Header = styled.div<{ size?: NavBarSize; background?: string }>`
    opacity: ${({ theme, size }) =>
        getTopHeights(theme, size)[0] > 0 ? 1 : 0};
    pointer-events: ${({ theme, size }) =>
        getTopHeights(theme, size)[0] > 0 ? 'all' : 'none'};
    overflow: ${({ theme, size }) =>
        getTopHeights(theme, size)[0] <= 0 && 'hidden'};

    background-color: ${({ background }) => background};
    color: ${({ theme, background }) =>
        background
            ? color(theme).new.text.default
            : color(theme).new.text.inverted};

    transition: background-color 0.2s ease-in-out;

    @media ${mq.semilarge} {
        opacity: ${({ theme, size }) =>
            getTopHeights(theme, size)[1] > 0 ? 1 : 0};
        pointer-events: ${({ theme, size }) =>
            getTopHeights(theme, size)[1] > 0 ? 'all' : 'none'};
        overflow: ${({ theme, size }) =>
            getTopHeights(theme, size)[1] <= 0 && 'hidden'};
    }
`;

const Main = styled.div<{ background?: string }>`
    background-color: ${({ background }) => background};
    color: ${({ theme, background }) =>
        background
            ? color(theme).new.text.default
            : color(theme).new.text.inverted};

    transition: background-color 0.2s ease-in-out;
`;

const Footer = styled.div<{ size?: NavBarSize; background?: string }>`
    opacity: ${({ theme, size }) =>
        getBottomHeights(theme, size)[0] > 0 ? 1 : 0};
    pointer-events: ${({ theme, size }) =>
        getBottomHeights(theme, size)[0] > 0 ? 'all' : 'none'};
    overflow: ${({ theme, size }) =>
        getBottomHeights(theme, size)[0] <= 0 && 'hidden'};

    background-color: ${({ background }) => background};
    color: ${({ theme, background }) =>
        background
            ? color(theme).new.text.default
            : color(theme).new.text.inverted};

    opacity: ${({ theme, size }) =>
        getBottomHeights(theme, size)[0] > 0 ? 1 : 0};

    transition: background-color 0.2s ease-in-out, opacity 0.2s ease-in-out;

    @media ${mq.semilarge} {
        opacity: ${({ theme, size }) =>
            getBottomHeights(theme, size)[1] > 0 ? 1 : 0};
        pointer-events: ${({ theme, size }) =>
            getBottomHeights(theme, size)[1] > 0 ? 'all' : 'none'};
        overflow: ${({ theme, size }) =>
            getBottomHeights(theme, size)[1] <= 0 && 'hidden'};

        opacity: ${({ theme, size }) =>
            getBottomHeights(theme, size)[1] > 0 ? 1 : 0};
    }
`;

const TopContent = styled.div<{ size?: NavBarSize; clamp?: boolean }>`
    display: flex;
    justify-content: flex-end;
    position: relative;
    max-width: ${({ clamp }) =>
        clamp ? spacings.wrapper : spacings.wrapperLarge}px;
    padding: ${({ size, theme }) =>
        getTopHeights(theme, size)[0] > 0 && `0 ${spacings.nudge * 2}px`};
    margin: 0 auto;

    height: ${({ theme, size }) => getTopHeights(theme, size)[0]}px;

    transition: height 0.2s ease-in-out, padding-top 0.2s ease-in-out,
        padding-bottom 0.2s ease-in-out;
    will-change: height;

    @media ${mq.semilarge} {
        height: ${({ theme, size }) => getTopHeights(theme, size)[1]}px;
        padding: ${({ size, theme }) =>
            getTopHeights(theme, size)[1] > 0 && `0 ${spacings.nudge * 2}px`};
    }
`;

const Content = styled.div<{ size?: NavBarSize; clamp?: boolean }>`
    display: flex;
    position: relative;
    max-width: ${({ clamp }) =>
        clamp ? spacings.wrapper : spacings.wrapperLarge}px;
    padding: 0 ${spacings.nudge * 2}px;
    margin: 0 auto;

    height: ${({ theme, size }) => getMainHeights(theme, size)[0]}px;

    transition: height 0.2s ease-in-out;
    will-change: height;

    @media ${mq.semilarge} {
        height: ${({ theme, size }) =>
            getMainHeights(theme, size)[1] || getMainHeights(theme, size)[0]}px;
    }
`;

const BottomContent = styled.div<{ size?: NavBarSize; clamp?: boolean }>`
    display: flex;
    justify-content: flex-start;
    position: relative;
    max-width: ${({ clamp }) =>
        clamp ? spacings.wrapper : spacings.wrapperLarge}px;
    padding: 0 ${spacings.nudge * 2}px;
    margin: 0 auto;

    height: ${({ theme, size }) => getBottomHeights(theme, size)[0]}px;
    transition: 0.2s height ease-in-out;

    @media ${mq.semilarge} {
        height: ${({ theme, size }) => getBottomHeights(theme, size)[1]}px;
        padding: 0 ${spacings.nudge * 2}px;
    }
`;

const BarSpacer = styled.div<{ hasHeader?: boolean; hasFooter?: boolean }>`
    height: ${({ theme, hasHeader, hasFooter }) => {
        const excludes: ExcludeType[] = [];
        if (!hasHeader) excludes.push('top');
        if (!hasFooter) excludes.push('bottom');

        return getFullHeight(theme, 'large', excludes)[0];
    }}px;

    @media ${mq.semilarge} {
        height: ${({ theme, hasHeader, hasFooter }) => {
            const excludes: ExcludeType[] = [];
            if (!hasHeader) excludes.push('top');
            if (!hasFooter) excludes.push('bottom');

            return getFullHeight(theme, 'large', excludes)[1];
        }}px;
    }
`;

export type NavBarSize = 'small' | 'large';

export interface BarStates {
    size: NavBarSize;
    isOpen?: boolean;
    isSticky?: boolean;
    pageFlow?: PageFlow;
}

export type PageFlow = 'overContent' | 'beforeContent';

export interface NavBarProps {
    size?: NavBarSize;
    isOpen?: boolean;
    isSticky?: boolean;
    isAnimated?: boolean;
    clampWidth?: 'content' | 'full';
    pageFlow?: PageFlow;

    topBg?: string;
    mainBg?: string;
    bottomBg?: string;
    /** Custom background value for NavBar with pageFlow === overContent and large size  */
    onContentBg?: string;

    topBar?: ((props: BarStates) => React.ReactNode) | null;
    mainBar?: ((props: BarStates) => React.ReactNode) | null;
    bottomBar?: ((props: BarStates) => React.ReactNode) | null;
}

const NavBar: FC<
    NavBarProps & {
        className?: string;
    }
> = ({
    size = 'large',
    isOpen = false,
    isSticky = false,
    isAnimated = false,
    clampWidth = false,
    pageFlow = 'beforeContent',
    topBg,
    mainBg,
    bottomBg,
    onContentBg,
    topBar,
    mainBar,
    bottomBar,
    className,
}) => {
    const { theme, colors } = useLibTheme();
    const clampContent = clampWidth === 'content';
    const isOverContent = pageFlow === 'overContent';

    const hasHeader = useMemo(
        () => hasTopBar(theme) && topBar !== null,
        [theme, topBar]
    );
    const hasFooter = useMemo(
        () => hasBottomBar(theme) && bottomBar !== null,
        [bottomBar, theme]
    );
    const showBg = useMemo(
        () => size === 'small' || (size === 'large' && !isOverContent),
        [isOverContent, size]
    );

    const topBackground = topBg || colors.new.elementBg.light;
    const mainBackground = mainBg || colors.new.elementBg.light;
    const bottomBackground = bottomBg || colors.new.elementBg.light;
    const onContentBackground =
        onContentBg ||
        'linear-gradient(180deg,rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0) 100%)';

    const topBarContent = useMemo(
        () =>
            topBar &&
            topBar({
                size,
                isOpen,
                isSticky,
                pageFlow,
            }),
        [topBar, isOpen, isSticky, pageFlow, size]
    );

    const bottomBarContent = useMemo(
        () =>
            bottomBar &&
            bottomBar({
                size,
                isOpen,
                isSticky,
                pageFlow,
            }),
        [bottomBar, isOpen, isSticky, pageFlow, size]
    );

    return (
        <React.Fragment>
            {pageFlow === 'beforeContent' && (
                <BarSpacer hasHeader={hasHeader} hasFooter={hasFooter} />
            )}
            <View
                isOpen={isOpen}
                isSticky={isSticky}
                isAnimated={isAnimated}
                bgGradient={
                    size === 'large' && isOverContent
                        ? onContentBackground
                        : undefined
                }
                className={className}
            >
                {hasHeader && (
                    <Header
                        size={size}
                        background={showBg ? topBackground : undefined}
                    >
                        <TopContent size={size} clamp={clampContent}>
                            {topBarContent ? (
                                topBarContent
                            ) : (
                                <Skeletons.Col isInverted>
                                    Top Nav
                                </Skeletons.Col>
                            )}
                        </TopContent>
                    </Header>
                )}
                {mainBar !== null && (
                    <Main background={showBg ? mainBackground : undefined}>
                        <Content size={size} clamp={clampContent}>
                            {mainBar ? (
                                mainBar({ size, isOpen, isSticky, pageFlow })
                            ) : (
                                <React.Fragment>
                                    <Skeletons.Col
                                        takeSpace
                                        isInverted={
                                            size === 'large' && isOverContent
                                        }
                                    >
                                        Left
                                    </Skeletons.Col>
                                    <Skeletons.Col
                                        isInverted={
                                            size === 'large' && isOverContent
                                        }
                                    >
                                        Center
                                    </Skeletons.Col>
                                    <Skeletons.Col
                                        takeSpace
                                        isInverted={
                                            size === 'large' && isOverContent
                                        }
                                    >
                                        Right
                                    </Skeletons.Col>
                                </React.Fragment>
                            )}
                        </Content>
                    </Main>
                )}
                {hasFooter && (
                    <Footer
                        size={size}
                        background={showBg ? bottomBackground : undefined}
                    >
                        <BottomContent size={size} clamp={clampContent}>
                            {bottomBarContent ? bottomBarContent : 'bottom bar'}
                        </BottomContent>
                    </Footer>
                )}
            </View>
        </React.Fragment>
    );
};

export default NavBar;
