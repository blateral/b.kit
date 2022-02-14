import React from 'react';
import styled from 'styled-components';

import { getColors as color, withRange, spacings } from 'utils/styles';
import Section, { mapToBgMode } from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import Copy from 'components/typography/Copy';
import { useLibTheme, withLibTheme } from 'utils/LibThemeProvider';

const View = styled.div``;

const Caption = styled(Copy)`
    margin-bottom: ${spacings.nudge}px;
    padding: 0 ${spacings.nudge * 2}px;
    text-align: left;
`;

const TableContainer = styled.div`
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
`;

const TableBody = styled.table`
    width: 100%;
    max-width: 100%;

    border-collapse: separate;
    border-spacing: 0 ${spacings.nudge}px;

    padding: 0 ${spacings.nudge * 2}px;
`;

const TableHead = styled(Copy)<{
    isInverted?: boolean;
    alignRight?: boolean;
}>`
    text-align: left;
    color: ${({ theme, isInverted }) =>
        isInverted
            ? color(theme).new.text.inverted
            : color(theme).new.text.default};
    background-color: ${({ theme, isInverted }) =>
        isInverted
            ? color(theme).new.elementBg.dark
            : color(theme).new.elementBg.medium};

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
        hasBack
            ? color(theme).new.elementBg.light
            : color(theme).new.elementBg.medium};

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

const TableBlock: React.FC<TableProps> = ({
    row,
    tableTitle,
    rowTitle,
    isInverted = false,
    hasBack = false,
    lastCol = 'left',
}) => {
    return (
        <View>
            <TableContainer>
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
                                        >
                                            {itemText}
                                        </TableData>
                                    );
                                })}
                            </tr>
                        ))}
                    </tbody>
                </TableBody>
            </TableContainer>
        </View>
    );
};

const TableWrapper = styled.div<{ withSeperation?: boolean }>`
    ${({ withSeperation }) =>
        withSeperation &&
        withRange([spacings.spacer, spacings.spacer * 4], 'padding-top')};

    & + & {
        ${withRange([spacings.spacer, spacings.spacer * 2], 'margin-top')};
    }
`;

const Table: React.FC<{
    tableItems: TableProps[];
    bgMode?: 'full' | 'inverted';
}> = ({ bgMode, tableItems }) => {
    const { colors } = useLibTheme();
    const isInverted = bgMode === 'inverted';
    const hasBg = bgMode === 'full' || isInverted;

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
            <Wrapper>
                {tableItems.map((item, i) => {
                    return (
                        <TableWrapper key={i}>
                            <TableBlock
                                {...item}
                                isInverted={isInverted}
                                hasBack={hasBg}
                            />
                        </TableWrapper>
                    );
                })}
            </Wrapper>
        </Section>
    );
};

export const TableComponent = Table;
export default withLibTheme(Table);
