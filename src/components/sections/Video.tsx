import React from 'react';
import Section, { mapToBgMode } from 'components/base/Section';

import { useLibTheme, withLibTheme } from 'utils/LibThemeProvider';
import Wrapper from 'components/base/Wrapper';
import { ImageProps } from 'components/blocks/Image';

import VideoCard from 'components/blocks/VideoCard';

const Video: React.FC<{
    /** ID value for targeting section with anchor hashes */
    anchorId?: string;

    bgImage: Omit<ImageProps, 'ratios' | 'coverSpace'>;
    embedId: string;

    consentText?: string;
    consentAction?: (props: {
        handleClick?: () => void;
        consentProps: Record<string, string>;
    }) => React.ReactNode;
    /**
     * Custom handler for play button click
     * @returns true if video should be played
     */
    onPlayClick?: () => Promise<boolean>;

    playIcon?: React.ReactNode;
    bgMode?: 'full' | 'inverted' | 'splitted';
}> = ({
    anchorId,
    bgMode,
    bgImage,
    embedId,
    playIcon,
    consentText,
    consentAction,
    onPlayClick,
}) => {
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
                    consentText={consentText}
                    consentAction={consentAction}
                    onPlayClick={onPlayClick}
                />
            </Wrapper>
        </Section>
    );
};

export const VideoComponent = Video;
export default withLibTheme(Video);
