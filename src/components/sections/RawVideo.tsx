import React, { useRef, useState } from 'react';
import styled from 'styled-components';

import Section, { mapToBgMode } from 'components/base/Section';
import { useLibTheme, withLibTheme } from 'utils/LibThemeProvider';
import Wrapper from 'components/base/Wrapper';
import VideoBlock from 'components/blocks/VideoBlock';
import { ImageProps } from 'components/blocks/Image';

const VideoContainer = styled.div`
    position: relative;
    cursor: pointer;
`;

const Video = styled(VideoBlock)<{ isVisible?: boolean }>`
    opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
    pointer-events: ${({ isVisible }) => (isVisible ? 'all' : 'none')};
`;

const RawVideo: React.FC<{
    /** ID value for targeting section with anchor hashes */
    anchorId?: string;

    /** URL to video sources */
    videoUrls?: string[];

    /** Placeholder image */
    placeholderImg?: Omit<ImageProps, 'ratios' | 'coverSpace'>;

    /** Section background */
    bgMode?: 'full' | 'inverted' | 'splitted';

    /** Video play icon */
    playIcon?: React.ReactNode;
}> = ({ anchorId, bgMode, videoUrls, placeholderImg }) => {
    const { colors } = useLibTheme();
    const isInverted = bgMode === 'inverted';

    const videoRef = useRef<HTMLVideoElement>(null);
    const [isVideoLoaded, setIsVideoLoaded] = useState<boolean>(false);
    const [isStarted, setIsStarted] = useState<boolean>(false);

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
                <VideoContainer
                    onClick={() => {
                        if (videoRef?.current && isVideoLoaded) {
                            setIsStarted(true);
                            videoRef?.current?.play();
                        }
                    }}
                >
                    <Video
                        ref={videoRef}
                        isVisible={isStarted || !placeholderImg?.small}
                        controls
                        ratios={{ small: 16 / 9 }}
                        urls={videoUrls}
                        isInverted={isInverted}
                        onCanPlayThrough={() => {
                            setIsVideoLoaded(true);
                        }}
                    />
                </VideoContainer>
            </Wrapper>
        </Section>
    );
};

export const RawVideoComponent = RawVideo;
export default withLibTheme(RawVideo);
