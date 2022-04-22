import Section from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import { EventProps } from 'components/blocks/EventBlock';
import Image from 'components/blocks/Image';
import Tag, { TagProps } from 'components/blocks/Tag';
import Copy from 'components/typography/Copy';
import Heading from 'components/typography/Heading';
import { LinkProps } from 'components/typography/Link';
import React from 'react';
import styled from 'styled-components';
import { getColors, mq, spacings } from 'utils/styles';

const Content = styled.div<{ isInverted?: boolean }>`
    color: ${({ theme, isInverted }) =>
        isInverted
            ? getColors(theme).text.inverted
            : getColors(theme).text.default};

    @media ${mq.large} {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
    }
`;

const MainContent = styled.div`
    & > * {
        margin-bottom: ${spacings.nudge * 5}px;
    }

    & > * + * {
        margin-top: ${spacings.nudge * 3}px;
    }

    @media ${mq.large} {
        & > * {
            margin-right: ${spacings.spacer}px;
        }
    }
`;

const StyledImage = styled(Image)`
    margin-bottom: ${spacings.spacer}px;
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

const InfoList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;

    @media ${mq.semilarge} {
        display: flex;
        flex-direction: row;
        align-items: flex-start;

        & > * {
            flex: 0 0 33.33%;
        }
    }

    @media ${mq.large} {
        display: block;
    }
`;

const InfoItem = styled.li`
    & + & {
        padding-top: ${spacings.nudge * 3}px;
    }

    @media ${mq.semilarge} {
        & + & {
            padding-top: 0;
            padding-left: ${spacings.spacer}px;
        }
    }

    @media ${mq.large} {
        & + & {
            padding-left: 0;
            padding-top: ${spacings.nudge * 5}px;
        }
    }
`;

const InfoTitle = styled(Copy)`
    margin-bottom: ${spacings.nudge * 3}px;
`;

const InfoContent = styled.div`
    display: -ms-grid;
    display: grid;

    -ms-grid-columns: min-content 1fr;
    grid-template-columns: min-content 1fr;
    -ms-grid-rows: min-content 1fr;
    grid-auto-rows: min-content 1fr;

    & + & {
        padding-top: ${spacings.nudge * 2}px;
    }

    & > * + * {
        padding-left: ${spacings.nudge * 2}px;
    }
`;

const Icon = styled.div`
    height: 20px;
    width: 20px;

    & > * {
        height: 20px;
        width: 20px;
    }
`;

const EventDetail: React.FC<{
    anchorId?: string;

    /** Array of event item settings */
    event: EventProps & { infoText?: string };

    /** Section background */
    bgMode?: 'inverted' | 'full';

    infoList?: {
        title?: string;
        infos?: {
            icon: (isInverted?: boolean) => React.ReactNode;
            label?: string;
        }[];
    }[];

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
}> = ({ event, infoList, bgMode, customTag, onTagClick }) => {
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
            <Wrapper addWhitespace>
                {event.image?.small && (
                    <StyledImage
                        {...event.image}
                        coverSpace
                        isInverted={isInverted}
                    />
                )}
                <Content>
                    <MainContent>
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
                    </MainContent>
                    {infoList && (
                        <InfoList>
                            {infoList.map((items, i) => {
                                return (
                                    <InfoItem key={i}>
                                        <InfoTitle size="small" type="copy-b">
                                            {items.title}
                                        </InfoTitle>
                                        {items.infos &&
                                            items.infos.map((info, ii) => {
                                                return (
                                                    <InfoContent key={ii}>
                                                        <Icon>
                                                            {info.icon(
                                                                isInverted
                                                            )}
                                                        </Icon>
                                                        <Copy
                                                            size="small"
                                                            type="copy"
                                                        >
                                                            {info.label}
                                                        </Copy>
                                                    </InfoContent>
                                                );
                                            })}
                                    </InfoItem>
                                );
                            })}
                        </InfoList>
                    )}
                </Content>
            </Wrapper>
        </Section>
    );
};

export default EventDetail;
