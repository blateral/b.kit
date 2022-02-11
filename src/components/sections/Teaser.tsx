import React, { FC, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

import Grid from 'components/base/Grid';
import { HeadlineTag } from 'components/typography/Heading';
import Image, { ImageProps } from 'components/blocks/Image';
import Copy from 'components/typography/Copy';
import Wrapper from 'components/base/Wrapper';
import Section, { mapToBgMode } from 'components/base/Section';
import {
    mq,
    spacings,
    withRange,
    getColors as color,
    getGlobals as global,
} from 'utils/styles';
import Actions from 'components/blocks/Actions';
import { withLibTheme } from 'utils/LibThemeProvider';
import IntroBlock from 'components/blocks/IntroBlock';

const ImgWrapper = styled.div<{ isMirrored?: boolean }>`
    display: flex;
    flex-direction: column;
    position: relative;
    height: 100%;
    width: 100%;
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

const ImgDescDesktop = styled(Copy)`
    display: none;

    @media ${mq.semilarge} {
        display: block;
        padding: ${spacings.nudge * 2}px ${spacings.nudge * 5}px;
    }
`;

const ImgDescMobile = styled(Copy)`
    display: block;
    padding: ${spacings.nudge * 2}px 0;
    padding-left: ${spacings.nudge}px;

    @media ${mq.semilarge} {
        display: none;
    }
`;

const InfoWrapper = styled.div<{ isMirrored?: boolean }>`
    padding-right: ${({ isMirrored }) => !isMirrored && spacings.nudge * 2}px;
    padding-left: ${({ isMirrored }) => isMirrored && spacings.nudge * 2}px;

    padding-top: ${spacings.nudge}px;
    padding-bottom: ${spacings.nudge * 2}px;

    @media ${mq.medium} {
        ${withRange([spacings.spacer * 2, spacings.nudge * 10], 'padding-top')}
    }

    @media ${mq.semilarge} {
        padding-bottom: ${spacings.spacer}px;

        padding-right: ${({ isMirrored }) =>
            !isMirrored ? spacings.spacer + 'px' : (1 / 12) * 100 + '%'};
        padding-left: ${({ isMirrored }) =>
            isMirrored ? spacings.spacer + 'px' : (1 / 12) * 100 + '%'};
    }

    @media ${mq.xlarge} {
        padding-right: ${({ isMirrored }) =>
            !isMirrored ? spacings.spacer : (1 / 12) * spacings.wrapper}px;
        padding-left: ${({ isMirrored }) =>
            isMirrored ? spacings.spacer : (1 / 12) * spacings.wrapper}px;
    }
`;

const ContentBlock = styled(Copy)`
    :not(:first-child) {
        padding-top: ${spacings.nudge * 5}px;
    }
`;

const SubTextBlock = styled(ContentBlock)`
    :not(:first-child) {
        padding-top: ${spacings.nudge * 3}px;
    }
`;

const StyledActions = styled(Actions)`
    padding-top: ${spacings.spacer * 2}px;

    @media ${mq.semilarge} {
        & > * {
            max-width: 300px;
        }
    }
`;

const RowHelper = styled.div`
    display: none;

    @media ${mq.semilarge} {
        display: block;
    }
`;

const Teaser: FC<{
    isMirrored?: boolean;
    bgMode?: 'full' | 'inverted' | 'splitted';
    superTitle?: string;
    superTitleAs?: HeadlineTag;
    title?: string;
    titleAs?: HeadlineTag;
    image?: Omit<ImageProps, 'coverSpace'> & { description?: string };
    intro?: string;
    text?: string;
    subText?: string;
    primaryAction?: (isInverted?: boolean) => React.ReactNode;
    secondaryAction?: (isInverted?: boolean) => React.ReactNode;
}> = ({
    isMirrored = false,
    bgMode,
    superTitle,
    superTitleAs,
    title,
    titleAs,
    image,
    intro,
    text,
    subText,
    primaryAction,
    secondaryAction,
}) => {
    const theme = useContext(ThemeContext);
    const isInverted = bgMode === 'inverted';
    return (
        <Section
            addSeperation
            bgColor={
                isInverted
                    ? color(theme).new.sectionBg.dark
                    : bgMode
                    ? color(theme).new.sectionBg.medium
                    : color(theme).new.sectionBg.light
            }
            bgMode={mapToBgMode(bgMode, false, isMirrored)}
        >
            <Wrapper clampWidth="normal">
                <Grid.Row gutter={spacings.spacer}>
                    <Grid.Col
                        semilarge={{
                            span: 6 / 12,
                            move: (isMirrored ? 6 : 0) / 12,
                        }}
                    >
                        <ImgWrapper isMirrored={isMirrored}>
                            {image && <StyledImage coverSpace {...image} />}
                            {image?.description && (
                                <ImgDescMobile
                                    size="small"
                                    isInverted={isInverted}
                                    innerHTML={image.description}
                                />
                            )}
                        </ImgWrapper>
                    </Grid.Col>
                    <Grid.Col
                        semilarge={{
                            span: 6 / 12,
                            move: (isMirrored ? -6 : 0) / 12,
                        }}
                    >
                        <InfoWrapper isMirrored={isMirrored}>
                            <IntroBlock
                                title={title}
                                titleAs={titleAs}
                                superTitle={superTitle}
                                superTitleAs={superTitleAs}
                                text={intro}
                                colorMode={isInverted ? 'inverted' : 'default'}
                            />
                            {text && (
                                <ContentBlock
                                    isInverted={isInverted}
                                    innerHTML={text}
                                />
                            )}
                            {subText && (
                                <SubTextBlock
                                    isInverted={isInverted}
                                    type="copy-i"
                                    innerHTML={subText}
                                />
                            )}
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
                        </InfoWrapper>
                    </Grid.Col>
                </Grid.Row>
                <RowHelper>
                    <Grid.Row gutter={spacings.spacer}>
                        <Grid.Col
                            semilarge={{
                                span: (bgMode === 'splitted' ? 4.6 : 6) / 12,
                                move:
                                    (isMirrored
                                        ? bgMode === 'splitted'
                                            ? 8.4
                                            : 6
                                        : 0) / 12,
                            }}
                        >
                            {image?.description && (
                                <ImgDescDesktop
                                    size="small"
                                    isInverted={isInverted}
                                    innerHTML={image.description}
                                />
                            )}
                        </Grid.Col>
                        <Grid.Col
                            semilarge={{
                                span: (bgMode === 'splitted' ? 8.4 : 6) / 12,
                                move:
                                    (isMirrored
                                        ? bgMode === 'splitted'
                                            ? -4.6
                                            : -6
                                        : 0) / 12,
                            }}
                        />
                    </Grid.Row>
                </RowHelper>
            </Wrapper>
        </Section>
    );
};

export const TeaserComponent = Teaser;
export default withLibTheme(Teaser);
