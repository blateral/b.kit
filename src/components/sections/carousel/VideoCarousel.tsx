import React, { FC } from 'react';
import { ThemeContext } from 'styled-components';

import { getColors as color } from 'utils/styles';
import { withLibTheme } from 'utils/LibThemeProvider';
import Section, { mapToBgMode } from 'components/base/Section';
import CarouselBase, { CarouselProps } from './CarouselBase';
import VideoCard, { VideoCardProps } from 'components/blocks/VideoCard';

const VideoCarousel: FC<
    Omit<CarouselProps, 'variableWidths' | 'spacing' | 'isInverted'> & {
        bgMode?: 'full' | 'splitted' | 'inverted';
        videos?: VideoCardProps[];
    }
> = ({ bgMode, videos, controlNext, controlPrev, onChange, onInit, dot }) => {
    const theme = React.useContext(ThemeContext);
    const isInverted = bgMode === 'inverted';
    // const videoCount = videos?.length || 0;

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
                onChange={onChange}
                onInit={onInit}
                // slidesToShow={videoCount > 1 ? 2.75 : 1}
                // responsive={[
                //     {
                //         breakpoint: 1024,
                //         settings: {
                //             slidesToShow: videoCount > 1 ? 2.25 : 1,
                //         },
                //     },
                //     {
                //         breakpoint: 832,
                //         settings: {
                //             slidesToShow: videoCount > 1 ? 1.15 : 1,
                //         },
                //     },
                //     {
                //         breakpoint: 640,
                //         settings: {
                //             slidesToShow: videoCount > 1 ? 1.15 : 1,
                //         },
                //     },
                // ]}
            >
                {videos &&
                    videos.map((video, i) => <VideoCard key={i} {...video} />)}
            </CarouselBase>
        </Section>
    );
};

export const VideoCarouselComponent = VideoCarousel;
export default withLibTheme(VideoCarousel);
