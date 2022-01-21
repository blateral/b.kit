import { spacings, getColors, Copy } from 'index';
import React from 'react';
import styled from 'styled-components';

const View = styled.div<{ isInverted?: boolean }>`
    padding: ${spacings.spacer}px;

    border: 1px solid transparent;
    border-radius: 30px;

    background: ${({ theme, isInverted }) =>
        isInverted ? getColors(theme).primary.dark : getColors(theme).light};

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
}> = ({ text, action, isInverted }) => {
    return (
        <View isInverted={isInverted}>
            {text && <Copy isInverted={isInverted} innerHTML={text} />}
            <Action>{action && action(isInverted)}</Action>
        </View>
    );
};

export default PriceTag;
