import React from 'react';

import { ImageProps } from 'components/blocks/Image';
import Section, { mapToBgMode } from 'components/base/Section';
import { useLibTheme, withLibTheme } from 'utils/LibThemeProvider';
import Wrapper from 'components/base/Wrapper';
import VideoCard from 'components/blocks/VideoCard';

const NewsVideo: React.FC<{
    /** ID value for targeting section with anchor hashes */
    anchorId?: string;

    /** Placeholder image */
    bgImage?: ImageProps;

    /** Embed video ID. E.g. from Youtube */
    embedId?: string;

    /** Custom play icon */
    playIcon?: React.ReactNode;

    /** Text for cookie consent overlay */
    consentText?: string;

    /** Function to inject custom action on cookie consent overlay */
    consentAction?: (props: {
        handleClick?: () => void;
        consentProps: Record<string, string>;
    }) => React.ReactNode;

    /** Section background */
    bgMode?: 'full' | 'inverted';
}> = ({
    anchorId,
    bgImage,
    embedId,
    playIcon,
    consentText,
    consentAction,
    bgMode,
}) => {
    const { colors } = useLibTheme();

    const isInverted = bgMode === 'inverted';
    const hasBg = bgMode === 'full';

    return (
        <Section
            addSeperation
            anchorId={anchorId}
            bgColor={
                isInverted
                    ? colors.sectionBg.dark
                    : hasBg
                    ? colors.sectionBg.medium
                    : colors.sectionBg.light
            }
            bgMode={mapToBgMode(bgMode, true)}
        >
            <Wrapper addWhitespace clampWidth="small">
                {embedId && bgImage && (
                    <VideoCard
                        bgImage={bgImage}
                        embedId={embedId}
                        playIcon={playIcon}
                        consentText={consentText}
                        consentAction={consentAction}
                    />
                )}
            </Wrapper>
        </Section>
    );
};

export const NewsVideoComponent = NewsVideo;
export default withLibTheme(NewsVideo);
