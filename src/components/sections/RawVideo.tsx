import React, { useState } from 'react';
import styled from 'styled-components';

import { getColors as color, getGlobals as global, mq } from 'utils/styles';
import Play from 'components/base/icons/Play';
import Section, { mapToBgMode } from 'components/base/Section';
import { useLibTheme, withLibTheme } from 'utils/LibThemeProvider';
import Wrapper from 'components/base/Wrapper';
import VideoBlock from 'components/blocks/VideoBlock';
import { ImageProps } from 'components/blocks/Image';
import { isValidArray } from 'utils/arrays';

const VideoContainer = styled.div<{ isInverted?: boolean }>`
    position: relative;
    cursor: pointer;
`;

const Overlay = styled.div<{ bgImage?: ImageProps; isInverted?: boolean }>`
    position: relative;
    padding-top: ${`calc(100% / (16 / 9))`};
    background: ${({ theme, isInverted }) =>
        isInverted
            ? global(theme).sections.imagePlaceholderBg.inverted
            : global(theme).sections.imagePlaceholderBg.default};

    background-image: ${({ bgImage }) =>
        bgImage?.small && `url("${bgImage.small}")`};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    border-radius: ${({ theme }) => global(theme).sections.edgeRadius};
    overflow: hidden;

    @media ${mq.medium} {
        text-align: left;

        background-image: ${({ bgImage }) =>
            bgImage?.medium && `url("${bgImage.medium}")`};
    }

    @media ${mq.semilarge} {
        background-image: ${({ bgImage }) =>
            bgImage?.semilarge && `url("${bgImage.semilarge}")`};
    }

    @media ${mq.large} {
        background-image: ${({ bgImage }) =>
            bgImage?.large && `url("${bgImage.large}")`};
    }

    @media ${mq.xlarge} {
        background-image: ${({ bgImage }) =>
            bgImage?.xlarge && `url("${bgImage.xlarge}")`};
    }

    &:after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        pointer-events: none;

        background: linear-gradient(
            358.19deg,
            rgba(29, 34, 35, 0.52) 12.37%,
            rgba(29, 34, 35, 0) 59.02%
        );
    }
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
}> = ({ anchorId, bgMode, videoUrls, placeholderImg, playIcon }) => {
    const { colors } = useLibTheme();
    const isInverted = bgMode === 'inverted';
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
                        if (isValidArray(videoUrls, false)) {
                            setIsStarted(true);
                        }
                    }}
                >
                    {isStarted && (
                        <Video
                            isVisible={isStarted || !placeholderImg?.small}
                            controls
                            autoPlay
                            ratios={{ small: 16 / 9 }}
                            urls={videoUrls}
                            isInverted={isInverted}
                        />
                    )}
                    {!isStarted && (
                        <Overlay
                            bgImage={placeholderImg}
                            isInverted={isInverted}
                        >
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

export const RawVideoComponent = RawVideo;
export default withLibTheme(RawVideo);
