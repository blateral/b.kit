import Section from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import { EventProps } from 'components/blocks/EventBlock';
import Tag, { TagProps } from 'components/blocks/Tag';
import Copy from 'components/typography/Copy';
import Heading from 'components/typography/Heading';
import { LinkProps } from 'components/typography/Link';
import React from 'react';
import styled from 'styled-components';
import { spacings } from 'utils/styles';

const Content = styled.div`
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

const TagWrapper = styled.div`
    padding-top: ${spacings.nudge}px;
    padding-left: ${spacings.nudge}px;
`;

const EventDetail: React.FC<{
    anchorId?: string;

    /** Array of event item settings */
    event: EventProps & { infoText?: string };

    /** Section background */
    bgMode?: 'inverted' | 'full';

    /** Function to inject custom tag node */
    customTag?: (props: {
        key: React.Key;
        name: string;
        isInverted?: boolean;
        isActive?: boolean;
        link?: LinkProps;
        clickHandler?: (ev?: React.SyntheticEvent<HTMLElement>) => void;
    }) => React.ReactNode;

    onTagClick?: (tag: TagProps) => void;
}> = ({ event, bgMode, customTag, onTagClick }) => {
    const isInverted = bgMode === 'inverted';

    const handleTagClick = (tag: TagProps) =>
        onTagClick
            ? (ev?: React.SyntheticEvent<HTMLElement>) => {
                  ev?.preventDefault();
                  onTagClick(tag);
              }
            : undefined;
    return (
        <Section>
            <Wrapper>
                <Content>
                    {event.tags && (
                        <TagContainer>
                            {event.tags.map(
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
                                                    onClick={handleTagClick(
                                                        tag
                                                    )}
                                                />
                                            )}
                                        </TagWrapper>
                                    )
                            )}
                        </TagContainer>
                    )}
                    {event.title && (
                        <Heading size="heading-2" isInverted={isInverted}>
                            {event.title}
                        </Heading>
                    )}
                    {event.infoText && (
                        <Copy
                            size="big"
                            isInverted={isInverted}
                            innerHTML={event.infoText}
                        />
                    )}
                    {event.text && (
                        <Copy
                            size="medium"
                            isInverted={isInverted}
                            innerHTML={event.text}
                        />
                    )}
                </Content>
            </Wrapper>
        </Section>
    );
};

export default EventDetail;
