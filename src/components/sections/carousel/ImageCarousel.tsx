import React, { FC } from 'react';
import styled, { ThemeContext } from 'styled-components';

import { getColors as color } from 'utils/styles';
import Image, { ImageProps } from 'components/blocks/Image';
import Section, { mapToBgMode } from 'components/base/Section';
import CarouselBase, { CarouselProps } from './CarouselBase';

const ImageCarousel: FC<
    Omit<CarouselProps, 'variableWidths'> & {
        bgMode?: 'full' | 'splitted';
        images?: ImageProps[];
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
            bgMode={!isInverted ? mapToBgMode(bgMode) : undefined}
        >
            <CarouselBase
                title={title}
                titleAs={titleAs}
                superTitle={superTitle}
                superTitleAs={superTitleAs}
                text={text}
                primaryAction={primaryAction}
                secondaryAction={secondaryAction}
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
`;

export default ImageCarousel;
