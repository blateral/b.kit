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
> = ({ isInverted, mode, bgMode, spacing, images }) => {
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
            bgColor={bgMode ? color(theme).mono.light : undefined}
            bgMode={!isInverted ? getSectionBgMode() : undefined}
        >
            <CarouselBase variableWidths mode={mode} spacing={spacing}>
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
