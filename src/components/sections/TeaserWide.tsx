import React, { FC, useState } from 'react';
import styled, { css } from 'styled-components';

import Grid, { getGridWidth } from 'components/base/Grid';
import { HeadlineTag } from 'components/typography/Heading';
import Image, { ImageProps } from 'components/blocks/Image';
import Wrapper, { wrapperWhitespace } from 'components/base/Wrapper';
import Section, { mapToBgMode } from 'components/base/Section';
import { mq, spacings, withRange, getGlobals as global } from 'utils/styles';
import Actions from 'components/blocks/Actions';
import { useLibTheme, withLibTheme } from 'utils/LibThemeProvider';
import IntroBlock from 'components/blocks/IntroBlock';

/**
 * calculate single grid col from relative content wrapper
 * (grid width = wrapper width without paddings)
 * */
const getGridColOfContent = () => {
    return css`
        ${getGridWidth({
            cols: 1,
            gridWidth: `${spacings.wrapper - wrapperWhitespace * 2}px `,
        })}
    `;
};

const WideVideo = styled.div<{ isMirrored?: boolean; isVisible?: boolean }>`
    display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
    position: relative;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;

    @media ${mq.semilarge} {
        position: absolute;
        /** 
            calculate width of 6 grid cols (grid width = viewport width without wrapper paddings)
            and add left or right wrapper padding afterwards
         */
        width: calc(
            ${getGridWidth({
                    cols: 6,
                    gridWidth: `100% - ${wrapperWhitespace * 2}px `,
                })} + ${wrapperWhitespace}px
        );
        left: ${({ isMirrored }) => (isMirrored ? 'auto' : '0')};
        right: ${({ isMirrored }) => (isMirrored ? '0' : 'auto')};
    }

    @media ${mq.xlarge} {
        /** 
            calculate width of 1 grid cols
            and add left or right wrapper padding afterwards. Then add this to 50% of current
            viewport width.
         */
        width: calc(50% + ${getGridColOfContent()} + ${wrapperWhitespace}px);
    }

    @media ${mq.xxxLarge} {
        /** 
            calculate width of 1 grid cols
            and add left or right wrapper padding afterwards. Then add this to 50% of large wrapper width.
         */
        width: calc(
            ${spacings.wrapperLarge / 2}px + ${getGridColOfContent()} +
                ${wrapperWhitespace}px
        );

        left: ${({ isMirrored }) => (isMirrored ? 'auto' : '50%')};
        right: ${({ isMirrored }) => (isMirrored ? '50%' : 'auto')};

        ${({ isMirrored }) =>
            css`
                transform: translateX(
                    calc(
                        ${isMirrored ? '100% - ' : '-100% + '}
                            (${getGridColOfContent()} + ${wrapperWhitespace}px)
                    )
                );
            `};
    }
`;

const VideoContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;

    @media ${mq.semilarge} {
        aspect-ratio: 16 / 9;
        border-radius: ${({ theme }) => global(theme).sections.edgeRadius};
        overflow: hidden;
    }
`;

const StyledVideo = styled.video`
    width: 100%;
    height: 100%;
    min-height: 400px;
    object-fit: cover;

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

const WideImage = styled(Image)<{ isMirrored?: boolean }>`
    position: relative;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    min-height: 400px;
    height: 100%;

    @media ${mq.semilarge} {
        position: absolute;
        /** 
            calculate width of 6 grid cols (grid width = viewport width without wrapper paddings)
            and add left or right wrapper padding afterwards
         */
        width: calc(
            ${getGridWidth({
                    cols: 6,
                    gridWidth: `100% - ${wrapperWhitespace * 2}px `,
                })} + ${wrapperWhitespace}px
        );
        left: ${({ isMirrored }) => (isMirrored ? 'auto' : '0')};
        right: ${({ isMirrored }) => (isMirrored ? '0' : 'auto')};
    }

    @media ${mq.xlarge} {
        /** 
            calculate width of 1 grid cols
            and add left or right wrapper padding afterwards. Then add this to 50% of current
            viewport width.
         */
        width: calc(50% + ${getGridColOfContent()} + ${wrapperWhitespace}px);
    }

    @media ${mq.xxxLarge} {
        /** 
            calculate width of 1 grid cols
            and add left or right wrapper padding afterwards. Then add this to 50% of large wrapper width.
         */
        width: calc(
            ${spacings.wrapperLarge / 2}px + ${getGridColOfContent()} +
                ${wrapperWhitespace}px
        );

        left: ${({ isMirrored }) => (isMirrored ? 'auto' : '50%')};
        right: ${({ isMirrored }) => (isMirrored ? '50%' : 'auto')};

        ${({ isMirrored }) =>
            css`
                transform: translateX(
                    calc(
                        ${isMirrored ? '100% - ' : '-100% + '}
                            (${getGridColOfContent()} + ${wrapperWhitespace}px)
                    )
                );
            `};
    }
`;

const Content = styled.div`
    ${({ theme }) =>
        withRange(
            global(theme).sections.seperation.padding.default,
            'padding-bottom'
        )}

    @media ${mq.semilarge} {
        ${({ theme }) =>
            withRange(
                global(theme).sections.seperation.padding.default,
                'padding-top'
            )}
    }
`;

const StyledActions = styled(Actions)`
    &:not(:first-child) {
        margin-top: ${spacings.spacer}px;
    }
`;

const TeaserWide: FC<{
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
    video?: string[];

    /** Main richtext */
    text?: string;

    /** Section background */
    bgMode?: 'full' | 'inverted';

    /** Function to inject custom primary button */
    primaryAction?: (isInverted?: boolean) => React.ReactNode;

    /** Function to inject custom secondary button */
    secondaryAction?: (isInverted?: boolean) => React.ReactNode;
}> = ({
    isMirrored = false,
    superTitle,
    superTitleAs,
    title,
    titleAs,
    image,
    video,
    text,
    primaryAction,
    secondaryAction,
    bgMode,
}) => {
    const { colors } = useLibTheme();

    const isInverted = bgMode === 'inverted';
    const hasBg = bgMode === 'full';

    const [isLoaded, setLoaded] = useState(false);

    return (
        <Section
            bgColor={
                isInverted
                    ? colors.new.sectionBg.dark
                    : hasBg
                    ? colors.new.sectionBg.medium
                    : colors.new.sectionBg.light
            }
            bgMode={mapToBgMode(bgMode, true)}
        >
            {image && (!video || !isLoaded) && (
                <WideImage coverSpace {...image} isMirrored={isMirrored} />
            )}
            {video && video.length > 0 && (
                <WideVideo isVisible={isLoaded}>
                    <VideoContainer>
                        <StyledVideo
                            muted
                            autoPlay
                            loop
                            onCanPlayThrough={() => setLoaded(true)}
                        >
                            {video.map((url, i) => (
                                <source src={url} key={i} />
                            ))}
                        </StyledVideo>
                    </VideoContainer>
                </WideVideo>
            )}
            <Wrapper clampWidth="normal" addWhitespace>
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
                    ></Grid.Col>
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
                        <Content>
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
                                        primaryAction &&
                                        primaryAction(isInverted)
                                    }
                                    secondary={
                                        secondaryAction &&
                                        secondaryAction(isInverted)
                                    }
                                />
                            )}
                        </Content>
                    </Grid.Col>
                </Grid.Row>
            </Wrapper>
        </Section>
    );
};

export const TeaserWideComponent = TeaserWide;
export default withLibTheme(TeaserWide);
