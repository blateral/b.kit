import React, { FC, useContext, useEffect, useRef, useState } from 'react';
import styled, { ThemeContext } from 'styled-components';

import Section, { BgMode } from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import Image, { ImageProps } from 'components/blocks/Image';
import { getColors as color, spacings } from 'utils/styles';
import ArrowLeftRight from 'components/base/icons/ArrowLeftRight';
import Copy from 'components/typography/Copy';

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

const ForegroundContainer = styled.div<{ hasAnim?: boolean }>`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 50%;
    overflow: hidden;

    transition: width ${({ hasAnim }) => (hasAnim ? 0.1 : 0)}s ease-in-out;
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
    height: ${spacings.spacer * 1.5}px;
    padding: ${spacings.nudge}px ${spacings.spacer}px ${spacings.nudge * 2}px
        ${spacings.spacer}px;
    background: ${({ bgColor }) => bgColor && bgColor};
`;

const ForegroundLabel = styled(ImageLabel)`
    position: absolute;
    bottom: ${spacings.spacer * 1.5}px;
    left: ${spacings.spacer}px;
    pointer-events: none;
`;

const BackgroundLabel = styled(ImageLabel)`
    position: absolute;
    bottom: ${spacings.spacer * 1.5}px;
    right: ${spacings.spacer}px;
    pointer-events: none;
`;

const ControlContainer = styled.div<{ hasAnim?: boolean }>`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    transition: left ${({ hasAnim }) => (hasAnim ? 0.1 : 0)}s ease-in-out;
`;

const Control = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 54px;
    width: 54px;
    border: solid 2px ${({ theme }) => color(theme).light};
    border-radius: 50%;
    background-color: ${({ theme }) => color(theme).primary.medium};
`;

const ComparisonSlider: FC<{
    isInverted?: boolean;
    bgMode?: BgMode;
    initialValue?: number;
    foregroundImg?: ImageProps;
    backgroundImg?: ImageProps;
    foregroundLabel?: string;
    backgroundLabel?: string;
    overlayColor?: string;
    labelColor?: string;
    dragControl?: React.ReactNode;
}> = ({
    isInverted,
    bgMode,
    initialValue,
    foregroundImg,
    backgroundImg,
    foregroundLabel,
    backgroundLabel,
    overlayColor = 'rgba(0, 0 , 0, 0.2)',
    labelColor = 'rgba(0, 0 , 0, 0.3)',
    dragControl,
}) => {
    const [slideValue, setSlideValue] = useState<number>(
        initialValue ? Math.min(Math.max(initialValue, 0), 1) : 0.5
    );
    const [isHolding, setIsHolding] = useState<boolean>(false);
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const [sideOffset, setSideOffset] = useState<number>(0);
    const controlRef = useRef<HTMLDivElement | null>(null);
    const theme = useContext(ThemeContext);

    const getSectionBgMode = (): BgMode | undefined => {
        switch (bgMode) {
            case 'full':
                return 'full';
            case 'half-right':
                return 'half-right';
            case 'half-left':
                return 'half-left';
            case 'larger-right':
                return 'larger-right';
            case 'larger-left':
                return 'larger-left';
            default:
                return undefined;
        }
    };

    useEffect(() => {
        if (controlRef.current) {
            setSideOffset(controlRef.current.offsetWidth / 2);
        }
    }, []);

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
        }
    };

    const handleMouseMove = (ev: React.MouseEvent) => {
        const target = ev.currentTarget;
        if (target && ev.clientX && isHolding) {
            setIsDragging(true);
            if (isDragging) setCurrentPos(target, ev.clientX);
        }
    };

    const handleTouchMove = (ev: React.TouchEvent<HTMLDivElement>) => {
        const target = ev.currentTarget;
        if (target && ev.touches[0]?.clientX) {
            setCurrentPos(target, ev.touches[0]?.clientX);
        }
    };

    return (
        <Section
            addSeperation
            bgColor={
                isInverted
                    ? color(theme).dark
                    : bgMode
                    ? color(theme).mono.light
                    : 'transparent'
            }
            bgMode={!isInverted ? getSectionBgMode() : undefined}
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
                                textColor={color(theme).light}
                                bgColor={labelColor}
                            >
                                {backgroundLabel}
                            </BackgroundLabel>
                        )}
                        <ForegroundContainer
                            hasAnim={!isHolding}
                            style={{ width: slideValue * 100 + '%' }}
                        >
                            <ForegroundImg {...foregroundImg} />
                            {foregroundLabel && (
                                <ForegroundLabel
                                    textColor={color(theme).light}
                                    bgColor={labelColor}
                                >
                                    {foregroundLabel}
                                </ForegroundLabel>
                            )}
                            <ForegroundOverlay color={overlayColor} />
                        </ForegroundContainer>
                        <ControlContainer
                            ref={controlRef}
                            hasAnim={!isHolding}
                            style={{ left: slideValue * 100 + '%' }}
                        >
                            {dragControl ? (
                                dragControl
                            ) : (
                                <Control>
                                    <ArrowLeftRight
                                        iconColor={color(theme).light}
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

export default ComparisonSlider;
