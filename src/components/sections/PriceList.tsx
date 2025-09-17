import React from 'react';
import styled, { ThemeContext } from 'styled-components';
import { getColors as color, mq, spacings } from 'utils/styles';

import Section, { mapToBgMode } from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import Copy from 'components/typography/Copy';
import { withLibTheme } from 'utils/LibThemeProvider';

const ItemList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;

    & > * + * {
        margin-top: ${spacings.nudge}px;
    }
`;

const ItemBlock = styled.li<{ hasBg?: boolean; isInverted?: boolean }>`
    max-width: 100%;
    padding: ${spacings.nudge * 2}px;

    background: ${({ theme, hasBg, isInverted }) =>
        hasBg || isInverted ? color(theme).light : color(theme).mono.light};

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

export const PriceBlock: React.FC<
    PriceItems & { hasBg?: boolean; isInverted?: boolean }
> = ({ text, price, hasBg = false, isInverted, title }) => {
    return (
        <ItemBlock hasBg={hasBg} isInverted={isInverted}>
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

    ariaLabel?: string;
}> = ({ bgMode, items, ariaLabel }) => {
    const theme = React.useContext(ThemeContext);

    const isInverted = bgMode === 'inverted';
    const hasBg = bgMode === 'full';

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
                <ItemList aria-label={ariaLabel}>
                    {items?.map((item, i) => (
                        <PriceBlock
                            key={i}
                            {...item}
                            hasBg={hasBg}
                            isInverted={isInverted}
                        />
                    ))}
                </ItemList>
            </Wrapper>
        </Section>
    );
};

export const PriceListComponent = PriceList;
export default withLibTheme(PriceList);
