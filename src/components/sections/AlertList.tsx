import React from 'react';
import styled from 'styled-components';

import { mq, spacings } from 'utils/styles';
import Wrapper from 'components/base/Wrapper';
import Section, { mapToBgMode } from 'components/base/Section';
import Alert, { AlertProps } from '../blocks/Alert';
import { useLibTheme, withLibTheme } from 'utils/LibThemeProvider';
import { useEqualSheetHeight } from 'utils/useEqualSheetHeight';

const List = styled.ul`
    margin-top: -${spacings.nudge * 2}px;
    margin-left: -${spacings.nudge * 2}px;
    padding: 0;
    list-style: none;

    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;

    @media ${mq.medium} {
        margin-top: -${spacings.spacer}px;
        margin-left: -${spacings.spacer}px;
    }
`;

const ListItem = styled.li<{ itemsPerRow: number }>`
    padding-top: ${spacings.nudge * 2}px;
    padding-left: ${spacings.nudge * 2}px;
    flex: 1 1 100%;

    @media ${mq.medium} {
        flex: 0 1 50%;
        max-width: 50%;

        padding-top: ${spacings.spacer}px;
        padding-left: ${spacings.spacer}px;
    }

    @media ${mq.large} {
        flex: 0 1 ${({ itemsPerRow }) => (1 / itemsPerRow) * 100}%;
        max-width: 600px;

        padding-top: ${spacings.spacer}px;
        padding-left: ${spacings.spacer}px;
    }
`;

const AlertList: React.FC<{
    /** ID value for targeting section with anchor hashes */
    anchorId?: string;

    /** Array of alert items */
    items?: Pick<AlertProps, 'title' | 'date' | 'description' | 'link'>[];

    /** Section background */
    bgMode?: 'full' | 'inverted';

    /** Function to inject custom alert icon */
    customIcon?: (props: { isInverted?: boolean }) => React.ReactNode;
}> = ({ anchorId, items, bgMode, customIcon }) => {
    const { colors } = useLibTheme();

    const isInverted = bgMode === 'inverted';
    const hasBg = bgMode === 'full';
    const alertCount = items?.length || 0;
    const itemsPerRow = alertCount % 3 === 1 || alertCount === 2 ? 2 : 3;

    const { sheetRefs: alertRefs } = useEqualSheetHeight<HTMLLIElement>({
        listLength: alertCount,
        identifiers: ['[data-sheet="alert"]'],
        responsive: {
            small: 1,
            medium: 2,
            semilarge: 2,
            large: itemsPerRow,
            xlarge: itemsPerRow,
        },
    });

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
                <List>
                    {items?.map((item, i) => (
                        <ListItem
                            key={i}
                            itemsPerRow={itemsPerRow}
                            ref={alertRefs[i]}
                        >
                            <Alert
                                {...item}
                                isInverted={isInverted}
                                customIcon={customIcon}
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
