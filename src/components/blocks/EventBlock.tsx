import React, { useId, useMemo } from 'react';
import styled from 'styled-components';

import Tag, { TagProps } from './Tag';
import Copy, { copyStyle } from 'components/typography/Copy';
import {
    spacings,
    mq,
    getFonts as font,
    getColors as color,
} from 'utils/styles';
import StatusFormatter from 'utils/statusFormatter';
import { useLibTheme } from 'utils/LibThemeProvider';
import Image, { ImageProps } from './Image';
import Link, { LinkProps } from 'components/typography/Link';
import { isValidArray } from 'utils/arrays';

const View = styled.article<{ hasBg?: boolean; isInverted?: boolean }>`
    text-decoration: none;
    color: inherit;

    background-color: ${({ theme, hasBg }) =>
        hasBg ? color(theme).elementBg.light : color(theme).elementBg.medium};

    & > * + * {
        margin-top: ${spacings.nudge}px;
    }

    @media ${mq.large} {
        display: flex;
        justify-content: flex-end;
        flex-direction: row-reverse;

        & > * + * {
            margin-top: 0;
            padding-right: ${spacings.spacer}px;
        }
    }

    &:has(a[data-ident='event-block-title']:focus-visible) {
        outline: 2px solid
            ${({ theme, isInverted }) =>
                isInverted
                    ? color(theme).primary.inverted
                    : color(theme).primary.default};
        outline-offset: 2px;
    }
`;

const ImageContainer = styled.div`
    display: block;
    margin-left: auto;

    & > * + * {
        margin-left: ${spacings.nudge}px;
    }

    & > *:not(:first-child) {
        display: none;
    }

    @media ${mq.medium} {
        display: flex;
        flex-direction: row;
        align-items: flex-start;

        flex: 0 0 50%;

        & > *:not(:first-child),
        & > *:not(:nth-child(2)) {
            display: inline-block;
        }
    }

    @media ${mq.large} {
        flex: 0 1 45%;
        max-width: 430px;

        & > *:not(:first-child) {
            display: none;
        }
    }

    @media ${mq.xlarge} {
        flex: 0 1 30%;
    }
`;

const CardImage = styled(Image)`
    height: 100%;
    cursor: ${({ onClick }) => onClick && 'pointer'};

    img {
        width: calc(100% + 1px);
    }

    @media ${mq.medium} {
        max-width: 50%;
    }

    @media ${mq.large} {
        max-width: 100%;
    }
`;

const MainContent = styled.div`
    flex: 0 1 70%;

    display: flex;
    flex-direction: column;
    padding: ${spacings.nudge * 2}px;
    padding-bottom: ${spacings.nudge * 3}px;

    & > * + * {
        margin-top: ${spacings.nudge * 3}px;
    }

    @media ${mq.large} {
        max-width: 830px;
        padding: ${spacings.nudge * 3}px;
    }
`;

const TagContainer = styled.div`
    order: -1;

    margin-top: -${spacings.nudge}px;
    margin-left: -${spacings.nudge}px;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

const TextWrapper = styled.div`
    & > * + * {
        margin-top: ${spacings.nudge}px;
    }
`;

const TagWrapper = styled.div`
    padding-top: ${spacings.nudge}px;
    padding-left: ${spacings.nudge}px;
`;

const TitleLink = styled(Link)<{ hasTags?: boolean }>`
    display: inline-block;
    ${copyStyle('copy-b', 'big')}

    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    width: fit-content;

    color: ${({ theme, isInverted }) =>
        isInverted
            ? font(theme)['copy-b'].big.colorInverted
            : font(theme)['copy-b'].big.color};
    text-decoration: none;
    outline: none !important;

    ${({ hasTags }) => hasTags && `margin-top: ${spacings.nudge}px;`}
