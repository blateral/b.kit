import * as React from 'react';
import styled, { css } from 'styled-components';
import { spacings, withRange } from 'utils/styles';

type BgMode = 'full' | 'half';

const View = styled.section<{
    indent: string;
    bgColor?: string;
    bgMode?: BgMode;
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
        content: ${({ bgColor }) => (bgColor ? `""` : undefined)};
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        max-width: ${({ isBgWrapped }) =>
            isBgWrapped ? spacings.wrapperLarge : undefined}px;

        background: ${({ bgColor }) => bgColor || undefined};
        background: ${({ bgColor, bgMode }) =>
            bgColor && bgMode !== 'full'
                ? `linear-gradient(to right, transparent 50%, ${bgColor} 50%)`
                : undefined};
        margin: 0 auto;
        z-index: -1;
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
    isBgWrapped?: boolean;
    addSeperation?: boolean;
    className?: any;
}> = ({
    as,
    bgColor,
    bgMode = 'full',
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
