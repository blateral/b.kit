import { getColors as color, mq, spacings } from 'utils/styles';
import React from 'react';
import styled from 'styled-components';
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
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: space-between;
    max-width: 100%;

    padding: ${spacings.nudge * 2}px;

    background: ${({ theme, hasBg }) =>
        hasBg
            ? color(theme).new.elementBg.light
            : color(theme).new.elementBg.medium};

    & > * + * {
        margin-left: ${spacings.nudge * 2}px;
    }

    @media ${mq.medium} {
        padding: ${spacings.nudge * 3}px;
    }

    @media ${mq.semilarge} {
        & > * + * {
            margin-left: ${spacings.nudge * 3}px;
        }
    }
`;

export interface PriceItems {
    text?: string;
    price?: string;
}

const PriceBlock: React.FC<PriceItems & { hasBg?: boolean }> = ({
    text,
    price,
    hasBg,
}) => {
    return (
        <ItemBlock hasBg={hasBg}>
            {text && <Copy type="copy" innerHTML={text} />}
            {price && <Copy type="copy-b">{price}€</Copy>}
        </ItemBlock>
    );
};

const PriceList: React.FC<{
    /** Array with price items */
    items: PriceItems[];

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
                    {items.map((item, i) => {
                        return <PriceBlock key={i} {...item} hasBg={hasBack} />;
                    })}
                </ItemList>
            </Wrapper>
        </Section>
    );
};

export const PriceListComponent = PriceList;
export default withLibTheme(PriceList);
