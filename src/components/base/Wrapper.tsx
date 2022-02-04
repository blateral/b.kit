import * as React from 'react';
import styled from 'styled-components';

import { spacings } from 'utils/styles';

export type ClampWidthType = 'small' | 'normal' | 'large';

const View = styled.div<{
    clampWidth?: ClampWidthType;
    addWhitespace?: boolean;
}>`
    position: relative;
    width: 100%;
    max-width: ${({ clampWidth }) => {
        switch (clampWidth) {
            case 'large':
                return `${spacings.wrapperLarge}px`;

            case 'small':
                return `${spacings.wrapperSmall}px`;

            default:
            case 'normal':
                return `${spacings.wrapper}px`;
        }
    }};
    margin-left: auto;
    margin-right: auto;
    padding: 0
        ${({ addWhitespace }) => (addWhitespace ? spacings.nudge * 2 : 0)}px;
`;

const Wrapper: React.FC<{
    addWhitespace?: boolean;
    clampWidth?: ClampWidthType;
    className?: string;
}> = ({
    addWhitespace = false,
    clampWidth = 'normal',
    className,
    children,
}) => {
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
