import * as React from 'react';
import styled from 'styled-components';

import { spacings, mq, withRange } from 'utils/styles';

import Title from 'components/blocks/Title';
import Copy from 'components/typography/Copy';
import Actions from 'components/blocks/Actions';
import { HeadlineTag } from 'components/typography/Heading';

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
    titleAs?: HeadlineTag;
    superTitle?: string;
    superTitleAs?: HeadlineTag;
    text?: string;

    primaryAction?: (isInverted?: boolean) => React.ReactNode;
    secondaryAction?: (isInverted?: boolean) => React.ReactNode;

    isInverted?: boolean;
    isCentered?: boolean;
    clampText?: boolean;
    className?: string;
}> = ({
    title,
    titleAs,
    superTitle,
    superTitleAs,
    text,
    primaryAction,
    secondaryAction,
    isInverted = false,
    isCentered = false,
    clampText = true,
    className,
}) => {
    return (
        <View
            isCentered={isCentered}
            clampText={clampText}
            className={className}
        >
            <Title
                title={title}
                titleAs={titleAs}
                superTitle={superTitle}
                superTitleAs={superTitleAs}
                isInverted={isInverted}
                isCentered={isCentered}
            />
            {text && (
                <ContentBlock type="copy-b" isInverted={isInverted}>
                    <div dangerouslySetInnerHTML={{ __html: text }} />
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
