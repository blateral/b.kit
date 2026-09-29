import * as React from 'react';
import styled from 'styled-components';

import { spacings } from 'utils/styles';

export type ClampWidthType = 'small' | 'normal' | 'large';

export const wrapperWhitespace = spacings.nudge * 2;

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
        ${({ addWhitespace }) => (addWhitespace ? wrapperWhitespace : 0)}px;
`;

const Wrapper: React.FC<{
    addWhitespace?: boolean;
    clampWidth?: ClampWidthType;
    renderAs?: 'div' | 'nav';
    ariaLabel?: string;
    className?: string;
    children?: React.ReactNode;
}> = ({
    addWhitespace = false,
    clampWidth = 'normal',
    renderAs = 'div',
    className,
    ariaLabel,
    children,
}) => {
    return (
        <View
            as={renderAs}
            className={className}
            aria-label={ariaLabel}
            addWhitespace={addWhitespace}
            clampWidth={clampWidth}
        >
            {children}
        </View>
    );
};

export default Wrapper;
