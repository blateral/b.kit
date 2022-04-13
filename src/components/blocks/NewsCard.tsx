import React, { forwardRef } from 'react';
import styled from 'styled-components';

import { spacings, getGlobals as global, getFonts as font } from 'utils/styles';
import Copy, { copyStyle } from 'components/typography/Copy';
import Image, { ImageProps } from 'components/blocks/Image';
import Tag, { TagProps } from 'components/blocks/Tag';
import StatusFormatter from 'utils/statusFormatter';
import Link, { LinkProps } from 'components/typography/Link';
import { useLibTheme } from 'utils/LibThemeProvider';

const View = styled.div`
    position: relative;
    text-decoration: none;
    margin: 0;
    padding: 0;
`;

const ImageLink = styled(Link)`
    display: block;
    width: 100%;
`;

const StyledImage = styled(Image)`
    overflow: hidden;
    border-radius: ${({ theme }) => global(theme).sections.edgeRadius};
`;

const TitleLink = styled(Link)`
    display: inline-block;
    ${copyStyle('copy-b', 'big')}

    color: ${({ theme, isInverted }) =>
        isInverted
            ? font(theme)['copy-b'].big.colorInverted
            : font(theme)['copy-b'].big.color};
    text-decoration: none;
`;

const Head = styled.div`
    display: flex;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    &:not(:first-child) {
        margin-top: ${spacings.nudge * 3}px;
    }

    &:not(:last-child) {
        margin-bottom: ${spacings.nudge * 3}px;
    }

    & > * + * {
        margin-left: ${spacings.nudge * 3}px;
    }
`;

const Tags = styled.div`
    display: flex;
    overflow: scroll;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        width: 0;
        height: 0;
        display: none;
    }

    & > * + * {
        margin-left: ${spacings.nudge}px;
    }
`;

const PublishDate = styled(Copy)`
    &:only-child {
        margin-left: auto;
    }
`;

const Main = styled.div`
    max-width: 95%;

    & > * + * {
        margin-top: ${spacings.nudge * 3}px;
    }
`;

const Action = styled.div`
    margin-top: ${spacings.nudge * 3}px;
`;

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

    /** Function to inject primary action */
    action?: (isInverted?: boolean) => React.ReactNode;

    /** Function to inject custom tag node */
    customTag?: (props: {
        key: React.Key;
        name: string;
        isInverted?: boolean;
        isActive?: boolean;
        link?: LinkProps;
        clickHandler?: (ev?: React.SyntheticEvent<HTMLAnchorElement>) => void;
    }) => React.ReactNode;
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
            action,
            customTag,
            className,
        },
        ref
    ) => {
        const { globals } = useLibTheme();

        let publishedAt = '';
        if (publishDate) {
            const formatter = new StatusFormatter(
                publishDate.getTime(),
                '',
                globals.sections.newsDateFormat,
                globals.sections.newsTimeFormat,
                globals.sections.newsLocaleKey
            );
            publishedAt = formatter.getFormattedDate();
        }

        // settings max text length to 300 chars
        if (text && text.length > 300) {
            text = text.slice(0, 301) + '...';
        }

        const handleTagClick = (tag: TagProps) =>
            onTagClick
                ? (ev?: React.SyntheticEvent<HTMLAnchorElement>) => {
                      ev?.preventDefault();
                      onTagClick(tag);
                  }
                : undefined;

        return (
            <View ref={ref} className={className}>
                {image && (
                    <ImageLink {...link} ariaLabel={title}>
                        <StyledImage
                            {...image}
                            coverSpace
                            isInverted={isInverted}
                        />
                    </ImageLink>
                )}
                <Head data-sheet="head">
                    <Tags>
                        {tags?.map((tag, i) => {
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
                                    <Tag
                                        key={i}
                                        isInverted={isInverted}
                                        name={tag.name}
                                        link={tag.link}
                                        onClick={handleTagClick(tag)}
                                    />
                                );
                            }
                        })}
                    </Tags>
                    {publishedAt && (
                        <PublishDate renderAs="div" isInverted={isInverted}>
                            {publishedAt}
                        </PublishDate>
                    )}
                </Head>
                <Main>
                    {title && (
                        <TitleLink
                            {...link}
                            ariaLabel={title}
                            isInverted={isInverted}
                            dataSheet="title"
                        >
                            {title}
                        </TitleLink>
                    )}
                    {text && (
                        <Copy
                            isInverted={isInverted}
                            type="copy"
                            innerHTML={text}
                            data-sheet="text"
                        />
                    )}
                </Main>
                {action && <Action>{action(isInverted)}</Action>}
            </View>
        );
    }
);

NewsCard.displayName = 'NewsCard';

export default NewsCard;
