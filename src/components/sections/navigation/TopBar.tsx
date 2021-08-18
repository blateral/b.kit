import MenuBurger from 'components/base/icons/MenuBurger';
import Wrapper from 'components/base/Wrapper';
import Link from 'components/typography/Link';
import React, { FC, useContext, useEffect, useRef, useState } from 'react';
import styled, { ThemeContext } from 'styled-components';

import { spacings, getColors as color, mq, withRange } from 'utils/styles';
import { useMediaQuery } from 'utils/useMediaQuery';
import { ScrollDirection, useScroll } from 'utils/useScroll';
import { LogoProps } from './Navigation';

const TopWhitespace = styled.div<{ logoHeight?: number; showLarge?: boolean }>`
    width: 100%;
    height: ${({ logoHeight, showLarge }) =>
        logoHeight ? logoHeight + (showLarge ? 25 : 10) + 'px' : '140px'};

    @media ${mq.semilarge} {
        height: ${({ logoHeight, showLarge }) =>
            logoHeight ? logoHeight + (showLarge ? 50 : 30) + 'px' : '140px'};
    }
`;

const View = styled.div<{
    isVisible?: boolean;
    isLarge?: boolean;
    showLarge?: boolean;
    isOpen?: boolean;
    isInverted?: boolean;
    animated?: boolean;
    allowOffset?: boolean;
    isBackVisible?: boolean;
}>`
    position: ${({ isLarge }) => (isLarge ? 'absolute' : 'fixed')};
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 10;
    max-width: ${spacings.wrapperLarge}px;
    padding: ${({ showLarge, isOpen }) =>
            !showLarge && isOpen ? spacings.nudge : spacings.spacer}px
        0 ${spacings.nudge}px 0;
    margin: 0 auto;
    overflow: hidden;

    background-color: ${({
        theme,
        isInverted,
        isLarge,
        isBackVisible,
        allowOffset,
    }) =>
        isBackVisible
            ? isInverted
                ? (!isLarge || !allowOffset) &&
                  `rgba(0, 0, 0, ${!isLarge ? 0.3 : 0})`
                : (!isLarge || !allowOffset) && color(theme).light
            : 'transparent'};

    box-shadow: 0px 4px 4px
        ${({ isInverted, isLarge, isOpen, isBackVisible }) =>
            isInverted || !isBackVisible
                ? `transparent`
                : isOpen && !isLarge
                ? `rgba(0, 0, 0, 0.13)`
                : 'transparent'};

    opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
    pointer-events: ${({ isVisible }) => (isVisible ? 'all' : 'none')};

    transform: translate(0, ${({ isOpen }) => (!isOpen ? '-100%' : '0')});

    transition: ${({ animated }) =>
                animated ? 'transform 0.3s cubic-bezier(.71,0,.29,1),' : ''}
            height 0.2s ease-in-out,
        background-color 0.3s ease-in-out, padding 0.2s ease-in-out,
        box-shadow 0.2s ease-in-out, opacity 0.2s ease-in-out;
    will-change: transform, background-color, padding, height, box-shadow,
        opacity;

    @media ${mq.semilarge} {
        padding: ${({ showLarge, isOpen }) =>
                !showLarge && isOpen
                    ? spacings.nudge * 3
                    : spacings.nudge * 7}px
            0 ${spacings.nudge * 3}px 0;
    }
`;

const Content = styled(Wrapper)`
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

const Column = styled.div<{
    isTop?: boolean;
}>`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;
    color: ${({ theme }) => color(theme).light};

    transition: padding-top 0.2s ease-in-out;
`;

const LeftCol = styled(Column)`
    flex: 1;
    justify-content: flex-start;
    align-self: ${({ isTop }) => (isTop ? 'flex-start' : 'center')};
    text-align: left;

    ${({ isTop }) =>
        isTop &&
        withRange([spacings.nudge, spacings.nudge * 1.5], 'padding-top')}
`;

const CenterCol = styled(Column)`
    display: flex;
    align-self: ${({ isTop }) => (isTop ? 'flex-start' : 'center')};
    padding: 0 ${spacings.nudge * 2}px;
    text-align: center;
