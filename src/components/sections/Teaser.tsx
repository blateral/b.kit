import React, { FC } from 'react';
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

const ImageWrapper = styled.figure`
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

const ImgDesc = styled(Copy)`
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

const VideoWrapper = styled.div<{ ratio?: { x: number; y: number } }>`
    position: relative;
    width: 100%;
    height: 100%;

    @media ${mq.semilarge} {
        aspect-ratio: ${({ ratio }) => (ratio ? ratio.x / ratio.y : 16 / 9)};
        border-radius: ${({ theme }) => global(theme).sections.edgeRadius};
        overflow: hidden;
    }
`;

const StyledVideo = styled.video<{ isVisible?: boolean }>`
    display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
    width: 100%;
    height: 100%;

    @media ${mq.semilarge} {
        width: auto;

        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 50%;
        transform: translateX(-50%);
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

    /** Images for different screen sizes with optional Image description richtext */
    image?: Omit<ImageProps, 'coverSpace'> & { description?: string };

    /** Main richtext */
    text?: string;

    /** Section background */
    bgMode?: 'full' | 'inverted' | 'splitted';

    /** Function to inject custom primary button */
    primaryAction?: (isInverted?: boolean) => React.ReactNode;

    /** Function to inject custom secondary button */
    secondaryAction?: (isInverted?: boolean) => React.ReactNode;
    videoUrl?: string;
    aspectRatio?: { x: number; y: number };
}> = ({
    isMirrored = false,
    bgMode,
    superTitle,
    superTitleAs,
    title,
    titleAs,
    image,
    text,
    primaryAction,
    secondaryAction,
    videoUrl,
    aspectRatio,
}) => {
    const { colors } = useLibTheme();
    const isInverted = bgMode === 'inverted';
    const [loaded, setLoaded] = React.useState(false);

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
                        <ImageWrapper>
                            {image && <StyledImage {...image} />}
                            {image?.description && (
                                <ImgDesc
                                    size="small"
                                    renderAs="figcaption"
                                    isInverted={isInverted}
                                    innerHTML={image.description}
                                />
                            )}
                        </ImageWrapper>
                        {videoUrl && !image && (
                            <VideoWrapper ratio={aspectRatio}>
                                <StyledVideo
                                    src={videoUrl}
                                    muted
                                    autoPlay
                                    loop
                                    isVisible={loaded}
                                    onCanPlayThrough={() => setLoaded(true)}
                                />
                            </VideoWrapper>
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
