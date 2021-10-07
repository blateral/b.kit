import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';

import { mq, spacings, getColors as color, withRange } from 'utils/styles';
import useSlider, {
    Arrow,
    Arrows,
    Slider,
    Slides,
    Slide,
} from 'utils/useSlider';
import Wrapper from 'components/base/Wrapper';
import { ResponsiveOptions } from '@splidejs/splide';
import ArrowLeftGhost from 'components/base/icons/ArrowLeftGhost';
import ArrowRightGhost from 'components/base/icons/ArrowRightGhost';

const View = styled(Wrapper)`
    position: relative;
    width: 100%;
    overflow: hidden;

    @media ${mq.xlarge} {
        padding: 0;
    }

    .splide_controls {
        display: none;
    }

    .splide__pagination {
        display: none;
    }
`;

const Head = styled(Wrapper)`
    display: flex;
    flex-direction: row;
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

const StyledControl = styled(Arrow)<{
    isInverted?: boolean;
    isDisabled?: boolean;
}>`
    border: none;
    outline: none;
    background: none;
    padding: 0 ${spacings.nudge * 3}px;
    transition: color 0.2s ease-in-out, transform 0.2s ease-in-out;

    &:enabled {
        cursor: pointer;
    }

    /* &:enabled:hover {
        transform: scale(1.05);
    }

    &:enabled:active {
        transform: scale(0.95);
    } */

    color: ${({ theme, isInverted, isDisabled }) =>
        isDisabled
            ? isInverted
                ? color(theme).mono.dark
                : color(theme).mono.medium
            : isInverted
            ? color(theme).light
            : color(theme).dark};
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

const DotGroup = styled.div`
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
            isInverted ? color(theme).light : color(theme).dark};
    border-radius: 14px;

    transition: background-color 0.2s ease-in-out;

    background-color: ${({ isActive, isInverted, theme }) =>
        isActive
            ? isInverted
                ? color(theme).light
                : color(theme).dark
            : 'transparent'};
`;

const SliderWrapper = styled.div`
    margin-bottom: ${spacings.spacer}px;

    @media ${mq.xlarge} {
        margin-left: auto;
        width: 100%;
        max-width: ${spacings.wrapperLarge -
        (spacings.wrapperLarge - spacings.wrapper) / 2}px;
    }
`;

const StyledSlides = styled(Slides)`
    margin-bottom: ${spacings.spacer}px;
    @media ${mq.xlarge} {
        margin-left: auto;
        width: 100%;
        max-width: ${spacings.wrapperLarge -
        (spacings.wrapperLarge - spacings.wrapper) / 2}px;
    }
`;

export interface CarouselProps {
    spacing?: 'normal' | 'large';
    variableWidths?: boolean;
    isInverted?: boolean;
    controlNext?: (props: {
        isInverted?: boolean;
        isActive?: boolean;
        name?: string;
    }) => React.ReactNode;
    controlPrev?: (props: {
        isInverted?: boolean;
        isActive?: boolean;
        name?: string;
    }) => React.ReactNode;
    dot?: (props: {
        isInverted?: boolean;
        isActive?: boolean;
        index?: number;
    }) => React.ReactNode;
    onChange?: (props: { prevStep: number; current: number }) => void;
    onInit?: (steps: number) => void;
    breakpoints?: ResponsiveOptions;
    perPage?: number;
    padding?:
        | string
        | number
        | {
              left: string | number;
              right: string | number;
          };
}

