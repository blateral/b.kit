import React from 'react';
import styled, { css } from 'styled-components';

import { spacings, mq, FontOptions } from 'utils/styles';

import Title, { TitleSize } from 'components/blocks/Title';
import Copy, { CopyType } from 'components/typography/Copy';
import Actions from 'components/blocks/Actions';
import { HeadlineTag } from 'components/typography/Heading';
import Image, { ImageProps } from './Image';

const View = styled.div<{ isCentered?: boolean }>`
    display: block;
    margin: 0;
    padding: 0;
    width: 100%;
    text-align: ${({ isCentered }) => isCentered && 'center'};

    @media ${mq.semilarge} {
        display: flex;
        flex-direction: row;

        & > * + * {
            margin-left: ${spacings.spacer}px;
        }
    }
`;

const Content = styled.div`
    & > * + * {
        margin-top: ${spacings.spacer}px;
    }

    max-width: 100%;

    @media ${mq.semilarge} {
        flex: 1 0 66.66%;
    }
`;

const StyledTitle = styled(Title)<{ clamp?: boolean }>`
    max-width: ${({ clamp }) => clamp && '880px'};
`;

const ContentBlock = styled(Copy)<{
    isCentered?: boolean;
    clamp?: boolean;
    maxLines?: number;
}>`
    display: block;
    max-width: ${({ clamp }) => clamp && '880px'};
    margin-left: ${({ isCentered }) => isCentered && 'auto'};
    margin-right: ${({ isCentered }) => isCentered && 'auto'};

    ${({ maxLines }) =>
        maxLines &&
        maxLines > 0 &&
        css`
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: ${maxLines}; /* number of lines to show */
            line-clamp: ${maxLines};
            -webkit-box-orient: vertical;
        `}

    & + & {
        margin-top: ${spacings.nudge * 3}px;
    }
`;

const StyledActions = styled(Actions)<{ isCentered?: boolean }>`
    @media ${mq.medium} {
        display: block;
        text-align: ${({ isCentered }) => isCentered && 'center'};
    }
`;

const MobileImageContainer = styled.div<{
    isCentered?: boolean;
    coverSpace?: boolean;
}>`
    width: 100%;
    height: 100%;
    max-width: 400px;
    max-height: ${({ coverSpace }) => coverSpace && '400px'};
    text-align: center;

    margin: 0 auto;
    margin-top: ${spacings.spacer}px;

    @media ${mq.semilarge} {
        display: ${({ isCentered }) => (isCentered ? 'block' : 'none')};
    }
`;

const DesktopImageContainer = styled.div`
    display: none;
    width: 100%;

    @media ${mq.semilarge} {
        display: block;

        max-width: 400px;
        max-width: calc(100% - 66.66% - ${spacings.spacer}px);
    }
`;

export interface IntroActionProps {
    isInverted?: boolean;
    isTextCentered?: boolean;
}

const IntroBlock: React.FC<{
    /** Define rendered HTML DOM tag of intro container */
    renderAs?: 'div' | 'figcaption';

    /** Color presets for text and blocks. onImage has always a white text color */
    colorMode?: 'default' | 'inverted' | 'onImage';

    /** Main title text */
    title?: string;

    /** Main title HTML tag type (h2, h3, h4...) */
    titleAs?: HeadlineTag;

    /** Main title size */
    titleSize?: TitleSize;

    /** Superior title that stands above main title */
    superTitle?: string;

    /** Superior title HTML tag type (h3, h4 ...) */
    superTitleAs?: HeadlineTag;

    /** Intro text underneath the title (richtext) */
    abstract?: string;

    /** Main intro text (richtext) */
    text?: string;

    /** Intro image. coverSpace defaults to true */
    image?: ImageProps;

    /** Copy type of intro text (limits richtext capabilites on textType == copy-b or copy-i) */
    textType?: CopyType;

    /** Copy size of intro text */
    textSize?: keyof FontOptions;

    /** Function to inject custom primary button */
    primaryAction?: (props: IntroActionProps) => React.ReactNode;

    /** Function to inject custom secondary button */
    secondaryAction?: (props: IntroActionProps) => React.ReactNode;

    /** Center text and actions */
    isCentered?: boolean;

    /** Clamp title to max width of 880px */
    clampTitle?: boolean;

    /** Limit lines of title. Cut of with elipsis */
    maxTitleLines?: number;

    /** Clamp text to max width of 880px */
    clampText?: boolean;

    /** Clamp abstract to max width of 880px */
    clampAbstract?: boolean;

    /** Limit lines of text. Cut of with elipsis */
    maxTextLines?: number;

    /** Limit lines of abstract text. Cut of with elipsis */
    maxAbstractLines?: number;

    /** Main title hyphens */
    titleHyphens?: boolean;

    className?: string;
}> = ({
    renderAs = 'div',
    colorMode = 'default',
    title,
    titleAs,
    titleSize = 'heading-2',
    superTitle,
    superTitleAs,
    abstract,
    text,
    textType = 'copy',
    textSize = 'medium',
    primaryAction,
    secondaryAction,
    isCentered = false,
    clampTitle = false,
    clampAbstract = false,
    maxTitleLines,
    maxAbstractLines,
    clampText = false,
    maxTextLines,
    className,
    titleHyphens,
    image,
}) => {
    const isInverted = colorMode === 'inverted' || colorMode === 'onImage';
    const coverSpace = image?.coverSpace === false ? false : true;

    return (
        <View as={renderAs} isCentered={isCentered} className={className}>
            <Content>
                {(title || superTitle) && (
                    <StyledTitle
                        colorMode={colorMode}
                        title={title}
                        titleAs={titleAs}
                        titleSize={titleSize}
                        superTitle={superTitle}
                        superTitleAs={superTitleAs}
                        isCentered={isCentered}
                        clamp={clampTitle}
                        maxLines={maxTitleLines}
                        titleHyphens={titleHyphens}
                    />
                )}
                {image?.small && (
                    <MobileImageContainer
                        isCentered={isCentered}
                        coverSpace={coverSpace}
                    >
                        <Image
                            {...image}
                            coverSpace={coverSpace}
                            allowEdgeRadius
                            isInverted={isInverted}
                        />
                    </MobileImageContainer>
                )}
                {abstract && (
                    <ContentBlock
                        type="copy"
                        size="big"
                        textColor={colorMode === 'onImage' ? '#fff' : undefined}
                        isInverted={isInverted}
                        isCentered={isCentered}
                        innerHTML={abstract}
                        clamp={clampAbstract}
                        maxLines={maxAbstractLines}
                    />
                )}
                {text && (
                    <ContentBlock
                        type={textType}
                        size={textSize}
                        textColor={colorMode === 'onImage' ? '#fff' : undefined}
                        isInverted={isInverted}
                        isCentered={isCentered}
                        innerHTML={text}
                        clamp={clampText}
                        maxLines={maxTextLines}
                    />
                )}
                {(primaryAction || secondaryAction) && (
                    <StyledActions
                        primary={
                            primaryAction &&
                            primaryAction({
                                isInverted,
                                isTextCentered: isCentered,
                            })
                        }
                        secondary={
                            secondaryAction &&
                            secondaryAction({
                                isInverted,
                                isTextCentered: isCentered,
                            })
                        }
                    />
                )}
            </Content>

            {image?.small && !isCentered && (
                <DesktopImageContainer>
                    <Image
                        {...image}
                        coverSpace={coverSpace}
                        allowEdgeRadius
                        isInverted={isInverted}
                    />
                </DesktopImageContainer>
            )}
        </View>
    );
};

export default IntroBlock;
