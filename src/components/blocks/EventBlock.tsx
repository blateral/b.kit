import React, { useMemo } from 'react';
import styled from 'styled-components';

import Tag, { TagProps } from './Tag';
import Copy, { copyStyle } from 'components/typography/Copy';
import { spacings, mq, getFonts as font, getColors } from 'utils/styles';
import StatusFormatter from 'utils/statusFormatter';
import { useLibTheme } from 'utils/LibThemeProvider';
import Image, { ImageProps } from './Image';
import Link, { LinkProps } from 'components/typography/Link';
import { isValidArray } from 'utils/arrays';

const View = styled.div<{ hasBg?: boolean }>`
    text-decoration: none;
    color: inherit;

    background-color: ${({ theme, hasBg }) =>
        hasBg
            ? getColors(theme).elementBg.light
            : getColors(theme).elementBg.medium};

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
`;

const ImageFlex = styled.div`
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
        flex: 0 1 30%;

        & > *:not(:first-child) {
            display: none;
        }
    }
`;

const CardImage = styled(Image)`
    height: 100%;

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

const TitleLink = styled(Link)`
    display: inline-block;
    ${copyStyle('copy-b', 'big')}

    color: ${({ theme, isInverted }) =>
        isInverted
            ? font(theme)['copy-b'].big.colorInverted
            : font(theme)['copy-b'].big.color};
    text-decoration: none;
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
    action?: (props: { isInverted?: boolean }) => React.ReactNode;

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

    const cardImages = useMemo(() => images?.slice(0, 2), [images]);

    return (
        <View hasBg={hasBg}>
            {isValidArray(cardImages, false) && (
                <ImageFlex>
                    {cardImages.map((img, i) => {
                        if (!img.small) return null;
                        return (
                            <CardImage
                                {...img}
                                key={i}
                                coverSpace
                                allowEdgeRadius
                                isInverted={isInverted}
                                ratios={{
                                    small: { w: 4, h: 3 },
                                }}
                            />
                        );
                    })}
                </ImageFlex>
            )}
            <MainContent>
                {isValidArray(filteredTags, false) && (
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
                {title && <TitleLink {...link}>{title}</TitleLink>}
                <TextWrapper>
                    {date && (
                        <Copy size="medium" type="copy-b">
                            {publishedAt}
                        </Copy>
                    )}
                    {text && <Text size="small" innerHTML={text} />}
                </TextWrapper>
                {action && <div> {action({ isInverted: false })} </div>}
            </MainContent>
        </View>
    );
};

export default EventBlock;
