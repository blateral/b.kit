import React from 'react';

import Section, { mapToBgMode } from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import { useLibTheme, withLibTheme } from 'utils/LibThemeProvider';
import TableBlock, { TableProps } from 'components/blocks/TableBlock';
import styled from 'styled-components';
import { spacings } from 'utils/styles';

const TableSection = styled(Section)`
    overflow: unset;
`;

const TableWrapper = styled(Wrapper)`
    & > * + * {
        margin-top: ${spacings.spacer}px;
    }
`;

export type TableItem = Omit<
    TableProps,
    'isInverted' | 'hasBack' | 'ariaControlLeft' | 'ariaControlRight'
>;

const Table: React.FC<{
    /** ID value for targeting section with anchor hashes */
    anchorId?: string;

    /** Table rows and columns */
    tableItems: TableItem[];

    /** Section background */
    bgMode?: 'full' | 'inverted';

    /** Optional aria controls for left buttons */
    ariaControlLeft?: string;
    /** Optional aria controls for right buttons */
    ariaControlRight?: string;
}> = ({ anchorId, bgMode, tableItems, ariaControlLeft, ariaControlRight }) => {
    const { colors } = useLibTheme();
    const isInverted = bgMode === 'inverted';
    const hasBg = bgMode === 'full' || isInverted;

    return (
        <TableSection
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
                            key={i}
                            {...item}
                            isInverted={isInverted}
                            hasBack={hasBg}
                            ariaControlLeft={ariaControlLeft}
                            ariaControlRight={ariaControlRight}
                        />
                    );
                })}
            </TableWrapper>
        </TableSection>
    );
};

export const TableComponent = Table;
export default withLibTheme(Table);
