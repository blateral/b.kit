import React, { FC } from 'react';
import styled, { ThemeContext } from 'styled-components';

import { getColors as color, getGlobals as global } from 'utils/styles';
import Image, { ImageProps } from 'components/blocks/Image';
import Section, { mapToBgMode } from 'components/base/Section';
import CarouselBase, { CarouselProps } from './CarouselBase';
import { withLibTheme } from 'utils/LibThemeProvider';

const ImageCarousel: FC<
    Omit<CarouselProps, 'variableWidths' | 'isInverted'> & {
        anchorId?: string;
        bgMode?: 'full' | 'splitted' | 'inverted';
        images?: ImageProps[];
    }
> = ({
    anchorId,
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
            anchorId={anchorId}
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
                slidesToShow={imageCount > 1 ? 2.75 : 1}
                responsive={[
                    {
                        breakpoint: 832,
                        settings: {
                            slidesToShow: imageCount > 1 ? 2.25 : 1,
                        },
                    },
                    {
                        breakpoint: 640,
                        settings: {
                            slidesToShow: imageCount > 1 ? 1.15 : 1,
                        },
                    },
                ]}
            >
                {images &&
                    images.map((img, i) => <FullWidthImg key={i} {...img} />)}
            </CarouselBase>
        </Section>
    );
};

const FullWidthImg = styled(Image)`
    width: 100%;
    overflow: hidden;
    border-radius: ${({ theme }) => global(theme).sections.edgeRadius};
`;

export const ImageCarouselComponent = ImageCarousel;
export default withLibTheme(ImageCarousel);