`;

const Text = styled(Copy)`
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
`;

export interface EventProps {
    /** Array of tag item settings */
    tags?: TagProps[];

    /** Active tags that are highlighted in this event */
    activeTags?: string[];

    /** Event image */
    images?: Array<Omit<ImageProps, 'coverSpace' | 'ratios'>>;

    /** Event title */
    title?: string;

    /** Event publish date */
    date?: Date;

    /** Event duration in seconds  */
    duration?: number;

    /** Event text (richtext) */
    text?: string;

    /** Invert color and background for darker themes */
    isInverted?: boolean;

    /** Event link settings */
    link?: LinkProps;

    /** Function to inject action elements */
    action?: (props: {
        isInverted?: boolean;
        clickHandler?: (ev?: React.SyntheticEvent<HTMLElement>) => void;
    }) => React.ReactNode;

    /** Function to inject custom tag node */
    customTag?: (props: {
        key: React.Key;
        name: string;
        isInverted?: boolean;
        isActive?: boolean;
        link: LinkProps;
        clickHandler?: (ev?: React.SyntheticEvent<HTMLElement>) => void;
    }) => React.ReactNode;

    /** Callback function if tag in news iten has been clicked */
    onTagClick?: (tag: TagProps) => void;
}

const EventBlock: React.FC<EventProps & { hasBg?: boolean }> = ({
    customTag,
    onTagClick,
    title,
    images,
    date,
    text,
    link,
    tags,
    isInverted,
    action,
    hasBg,
}) => {
    const { globals } = useLibTheme();
    const uniqueId = useId();

    let publishedAt = '';
    if (date) {
        const formatter = new StatusFormatter(
            date.getTime(),
            '',
            globals.sections.eventDateFormat(date),
            globals.sections.eventTimeFormat(date),
            globals.sections.eventLocaleKey
        );
        publishedAt = formatter.getFormattedDate();
    }

    const handleTagClick = (tag: TagProps) =>
        onTagClick
            ? (ev?: React.SyntheticEvent<HTMLElement>) => {
                  ev?.preventDefault();
                  onTagClick(tag);
              }
            : undefined;

    const filteredTags = useMemo(() => {
        return tags?.filter((tag) => tag.name);
    }, [tags]);

    const cardImages = useMemo(
        () => images?.slice(0, 2)?.filter((img) => img.small),
        [images]
    );

    const handleClick = () => {
        if (!link?.href) return;
        if (link.isExternal) {
            window.open(link.href, '_blank', 'noopener,noreferrer');
        } else {
            window.location.href = link.href;
        }
    };

    const hasTags = isValidArray(filteredTags, false);

    return (
        <View
            hasBg={hasBg}
            role="group"
            aria-labelledby={uniqueId}
            isInverted={isInverted}
        >
            {isValidArray(cardImages, false) && (
                <ImageContainer>
                    {cardImages.map((img, i) => (
                        <CardImage
                            {...img}
                            key={i}
                            coverSpace
                            allowEdgeRadius
                            isInverted={isInverted}
                            ratios={{
                                small: { w: 4, h: 3 },
                            }}
                            onClick={link?.href ? handleClick : undefined}
                        />
                    ))}
                </ImageContainer>
            )}
            <MainContent>
                {title && (
                    <TitleLink
                        id={uniqueId}
                        dataIdent="event-block-title"
                        hasTags={hasTags}
                        {...link}
                    >
                        {title}
                    </TitleLink>
                )}
                {hasTags && (
                    <TagContainer>
                        {filteredTags.map(
                            (tag, i) =>
                                tag && (
                                    <TagWrapper key={'tag_' + i}>
                                        {customTag ? (
                                            customTag({
                                                key: 'tag_' + i,
                                                name: tag.name || '',
                                                isActive: false,
                                                link: tag.link || {},
                                                clickHandler:
                                                    handleTagClick(tag),
                                            })
                                        ) : (
                                            <Tag
                                                name={tag.name}
                                                link={tag.link}
                                                onClick={handleTagClick(tag)}
                                            />
                                        )}
                                    </TagWrapper>
                                )
                        )}
                    </TagContainer>
                )}
                <TextWrapper>
                    {date && (
                        <Copy size="medium" type="copy-b">
                            {publishedAt}
                        </Copy>
                    )}
                    {text && <Text size="small" innerHTML={text} />}
                </TextWrapper>
                {action && (
                    <div>
                        {action({
                            isInverted: false,
                            clickHandler: handleClick,
                        })}
                    </div>
                )}
            </MainContent>
        </View>
    );
};

export default EventBlock;