`;

const RightCol = styled(Column)`
    flex: 1;
    justify-content: flex-end;
    align-self: ${({ isTop }) => (isTop ? 'flex-start' : 'center')};
    text-align: right;

    ${({ isTop }) =>
        isTop &&
        withRange([spacings.nudge, spacings.nudge * 1.5], 'padding-top')}

    & > * {
        min-width: auto;
    }

    & > * + * {
        margin-left: ${spacings.nudge * 3}px;
    }

    @media ${mq.semilarge} {
        & > * + * {
            margin-left: ${spacings.spacer}px;
        }
    }
`;

const ToggleContainer = styled.div<{
    iconColor?: string;
    isMirrored?: boolean;
}>`
    cursor: pointer;
    padding: ${spacings.nudge * 2}px;
    margin: ${({ isMirrored }) => !isMirrored && -spacings.nudge * 2}px;

    color: ${({ iconColor }) => iconColor && iconColor};
`;

const StyledMenuBurger = styled(MenuBurger)`
    margin-top: ${spacings.nudge}px;
`;

const LogoLink = styled(Link)<{ logoHeight?: number }>`
    display: flex;
    justify-content: center;
    position: relative;
    height: ${({ logoHeight }) => logoHeight && logoHeight + 'px'};
    width: auto;

    color: ${({ theme }) => color(theme).light};
    transition: height 0.2s ease-in-out, width 0.2s ease-in-out;
    will-change: height, width;

    & > * {
        max-height: 100%;
        height: 100%;
    }
