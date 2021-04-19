import * as React from 'react';
import styled from 'styled-components';
import Copy from '../typography/Copy';
import { getColors as color, spacings } from 'utils/styles';

const TableContainer = styled.div`
    max-width: 100%;
    overflow: auto;
`;

const TableBody = styled.table`
    width: 100%;
    max-width: 100%;
    margin-top: 15px;

    /* border-collapse: collapse;
    border-spacing: 0; */
    border-collapse: separate;
    border-spacing: 0 ${spacings.nudge}px;

    :first-child {
        // background-color: ${({ theme }) => color(theme).light};
    }
`;

const TableHead = styled.th`
    text-align: left;
    color: ${({ theme }) => color(theme).dark};
    background-color: ${({ theme }) => color(theme).light};
    padding: ${spacings.nudge * 3.5}px ${spacings.nudge * 2}px
        ${spacings.nudge * 3.5}px ${spacings.nudge * 2}px;
    min-width: 60px;
    box-sizing: content-box;

    :last-child {
        padding-right: ${spacings.spacer * 2.5}px;
    }
`;

const TableRow = styled.tr<{ isInverted?: boolean }>`
    & + & {
        /* border-top: 3px solid
            ${({ isInverted, theme }) =>
            isInverted ? color(theme).dark : color(theme).light};
        margin: 5px; */
    }
`;

const TableData = styled.td<{ isInverted?: boolean }>`
    padding: ${spacings.nudge * 3.5}px ${spacings.nudge * 2}px
        ${spacings.nudge * 3.5}px ${spacings.nudge * 2}px;
    min-width: 60px;
    box-sizing: content-box;

    background-color: ${({ isInverted }) => (isInverted ? '#333' : '#F6F6F6')};

    :last-child {
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
}

const TableBlock: React.FC<TableProps> = ({
    row,
    tableTitle,
    rowTitle,
    isInverted,
}) => {
    return (
        <div>
            {tableTitle && (
                <Copy type="copy-b" isInverted={isInverted}>
                    {tableTitle}
                </Copy>
            )}
            <TableContainer>
                <TableBody>
                    {rowTitle && (
                        <TableRow isInverted={isInverted}>
                            {rowTitle.map((item, ii) => {
                                return <TableHead key={ii}>{item}</TableHead>;
                            })}
                        </TableRow>
                    )}

                    {row.map(({ cols }, i) => (
                        <TableRow key={i} isInverted={isInverted}>
                            {cols.map((itemText, ii) => {
                                return (
                                    <TableData key={ii} isInverted={isInverted}>
                                        <Copy isInverted={isInverted}>
                                            {itemText}
                                        </Copy>
                                    </TableData>
                                );
                            })}
                        </TableRow>
                    ))}
                </TableBody>
            </TableContainer>
        </div>
    );
};

export default TableBlock;
