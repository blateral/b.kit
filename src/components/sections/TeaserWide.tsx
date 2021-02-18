import React, { FC, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

import Grid from 'components/base/Grid';
import { HeadlineTag } from 'components/typography/Heading';
import Image, { ImageProps } from 'components/blocks/Image';
import Copy from 'components/typography/Copy';
import Title from 'components/blocks/Title';
import Wrapper from 'components/base/Wrapper';
import Section from 'components/base/Section';
import { getColors as color, mq, spacings, withRange } from 'utils/styles';
import Actions from 'components/blocks/Actions';

const WideImage = styled(Image)<{ isMirrored?: boolean }>`
    position: relative;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;

    @media ${mq.semilarge} {
        position: absolute;
        width: 50%;
        left: ${({ isMirrored }) => (isMirrored ? 'auto' : '50%')};
        right: ${({ isMirrored }) => (isMirrored ? '50%' : 'auto')};

        transform: translateX(
            ${({ isMirrored }) => (isMirrored ? '100%' : '-100%')}
        );
    }

    @media ${mq.xlarge} {
        max-width: ${spacings.wrapperLarge / 2}px;
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

const StyledActions = styled(Actions)`
    padding-top: ${spacings.spacer * 2}px;
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

const TeaserWide: FC<{
    isInverted?: boolean;
    isMirrored?: boolean;
    hasBack?: boolean;
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
    hasBack = false,
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

    return (
        <Section
            addSeperation
            bgColor={
                isInverted
                    ? color(theme).dark
                    : hasBack
                    ? color(theme).mono.light
                    : 'transparent'
            }
        >
            {image && (
                <WideImage coverSpace {...image} isMirrored={isMirrored} />
            )}
            <Wrapper clampWidth="normal">
                <Grid.Row gutter={spacings.spacer}>
                    <Grid.Col
                        semilarge={{
                            span: 14 / 28,
                            move: (isMirrored ? 14 : 0) / 28,
                        }}
                    ></Grid.Col>
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
            </Wrapper>
        </Section>
    );
};

export default TeaserWide;
