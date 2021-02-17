import * as React from 'react';
import styled from 'styled-components';

import { spacings, mq, withRange } from 'utils/styles';

import Title from 'components/blocks/Title';
import Copy from 'components/typography/Copy';
import Actions from 'components/blocks/Actions';
import { HeadlineTag } from 'components/typography/Heading';

const View = styled.div<{ isCentered?: boolean }>`
    width: 100%;
    text-align: ${({ isCentered }) => isCentered && 'center'};
`;

const StyledTitle = styled(Title)<{ clampTitle?: boolean }>`
    max-width: ${({ clampTitle }) =>
        clampTitle && (13 / 28) * spacings.wrapper + 'px'};
`;

const ContentBlock = styled(Copy)<{ clampText?: boolean }>`
    display: inline-block;
    max-width: ${({ clampText }) =>
        clampText && (19 / 28) * spacings.wrapper + 'px'};

    :not(:first-child) {
        padding-top: ${spacings.nudge * 5}px;
    }
`;

const StyledActions = styled(Actions)`
    ${withRange([spacings.spacer, spacings.spacer * 2], 'padding-top')}

    @media ${mq.semilarge} {
        max-width: ${(9 / 28) * spacings.wrapper + 'px'};
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
    clampTitle?: boolean;
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
    clampTitle = true,
    clampText = true,
    className,
}) => {
    return (
        <View isCentered={isCentered} className={className}>
            <StyledTitle
                title={title}
                titleAs={titleAs}
                superTitle={superTitle}
                superTitleAs={superTitleAs}
                isInverted={isInverted}
                isCentered={isCentered}
                clampTitle={clampTitle}
            />
            {text && (
                <ContentBlock
                    type="copy-b"
                    isInverted={isInverted}
                    clampText={clampText}
                >
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
