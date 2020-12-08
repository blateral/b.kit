import * as React from 'react';
import styled, { ThemeContext, css } from 'styled-components';

import Section, { BgMode } from '../base/Section';
import Title from '../blocks/Title';
import Copy from '../typography/Copy';
import { spacings, mq, getColors as color } from '../../utils/styles';
import Wrapper from '../base/Wrapper';

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

const Actions = styled.div`
    flex-direction: column;
    display: flex;
    align-items: stretch;
    padding-top: ${spacings.spacer * 2}px;
    width: 100%;

    & > * {
        flex: 1;
    }

    & > * + * {
        margin-top: ${spacings.spacer * 0.5}px;
    }

    @media ${mq.medium} {
        flex-direction: row;
        padding: ${spacings.spacer}px 0;

        &:last-child {
            padding-bottom: 0;
        }

        & > * + * {
            margin-left: ${spacings.spacer}px;
            margin-top: 0;
        }
    }

    @media ${mq.semilarge} {
        max-width: 50%;
        align-items: flex-start;
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
    isInverted,
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
                    <Actions>
                        {primaryAction && primaryAction(isInverted)}
                        {secondaryAction && secondaryAction(isInverted)}
                    </Actions>
                )}
            </Wrapper>
        </Section>
    );
};

export default Article;
