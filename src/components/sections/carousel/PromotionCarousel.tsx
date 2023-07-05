import React, { FC } from 'react';
import { ThemeContext } from 'styled-components';

import { getColors as color } from 'utils/styles';
import Section, { BgMode } from 'components/base/Section';
import CarouselBase, { CarouselProps } from './CarouselBase';
import PromotionCard, {
    PromotionCardProps,
} from 'components/blocks/PromotionCard';
import Wrapper from 'components/base/Wrapper';

export type PromotionCarouselItem = Omit<
    PromotionCardProps,
    'text' | 'superTitle' | 'text' | 'primaryAction' | 'secondaryAction'
>;

const PromotionCarousel: FC<
    Omit<CarouselProps, 'variableWidths' | 'spacing'> & {
        bgMode?: BgMode;
        promotions?: PromotionCarouselItem[];
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
            case 'half-right':
                return 'half-right';
            case 'half-left':
                return 'half-left';
            case 'larger-right':
                return 'larger-right';
            case 'larger-left':
                return 'larger-left';
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
            </Wrapper>
        </Section>
    );
};

export default PromotionCarousel;
