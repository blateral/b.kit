import React, { FC } from 'react';
import { ThemeContext } from 'styled-components';

import { getColors as color } from 'utils/styles';
import Section, { BgMode } from 'components/base/Section';
import CarouselBase, { CarouselProps } from './CarouselBase';
import PromotionCard, {
    PromotionCardProps,
} from 'components/blocks/PromotionCard';

export type PromotionCarouselItem = Omit<
    PromotionCardProps,
    'text' | 'superTitle' | 'text' | 'primaryAction' | 'secondaryAction'
>;

const PromotionCarousel: FC<
    Omit<CarouselProps, 'variableWidths' | 'spacing'> & {
        bgMode?: 'full' | 'splitted';
        promotions?: PromotionCarouselItem[];
    }
> = ({
    title,
    superTitle,
    text,
    primaryAction,
    secondaryAction,
    isInverted = false,
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
    const promotionCount = promotions?.length || 0;

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

export default PromotionCarousel;
