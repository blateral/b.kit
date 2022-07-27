import Check from 'components/base/icons/Check';
import { copyStyle } from 'components/typography/Copy';
import React from 'react';
import styled from 'styled-components';
import { getColors as color, spacings } from 'utils/styles';

const View = styled.div`
    display: inline-flex;
    flex-direction: row;
    flex-wrap: wrap;

    margin-top: -${spacings.nudge}px;
    margin-left: -${spacings.nudge * 2}px;

    &:not(:first-child) {
        margin-top: ${spacings.nudge * 3}px;
    }
`;

const FactsWrapper = styled.div`
    padding-top: ${spacings.nudge}px;
    padding-left: ${spacings.nudge * 2}px;
`;

const Fact = styled.span<{ isInverted?: boolean }>`
    display: inline-flex;
    align-items: center;
    ${copyStyle('copy', 'medium')}
    color: ${({ theme, isInverted }) =>
        isInverted ? color(theme).text.copyInverted : color(theme).text.copy};

    & > * + * {
        margin-left: ${spacings.nudge * 0.5}px;
    }
`;

const POIFacts: React.FC<{
    facts: string[];
    customFact?: (props: {
        key: React.Key;
        name: string;
        isInverted?: boolean;
    }) => React.ReactNode;
    isInverted?: boolean;
}> = ({ facts, customFact, isInverted }) => {
    return (
        <View>
            {facts.map((fact, i) => (
                <FactsWrapper key={'tag_' + i}>
                    {customFact ? (
                        customFact({
                            key: `headtag-${i}`,
                            name: fact || '',
                            isInverted: isInverted,
                        })
                    ) : (
                        <Fact isInverted={isInverted}>
                            <Check />
                            <span>{fact}</span>
                        </Fact>
                    )}
                </FactsWrapper>
            ))}
        </View>
    );
};

export default POIFacts;
