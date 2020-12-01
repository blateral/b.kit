import * as React from 'react';
import styled, { css } from 'styled-components';
import { MediaQueryType, mq, spacings, withRange } from 'utils/styles';

export type BgMode =
    | 'full'
    | 'half-left'
    | 'half-right'
    | 'larger-left'
    | 'larger-right';

const getBackground = (mode: BgMode, bgColor: string) => {
    let bgValue = undefined;

    switch (mode) {
        case 'full':
            bgValue = bgColor;
            break;

        case 'half-left':
            bgValue = `linear-gradient(to left, transparent 50%, ${bgColor} 50%)`;
            break;

        case 'half-right':
            bgValue = `linear-gradient(to right, transparent 50%, ${bgColor} 50%)`;
            break;

        case 'larger-left':
            bgValue = `linear-gradient(to left, transparent 40%, ${bgColor} 40%)`;
            break;

        case 'larger-right':
            bgValue = `linear-gradient(to right, transparent 40%, ${bgColor} 40%)`;
            break;
    }
    return bgValue;
};

const bp = (type?: MediaQueryType) => {
    return type ? mq[type] : undefined;
};

const View = styled.section<{
    indent: string;
    bgColor?: string;
    bgMode?: BgMode;
    bgBreakpoint?: MediaQueryType;
    isBgWrapped?: boolean;
    addSeperation?: boolean;
}>`
    position: relative;

    ${({ addSeperation }) =>
        addSeperation &&
        withRange([spacings.spacer * 2, spacings.spacer * 4], 'padding-top')}
    ${({ addSeperation }) =>
        addSeperation &&
        withRange([spacings.spacer * 2, spacings.spacer * 4], 'padding-bottom')}
    
    &:before {
        content: ${({ bgColor, bgMode }) =>
            bgColor && bgMode ? `""` : undefined};
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        max-width: ${({ isBgWrapped }) =>
            isBgWrapped ? spacings.wrapperLarge : undefined}px;

        background: ${({ bgColor }) => bgColor || undefined};

        margin: 0 auto;
        z-index: -1;

        @media ${({ bgBreakpoint }) => bp(bgBreakpoint) || mq.medium} {
            background: ${({ bgColor, bgMode }) =>
                bgColor && bgMode && bgMode !== 'full'
                    ? getBackground(bgMode, bgColor)
                    : undefined};
        }
    }

    ${({ indent }) =>
        css`
            &[data-ident='${indent}'] + &[data-ident='${indent}'] {
                padding-top: 0;
            }
        `}
`;

const Section: React.FC<{
    as?: 'header' | 'footer';
    bgColor?: string;
    bgMode?: BgMode;
    bgBreakpoint?: MediaQueryType;
    isBgWrapped?: boolean;
    addSeperation?: boolean;
    className?: any;
}> = ({
    as,
    bgColor,
    bgMode,
    bgBreakpoint,
    isBgWrapped,
    addSeperation,
    className,
    children,
}) => {
    return (
        <View
            as={as}
            bgColor={bgColor}
            bgMode={bgMode}
            bgBreakpoint={bgBreakpoint}
            isBgWrapped={isBgWrapped}
            data-ident={bgColor || 'plain'}
            indent={bgColor || 'plain'}
            addSeperation={addSeperation}
            className={className}
        >
            {children}
        </View>
    );
};

export default Section;
