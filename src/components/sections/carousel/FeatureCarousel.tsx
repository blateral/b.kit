import React, { FC } from 'react';
import styled, { ThemeContext } from 'styled-components';

import { getColors as color, spacings, mq } from 'utils/styles';
import Section, { mapToBgMode } from 'components/base/Section';
import CarouselBase, { CarouselProps } from './CarouselBase';
import Feature, { FeatureProps } from 'components/blocks/Feature';
import { useEqualSheetHeight } from 'utils/useEqualSheetHeight';
import { withLibTheme } from 'utils/LibThemeProvider';

const StyledWrapper = styled.div`
    padding-left: ${spacings.nudge * 2}px;

    @media ${mq.medium} {
        padding-left: ${spacings.spacer * 2}px;
    }

    @media ${mq.semilarge} {
        padding-left: ${(1 / 28) * 100}%;

        padding-left: ${`
                      max(
                          ${spacings.spacer}px,
                          ${(1 / 28) * 100}%
                      );
                  `};
    }

    @media ${mq.xlarge} {
        padding-left: ${(1 / 28) * spacings.wrapper}px;
    }
`;

const FeatureCarousel: FC<
    Omit<CarouselProps, 'variableWidths' | 'spacing' | 'isInverted'> & {
        bgMode?: 'full' | 'splitted' | 'inverted';
        features?: FeatureProps[];
    }
> = ({
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
    const isInverted = bgMode === 'inverted';
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
            bgMode={mapToBgMode(bgMode)}
        >
            <StyledWrapper>
                <CarouselBase
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
                            <div key={i} ref={cardRefs[i]}>
                                <Feature
                                    key={i}
                                    isInverted={isInverted}
                                    {...feature}
                                />
                            </div>
                        ))}
                </CarouselBase>
            </StyledWrapper>
        </Section>
    );
};

export const FeatureCarouselComponent = FeatureCarousel;
export default withLibTheme(FeatureCarousel);
