import React, { FC } from 'react';
import styled, { ThemeContext } from 'styled-components';

import { getColors as color, mq, spacings } from '../../../utils/styles';
import Section, { BgMode } from '../../base/Section';
import CarouselBase, { CarouselProps } from './CarouselBase';
import Feature, { FeatureProps } from '../../blocks/Feature';

const Carousel = styled(CarouselBase)`
    padding: 0 ${spacings.spacer}px;
`;

const FeatureCarousel: FC<
    Omit<CarouselProps, 'variableWidths' | 'spacing'> & {
        bgMode?: 'full' | 'splitted';
        features?: FeatureProps[];
    }
> = ({
    isInverted = false,
    bgMode,
    features,
    controlNext,
    controlPrev,
    beforeChange,
    afterChange,
    onInit,
    dot,
}) => {
    const theme = React.useContext(ThemeContext);
    const featureCount = features ? features.length : 0;

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
            <Carousel
                spacing="normal"
                isInverted={isInverted}
                controlNext={controlNext}
                controlPrev={controlPrev}
                dot={dot}
                beforeChange={beforeChange}
                afterChange={afterChange}
                onInit={onInit}
                slidesToShow={featureCount > 1 ? 3 : 1}
                responsive={[
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: featureCount > 1 ? 3 : 1,
                        },
                    },
                    {
                        breakpoint: 832,
                        settings: {
                            slidesToShow: featureCount > 1 ? 2.25 : 1,
                        },
                    },
                    {
                        breakpoint: 640,
                        settings: {
                            slidesToShow: featureCount > 1 ? 1.15 : 1,
                        },
                    },
                ]}
            >
                {features &&
                    features.map((feature, i) => (
                        <Feature key={i} isInverted={isInverted} {...feature} />
                    ))}
            </Carousel>
        </Section>
    );
};

export default FeatureCarousel;