`;

const clampValue = (num: number, min: number, max: number) => {
    return Math.min(Math.max(num, min), max);
};

type TopBarMq = 'semilarge' | 'large';

const TopBar: FC<{
    isVisible?: boolean;
    isBackVisible?: boolean;
    isInverted?: boolean;
    isMirrored?: boolean;
    allowTopOverlow?: boolean;
    isLargeOnPageTop?: boolean;
    onToggleClick?: () => void;
    toggleIcon?: (isInverted?: boolean) => React.ReactNode;
    logo?: LogoProps;
    primaryAction?: (props: {
        isInverted?: boolean;
        size?: 'mobile' | 'desktop';
        name?: string;
    }) => React.ReactNode;
    secondaryAction?: (props: {
        isInverted?: boolean;
        size?: 'mobile' | 'desktop';
        name?: string;
    }) => React.ReactNode;
    className?: string;
}> = ({
    isVisible = true,
    isInverted = false,
    isMirrored = false,
    isBackVisible = true,
    allowTopOverlow = true,
    isLargeOnPageTop = true,
    onToggleClick,
    toggleIcon,
    logo,
    primaryAction,
    secondaryAction,
    className,
}) => {
    const theme = useContext(ThemeContext);
    const viewRef = useRef<HTMLDivElement | null>(null);
    const [isOpen, setIsOpen] = useState(true);
    const [isLarge, setIsLarge] = useState(true);
    const [isAnimated, setIsAnimated] = useState(false);
    const defaultLogoScale: Pick<
        LogoProps,
        'pageTopScale' | 'scrolledScale'
    > = {
        pageTopScale: {
            mobile: 1,
            desktop: 1,
            ...logo?.pageTopScale,
        },
        scrolledScale: {
            mobile: 0.6,
            desktop: 0.6,
            ...logo?.scrolledScale,
        },
    };

    const mqs: TopBarMq[] = ['semilarge', 'large'];
    const currentMq = useMediaQuery(mqs) as TopBarMq | undefined;

    const { isTop, isInOffset, scrollDirection, setTopOffset } = useScroll({});

    useEffect(() => {
        if (!isInOffset) {
            if (scrollDirection === ScrollDirection.UP) {
                setIsOpen(true);
                setIsAnimated(true);
            } else if (scrollDirection === ScrollDirection.DOWN) {
                setIsOpen(false);
            }
        }
    }, [isInOffset, scrollDirection]);

    useEffect(() => {
        if (!isInOffset && !isTop) {
            setIsLarge((prev) => {
                if (prev) setIsAnimated(false);
                return false;
            });
        }
    }, [isInOffset, isLarge, isTop]);

    useEffect(() => {
        if (isTop) setIsLarge(true);
    }, [isTop]);

    // check if top bar is inverted
    const isBarInverted =
        (isLarge && allowTopOverlow) || isInverted || !isBackVisible;

    // get scale factor of topbar logo
    let logoScale = 1;
    // get scale for current media query
    const scalePageTop =
        defaultLogoScale.pageTopScale?.[
            currentMq === 'large' ? 'desktop' : 'mobile'
        ];
    const scaleScrolled =
        defaultLogoScale.scrolledScale?.[
            currentMq === 'large' ? 'desktop' : 'mobile'
        ];

    const scale = (isLargeOnPageTop ? isLarge : false)
        ? scalePageTop
        : scaleScrolled;
    if (scale !== undefined) logoScale = scale;

    // calc logo height
    const logoHeight = clampValue(115 * logoScale, 60, 300);
    const logoTopHeight =
        scalePageTop &&
        scaleScrolled &&
        clampValue(
            115 * (isLargeOnPageTop ? scalePageTop : scaleScrolled),
            60,
            300
        );

    // calculate top scroll offset
    useEffect(() => {
        const showLarge = isLargeOnPageTop ? isLarge : false;

        if (currentMq === 'large') {
            setTopOffset(logoHeight + (showLarge ? 25 : 10));
        } else {
            setTopOffset(logoHeight + (showLarge ? 50 : 30));
        }
    }, [setTopOffset, currentMq, isLargeOnPageTop, isLarge, logoHeight]);

    return (
        <>
            {!allowTopOverlow && (
                <TopWhitespace
                    showLarge={isLargeOnPageTop}
                    logoHeight={logoTopHeight}
                />
            )}
            <View
                ref={viewRef}
                isInverted={isInverted}
                isVisible={isVisible}
                isBackVisible={isBackVisible}
                isOpen={isOpen}
                isLarge={isLarge}
                showLarge={isLargeOnPageTop ? isLarge : false}
                animated={isAnimated}
                allowOffset={allowTopOverlow}
                className={className}
            >
                <Content clampWidth="normal" addWhitespace>
                    {!isMirrored && (
                        <LeftCol isTop={isLargeOnPageTop ? isLarge : false}>
                            <ToggleContainer
                                onClick={onToggleClick}
                                iconColor={
                                    isInverted
                                        ? color(theme).light
                                        : color(theme).dark
                                }
                            >
                                {toggleIcon ? (
                                    toggleIcon(isBarInverted)
                                ) : (
                                    <StyledMenuBurger
                                        iconColor={
                                            isBarInverted
                                                ? color(theme).light
                                                : color(theme).dark
                                        }
                                    />
                                )}
                            </ToggleContainer>
                        </LeftCol>
                    )}
                    <CenterCol isTop={isLargeOnPageTop ? isLarge : false}>
                        {logo && (
                            <LogoLink href={logo.link} logoHeight={logoHeight}>
                                {logo.icon &&
                                    logo.icon({
                                        isInverted: isBarInverted,
                                        name: 'topbar_logo',
                                        size:
                                            currentMq !== 'large' ||
                                            !(isLargeOnPageTop
                                                ? isLarge
                                                : false)
                                                ? 'small'
                                                : 'full',
                                    })}
                            </LogoLink>
                        )}
                    </CenterCol>
                    <RightCol isTop={isLargeOnPageTop ? isLarge : false}>
                        {secondaryAction &&
                            secondaryAction({
                                isInverted: isBarInverted,
                                name: 'topbar_secondaryCta',
                                size:
                                    currentMq === 'large'
                                        ? 'desktop'
                                        : 'mobile',
                            })}
                        {primaryAction &&
                            primaryAction({
                                isInverted: isBarInverted,
                                name: 'topbar_primaryCta',
                                size:
                                    currentMq === 'large'
                                        ? 'desktop'
                                        : 'mobile',
                            })}
                        {isMirrored && (
                            <ToggleContainer
                                onClick={onToggleClick}
                                iconColor={
                                    isInverted
                                        ? color(theme).light
                                        : color(theme).dark
                                }
                                isMirrored
                            >
                                {toggleIcon ? (
                                    toggleIcon(isBarInverted)
                                ) : (
                                    <StyledMenuBurger
                                        iconColor={
                                            isBarInverted
                                                ? color(theme).light
                                                : color(theme).dark
                                        }
                                    />
                                )}
                            </ToggleContainer>
                        )}
                    </RightCol>
                </Content>
            </View>
        </>
    );
};

export default TopBar;
