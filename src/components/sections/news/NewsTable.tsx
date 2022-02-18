import Section, { mapToBgMode } from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import Actions from 'components/blocks/Actions';
import Copy from 'components/typography/Copy';
import * as React from 'react';
import styled, { ThemeContext } from 'styled-components';
import { hexToRgba } from 'utils/hexRgbConverter';
import { getColors as color, mq, spacings, withRange } from 'utils/styles';
import { withLibTheme } from 'utils/LibThemeProvider';

const TableView = styled.div`
    & > * + * {
        margin-top: ${spacings.nudge * 2}px;
    }
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
    border-spacing: 0 ${spacings.nudge / 2}px;

    @media ${mq.medium} {
        padding: 0;
    }
`;

const TableHead = styled.th<{ hasBack?: boolean; isInverted?: boolean }>`
    text-align: left;
    color: ${({ theme }) => color(theme).dark};
    background-color: ${({ theme, hasBack, isInverted }) =>
        hasBack && !isInverted
            ? color(theme).new.elementBg.light
            : color(theme).new.elementBg.medium};

    padding: ${spacings.nudge * 2}px ${spacings.nudge * 3}px;
    min-width: 60px;
    box-sizing: content-box;

    :last-child {
        padding-right: ${spacings.spacer}px;
    }
`;

const TableData = styled.td<{ isInverted?: boolean; hasBack?: boolean }>`
    padding: ${spacings.nudge * 2}px ${spacings.nudge * 3}px;
    min-width: 60px;
    box-sizing: content-box;

    background-color: ${({ isInverted, hasBack, theme }) =>
        hexToRgba(
            hasBack && !isInverted
                ? color(theme).new.elementBg.light
                : color(theme).new.elementBg.medium,
            isInverted ? 0.2 : 0.4
        )};

    :last-child {
        padding-right: ${spacings.spacer}px;
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
}

const TableBlock: React.FC<TableProps> = ({
    row,
    tableTitle,
    rowTitle,
    isInverted = false,
    hasBack = false,
}) => {
    return (
        <TableView>
            {tableTitle && (
                <Copy type="copy-b" isInverted={isInverted}>
                    {tableTitle}
                </Copy>
            )}
            <TableContainer>
                <TableBody>
                    {rowTitle && (
                        <thead>
                            <tr>
                                {rowTitle.map((item, ii) => {
                                    return (
                                        <TableHead
                                            hasBack={hasBack}
                                            isInverted={isInverted}
                                            key={ii}
                                        >
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
                                            hasBack={hasBack}
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
        </TableView>
    );
};

const TableWrapper = styled.div<{ withSeperation?: boolean }>`
    ${({ withSeperation }) =>
        withSeperation &&
        withRange([spacings.nudge * 3, spacings.spacer], 'padding-top')};

    & + & {
        ${withRange([spacings.nudge * 3, spacings.spacer], 'margin-top')};
    }
`;

const StyledActions = styled(Actions)`
    margin-top: ${spacings.spacer}px;
`;

const NewsTable: React.FC<{
    tableItems: TableProps[];

    primaryAction?: (isInverted?: boolean) => React.ReactNode;
    secondaryAction?: (isInverted?: boolean) => React.ReactNode;

    bgMode?: 'full' | 'inverted';
}> = ({ bgMode, tableItems, primaryAction, secondaryAction }) => {
    const theme = React.useContext(ThemeContext);
    const isInverted = bgMode === 'inverted';
    const hasBg = bgMode === 'full';

    return (
        <Section
            addSeperation
            bgColor={
                isInverted
                    ? color(theme).new.sectionBg.dark
                    : hasBg
                    ? color(theme).new.sectionBg.medium
                    : 'transparent'
            }
            bgMode={mapToBgMode(bgMode, true)}
        >
            <Wrapper addWhitespace clampWidth="small">
                {tableItems.map((item, i) => {
                    return (
                        <TableWrapper key={i}>
                            <TableBlock
                                {...item}
                                hasBack={hasBg}
                                isInverted={isInverted}
                            />
                        </TableWrapper>
                    );
                })}
                {(primaryAction || secondaryAction) && (
                    <StyledActions
                        primary={primaryAction && primaryAction(isInverted)}
                        secondary={
                            secondaryAction && secondaryAction(isInverted)
                        }
                    />
                )}
            </Wrapper>
        </Section>
    );
};

export const NewsTableComponent = NewsTable;
export default withLibTheme(NewsTable);
