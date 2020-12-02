import * as React from 'react';
import styled from 'styled-components';

import { spacings } from 'utils/styles';

export type ClampWidthType = 'normal' | 'large';

const View = styled.div<{
    clampWidth?: ClampWidthType;
    addWhitespace?: boolean;
}>`
    position: relative;
    width: 100%;
    max-width: ${({ clampWidth }) =>
        clampWidth === 'large' ? spacings.wrapperLarge : spacings.wrapper}px;
    margin-left: auto;
    margin-right: auto;
    padding: 0 ${({ addWhitespace }) => (addWhitespace ? spacings.spacer : 0)}px;
`;

const Wrapper: React.FC<{
    addWhitespace?: boolean;
    clampWidth?: ClampWidthType;
    className?: string;
}> = ({ addWhitespace, clampWidth, className, children }) => {
    return (
        <View
            className={className}
            addWhitespace={addWhitespace}
            clampWidth={clampWidth}
        >
            {children}
        </View>
    );
};

export default Wrapper;
