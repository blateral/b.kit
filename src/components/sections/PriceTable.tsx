import React from 'react';
import styled from 'styled-components';

import PriceTag, { PriceTagProps } from 'components/blocks/PriceTag';
import Section, { mapToBgMode } from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import { useLibTheme, withLibTheme } from 'utils/LibThemeProvider';
import { useEqualSheetHeight } from 'utils/useEqualSheetHeight';
import Grid from 'components/base/Grid';

const StyledPriceTag = styled(PriceTag)`
    min-height: 400px;
`;

const PriceTable: React.FC<{
    /** Array of PriceTag card items */
    items: Array<Omit<PriceTagProps, 'isInverted'>>;
    /** Center text inside card items */
    isCentered?: boolean;
    /** Section background */
    bgMode?: 'full' | 'inverted';
}> = ({ items, isCentered, bgMode }) => {
    const isInverted = bgMode === 'inverted';
    const hasBg = bgMode === 'full';
    const priceTagCount = items?.length || 0;

    const { colors } = useLibTheme();

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
                    ? colors.new.sectionBg.dark
                    : hasBg
                    ? colors.new.sectionBg.medium
                    : colors.new.sectionBg.light
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
                            <StyledPriceTag
                                key={i}
                                ref={cardRefs[i]}
                                {...item}
                                isInverted={isInverted}
                                isCentered={isCentered}
                                hasBackground={hasBg}
                            />
                        </Grid.Col>
                    ))}
                </Grid.Row>
            </Wrapper>
        </Section>
    );
};

export const PriceTableComponent = PriceTable;
export default withLibTheme(PriceTable);
