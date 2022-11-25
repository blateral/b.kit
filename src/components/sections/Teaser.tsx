import React, { FC, useRef, useState } from 'react';
import styled from 'styled-components';

import Grid from 'components/base/Grid';
import { HeadlineTag } from 'components/typography/Heading';
import Image, { ImageProps } from 'components/blocks/Image';
import Copy from 'components/typography/Copy';
import Wrapper from 'components/base/Wrapper';
import Section, { BgMode } from 'components/base/Section';
import {
    mq,
    spacings,
    getGlobals as global,
    getFonts as font,
} from 'utils/styles';
import Actions from 'components/blocks/Actions';
import { useLibTheme, withLibTheme } from 'utils/LibThemeProvider';
import IntroBlock from 'components/blocks/IntroBlock';
import VideoBlock, { VideoAspectRatios } from 'components/blocks/VideoBlock';
import { isValidArray } from 'utils/arrays';
import { useObserverSupport } from 'utils/useObserverSupport';
import useUpdateEffect from 'utils/useUpdateEffect';

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

const Description = styled(Copy)<{
    isInverted?: boolean;
    isSplitted?: boolean;
    isMirrored?: boolean;
}>`
    display: block;

    @media ${mq.semilarge} {
        padding-left: ${spacings.nudge * 2}px;
        padding-right: ${spacings.nudge * 2}px;
        margin-left: ${({ isMirrored }) => isMirrored && 'auto'};
        margin-right: ${({ isMirrored }) => !isMirrored && 'auto'};
        max-width: ${({ isSplitted }) => isSplitted && '81.5%'};

        color: ${({ theme, isInverted, isSplitted }) =>
            isInverted && !isSplitted
                ? font(theme).copy.small.colorInverted
                : font(theme).copy.small.color};
    }

    @media ${mq.xlarge} {
        max-width: ${({ isSplitted }) => isSplitted && '69.5%'};
    }
`;

const StyledActions = styled(Actions)`
    &:not(:first-child) {
        margin-top: ${spacings.spacer}px;
    }
`;

const Teaser: FC<{
    /** ID value for targeting section with anchor hashes */
    anchorId?: string;

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
    bgMode?: 'full' | 'inverted' | 'splitted' | 'inverted-splitted';

    /** Function to inject custom primary button */
    primaryAction?: (isInverted?: boolean) => React.ReactNode;

    /** Function to inject custom secondary button */
    secondaryAction?: (isInverted?: boolean) => React.ReactNode;
}> = ({
    anchorId,
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
    const isInverted = bgMode === 'inverted' || bgMode === 'inverted-splitted';
    const isSplitted = bgMode === 'splitted' || bgMode === 'inverted-splitted';
    const hasVideo = isValidArray(video?.urls, false);

    const viewRef = useRef<HTMLDivElement | null>(null);
    const [isLoaded, setLoaded] = useState(!image?.small || false);
    const [isVideoActive, setVideoActive] = useState<boolean>(false);
    const isObserverSupported = useObserverSupport();

    useUpdateEffect(() => {
        if (!viewRef.current || !hasVideo) return;
        if (!isObserverSupported) {
            setVideoActive(true);
            return;
        }

        const observer = new IntersectionObserver(
            (entries, observer) => {
                const [entry] = entries;

                if (entry.isIntersecting) {
                    observer.unobserve(entry.target);
                    setVideoActive(true);
                }
            },
            {
                rootMargin: '200px 0px 200px 0px',
            }
        );

        const viewEl = viewRef.current;
        observer.observe(viewEl);

        return () => {
            if (viewEl) observer.unobserve(viewEl);
        };
    }, [isObserverSupported]);

    return (
        <Section
            addSeperation
            anchorId={anchorId}
            bgColor={
                isInverted
                    ? colors.sectionBg.dark
                    : bgMode
                    ? colors.sectionBg.medium
                    : colors.sectionBg.light
            }
            bgMode={mapToTeaserBgMode(bgMode, false, isMirrored)}
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
                        {(image?.small || hasVideo) && (
                            <Figure ref={viewRef}>
                                {image?.small && (!video || !isLoaded) && (
                                    <StyledImage
                                        {...image}
                                        isInverted={isInverted}
                                        coverSpace
                                    />
                                )}
                                {hasVideo && (
                                    <Video
                                        urls={
                                            isVideoActive
                                                ? video?.urls
                                                : undefined
                                        }
                                        muted
                                        autoPlay
                                        loop
                                        onCanPlayThrough={() => setLoaded(true)}
                                        ratios={video?.aspectRatios}
                                        isVisible={isLoaded}
                                        isInverted={isInverted}
                                    />
                                )}
                                {description && (
                                    <Description
                                        size="small"
                                        renderAs="figcaption"
                                        isInverted={isInverted}
                                        isSplitted={isSplitted}
                                        isMirrored={isMirrored}
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
                            titleHyphens
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

export const mapToTeaserBgMode = (
    mode?: 'full' | 'splitted' | 'inverted' | 'inverted-splitted',
    preventSplit = false,
    isMirrored = false
): BgMode | undefined => {
    switch (mode) {
        case 'full':
            return 'full';
        case 'inverted':
            return 'inverted';
        case 'splitted': {
            if (!preventSplit)
                return isMirrored ? 'larger-left' : 'larger-right';
            else return undefined;
        }
        case 'inverted-splitted': {
            if (!preventSplit)
                return isMirrored ? 'larger-left' : 'larger-right';
            else return undefined;
        }

        default:
            return undefined;
    }
};

export const TeaserComponent = Teaser;
export default withLibTheme(Teaser);
