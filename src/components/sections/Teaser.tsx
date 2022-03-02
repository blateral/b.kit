import React, { FC, useState } from 'react';
import styled from 'styled-components';

import Grid from 'components/base/Grid';
import { HeadlineTag } from 'components/typography/Heading';
import Image, { ImageProps } from 'components/blocks/Image';
import Copy from 'components/typography/Copy';
import Wrapper from 'components/base/Wrapper';
import Section, { mapToBgMode } from 'components/base/Section';
import { mq, spacings, getGlobals as global } from 'utils/styles';
import Actions from 'components/blocks/Actions';
import { useLibTheme, withLibTheme } from 'utils/LibThemeProvider';
import IntroBlock from 'components/blocks/IntroBlock';
import VideoBlock, { VideoAspectRatios } from 'components/blocks/VideoBlock';

const Figure = styled.figure`
    display: flex;
    flex-direction: column;
    position: relative;
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;

    & > * + * {
        margin-top: ${spacings.nudge}px;
    }

    @media ${mq.semilarge} {
        & > * + * {
            margin-top: ${spacings.nudge * 2}px;
        }
    }
`;

const StyledImage = styled(Image)`
    position: relative;
    width: 100%;
    height: 100%;

    @media ${mq.semilarge} {
        border-radius: ${({ theme }) => global(theme).sections.edgeRadius};
        overflow: hidden;
    }
`;

const Video = styled(VideoBlock)<{
    ratios?: VideoAspectRatios;
    isVisible?: boolean;
}>`
    display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
    width: 100%;
    height: 100%;
`;

const Description = styled(Copy)`
    display: block;

    @media ${mq.semilarge} {
        padding-left: ${spacings.nudge * 2}px;
        padding-right: ${spacings.nudge * 2}px;
    }
`;

const StyledActions = styled(Actions)`
    &:not(:first-child) {
        margin-top: ${spacings.spacer}px;
    }
`;

const Teaser: FC<{
    /** Switch text and image columns */
    isMirrored?: boolean;

    /** Superior title that stands above main title */
    superTitle?: string;

    /** Superior title HTML tag type (h3, h4 ...) */
    superTitleAs?: HeadlineTag;

    /** Main title text */
    title?: string;

    /** Main title HTML tag type (h2, h3, h4...) */
    titleAs?: HeadlineTag;

    /** Images for different screen sizes */
    image?: Omit<ImageProps, 'coverSpace'>;

    /**
     * Use video instead of an image. Until video is loaded images defined in the image prop are used.
     * Multiple video urls can be used to loaded different file formats
     */
    video?: {
        urls: string[];
        aspectRatios?: VideoAspectRatios;
    };

    /** Image or video description text (richtext) */
    description?: string;

    /** Main richtext */
    text?: string;

    /** Section background */
    bgMode?: 'full' | 'inverted' | 'splitted';

    /** Function to inject custom primary button */
    primaryAction?: (isInverted?: boolean) => React.ReactNode;

    /** Function to inject custom secondary button */
    secondaryAction?: (isInverted?: boolean) => React.ReactNode;
}> = ({
    isMirrored = false,
    bgMode,
    superTitle,
    superTitleAs,
    title,
    titleAs,
    image,
    video,
    description,
    text,
    primaryAction,
    secondaryAction,
}) => {
    const { colors } = useLibTheme();
    const isInverted = bgMode === 'inverted';
    const [isLoaded, setLoaded] = useState(false);

    return (
        <Section
            addSeperation
            bgColor={
                isInverted
                    ? colors.new.sectionBg.dark
                    : bgMode
                    ? colors.new.sectionBg.medium
                    : colors.new.sectionBg.light
            }
            bgMode={mapToBgMode(bgMode, false, isMirrored)}
        >
            <Wrapper addWhitespace clampWidth="normal">
                <Grid.Row valign="center">
                    <Grid.Col
                        semilarge={{
                            span: 6 / 12,
                            move: (isMirrored ? 6 : 0) / 12,
                        }}
                        xlarge={{
                            span: 7 / 12,
                            move: (isMirrored ? 5 : 0) / 12,
                        }}
                    >
                        {(image || video) && (
                            <Figure>
                                {image && (!video || !isLoaded) && (
                                    <StyledImage
                                        {...image}
                                        isInverted={isInverted}
                                        coverSpace
                                    />
                                )}
                                {video?.urls && video.urls.length > 0 && (
                                    <Video
                                        urls={video.urls}
                                        muted
                                        autoPlay
                                        loop
                                        onCanPlayThrough={() => setLoaded(true)}
                                        ratios={video.aspectRatios}
                                        isVisible={isLoaded}
                                    />
                                )}
                                {description && (
                                    <Description
                                        size="small"
                                        renderAs="figcaption"
                                        isInverted={isInverted}
                                        innerHTML={description}
                                    />
                                )}
                            </Figure>
                        )}
                    </Grid.Col>

                    <Grid.Col
                        semilarge={{
                            span: 6 / 12,
                            move: (isMirrored ? -6 : 0) / 12,
                        }}
                        xlarge={{
                            span: 5 / 12,
                            move: (isMirrored ? -7 : 0) / 12,
                        }}
                    >
                        <IntroBlock
                            title={title}
                            titleAs={titleAs}
                            superTitle={superTitle}
                            superTitleAs={superTitleAs}
                            text={text}
                            colorMode={isInverted ? 'inverted' : 'default'}
                        />
                        {(primaryAction || secondaryAction) && (
                            <StyledActions
                                primary={
                                    primaryAction && primaryAction(isInverted)
                                }
                                secondary={
                                    secondaryAction &&
                                    secondaryAction(isInverted)
                                }
                            />
                        )}
                    </Grid.Col>
                </Grid.Row>
            </Wrapper>
        </Section>
    );
};

export const TeaserComponent = Teaser;
export default withLibTheme(Teaser);
