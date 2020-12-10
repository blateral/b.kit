import React, { FC } from 'react';
import styled from 'styled-components';

import {
    mq,
    spacings,
    getColors as color,
    withRange,
} from '../../../utils/styles';
import Wrapper from '../../base/Wrapper';
import ArrowLeftGhost from '../../base/icons/ArrowLeftGhost';
import ArrowRightGhost from '../../base/icons/ArrowRightGhost';
import Slider from '../../blocks/Slider';
import { ResponsiveObject } from 'react-slick';

const View = styled(Wrapper)`
    position: relative;
    overflow: hidden;
`;

const TopControls = styled.div`
    display: none;
    text-align: right;
    max-width: ${spacings.wrapper}px;
    margin: 0 auto;
    ${withRange([spacings.spacer * 0.5, spacings.spacer], 'margin-bottom')};

    @media ${mq.semilarge} {
        display: block;
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
    margin-bottom: ${spacings.spacer * 1}px;

    @media ${mq.xlarge} {
        left: 20%;
        width: 80%;
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

const CarouselBase: FC<CarouselProps> = ({
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
}) => {
    return (
        <View clampWidth="large">
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
