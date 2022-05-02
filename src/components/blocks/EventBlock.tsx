import React from 'react';
import styled from 'styled-components';

import Tag, { TagProps } from './Tag';
import Copy, { copyStyle } from 'components/typography/Copy';
import { spacings, mq, getFonts as font } from 'utils/styles';
import StatusFormatter from 'utils/statusFormatter';
import { useLibTheme } from 'utils/LibThemeProvider';
import Image, { ImageProps } from './Image';
import Link, { LinkProps } from 'components/typography/Link';

const View = styled.div`
    text-decoration: none;
    color: inherit;

    & > * + * {
        margin-top: ${spacings.nudge * 3}px;
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

const StyledImage = styled(Image)`
    flex: 1 0 40%;
`;

const MainContent = styled.div`
    flex: 1 0 60%;

    & > * + * {
        margin-top: ${spacings.nudge * 3}px;
    }

    @media ${mq.large} {
        max-width: 60%;
    }
`;

const TagContainer = styled.div`
    margin-top: -${spacings.nudge}px;
    margin-left: -${spacings.nudge}px;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

const TitleWrapper = styled.div`
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
    image?: Omit<ImageProps, 'coverSpace'>;

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

const EventBlock: React.FC<EventProps> = ({
    customTag,
    onTagClick,
    title,
    image,
    date,
    text,
    link,
    tags,
    isInverted,
    action,
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

    return (
        <View>
            {image?.small && (
                <StyledImage {...image} coverSpace isInverted={isInverted} />
            )}
            <MainContent>
                {tags && (
                    <TagContainer>
                        {tags.map(
                            (tag, i) =>
                                tag && (
                                    <TagWrapper key={'tag_' + i}>
                                        {customTag ? (
                                            customTag({
                                                key: 'tag_' + i,
                                                name: tag.name || '',
                                                isInverted: isInverted,
                                                isActive: false,
                                                link: tag.link || {},
                                                clickHandler:
                                                    handleTagClick(tag),
                                            })
                                        ) : (
                                            <Tag
                                                isInverted={isInverted}
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
                <TitleWrapper>
                    {date && (
                        <Copy isInverted={isInverted} size="medium" type="copy">
                            {publishedAt}
                        </Copy>
                    )}
                    {title && (
                        <TitleLink {...link} isInverted={isInverted}>
                            {title}
                        </TitleLink>
                    )}
                </TitleWrapper>
                {text && (
                    <Text
                        size="small"
                        isInverted={isInverted}
                        innerHTML={text}
                    />
                )}
                {action && <div> {action({ isInverted })} </div>}
            </MainContent>
        </View>
    );
};

export default EventBlock;
