import React, { FC } from 'react';
import styled from 'styled-components';

import { mq, spacings, getColors as color, withRange } from 'utils/styles';
import Wrapper from 'components/base/Wrapper';
import ArrowLeftGhost from 'components/base/icons/ArrowLeftGhost';
import ArrowRightGhost from 'components/base/icons/ArrowRightGhost';
import Slider from 'components/blocks/Slider';
import { ResponsiveObject } from 'react-slick';
import Intro from 'components/blocks/Intro';

const View = styled(Wrapper)`
    position: relative;
    overflow: hidden;

    @media ${mq.xlarge} {
        padding: 0;
    }
`;

const Head = styled(Wrapper)`
    display: flex;
    flex-direction: row;
`;

const IntroBlock = styled.div`
    ${withRange([spacings.spacer * 2, spacings.spacer * 3], 'padding-bottom')}
`;

const TopControls = styled.div`
    display: none;
    text-align: right;
    max-width: ${spacings.wrapper}px;
    margin-left: auto;
    ${withRange(
        [spacings.spacer * 0.5, spacings.spacer * 1.5],
        'margin-bottom'
    )};

    @media ${mq.semilarge} {
        display: flex;
        flex-direction: row;
        align-self: flex-end;
    }
`;

const StyledControl = styled(Slider.Control)<{ isInverted?: boolean }>`
    border: none;
    outline: none;
    background: none;
    padding: 0 ${spacings.nudge * 3}px;

    color: ${({ theme, isInverted }) =>
        isInverted ? color(theme).white : color(theme).black};
    transition: color 0.2s ease-in-out, transform 0.2s ease-in-out;

    &:enabled {
        cursor: pointer;
    }

    &:enabled:hover {
        transform: scale(1.05);
    }

    &:enabled:active {
        transform: scale(0.95);
    }

    &:disabled {
        color: ${({ theme, isInverted }) =>
            isInverted ? color(theme).mono.dark : color(theme).mono.medium};
    }
`;

const StyledSlides = styled(Slider.Slides)`
    margin-bottom: ${spacings.spacer}px;

    @media ${mq.xlarge} {
        margin-left: auto;
        width: 100%;
        max-width: ${spacings.wrapperLarge -
        (spacings.wrapperLarge - spacings.wrapper) / 2}px;
    }
`;

const Footer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const CtrlWrapper = styled.div`
    display: block;

    @media ${mq.semilarge} {
        display: none;
    }
`;

const CtrlWrapperLeft = styled(CtrlWrapper)`
    flex: 1;
    text-align: left;
`;

const CtrlWrapperRight = styled(CtrlWrapper)`
    flex: 1;
    text-align: right;
`;

const StyledDotGroup = styled(Slider.DotGroup)`
    display: inline-block;
    align-self: center;
    padding: ${spacings.nudge * 2}px 0;
`;

const DotWrapper = styled.button`
    border: none;
    outline: none;
    background: none;
    cursor: pointer;

    padding: ${spacings.nudge * 2}px;
    margin: -${spacings.nudge * 2}px;

    & + & {
        margin-left: ${spacings.nudge * 1.5}px;
    }
`;

const Dot = styled.div<{ isActive?: boolean; isInverted?: boolean }>`
    height: 14px;
    width: 14px;
    border: solid 1px
        ${({ theme, isInverted }) =>
            isInverted ? color(theme).white : color(theme).black};
    border-radius: 14px;

    transition: background-color 0.2s ease-in-out;

    background-color: ${({ isActive, isInverted, theme }) =>
        isActive
            ? isInverted
                ? color(theme).white
                : color(theme).black
            : 'transparent'};
`;

export interface CarouselProps {
    title?: string;
    superTitle?: string;
    text?: string;

    primaryAction?: (isInverted?: boolean) => React.ReactNode;
    secondaryAction?: (isInverted?: boolean) => React.ReactNode;

