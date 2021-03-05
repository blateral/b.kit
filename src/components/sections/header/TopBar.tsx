import MenuBurger from 'components/base/icons/MenuBurger';
import Wrapper from 'components/base/Wrapper';
import Link from 'components/typography/Link';
import React, { FC, useContext, useEffect, useRef, useState } from 'react';
import styled, { ThemeContext } from 'styled-components';

import { spacings, getColors as color, mq, withRange } from 'utils/styles';
import { useMediaQuery } from 'utils/useMediaQuery';
import { ScrollDirection, useScroll } from 'utils/useScroll';
import { LogoProps } from './Header';

const View = styled.div<{
    isVisible?: boolean;
    isLarge?: boolean;
    isOpen?: boolean;
    isInverted?: boolean;
    animated?: boolean;
    isBackVisible?: boolean;
}>`
    position: ${({ isLarge }) => (isLarge ? 'absolute' : 'fixed')};
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 10;
    max-width: ${spacings.wrapperLarge}px;
    padding: ${({ isLarge, isOpen }) =>
            !isLarge && isOpen ? spacings.nudge : spacings.spacer}px
        0 ${spacings.nudge}px 0;
    margin: 0 auto;
    overflow: hidden;

    background-color: ${({ theme, isInverted, isLarge, isBackVisible }) =>
        isBackVisible
            ? isInverted
                ? !isLarge && `rgba(0, 0, 0, ${!isLarge ? 0.3 : 0})`
                : !isLarge && color(theme).light
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
        background-color 0.2s ease-in-out, padding 0.2s ease-in-out,
        box-shadow 0.2s ease-in-out, opacity 0.2s ease-in-out;
    will-change: transform, background-color, padding, height, box-shadow,
        opacity;

    @media ${mq.medium} {
        padding: ${({ isLarge, isOpen }) =>
                !isLarge && isOpen ? spacings.nudge * 3 : spacings.nudge * 7}px
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

const ToggleContainer = styled.div<{ iconColor?: string }>`
    cursor: pointer;
    padding: ${spacings.nudge * 2}px;
    margin: -${spacings.nudge * 2}px;

    color: ${({ iconColor }) => iconColor && iconColor};
`;

const StyledMenuBurger = styled(MenuBurger)`
    margin-top: ${spacings.nudge}px;
`;

const LogoLink = styled(Link)<{ logoHeight?: number }>`
    display: flex;
    justify-content: center;
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

type TopBarMq = 'semilarge' | 'large';

const TopBar: FC<{
    isVisible?: boolean;
    isBackVisible?: boolean;
    isInverted?: boolean;
    hideOnScrollDown?: boolean;
    withTopOffset?: boolean;
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
    hideOnScrollDown = true,
    withTopOffset = true,
    isBackVisible = true,
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

    const mqs: TopBarMq[] = ['semilarge', 'large'];
    const currentMq = useMediaQuery(mqs) as TopBarMq | undefined;

    const { isTop, isInOffset, scrollDirection, setTopOffset } = useScroll({});

    useEffect(() => {
        if (typeof window !== 'undefined' && viewRef.current && withTopOffset) {
            setTopOffset(viewRef.current.getBoundingClientRect().height);
        }
    }, [setTopOffset, withTopOffset, currentMq]);

    useEffect(() => {
        if (!isInOffset && hideOnScrollDown) {
            if (scrollDirection === ScrollDirection.UP) {
                setIsOpen(true);
                setIsAnimated(true);
            } else if (scrollDirection === ScrollDirection.DOWN) {
                setIsOpen(false);
            }
        }
    }, [hideOnScrollDown, isInOffset, scrollDirection]);

    useEffect(() => {
        if (!isInOffset) {
            setIsLarge((prev) => {
                if (prev) setIsAnimated(false);
                return false;
            });
        }
    }, [isInOffset, isLarge]);

    useEffect(() => {
        if (isTop) setIsLarge(true);
    }, [isTop]);

    // check if top bar is inverted
    const isBarInverted = isLarge || isInverted || !isBackVisible;

    return (
        <View
            ref={viewRef}
            isInverted={isInverted}
            isVisible={isVisible}
            isBackVisible={isBackVisible}
            isOpen={isOpen}
            isLarge={isLarge}
            animated={isAnimated}
            className={className}
        >
            <Content clampWidth="normal" addWhitespace>
                <LeftCol isTop={isLarge}>
                    <ToggleContainer
                        onClick={onToggleClick}
                        iconColor={
                            isInverted ? color(theme).light : color(theme).dark
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
                <CenterCol isTop={isLarge}>
                    {logo && (
                        <LogoLink
                            href={logo.link}
                            logoHeight={
                                isLarge ? logo.logoHeightFull || 100 : 70
                            }
                        >
                            {logo.icon &&
                                logo.icon({
                                    isInverted: isBarInverted,
                                    name: 'topbar_logo',
                                    size:
                                        currentMq !== 'large' || !isLarge
                                            ? 'small'
                                            : 'full',
                                })}
                        </LogoLink>
                    )}
                </CenterCol>
                <RightCol isTop={isLarge}>
                    {secondaryAction &&
                        secondaryAction({
                            isInverted: isBarInverted,
                            name: 'topbar_secondaryCta',
                            size: currentMq === 'large' ? 'desktop' : 'mobile',
                        })}
                    {primaryAction &&
                        primaryAction({
                            isInverted: isBarInverted,
                            name: 'topbar_primaryCta',
                            size: currentMq === 'large' ? 'desktop' : 'mobile',
                        })}
                </RightCol>
            </Content>
        </View>
    );
};

export default TopBar;
