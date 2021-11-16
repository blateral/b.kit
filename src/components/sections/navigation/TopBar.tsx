import MenuBurger from 'components/base/icons/MenuBurger';
import Wrapper from 'components/base/Wrapper';
import Link from 'components/typography/Link';
import React, { FC, useContext, useEffect, useRef, useState } from 'react';
import styled, { ThemeContext } from 'styled-components';

import { spacings, getColors as color, mq, withRange } from 'utils/styles';
import { useMediaQuery } from 'utils/useMediaQuery';
import { ScrollDirection, useScroll } from 'utils/useScroll';
import { LogoProps } from './Navigation';
import { clampValue } from 'utils/clamp';

const TopWhitespace = styled.div<{ height?: number; showLarge?: boolean }>`
    width: 100%;
    height: ${({ height, showLarge }) =>
        height ? height + (showLarge ? 25 : 10) + 'px' : '140px'};

    @media ${mq.large} {
        height: ${({ height, showLarge }) =>
            height ? height + (showLarge ? 50 : 30) + 'px' : '140px'};
    }
`;

const View = styled.div<{
    isVisible?: boolean;
    isLarge?: boolean;
    isTop?: boolean;
    isOpen?: boolean;
    isInverted?: boolean;
    animated?: boolean;
    allowOffset?: boolean;
    isBackVisible?: boolean;
    showLarge?: boolean;
    gradient: string;
}>`
    display: flex;
    align-items: ${({ showLarge }) => !showLarge && 'center'};
    position: ${({ isLarge }) => (isLarge ? 'absolute' : 'fixed')};
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 10;
    max-width: ${spacings.wrapperLarge}px;
    min-height: ${({ isLarge, showLarge }) =>
        showLarge && isLarge ? '111px' : '95px'};
    padding: ${({ showLarge, isOpen }) =>
            !showLarge && isOpen ? spacings.nudge : spacings.spacer}px
        0 ${spacings.nudge}px 0;
    margin: 0 auto;
    overflow: hidden;

    background: ${({
        theme,
        isInverted,
        isLarge,
        isBackVisible,
        allowOffset,
        gradient,
    }) =>
        isBackVisible
            ? isInverted
                ? !isLarge || !allowOffset
                    ? 'transparent'
                    : gradient
                : !isLarge || !allowOffset
                ? color(theme).light
                : gradient
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
        background 0.3s ease-in-out, padding 0.2s ease-in-out,
        box-shadow 0.2s ease-in-out, opacity 0.2s ease-in-out;
    will-change: transform, background, padding, height, box-shadow, opacity;

    @media ${mq.semilarge} {
        padding: ${({ showLarge, isOpen }) =>
                !showLarge && isOpen
                    ? spacings.nudge * 3
                    : spacings.nudge * 7}px
            0 ${spacings.nudge * 3}px 0;
    }

    @media ${mq.large} {
        min-height: ${({ isLarge, showLarge }) =>
            isLarge && showLarge ? '136px' : '115px'};
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

const LogoLink = styled(Link)<{
    logoHeight?: [number, number?];
    isAnimated?: boolean;
}>`
    display: flex;
    justify-content: center;
    position: relative;
    ${({ logoHeight }) =>
        logoHeight && logoHeight[1]
            ? withRange([logoHeight[0], logoHeight[1]], 'height')
            : `height: ${logoHeight?.[0]}`};
    width: auto;

    color: ${({ theme }) => color(theme).light};
    transition: ${({ isAnimated }) =>
        isAnimated && 'height 0.2s ease-in-out, width 0.2s ease-in-out'};
    will-change: height, width;

    & > * {
        max-height: 100%;
        height: 100%;
    }
