import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import Section, { mapToBgMode } from 'components/base/Section';
import { getColors as color, getGlobalSettings as global } from 'utils/styles';
import { withLibTheme } from 'utils/LibThemeProvider';
import Wrapper from 'components/base/Wrapper';
import { ImageProps } from 'components/blocks/Image';

import VideoCard from 'components/blocks/VideoCard';

const Video: React.FC<{
    bgImage: ImageProps;
    embedId: string;
    playIcon?: React.ReactChild;
    bgMode?: 'full' | 'inverted';
}> = ({ bgMode, bgImage, embedId, playIcon }) => {
    const theme = useContext(ThemeContext);
    const isInverted = bgMode === 'inverted';

    return (
        <Section
            bgColor={
                isInverted
                    ? color(theme).dark
                    : bgMode === 'full'
                    ? color(theme).mono.light
                    : 'transparent'
            }
            bgMode={mapToBgMode(bgMode, true)}
            addSeperation
        >
            <Wrapper
                addWhitespace={global(theme).sections.edgeRadius ? true : false}
            >
                <VideoCard
                    bgImage={bgImage}
                    embedId={embedId}
                    playIcon={playIcon}
                />
            </Wrapper>
        </Section>
    );
};

export const VideoComponent = Video;
export default withLibTheme(Video);
