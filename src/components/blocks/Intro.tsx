import * as React from 'react';
import styled, { ThemeContext } from 'styled-components';

import { getColors as color, spacings, mq } from '../../utils/styles';

import Title from '../blocks/Title';
import Copy from '../typography/Copy';
import Actions from './Actions';

const View = styled.div``;

const ContentBlock = styled(Copy)`
    :not(:first-child) {
        padding-top: ${spacings.nudge * 5}px;
    }
`;

const StyledActions = styled(Actions)`
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
                <StyledActions
                    primary={primaryAction && primaryAction(isInverted)}
                    secondary={secondaryAction && secondaryAction(isInverted)}
                />
            )}
        </View>
    );
};

export default Intro;
