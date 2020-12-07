import * as React from 'react';
import styled, { ThemeContext, css } from 'styled-components';

import Section, { BgMode } from '../base/Section';
import Title from '../blocks/Title';
import Copy from '../typography/Copy';
import { spacings, getColors, mq } from '../../utils/styles';

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
                    margin-left: ${spacings.spacer}px;
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
        padding-top: ${spacings.nudge * 5}px;
    }

    flex: ${({ isAside }) => (isAside ? '1 0 30%' : '1 0 70%')};
`;

const Actions = styled.div`
    padding-top: ${spacings.spacer * 2}px;

    & > * + * {
        margin-left: ${spacings.spacer}px;
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
    withColumns?: boolean;
}> = ({
    title,
    superTitle,
    text,
    asideText,
    bgMode,
    primaryAction,
    secondaryAction,
    isInverted,
    withColumns,
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
                    ? getColors(theme).black
                    : bgMode
                    ? getColors(theme).mono.light
                    : 'transparent'
            }
            bgMode={!isInverted ? getSectionBgMode() : undefined}
        >
            <Title
                title={title}
                superTitle={superTitle}
                isInverted={isInverted}
            />
            <Content withAsideText={asideText && true}>
                <ContentBlock
                    type="copy"
                    textColor={
                        isInverted
                            ? getColors(theme).white
                            : getColors(theme).black
                    }
                    columns={withColumns}
                >
                    <div dangerouslySetInnerHTML={{ __html: text }} />
                </ContentBlock>
                <ContentBlock
                    type="copy"
                    textColor={
                        isInverted
                            ? getColors(theme).white
                            : getColors(theme).black
                    }
                    isAside
                >
                    <div dangerouslySetInnerHTML={{ __html: asideText }} />
                </ContentBlock>
            </Content>
            {(primaryAction || secondaryAction) && (
                <Actions>
                    {primaryAction && primaryAction(isInverted)}
                    {secondaryAction && secondaryAction(isInverted)}
                </Actions>
            )}
        </Section>
    );
};

export default Article;
