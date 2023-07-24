import React, { FC } from 'react';
import { ThemeContext } from 'styled-components';

import { getColors as color } from 'utils/styles';
import Section, { BgMode } from 'components/base/Section';
import CarouselBase, { CarouselProps } from './CarouselBase';
import Feature, { FeatureProps } from 'components/blocks/Feature';
import { useEqualSheetHeight } from 'utils/useEqualSheetHeight';
import Wrapper from 'components/base/Wrapper';

const FeatureCarousel: FC<
    Omit<CarouselProps, 'variableWidths' | 'spacing'> & {
        bgMode?: 'full' | 'splitted';
        features?: FeatureProps[];
    }
> = ({
    title,
    titleAs,
    superTitle,
    superTitleAs,
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
    const { sheetRefs: cardRefs } = useEqualSheetHeight({
        listLength: featureCount,
        identifiers: [
            '[data-sheet="title"]',
            '[data-sheet="desc"]',
            '[data-sheet="intro"]',
            '[data-sheet="text"]',
        ],
        responsive: {
            small: featureCount,
            medium: featureCount,
            semilarge: featureCount,
            large: featureCount,
            xlarge: featureCount,
        },
    });

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
                    ? color(theme).dark
                    : bgMode
                    ? color(theme).mono.light
                    : 'transparent'
            }
            bgMode={!isInverted ? getSectionBgMode() : undefined}
        >
            <Wrapper addWhitespace>
                <CarouselBase
                    title={title}
                    titleAs={titleAs}
                    superTitle={superTitle}
                    superTitleAs={superTitleAs}
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
                                slidesToShow: 1,
                            },
                        },
                    ]}
                >
                    {features &&
                        features.map((feature, i) => (
                            <div key={i} ref={cardRefs[i]}>
                                <Feature
                                    key={i}
                                    addWhitespace
                                    isInverted={isInverted}
                                    {...feature}
                                />
                            </div>
                        ))}
                </CarouselBase>
            </Wrapper>
        </Section>
    );
};

export default FeatureCarousel;
