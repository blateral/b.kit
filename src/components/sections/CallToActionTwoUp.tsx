import Grid from 'components/base/Grid';
import Section, { mapToBgMode } from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import IntroBlock from 'components/blocks/IntroBlock';
import Copy from 'components/typography/Copy';
import { HeadlineTag } from 'components/typography/Heading';
import React, { FC } from 'react';
import styled from 'styled-components';
import { useLibTheme, withLibTheme } from 'utils/LibThemeProvider';
import { spacings, mq, getGlobals as global } from 'utils/styles';

const Avatar = styled.img<{ isInverted?: boolean }>`
    display: block;
    border: solid 1px transparent;
    border-radius: 50%;
    width: 260px;
    max-width: 100%;
    height: auto;
    aspect-ratio: 1 / 1;

    background: ${({ theme, isInverted }) =>
        isInverted
            ? global(theme).sections.imagePlaceholderBg.inverted
            : global(theme).sections.imagePlaceholderBg.default};

    @media ${mq.semilarge} {
        display: block;
        width: 286px;
    }
`;

const Info = styled(Copy)``;

const LeftContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: ${spacings.spacer}px;
`;

const RightContent = styled(Copy)``;

const CallToActionTwoUp: FC<{
    /** ID value for targeting section with anchor hashes */
    anchorId?: string;
    /** Main title text */
    title?: string;
    /** Main title HTML tag type (h2, h3, h4...) */
    titleAs?: HeadlineTag;
    /** Superior title that stands above main title */
    superTitle?: string;
    /** Superior title HTML tag type (h3, h4 ...) */
    superTitleAs?: HeadlineTag;

    /** Avatar image for the contact person */
    avatar?: { src: string; alt: string };

    /** Description or additional information for the contact person */
    description?: string;

    /** Content for the right column */
    rightContent?: string;

    /** Section background */
    bgMode?: 'full' | 'inverted';
}> = ({
    anchorId,
    title,
    titleAs = 'h2',
    superTitle,
    superTitleAs,
    avatar,
    description,
    rightContent,
    bgMode,
}) => {
    const { colors } = useLibTheme();
    const isInverted = bgMode === 'inverted';

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
            bgMode={bgMode ? mapToBgMode(bgMode, true) : 'full'}
        >
            <Wrapper addWhitespace clampWidth="normal">
                <Grid.Row
                    gutter={spacings.nudge * 5}
                    semilarge={{ gutter: spacings.spacer }}
                >
                    <Grid.Col span={12 / 12} semilarge={{ span: 4 / 12 }}>
                        <LeftContent>
                            {title && (
                                <IntroBlock
                                    colorMode={
                                        isInverted ? 'inverted' : 'default'
                                    }
                                    title={title}
                                    titleAs={titleAs}
                                    superTitle={superTitle}
                                    superTitleAs={superTitleAs}
                                />
                            )}
                            {avatar?.src && (
                                <Avatar
                                    src={avatar?.src}
                                    alt={avatar?.alt}
                                    isInverted={isInverted}
                                />
                            )}
                            {description && (
                                <Info
                                    type="copy"
                                    size="big"
                                    isInverted={isInverted}
                                    innerHTML={description}
                                />
                            )}
                        </LeftContent>
                    </Grid.Col>
                    <Grid.Col span={12 / 12} semilarge={{ span: 8 / 12 }}>
                        {rightContent && (
                            <RightContent innerHTML={rightContent} />
                        )}
                    </Grid.Col>
                </Grid.Row>
            </Wrapper>
        </Section>
    );
};

export const CallToActionTwoUpComponent = CallToActionTwoUp;
export default withLibTheme(CallToActionTwoUp);
