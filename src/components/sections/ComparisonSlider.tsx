import React, { FC, useContext, useEffect, useRef, useState } from 'react';
import styled, { css, ThemeContext } from 'styled-components';

import Section, { mapToBgMode } from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import Image, { ImageProps } from 'components/blocks/Image';
import { getColors as color, spacings } from 'utils/styles';
import ArrowLeftRight from 'components/base/icons/ArrowLeftRight';
import Copy from 'components/typography/Copy';
import useIE from 'utils/useIE';
import { withLibTheme } from 'utils/LibThemeProvider';

const clamp = (num: number, min: number, max: number) => {
    return Math.min(Math.max(num, min), max);
};

const Images = styled.div`
    position: relative;
    cursor: col-resize;

    & > * {
        pointer-events: none;
        user-select: none;
    }
`;

const BackgroundImg = styled(Image)`
    position: relative;
    display: block;
    width: 100%;
`;

const ForegroundContainer = styled.div<{
    hasTransition?: boolean;
    initalValue?: number;
    hasAnim?: boolean;
}>`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 50%;
    overflow: hidden;

    transition: width ${({ hasTransition }) => (hasTransition ? 0.1 : 0)}s
        ease-in-out;

    ${({ hasAnim, initalValue }) =>
        hasAnim &&
        css`
            animation-name: ForegroundAnim;
            animation-duration: 5s;
            animation-iteration-count: 1;
            animation-play-state: ${hasAnim && 'running'};
            animation-timing-function: ease-in-out;

            @keyframes ForegroundAnim {
                0% {
                    width: ${initalValue
                        ? clamp(initalValue * 100, 0, 100) + '%'
                        : '50%'};
                }
                33% {
                    width: ${initalValue
                        ? clamp(initalValue * 100 + 10, 0, 100) + '%'
                        : '60%'};
                }
                66% {
                    width: ${initalValue
                        ? clamp(initalValue * 100 - 10, 0, 100) + '%'
                        : '40%'};
                }
                100% {
                    width: ${initalValue ? initalValue * 100 + '%' : '50%'};
                }
            }
        `}
`;

const ForegroundImg = styled(Image)`
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    height: 100%;
    max-width: none;
    object-fit: cover;
`;

const ForegroundOverlay = styled.div<{ color: string }>`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: ${({ color }) => color};
`;

const ImageLabel = styled(Copy)<{ bgColor?: string }>`
    height: ${spacings.spacer}px;
    padding: ${spacings.nudge * 2}px ${spacings.nudge * 3}px
        ${spacings.nudge * 2}px ${spacings.nudge * 3}px;
    background: ${({ bgColor }) => bgColor && bgColor};
`;

const ForegroundLabel = styled(ImageLabel)`
    position: absolute;
    bottom: ${spacings.spacer}px;
    left: ${spacings.nudge * 3}px;
    pointer-events: none;
    white-space: nowrap;
`;

const BackgroundLabel = styled(ImageLabel)`
    position: absolute;
    bottom: ${spacings.spacer}px;
    right: ${spacings.nudge * 3}px;
    pointer-events: none;
    white-space: nowrap;
`;

const ControlContainer = styled.div<{
    hasTransition?: boolean;
    hasAnim?: boolean;
    initalValue?: number;
}>`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    transition: left ${({ hasTransition }) => (hasTransition ? 0.1 : 0)}s
        ease-in-out;

    ${({ hasAnim, initalValue }) =>
        hasAnim &&
        css`
            animation-name: ControlAnim;
            animation-duration: 5s;
            animation-iteration-count: 1;
            animation-play-state: ${hasAnim && 'running'};
            animation-timing-function: ease-in-out;

            @keyframes ControlAnim {
                0% {
                    left: ${initalValue
                        ? clamp(initalValue * 100, 0, 100) + '%'
                        : '50%'};
                }
                33% {
                    left: ${initalValue
                        ? clamp(initalValue * 100 + 10, 0, 100) + '%'
                        : '60%'};
                }
                66% {
                    left: ${initalValue
                        ? clamp(initalValue * 100 - 10, 0, 100) + '%'
                        : '40%'};
                }
                100% {
                    left: ${initalValue ? initalValue * 100 + '%' : '50%'};
                }
            }
        `}
`;

const Control = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 54px;
    width: 54px;
    border: solid 2px ${({ theme }) => color(theme).new.elementBg.light};
    border-radius: 50%;
    background-color: ${({ theme }) => color(theme).new.elementBg.medium};
