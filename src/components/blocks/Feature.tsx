import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { mq, spacings, getGlobals as global } from 'utils/styles';

import Copy from 'components/typography/Copy';
import Image, { ImageProps } from 'components/blocks/Image';
import Actions from './Actions';

const View = styled.div<{ isCentered?: boolean }>`
    min-width: 270px;
    padding-bottom: ${spacings.nudge}px;
    text-align: ${({ isCentered }) => isCentered && 'center'};

    & > * + * {
        margin-top: ${spacings.spacer}px;
    }
`;

const ImageContainer = styled.div<{ isCentered?: boolean }>`
    display: flex;
    justify-content: ${({ isCentered }) =>
        isCentered ? 'center' : 'flex-start'};
`;

const StyledImage = styled(Image)`
    overflow: hidden;
    border-radius: ${({ theme }) => global(theme).sections.edgeRadius};
`;

const ArticleContent = styled.div<{ isCentered?: boolean }>`
    text-align: ${({ isCentered }) => isCentered && 'center'};

    & > * + * {
        margin-top: ${spacings.nudge * 2}px;
    }

    @media ${mq.medium} {
        & > * {
            max-width: 95%;
            margin-right: ${({ isCentered }) => isCentered && 'auto'};
            margin-left: ${({ isCentered }) => isCentered && 'auto'};
        }
    }
`;

const StyledActions = styled(Actions)`
    @media ${mq.medium} {
        width: 100%;

        & > * {
            /* max-width: 50%; */
            min-width: 0 !important;
            flex: 1;
        }
    }
`;

export interface FeatureProps {
    /** Invert color and background for darker themes */
    isInverted?: boolean;

    /** Center all texts */
    isCentered?: boolean;

    /** Image on item's top */
    image?: ImageProps;

    /** Item title text underneath the image */
    title?: string;

    /** Small item description text (richtext) */
    description?: string;

    /** Item intro text (partial richtext cause it's always bold) */
    intro?: string;

    /** Item's main text (richtext) */
    text?: string;

    /** Function to inject custom primary button */
    primaryAction?: (isInverted?: boolean) => React.ReactNode;

    /** Function to inject custom secondary button */
    secondaryAction?: (isInverted?: boolean) => React.ReactNode;
}

const Feature = forwardRef<
    HTMLDivElement,
    FeatureProps & {
        className?: string;
    }
>(
    (
        {
            title,
            description,
            intro,
            text,
            image,
            isInverted = false,
            isCentered = false,
            primaryAction,
            secondaryAction,
            className,
        },
        ref
    ) => {
        return (
            <View ref={ref} isCentered={isCentered} className={className}>
                {image?.small && (
                    <ImageContainer isCentered={isCentered}>
                        <StyledImage
                            small={image.small}
                            medium={image.medium}
                            semilarge={image.semilarge}
                            large={image.large}
                            xlarge={image.xlarge}
                            alt={image.alt}
                            ratios={image.ratios}
                            coverSpace={
                                image.coverSpace === undefined
                                    ? true
                                    : image.coverSpace
                            }
                            isInverted={isInverted}
                        />
                    </ImageContainer>
                )}
                {title && (
                    <Copy
                        type="copy-b"
                        size="big"
                        isInverted={isInverted}
                        data-sheet="title"
                    >
                        {title}
                    </Copy>
                )}
                {description && (
                    <Copy
                        size="small"
                        isInverted={isInverted}
                        data-sheet="desc"
                        innerHTML={description}
                    />
                )}
                {(intro || text) && (
                    <ArticleContent isCentered={isCentered}>
                        {intro && (
                            <Copy
                                type="copy-b"
                                isInverted={isInverted}
                                innerHTML={intro}
                                data-sheet="intro"
                            />
                        )}
                        {text && (
                            <Copy
                                type="copy"
                                size="medium"
                                isInverted={isInverted}
                                innerHTML={text}
                                data-sheet="text"
                            />
                        )}
                    </ArticleContent>
                )}
                {(primaryAction || secondaryAction) && (
                    <StyledActions
                        primary={primaryAction && primaryAction(isInverted)}
                        secondary={
                            secondaryAction && secondaryAction(isInverted)
                        }
                    />
                )}
            </View>
        );
    }
);

Feature.displayName = 'Feature';

export default Feature;
