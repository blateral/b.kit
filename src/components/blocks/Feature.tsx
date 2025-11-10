import Image, { ImageProps } from 'components/blocks/Image';
import Copy, { copyStyle } from 'components/typography/Copy';
import Link, { LinkProps } from 'components/typography/Link';
import React, { forwardRef, useId } from 'react';
import styled, { css } from 'styled-components';
import {
    getFonts as font,
    getGlobals as global,
    mq,
    spacings,
} from 'utils/styles';

const View = styled.article<{ isCentered?: boolean }>`
    position: relative;
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

    * {
        padding: 0;
        margin: 0;
        ${copyStyle('copy-b', 'big')}
    }
`;

const Title = styled.div<{ isInverted?: boolean; onClick?: () => void }>`
    display: inline-block;
    ${copyStyle('copy-b', 'big')}

    color: ${({ theme, isInverted }) =>
        isInverted
            ? font(theme)['copy-b'].big.colorInverted
            : font(theme)['copy-b'].big.color};

    @media (hover: hover) and (pointer: fine) {
        &:hover {
            ${({ theme, isInverted, onClick }) =>
                onClick &&
                css`
                    color: ${isInverted
                        ? font(theme).link.colorHoverInverted
                        : font(theme).link.colorHover};
                    cursor: pointer;
                `};
        }
    }

    * {
        padding: 0;
        margin: 0;
        ${copyStyle('copy-b', 'big')}
    }
`;

const ImageContainer = styled.div<{ isCentered?: boolean }>`
    display: flex;
    justify-content: ${({ isCentered }) =>
        isCentered ? 'center' : 'flex-start'};
    width: 100%;
`;

const StyledImage = styled(Image)`
    overflow: hidden;
    border-radius: ${({ theme }) => global(theme).sections.edgeRadius};

    cursor: ${({ onClick }) => onClick && 'pointer'};
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

const CardFooter = styled.div`
    max-width: 100%;
`;

export interface FeatureActionProps {
    isInverted?: boolean;
    isTextCentered?: boolean;
    title?: string;
    link?: LinkProps;
    clickHandler?: (ev?: React.SyntheticEvent<HTMLElement>) => void;
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
        const uniqueId = useId();

        const handleClick = () => {
            if (!link?.href) return;
            if (link.isExternal) {
                window.open(link.href, '_blank', 'noopener');
            } else {
                window.location.href = link.href;
            }
        };

        return (
            <View
                ref={ref}
                isCentered={isCentered}
                aria-labelledby={uniqueId}
                className={className}
            >
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
                            onClick={link?.href ? handleClick : undefined}
                        />
                    </ImageContainer>
                )}
                {title && (
                    <>
                        {action ? (
                            <Title
                                isInverted={isInverted}
                                data-sheet="title"
                                aria-label={title}
                                onClick={link?.href ? handleClick : undefined}
                            >
                                <h3 id={uniqueId}>{title}</h3>
                            </Title>
                        ) : (
                            <TitleLink
                                {...link}
                                isInverted={isInverted}
                                ariaLabel={title}
                                dataSheet="title"
                            >
                                <h3 id={uniqueId}>{title}</h3>
                            </TitleLink>
                        )}
                    </>
                )}
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
                    <CardFooter>
                        {action({
                            isInverted,
                            isTextCentered: isCentered,
                            title,
                            link,
                            clickHandler: handleClick,
                        })}
                    </CardFooter>
                )}
            </View>
        );
    }
);

Feature.displayName = 'Feature';

export default Feature;
