import React from 'react';
import styled from 'styled-components';

import Section, { mapToBgMode } from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import EventBlock, { EventProps } from 'components/blocks/EventBlock';
import { getColors as color, spacings } from 'utils/styles';
import { useLibTheme, withLibTheme } from 'utils/LibThemeProvider';
import { LinkProps } from 'components/typography/Link';

const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;

const ListItem = styled.li<{ hasBg?: boolean }>`
    padding: ${spacings.nudge * 3}px 0;

    & + & {
        border-top: 1px solid
            ${({ theme, hasBg }) =>
                hasBg
                    ? color(theme).elementBg.light
                    : color(theme).elementBg.medium};
    }

    &:first-of-type {
        border-top: 1px solid
            ${({ theme, hasBg }) =>
                hasBg
                    ? color(theme).elementBg.light
                    : color(theme).elementBg.medium};
    }

    &:last-of-type {
        border-bottom: 1px solid
            ${({ theme, hasBg }) =>
                hasBg
                    ? color(theme).elementBg.light
                    : color(theme).elementBg.medium};
    }
`;

const EventList: React.FC<{
    /** ID value for targeting section with anchor hashes */
    anchorId?: string;

    /** Array of event item settings */
    events?: Omit<EventProps, 'customTag' | 'isInverted' | 'onTagClick'>[];

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
    const { colors } = useLibTheme();
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
                <List>
                    {events?.map((event, i) => (
                        <ListItem key={i} hasBg={hasBg}>
                            <EventBlock
                                {...event}
                                isInverted={isInverted}
                                customTag={customTag}
                            />
                        </ListItem>
                    ))}
                </List>
            </Wrapper>
        </Section>
    );
};

export const EventListComponent = EventList;
export default withLibTheme(EventList);
