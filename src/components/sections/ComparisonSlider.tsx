import React, { FC, useContext, useEffect, useRef, useState } from 'react';
import styled, { ThemeContext } from 'styled-components';

import Section from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import Image, { ImageProps } from 'components/blocks/Image';
import { getColors as color } from 'utils/styles';
import ArrowLeftRight from 'components/base/icons/ArrowLeftRight';

const Images = styled.div`
    position: relative;

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

const ForegroundOverlay = styled.div<{ opacity: number }>`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(29, 34, 35, ${({ opacity }) => opacity});
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
    initialValue?: number;
    foregroundImg?: ImageProps;
    backgroundImg?: ImageProps;
    overlayOpacity?: number;
    dragControl?: React.ReactNode;
}> = ({
    initialValue,
    foregroundImg,
    backgroundImg,
    overlayOpacity = 0.2,
    dragControl,
}) => {
    const [slideValue, setSlideValue] = useState<number>(
        initialValue ? Math.min(Math.max(initialValue, 0), 1) : 0.5
    );
    const [isHolding, setIsHolding] = useState<boolean>(false);
    const [sideOffset, setSideOffset] = useState<number>(0);
    const controlRef = useRef<HTMLDivElement | null>(null);
    const theme = useContext(ThemeContext);

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
            setCurrentPos(target, ev.clientX);
        }
    };

    const handleTouchMove = (ev: React.TouchEvent<HTMLDivElement>) => {
        const target = ev.currentTarget;
        if (target && ev.touches[0]?.clientX) {
            setCurrentPos(target, ev.touches[0]?.clientX);
        }
    };

    return (
        <Section>
            <Wrapper>
                {backgroundImg && foregroundImg && (
                    <Images
                        onClick={handleClick}
                        onMouseMove={handleMouseMove}
                        onMouseDown={() => setIsHolding(true)}
                        onMouseUp={() => setIsHolding(false)}
                        onMouseLeave={() => setIsHolding(false)}
                        onTouchMove={handleTouchMove}
                        onTouchStart={() => setIsHolding(true)}
                        onTouchEnd={() => setIsHolding(false)}
                    >
                        <BackgroundImg {...backgroundImg} />
                        <ForegroundContainer
                            hasAnim={!isHolding}
                            style={{ width: slideValue * 100 + '%' }}
                        >
                            <ForegroundImg {...foregroundImg} />
                            <ForegroundOverlay opacity={overlayOpacity} />
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
