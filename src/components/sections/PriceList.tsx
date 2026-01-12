import Section, { mapToBgMode } from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import Copy from 'components/typography/Copy';
import React from 'react';
import styled from 'styled-components';
import { useLibTheme, withLibTheme } from 'utils/LibThemeProvider';
import { generatePriceList, JsonLdPriceListProps } from 'utils/structuredData';
import { getColors as color, mq, spacings } from 'utils/styles';

const ItemList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;

    & > * + * {
        margin-top: ${spacings.nudge}px;
    }
`;

const ItemBlock = styled.li<{ hasBg?: boolean }>`
    max-width: 100%;
    padding: ${spacings.nudge * 2}px;

    background: ${({ theme, hasBg }) =>
        hasBg ? color(theme).elementBg.light : color(theme).elementBg.medium};

    & > * + * {
        margin-top: ${spacings.nudge * 2}px;
    }

    @media ${mq.semilarge} {
        padding: ${spacings.nudge * 3}px;
    }
`;

const ListHead = styled.div`
    display: flex;
    justify-content: space-between;

    & > * + * {
        margin-left: ${spacings.nudge * 2}px;
    }
`;

const Title = styled(Copy)`
    max-width: 880px;
`;

const Price = styled(Copy)`
    white-space: nowrap;
`;

const Description = styled(Copy)`
    max-width: 880px;
`;

export interface PriceItems {
    /** Title of the price item */
    title?: string;
    /** Description text of price item (richtext) */
    text?: string;
    /** The price value (Currency not included) */
    price?: string;
}

export const PriceBlock: React.FC<PriceItems & { hasBg?: boolean }> = ({
    text,
    price,
    hasBg = false,
    title,
}) => {
    return (
        <ItemBlock hasBg={hasBg}>
            <ListHead>
                {title && <Title type="copy-b">{title}</Title>}
                {price && <Price type="copy-b">{price}</Price>}
            </ListHead>
            {text && <Description type="copy" innerHTML={text} />}
        </ItemBlock>
    );
};

export interface PriceListCustonJsonLdFnProps {
    /** Array with price items */
    items?: PriceItems[];
}
export type PriceListCustonJsonLdFn = (
    props: PriceListCustonJsonLdFnProps
) => JsonLdPriceListProps | undefined;

const PriceList: React.FC<{
    /** ID value for targeting section with anchor hashes */
    anchorId?: string;

    /** Array with price items */
    items?: PriceItems[];

    /** Section background */
    bgMode?: 'inverted' | 'full';

    /** Aria label for the list */
    listAriaLabel?: string;

    /** JSON-LD type for the price list */
    jsonLdType?: 'service' | 'product';

    /** Custom JSON-LD data for the price list */
    customJsonLdData?: PriceListCustonJsonLdFn;
}> = ({
    anchorId,
    bgMode,
    items,
    listAriaLabel = 'List of items with price information',
    jsonLdType = 'service',
    customJsonLdData,
}) => {
    const { colors } = useLibTheme();
    const isInverted = bgMode === 'inverted';
    const hasBack = isInverted || bgMode === 'full';

    return (
        <Section
            addSeperation
            anchorId={anchorId}
            bgColor={
                isInverted
                    ? colors.sectionBg.dark
                    : bgMode === 'full'
                    ? colors.sectionBg.medium
                    : colors.sectionBg.light
            }
            bgMode={mapToBgMode(bgMode, true)}
        >
            {customJsonLdData
                ? generatePriceList(customJsonLdData({ items }))
                : generatePriceList({
                      type: jsonLdType,
                      items: items?.map((item) => ({
                          name: item.title,
                          description: item.text,
                          price: item.price,
                      })),
                  })}

            <Wrapper addWhitespace>
                <ItemList aria-label={listAriaLabel}>
                    {items?.map((item, i) => (
                        <PriceBlock key={i} {...item} hasBg={hasBack} />
                    ))}
                </ItemList>
            </Wrapper>
        </Section>
    );
};

export const PriceListComponent = PriceList;
export default withLibTheme(PriceList);
