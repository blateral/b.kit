import ButtonLeft from 'components/base/icons/ButtonLeft';
import ButtonRight from 'components/base/icons/ButtonRight';
import Copy from 'components/typography/Copy';
import React, { FC, useEffect, useRef } from 'react';
import styled from 'styled-components';

import { getColors as color, spacings } from 'utils/styles';

const View = styled.div`
    display: grid;
    position: relative;

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
    position: relative;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;

    grid-column: 1;
    grid-row: 1;

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

const ButtonContainer = styled.button<{ isVisible?: boolean }>`
    position: sticky;
    bottom: 40px;
    opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
    pointer-events: ${({ isVisible }) => (isVisible ? 'all' : 'none')};
    border: none;
    background: none;

    grid-column: 1;
    grid-row: 1;
    align-self: end;
    margin: ${spacings.spacer}px ${spacings.nudge * 2}px;

    cursor: ${({ isVisible }) => (isVisible ? 'pointer' : 'default')};
    pointer-events: none;

    transition: opacity ease-in-out 0.2s;

    &:hover {
        opacity: ${({ isVisible }) => (isVisible ? 0.7 : 0)};
    }

    & > * {
        pointer-events: all;
    }
`;

const ButtonRightContainer = styled(ButtonContainer)`
    float: right;
    justify-self: end;
`;

const ButtonLeftContainer = styled(ButtonContainer)`
    float: left;
    justify-self: start;
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
}

const TableBlock: FC<TableProps> = ({
    row,
    tableTitle,
    rowTitle,
    isInverted = false,
    hasBack = false,
    lastCol = 'left',
}) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [showButtonRight, setShowButtonRight] = React.useState(false);
    const [showButtonLeft, setShowButtonLeft] = React.useState(false);

    useEffect(() => {
        const scrollEl = scrollRef.current;
        if (!scrollEl) return;

        const calcControls = () => {
            if (scrollEl.scrollWidth > scrollEl.offsetWidth) {
                setShowButtonLeft(scrollEl.scrollLeft > 0);
                setShowButtonRight(
                    scrollEl.scrollLeft + scrollEl.offsetWidth <
                        scrollEl.scrollWidth
                );
            } else {
                setShowButtonLeft(false);
                setShowButtonRight(false);
            }
        };

        calcControls();
        window.addEventListener('resize', calcControls);
        scrollEl.addEventListener('scroll', calcControls);

        return () => {
            window.removeEventListener('resize', calcControls);
            scrollEl.removeEventListener('scroll', calcControls);
        };
    }, []);

    const handleRightClick = () => {
        const scrollEl = scrollRef.current;
        if (!scrollEl) return;

        scrollEl?.scrollBy({ left: scrollEl.offsetWidth, behavior: 'smooth' });
    };

    const handleLeftClick = () => {
        const scrollEl = scrollRef.current;
        if (!scrollEl) return;

        scrollEl?.scrollBy({
            left: scrollEl.offsetWidth * -1,
            behavior: 'smooth',
        });
    };

    const showButtons = rowTitle || row.length > 0;

    return (
        <View>
            <TableContainer tabIndex={1} ref={scrollRef}>
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
            <ButtonLeftContainer
                style={{
                    marginTop: rowTitle && row.length > 1 ? '80px' : undefined,
                }}
                isVisible={showButtons && showButtonLeft}
                onClick={handleLeftClick}
            >
                <ButtonLeft />
            </ButtonLeftContainer>
            <ButtonRightContainer
                style={{
                    marginTop: rowTitle && row.length > 1 ? '80px' : undefined,
                }}
                isVisible={showButtons && showButtonRight}
                onClick={handleRightClick}
            >
                <ButtonRight />
            </ButtonRightContainer>
        </View>
    );
};

TableBlock.displayName = 'TableBlock';

export default TableBlock;
