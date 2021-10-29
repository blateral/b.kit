import {
    Copy,
    getColors as color,
    mapToBgMode,
    mq,
    Section,
    spacings,
    withRange,
    Wrapper,
} from 'index';
import * as React from 'react';
import styled, { ThemeContext } from 'styled-components';

const ItemList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
`;

const ItemBlock = styled.li<{ hasBg?: boolean }>`
    display: flex;
    flex-direction: row;
    align-items: flex-start;

    ${withRange([spacings.nudge * 2, spacings.spacer], 'padding')};

    background: ${({ theme, hasBg }) =>
        hasBg ? color(theme).light : color(theme).mono.light};

    & > * + * {
        margin-left: ${spacings.nudge}px;
    }

    & + & {
        margin-top: ${spacings.nudge * 2}px;
    }

    @media ${mq.semilarge} {
        & > * + * {
            margin-left: ${spacings.spacer}px;
        }
    }
`;

const PriceList: React.FC<{
    items: { text?: string; price?: string }[];
    bgMode?: 'inverted' | 'full';
}> = ({ bgMode, items }) => {
    const isInverted = bgMode === 'inverted';
    const hasBg = bgMode === 'full';
    const theme = React.useContext(ThemeContext);
    return (
        <Section
            addSeperation
            bgColor={
                isInverted
                    ? color(theme).dark
                    : hasBg
                    ? color(theme).mono.light
                    : 'transparent'
            }
            bgMode={mapToBgMode(bgMode, true)}
        >
            <Wrapper addWhitespace>
                <ItemList>
                    {items.map((item, i) => {
                        return (
                            <ItemBlock key={i} hasBg={isInverted || hasBg}>
                                <Copy type="copy" innerHTML={item.text} />
                                {item.price && (
                                    <Copy type="copy-b">{item.price}€</Copy>
                                )}
                            </ItemBlock>
                        );
                    })}
                </ItemList>
            </Wrapper>
        </Section>
    );
};

export default PriceList;