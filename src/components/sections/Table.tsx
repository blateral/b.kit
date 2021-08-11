import * as React from 'react';
import styled, { ThemeContext } from 'styled-components';

import { getColors as color, withRange, spacings, mq } from 'utils/styles';
import Section, { mapToBgMode } from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import Copy from 'components/typography/Copy';
import { hexToRgba } from 'utils/hexRgbConverter';

const TableContainer = styled.div`
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;

    /* @media ${mq.semilarge} {
        overflow-x: auto;
        overflow-y: hidden;
        white-space: pre-wrap;
        margin-right: 0px;
    } */
`;

const TableBody = styled.table`
    width: 100%;
    max-width: 100%;
    margin-top: ${spacings.nudge * 2}px;

    border-collapse: separate;
    border-spacing: 0 ${spacings.nudge}px;

    padding: 0 ${spacings.nudge * 2}px;

    @media ${mq.medium} {
        padding-left: ${spacings.spacer}px;
        padding-right: ${spacings.spacer}px;
    }

    @media ${mq.semilarge} {
        padding-left: ${(1 / 28) * 100}%;
        padding-left: ${`
                      max(
                          ${spacings.spacer}px,
                          ${(1 / 28) * 100}%
                      );
                  `};
        padding-right: ${spacings.spacer}px;
    }

    @media ${mq.xlarge} {
        padding-left: ${(1 / 28) * spacings.wrapper}px;
        padding-right: ${spacings.spacer}px;
    }
`;

const TableHead = styled.th`
    text-align: left;
    color: ${({ theme }) => color(theme).dark};
    background-color: ${({ theme }) => color(theme).light};
    padding: ${spacings.nudge * 3.5}px ${spacings.nudge * 2}px
        ${spacings.nudge * 3.5}px ${spacings.spacer * 2}px;
    min-width: 60px;
    box-sizing: content-box;

    :last-child {
        padding-right: ${spacings.spacer * 2.5}px;
    }
`;

const TableData = styled.td<{ isInverted?: boolean }>`
    padding: ${spacings.nudge * 3.5}px ${spacings.nudge * 2}px
        ${spacings.nudge * 3.5}px ${spacings.spacer * 2}px;
    min-width: 60px;
    box-sizing: content-box;

    background-color: ${({ isInverted, theme }) =>
        hexToRgba(color(theme).light, isInverted ? 0.2 : 0.4)};

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
                <Wrapper addWhitespace>
                    <Copy type="copy-b" isInverted={isInverted}>
                        {tableTitle}
                    </Copy>
                </Wrapper>
            )}
            <TableContainer>
                <TableBody>
                    {rowTitle && (
                        <thead>
                            <tr>
                                {rowTitle.map((item, ii) => {
                                    return (
                                        <TableHead key={ii}>
                                            <Copy type="copy-b">{item}</Copy>
                                        </TableHead>
                                    );
                                })}
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
                                            isInverted={isInverted}
                                        >
                                            <Copy isInverted={isInverted}>
                                                {itemText}
                                            </Copy>
                                        </TableData>
                                    );
                                })}
                            </tr>
                        ))}
                    </tbody>
                </TableBody>
            </TableContainer>
        </div>
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
}> = ({ bgMode = 'full', tableItems }) => {
    const theme = React.useContext(ThemeContext);
    const isInverted = bgMode === 'inverted';

    return (
        <Section
            addSeperation
            bgColor={isInverted ? color(theme).dark : color(theme).mono.light}
            bgMode={bgMode ? mapToBgMode(bgMode, true) : 'full'}
        >
            <Wrapper>
                {tableItems.map((item, i) => {
                    return (
                        <TableWrapper key={i}>
                            <TableBlock {...item} isInverted={isInverted} />
                        </TableWrapper>
                    );
                })}
            </Wrapper>
        </Section>
    );
};

export default Table;
