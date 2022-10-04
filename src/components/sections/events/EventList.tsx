import React from 'react';
import styled from 'styled-components';

import Section, { mapToBgMode } from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import EventBlock, { EventProps } from 'components/blocks/EventBlock';
import { getColors as color, spacings } from 'utils/styles';
import { useLibTheme, withLibTheme } from 'utils/LibThemeProvider';
import { LinkProps } from 'components/typography/Link';
import StatusFormatter from 'utils/statusFormatter';
import { concat } from 'utils/concat';

const List = styled.ul<{ hasBg?: boolean }>`
    list-style: none;
    margin: 0;
    padding: 0;

    & > * + * {
        border-top: 1px solid
            ${({ theme, hasBg }) =>
                hasBg
                    ? color(theme).elementBg.light
                    : color(theme).elementBg.medium};
    }

    & > *:first-of-type {
        border-top: 1px solid
            ${({ theme, hasBg }) =>
                hasBg
                    ? color(theme).elementBg.light
                    : color(theme).elementBg.medium};
    }

    & > *:last-of-type {
        border-bottom: 1px solid
            ${({ theme, hasBg }) =>
                hasBg
                    ? color(theme).elementBg.light
                    : color(theme).elementBg.medium};
    }
`;

const ListItem = styled.li`
    padding: ${spacings.nudge * 3}px 0;
`;

export type EventItem = Omit<
    EventProps,
    'customTag' | 'isInverted' | 'onTagClick' | 'text'
> & { address?: string };

const EventList: React.FC<{
    /** ID value for targeting section with anchor hashes */
    anchorId?: string;

    /** Array of event item settings */
    events?: EventItem[];

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
}> = ({ anchorId, events, bgMode, customTag }) => {
    const { colors, globals } = useLibTheme();
    const isInverted = bgMode === 'inverted';
    const hasBg = bgMode === 'full';

    return (
        <Section
            addSeperation
            anchorId={anchorId}
            bgColor={
                isInverted
                    ? colors.sectionBg.dark
                    : bgMode
                    ? colors.sectionBg.medium
                    : colors.sectionBg.light
            }
            bgMode={mapToBgMode(bgMode, true)}
        >
            <Wrapper addWhitespace>
                <List hasBg={hasBg}>
                    {events?.map((event, i) => {
                        let timespan = '';

                        if (event.date) {
                            const formatter = new StatusFormatter(
                                event.date.getTime(),
                                '',
                                globals.sections.eventDateFormat(event.date),
                                globals.sections.eventTimeFormat(event.date),
                                globals.sections.eventLocaleKey
                            );

                            timespan = formatter.getFormattedTimespan(
                                globals.sections.eventTimespanFormat(
                                    event.date,
                                    event.duration
                                ),
                                event.duration
                            );
                        }

                        const text = concat([timespan, event.address], ' | ');

                        return (
                            <ListItem key={i}>
                                <EventBlock
                                    {...event}
                                    isInverted={isInverted}
                                    text={text}
                                    customTag={customTag}
                                />
                            </ListItem>
                        );
                    })}
                </List>
            </Wrapper>
        </Section>
    );
};

export const EventListComponent = EventList;
export default withLibTheme(EventList);
