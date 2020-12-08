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

const StyledControl = styled(Slider.Control)`
    border: none;
    outline: none;
    background: none;
    padding: 0 ${spacings.nudge * 3}px;

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
`;

const StyledSlides = styled(Slider.Slides)`
    margin-bottom: ${spacings.spacer * 1}px;

    @media ${mq.xlarge} {
        left: 50%;
        transform: translateX(-${spacings.wrapper / 2}px);
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

const Dot = styled.div<{ isActive?: boolean }>`
    height: 14px;
    width: 14px;
    border: solid 1px ${({ theme }) => color(theme).black};
    border-radius: 14px;

    transition: background-color 0.2s ease-in-out;

    background-color: ${({ isActive, theme }) =>
        isActive ? color(theme).black : 'transparent'};
`;

export interface CarouselProps {
    mode?: '1.75' | '2.75';
    spacing?: 'normal' | 'large';
    variableWidths?: boolean;
}

const CarouselBase: FC<CarouselProps> = ({
    mode,
    spacing,
    variableWidths,
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
                slidesToShow={
                    React.Children.count(children) > 1
                        ? mode === '2.75'
                            ? 2.75
                            : 1.75
                        : 1
                }
                responsive={[
                    {
                        breakpoint: 832,
                        settings: {
                            slidesToShow:
                                React.Children.count(children) > 1
                                    ? mode === '2.75'
                                        ? 2.25
                                        : 1.25
                                    : 1,
                        },
                    },
                    {
                        breakpoint: 640,
                        settings: {
                            slidesToShow:
                                React.Children.count(children) > 1 ? 1.15 : 1,
                        },
                    },
                ]}
            >
                {React.Children.count(children) > 1 && (
                    <TopControls>
                        <StyledControl type="prev">
                            <ArrowLeftGhost />
                        </StyledControl>
                        <StyledControl type="next">
                            <ArrowRightGhost />
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
                            <StyledControl type="prev">
                                <ArrowLeftGhost />
                            </StyledControl>
                        </CtrlWrapperLeft>
                        <StyledDotGroup>
                            {(i, isActive, onClick) => (
                                <DotWrapper key={i} onClick={onClick}>
                                    <Dot isActive={isActive} />
                                </DotWrapper>
                            )}
                        </StyledDotGroup>
                        <CtrlWrapperRight>
                            <StyledControl type="next">
                                <ArrowRightGhost />
                            </StyledControl>
                        </CtrlWrapperRight>
                    </Footer>
                )}
            </Slider.Provider>
        </View>
    );
};

export default CarouselBase;
