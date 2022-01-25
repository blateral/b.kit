import PriceTag, { PriceTagProps } from 'components/blocks/PriceTag';
import { spacings, mq, getColors } from 'utils/styles';
import React from 'react';
import styled, { ThemeContext } from 'styled-components';
import Section, { mapToBgMode } from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import { withLibTheme } from 'utils/LibThemeProvider';
import { useEqualSheetHeight } from 'utils/useEqualSheetHeight';

const PriceFlex = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;

    margin: -${spacings.spacer * 1.5}px;
    margin-right: -${spacings.nudge * 3}px;
    margin-left: -${spacings.nudge * 3}px;
`;

const PriceTagContainer = styled.div`
    flex: 1 1 100%;
    padding: ${spacings.spacer * 1.5}px;
    padding-right: ${spacings.nudge * 3}px;
    padding-left: ${spacings.nudge * 3}px;

    & > * {
        min-height: 400px;
    }

    @media ${mq.medium} {
        flex: 0 1 33.33%;

        & > * {
            max-width: 340px;
        }
    }

    @media ${mq.large} {
        max-width: 33.33%;
    }
`;

const PriceTable: React.FC<{
    items: Array<PriceTagProps>;
    bgMode?: 'full' | 'inverted';
}> = ({ items, bgMode }) => {
    const isInverted = bgMode === 'inverted';
    const hasBg = bgMode === 'full';
    const priceTagCount = items?.length || 0;

    const theme = React.useContext(ThemeContext);

    const { sheetRefs: cardRefs } = useEqualSheetHeight({
        listLength: priceTagCount,
        identifiers: [
            '[data-sheet="superTitle"]',
            '[data-sheet="title"]',
            '[data-sheet="desc"]',
        ],
        responsive: {
            small: 1,
            medium: 1,
            semilarge: 2,
            large: 3,
            xlarge: 3,
        },
    });

    return (
        <Section
            addSeperation
            bgColor={
                isInverted
                    ? getColors(theme).dark
                    : hasBg
                    ? getColors(theme).mono.light
                    : 'transparent'
            }
            bgMode={mapToBgMode(bgMode)}
        >
            <Wrapper addWhitespace>
                <PriceFlex>
                    {items.map((item, i) => {
                        return (
                            <PriceTagContainer key={i} ref={cardRefs[i]}>
                                <PriceTag
                                    {...item}
                                    isInverted={isInverted}
                                    hasBackground={hasBg}
                                />
                            </PriceTagContainer>
                        );
                    })}
                </PriceFlex>
            </Wrapper>
        </Section>
    );
};

export const PriceTableComponent = PriceTable;
export default withLibTheme(PriceTable);
