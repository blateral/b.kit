import React, { FC } from 'react';
import styled from 'styled-components';

import Grid from '../base/Grid';
import { HeadlineTag } from '../typography/Heading';
import Image, { ImageProps } from '../blocks/Image';
import Copy from '../typography/Copy';
import Title from '../blocks/Title';
import Wrapper from '../base/Wrapper';
import Section from '../base/Section';
import { mq, spacings, withRange } from '../../utils/styles';
import { colors } from '../../theme';

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
    hasBack?: boolean;
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
    hasBack,
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
    return (
        <Section
            addSeperation
            bgClamp="normal"
            bgColor={
                isInverted
                    ? colors.black
                    : hasBack
                    ? colors.mono.light
                    : 'transparent'
            }
        >
            {image && (
                <WideImage coverSpace {...image} isMirrored={isMirrored} />
            )}
            <Wrapper clampWidth="normal" addWhitespace>
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
            </Wrapper>
        </Section>
    );
};

export default Teaser;
