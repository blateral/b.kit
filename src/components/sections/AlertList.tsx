import Section, { mapToBgMode } from 'components/base/Section';
import React from 'react';
import Alert, { AlertProps } from '../blocks/Alert';
import { useLibTheme } from 'utils/LibThemeProvider';
import Wrapper from 'components/base/Wrapper';
import styled from 'styled-components';
import { mq, spacings } from 'utils/styles';

const List = styled.ul`
    margin: -${spacings.nudge * 2}px;
    padding: 0;
    list-style: none;

    display: flex;
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    padding: ${spacings.nudge * 2}px;
    flex: 1 0 100%;

    @media ${mq.medium} {
        flex: 0 0 50%;
    }
`;

const AlertList: React.FC<{
    items: AlertProps[];
    bgMode?: 'full' | 'inverted';
}> = ({ items, bgMode }) => {
    const { colors } = useLibTheme();

    const isInverted = bgMode === 'inverted';
    const hasBg = bgMode === 'full';
    return (
        <Section
            addSeperation
            bgColor={
                isInverted
                    ? colors.new.sectionBg.dark
                    : hasBg
                    ? colors.new.sectionBg.medium
                    : colors.new.sectionBg.light
            }
            bgMode={mapToBgMode(bgMode, true)}
        >
            <Wrapper addWhitespace>
                <List>
                    {items.map((item, i) => {
                        return (
                            <ListItem key={i}>
                                <Alert {...item} />
                            </ListItem>
                        );
                    })}
                </List>
            </Wrapper>
        </Section>
    );
};

export default AlertList;
