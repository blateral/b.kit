import React from 'react';
import Section, { mapToBgMode } from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import EventBlock, { EventProps } from 'components/blocks/EventBlock';
import styled from 'styled-components';
import { getColors, spacings } from 'utils/styles';
import { useLibTheme } from 'utils/LibThemeProvider';

const List = styled.div`
    list-style: none;
    margin: 0;
    padding: 0;
`;

const ListItem = styled.div`
    padding-top: ${spacings.nudge * 5}px;
    padding-bottom: ${spacings.nudge * 5}px;

    &:first-child {
        padding-top: 0;
    }

    &:last-child {
        padding-bottom: 0;
    }

    & + & {
        border-top: 1px solid
            ${({ theme }) => getColors(theme).new.sectionBg.medium};
    }
`;

const EventList: React.FC<{
    events?: EventProps[];
    bgMode?: 'inverted' | 'full';
}> = ({ events, bgMode }) => {
    const isInverted = bgMode === 'inverted';
    const { colors } = useLibTheme();
    return (
        <Section
            addSeperation
            bgColor={
                isInverted
                    ? colors.new.sectionBg.dark
                    : bgMode
                    ? colors.new.sectionBg.medium
                    : colors.new.sectionBg.light
            }
            bgMode={mapToBgMode(bgMode)}
        >
            <Wrapper addWhitespace>
                <List>
                    {events &&
                        events.map((event, i) => {
                            return (
                                <ListItem key={i}>
                                    <EventBlock
                                        isInverted={isInverted}
                                        {...event}
                                    />
                                </ListItem>
                            );
                        })}
                </List>
            </Wrapper>
        </Section>
    );
};

export default EventList;
