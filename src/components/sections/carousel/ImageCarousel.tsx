import React, { FC } from 'react';
import styled, { ThemeContext } from 'styled-components';

import {
    getColors as color,
    getGlobalSettings as global,
    mq,
} from 'utils/styles';
import Image, { ImageProps } from 'components/blocks/Image';
import Section, { mapToBgMode } from 'components/base/Section';
import CarouselBase, { CarouselProps } from './CarouselBase';
import { withLibTheme } from 'utils/LibThemeProvider';

const ImageCarousel: FC<
    Omit<CarouselProps, 'variableWidths' | 'isInverted'> & {
        bgMode?: 'full' | 'splitted' | 'inverted';
        images?: ImageProps[];
    }
> = ({
    bgMode,
    spacing = 'normal',
    images,
    controlNext,
    controlPrev,
    beforeChange,
    afterChange,
    onInit,
    dot,
}) => {
    const theme = React.useContext(ThemeContext);
    const isInverted = bgMode === 'inverted';
    const imageCount = images?.length || 0;

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
                variableWidths
                spacing={spacing}
                isInverted={isInverted}
                controlNext={controlNext}
                controlPrev={controlPrev}
                dot={dot}
                beforeChange={beforeChange}
                afterChange={afterChange}
                onInit={onInit}
                // slidesToShow={imageCount > 1 ? 2.75 : 1}
                perPage={imageCount > 1 ? 2 : 1}
                padding={{
                    right: imageCount > 1 ? '25%' : 0,
                    left: 0,
                }}
                // responsive={[
                //     {
                //         breakpoint: 832,
                //         settings: {
                //             slidesToShow: imageCount > 1 ? 2.25 : 1,
                //         },
                //     },
                //     {
                //         breakpoint: 640,
                //         settings: {
                //             slidesToShow: imageCount > 1 ? 1.15 : 1,
                //         },
                //     },
                // ]}
                breakpoints={{
                    832: {
                        perPage: 2,
                        padding: {
                            right: imageCount > 1 ? '20%' : 0,
                            left: 0,
                        },
                    },
                    640: {
                        perPage: 1,
                        padding: {
                            right: 0,
                            left: 0,
                        },
                    },
                }}
            >
                {images &&
                    images.map((img, i) => <FullWidthImg key={i} {...img} />)}
            </CarouselBase>
        </Section>
    );
};

const FullWidthImg = styled(Image)`
    width: 85vw;
    overflow: hidden;
    border-radius: ${({ theme }) => global(theme).sections.edgeRadius};

    @media ${mq.medium} {
        width: 100%;
    }
`;

export const ImageCarouselComponent = ImageCarousel;
export default withLibTheme(ImageCarousel);
