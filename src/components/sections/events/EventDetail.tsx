import React from 'react';
import styled from 'styled-components';

import Section, { mapToBgMode } from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import { EventProps } from 'components/blocks/EventBlock';
import Image from 'components/blocks/Image';
import Tag from 'components/blocks/Tag';
import Copy from 'components/typography/Copy';
import Heading from 'components/typography/Heading';
import { LinkProps } from 'components/typography/Link';
import { mq, spacings } from 'utils/styles';
import { useLibTheme, withLibTheme } from 'utils/LibThemeProvider';
import Grid from 'components/base/Grid';
import StatusFormatter from 'utils/statusFormatter';
import InfoList from 'components/blocks/InfoList';

const StyledImage = styled(Image)`
    &:not(:last-child) {
        margin-bottom: ${spacings.spacer}px;
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

const EventTitle = styled(Heading)`
    &:not(:first-child) {
        margin-top: ${spacings.nudge * 3}px;
    }

    @media ${mq.semilarge} {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2; /* number of lines to show */
        line-clamp: 2;
        -webkit-box-orient: vertical;
    }
`;

const EventDateTime = styled(Copy)`
    /* overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap; */

    &:not(:first-child) {
        margin-top: ${spacings.nudge * 3}px;
    }
`;

const EventAddress = styled(Copy)`
    &:not(:first-child) {
        margin-top: ${spacings.nudge * 3}px;
    }

    ${EventDateTime} + & {
        margin-top: ${spacings.nudge}px;
    }

    @media ${mq.semilarge} {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
`;

const EventText = styled(Copy)`
    &:not(:first-child) {
        margin-top: ${spacings.nudge * 3}px;
    }
`;

export type DetailEventProps = Omit<
    EventProps,
    'customTag' | 'isInverted' | 'onTagClick' | 'link'
>;

export interface EventInfoGroup {
    title?: string;
    items: EventInfo[];
}

export interface EventInfo {
    /** icon injection function */
    icon?: (isInverted?: boolean) => React.ReactNode;
    /** Event info text (richtText) */
    text?: string;
}

const EventDetail: React.FC<{
    /** ID value for targeting section with anchor hashes */
    anchorId?: string;

    /** Array of event item settings */
    event: DetailEventProps & { address?: string };

    /** Additional event infos */
    infos?: EventInfoGroup[];

    /** Section background */
    bgMode?: 'inverted' | 'full';

    /** Function to inject custom tag node */
    customTag?: (props: {
        key: React.Key;
        name: string;
        isInverted?: boolean;
        isActive?: boolean;
        link?: LinkProps;
    }) => React.ReactNode;
}> = ({ anchorId, event, infos, bgMode, customTag }) => {
    const { colors, globals } = useLibTheme();
    const isInverted = bgMode === 'inverted';
    const hasBg = bgMode === 'full';

    let publishedAt = '';
    let timespan = '';

    if (event?.date) {
        const formatter = new StatusFormatter(
            event.date.getTime(),
            '',
            globals.sections.eventDateFormat(event.date),
            globals.sections.eventTimeFormat(event.date),
            globals.sections.eventLocaleKey
        );
        publishedAt = formatter.getFormattedDate();

        timespan = formatter.getFormattedTimespan(
            globals.sections.eventTimespanFormat(event.date, event.duration),
            event.duration
        );
    }

    return (
        <Section
            addSeperation
            anchorId={anchorId}
            bgColor={
                isInverted
                    ? colors.sectionBg.dark
                    : hasBg
                    ? colors.sectionBg.medium
                    : colors.sectionBg.light
            }
            bgMode={mapToBgMode(bgMode, true)}
        >
            <Wrapper addWhitespace>
                {event.image?.small && (
                    <StyledImage
                        {...event.image}
                        coverSpace
                        allowEdgeRadius
                        isInverted={isInverted}
                    />
                )}
                <Grid.Row
                    gutter={spacings.nudge * 5}
                    large={{ gutter: spacings.spacer }}
                >
                    <Grid.Col large={{ span: 9 / 12 }}>
                        {event.tags && (
                            <TagContainer>
                                {event.tags.map((tag, i) => (
                                    <TagWrapper key={'tag_' + i}>
                                        {customTag ? (
                                            customTag({
                                                key: `headtag-${i}`,
                                                name: tag.name || '',
                                                isInverted: isInverted,
                                                isActive: false,
                                                link: tag.link,
                                            })
                                        ) : (
                                            <Tag
                                                link={tag.link}
                                                isInverted={isInverted}
                                            >
                                                {tag.name}
                                            </Tag>
                                        )}
                                    </TagWrapper>
                                ))}
                            </TagContainer>
                        )}
                        {event.title && (
                            <EventTitle
                                size="heading-2"
                                isInverted={isInverted}
                            >
                                {event.title}
                            </EventTitle>
                        )}
                        {publishedAt && (
                            <EventDateTime size="big" type="copy-b">
                                {publishedAt || ''}
                                {publishedAt && timespan ? ' | ' : ''}
                                {timespan}
                            </EventDateTime>
                        )}
                        {event.address && (
                            <EventAddress
                                size="big"
                                type="copy"
                                innerHTML={event.address}
                            />
                        )}
                        {event.text && (
                            <EventText
                                size="medium"
                                isInverted={isInverted}
                                innerHTML={event.text}
                            />
                        )}
                    </Grid.Col>
                    {infos && infos.length > 0 && (
                        <Grid.Col large={{ span: 3 / 12 }}>
                            <InfoList isInverted={isInverted} items={infos} />
                        </Grid.Col>
                    )}
                </Grid.Row>
            </Wrapper>
        </Section>
    );
};

export const EventDetailComponent = EventDetail;
export default withLibTheme(EventDetail);
