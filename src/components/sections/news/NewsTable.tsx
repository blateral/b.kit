import React from 'react';

import Section, { mapToBgMode } from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import { useLibTheme, withLibTheme } from 'utils/LibThemeProvider';
import TableBlock, { TableProps } from 'components/blocks/TableBlock';
import styled from 'styled-components';
import { spacings } from 'utils/styles';

const TableWrapper = styled(Wrapper)`
    & > * + * {
        margin-top: ${spacings.spacer}px;
    }
`;

const NewsTable: React.FC<{
    /** ID value for targeting section with anchor hashes */
    anchorId?: string;

    /** Table rows and columns */
    tableItems: TableProps[];

    /** Section background */
    bgMode?: 'full' | 'inverted';
}> = ({ anchorId, bgMode, tableItems }) => {
    const { colors } = useLibTheme();
    const isInverted = bgMode === 'inverted';
    const hasBg = bgMode === 'full' || isInverted;

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
            <TableWrapper>
                {tableItems.map((item, i) => {
                    return (
                        <TableBlock
                            {...item}
                            key={i}
                            hasBack={hasBg}
                            isInverted={isInverted}
                        />
                    );
                })}
            </TableWrapper>
        </Section>
    );
};

export const NewsTableComponent = NewsTable;
export default withLibTheme(NewsTable);
