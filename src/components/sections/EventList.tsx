import React from 'react';
import styled from 'styled-components';

import Section, { mapToBgMode } from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import EventBlock, { EventProps } from 'components/blocks/EventBlock';
import { getColors as color, spacings, withRange } from 'utils/styles';
import { useLibTheme, withLibTheme } from 'utils/LibThemeProvider';

const List = styled.ul<{ hasBg?: boolean }>`
    list-style: none;
    margin: 0;
    padding: 0;

    & > * + * {
        border-top: 1px solid
            ${({ theme, hasBg }) =>
                hasBg
                    ? color(theme).new.elementBg.light
                    : color(theme).new.elementBg.medium};
    }
`;

const ListItem = styled.li`
    ${withRange([spacings.nudge * 3, spacings.nudge * 5], 'padding-top')}
    ${withRange([spacings.nudge * 3, spacings.nudge * 5], 'padding-bottom')}

    &:first-child {
        padding-top: 0;
    }

    &:last-child {
        padding-bottom: 0;
    }
`;

const EventList: React.FC<{
    /** ID value for targeting section with anchor hashes */
    anchorId?: string;

    /** Array of event item settings */
    events?: Omit<EventProps, 'customTag' | 'isInverted' | 'onTagClick'>[];

    /** Section background */
    bgMode?: 'inverted' | 'full';

    /**
     * Callback function to handle tag click outside of component
     * */
    onTagClick?: (tag: string) => void;

    /** Function to inject custom tag node */
    customTag?: (props: {
        name: string;
        isInverted?: boolean;
        isActive?: boolean;
        clickHandler?: (ev?: React.SyntheticEvent<HTMLButtonElement>) => void;
    }) => React.ReactNode;
}> = ({ anchorId, events, bgMode, customTag, onTagClick }) => {
    const { colors } = useLibTheme();
    const isInverted = bgMode === 'inverted';
    const hasBg = bgMode === 'full';

    return (
        <Section
            addSeperation
            anchorId={anchorId}
            bgColor={
                isInverted
                    ? colors.new.sectionBg.dark
                    : bgMode
                    ? colors.new.sectionBg.medium
                    : colors.new.sectionBg.light
            }
            bgMode={mapToBgMode(bgMode, true)}
        >
            <Wrapper addWhitespace>
                <List hasBg={hasBg}>
                    {events?.map((event, i) => (
                        <ListItem key={i}>
                            <EventBlock
                                {...event}
                                isInverted={isInverted}
                                customTag={customTag}
                                onTagClick={onTagClick}
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
