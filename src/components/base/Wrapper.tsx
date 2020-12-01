import * as React from 'react';
import styled from 'styled-components';

import { spacings } from 'utils/styles';

export type ClampWidthType = 'normal' | 'large';
type BgMode = 'full' | 'half';

const View = styled.div<{
    clampWidth?: ClampWidthType;
    bgColor?: string;
    bgMode?: BgMode;
    addWhitespace?: boolean;
}>`
    position: relative;
    width: 100%;
    max-width: ${({ clampWidth }) =>
        clampWidth === 'large' ? spacings.wrapperLarge : spacings.wrapper}px;
    margin-left: auto;
    margin-right: auto;
    padding: 0 ${({ addWhitespace }) => (addWhitespace ? spacings.spacer : 0)}px;

    &:before {
        content: ${({ bgColor }) => (bgColor ? `""` : undefined)};
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: ${({ bgMode }) => (bgMode === 'half' ? '50%' : '0')};
        background-color: ${({ bgColor }) => bgColor || 'transparent'};
        z-index: -1;
    }
`;

const Wrapper: React.FC<{
    addWhitespace?: boolean;
    clampWidth?: ClampWidthType;
    bgColor?: string;
    bgMode?: BgMode;
    className?: string;
}> = ({
    addWhitespace,
    clampWidth,
    bgColor,
    bgMode = 'full',
    className,
    children,
}) => {
    return (
        <View
            className={className}
            addWhitespace={addWhitespace}
            clampWidth={clampWidth}
            bgColor={bgColor}
            bgMode={bgMode}
        >
            {children}
        </View>
    );
};

export default Wrapper;
