import React, { FC } from 'react';
import styled from 'styled-components';

import { spacings, mq } from 'utils/styles';
import Section, { mapToBgMode } from 'components/base/Section';
import CarouselBase, { CarouselProps } from './CarouselBase';
import Feature, { FeatureProps } from 'components/blocks/Feature';
import { useEqualSheetHeight } from 'utils/useEqualSheetHeight';
import { useLibTheme, withLibTheme } from 'utils/LibThemeProvider';

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
        anchorId?: string;
        bgMode?: 'full' | 'splitted' | 'inverted';
        features?: FeatureProps[];
    }
> = ({
    anchorId,
    bgMode,
    features,
    controlNext,
    controlPrev,
    beforeChange,
    afterChange,
    onInit,
    dot,
}) => {
    const { colors } = useLibTheme();
    const isInverted = bgMode === 'inverted';
    const featureCount = features?.length || 0;
    const { sheetRefs: cardRefs } = useEqualSheetHeight<HTMLDivElement>({
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
            anchorId={anchorId}
            bgColor={
                isInverted
                    ? colors.new.sectionBg.dark
                    : bgMode
                    ? colors.new.sectionBg.medium
                    : colors.new.sectionBg.light
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
