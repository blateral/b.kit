import React, { FC, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

import Grid from 'components/base/Grid';
import { HeadlineTag } from 'components/typography/Heading';
import Image, { ImageProps } from 'components/blocks/Image';
import Copy from 'components/typography/Copy';
import Title from 'components/blocks/Title';
import Wrapper from 'components/base/Wrapper';
import Section, { BgMode } from 'components/base/Section';
import { mq, spacings, withRange, getColors as color } from 'utils/styles';
import Actions from 'components/blocks/Actions';

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
`;

const ImgDescDesktop = styled(Copy)`
    display: none;

    @media ${mq.semilarge} {
        display: block;
        padding: ${spacings.spacer}px ${spacings.spacer * 2}px;
    }
`;

const ImgDescMobile = styled(Copy)`
    display: block;
    padding: ${spacings.spacer}px 0;
    padding-left: ${spacings.nudge * 2}px;

    @media ${mq.semilarge} {
        display: none;
    }
`;

const InfoWrapper = styled.div<{ isMirrored?: boolean }>`
    padding-left: ${spacings.nudge * 2}px;
    padding-right: ${spacings.nudge * 2}px;
    padding-top: ${spacings.nudge}px;
    padding-bottom: ${spacings.nudge * 2}px;

    @media ${mq.semilarge} {
        ${withRange([spacings.spacer * 3, spacings.spacer * 4], 'padding-top')}

        padding-right: ${({ isMirrored }) =>
            isMirrored ? spacings.spacer * 1.5 : (1 / 28) * spacings.wrapper}px;
        padding-bottom: ${spacings.nudge * 6}px;
        padding-left: ${({ isMirrored }) =>
            !isMirrored
                ? spacings.spacer * 1.5
                : (1 / 28) * spacings.wrapper}px;
    }
`;

const StyledTitle = styled(Title)`
    & + * {
        margin-top: ${spacings.nudge * 6}px;
    }
`;

const ContentBlock = styled(Copy)`
    ul {
        padding-left: 0;
        list-style-position: inside;
    }

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
`;

const Teaser: FC<{
    isInverted?: boolean;
    isMirrored?: boolean;
    bgMode?: 'full' | 'splitted';
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
    isInverted = false,
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

    const getSectionBgMode = (): BgMode | undefined => {
        switch (bgMode) {
            case 'full':
                return 'full';
            case 'splitted':
                return isMirrored ? 'larger-left' : 'larger-right';
            default:
                return undefined;
        }
    };

    return (
        <Section
            addSeperation
            bgColor={
                isInverted
                    ? color(theme).dark
                    : bgMode
                    ? color(theme).mono.light
                    : 'transparent'
            }
            bgMode={!isInverted ? getSectionBgMode() : undefined}
        >
            <Wrapper clampWidth="normal">
                <Grid.Row gutter={spacings.spacer}>
                    <Grid.Col
                        semilarge={{
                            span: 14 / 28,
                            move: (isMirrored ? 14 : 0) / 28,
                        }}
                    >
                        <ImgWrapper isMirrored={isMirrored}>
                            {image && <StyledImage coverSpace {...image} />}
                            {image?.description && (
                                <ImgDescMobile
                                    size="small"
                                    isInverted={isInverted}
                                >
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: image.description,
                                        }}
                                    />
                                </ImgDescMobile>
                            )}
                        </ImgWrapper>
                    </Grid.Col>
                    <Grid.Col
                        semilarge={{
                            span: 14 / 28,
                            move: (isMirrored ? -14 : 0) / 28,
                        }}
                    >
                        <InfoWrapper isMirrored={isMirrored}>
                            <StyledTitle
                                isInverted={isInverted}
                                title={title}
                                titleAs={titleAs}
                                superTitle={superTitle}
                                superTitleAs={superTitleAs}
                            />
                            {intro && (
                                <ContentBlock
                                    type="copy-b"
                                    isInverted={isInverted}
                                >
                                    {intro}
                                </ContentBlock>
                            )}
                            {text && (
                                <ContentBlock isInverted={isInverted}>
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: text,
                                        }}
                                    />
                                </ContentBlock>
                            )}
                            {subText && (
                                <SubTextBlock
                                    isInverted={isInverted}
                                    type="copy-i"
                                >
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: subText,
                                        }}
                                    />
                                </SubTextBlock>
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
                <Grid.Row gutter={spacings.spacer}>
                    <Grid.Col
                        semilarge={{
                            span: (bgMode === 'splitted' ? 11.2 : 14) / 28,
                            move:
                                (isMirrored
                                    ? bgMode === 'splitted'
                                        ? 16.8
                                        : 14
                                    : 0) / 28,
                        }}
                    >
                        {image?.description && (
                            <ImgDescDesktop
                                size="small"
                                isInverted={isInverted}
                            >
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: image.description,
                                    }}
                                ></div>
                            </ImgDescDesktop>
                        )}
                    </Grid.Col>
                    <Grid.Col
                        semilarge={{
                            span: (bgMode === 'splitted' ? 16.8 : 14) / 28,
                            move:
                                (isMirrored
                                    ? bgMode === 'splitted'
                                        ? -11.2
                                        : -14
                                    : 0) / 28,
                        }}
                    />
                </Grid.Row>
            </Wrapper>
        </Section>
    );
};

export default Teaser;
