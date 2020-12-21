import * as React from 'react';
import styled, { ThemeContext } from 'styled-components';

import { getColors as color, spacings, mq, withRange } from 'utils/styles';

import Title from 'components/blocks/Title';
import Copy from 'components/typography/Copy';
import Actions from 'components/blocks/Actions';

const View = styled.div<{ isCentered?: boolean; clampText?: boolean }>`
    width: 100%;
    margin: ${({ isCentered }) => isCentered && '0 auto'};

    @media ${mq.large} {
        max-width: ${({ clampText }) => clampText && '65%'};
    }
`;

const ContentBlock = styled(Copy)`
    :not(:first-child) {
        padding-top: ${spacings.nudge * 5}px;
    }
`;

const StyledActions = styled(Actions)`
    ${withRange([spacings.spacer, spacings.spacer * 2], 'padding-top')}

    @media ${mq.semilarge} {
        max-width: 50%;
        align-items: flex-start;
    }
`;

const Intro: React.FC<{
    title: string;
    superTitle?: string;
    text?: string;

    primaryAction?: (isInverted?: boolean) => React.ReactNode;
    secondaryAction?: (isInverted?: boolean) => React.ReactNode;

    isInverted?: boolean;
    isCentered?: boolean;
    clampText?: boolean;
    className?: string;
}> = ({
    title,
    superTitle,
    text,
    primaryAction,
    secondaryAction,
    isInverted = false,
    isCentered = false,
    clampText = true,
    className,
}) => {
    const theme = React.useContext(ThemeContext);
    return (
        <View
            isCentered={isCentered}
            clampText={clampText}
            className={className}
        >
            <Title
                title={title}
                superTitle={superTitle}
                isInverted={isInverted}
                isCentered={isCentered}
            />
            {text && (
                <ContentBlock
                    type="copy-b"
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
