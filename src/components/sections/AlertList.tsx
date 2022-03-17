import React from 'react';
import styled from 'styled-components';

import { mq, spacings } from 'utils/styles';
import Wrapper from 'components/base/Wrapper';
import Section, { mapToBgMode } from 'components/base/Section';
import Alert, { AlertProps } from '../blocks/Alert';
import { useLibTheme, withLibTheme } from 'utils/LibThemeProvider';

const List = styled.ul`
    margin-top: -${spacings.nudge * 2}px;
    margin-left: -${spacings.nudge * 2}px;
    padding: 0;
    list-style: none;

    display: flex;
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: wrap;

    @media ${mq.medium} {
        margin-top: -${spacings.spacer}px;
        margin-left: -${spacings.spacer}px;
    }
`;

const ListItem = styled.li`
    padding-top: ${spacings.nudge * 2}px;
    padding-left: ${spacings.nudge * 2}px;
    flex: 1 0 100%;

    @media ${mq.medium} {
        flex: 1 0 50%;
        padding-top: ${spacings.spacer}px;
        padding-left: ${spacings.spacer}px;
    }
`;

const AlertList: React.FC<{
    /** Array of alert items */
    items?: Pick<AlertProps, 'title' | 'date' | 'description' | 'link'>[];

    /** Section background */
    bgMode?: 'full' | 'inverted';

    /** Function to inject custom alert icon */
    customIcon?: (props: { isInverted?: boolean }) => React.ReactNode;

    /** Function to inject custom title decorator icon */
    customTitleIcon?: (props: { isInverted?: boolean }) => React.ReactNode;
}> = ({ items, bgMode, customIcon, customTitleIcon }) => {
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
                    {items?.map((item, i) => (
                        <ListItem key={i}>
                            <Alert
                                {...item}
                                isInverted={isInverted}
                                customIcon={customIcon}
                                customTitleIcon={customTitleIcon}
                            />
                        </ListItem>
                    ))}
                </List>
            </Wrapper>
        </Section>
    );
};

export const AlertListComponent = AlertList;
export default withLibTheme(AlertList);
