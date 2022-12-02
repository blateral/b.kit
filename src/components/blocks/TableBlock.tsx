import Copy from 'components/typography/Copy';
import React, { forwardRef } from 'react';
import styled from 'styled-components';

import { getColors as color, mq, spacings } from 'utils/styles';

const View = styled.div`
    &:focus {
        outline: 1px dashed ${({ theme }) => color(theme).primary.default};
    }

    &:focus:not(:focus-visible) {
        outline: none;
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
        border: 1px solid ${({ theme }) => color(theme).primary.default};
    }

    &:focus:not(:focus-visible) {
        outline: none;
        border: none;
    }

    &::-webkit-scrollbar {
        display: none;
        scrollbar-width: none;
    }
`;

const TableBody = styled.table<{ isNewsTable?: boolean }>`
    width: 100%;
    max-width: 100%;

    border-collapse: separate;
    border-spacing: 0 ${spacings.nudge * 0.5}px;

    padding: 0 ${spacings.nudge * 2}px;

    @media ${mq.large} {
        padding: ${({ isNewsTable }) =>
            isNewsTable ? `0` : `0 ${spacings.nudge * 2}px`};
    }
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
    row: Array<{
        cols: string[];
    }>;
    isInverted?: boolean;
    hasBack?: boolean;
    lastCol?: 'left' | 'right';
    isNewsTable?: boolean;
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
            isNewsTable,
        },
        ref
    ) => {
        return (
            <View ref={ref}>
                <TableContainer tabIndex={1}>
                    <TableBody isNewsTable={isNewsTable}>
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

export default TableBlock;
