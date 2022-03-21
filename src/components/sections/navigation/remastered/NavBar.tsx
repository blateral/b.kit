import React, { FC, useMemo } from 'react';
import styled, { DefaultTheme } from 'styled-components';
import {
    spacings,
    mq,
    getColors as color,
    getGlobals as global,
} from 'utils/styles';
import Copy from 'components/typography/Copy';
import { clampValue } from 'utils/clamp';
import { useLibTheme } from 'utils/LibThemeProvider';

const getTopHeights = (
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

const hasTopBar = (theme: DefaultTheme) => {
    const largeHeights = getTopHeights(theme, 'large');
    const smallHeights = getTopHeights(theme, 'small');

    return (
        largeHeights[0] > 0 ||
        largeHeights[1] > 0 ||
        smallHeights[0] > 0 ||
        smallHeights[1] > 0
    );
};

const getMainHeights = (
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

const getBottomHeights = (
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

const hasBottomBar = (theme: DefaultTheme) => {
    const largeHeights = getBottomHeights(theme, 'large');
    const smallHeights = getBottomHeights(theme, 'small');

    return (
        largeHeights[0] > 0 ||
        largeHeights[1] > 0 ||
        smallHeights[0] > 0 ||
        smallHeights[1] > 0
    );
};

type IncludeType = 'top' | 'main' | 'bottom';

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
    exclude?: IncludeType[]
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
}>`
    position: ${({ isSticky }) => (isSticky ? 'fixed' : 'absolute')};
    top: 0;
    left: 0;
    right: 0;

    transform: ${({ isOpen }) => !isOpen && 'translate3d(0, -101%, 0)'};
    opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};

    margin: 0 auto;
    max-width: ${spacings.wrapperLarge}px;

    ${({ isAnimated }) => `transition: ${
        isAnimated ? 'transform 0.3s ease-in-out, ' : ''
    }height 0.3s ease-in-out,
                opacity 0.3s ease-in-out;`}
    will-change: transform;
`;

const Header = styled.div<{ size?: NavBarSize }>`
    opacity: ${({ theme, size }) =>
        getTopHeights(theme, size)[0] > 0 ? 1 : 0};
    pointer-events: ${({ theme, size }) =>
        getTopHeights(theme, size)[0] > 0 ? 'all' : 'none'};
    overflow: ${({ theme, size }) =>
        getTopHeights(theme, size)[0] <= 0 && 'hidden'};

    background: ${({ theme }) => color(theme).new.primary.default};

    @media ${mq.semilarge} {
        opacity: ${({ theme, size }) =>
            getTopHeights(theme, size)[1] > 0 ? 1 : 0};
        pointer-events: ${({ theme, size }) =>
            getTopHeights(theme, size)[1] > 0 ? 'all' : 'none'};
        overflow: ${({ theme, size }) =>
            getTopHeights(theme, size)[1] <= 0 && 'hidden'};
    }
`;

const Main = styled.div<{ isOverContent?: boolean; gradient?: string }>`
    background: ${({ theme, isOverContent, gradient }) =>
        isOverContent && gradient
            ? gradient
            : color(theme).new.elementBg.light};

    transform: translateZ(0);
    transition: background 0.15s ease-in-out;
    will-change: background;
`;

const Footer = styled.div<{ size?: NavBarSize }>`
    opacity: ${({ theme, size }) =>
        getBottomHeights(theme, size)[0] > 0 ? 1 : 0};
    pointer-events: ${({ theme, size }) =>
        getBottomHeights(theme, size)[0] > 0 ? 'all' : 'none'};
    overflow: ${({ theme, size }) =>
        getBottomHeights(theme, size)[0] <= 0 && 'hidden'};

    background: ${({ theme }) => color(theme).new.elementBg.light};

    @media ${mq.semilarge} {
        opacity: ${({ theme, size }) =>
            getBottomHeights(theme, size)[1] > 0 ? 1 : 0};
        pointer-events: ${({ theme, size }) =>
            getBottomHeights(theme, size)[1] > 0 ? 'all' : 'none'};
        overflow: ${({ theme, size }) =>
            getBottomHeights(theme, size)[1] <= 0 && 'hidden'};
    }
`;

const TopNav = styled.div<{ size?: NavBarSize; clamp?: boolean }>`
    display: flex;
    align-items: center;
    max-width: ${({ clamp }) =>
        clamp ? spacings.wrapper : spacings.wrapperLarge}px;
    padding: ${({ size, theme }) =>
        getTopHeights(theme, size)[0] > 0 &&
        `${spacings.nudge}px ${spacings.nudge * 2}px`};
    margin: 0 auto;

    height: ${({ theme, size }) => getTopHeights(theme, size)[0]}px;

    transition: height 0.2s ease-in-out, padding-top 0.2s ease-in-out,
        padding-bottom 0.2s ease-in-out;
    will-change: height;

    @media ${mq.semilarge} {
        height: ${({ theme, size }) => getTopHeights(theme, size)[1]}px;
        padding: ${({ size, theme }) =>
            getTopHeights(theme, size)[1] > 0 &&
            `${spacings.nudge}px ${spacings.nudge * 2}px`};
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

const BreadCrumps = styled.div<{ size?: NavBarSize; clamp?: boolean }>`
    display: flex;
    align-items: center;
    max-width: ${({ clamp }) =>
        clamp ? spacings.wrapper : spacings.wrapperLarge}px;
    padding: ${spacings.nudge}px ${spacings.nudge * 2}px;
    margin: 0 auto;

    height: ${({ theme, size }) => getBottomHeights(theme, size)[0]}px;

    @media ${mq.semilarge} {
        height: ${({ theme, size }) => getBottomHeights(theme, size)[1]}px;
        padding: ${spacings.nudge}px ${spacings.nudge * 2}px;
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

export interface TopNavProps {
    size: NavBarSize;
    isOpen?: boolean;
    isSticky?: boolean;
}

export interface NavBarProps {
    size?: NavBarSize;
    isOpen?: boolean;
    isSticky?: boolean;
    isAnimated?: boolean;
    clampWidth?: 'content' | 'full';
    pageFlow?: 'overContent' | 'beforeContent';

    /** Custom background value for NavBar with pageFlow === overContent and large size  */
    customBg?: string;

    topNav?: (props: TopNavProps) => React.ReactNode;
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
    customBg,
    topNav,
    className,
}) => {
    const { theme } = useLibTheme();
    const clampContent = clampWidth === 'content';

    const hasHeader = useMemo(() => hasTopBar(theme), [theme]);
    const hasFooter = useMemo(() => hasBottomBar(theme), [theme]);
    const isOverContent = pageFlow === 'overContent';

    const backgroundGradient =
        customBg ||
        'linear-gradient(180deg,rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0) 100%)';

    return (
        <React.Fragment>
            {pageFlow === 'beforeContent' && <BarSpacer />}
            <View
                isOpen={isOpen}
                isSticky={isSticky}
                isAnimated={isAnimated}
                className={className}
            >
                {hasHeader && (
                    <Header size={size}>
                        <TopNav size={size} clamp={clampContent}>
                            {topNav ? (
                                topNav({ size, isOpen, isSticky })
                            ) : (
                                <CenterCol size="small" isInverted>
                                    Top Nav
                                </CenterCol>
                            )}
                        </TopNav>
                    </Header>
                )}
                <Main
                    isOverContent={isOverContent}
                    gradient={size === 'large' ? backgroundGradient : undefined}
                >
                    <Content size={size} clamp={clampContent}>
                        <LeftCol isInverted={isOverContent}>
                            Column Left
                        </LeftCol>
                        <CenterCol isInverted={isOverContent}>
                            <Logo src="https://via.placeholder.com/320x80" />
                        </CenterCol>
                        <RightCol isInverted={isOverContent}>
                            Column Right
                        </RightCol>
                    </Content>
                </Main>
                {hasFooter && (
                    <Footer size={size}>
                        <BreadCrumps size={size} clamp={clampContent}>
                            Breadcrumps
                        </BreadCrumps>
                    </Footer>
                )}
            </View>
        </React.Fragment>
    );
};

export default NavBar;
