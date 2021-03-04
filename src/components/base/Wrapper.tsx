import * as React from 'react';
import styled from 'styled-components';

import { mq, spacings } from 'utils/styles';

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
    padding: 0
        ${({ addWhitespace }) => (addWhitespace ? spacings.nudge * 2 : 0)}px;

    @media ${mq.medium} {
        padding-left: ${({ addWhitespace }) =>
            addWhitespace ? spacings.spacer : 0}px;
        padding-right: ${({ addWhitespace }) =>
            addWhitespace ? spacings.spacer : 0}px;
    }

    @media ${mq.semilarge} {
        padding-left: ${({ addWhitespace }) =>
            addWhitespace ? (1 / 28) * 100 : 0}%;
        padding-left: ${({ addWhitespace }) =>
            addWhitespace
                ? `
                      max(
                          ${spacings.spacer}px,
                          ${(1 / 28) * 100}%
                      );
                  `
                : 0};

        padding-right: ${({ addWhitespace }) =>
            addWhitespace ? spacings.spacer : 0}px;
    }

    @media ${mq.xlarge} {
        padding-left: ${({ addWhitespace }) =>
            addWhitespace ? (1 / 28) * spacings.wrapper : 0}px;
        padding-right: ${({ addWhitespace }) =>
            addWhitespace ? spacings.spacer : 0}px;
    }
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
