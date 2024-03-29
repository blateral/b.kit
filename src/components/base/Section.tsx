import React, { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { concat } from 'utils/concat';
import { mq, spacings, withRange, getGlobals as global } from 'utils/styles';

export type BgMode = 'full' | 'larger-left' | 'larger-right' | 'inverted';

const getBackground = (bgColor: string, mode?: BgMode) => {
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

        default:
            bgValue = bgColor;
            break;
    }
    return bgValue;
};

const View = styled.section<{
    as?: SectionType;
    bgIdent: string;
    bgColor: string;
    isStackable?: boolean;
    addSeperation?: boolean;
}>`
    position: relative;
    overflow: ${({ as }) => (as === 'div' ? 'visible' : 'hidden')};

    // section paddings
    ${({ addSeperation, isStackable, bgIdent, theme }) => {
        const padding = global(theme).sections.seperation.padding.default;
        const paddingStacked =
            global(theme).sections.seperation.padding.stackable;
        const forcePadding = global(theme).sections.seperation.forcePadding;

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
                    padding-top: ${forcePadding ? undefined : '0 !important'};

                    @media ${mq.xxlarge} {
                        padding-top: ${forcePadding
                            ? undefined
                            : '0 !important'};
                    }
                }
            `;
        } else return '';
    }}

    // section margins
    ${({ addSeperation, isStackable, bgIdent, bgColor, theme }) => {
        const margin = global(theme).sections.seperation.margin.default;
        const marginStacked =
            global(theme).sections.seperation.margin.stackable;

        const bgColorPart = bgColor ? `__${bgColor}` : '';

        if (addSeperation) {
            return css`
                *:not([data-bg-ident='light'])
                    + &[data-bg-ident='larger-left${bgColorPart}'] {
                    ${withRange(margin, 'margin-top')};
                }

                *:not([data-bg-ident='light'])
                    + &[data-bg-ident='larger-right${bgColorPart}'] {
                    ${withRange(margin, 'margin-top')};
                }

                section[data-bg-ident='larger-left${bgColorPart}']
                    + &:not([data-bg-ident='light']) {
                    ${withRange(
                        isStackable ? marginStacked : margin,
                        'margin-top'
                    )};
                }

                section[data-bg-ident='larger-right${bgColorPart}']
                    + &:not([data-bg-ident='light']) {
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
    clampSolidBg?: boolean;
}>`
    display: ${({ bgColor }) => (bgColor ? 'block' : 'none')};
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    max-width: ${({ bgMode, clampSolidBg }) => {
        if (bgMode !== 'larger-left' && bgMode !== 'larger-right') {
            return clampSolidBg ? `${spacings.wrapperLarge}px` : undefined;
        } else {
            return `${spacings.wrapper}px`;
        }
    }};
    background: ${({ bgColor }) => bgColor || undefined};
    margin: 0 auto;
    z-index: -1;

    @media ${mq.semilarge} {
        background: ${({ bgColor, bgMode }) =>
            bgColor && bgMode ? getBackground(bgColor, bgMode) : undefined};
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

export interface SectionProps {
    /** ID value for targeting section with anchor hashes */
    anchorId?: string;

    /** Render as specific HTML tag type */
    renderAs?: SectionType;

    /** Background color */
    bgColor?: string;

    /** Background mode */
    bgMode?: BgMode;

    /** Clamp solid backgrounds (full, inverted) to large wrapper width */
    clampSolidBg?: boolean;

    /** Enable section seperation spacing */
    addSeperation?: boolean;

    /** Allow stack feature for reduced section spacing to following section */
    isStackable?: boolean;
}

const Section = forwardRef<
    HTMLElement,
    SectionProps & {
        className?: string;
        children?: React.ReactNode;
    }
>(
    (
        {
            anchorId,
            renderAs,
            bgColor,
            bgMode,
            clampSolidBg = true,
            addSeperation = false,
            isStackable = false,
            className,
            children,
        },
        ref
    ) => {
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

        const noPadIdent = addSeperation ? '' : 'nopad';
        const ident =
            bgColor && bgMode
                ? concat([`${bgMode}__${bgColor}`, noPadIdent], '--')
                : 'light';

        return (
            <View
                ref={ref}
                id={anchorId || undefined}
                as={renderAs}
                data-bg-ident={ident}
                bgIdent={ident}
                bgColor={bgColor || ''}
                addSeperation={
                    !renderAs || (renderAs && renderAs !== 'div')
                        ? addSeperation
                        : false
                }
                isStackable={isStackable}
                data-stack-ident={isStackable ? 'true' : 'false'}
                className={className}
            >
                {bgColor && (
                    <Back
                        bgColor={bgColor}
                        bgMode={bgMode}
                        clampSolidBg={clampSolidBg}
                    />
                )}
                {children}
            </View>
        );
    }
);

Section.displayName = 'Section';

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
