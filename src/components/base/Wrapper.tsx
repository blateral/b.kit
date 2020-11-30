import * as React from 'react';
import styled from 'styled-components';

import { mq, spacings } from 'utils/styles';

export type ClampWidthType = 'normal' | 'large';
type Whitespaces = 'right' | 'left' | 'both';
type BgMode = 'full' | 'half';

const View = styled.div<{
    addWhitespace?: Whitespaces;
    clampWidth?: ClampWidthType;
    bgColor?: string;
    bgMode?: BgMode;
}>`
    position: relative;
    width: 100%;
    max-width: ${({ clampWidth }) =>
        clampWidth === 'large' ? spacings.wrapperLarge : spacings.wrapper}px;
    margin-left: auto;
    margin-right: auto;

    padding-left: ${({ addWhitespace }) =>
        (addWhitespace === 'left' || addWhitespace === 'both') &&
        spacings.spacer + 'px'};
    padding-right: ${({ addWhitespace }) =>
        (addWhitespace === 'right' || addWhitespace === 'both') &&
        spacings.spacer + 'px'};

    @media ${mq.xlarge} {
        padding-left: ${({ addWhitespace }) =>
            (addWhitespace === 'left' || addWhitespace === 'both') &&
            (120 / spacings.wrapper) * 100 + '%'};
        padding-right: ${({ addWhitespace }) =>
            (addWhitespace === 'right' || addWhitespace === 'both') &&
            (120 / spacings.wrapper) * 100 + '%'};
    }

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
    clampWidth?: ClampWidthType;
    addWhitespace?: Whitespaces;
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
            clampWidth={clampWidth}
            addWhitespace={addWhitespace}
            bgColor={bgColor}
            bgMode={bgMode}
        >
            {children}
        </View>
    );
};

export default Wrapper;
