import React, { forwardRef, useId, useMemo } from 'react';
import styled, { css } from 'styled-components';

import {
    spacings,
    getGlobals as global,
    getFonts as font,
    getColors as color,
} from 'utils/styles';
import Copy, { copyStyle } from 'components/typography/Copy';
import Image, { ImageProps } from 'components/blocks/Image';
import Tag, { TagProps } from 'components/blocks/Tag';
import StatusFormatter from 'utils/statusFormatter';
import Link, { LinkProps } from 'components/typography/Link';
import { useLibTheme } from 'utils/LibThemeProvider';
import { isValidArray } from 'utils/arrays';
import { concat as cn } from 'utils/concat';

const View = styled.article<{ isInverted?: boolean }>`
    position: relative;
    text-decoration: none;
    margin: 0;
    padding: 0;

    display: flex;
    flex-direction: column;
    gap: ${spacings.nudge * 3}px;

    @media (hover: hover) and (pointer: fine) {
        &:hover {
            & > * {
                color: ${({ theme, isInverted }) =>
                    isInverted
                        ? font(theme).link.colorHoverInverted
                        : font(theme).link.colorHover};
            }
        }
    }
`;

const StyledImage = styled(Image)`
    overflow: hidden;
    border-radius: ${({ theme }) => global(theme).sections.edgeRadius};
    cursor: ${({ onClick }) => onClick && 'pointer'};
`;

const BorderPlaceholder = styled.div<{ hasBg?: boolean }>`
    border-top: 1px solid
        ${({ theme, hasBg }) =>
            hasBg
                ? color(theme).elementBg.light
                : color(theme).elementBg.medium};
`;

const TitleLink = styled(Link)`
    display: inline-block;
    ${copyStyle('copy-b', 'big')}

    color: ${({ theme, isInverted }) =>
        isInverted
            ? font(theme)['copy-b'].big.colorInverted
            : font(theme)['copy-b'].big.color};
    text-decoration: none;

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

const Head = styled.div`
    order: 0;
    display: flex;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-left: -4px;
    margin-top: -4px;
    margin-bottom: -4px;

    & > * + * {
        margin-left: ${spacings.nudge * 3}px;
    }
`;

const Tags = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    gap: ${spacings.nudge}px;
    padding: 4px;
    overflow: scroll;
    scrollbar-width: none;

    z-index: 1;

    &::-webkit-scrollbar {
        width: 0;
        height: 0;
        display: none;
    }
`;

const PublishDate = styled(Copy)`
    &:only-child {
        margin-left: auto;
    }
`;

const Main = styled.div`
    order: 1;
    max-width: 95%;

    & > * + * {
        margin-top: ${spacings.nudge * 3}px;
    }
`;

const Text = styled(Copy)`
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 6; /* number of lines to show */
    line-clamp: 6;
    -webkit-box-orient: vertical;

    & > * {
        margin: 0 !important;
    }

    & > p:not(:first-of-type) {
        display: none;
    }

    & > ul,
    & > ol,
    & > table {
        display: none;
    }
`;

const CardFooter = styled.div`
    order: 2;
`;

export type NewsCardActionFn = (
    props: NewsCardActionFnProps
) => React.ReactNode;

export interface NewsCardActionFnProps {
    isInverted?: boolean;
    title?: string;
    link?: LinkProps;
    clickHandler?: (ev?: React.SyntheticEvent<HTMLElement>) => void;
}

export interface NewsCardCustomTagFnProps {
    key: React.Key;
    name: string;
    isInverted?: boolean;
    isActive?: boolean;
    link?: LinkProps;
    clickHandler?: (ev?: React.SyntheticEvent<HTMLAnchorElement>) => void;
}
export type NewsCardCustomTagFn = (
    props: NewsCardCustomTagFnProps
) => React.ReactNode;

export interface NewsCardProps {
    /** Invert text and background for use on dark sections */
    isInverted?: boolean;

    /** News tag name */
    tags?: TagProps[];

    /** News publish date */
    publishDate?: Date;

    /** News title */
    title?: string;

    /** News text */
    text?: string;

    /** News image settings */
    image?: Omit<ImageProps, 'coverSpace'>;

