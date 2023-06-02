import ButtonLeft from 'components/base/icons/ButtonLeft';
import ButtonRight from 'components/base/icons/ButtonRight';
import Copy from 'components/typography/Copy';
import React, { FC, useEffect, useRef } from 'react';
import styled from 'styled-components';

import { getColors as color, spacings } from 'utils/styles';

const View = styled.div`
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

const ButtonContainer = styled.button`
    position: absolute;
    bottom: 40px;
`;

const ButtonRightContainer = styled(ButtonContainer)`
    right: 20px;
`;

const ButtonLeftContainer = styled(ButtonContainer)`
    left: 20px;
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
        // bitte Interaktionen mit dem DOM immer nur in einem useEffect oder einem Callback von z.B. onClick, onChange
        // da das DOM nur im Browser und nicht auf dem Server existiert!

        const scrollEl = scrollRef.current;
        if (!scrollEl) return;

        const calcControls = () => {
            if (scrollEl.scrollWidth > scrollEl.offsetWidth) {
                console.log(
                    'overflow',
                    scrollEl.scrollLeft, // scroll position innerhalb des view containers (linke Kante des Scrollelements)
                    scrollEl.offsetWidth, // sichtbarer Bereich der Tabelle bzw. des scrollbaren Bereichs
                    scrollEl.scrollWidth // Breite des kompletten, auch nicht sichtbaren, scrollbaren Bereichs
                );

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

        // wenn component von React wieder aus dem DOM entfernt wird bitte event listener entfernen sonst laufen die weiter
        // auch wichtig bei Sachen wie setTimeout etc.
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
            {showButtonLeft && (
                <ButtonLeftContainer onClick={handleLeftClick}>
                    <ButtonLeft />
                </ButtonLeftContainer>
            )}
            {showButtonRight && (
                <ButtonRightContainer onClick={handleRightClick}>
                    <ButtonRight />
                </ButtonRightContainer>
            )}
        </View>
    );
};

TableBlock.displayName = 'TableBlock';

export default TableBlock;
