import PriceTag from 'components/blocks/PriceTag';
import { spacings, mq, Section, Wrapper, mapToBgMode, getColors } from 'index';
import React from 'react';
import styled, { ThemeContext } from 'styled-components';

const PriceFlex = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    margin: -${spacings.spacer * 1.5}px;
`;

const PriceTagContainer = styled.div`
    flex: 0 0 33.33%;

    padding: ${spacings.spacer * 1.5}px;

    @media ${mq.large} {
        max-width: 33.33%;
    }

    & > * {
        min-height: 400px;
    }
`;

const PriceTable: React.FC<{
    items: {
        text?: string;
        action?: (isInverted?: boolean) => React.ReactNode;
    }[];
    bgMode?: 'full' | 'inverted';
}> = ({ items, bgMode }) => {
    const isInverted = bgMode === 'inverted';
    const hasBg = bgMode === 'full';

    const theme = React.useContext(ThemeContext);
    return (
        <Section
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
                            <PriceTagContainer key={i}>
                                <PriceTag
                                    text={item.text}
                                    action={item.action}
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

export default PriceTable;
