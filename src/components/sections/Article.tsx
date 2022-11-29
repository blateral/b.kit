import * as React from 'react';
import styled from 'styled-components';

import Section, { mapToBgMode } from 'components/base/Section';
import Title, { TitleSize } from 'components/blocks/Title';
import Copy from 'components/typography/Copy';
import Wrapper from 'components/base/Wrapper';
import { spacings, mq } from 'utils/styles';
import Actions from 'components/blocks/Actions';
import { HeadlineTag } from 'components/typography/Heading';
import { useLibTheme, withLibTheme } from 'utils/LibThemeProvider';
import Grid from 'components/base/Grid';

const StyledTitle = styled(Title)`
    &:not(:last-child) {
        margin-bottom: ${spacings.spacer}px;
    }

    @media ${mq.semilarge} {
        max-width: 880px;
    }
`;

const ContentText = styled(Copy)`
    text-align: left;
`;

const StyledActions = styled(Actions)`
    margin-top: ${spacings.spacer}px;
`;

const Article: React.FC<{
    /** ID value for targeting section with anchor hashes */
    anchorId?: string;
    /** Main title text */
    title?: string;
    /** Main title HTML tag type (h2, h3, h4...) */
    titleAs?: HeadlineTag;
    /** Main title size */
    titleSize?: TitleSize;
    /** Superior title that stands above main title */
    superTitle?: string;
    /** Superior title HTML tag type (h3, h4 ...) */
    superTitleAs?: HeadlineTag;
    /** Bold intro text underneath the title (limited richtext capabilites) */
    intro?: string;
    /** Main article richtext */
    text?: string;
    /** Additional article richtext in a second column */
    asideText?: string;
    /** Controls width of left text column (8/12 or 6/12) */
    halfAside?: boolean;

    /** Section background */
    bgMode?: 'full' | 'splitted' | 'inverted';

    /** Function to inject custom primary button */
    primaryAction?: (isInverted?: boolean) => React.ReactNode;
    /** Function to inject custom secondary button */
    secondaryAction?: (isInverted?: boolean) => React.ReactNode;
}> = ({
    anchorId,
    title,
    titleAs = 'h2',
    titleSize = 'heading-2',
    superTitle,
    superTitleAs,
    intro,
    text,
    asideText,
    halfAside,
    bgMode,
    primaryAction,
    secondaryAction,
}) => {
    // const theme = React.useContext(ThemeContext);
    const { colors } = useLibTheme();

    const isInverted = bgMode === 'inverted';
    const hasContent = intro || text || asideText;

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
            bgMode={mapToBgMode(bgMode)}
        >
            <Wrapper clampWidth="normal" addWhitespace>
                {(title || superTitle) && (
                    <StyledTitle
                        title={title}
                        titleAs={titleAs}
                        titleSize={titleSize}
                        superTitle={superTitle}
                        superTitleAs={superTitleAs}
                        colorMode={isInverted ? 'inverted' : 'default'}
                    />
                )}
                {hasContent && (
                    <Grid.Row>
                        <Grid.Col
                            semilarge={{ span: halfAside ? 6 / 12 : 8 / 12 }}
                        >
                            {intro && (
                                <ContentText
                                    type="copy-b"
                                    isInverted={isInverted}
                                    innerHTML={intro}
                                />
                            )}
                            {text && (
                                <ContentText
                                    type="copy"
                                    isInverted={isInverted}
                                    innerHTML={text}
                                />
                            )}
                        </Grid.Col>
                        {asideText && (
                            <Grid.Col
                                semilarge={{
                                    span: halfAside ? 6 / 12 : 4 / 12,
                                }}
                            >
                                <ContentText
                                    type="copy"
                                    isInverted={isInverted}
                                    innerHTML={asideText}
                                />
                            </Grid.Col>
                        )}
                    </Grid.Row>
                )}
                {(primaryAction || secondaryAction) && (
                    <StyledActions
                        primary={primaryAction && primaryAction(isInverted)}
                        secondary={
                            secondaryAction && secondaryAction(isInverted)
                        }
                    />
                )}
            </Wrapper>
        </Section>
    );
};

export const ArticleComponent = Article;
export default withLibTheme(Article);
