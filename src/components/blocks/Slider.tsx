import React, { FC, useContext, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

import SlickSlider, { Settings } from 'react-slick';
import { withRange } from 'utils/styles';

// Slider context
interface SliderContextState {
    setSlider?: React.Dispatch<
        React.SetStateAction<SlickSlider | null | undefined>
    >;
    setSlideCount?: React.Dispatch<React.SetStateAction<number>>;
    steps: number;
    currentStep: number;
    slideSpacing?: { min: number; max: number };
    cursorPaths?: {
        prev?: string;
        next?: string;
    };
    clickSideOffset: number;
    fullHeight?: boolean;
    sameHeight?: boolean;
    slickSettings: Settings;
    goToStep: (step: number) => void;
    nextStep: () => void;
    previousStep: () => void;
    isOnFirstStep: () => boolean;
    isOnLastStep: () => boolean;
}

export const SliderContext = React.createContext<SliderContextState>({
    steps: 0,
    currentStep: 0,
    slickSettings: {},
    clickSideOffset: 0.2,
    goToStep: () => '',
    nextStep: () => '',
    previousStep: () => '',
    isOnFirstStep: () => {
        return false;
    },
    isOnLastStep: () => {
        return false;
    },
});

export type SlickSliderSettings = Pick<
    Settings,
    | 'responsive'
    | 'draggable'
    | 'speed'
    | 'slidesToShow'
    | 'slidesToScroll'
    | 'variableWidth'
    | 'autoplay'
    | 'autoplaySpeed'
    | 'fade'
    | 'swipe'
>;

const Slider: FC<
    SlickSliderSettings & {
        initialStep?: number;
        slideSpacing?: { min: number; max: number }; // max image size 64x64
        cursorPaths?: {
            prev?: string;
            next?: string;
        };
        clickSideOffset?: number;
        sameHeight?: boolean;
        fullHeight?: boolean;
        beforeChange?: (props: {
            currentStep: number;
            nextStep: number;
        }) => void;
        afterChange?: (currentStep: number) => void;
        onInit?: (steps: number) => void;
    }
> = ({
    initialStep = 0,
    slideSpacing,
    cursorPaths,
    clickSideOffset = 0.2,
    fullHeight,
    sameHeight,
    beforeChange,
    afterChange,
    onInit,
    children,
    ...rest
}) => {
    const [slideCount, setSlideCount] = useState<number>(0);
    const [sliderRef, setSliderRef] = useState<SlickSlider | null>();
    const [currentStep, setCurrentStep] = useState<number>(initialStep);
    const [visibleSlides, setVisibleSlides] = useState<number | null>();
    const [steps, setSteps] = useState<number>(0);

    const goToStep = (step: number) => {
        if (sliderRef) {
            const intNum = Math.floor(step);
            if (intNum >= 0 && intNum < steps) {
                sliderRef.slickGoTo(intNum);
            }
        }
    };

    const nextStep = () => {
        if (sliderRef) {
            let prev = currentStep;
            sliderRef.slickGoTo(prev >= slideCount - 1 ? prev : ++prev);
        }
    };

    const previousStep = () => {
        if (sliderRef) {
            let prev = currentStep;
            sliderRef.slickGoTo(prev <= 0 ? prev : --prev);
        }
    };

    const isOnFirstStep = (): boolean => {
        return currentStep === 0;
    };

    const isOnLastStep = (): boolean => {
        return currentStep >= steps - 1;
    };

    // slick settings
    const slickSettings: Settings = {
        className: 'slider variable-width',
        dots: false,
        infinite: false,
        speed: 500,
        slidesToScroll: 1,
        slidesToShow: 1,
        variableWidth: true,
        fade: false,
        swipe: true,
        beforeChange: (current: number, next: number) => {
            beforeChange &&
                beforeChange({ currentStep: current, nextStep: next });
            setCurrentStep(next);
        },
        afterChange: afterChange,
        ...rest,
    };

    // calc slidesToShow on each window resize
    useEffect(() => {
        const handleResize = () => {
            if (sliderRef && slickSettings.responsive) {
                const settings = slickSettings.responsive;
                const cBreakpoint: number | null = (sliderRef.state as any)
                    .breakpoint;

                for (let i = 0; i < settings.length; i++) {
                    if (settings[i].breakpoint === cBreakpoint) {
                        const { slidesToShow } = settings[i]
                            .settings as Settings;

                        if (slidesToShow) setVisibleSlides(slidesToShow);
                        break;
                    }
                }
            }
        };

        // calc visible slides
        if (sliderRef && slickSettings.slidesToShow) {
            setVisibleSlides(slickSettings.slidesToShow);
            handleResize();
            window.addEventListener('resize', handleResize);
        }

        return () => {
            if (sliderRef) window.removeEventListener('resize', handleResize);
        };
    }, [slickSettings.responsive, slickSettings.slidesToShow, sliderRef]);

    useEffect(() => {
        // calc steps
        if (visibleSlides) {
            const itemsPerSlide = Math.floor(visibleSlides);

            let slides = 0;
            for (let i = 0; i < slideCount; i++) {
                if (i + itemsPerSlide > slideCount) {
                    break;
                } else slides += 1;
            }
            setSteps(slides);
        }
    }, [slideCount, visibleSlides]);

    useEffect(() => {
        if (steps && steps > 0) {
            onInit && onInit(steps);
        }
    }, [onInit, steps]);

    return (
        <SliderContext.Provider
            value={{
                setSlider: setSliderRef,
                setSlideCount: setSlideCount,
                steps: steps,
                currentStep: currentStep,
                slideSpacing: slideSpacing,
                cursorPaths: cursorPaths,
                clickSideOffset: clickSideOffset,
                fullHeight: fullHeight,
                sameHeight: sameHeight,
                slickSettings: slickSettings,
                goToStep: goToStep,
                nextStep: nextStep,
                previousStep: previousStep,
                isOnFirstStep: isOnFirstStep,
                isOnLastStep: isOnLastStep,
            }}
        >
            {children}
        </SliderContext.Provider>
    );
};

const SlidesView = styled.div<{
    cursorPath?: string;
    sameHeight?: boolean;
    fullHeight?: boolean;
}>`
    position: relative;
    width: 100%;
    overflow: hidden;

    cursor: ${({ cursorPath }) =>
        cursorPath ? `url("${cursorPath}") 64 64, auto` : 'default'};

    ${({ fullHeight }) =>
        fullHeight &&
        css`
            .slick-list {
                height: 100%;
            }
        `}

    .slick-track {
        display: flex;
        height: ${({ fullHeight }) => (fullHeight ? '100%' : 'auto')};
        ${({ sameHeight, fullHeight }) =>
            (sameHeight || fullHeight) &&
            css`
                .slick-slide {
                    height: auto;
                    > div {
                        height: 100%;
                        > div {
                            height: 100%;
                        }
                    }
                }
            `}
    }
`;

const StyledSlider = styled(SlickSlider)<{
    leftMargin?: { min: number; max: number };
}>`
    ${({ leftMargin }) =>
        leftMargin &&
        withRange([leftMargin.min * -1, leftMargin.max * -1], 'margin-left')};
`;

enum CursorState {
    PREV,
    NEXT,
}

const Slides: FC<{
    className?: string;
}> = ({ children, className }) => {
    const context = useContext(SliderContext);
    const [cursor, setCursor] = useState<CursorState | null>();
    const [viewRef, setViewRef] = useState<HTMLDivElement | null>();
    const [mousePos, setMousePos] = useState<number>(0);

    // cursor control
    const getCursorPath = () => {
        switch (cursor) {
            case CursorState.NEXT:
                return context.cursorPaths?.next;
            case CursorState.PREV:
                return context.cursorPaths?.prev;
            default:
                return undefined;
        }
    };

    const handleClick = (ev: React.MouseEvent) => {
        if (context.clickSideOffset <= 0) return;
        ev.stopPropagation();
        if (!viewRef) return;

        // check for other UI elements
        const target = ev.target as HTMLElement;
        const isSlideControl = target.classList.contains('slider-control');
        const isAnchor =
            target instanceof HTMLAnchorElement ||
            target.parentElement instanceof HTMLAnchorElement;

        if (ev.button !== 0 || isSlideControl || isAnchor) return;

        // check if step is first or last
        if (context.isOnFirstStep()) {
            context.nextStep();
            return;
        } else if (context.isOnLastStep()) {
            context.previousStep();
            return;
        }

        // check orientation with client x position
        const rect = viewRef.getBoundingClientRect();
        const relMouseX = mousePos - rect.left;
        if (relMouseX >= rect.width - rect.width * context.clickSideOffset) {
            context.nextStep();
        } else if (relMouseX < rect.width * context.clickSideOffset) {
            context.previousStep();
        }
    };

    useEffect(() => {
        if (!context.cursorPaths) return;
        if (!viewRef) return;
        const rect = viewRef.getBoundingClientRect();
        const relMouseX = mousePos - rect.left;

        if (relMouseX >= rect.width / 2) {
            if (context.isOnLastStep()) setCursor(CursorState.PREV);
            else setCursor(CursorState.NEXT);
        } else {
            if (context.isOnFirstStep()) setCursor(CursorState.NEXT);
            else setCursor(CursorState.PREV);
        }
    }, [context, mousePos, viewRef]);

    useEffect(() => {
        if (children && context.setSlideCount)
            context.setSlideCount(React.Children.count(children));
    }, [children, context]);

    return (
        <SliderContext.Consumer>
            {(values) => (
                <SlidesView
                    ref={setViewRef}
                    cursorPath={getCursorPath()}
                    onMouseMove={(ev) => setMousePos(ev.clientX)}
                    fullHeight={context.fullHeight}
                    sameHeight={context.sameHeight}
                    onClick={handleClick}
                    className={className}
                >
                    <StyledSlider
                        ref={context.setSlider}
                        leftMargin={values.slideSpacing}
                        {...values.slickSettings}
                    >
                        {children}
                    </StyledSlider>
                </SlidesView>
            )}
        </SliderContext.Consumer>
    );
};

const SlideView = styled.div<{ spacing?: { min: number; max: number } }>`
    width: 100%;
    outline: none;

    ${({ spacing }) =>
        spacing && withRange([spacing.min, spacing.max], 'padding-left')};
`;

const Slide: FC<{
    className?: string;
}> = ({ children, className }) => {
    return (
        <SliderContext.Consumer>
            {(value) => (
                <SlideView className={className} spacing={value.slideSpacing}>
                    {children}
                </SlideView>
            )}
        </SliderContext.Consumer>
    );
};

const ControlView = styled.button``;

const Control: FC<{
    type: 'next' | 'prev';
    onClick?: (ev: React.SyntheticEvent<HTMLButtonElement>) => void;
    className?: string;
    children?: (isActive?: boolean) => React.ReactNode;
}> = ({ type, onClick, children, className }) => {
    return (
        <SliderContext.Consumer>
            {(values) => (
                <ControlView
                    className={className + ' slider-control'}
                    onClick={(ev) => {
                        type === 'next'
                            ? values.nextStep()
                            : values.previousStep();

                        onClick && onClick(ev);
                    }}
                    disabled={
                        type === 'next'
                            ? values.isOnLastStep()
                            : values.isOnFirstStep()
                    }
                >
                    {children &&
                        children(
                            type === 'next'
                                ? !values.isOnLastStep()
                                : !values.isOnFirstStep()
                        )}
                </ControlView>
            )}
        </SliderContext.Consumer>
    );
};

const StatusView = styled.div``;

const Status: FC<{
    seperator?: string;
    className?: string;
}> = ({ seperator = '/', className }) => {
    return (
        <SliderContext.Consumer>
            {(values) => (
                <StatusView className={className + ' slider-control'}>
                    {`${values.currentStep + 1}${seperator}${values.steps}`}
                </StatusView>
            )}
        </SliderContext.Consumer>
    );
};

const DotView = styled.button``;

interface DotProps {
    step: number;
    disabled?: boolean;
    onClick?: (ev: React.SyntheticEvent<HTMLButtonElement>) => void;
}

const Dot: FC<
    DotProps & {
        className?: string;
    }
> = ({ step, disabled, onClick, className, children }) => {
    return (
        <SliderContext.Consumer>
            {(values) => (
                <DotView
                    disabled={
                        disabled !== undefined
                            ? disabled
                            : step === values.currentStep
                    }
                    onClick={(ev) => {
                        values.goToStep(step);
                        onClick && onClick(ev);
                    }}
                    className={className + ' slider-control'}
                >
                    {children}
                </DotView>
            )}
        </SliderContext.Consumer>
    );
};

const DotGroupView = styled.div``;

const DotGroup: FC<{
    children?: (
        key: number,
        isActive?: boolean,
        onClick?: (ev: React.SyntheticEvent<HTMLElement>) => void
    ) => React.ReactNode;
    className?: string;
}> = ({ className, children }) => {
    const context = useContext(SliderContext);
    const [stepsArray, setStepsArray] = useState<number[]>();

    useEffect(() => {
        const steps = Array<number>(context.steps);
        for (let i = 0; i < steps.length; i++) {
            steps[i] = i;
        }
        setStepsArray(steps);
    }, [context.steps]);

    return (
        <SliderContext.Consumer>
            {(values) => (
                <DotGroupView className={className + ' slider-control'}>
                    {stepsArray?.map((step, i) => {
                        return (
                            children &&
                            children(i, i === values.currentStep, () =>
                                values.goToStep(i)
                            )
                        );
                    })}
                </DotGroupView>
            )}
        </SliderContext.Consumer>
    );
};

export default {
    Provider: Slider,
    Slides: Slides,
    Slide: Slide,
    Control: Control,
    Status: Status,
    Dot: Dot,
    DotGroup: DotGroup,
};
