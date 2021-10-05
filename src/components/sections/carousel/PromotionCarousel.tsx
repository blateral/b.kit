import React, { FC } from 'react';
import { ThemeContext } from 'styled-components';

import { getColors as color } from 'utils/styles';
import Section, { mapToBgMode } from 'components/base/Section';
import CarouselBase, { CarouselProps } from './CarouselBase';
import PromotionCard, {
    PromotionCardProps,
} from 'components/blocks/PromotionCard';
import { withLibTheme } from 'utils/LibThemeProvider';

export type PromotionCarouselItem = Omit<
    PromotionCardProps,
    'text' | 'superTitle' | 'text' | 'primaryAction' | 'secondaryAction'
>;

const PromotionCarousel: FC<
    Omit<CarouselProps, 'variableWidths' | 'spacing' | 'isInverted'> & {
        bgMode?: 'full' | 'splitted' | 'inverted';
        promotions?: PromotionCarouselItem[];
    }
> = ({
    bgMode,
    promotions,
    controlNext,
    controlPrev,
    beforeChange,
    afterChange,
    onInit,
    dot,
}) => {
    const theme = React.useContext(ThemeContext);
    const isInverted = bgMode === 'inverted';
    const promotionCount = promotions?.length || 0;

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
            <CarouselBase
                spacing="normal"
                isInverted={isInverted}
                controlNext={controlNext}
                controlPrev={controlPrev}
                dot={dot}
                beforeChange={beforeChange}
                afterChange={afterChange}
                onInit={onInit}
                slidesToShow={promotionCount > 1 ? 2.75 : 1}
                responsive={[
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: promotionCount > 1 ? 2.25 : 1,
                        },
                    },
                    {
                        breakpoint: 832,
                        settings: {
                            slidesToShow: promotionCount > 1 ? 1.15 : 1,
                        },
                    },
                    {
                        breakpoint: 640,
                        settings: {
                            slidesToShow: promotionCount > 1 ? 1.15 : 1,
                        },
                    },
                ]}
            >
                {promotions &&
                    promotions.map((promotion, i) => (
                        <PromotionCard key={i} {...promotion} />
                    ))}
            </CarouselBase>
        </Section>
    );
};

export const PromotionCarouselComponent = PromotionCarousel;
export default withLibTheme(PromotionCarousel);
