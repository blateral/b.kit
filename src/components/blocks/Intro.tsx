import * as React from 'react';
import styled, { ThemeContext } from 'styled-components';

import { getColors as color, spacings, mq } from '../../utils/styles';

import Title from '../blocks/Title';
import Copy from '../typography/Copy';

const View = styled.div``;

const ContentBlock = styled(Copy)`
    :not(:first-child) {
        padding-top: ${spacings.nudge * 5}px;
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

const Intro: React.FC<{
    title: string;
    superTitle: string;
    text?: string;

    primaryAction?: (isInverted?: boolean) => React.ReactNode;
    secondaryAction?: (isInverted?: boolean) => React.ReactNode;

    isInverted?: boolean;
}> = ({
    title,
    superTitle,
    text,
    primaryAction,
    secondaryAction,

    isInverted = false,
}) => {
    const theme = React.useContext(ThemeContext);
    return (
        <View>
            <Title
                title={title}
                superTitle={superTitle}
                isInverted={isInverted}
            />
            {text && (
                <ContentBlock
                    textColor={
                        isInverted ? color(theme).white : color(theme).black
                    }
                >
                    {text}
                </ContentBlock>
            )}
            {(primaryAction || secondaryAction) && (
                <Actions>
                    {primaryAction && primaryAction(isInverted)}
                    {secondaryAction && secondaryAction(isInverted)}
                </Actions>
            )}
        </View>
    );
};

export default Intro;
