import React from 'react';
import styled from 'styled-components';
import { getColors as color, mq, spacings } from 'utils/styles';

import Section, { mapToBgMode } from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import Copy from 'components/typography/Copy';
import { useLibTheme, withLibTheme } from 'utils/LibThemeProvider';

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
        hasBg
            ? color(theme).new.elementBg.light
            : color(theme).new.elementBg.medium};

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

const PriceList: React.FC<{
    /** Array with price items */
    items?: PriceItems[];

    /** Section background */
    bgMode?: 'inverted' | 'full';
}> = ({ bgMode, items }) => {
    const { colors } = useLibTheme();
    const isInverted = bgMode === 'inverted';
    const hasBack = isInverted || bgMode === 'full';

    return (
        <Section
            addSeperation
            bgColor={
                isInverted
                    ? colors.new.sectionBg.dark
                    : bgMode === 'full'
                    ? colors.new.sectionBg.medium
                    : colors.new.sectionBg.light
            }
            bgMode={mapToBgMode(bgMode, true)}
        >
            <Wrapper addWhitespace>
                <ItemList>
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
