import React from 'react';
import styled from 'styled-components';

import PriceTag, { PriceTagProps } from 'components/blocks/PriceTag';
import Section, { mapToBgMode } from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import { useLibTheme, withLibTheme } from 'utils/LibThemeProvider';
import { useEqualSheetHeight } from 'utils/useEqualSheetHeight';
import { gridSettings } from 'components/base/Grid';
import { mq } from 'utils/styles';

const Tag = styled(PriceTag)`
    min-height: 500px;
`;

const Items = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    margin-top: -${gridSettings.gutter}px;
    margin-left: -${gridSettings.gutter}px;

    & > * {
        flex: 1 1 25%;
        min-width: 286px;
        max-width: 320px;
        margin-top: ${gridSettings.gutter}px;
        margin-left: ${gridSettings.gutter}px;
    }

    @media ${mq.large} {
        & > * {
            max-width: 286px;
        }
    }
`;

const PriceTable: React.FC<{
    /** ID value for targeting section with anchor hashes */
    anchorId?: string;
    /** Array of PriceTag card items */
    items: Array<Omit<PriceTagProps, 'isInverted'>>;
    /** Center text inside card items */
    isCentered?: boolean;
    /** Section background */
    bgMode?: 'full' | 'inverted';
}> = ({ anchorId, items, isCentered, bgMode }) => {
    const isInverted = bgMode === 'inverted';
    const hasBg = bgMode === 'full';
    const priceTagCount = items?.length || 0;

    const { colors } = useLibTheme();

    const { sheetRefs: cardRefs } = useEqualSheetHeight<HTMLDivElement>({
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
            anchorId={anchorId}
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
                <Items>
                    {items?.map((item, i) => (
                        <Tag
                            key={i}
                            ref={cardRefs[i]}
                            {...item}
                            isInverted={isInverted}
                            isCentered={isCentered}
                            hasBackground={hasBg}
                        />
                    ))}
                </Items>
            </Wrapper>
        </Section>
    );
};

export const PriceTableComponent = PriceTable;
export default withLibTheme(PriceTable);