const CarouselBase: FC<CarouselProps & { className?: string }> = ({
    spacing,
    variableWidths,
    isInverted,
    controlNext,
    controlPrev,
    dot,
    onChange,
    onInit,
    perPage,
    padding = 0,
    breakpoints,
    children,
    className,
}) => {
    const [pages, setPages] = useState<number>(0);
    const [activePage, setActivePage] = useState<number>(-1);

    const { slider } = useSlider({
        beforeMount: (slider) => {
            slider.on('pagination:mounted', (data) => {
                setPages(data.items.length);
                data.items.forEach((item: any) => {
                    if (item.button.ariaCurrent) setActivePage(item.page);
                });
            });

            slider.on('pagination:updated', (data, prev, current) => {
                setPages(data.items.length);
                setActivePage(current.page);

                onChange &&
                    onChange({ prevStep: prev.page, current: current.page });
            });
        },
        options: {
            arrows: true,
            pagination: true,
            speed: 600,
            lazyLoad: 'nearby',
            perPage: perPage,
            perMove: perPage,
            padding: padding,
            gap: spacing === 'large' ? '2em' : '1em',
            autoWidth: variableWidths,
            breakpoints: breakpoints,
            classes: {
                arrows: 'splide__arrows splide_controls',
            },
        },
    });

    useEffect(() => {
        if (pages > 0) {
            onInit && onInit(pages);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pages]);

    const isOnFirstPage = activePage <= 0;
    const isOnLastPage = activePage >= pages - 1;

    return (
        <View clampWidth="large" className={className}>
            <SliderWrapper>
                <Slider>
                    <Head clampWidth="normal" addWhitespace>
                        {React.Children.count(children) > 1 && (
                            <TopControls>
                                <Arrows>
                                    <StyledControl
                                        direction="prev"
                                        isInverted={isInverted}
                                        isDisabled={isOnFirstPage}
                                        onClick={() =>
                                            !isOnFirstPage &&
                                            slider?.go(`>${activePage - 1}`)
                                        }
                                    >
                                        {controlPrev ? (
                                            controlPrev({
                                                isInverted,
                                                isActive: !isOnFirstPage,
                                                name: 'control_prev_head',
                                            })
                                        ) : (
                                            <ArrowLeftGhost />
                                        )}
                                    </StyledControl>
                                    <StyledControl
                                        direction="next"
                                        isInverted={isInverted}
                                        isDisabled={isOnLastPage}
                                        onClick={() =>
                                            !isOnLastPage &&
                                            slider?.go(`>${activePage + 1}`)
                                        }
                                    >
                                        {controlNext ? (
                                            controlNext({
                                                isInverted,
                                                isActive: !isOnLastPage,
                                                name: 'control_next_head',
                                            })
                                        ) : (
                                            <ArrowRightGhost />
                                        )}
                                    </StyledControl>
                                </Arrows>
                            </TopControls>
                        )}
                    </Head>
                    <StyledSlides>
                        {React.Children.map(children, (child, i) => (
                            <Slide key={i}>{child}</Slide>
                        ))}
                    </StyledSlides>
                    {React.Children.count(children) > 1 && (
                        <Footer>
                            <CtrlWrapperLeft>
                                <StyledControl
                                    direction="prev"
                                    isInverted={isInverted}
                                    isDisabled={isOnFirstPage}
                                    onClick={() =>
                                        !isOnFirstPage &&
                                        slider?.go(`>${activePage - 1}`)
                                    }
                                >
                                    {controlPrev ? (
                                        controlPrev({
                                            isInverted,
                                            isActive: !isOnFirstPage,
                                            name: 'control_prev_footer',
                                        })
                                    ) : (
                                        <ArrowLeftGhost />
                                    )}
                                </StyledControl>
                            </CtrlWrapperLeft>
                            <DotGroup>
                                {slider?.Components?.Pagination?.items?.map(
                                    (item, i) => (
                                        <DotWrapper key={i}>
                                            {dot ? (
                                                dot({
                                                    isInverted,
                                                    isActive:
                                                        item.page ===
                                                        activePage,
                                                    index: i,
                                                })
                                            ) : (
                                                <Dot
                                                    onClick={() => {
                                                        slider?.go(
                                                            `>${item.page}`
                                                        );
                                                    }}
                                                    isActive={
                                                        item.page === activePage
                                                    }
                                                    isInverted={isInverted}
                                                />
                                            )}
                                        </DotWrapper>
                                    )
                                )}
                            </DotGroup>
                            <CtrlWrapperRight>
                                <StyledControl
                                    direction="next"
                                    isInverted={isInverted}
                                    isDisabled={isOnLastPage}
                                    onClick={() =>
                                        !isOnLastPage &&
                                        slider?.go(`>${activePage + 1}`)
                                    }
                                >
                                    {controlNext ? (
                                        controlNext({
                                            isInverted,
                                            isActive: !isOnLastPage,
                                            name: 'control_next_footer',
                                        })
                                    ) : (
                                        <ArrowRightGhost />
                                    )}
                                </StyledControl>
                            </CtrlWrapperRight>
                        </Footer>
                    )}
                </Slider>
            </SliderWrapper>
        </View>
    );
};

export default CarouselBase;
