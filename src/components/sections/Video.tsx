import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import Section, { mapToBgMode } from 'components/base/Section';
import { getColors as color, getGlobals as global } from 'utils/styles';
import { withLibTheme } from 'utils/LibThemeProvider';
import Wrapper from 'components/base/Wrapper';
import { ImageProps } from 'components/blocks/Image';

import VideoCard from 'components/blocks/VideoCard';
import Grid from 'components/base/Grid';

const Video: React.FC<{
    bgImage: ImageProps;
    embedId: string;
    playIcon?: React.ReactChild;
    bgMode?: 'full' | 'inverted';
}> = ({ bgMode, bgImage, embedId, playIcon }) => {
    const theme = useContext(ThemeContext);
    const isInverted = bgMode === 'inverted';
    const hasBg = bgMode === 'full';

    return (
        <Section
            bgColor={
                isInverted
                    ? color(theme).new.sectionBg.dark
                    : hasBg
                    ? color(theme).new.sectionBg.medium
                    : color(theme).new.sectionBg.light
            }
            bgMode={mapToBgMode(bgMode, true)}
            addSeperation
        >
            <Wrapper
                addWhitespace={global(theme).sections.edgeRadius ? true : false}
            >
                <Grid.Row>
                    <Grid.Col>
                        <VideoCard
                            bgImage={bgImage}
                            embedId={embedId}
                            playIcon={playIcon}
                        />
                    </Grid.Col>
                </Grid.Row>
            </Wrapper>
        </Section>
    );
};

export const VideoComponent = Video;
export default withLibTheme(Video);
