import React from 'react';
import styled from 'styled-components';

import Tag from './Tag';
import Copy from 'components/typography/Copy';
import { spacings, mq } from 'utils/styles';
import StatusFormatter from 'utils/statusFormatter';
import { useLibTheme } from 'utils/LibThemeProvider';
import Image, { ImageProps } from './Image';

const View = styled.div`
    text-decoration: none;
    color: inherit;

    & > * + * {
        margin-top: ${spacings.nudge * 3}px;
    }

    @media ${mq.large} {
        display: flex;
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

const Title = styled(Copy)``;

const Text = styled(Copy)``;

export interface EventProps {
    /** Array of tag item settings */
    tags?: string[];

    /** Active tags that are highlighted in this event */
    activeTags?: string[];

    /** Event Image */
    image?: ImageProps;

    /** Event title */
    title?: string;

    /** Event publish date */
    date?: Date;

    /** Event text (richtext) */
    text?: string;

    /** Invert color and background for darker themes */
    isInverted?: boolean;

    /** Function to inject action elements */
    action?: (props: { isInverted?: boolean }) => React.ReactNode;

    /** Function to inject custom tag node */
    customTag?: (props: {
        name: string;
        isInverted?: boolean;
        isActive?: boolean;
        clickHandler?: (ev?: React.SyntheticEvent<HTMLButtonElement>) => void;
    }) => React.ReactNode;

    /** Callback function if tag in news iten has been clicked */
    onTagClick?: (name: string) => void;
}

const EventBlock: React.FC<EventProps> = ({
    customTag,
    title,
    image,
    date,
    text,
    tags,
    isInverted,
    onTagClick,
    action,
}) => {
    const { globals } = useLibTheme();

    let publishedAt = '';
    if (date) {
        const formatter = new StatusFormatter(
            date.getTime(),
            '',
            globals.sections.eventDateFormat,
            globals.sections.eventTimeFormat,
            globals.sections.eventLocaleKey
        );
        publishedAt = formatter.getFormattedDate();
    }

    return (
        <View>
            {image && <StyledImage {...image} />}
            <MainContent>
                {tags && (
                    <TagContainer>
                        {tags.map((tag, i) => (
                            <TagWrapper key={'tag_' + i}>
                                {customTag ? (
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
                                )}
                            </TagWrapper>
                        ))}
                    </TagContainer>
                )}
                <TitleWrapper>
                    {date && (
                        <Copy isInverted={isInverted} size="medium" type="copy">
                            {publishedAt}
                        </Copy>
                    )}
                    {title && (
                        <Title isInverted={isInverted} size="big" type="copy-b">
                            {title}
                        </Title>
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
