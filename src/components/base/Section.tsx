import * as React from 'react';
import styled, { css } from 'styled-components';
import { mq, spacings, withRange } from '../../utils/styles';

export type BgMode =
    | 'full'
    | 'half-left'
    | 'half-right'
    | 'larger-left'
    | 'larger-right';

export type BgClampType = 'normal' | 'large';

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

const View = styled.section<{
    indent: string;
    addSeperation?: boolean;
}>`
    position: relative;
    overflow: hidden;

    ${({ addSeperation }) =>
        addSeperation &&
        withRange([spacings.spacer * 2, spacings.spacer * 4], 'padding-top')}
    ${({ addSeperation }) =>
        addSeperation &&
        withRange([spacings.spacer * 2, spacings.spacer * 4], 'padding-bottom')}

    ${({ indent }) =>
        css`
            &[data-ident='${indent}'] + &[data-ident='${indent}'] {
                padding-top: 0;
            }
        `}
`;

const Back = styled.div<{
    bgColor?: string;
    bgMode?: BgMode;
    bgClamp?: BgClampType;
}>`
    display: ${({ bgColor, bgMode }) => (bgColor && bgMode ? 'block' : 'none')};
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    max-width: ${({ bgClamp, bgMode }) =>
        bgClamp
            ? bgClamp === 'large' || bgMode === 'full'
                ? spacings.wrapperLarge
                : spacings.wrapper
            : undefined}px;

    background: ${({ bgColor }) => bgColor || undefined};

    margin: 0 auto;
    z-index: -1;

    @media ${mq.semilarge} {
        background: ${({ bgColor, bgMode }) =>
            bgColor && bgMode && bgMode !== 'full'
                ? getBackground(bgMode, bgColor)
                : undefined};
    }

    @media ${mq.xlarge} {
        :before {
            content: ${({ bgMode, bgClamp }) =>
                (bgClamp === 'normal' && bgMode === 'half-left') ||
                bgMode === 'larger-left'
                    ? `""`
                    : undefined};
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            width: ${(spacings.wrapperLarge - spacings.wrapper) / 2}px;
            background-color: ${({ bgColor }) => bgColor && bgColor};

            transform: translateX(-100%);
        }

        :after {
            content: ${({ bgMode, bgClamp }) =>
                (bgClamp === 'normal' && bgMode === 'half-right') ||
                bgMode === 'larger-right'
                    ? `""`
                    : undefined};
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            width: ${(spacings.wrapperLarge - spacings.wrapper) / 2}px;
            background-color: ${({ bgColor }) => bgColor && bgColor};

            transform: translateX(100%);
        }
    }
`;

const Section: React.FC<{
    as?: 'header' | 'footer';
    bgColor?: string;
    bgMode?: BgMode;
    bgClamp?: BgClampType;
    addSeperation?: boolean;
    className?: any;
}> = ({
    as,
    bgColor,
    bgMode = 'full',
    bgClamp,
    addSeperation,
    className,
    children,
}) => {
    return (
        <View
            as={as}
            data-ident={bgColor || 'plain'}
            indent={bgColor || 'plain'}
            addSeperation={addSeperation}
            className={className}
        >
            {bgColor && bgMode && (
                <Back bgColor={bgColor} bgMode={bgMode} bgClamp={bgClamp} />
            )}
            {children}
        </View>
    );
};

export default Section;
