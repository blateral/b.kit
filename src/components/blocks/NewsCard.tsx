import React, { forwardRef } from 'react';
import styled from 'styled-components';

import { mq, spacings, getGlobals as global } from 'utils/styles';
import Copy from 'components/typography/Copy';
import Actions from 'components/blocks/Actions';
import Image, { ImageProps } from 'components/blocks/Image';
import Tag from 'components/blocks/Tag';
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
    text-decoration: none;
`;

const Head = styled.div`
    display: flex;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    margin-top: ${spacings.nudge * 3}px;
    margin-bottom: ${spacings.nudge * 3}px;

    & > * + * {
        margin-left: ${spacings.nudge * 3}px;
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

const StyledActions = styled(Actions)`
    margin-top: ${spacings.nudge * 3}px;

    @media ${mq.medium} {
        width: 100%;

        & > * {
            /* max-width: 50%; */
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
    customTag?: (props: {
        name: string;
        isInverted?: boolean;
        isActive?: boolean;
        clickHandler?: (ev?: React.SyntheticEvent<HTMLButtonElement>) => void;
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

        return (
            <View ref={ref} className={className}>
                {image && (
                    <ImageLink {...link}>
                        <StyledImage
                            {...image}
                            coverSpace
                            isInverted={isInverted}
                        />
                    </ImageLink>
                )}
                <Head data-sheet="head">
                    {tag &&
                        (customTag ? (
                            customTag({
                                name: tag,
                                isInverted: isInverted,
                                isActive: false,
                                clickHandler: () => {
                                    onTagClick && onTagClick(tag);
                                },
                            })
                        ) : (
                            <Tag
                                isInverted={isInverted}
                                onClick={
                                    onTagClick
                                        ? () => onTagClick(tag)
                                        : undefined
                                }
                            >
                                {tag}
                            </Tag>
                        ))}
                    {publishedAt && (
                        <PublishDate renderAs="p" isInverted={isInverted}>
                            {publishedAt}
                        </PublishDate>
                    )}
                </Head>
                <Main>
                    {title && (
                        <TitleLink {...link}>
                            <Copy
                                isInverted={isInverted}
                                size="big"
                                type="copy-b"
                                data-sheet="title"
                            >
                                {title}
                            </Copy>
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
                        secondary={
                            secondaryAction && secondaryAction(isInverted)
                        }
                    />
                )}
            </View>
        );
    }
);

NewsCard.displayName = 'NewsCard';

export default NewsCard;