    spacing?: 'normal' | 'large';
    variableWidths?: boolean;
    isInverted?: boolean;
    controlNext?: (isInverted?: boolean, isActive?: boolean) => React.ReactNode;
    controlPrev?: (isInverted?: boolean, isActive?: boolean) => React.ReactNode;
    dot?: (isInverted?: boolean, isActive?: boolean) => React.ReactNode;
    beforeChange?: (currentStep: number, nextStep: number) => void;
    afterChange?: (currentStep: number) => void;
    onInit?: (steps: number) => void;
    responsive?: ResponsiveObject[];
    slidesToShow?: number;
}

const CarouselBase: FC<CarouselProps & { className?: string }> = ({
    title,
    superTitle,
    text,
    primaryAction,
    secondaryAction,
    spacing,
    variableWidths,
    isInverted,
    controlNext,
    controlPrev,
    dot,
    beforeChange,
    afterChange,
    onInit,
    slidesToShow,
    responsive,
    children,
    className,
}) => {
    return (
        <View clampWidth="large" className={className}>
            <Slider.Provider
                variableWidth={variableWidths}
                sameHeight={variableWidths}
                slideSpacing={
                    spacing === 'large'
                        ? { min: 30, max: 60 }
                        : { min: 20, max: 30 }
                }
                slidesToShow={slidesToShow}
                responsive={responsive}
                beforeChange={beforeChange}
                afterChange={afterChange}
                onInit={onInit}
            >
                <Head clampWidth="normal" addWhitespace>
                    {title && (
                        <IntroBlock>
                            <Intro
                                title={title}
                                superTitle={superTitle}
                                text={text}
                                isInverted={isInverted}
                                secondaryAction={secondaryAction}
                                primaryAction={primaryAction}
                            />
                        </IntroBlock>
                    )}
                    {React.Children.count(children) > 1 && (
                        <TopControls>
                            <StyledControl type="prev" isInverted={isInverted}>
                                {(isActive) =>
                                    controlPrev ? (
                                        controlPrev(isInverted, isActive)
                                    ) : (
                                        <ArrowLeftGhost />
                                    )
                                }
                            </StyledControl>
                            <StyledControl type="next" isInverted={isInverted}>
                                {(isActive) =>
                                    controlNext ? (
                                        controlNext(isInverted, isActive)
                                    ) : (
                                        <ArrowRightGhost />
                                    )
                                }
                            </StyledControl>
                        </TopControls>
                    )}
                </Head>

                <StyledSlides>
                    {React.Children.map(children, (child, i) => (
                        <Slider.Slide key={i}>{child}</Slider.Slide>
                    ))}
                </StyledSlides>
                {React.Children.count(children) > 1 && (
                    <Footer>
                        <CtrlWrapperLeft>
                            <StyledControl type="prev" isInverted={isInverted}>
                                {(isActive) =>
                                    controlPrev ? (
                                        controlPrev(isInverted, isActive)
                                    ) : (
                                        <ArrowLeftGhost />
                                    )
                                }
                            </StyledControl>
                        </CtrlWrapperLeft>
                        <StyledDotGroup>
                            {(i, isActive, onClick) => (
                                <DotWrapper key={i} onClick={onClick}>
                                    {dot ? (
                                        dot(isInverted, isActive)
                                    ) : (
                                        <Dot
                                            isActive={isActive}
                                            isInverted={isInverted}
                                        />
                                    )}
                                </DotWrapper>
                            )}
                        </StyledDotGroup>
                        <CtrlWrapperRight>
                            <StyledControl type="next" isInverted={isInverted}>
                                {(isActive) =>
                                    controlNext ? (
                                        controlNext(isInverted, isActive)
                                    ) : (
                                        <ArrowRightGhost />
                                    )
                                }
                            </StyledControl>
                        </CtrlWrapperRight>
                    </Footer>
                )}
            </Slider.Provider>
        </View>
    );
};

export default CarouselBase;