`;

export const getMinMaxScale = (
    initial?: [number, number],
    scale?: number | [number, number?]
) => {
    let minMaxScale: [number, number] = initial || [1, 1];

    if (scale) {
        if (Array.isArray(scale)) {
            if (scale.length === 1) minMaxScale = [scale[0], scale[0]];
            else if (scale.length === 2)
                minMaxScale = [scale[0], scale[1] || minMaxScale[1]];
        } else {
            minMaxScale = [scale, scale];
        }
    }

    return minMaxScale;
};

type TopBarMq = 'semilarge' | 'large';

export interface DefaultLogoProps extends LogoProps {
    pageTopScale: {
        mobile: [number, number];
        desktop: [number, number];
    };
    scrolledScale: {
        mobile: [number, number];
        desktop: [number, number];
    };
}

const TopBar: FC<{
    isVisible?: boolean;
    isBackVisible?: boolean;
    isInverted?: boolean;
    isMirrored?: boolean;
    allowTopOverlow?: boolean;
    isLargeOnPageTop?: boolean;
    customGradient?: string;
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
    customGradient,
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
    const [isLarge, setIsLarge] = useState<boolean>(isLargeOnPageTop);
    const [isAnimated, setIsAnimated] = useState(false);
    const defaultLogoScale: Pick<
        DefaultLogoProps,
        'pageTopScale' | 'scrolledScale'
    > = {
        pageTopScale: {
            mobile: getMinMaxScale([1, 1], logo?.pageTopScale?.mobile),
            desktop: getMinMaxScale([1, 1], logo?.pageTopScale?.desktop),
        },
        scrolledScale: {
            mobile: getMinMaxScale([0.6, 0.6], logo?.scrolledScale?.mobile),
            desktop: getMinMaxScale([0.6, 0.6], logo?.scrolledScale?.desktop),
        },
    };

    const mqs: TopBarMq[] = ['semilarge', 'large'];
    const currentMq = useMediaQuery(mqs) as TopBarMq | undefined;

    const { isTop, isInOffset, scrollDirection, setTopOffset } = useScroll({});

    useEffect(() => {
        setIsAnimated(true);
    }, []);

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
        if (isTop && isLargeOnPageTop) setIsLarge(true);
    }, [isLargeOnPageTop, isTop]);

    // check if top bar is inverted
    const isBarInverted =
        (isLarge && allowTopOverlow) || isInverted || !isBackVisible;

    // get scale factor of topbar logo

    // get scale for current media query
    const scalePageTop =
        defaultLogoScale.pageTopScale?.[
            currentMq === 'large' ? 'desktop' : 'mobile'
        ];

    const scaleScrolled =
        defaultLogoScale.scrolledScale?.[
            currentMq === 'large' ? 'desktop' : 'mobile'
        ];

    let logoScale: [number, number] = [1, 1];
    const scale = (isLargeOnPageTop ? isLarge : false)
        ? scalePageTop
        : scaleScrolled;
    if (scale !== undefined) {
        logoScale = scale;
    }

    // calc logo height
    const minLogoHeight = clampValue(115 * logoScale[0], 1, 299);
    const maxLogoHeight = clampValue(115 * logoScale[1], 20, 300);

    // calculate logo height for top space
    const logoTopHeight =
        scalePageTop && scaleScrolled
            ? clampValue(
                  (currentMq === 'large' ? 115 : 86) *
                      (isLargeOnPageTop ? scalePageTop[1] : scaleScrolled[1]),
                  20,
                  300
              )
            : 60;
    const topSpace = clampValue(
        logoTopHeight,
        86,
        currentMq === 'large' ? 300 : 111
    );

    // calculate top scroll offset
    useEffect(() => {
        if (currentMq === 'large') {
            setTopOffset(topSpace + (isLarge ? 25 : 10));
        } else {
            setTopOffset(topSpace + (isLarge ? 50 : 30));
        }
    }, [setTopOffset, currentMq, isLarge, topSpace]);

    return (
        <>
            {!allowTopOverlow && (
                <TopWhitespace showLarge={isLargeOnPageTop} height={topSpace} />
            )}
            <View
                ref={viewRef}
                isInverted={isInverted}
                isVisible={isVisible}
                isBackVisible={isBackVisible}
                isOpen={isOpen}
                isLarge={isLarge}
                animated={isAnimated}
                allowOffset={allowTopOverlow}
                showLarge={isLargeOnPageTop ? isLarge : false}
                gradient={
                    customGradient ||
                    'linear-gradient(180deg,rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0) 100%)'
                }
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
                            <LogoLink
                                href={logo.link}
                                logoHeight={[minLogoHeight, maxLogoHeight]}
                                isAnimated={isAnimated}
                            >
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
