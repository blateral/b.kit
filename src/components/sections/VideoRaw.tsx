import React, { useRef, useState } from 'react';
import styled from 'styled-components';

import Section, { mapToBgMode } from 'components/base/Section';
import { useLibTheme, withLibTheme } from 'utils/LibThemeProvider';
import Wrapper from 'components/base/Wrapper';
import VideoBlock from 'components/blocks/VideoBlock';
import { getColors as color } from 'utils/styles';
import Play from 'components/base/icons/Play';

const VideoContainer = styled.div`
    position: relative;
    cursor: pointer;
`;

const Overlay = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    background: linear-gradient(
        358.19deg,
        rgba(29, 34, 35, 0.52) 12.37%,
        rgba(29, 34, 35, 0) 59.02%
    );
`;

const VideoControls = styled.button`
    display: block;
    border: none;
    background: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: ${({ theme }) => color(theme).elementBg.light};
    z-index: 1;
    padding: 0;

    cursor: pointer;

    & > * {
        opacity: 0.8;
        transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out;
        height: 80px;
        width: 80px;

        color: ${({ theme }) => color(theme).elementBg.dark};
    }

    ${Overlay}:hover > & > * {
        transform: scale(1.05);
        opacity: 1;
    }

    ${Overlay}:active > & > * {
        transform: scale(0.95);
        opacity: 1;
    }

    &:focus {
        outline: 2px solid ${({ theme }) => color(theme).primary.default};
        border-radius: 50%;
        opacity: 1;

        & > * {
            color: ${({ theme }) => color(theme).primary.default};
        }
    }

    &:focus:not(:focus-visible) {
        outline: none;
        box-shadow: none;
    }
`;

const VideoRaw: React.FC<{
    /** ID value for targeting section with anchor hashes */
    anchorId?: string;

    /** URL to video sources */
    videoUrls?: string[];

    /** Section background */
    bgMode?: 'full' | 'inverted' | 'splitted';

    /** Video play icon */
    playIcon?: React.ReactNode;
}> = ({ anchorId, bgMode, videoUrls, playIcon }) => {
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
                        if (videoRef?.current) {
                            setIsStarted(true);
                            videoRef?.current?.play();
                        }
                    }}
                >
                    <VideoBlock
                        ref={videoRef}
                        controls={isStarted}
                        ratios={{ small: 16 / 9 }}
                        urls={videoUrls}
                        isInverted={isInverted}
                        onCanPlayThrough={() => {
                            setIsVideoLoaded(true);
                        }}
                    />
                    {isVideoLoaded && !isStarted && (
                        <Overlay>
                            <VideoControls>
                                {playIcon || <Play iconColor="#000" />}
                            </VideoControls>
                        </Overlay>
                    )}
                </VideoContainer>
            </Wrapper>
        </Section>
    );
};

export const VideoRawComponent = VideoRaw;
export default withLibTheme(VideoRaw);
