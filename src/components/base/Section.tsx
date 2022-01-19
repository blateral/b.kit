import * as React from 'react';
import styled, { css } from 'styled-components';
import {
    mq,
    spacings,
    withRange,
    getGlobalSettings as global,
} from 'utils/styles';

export type BgMode = 'full' | 'larger-left' | 'larger-right' | 'inverted';

const getBackground = (mode: BgMode, bgColor: string) => {
    let bgValue = undefined;

    switch (mode) {
        case 'full':
            bgValue = bgColor;
            break;

        case 'inverted':
            bgValue = bgColor;
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
    as?: SectionType;
    bgIdent: string;
    isStackable?: boolean;
    addSeperation?: boolean;
}>`
    position: relative;
    overflow: ${({ as }) => (as === 'div' ? 'visible' : 'hidden')};

    // section paddings
    ${({ addSeperation, isStackable, bgIdent, theme }) => {
        const padding = global(theme).sections.seperation.padding.default;
        const paddingStacked = global(theme).sections.seperation.padding
            .stackable;

        if (addSeperation) {
            return css`
                ${withRange(padding, 'padding-top')}
                ${withRange(
                    isStackable ? paddingStacked : padding,
                    'padding-bottom'
                )}

                section[data-stack-ident='true'] + & {
                    ${withRange(paddingStacked, 'padding-top')};
                }

                section[data-bg-ident='${bgIdent}']
                    + &[data-bg-ident='${bgIdent}'] {
                    padding-top: 0 !important;

                    @media ${mq.xxlarge} {
                        padding-top: 0 !important;
                    }
                }
            `;
        } else return '';
    }}

    // section margins
    ${({ addSeperation, isStackable, bgIdent, theme }) => {
        const margin = global(theme).sections.seperation.margin.default;
        const marginStacked = global(theme).sections.seperation.margin
            .stackable;

        if (addSeperation) {
            return css`
                *:not([data-bg-ident='transparent'])
                    + &[data-bg-ident='larger-left'] {
                    ${withRange(margin, 'margin-top')};
                }

                *:not([data-bg-ident='transparent'])
                    + &[data-bg-ident='larger-right'] {
                    ${withRange(margin, 'margin-top')};
                }

                section[data-bg-ident='larger-left']
                    + &:not([data-bg-ident='transparent']) {
                    ${withRange(
                        isStackable ? marginStacked : margin,
                        'margin-top'
                    )};
                }

                section[data-bg-ident='larger-right']
                    + &:not([data-bg-ident='transparent']) {
                    ${withRange(
                        isStackable ? marginStacked : margin,
                        'margin-top'
                    )};
                }

                section[data-bg-ident='${bgIdent}']
                    + &[data-bg-ident='${bgIdent}'] {
                    margin-top: 0 !important;

                    @media ${mq.xxlarge} {
                        margin-top: 0 !important;
                    }
                }
            `;
        } else return '';
    }}
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
        (bgMode === 'full' || bgMode === 'inverted'
            ? spacings.wrapperLarge
            : spacings.wrapper) + 'px'};
    background: ${({ bgColor }) => bgColor || undefined};
    margin: 0 auto;

    @media ${mq.semilarge} {
        background: ${({ bgColor, bgMode }) =>
            bgColor && bgMode ? getBackground(bgMode, bgColor) : undefined};
    }

    @media ${mq.xlarge} {
        :before {
            content: ${({ bgMode }) =>
                bgMode === 'larger-left' ? `""` : undefined};
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
                bgMode === 'larger-right' ? `""` : undefined};
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

export type SectionType = 'header' | 'footer' | 'div';

const Section: React.FC<{
    renderAs?: SectionType;
    bgColor?: string;
    bgMode?: BgMode;
    addSeperation?: boolean;
    isStackable?: boolean;
    className?: string;
}> = ({
    renderAs,
    bgColor,
    bgMode,
    addSeperation = false,
    isStackable = false,
    className,
    children,
}) => {
    switch (bgMode) {
        case 'larger-left':
            bgMode = 'larger-left';
            break;
        case 'larger-right':
            bgMode = 'larger-right';
            break;
        case 'inverted':
            bgMode = 'inverted';
            break;
        case 'full':
            bgMode = 'full';
            break;
        default:
            bgMode = undefined;
    }

    return (
        <View
            as={renderAs}
            data-bg-ident={bgColor && bgMode ? bgMode : 'transparent'}
            bgIdent={bgColor && bgMode ? bgMode : 'transparent'}
            addSeperation={
                !renderAs || (renderAs && renderAs !== 'div')
                    ? addSeperation
                    : false
            }
            isStackable={isStackable}
            data-stack-ident={isStackable ? 'true' : 'false'}
            className={className}
        >
            {bgColor && bgMode && <Back bgColor={bgColor} bgMode={bgMode} />}
            {children}
        </View>
    );
};

export default Section;

export const mapToBgMode = (
    mode?: 'full' | 'splitted' | 'inverted',
    preventSplit = false,
    isMirrored = false
): BgMode | undefined => {
    switch (mode) {
        case 'full':
            return 'full';
        case 'inverted':
            return 'inverted';
        case 'splitted': {
            if (!preventSplit)
                return isMirrored ? 'larger-left' : 'larger-right';
            else return undefined;
        }

        default:
            return undefined;
    }
};
