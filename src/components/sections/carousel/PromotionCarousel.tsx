import React, { FC } from 'react';

import Section, { mapToBgMode } from 'components/base/Section';
import CarouselBase, { CarouselProps } from './CarouselBase';
import PromotionCard, {
    PromotionCardProps,
} from 'components/blocks/PromotionCard';
import { useLibTheme, withLibTheme } from 'utils/LibThemeProvider';

export type PromotionCarouselItem = Omit<
    PromotionCardProps,
    | 'text'
    | 'superTitle'
    | 'text'
    | 'primaryAction'
    | 'secondaryAction'
    | 'externalLinkIcon'
>;

const PromotionCarousel: FC<
    Omit<CarouselProps, 'variableWidths' | 'spacing' | 'isInverted'> & {
        anchorId?: string;
        bgMode?: 'full' | 'splitted' | 'inverted';
        promotions?: PromotionCarouselItem[];
        externalLinkIcon?: React.ReactNode;
    }
> = ({
    anchorId,
    bgMode,
    promotions,
    externalLinkIcon,
    controlNext,
    controlPrev,
    beforeChange,
    afterChange,
    onInit,
    dot,
}) => {
    const { colors } = useLibTheme();
    const isInverted = bgMode === 'inverted';
    const promotionCount = promotions?.length || 0;

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
                        <PromotionCard
                            key={i}
                            {...promotion}
                            externalLinkIcon={externalLinkIcon}
                        />
                    ))}
            </CarouselBase>
        </Section>
    );
};

export const PromotionCarouselComponent = PromotionCarousel;
export default withLibTheme(PromotionCarousel);
