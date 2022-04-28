import React, { forwardRef } from 'react';
import styled from 'styled-components';

import {
    getColors as color,
    withRange,
    spacings,
    getColors,
} from 'utils/styles';
import Section, { mapToBgMode } from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import Copy from 'components/typography/Copy';
import { useLibTheme, withLibTheme } from 'utils/LibThemeProvider';

const View = styled.div`
    &:focus {
        outline: 1px dashed ${({ theme }) => getColors(theme).primary.default};
    }
`;

const Caption = styled(Copy)`
    margin-bottom: ${spacings.nudge}px;
    padding: 0 ${spacings.nudge * 2}px;
    text-align: left;
`;

const TableContainer = styled.div`
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;

    &:focus {
        outline: none;
        border: 1px solid ${({ theme }) => getColors(theme).primary.default};
    }
`;

const TableBody = styled.table`
    width: 100%;
    max-width: 100%;

    border-collapse: separate;
    border-spacing: 0 ${spacings.nudge * 0.5}px;

    padding: 0 ${spacings.nudge * 2}px;
`;

const TableHead = styled(Copy)<{
    isInverted?: boolean;
    alignRight?: boolean;
}>`
    text-align: left;
    color: ${({ theme, isInverted }) =>
        isInverted ? color(theme).text.inverted : color(theme).text.default};
    background-color: ${({ theme, isInverted }) =>
        isInverted
            ? color(theme).elementBg.dark
            : color(theme).elementBg.medium};

    padding: 0 ${spacings.nudge * 3}px;
    height: 56px;
    box-sizing: content-box;

    :last-child {
        padding-right: ${spacings.spacer * 2.5}px;
        text-align: ${({ alignRight }) => (alignRight ? 'right' : 'left')};
    }
`;

const TableData = styled(Copy)<{
    hasBack?: boolean;
    alignRight?: boolean;
}>`
    padding: 0 ${spacings.nudge * 3}px;
    height: 56px;
    box-sizing: content-box;

    background-color: ${({ hasBack, theme }) =>
        hasBack ? color(theme).elementBg.light : color(theme).elementBg.medium};

    :last-child {
        text-align: ${({ alignRight }) => (alignRight ? 'right' : 'left')};
        padding-right: ${spacings.spacer * 2.5}px;
    }
`;

export interface TableProps {
    tableTitle?: string;
    rowTitle?: string[];
    row: {
        cols: string[];
    }[];
    isInverted?: boolean;
    hasBack?: boolean;
    lastCol?: 'left' | 'right';
}

const TableBlock = forwardRef<HTMLDivElement, TableProps>(
    (
        {
            row,
            tableTitle,
            rowTitle,
            isInverted = false,
            hasBack = false,
            lastCol = 'left',
        },
        ref
    ) => {
        return (
            <View ref={ref}>
                <TableContainer tabIndex={1}>
                    <TableBody>
                        {tableTitle && (
                            <Caption
                                renderAs="caption"
                                type="copy-b"
                                isInverted={isInverted}
                            >
                                {tableTitle}
                            </Caption>
                        )}
                        {rowTitle && (
                            <thead>
                                <tr>
                                    {rowTitle.map((item, ii) => (
                                        <TableHead
                                            key={ii}
                                            type="copy-b"
                                            renderAs="th"
                                            isInverted={!isInverted}
                                            alignRight={lastCol === 'right'}
                                        >
                                            {item}
                                        </TableHead>
                                    ))}
                                </tr>
                            </thead>
                        )}
                        <tbody>
                            {row.map(({ cols }, i) => (
                                <tr key={i}>
                                    {cols.map((itemText, ii) => {
                                        return (
                                            <TableData
                                                key={ii}
                                                renderAs="td"
                                                hasBack={hasBack}
                                                alignRight={lastCol === 'right'}
                                                innerHTML={itemText}
                                            />
                                        );
                                    })}
                                </tr>
                            ))}
                        </tbody>
                    </TableBody>
                </TableContainer>
            </View>
        );
    }
);

TableBlock.displayName = 'TableBlock';

const SectionWrapper = styled(Wrapper)`
    & > * + * {
        margin-top: ${spacings.nudge * 2}px;
    }
`;

const TableWrapper = styled(TableBlock)<{ withSeperation?: boolean }>`
    ${({ withSeperation }) =>
        withSeperation &&
        withRange([spacings.spacer, spacings.spacer * 4], 'padding-top')};

    & + & {
        ${withRange([spacings.spacer, spacings.spacer * 2], 'margin-top')};
    }
`;

const Table: React.FC<{
    /** ID value for targeting section with anchor hashes */
    anchorId?: string;

    tableItems: TableProps[];
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
            <SectionWrapper>
                {tableItems.map((item, i) => {
                    return (
                        <TableWrapper
                            key={i}
                            {...item}
                            isInverted={isInverted}
                            hasBack={hasBg}
                        />
                    );
                })}
            </SectionWrapper>
        </Section>
    );
};

export const TableComponent = Table;
export default withLibTheme(Table);
