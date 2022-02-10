import * as React from 'react';
import styled from 'styled-components';
import {
    mq,
    spacings,
    withRange,
    getGlobalSettings as global,
} from 'utils/styles';

import Copy from 'components/typography/Copy';
import Image, { ImageProps as Props } from 'components/blocks/Image';
import Actions from './Actions';

const View = styled.div`
    min-width: 270px;
    padding-bottom: ${spacings.nudge}px;
`;

const ImageContainer = styled.div<{ isCentered?: boolean }>`
    display: flex;
    justify-content: ${({ isCentered }) =>
        isCentered ? 'center' : 'flex-start'};
    padding-bottom: ${spacings.nudge * 5}px;
`;

const StyledImage = styled(Image)`
    // width: 100%;

    overflow: hidden;
    border-radius: ${({ theme }) => global(theme).sections.edgeRadius};
`;

const Content = styled.div<{ addWhitespace?: boolean; isCentered?: boolean }>`
    text-align: ${({ isCentered }) => isCentered && 'center'};
    padding: 0 ${({ addWhitespace }) => addWhitespace && spacings.nudge + 'px'};

    & + & {
        ${withRange([spacings.spacer, spacings.nudge * 5], 'padding-top')}
    }
`;

const ArticleContent = styled(Content)<{ isCentered?: boolean }>`
    text-align: ${({ isCentered }) => isCentered && 'center'};

    @media ${mq.medium} {
        max-width: 95%;
    }
`;

const ContentBlock = styled(Copy)`
    & + & {
        ${withRange([spacings.nudge * 3, spacings.nudge * 2], 'padding-top')}
    }
`;

const Desc = styled.div`
    ${withRange([spacings.nudge * 3, spacings.nudge * 2], 'padding-top')}
`;

const StyledActions = styled(Actions)<{ addWhitespace?: boolean }>`
    padding: 0 ${({ addWhitespace }) => addWhitespace && spacings.nudge + 'px'};
    ${withRange([spacings.nudge * 2, spacings.nudge * 5], 'padding-top')}

    @media ${mq.medium} {
        width: 100%;

        & > * {
            max-width: 50%;
            min-width: 0 !important;
            flex: 1;
        }
    }
`;

export interface FeatureProps {
    isInverted?: boolean;
    isCentered?: boolean;
    title?: string;
    description?: string;
    intro?: string;
    text?: string;
    image?: Props;

    addWhitespace?: boolean;
    primaryAction?: (isInverted?: boolean) => React.ReactNode;
    secondaryAction?: (isInverted?: boolean) => React.ReactNode;
}

const Feature: React.FC<
    FeatureProps & {
        className?: string;
    }
> = ({
    title,
    description,
    intro,
    text,
    image,
    addWhitespace = false,
    isInverted = false,
    isCentered = false,
    primaryAction,
    secondaryAction,
    className,
}) => {
    return (
        <View className={className}>
            {image && (
                <ImageContainer isCentered={isCentered}>
                    <StyledImage
                        small={image.small}
                        medium={image.medium}
                        semilarge={image.semilarge}
                        large={image.large}
                        xlarge={image.xlarge}
                        alt={image.alt}
                        coverSpace={image.coverSpace}
                    />
                </ImageContainer>
            )}
            <Content addWhitespace={addWhitespace} isCentered={isCentered}>
                <ContentBlock
                    type="copy-b"
                    size="big"
                    isInverted={isInverted}
                    data-sheet="title"
                >
                    {title}
                </ContentBlock>
                {description && (
                    <ContentBlock
                        size="small"
                        isInverted={isInverted}
                        data-sheet="desc"
                    >
                        <Desc
                            dangerouslySetInnerHTML={{ __html: description }}
                        />
                    </ContentBlock>
                )}
            </Content>
            <ArticleContent
                addWhitespace={addWhitespace}
                isCentered={isCentered}
            >
                {intro && (
                    <ContentBlock
                        type="copy-b"
                        isInverted={isInverted}
                        innerHTML={intro}
                        data-sheet="intro"
                    />
                )}
                {text && (
                    <ContentBlock
                        type="copy"
                        size="medium"
                        isInverted={isInverted}
                        innerHTML={text}
                        data-sheet="text"
                    />
                )}
            </ArticleContent>
            {(primaryAction || secondaryAction) && (
                <StyledActions
                    isCentered={isCentered}
                    addWhitespace={addWhitespace}
                    primary={primaryAction && primaryAction(isInverted)}
                    secondary={secondaryAction && secondaryAction(isInverted)}
                />
            )}
        </View>
    );
};

export default Feature;
