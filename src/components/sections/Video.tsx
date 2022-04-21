import React from 'react';
import Section, { mapToBgMode } from 'components/base/Section';

import { useLibTheme, withLibTheme } from 'utils/LibThemeProvider';
import Wrapper from 'components/base/Wrapper';
import { ImageProps } from 'components/blocks/Image';

import VideoCard from 'components/blocks/VideoCard';

const Video: React.FC<{
    /** ID value for targeting section with anchor hashes */
    anchorId?: string;

    bgImage: ImageProps;
    embedId: string;
    playIcon?: React.ReactChild;
    bgMode?: 'full' | 'inverted' | 'splitted';
}> = ({ anchorId, bgMode, bgImage, embedId, playIcon }) => {
    const { colors } = useLibTheme();
    const isInverted = bgMode === 'inverted';

    return (
        <Section
            anchorId={anchorId}
            bgColor={
                isInverted
                    ? colors.sectionBg.dark
                    : bgMode
                    ? colors.sectionBg.medium
                    : colors.sectionBg.light
            }
            bgMode={mapToBgMode(bgMode)}
            addSeperation
        >
            <Wrapper addWhitespace>
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
