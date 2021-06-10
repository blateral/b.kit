import React, { FC, useState } from 'react';
import styled from 'styled-components';

import Section from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import Image, { ImageProps } from 'components/blocks/Image';

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

const ForegroundContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 50%;
    overflow: hidden;
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

const ComparisonSlider: FC<{
    initialValue?: number;
    foregroundImg?: ImageProps;
    backgroundImg?: ImageProps;
}> = ({ initialValue, foregroundImg, backgroundImg }) => {
    const [slideValue, setSlideValue] = useState<number>(
        initialValue ? Math.min(Math.max(initialValue, 0), 1) : 0.5
    );
    const [isHolding, setIsHolding] = useState<boolean>(false);

    const setCurrentPos = (target: EventTarget & Element, clientX: number) => {
        if (target && clientX) {
            const relativeClientX = clientX - target.getBoundingClientRect().x;
            let percentage =
                relativeClientX / target.getBoundingClientRect().width;
            percentage = Math.min(Math.max(percentage, 0), 1);

            setSlideValue(percentage);
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
                    >
                        <BackgroundImg {...backgroundImg} />
                        <ForegroundContainer
                            style={{ width: slideValue * 100 + '%' }}
                        >
                            <ForegroundImg {...foregroundImg} />
                        </ForegroundContainer>
                    </Images>
                )}
            </Wrapper>
        </Section>
    );
};

export default ComparisonSlider;
