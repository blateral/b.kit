import * as React from 'react';
import { useContext } from 'react';
import styled, { css, ThemeContext } from 'styled-components';
import {
    mq,
    spacings,
    withRange,
    getGlobalSettings as settings,
} from 'utils/styles';

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

const View = styled.section<{
    indent: string;
    addSeperation?: boolean;
    addPlainSeperation?: boolean;
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
        indent !== 'plain' &&
        css`
            &[data-ident='${indent}'] + &[data-ident='${indent}'] {
                padding-top: 0;
            }
        `}

    ${({ indent, addPlainSeperation }) =>
        addPlainSeperation &&
        indent &&
        css`
            &[data-ident='plain'] {
                ${withRange(
                    [spacings.spacer * 2, spacings.spacer * 4],
                    'margin-top'
                )}
            }

            &[data-ident='plain'] + & {
                ${withRange(
                    [spacings.spacer * 2, spacings.spacer * 4],
                    'margin-top'
                )}
            }

            &[data-ident='plain'] + &[data-ident='transparent'] {
                margin-top: 0;
            }

            &[data-ident='transparent'] + &[data-ident='plain'] {
                margin-top: 0;
            }
        `}
`;

const Back = styled.div<{
    bgColor?: string;
    bgMode?: BgMode;
}>`
    display: ${({ bgColor, bgMode }) => (bgColor && bgMode ? 'block' : 'none')};
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    max-width: ${({ bgMode }) =>
        (bgMode === 'full' ? spacings.wrapperLarge : spacings.wrapper) + 'px'};

    background: ${({ bgColor }) => bgColor || undefined};

    margin: 0 auto;

    @media ${mq.semilarge} {
        background: ${({ bgColor, bgMode }) =>
            bgColor && bgMode && bgMode !== 'full'
                ? getBackground(bgMode, bgColor)
                : undefined};
    }

    @media ${mq.xlarge} {
        :before {
            content: ${({ bgMode }) =>
                bgMode === 'half-left' || bgMode === 'larger-left'
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
            content: ${({ bgMode }) =>
                bgMode === 'half-right' || bgMode === 'larger-right'
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
    addSeperation?: boolean;
    className?: string;
}> = ({
    as,
    bgColor,
    bgMode = 'full',
    addSeperation = false,
    className,
    children,
}) => {
    const theme = useContext(ThemeContext);

    return (
        <View
            as={as}
            data-ident={bgColor && bgMode === 'full' ? bgColor : 'plain'}
            indent={bgColor && bgMode === 'full' ? bgColor : 'plain'}
            addSeperation={addSeperation}
            addPlainSeperation={settings(theme).sections.plainSeperation}
            className={className}
        >
            {bgColor && bgMode && <Back bgColor={bgColor} bgMode={bgMode} />}
            {children}
        </View>
    );
};

export default Section;
