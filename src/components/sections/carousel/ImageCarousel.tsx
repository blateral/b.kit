import React, { FC } from 'react';
import styled, { ThemeContext } from 'styled-components';

import { getColors as color } from '../../../utils/styles';
import Image, { ImageProps } from '../../blocks/Image';
import Section, { BgMode } from '../../base/Section';
import CarouselBase, { CarouselProps } from './CarouselBase';

const ImageCarousel: FC<
    Omit<CarouselProps, 'variableWidths'> & {
        bgMode?: 'full' | 'splitted';
        images?: ImageProps[];
        isInverted?: boolean;
    }
> = ({
    isInverted,
    mode,
    bgMode,
    spacing,
    images,
    controlNext,
    controlPrev,
    beforeChange,
    afterChange,
    onInit,
    dot,
}) => {
    const theme = React.useContext(ThemeContext);

    const getSectionBgMode = (): BgMode | undefined => {
        switch (bgMode) {
            case 'full':
                return 'full';
            case 'splitted':
                return 'half-right';
            default:
                return undefined;
        }
    };

    return (
        <Section
            addSeperation
            bgColor={
                isInverted
                    ? color(theme).black
                    : bgMode
                    ? color(theme).mono.light
                    : 'transparent'
            }
            bgMode={!isInverted ? getSectionBgMode() : undefined}
        >
            <CarouselBase
                variableWidths
                mode={mode}
                spacing={spacing}
                isInverted={isInverted}
                controlNext={controlNext}
                controlPrev={controlPrev}
                dot={dot}
                beforeChange={beforeChange}
                afterChange={afterChange}
                onInit={onInit}
            >
                {images &&
                    images.map((img, i) => <FullWidthImg key={i} {...img} />)}
            </CarouselBase>
        </Section>
    );
};

const FullWidthImg = styled(Image)`
    width: 100%;
`;

export default ImageCarousel;
