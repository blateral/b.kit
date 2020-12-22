import React, { FC } from 'react';
import { ThemeContext } from 'styled-components';

import { getColors as color } from 'utils/styles';
import Section, { BgMode } from 'components/base/Section';
import CarouselBase, { CarouselProps } from './CarouselBase';
import Feature, { FeatureProps } from 'components/blocks/Feature';

const FeatureCarousel: FC<
    Omit<CarouselProps, 'variableWidths' | 'spacing'> & {
        bgMode?: 'full' | 'splitted';
        features?: FeatureProps[];
    }
> = ({
    title,
    superTitle,
    text,
    primaryAction,
    secondaryAction,
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
    const featureCount = features?.length || 0;

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
                title={title}
                superTitle={superTitle}
                text={text}
                primaryAction={primaryAction}
                secondaryAction={secondaryAction}
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
            </CarouselBase>
        </Section>
    );
};

export default FeatureCarousel;
