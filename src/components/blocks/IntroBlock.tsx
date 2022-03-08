import React from 'react';
import styled from 'styled-components';

import { spacings, mq } from 'utils/styles';

import Title from 'components/blocks/Title';
import Copy, { CopyType } from 'components/typography/Copy';
import Actions from 'components/blocks/Actions';
import { HeadlineTag } from 'components/typography/Heading';

const View = styled.div<{ isCentered?: boolean }>`
    width: 100%;
    text-align: ${({ isCentered }) => isCentered && 'center'};

    & > * + * {
        margin-top: ${spacings.spacer}px;
    }
`;

const StyledTitle = styled(Title)<{ clamp?: boolean }>`
    max-width: ${({ clamp }) => clamp && '880px'};
`;

const ContentBlock = styled(Copy)<{
    isCentered?: boolean;
    clamp?: boolean;
}>`
    display: block;
    max-width: ${({ clamp }) => clamp && '880px'};
    margin-left: ${({ isCentered }) => isCentered && 'auto'};
    margin-right: ${({ isCentered }) => isCentered && 'auto'};
`;

const StyledActions = styled(Actions)<{ isCentered?: boolean }>`
    @media ${mq.medium} {
        display: block;
        text-align: ${({ isCentered }) => isCentered && 'center'};
    }
`;

const IntroBlock: React.FC<{
    /** Color presets for text and blocks. onImage has always a white text color */
    colorMode?: 'default' | 'inverted' | 'onImage';

    /** Main title text */
    title?: string;

    /** Main title HTML tag type (h2, h3, h4...) */
    titleAs?: HeadlineTag;

    /** Superior title that stands above main title */
    superTitle?: string;

    /** Superior title HTML tag type (h3, h4 ...) */
    superTitleAs?: HeadlineTag;

    /** Intro text underneath the title (richtext) */
    text?: string;

    /** Copy type of intro text (limits richtext capabilites on textType == copy-b or copy-i) */
    textType?: CopyType;

    /** Function to inject custom primary button */
    primaryAction?: (isInverted?: boolean) => React.ReactNode;

    /** Function to inject custom secondary button */
    secondaryAction?: (isInverted?: boolean) => React.ReactNode;

    /** Center text and actions */
    isCentered?: boolean;

    /** Clamp title to max width of 880px */
    clampTitle?: boolean;
    /** Clamp text to max width of 880px */
    clampText?: boolean;
    className?: string;
}> = ({
    colorMode = 'default',
    title,
    titleAs,
    superTitle,
    superTitleAs,
    text,
    textType = 'copy',
    primaryAction,
    secondaryAction,
    isCentered = false,
    clampTitle = false,
    clampText = false,
    className,
}) => {
    return (
        <View isCentered={isCentered} className={className}>
            {(title || superTitle) && (
                <StyledTitle
                    colorMode={colorMode}
                    title={title}
                    titleAs={titleAs}
                    superTitle={superTitle}
                    superTitleAs={superTitleAs}
                    isCentered={isCentered}
                    clamp={clampTitle}
                />
            )}
            {text && (
                <ContentBlock
                    type={textType}
                    textColor={colorMode === 'onImage' ? '#fff' : undefined}
                    isInverted={colorMode === 'inverted'}
                    isCentered={isCentered}
                    innerHTML={text}
                    clamp={clampText}
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

export default IntroBlock;
