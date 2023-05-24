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

const ContentBlock = styled(Copy)<{
    clampText?: boolean;
    isCentered?: boolean;
}>`
    display: block;
    margin: ${({ isCentered }) => isCentered && '0 auto'};
    max-width: ${({ clampText }) =>
        clampText && (19 / 28) * spacings.wrapper + 'px'};

    :not(:first-child) {
        padding-top: ${spacings.nudge * 5}px;
    }
`;

const StyledActions = styled(Actions)`
    ${withRange([spacings.spacer, spacings.spacer * 2], 'padding-top')}

    @media ${mq.semilarge} {
        align-items: flex-start;

        & > * {
            max-width: ${(19 / 28) * spacings.wrapper + 'px'};
        }
    }
`;

const Intro: React.FC<{
    colorMode?: 'default' | 'inverted' | 'onImage';
    title: string;
    titleAs?: HeadlineTag;
    superTitle?: string;
    superTitleAs?: HeadlineTag;
    text?: string;

    primaryAction?: (isInverted?: boolean) => React.ReactNode;
    secondaryAction?: (isInverted?: boolean) => React.ReactNode;

    isCentered?: boolean;
    clampTitle?: boolean;
    clampText?: boolean;
    className?: string;
}> = ({
    colorMode = 'default',
    title,
    titleAs,
    superTitle,
    superTitleAs,
    text,
    primaryAction,
    secondaryAction,
    isCentered = false,
    clampTitle = true,
    clampText = true,
    className,
}) => {
    return (
        <View isCentered={isCentered} className={className}>
            <StyledTitle
                colorMode={colorMode}
                title={title}
                titleAs={titleAs}
                superTitle={superTitle}
                superTitleAs={superTitleAs}
                isCentered={isCentered}
                clampTitle={clampTitle}
            />
            {text && (
                <ContentBlock
                    type="copy"
                    textColor={colorMode === 'onImage' ? '#fff' : undefined}
                    isInverted={colorMode === 'inverted'}
                    isCentered={isCentered}
                    clampText={clampText}
                    innerHTML={text}
                />
            )}
            {(primaryAction || secondaryAction) && (
                <StyledActions
                    primary={
                        primaryAction &&
                        primaryAction(
                            colorMode === 'inverted' || colorMode === 'onImage'
                        )
                    }
                    secondary={
                        secondaryAction &&
                        secondaryAction(
                            colorMode === 'inverted' || colorMode === 'onImage'
                        )
                    }
                />
            )}
        </View>
    );
};

export default Intro;
