import React, { FC, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

import Grid from 'components/base/Grid';
import { HeadlineTag } from 'components/typography/Heading';
import Image, { ImageProps } from 'components/blocks/Image';
import Copy from 'components/typography/Copy';
import Wrapper from 'components/base/Wrapper';
import Section, { mapToBgMode } from 'components/base/Section';
import { getColors as color, mq, spacings, withRange } from 'utils/styles';
import Actions from 'components/blocks/Actions';
import { withLibTheme } from 'utils/LibThemeProvider';
import IntroBlock from 'components/blocks/IntroBlock';

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
    padding-left: ${spacings.spacer}px;
    padding-right: ${spacings.spacer}px;
    padding-top: ${spacings.nudge}px;
    padding-bottom: ${spacings.nudge * 2}px;

    @media ${mq.semilarge} {
        ${withRange([spacings.spacer * 3, spacings.spacer * 4], 'padding-top')}

        padding-right: ${({ isMirrored }) =>
            isMirrored ? spacings.spacer * 1.5 : (1 / 28) * spacings.wrapper}px;
        ${withRange(
            [spacings.spacer * 2, spacings.spacer * 4],
            'padding-bottom'
        )}
        padding-left: ${({ isMirrored }) =>
            !isMirrored
                ? spacings.spacer * 1.5
                : (1 / 28) * spacings.wrapper}px;
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

const TeaserWide: FC<{
    isMirrored?: boolean;
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

    bgMode?: 'full' | 'inverted';
}> = ({
    isMirrored = false,
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
    bgMode,
}) => {
    const theme = useContext(ThemeContext);

    const isInverted = bgMode === 'inverted';
    const hasBg = bgMode === 'full';

    return (
        <Section
            bgColor={
                isInverted
                    ? color(theme).new.sectionBg.dark
                    : hasBg
                    ? color(theme).new.sectionBg.medium
                    : color(theme).new.sectionBg.light
            }
            bgMode={mapToBgMode(bgMode, true)}
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
            </Wrapper>
        </Section>
    );
};

export const TeaserWideComponent = TeaserWide;
export default withLibTheme(TeaserWide);
