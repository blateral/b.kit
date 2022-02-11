import * as React from 'react';
import styled, { ThemeContext } from 'styled-components';

import Section, { mapToBgMode } from 'components/base/Section';
import Title from 'components/blocks/Title';
import Copy from 'components/typography/Copy';
import Wrapper from 'components/base/Wrapper';
import { spacings, mq, getColors as color } from 'utils/styles';
import Actions from 'components/blocks/Actions';
import { HeadlineTag } from 'components/typography/Heading';
import { withLibTheme } from 'utils/LibThemeProvider';
import Grid from 'components/base/Grid';

const StyledTitle = styled(Title)`
    &:not(:last-child) {
        margin-bottom: ${spacings.spacer}px;
    }

    @media ${mq.semilarge} {
        max-width: 50%;
    }
`;

const ContentText = styled(Copy)`
    text-align: left;
`;

const StyledActions = styled(Actions)`
    margin-top: ${spacings.spacer}px;
`;

const Article: React.FC<{
    /** Main title text */
    title?: string;
    /** Main title HTML tag type (h2, h3, h4...) */
    titleAs?: HeadlineTag;
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
    title,
    titleAs = 'h2',
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
    const theme = React.useContext(ThemeContext);
    const isInverted = bgMode === 'inverted';
    const hasContent = intro || text || asideText;

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
            bgMode={mapToBgMode(bgMode)}
        >
            <Wrapper clampWidth="normal" addWhitespace>
                <StyledTitle
                    title={title}
                    titleAs={titleAs}
                    superTitle={superTitle}
                    superTitleAs={superTitleAs}
                    colorMode={isInverted ? 'inverted' : 'default'}
                />
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
