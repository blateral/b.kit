import React from 'react';
import styled from 'styled-components';

import Tag from './Tag';
import Copy from 'components/typography/Copy';
import { spacings } from 'utils/styles';
import StatusFormatter from 'utils/statusFormatter';
import { useLibTheme } from 'utils/LibThemeProvider';

const View = styled.div`
    text-decoration: none;
    color: inherit;

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

const Content = styled.div`
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

// #TODO: Dokumentieren
export interface EventProps {
    tags?: string[];
    activeTags?: string[];
    title?: string;
    date?: Date;
    text?: string;
    isInverted?: boolean;
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
            <Content>
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
            </Content>
            {text && (
                <Text size="small" isInverted={isInverted} innerHTML={text} />
            )}
            {action && <div> {action({ isInverted })} </div>}
        </View>
    );
};

export default EventBlock;
