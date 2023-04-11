import React, { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import {
    mq,
    spacings,
    getGlobals as global,
    getFonts as font,
} from 'utils/styles';

import Copy, { copyStyle } from 'components/typography/Copy';
import Image, { ImageProps } from 'components/blocks/Image';
import Link, { LinkProps } from 'components/typography/Link';

const View = styled.div<{ isCentered?: boolean }>`
    min-width: 270px;
    padding-bottom: ${spacings.nudge}px;
    text-align: ${({ isCentered }) => isCentered && 'center'};

    & > * + * {
        margin-top: ${spacings.spacer}px;
    }
`;

const TitleLink = styled(Link)<{ href?: string }>`
    display: inline-block;
    ${copyStyle('copy-b', 'big')}

    color: ${({ theme, isInverted }) =>
        isInverted
            ? font(theme)['copy-b'].big.colorInverted
            : font(theme)['copy-b'].big.color};
    text-decoration: none;

    ${({ href, isInverted, theme }) =>
        !href &&
        css`
            &:hover {
                color: ${isInverted
                    ? font(theme)['copy-b'].big.colorInverted
                    : font(theme)['copy-b'].big.color};
            }
        `}
`;

const ImageContainer = styled(Link)<{ isCentered?: boolean }>`
    display: flex;
    justify-content: ${({ isCentered }) =>
        isCentered ? 'center' : 'flex-start'};
    width: 100%;
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

const Action = styled.div`
    max-width: 100%;
`;

export interface FeatureActionProps {
    isInverted?: boolean;
    isTextCentered?: boolean;
}

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

    /** Item link settings */
    link?: LinkProps;

    /** Function to inject custom primary button */
    action?: (props: FeatureActionProps) => React.ReactNode;
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
            link,
            image,
            isInverted = false,
            isCentered = false,
            action,
            className,
        },
        ref
    ) => {
        return (
            <View ref={ref} isCentered={isCentered} className={className}>
                {image?.small && (
                    <ImageContainer {...link} isCentered={isCentered}>
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
                <TitleLink
                    {...link}
                    isInverted={isInverted}
                    ariaLabel={title}
                    dataSheet="title"
                >
                    {title}
                </TitleLink>
                <Copy
                    size="small"
                    isInverted={isInverted}
                    data-sheet="desc"
                    innerHTML={description}
                />
                <ArticleContent isCentered={isCentered}>
                    <Copy
                        type="copy-b"
                        isInverted={isInverted}
                        innerHTML={intro}
                        data-sheet="intro"
                    />
                    <Copy
                        type="copy"
                        size="medium"
                        isInverted={isInverted}
                        innerHTML={text}
                        data-sheet="text"
                    />
                </ArticleContent>
                {action && (
                    <Action>
                        {action({ isInverted, isTextCentered: isCentered })}
                    </Action>
                )}
            </View>
        );
    }
);

Feature.displayName = 'Feature';

export default Feature;
