import React, { useState } from 'react';
import Section, { mapToBgMode } from 'components/base/Section';

import { useLibTheme, withLibTheme } from 'utils/LibThemeProvider';
import Wrapper from 'components/base/Wrapper';
import { ImageProps } from 'components/blocks/Image';

import VideoBlock from 'components/blocks/VideoBlock';
import styled from 'styled-components';
import { getColors, getGlobals, mq } from 'utils/styles';
import Play from 'components/base/icons/Play';

const View = styled.div<{ bgImage?: ImageProps; isActive?: boolean }>`
    text-align: center;

    cursor: pointer;
    position: relative;

    padding-bottom: 56.25%;

    background-image: url('${({ bgImage }) => (bgImage ? bgImage.small : '')}');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    border-radius: ${({ theme }) => getGlobals(theme).sections.edgeRadius};
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

    &:before {
        content: ${({ isActive, bgImage }) => !isActive && bgImage && '""'};
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-color: ${({ theme }) => getColors(theme).elementBg.medium};
        opacity: ${({ bgImage }) => (bgImage ? '0.3' : '0')};

        pointer-events: none;
    }

    &:after {
        content: ${({ isActive, bgImage }) => !isActive && bgImage && '""'};
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
    color: ${({ theme }) => getColors(theme).elementBg.light};
    z-index: 1;
    padding: 0;

    & > * {
        opacity: 0.8;
        transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out;
        height: 80px;
        width: 80px;

        color: ${({ theme }) => getColors(theme).elementBg.dark};
    }

    ${View}:hover > & > * {
        transform: scale(1.05);
        opacity: 1;
    }

    ${View}:active > & > * {
        transform: scale(0.95);
        opacity: 1;
    }

    &:focus {
        outline: 2px solid ${({ theme }) => getColors(theme).primary.default};
        border-radius: 50%;
        opacity: 1;

        & > * {
            color: ${({ theme }) => getColors(theme).primary.default};
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

    bgImage: ImageProps;

    bgMode?: 'full' | 'inverted' | 'splitted';
    playIcon?: React.ReactNode;
}> = ({ anchorId, bgMode, bgImage, playIcon }) => {
    const { colors } = useLibTheme();
    const isInverted = bgMode === 'inverted';

    const [isActive, setIsActive] = useState(false);

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
                <View
                    bgImage={isActive ? undefined : bgImage}
                    isActive={isActive}
                    onClick={() => setIsActive(true)}
                >
                    {!isActive && (
                        <VideoControls>{playIcon || <Play />}</VideoControls>
                    )}

                    {isActive && (
                        <VideoBlock
                            ratios={{ small: 16 / 9 }}
                            autoPlay
                            urls={['images/videos/alps_stockvideo.mp4']}
                        />
                    )}
                </View>
            </Wrapper>
        </Section>
    );
};

export const VideoRawComponent = VideoRaw;
export default withLibTheme(VideoRaw);
