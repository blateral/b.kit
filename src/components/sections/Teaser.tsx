import React, { FC } from 'react';
import styled from 'styled-components';

import Grid from 'components/base/Grid';
import { HeadlineTag } from 'components/typography/Heading';
import Image, { ImageProps } from 'components/blocks/Image';
import Copy from 'components/typography/Copy';
import Title from 'components/blocks/Title';
import Wrapper from 'components/base/Wrapper';
import Section, { BgMode } from 'components/base/Section';
import { mq, spacings, withRange } from 'utils/styles';
import { colors } from '../../../theme';

const ImgWrapper = styled.div<{ isMirrored?: boolean }>`
    display: flex;
    flex-direction: column;
    position: relative;
    height: 100%;
    width: 100%;
`;

const StyledImage = styled(Image)`
    width: 100%;
`;

const ImgHolder = styled.div<{ hasDecorator?: boolean; isMirrored?: boolean }>`
    position: relative;
    width: 100%;
    height: 100%;

    &:after {
        content: ${({ hasDecorator }) => (hasDecorator ? `""` : undefined)};
        display: block;
        position: absolute;
        left: ${({ isMirrored }) => (isMirrored ? 'auto' : 0)};
        right: ${({ isMirrored }) => (isMirrored ? 0 : 'auto')};
        bottom: 0;
        width: 20px;
        height: 125px;
        background-color: ${colors['primary-2']};

        transform: translateX(
            ${({ isMirrored }) => (isMirrored ? '100%' : '-100%')}
        );
    }
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

    @media ${mq.semilarge} {
        display: none;
    }
`;

const InfoWrapper = styled.div<{ isMirrored?: boolean }>`
    padding-top: ${spacings.nudge}px;
    padding-bottom: ${spacings.nudge * 2}px;

    @media ${mq.semilarge} {
        ${withRange([spacings.spacer * 3, spacings.spacer * 4], 'padding-top')}

        ${({ isMirrored }) =>
            withRange(
                [
                    isMirrored ? 0 : spacings.spacer,
                    isMirrored ? spacings.spacer * 2.5 : spacings.spacer,
                ],
                'padding-right'
            )};

        padding-bottom: ${spacings.nudge * 6}px;
        padding-left: ${({ isMirrored }) =>
            !isMirrored ? spacings.spacer * 2.5 : spacings.spacer}px;

        ${({ isMirrored }) =>
            withRange(
                [
                    !isMirrored ? 0 : spacings.spacer,
                    !isMirrored ? spacings.spacer * 2.5 : spacings.spacer,
                ],
                'padding-left'
            )};
    }
`;

const StyledTitle = styled(Title)`
    & + * {
        margin-top: ${spacings.nudge * 6}px;
    }
`;

const Actions = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: ${spacings.spacer}px 0;
    padding-top: ${spacings.spacer * 2}px;

    &:last-child {
        padding-bottom: 0;
    }

    & > * {
        flex: 1;
    }

    & > * + * {
        margin-left: ${spacings.spacer}px;
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

const Teaser: FC<{
    isInverted?: boolean;
    isMirrored?: boolean;
    bgMode?: 'full' | 'splitted';
    hasDecorator?: boolean;
    superTitle?: string;
    title?: string;
    titleAs?: HeadlineTag;
    image?: Omit<ImageProps, 'coverSpace'> & { description?: string };
    intro?: string;
    text?: string;
    subText?: string;
    primaryAction?: (isInverted?: boolean) => React.ReactNode;
    secondaryAction?: (isInverted?: boolean) => React.ReactNode;
}> = ({
    isInverted,
    isMirrored,
    bgMode,
    hasDecorator,
    superTitle,
    title,
    titleAs,
    image,
    intro,
    text,
    subText,
    primaryAction,
    secondaryAction,
}) => {
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
            bgClamp="normal"
            bgColor={
                isInverted
                    ? colors.black
                    : bgMode
                    ? colors.mono.light
                    : 'transparent'
            }
            bgMode={!isInverted ? getSectionBgMode() : undefined}
        >
            <Wrapper clampWidth="normal" addWhitespace>
                <Grid.Row gutter={spacings.spacer}>
                    <Grid.Col
                        semilarge={{
                            span: 14 / 28,
                            move: (isMirrored ? 14 : 0) / 28,
                        }}
                    >
                        <ImgWrapper isMirrored={isMirrored}>
                            {image && (
                                <ImgHolder
                                    isMirrored={isMirrored}
                                    hasDecorator={hasDecorator}
                                >
                                    <StyledImage coverSpace {...image} />
                                </ImgHolder>
                            )}
                            {image?.description && (
                                <ImgDescMobile
                                    size="small"
                                    textColor={
                                        isInverted ? colors.white : colors.black
                                    }
                                >
                                    {image.description}
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
                            />
                            {intro && (
                                <ContentBlock
                                    type="copy-b"
                                    textColor={
                                        isInverted ? colors.white : colors.black
                                    }
                                >
                                    {intro}
                                </ContentBlock>
                            )}
                            {text && (
                                <ContentBlock
                                    textColor={
                                        isInverted ? colors.white : colors.black
                                    }
                                >
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: text,
                                        }}
                                    />
                                </ContentBlock>
                            )}
                            {subText && (
                                <SubTextBlock
                                    textColor={
                                        isInverted ? colors.white : colors.black
                                    }
                                    type="copy-i"
                                >
                                    {subText}
                                </SubTextBlock>
                            )}
                            {(primaryAction || secondaryAction) && (
                                <Actions>
                                    {primaryAction && primaryAction(isInverted)}
                                    {secondaryAction &&
                                        secondaryAction(isInverted)}
                                </Actions>
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
                                textColor={
                                    isInverted ? colors.white : colors.black
                                }
                            >
                                {image.description}
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
