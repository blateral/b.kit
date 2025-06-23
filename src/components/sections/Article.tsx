import * as React from 'react';
import styled, { ThemeContext, css } from 'styled-components';

import Section, { mapToBgMode } from 'components/base/Section';
import Title from 'components/blocks/Title';
import Copy from 'components/typography/Copy';
import Wrapper from 'components/base/Wrapper';
import { spacings, mq, getColors as color } from 'utils/styles';
import Actions from 'components/blocks/Actions';
import { HeadlineTag } from 'components/typography/Heading';
import { withLibTheme } from 'utils/LibThemeProvider';

const StyledTitle = styled(Title)`
    @media ${mq.semilarge} {
        max-width: 50%;
    }
`;

const Content = styled.div<{ withAsideText?: boolean }>`
    :not(:first-child) {
        padding-top: ${spacings.nudge * 5}px;
    }

    ${({ withAsideText }) =>
        withAsideText &&
        css`
            @media ${mq.semilarge} {
                display: flex;
                flex-direction: row;
                align-items: flex-start;

                & > * + * {
                    margin-left: ${spacings.spacer * 3}px;
                }
            }
        `}
`;

const ContentBlock = styled.div<{ isAside?: boolean; isHalf?: boolean }>`
    & + & {
        padding-top: ${({ isAside, isHalf }) =>
            isAside || isHalf ? spacings.spacer : '0'}px;
    }

    flex: ${({ isAside, isHalf }) =>
        isHalf ? '1 0 50%' : isAside ? '1 0 30%' : '1 0 60%'};

    @media ${mq.semilarge} {
        max-width: ${({ isAside, isHalf }) =>
            isHalf ? '50%' : isAside ? '100%' : '60%'};

        & + & {
            padding-top: 0;
        }
    }
`;

const ContentText = styled(Copy)`
    text-align: left;
`;

const StyledActions = styled(Actions)`
    padding-top: ${spacings.spacer * 2}px;

    @media ${mq.semilarge} {
        max-width: 50%;
    }
`;

const Article: React.FC<{
    title?: string;
    titleAs?: HeadlineTag;
    superTitle?: string;
    superTitleAs?: HeadlineTag;
    intro?: string;
    text?: string;
    asideText?: string;
    halfAside?: boolean;

    bgMode?: 'full' | 'splitted' | 'inverted';

    primaryAction?: (isInverted?: boolean) => React.ReactNode;
    secondaryAction?: (isInverted?: boolean) => React.ReactNode;
}> = ({
    title,
    titleAs,
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
                <Content withAsideText={asideText ? true : false}>
                    <ContentBlock isHalf={halfAside}>
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
                    </ContentBlock>

                    {asideText && (
                        <ContentBlock isAside>
                            <ContentText
                                type="copy"
                                isInverted={isInverted}
                                innerHTML={asideText}
                            />
                        </ContentBlock>
                    )}
                </Content>
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
