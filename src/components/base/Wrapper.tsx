import * as React from 'react';
import styled from 'styled-components';

import { MediaQueryType, mq, spacings } from 'utils/styles';

export type ClampWidthType = 'normal' | 'large';

export type BgMode =
    | 'full'
    | 'half-left'
    | 'half-right'
    | 'larger-left'
    | 'larger-right';

const getBackground = (mode: BgMode): { left: string; right: string } => {
    switch (mode) {
        case 'full':
            return { left: '0', right: '0' };

        case 'half-left':
            return { left: '0', right: '50%' };

        case 'half-right':
            return { left: '50%', right: '0' };

        case 'larger-left':
            return { left: '0', right: '40%' };

        case 'larger-right':
            return { left: '40%', right: '0' };
    }
};

const bp = (type?: MediaQueryType) => {
    return type ? mq[type] : undefined;
};

const View = styled.div<{
    clampWidth?: ClampWidthType;
    bgColor?: string;
    bgMode?: BgMode;
    bgBreakpoint?: MediaQueryType;
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
        content: ${({ bgColor, bgMode }) =>
            bgColor && bgMode ? `""` : undefined};
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: ${({ bgColor }) => bgColor || 'transparent'};
        z-index: -1;

        @media ${({ bgBreakpoint }) => bp(bgBreakpoint) || mq.medium} {
            right: ${({ bgMode }) => bgMode && getBackground(bgMode).right};
            left: ${({ bgMode }) => bgMode && getBackground(bgMode).left};
        }
    }
`;

const Wrapper: React.FC<{
    addWhitespace?: boolean;
    clampWidth?: ClampWidthType;
    bgColor?: string;
    bgMode?: BgMode;
    bgBreakpoint?: MediaQueryType;
    className?: string;
}> = ({
    addWhitespace,
    clampWidth,
    bgColor,
    bgMode,
    bgBreakpoint,
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
            bgBreakpoint={bgBreakpoint}
        >
            {children}
        </View>
    );
};

export default Wrapper;
