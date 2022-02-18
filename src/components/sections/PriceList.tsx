import { getColors as color, mq, spacings, withRange } from 'utils/styles';
import * as React from 'react';
import styled, { ThemeContext } from 'styled-components';
import Section, { mapToBgMode } from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import Copy from 'components/typography/Copy';
import { withLibTheme } from 'utils/LibThemeProvider';

const ItemList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
`;

const ItemBlock = styled.li<{ hasBg?: boolean }>`
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: space-between;
    max-width: 100%;

    ${withRange([spacings.nudge * 2, spacings.nudge * 3], 'padding')};

    background: ${({ theme, hasBg }) =>
        hasBg
            ? color(theme).new.elementBg.light
            : color(theme).new.elementBg.medium};

    & > * + * {
        margin-left: ${spacings.nudge * 2}px;
    }

    & + & {
        margin-top: ${spacings.nudge * 2}px;
    }

    @media ${mq.semilarge} {
        & > * + * {
            margin-left: ${spacings.nudge * 3}px;
        }
    }
`;

interface PriceItems {
    text?: string;
    price?: string;
}

const PriceBlock: React.FC<
    PriceItems & { isInverted?: boolean; hasBg?: boolean }
> = ({ text, price, isInverted, hasBg }) => {
    return (
        <ItemBlock hasBg={isInverted || hasBg}>
            <div>
                <Copy type="copy" innerHTML={text} />
            </div>

            {price && (
                <div>
                    <Copy type="copy-b">{price}€</Copy>
                </div>
            )}
        </ItemBlock>
    );
};

const PriceList: React.FC<{
    items: PriceItems[];
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
                    ? color(theme).new.sectionBg.dark
                    : hasBg
                    ? color(theme).new.sectionBg.medium
                    : color(theme).new.sectionBg.light
            }
            bgMode={mapToBgMode(bgMode, true)}
        >
            <Wrapper addWhitespace>
                <ItemList>
                    {items.map((item, i) => {
                        return (
                            <PriceBlock
                                key={i}
                                {...item}
                                isInverted={isInverted}
                                hasBg={hasBg}
                            />
                        );
                    })}
                </ItemList>
            </Wrapper>
        </Section>
    );
};

export const PriceListComponent = PriceList;
export default withLibTheme(PriceList);
