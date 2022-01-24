import { spacings, getColors, Copy } from 'index';
import React from 'react';
import styled from 'styled-components';

const View = styled.div<{ isInverted?: boolean; hasBg?: boolean }>`
    padding: ${spacings.spacer}px;

    border: 1px solid transparent;
    border-radius: 30px;

    background: ${({ theme, isInverted, hasBg }) =>
        isInverted
            ? getColors(theme).primary.dark
            : hasBg
            ? getColors(theme).light
            : getColors(theme).mono.light};

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Action = styled.div`
    margin-top: ${spacings.spacer}px;
`;

const PriceTag: React.FC<{
    text?: string;
    action?: (isInverted?: boolean) => React.ReactNode;
    isInverted?: boolean;
    hasBackground?: boolean;
}> = ({ text, action, isInverted, hasBackground }) => {
    return (
        <View isInverted={isInverted} hasBg={hasBackground}>
            {text && <Copy isInverted={isInverted} innerHTML={text} />}
            <Action>{action && action(isInverted)}</Action>
        </View>
    );
};

export default PriceTag;
