import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

import {
    mq,
    spacings,
    withRange,
    getGlobalSettings as global,
} from 'utils/styles';
import Copy from 'components/typography/Copy';
import Actions from 'components/blocks/Actions';
import Image, { ImageProps } from 'components/blocks/Image';
import Tag from 'components/blocks/Tag';
import StatusFormatter from 'utils/statusFormatter';
import Link, { LinkProps } from 'components/typography/Link';

const View = styled.div`
    position: relative;
    text-decoration: none;
    padding-bottom: ${spacings.spacer}px;
`;

const ImageLink = styled(Link)`
    width: 100%;
`;

const TitleLink = styled(Link)`
    text-decoration: none;
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

const Main = styled.div`
    max-width: 95%;

    & > * + * {
        margin-top: ${spacings.spacer}px;
    }
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
        <View className={className}>
            {image && (
                <ImageLink {...link}>
                    <Image coverSpace {...image} />
                </ImageLink>
            )}
            <Head isInverted={isInverted} data-sheet="head">
                {tag && (
                    <Tag
                        isInverted={isInverted}
                        onClick={onTagClick ? () => onTagClick(tag) : undefined}
                    >
                        {tag}
                    </Tag>
                )}
                {publishedAt && <div>{publishedAt}</div>}
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
                    secondary={secondaryAction && secondaryAction(isInverted)}
                />
            )}
        </View>
    );
};

export default NewsCard;