`;

const ComparisonSlider: FC<{
    bgMode?: 'full' | 'inverted' | 'splitted';
    initialValue?: number;
    foregroundImg?: ImageProps;
    backgroundImg?: ImageProps;
    foregroundLabel?: string;
    backgroundLabel?: string;
    overlayColor?: string;
    labelColor?: string;
    dragControl?: React.ReactNode;
    enableControlAnim?: boolean;
}> = ({
    bgMode,
    initialValue,
    foregroundImg,
    backgroundImg,
    foregroundLabel,
    backgroundLabel,
    overlayColor = 'rgba(0, 0 , 0, 0.2)',
    labelColor = 'rgba(0, 0 , 0, 0.3)',
    dragControl,
    enableControlAnim,
}) => {
    const isIE = useIE(true);
    const [slideValue, setSlideValue] = useState<number>(
        initialValue ? Math.min(Math.max(initialValue, 0), 1) : 0.5
    );
    const [isHolding, setIsHolding] = useState<boolean>(false);
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const [interacted, setInteracted] = useState<boolean>(true);
    const [sideOffset, setSideOffset] = useState<number>(0);
    const controlRef = useRef<HTMLDivElement | null>(null);
    const theme = useContext(ThemeContext);

    useEffect(() => {
        if (controlRef.current) {
            setSideOffset(controlRef.current.offsetWidth / 2);
        }
    }, []);

    useEffect(() => {
        const handleInitalLoad = () => {
            const options = {
                rootMargin: '0px',
                threshold: 1.0,
            };

            const observer = new IntersectionObserver((entries, observer) => {
                if (enableControlAnim && entries[0]?.isIntersecting) {
                    // if control is first fully visible
                    observer.unobserve(entries[0]?.target);
                    setInteracted(false);
                }
            }, options);
            if (controlRef.current) observer.observe(controlRef.current);
            window.removeEventListener('load', handleInitalLoad);
        };

        // wait unitl user has scrolled once
        if (!isIE) {
            if (document.readyState === 'complete') handleInitalLoad();
            else window.addEventListener('load', handleInitalLoad);
        }

        return () => {
            window.removeEventListener('load', handleInitalLoad);
        };
    }, [enableControlAnim, isIE]);

    const setCurrentPos = (target: EventTarget & Element, clientX: number) => {
        if (target && clientX) {
            const relativeClientX = clientX - target.getBoundingClientRect().x;

            // check side offset
            if (
                relativeClientX >= sideOffset &&
                relativeClientX <=
                    target.getBoundingClientRect().width - sideOffset
            ) {
                let percentage =
                    relativeClientX / target.getBoundingClientRect().width;
                percentage = Math.min(Math.max(percentage, 0), 1);

                setSlideValue(percentage);
            }
        }
    };

    const handleClick = (ev: React.MouseEvent) => {
        const target = ev.currentTarget;
        if (target && ev.clientX) {
            setCurrentPos(target, ev.clientX);
            setInteracted(true);
        }
    };

    const handleMouseMove = (ev: React.MouseEvent) => {
        const target = ev.currentTarget;
        if (target && ev.clientX && isHolding) {
            setIsDragging(true);
            setInteracted(true);
            if (isDragging) setCurrentPos(target, ev.clientX);
        }
    };

    const handleTouchMove = (ev: React.TouchEvent<HTMLDivElement>) => {
        const target = ev.currentTarget;
        if (target && ev.touches[0]?.clientX) {
            setInteracted(true);
            setCurrentPos(target, ev.touches[0]?.clientX);
        }
    };

    const isInverted = bgMode === 'inverted';

    return (
        <Section
            addSeperation
            bgColor={
                isInverted
                    ? color(theme).new.sectionBg.dark
                    : bgMode
                    ? color(theme).new.sectionBg.medium
                    : color(theme).new.sectionBg.light
            }
            bgMode={mapToBgMode(bgMode)}
        >
            <Wrapper>
                {backgroundImg && foregroundImg && (
                    <Images
                        onClick={handleClick}
                        onMouseMove={handleMouseMove}
                        onMouseDown={() => {
                            setIsDragging(false);
                            setIsHolding(true);
                        }}
                        onMouseUp={() => {
                            setIsDragging(false);
                            setIsHolding(false);
                        }}
                        onMouseLeave={() => {
                            setIsHolding(false);
                            setIsDragging(false);
                        }}
                        onTouchMove={handleTouchMove}
                        onTouchStart={() => setIsHolding(true)}
                        onTouchEnd={() => setIsHolding(false)}
                    >
                        <BackgroundImg {...backgroundImg} />
                        {backgroundLabel && (
                            <BackgroundLabel
                                textColor={color(theme).new.text.inverted}
                                bgColor={labelColor}
                            >
                                {backgroundLabel}
                            </BackgroundLabel>
                        )}
                        <ForegroundContainer
                            hasTransition={!isHolding}
                            hasAnim={!interacted}
                            initalValue={initialValue}
                            style={{ width: slideValue * 100 + '%' }}
                        >
                            <ForegroundImg {...foregroundImg} />
                            {foregroundLabel && (
                                <ForegroundLabel
                                    textColor={color(theme).new.text.inverted}
                                    bgColor={labelColor}
                                >
                                    {foregroundLabel}
                                </ForegroundLabel>
                            )}
                            <ForegroundOverlay color={overlayColor} />
                        </ForegroundContainer>
                        <ControlContainer
                            ref={controlRef}
                            hasTransition={!isHolding}
                            hasAnim={!interacted}
                            initalValue={initialValue}
                            style={{ left: slideValue * 100 + '%' }}
                        >
                            {dragControl ? (
                                dragControl
                            ) : (
                                <Control>
                                    <ArrowLeftRight
                                        iconColor={
                                            color(theme).new.elementBg.light
                                        }
                                    />
                                </Control>
                            )}
                        </ControlContainer>
                    </Images>
                )}
            </Wrapper>
        </Section>
    );
};

export const ComparisonSliderComponent = ComparisonSlider;
export default withLibTheme(ComparisonSlider);
