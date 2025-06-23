import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

import {
    mq,
    spacings,
    withRange,
    getGlobalSettings as global,
    getColors as color,
    getFonts as font,
} from 'utils/styles';
import Copy, { copyStyle } from 'components/typography/Copy';
import Actions from 'components/blocks/Actions';
import Image, { ImageProps } from 'components/blocks/Image';
import Tag from 'components/blocks/Tag';
import StatusFormatter from 'utils/statusFormatter';
import Link, { LinkProps } from 'components/typography/Link';

const View = styled.article<{ isInverted?: boolean }>`
    position: relative;
    text-decoration: none;
    padding-bottom: ${spacings.spacer}px;

    &:has(:focus-visible) {
        outline: 2px solid
            ${({ theme, isInverted }) =>
                isInverted ? color(theme).light : color(theme).dark};
        outline-offset: 2px;
    }
`;

const StyledImage = styled(Image)`
    overflow: hidden;
    border-radius: ${({ theme }) => global(theme).sections.edgeRadius};
`;

const TitleLink = styled(Link)`
    text-decoration: none;
    outline: none;

    &:before {
        content: '';
        position: absolute;
        inset: 0;
        z-index: 1;
    }
`;

const Head = styled(Copy)`
    display: flex;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    margin-top: ${spacings.spacer * 2}px;
    margin-bottom: ${spacings.spacer * 1.5}px;

    & > * + * {
        margin-left: ${spacings.spacer}px;
    }
`;

const PublishDate = styled.time.attrs({ 'aria-label': 'Published date' })`
    &:only-child {
        margin-left: auto;
    }
`;

const Main = styled.div`
    max-width: 95%;

    & > * + * {
        margin-top: ${spacings.spacer}px;
    }
`;

const CardTitle = styled.h3<{ isInverted?: boolean }>`
    ${copyStyle('copy-b', 'big')};
    color: ${({ theme, isInverted }) =>
        isInverted
            ? font(theme)['copy-b'].big.colorInverted
            : font(theme)['copy-b'].big.color};
`;

const StyledActions = styled(Actions)`
    ${withRange([spacings.spacer, spacings.spacer * 2], 'margin-top')}

    @media ${mq.medium} {
        width: 100%;

        & > * {
            max-width: 50%;
            min-width: 0 !important;
            flex: 1;
        }
    }
`;

export interface NewsCardProps {
    isInverted?: boolean;
    tag?: string;
    onTagClick?: (name: string) => void;
    publishDate?: Date;
    title?: string;
    text?: string;
    image?: Omit<ImageProps, 'coverSpace'>;
    link?: LinkProps;

    primaryAction?: (isInverted?: boolean) => React.ReactNode;
    secondaryAction?: (isInverted?: boolean) => React.ReactNode;
}

const NewsCard: React.FC<
    NewsCardProps & {
        className?: string;
    }
> = ({
    tag,
    onTagClick,
    publishDate,
    title,
    text,
    image,
    link,
    isInverted,
    primaryAction,
    secondaryAction,
    className,
}) => {
    const theme = useContext(ThemeContext);

    let publishedAt = '';
    if (publishDate) {
        const formatter = new StatusFormatter(
            publishDate.getTime(),
            '',
            global(theme).sections.newsDateFormat,
            global(theme).sections.newsTimeFormat,
            global(theme).sections.newsLocaleKey
        );
        publishedAt = formatter.getFormattedDate();
    }

    // settings max text length to 300 chars
    if (text && text.length > 300) {
        text = text.slice(0, 301) + '...';
    }

    return (
        <View isInverted={isInverted} className={className}>
            {image && <StyledImage coverSpace {...image} />}
            <Head isInverted={isInverted} data-sheet="head">
                {tag && (
                    <Tag
                        isInverted={isInverted}
                        onClick={onTagClick ? () => onTagClick(tag) : undefined}
                        aria-label={`Filter by ${tag}`}
                    >
                        {tag}
                    </Tag>
                )}
                {publishedAt && <PublishDate>{publishedAt}</PublishDate>}
            </Head>
            <Main>
                {title && (
                    <TitleLink
                        {...link}
                        aria-label={`Read more about: ${title}`}
                    >
                        <CardTitle isInverted={isInverted} data-sheet="title">
                            {title}
                        </CardTitle>
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
            {(primaryAction || secondaryAction) && (
                <StyledActions
                    primary={primaryAction && primaryAction(isInverted)}
                    secondary={secondaryAction && secondaryAction(isInverted)}
                />
            )}
        </View>
    );
};

export default NewsCard;
