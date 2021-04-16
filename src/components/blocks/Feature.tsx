import * as React from 'react';
import styled from 'styled-components';
import { mq, spacings, withRange } from 'utils/styles';

import Copy from 'components/typography/Copy';
import Image, { ImageProps as Props } from 'components/blocks/Image';
import Actions from './Actions';

const View = styled.div`
    min-width: 270px;
    padding-bottom: ${spacings.nudge}px;
`;

const ImageContainer = styled.div`
    padding-bottom: ${spacings.spacer * 2}px;
`;

const StyledImage = styled(Image)`
    // width: 100%;
`;

const Content = styled.div<{ addWhitespace?: boolean }>`
    padding: 0
        ${({ addWhitespace }) => addWhitespace && spacings.nudge * 2 + 'px'};

    & + & {
        ${withRange(
            [spacings.spacer * 1.5, spacings.spacer * 2],
            'padding-top'
        )}
    }
`;

const ArticleContent = styled(Content)`
    @media ${mq.medium} {
        max-width: 95%;
    }
`;

const ContentBlock = styled(Copy)`
    & + & {
        ${withRange([spacings.spacer * 0.5, spacings.spacer], 'padding-top')}
    }
`;

const Desc = styled.div`
    ${withRange([spacings.spacer * 0.5, spacings.spacer], 'padding-top')}
`;

const StyledActions = styled(Actions)<{ addWhitespace?: boolean }>`
    padding: 0
        ${({ addWhitespace }) => addWhitespace && spacings.nudge * 2 + 'px'};
    ${withRange([spacings.spacer, spacings.spacer * 2], 'padding-top')}

    @media ${mq.medium} {
        & > * {
            max-width: 50%;
        }
    }
`;

export interface FeatureProps {
    isInverted?: boolean;
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
    primaryAction,
    secondaryAction,
    className,
}) => {
    return (
        <View className={className}>
            {image && (
                <ImageContainer>
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
            <Content addWhitespace={addWhitespace}>
                <ContentBlock type="copy-b" size="big" isInverted={isInverted}>
                    {title}
                </ContentBlock>
                {description && (
                    <ContentBlock size="small" isInverted={isInverted}>
                        <Desc
                            dangerouslySetInnerHTML={{ __html: description }}
                        />
                    </ContentBlock>
                )}
            </Content>
            <ArticleContent addWhitespace={addWhitespace}>
                {intro && (
                    <ContentBlock
                        type="copy-b"
                        isInverted={isInverted}
                        innerHTML={intro}
                    />
                )}
                {text && (
                    <ContentBlock
                        type="copy"
                        size="medium"
                        isInverted={isInverted}
                        innerHTML={text}
                    />
                )}
            </ArticleContent>
            {(primaryAction || secondaryAction) && (
                <StyledActions
                    addWhitespace={addWhitespace}
                    primary={primaryAction && primaryAction(isInverted)}
                    secondary={secondaryAction && secondaryAction(isInverted)}
                />
            )}
        </View>
    );
};

export default Feature;
