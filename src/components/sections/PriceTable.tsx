import PriceTag, { PriceTagProps } from 'components/blocks/PriceTag';
import { getColors } from 'utils/styles';
import React from 'react';
import styled, { ThemeContext } from 'styled-components';
import Section, { mapToBgMode } from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import { withLibTheme } from 'utils/LibThemeProvider';
import { useEqualSheetHeight } from 'utils/useEqualSheetHeight';
import Grid from 'components/base/Grid';

const PriceTagContainer = styled.div`
    & > * {
        min-height: 400px;
    }
`;

const PriceTable: React.FC<{
    items: Array<Omit<PriceTagProps, 'isInverted'>>;
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
                    ? getColors(theme).new.bg.inverted
                    : hasBg
                    ? getColors(theme).new.bg.mono
                    : getColors(theme).new.bg.default
            }
            bgMode={mapToBgMode(bgMode)}
        >
            <Wrapper addWhitespace>
                <Grid.Row halign="center">
                    {items.map((item, i) => (
                        <Grid.Col
                            key={i}
                            semilarge={{ span: 6 / 12 }}
                            large={{ span: 4 / 12 }}
                        >
                            <PriceTagContainer ref={cardRefs[i]}>
                                <PriceTag
                                    {...item}
                                    isInverted={isInverted}
                                    hasBackground={hasBg}
                                />
                            </PriceTagContainer>
                        </Grid.Col>
                    ))}
                </Grid.Row>
            </Wrapper>
        </Section>
    );
};

export const PriceTableComponent = PriceTable;
export default withLibTheme(PriceTable);
