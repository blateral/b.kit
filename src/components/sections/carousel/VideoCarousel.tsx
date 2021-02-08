import React, { FC } from 'react';
import { ThemeContext } from 'styled-components';

import { getColors as color } from 'utils/styles';
import Section, { BgMode } from 'components/base/Section';
import CarouselBase, { CarouselProps } from './CarouselBase';
import VideoCard, { VideoCardProps } from 'components/blocks/VideoCard';

const VideoCarousel: FC<
    Omit<CarouselProps, 'variableWidths' | 'spacing'> & {
        bgMode?: 'full' | 'splitted';
        videos?: VideoCardProps[];
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
    videos,
    controlNext,
    controlPrev,
    beforeChange,
    afterChange,
    onInit,
    dot,
}) => {
    const theme = React.useContext(ThemeContext);
    const videoCount = videos?.length || 0;

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
                slidesToShow={videoCount > 1 ? 2.75 : 1}
                responsive={[
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: videoCount > 1 ? 2.25 : 1,
                        },
                    },
                    {
                        breakpoint: 832,
                        settings: {
                            slidesToShow: videoCount > 1 ? 1.15 : 1,
                        },
                    },
                    {
                        breakpoint: 640,
                        settings: {
                            slidesToShow: videoCount > 1 ? 1.15 : 1,
                        },
                    },
                ]}
            >
                {videos &&
                    videos.map((video, i) => <VideoCard key={i} {...video} />)}
            </CarouselBase>
        </Section>
    );
};

export default VideoCarousel;