    /** News link settings */
    link?: LinkProps;

    /** Callback function if tag in news iten has been clicked */
    onTagClick?: (tag: TagProps) => void;

    /** Aria label for the tag list */
    tagListAriaLabel?: string;

    /** Function to inject primary action */
    action?: NewsCardActionFn;

    /** Function to inject custom tag node */
    customTag?: NewsCardCustomTagFn;

    hasBg?: boolean;
}

const NewsCard = forwardRef<
    HTMLDivElement,
    NewsCardProps & {
        className?: string;
    }
>(
    (
        {
            tags,
            onTagClick,
            publishDate,
            title,
            text,
            image,
            link,
            isInverted,
            customTag,
            tagListAriaLabel,
            className,
            hasBg,
            action,
        },
        ref
    ) => {
        const { globals } = useLibTheme();
        const uniqueId = useId();

        let publishedAt = '';
        if (publishDate) {
            const formatter = new StatusFormatter(
                publishDate.getTime(),
                '',
                globals.sections.newsDateFormat(publishDate),
                globals.sections.newsTimeFormat(publishDate),
                globals.sections.newsLocaleKey
            );
            publishedAt = formatter.getFormattedDate();
        }

        const handleTagClick = (tag: TagProps) =>
            onTagClick
                ? (ev?: React.SyntheticEvent<HTMLAnchorElement>) => {
                      ev?.stopPropagation();
                      ev?.preventDefault();
                      onTagClick(tag);
                  }
                : (ev?: React.SyntheticEvent<HTMLAnchorElement>) => {
                      ev?.stopPropagation();
                      ev?.preventDefault();
                  };

        const handleClick = () => {
            if (!link?.href) return;
            if (link.isExternal) {
                window.open(link.href, '_blank', 'noopener');
            } else {
                window.location.href = link.href;
            }
        };

        const filteredTags = useMemo(() => {
            return tags?.filter((tag) => tag.name);
        }, [tags]);

        return (
            <View
                ref={ref}
                className={className}
                aria-labelledby={uniqueId}
                isInverted={isInverted}
            >
                {image?.small ? (
                    <StyledImage
                        {...image}
                        coverSpace
                        isInverted={isInverted}
                        onClick={link?.href ? handleClick : undefined}
                    />
                ) : (
                    <BorderPlaceholder hasBg={hasBg} />
                )}
                <Main>
                    {title && (
                        <>
                            {action ? (
                                <Title
                                    isInverted={isInverted}
                                    data-sheet="title"
                                    aria-label={title}
                                    onClick={
                                        link?.href ? handleClick : undefined
                                    }
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
                    {text && (
                        <Text
                            isInverted={isInverted}
                            type="copy"
                            innerHTML={text}
                            data-sheet="text"
                            size="medium"
                        />
                    )}
                </Main>
                {action && (
                    <CardFooter>
                        {action({
                            isInverted,
                            link,
                            title: cn(['Read article', title], ': '),
                            clickHandler: handleClick,
                        })}
                    </CardFooter>
                )}
                <Head data-sheet="head">
                    {isValidArray(filteredTags, false) && (
                        <Tags
                            aria-label={tagListAriaLabel || 'News categories'}
                        >
                            {filteredTags.map((tag, i) => {
                                if (customTag) {
                                    return customTag({
                                        key: i,
                                        name: tag.name || '',
                                        isInverted: isInverted,
                                        isActive: false,
                                        link: tag.link,
                                        clickHandler: handleTagClick(tag),
                                    });
                                } else {
                                    return (
                                        <li key={i}>
                                            <Tag
                                                isInverted={isInverted}
                                                name={tag.name}
                                                link={tag.link}
                                                onClick={handleTagClick(tag)}
                                            />
                                        </li>
                                    );
                                }
                            })}
                        </Tags>
                    )}
                    {publishedAt && (
                        <PublishDate
                            size="small"
                            renderAs="div"
                            isInverted={isInverted}
                        >
                            {publishedAt}
                        </PublishDate>
                    )}
                </Head>
            </View>
        );
    }
);

NewsCard.displayName = 'NewsCard';

export default NewsCard;
