import * as React from 'react';
import styled, { ThemeContext, css } from 'styled-components';

import Section, { BgMode } from 'components/base/Section';
import Title from 'components/blocks/Title';
import Copy from 'components/typography/Copy';
import Wrapper from 'components/base/Wrapper';
import { spacings, mq, getColors as color } from 'utils/styles';
import Actions from 'components/blocks/Actions';

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

const ContentBlock = styled(Copy)<{ isAside?: boolean }>`
    text-align: left;

    ul {
        padding-left: 0;
        list-style-position: inside;
    }

    :not(:first-child) {
        padding-top: ${({ isAside }) => (isAside ? '' : spacings.nudge * 5)};
    }

    flex: ${({ isAside }) => (isAside ? '1 0 30%' : '1 0 60%')};

    @media ${mq.semilarge} {
        max-width: ${({ isAside }) => (isAside ? '100%' : '60%')};
    }
`;

const StyledActions = styled(Actions)`
    @media ${mq.semilarge} {
        max-width: 50%;
    }
`;

const Article: React.FC<{
    title?: string;
    superTitle?: string;
    text?: string;
    asideText?: string;

    bgMode?: 'full' | 'splitted';

    primaryAction?: (isInverted?: boolean) => React.ReactNode;
    secondaryAction?: (isInverted?: boolean) => React.ReactNode;

    isInverted?: boolean;
}> = ({
    title,
    superTitle,
    text,
    asideText,
    bgMode,
    primaryAction,
    secondaryAction,
    isInverted = false,
}) => {
    const getSectionBgMode = (): BgMode | undefined => {
        switch (bgMode) {
            case 'full':
                return 'full';
            case 'splitted':
                return 'larger-right';
            default:
                return undefined;
        }
    };

    const theme = React.useContext(ThemeContext);

    return (
        <Section
            addSeperation
            bgColor={
                isInverted
                    ? color(theme).black
                    : bgMode
                    ? color(theme).mono.light
                    : 'transparent'
            }
            bgMode={!isInverted ? getSectionBgMode() : undefined}
        >
            <Wrapper clampWidth="normal" addWhitespace>
                <StyledTitle
                    title={title}
                    superTitle={superTitle}
                    isInverted={isInverted}
                />
                <Content withAsideText={asideText ? true : false}>
                    {text && (
                        <ContentBlock
                            type="copy"
                            textColor={
                                isInverted
                                    ? color(theme).white
                                    : color(theme).black
                            }
                        >
                            <div dangerouslySetInnerHTML={{ __html: text }} />
                        </ContentBlock>
                    )}
                    {asideText && (
                        <ContentBlock
                            type="copy"
                            textColor={
                                isInverted
                                    ? color(theme).white
                                    : color(theme).black
                            }
                            isAside
                        >
                            <div
                                dangerouslySetInnerHTML={{ __html: asideText }}
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

export default Article;
