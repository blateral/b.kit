import * as React from 'react';
import styled, { css } from 'styled-components';
import { clampValue } from 'utils/clamp';
import { spacings, mq } from 'utils/styles';

export interface ColPropsSettings {
    /** Normalisierte Werte zwischen 0 und 1: z.B.  12 von 28 Spalten (12 / 28) */
    span?: number;
    /** Normalisierte Werte zwischen -1 und 1: z.B. -12 von 28 Spalten (-12 / 28) */
    move?: number;
    valign?: VerticalAlign;
    textAlign?: TextAlign;
}

type VerticalAlign = 'top' | 'center' | 'bottom';
type HorizontalAlign = 'left' | 'center' | 'right';
type TextAlign = 'left' | 'center' | 'right';

interface ColProps extends ColPropsSettings {
    medium?: ColPropsSettings;
    semilarge?: ColPropsSettings;
    large?: ColPropsSettings;
    xlarge?: ColPropsSettings;
}

export const gridSettings = {
    cols: 12,
    gutter: spacings.spacer,
};

/** Get width of grid cols incl. gutter (relative to container element)  */
export const getGridWidth = (cols?: number, gutter?: number) => {
    cols = cols || gridSettings.cols;
    const gridGutter = gutter !== undefined ? gutter : gridSettings.gutter;
    const gridCols = gridSettings.cols;

    return css`
        calc(((100% - ${
            (gridCols - 1) * gridGutter
        }px) / ${gridCols}) * ${cols} + ${(cols - 1) * gridGutter}px)
    `;
};

const validateValue = (
    value: number | undefined,
    min: number,
    max?: number
) => {
    if (value === undefined || value === null) return value;
    return value !== clampValue(value, min, max) ? undefined : value;
};

const getWidth = (props: ColProps) => {
    const span = validateValue(props.span, 0, 1);
    const mediumSpan = validateValue(props.medium?.span, 0, 1);
    const semilargeSpan = validateValue(props.semilarge?.span, 0, 1);
    const largeSpan = validateValue(props.large?.span, 0, 1);
    const xlargeSpan = validateValue(props.xlarge?.span, 0, 1);

    return css`
        width: ${(span || 1) * 100}%;

        ${mediumSpan &&
        css`
            @media ${mq.medium} {
                width: ${(mediumSpan || 1) * 100}%;
            }
        `}

        ${semilargeSpan &&
        css`
            @media ${mq.semilarge} {
                width: ${(semilargeSpan || 1) * 100}%;
            }
        `}

        ${largeSpan &&
        css`
            @media ${mq.large} {
                width: ${(largeSpan || 1) * 100}%;
            }
        `}

        ${xlargeSpan &&
        css`
            @media ${mq.xlarge} {
                width: ${(xlargeSpan || 1) * 100}%;
            }
        `}
    `;
};

const getLeftRight = (props: ColProps) => {
    const mediumMove = props?.medium?.move;
    const semilargeMove = props?.semilarge?.move;
    const largeMove = props?.large?.move;
    const xlargeMove = props?.xlarge?.move;

    return css`
        left: ${props?.move && props?.move > 0
            ? props?.move * 100 + '%'
            : 'auto'};
        right: ${props?.move && props?.move < 0
            ? props?.move * -100 + '%'
            : 'auto'};

        ${mediumMove !== undefined &&
        css`
            @media ${mq.medium} {
                left: ${mediumMove && mediumMove > 0
                    ? mediumMove * 100 + '%'
                    : 'auto'};
                right: ${mediumMove && mediumMove < 0
                    ? mediumMove * -100 + '%'
                    : 'auto'};
            }
        `}

        ${semilargeMove !== undefined &&
        css`
            @media ${mq.semilarge} {
                left: ${semilargeMove && semilargeMove > 0
                    ? semilargeMove * 100 + '%'
                    : 'auto'};
                right: ${semilargeMove && semilargeMove < 0
                    ? semilargeMove * -100 + '%'
                    : 'auto'};
            }
        `}

        ${largeMove !== undefined &&
        css`
            @media ${mq.large} {
                left: ${largeMove && largeMove > 0
                    ? largeMove * 100 + '%'
                    : 'auto'};
                right: ${largeMove && largeMove < 0
                    ? largeMove * -100 + '%'
                    : 'auto'};
            }
        `}

        ${xlargeMove !== undefined &&
        css`
            @media ${mq.xlarge} {
                left: ${xlargeMove && xlargeMove > 0
                    ? xlargeMove * 100 + '%'
                    : 'auto'};
                right: ${xlargeMove && xlargeMove < 0
                    ? xlargeMove * -100 + '%'
                    : 'auto'};
            }
        `}
    `;
};

const getGutter = (mode: 'grid' | 'col') => (props: GridProps) => {
    const gutter = validateValue(props.gutter, 0) || 0;
    const mediumGutter = validateValue(props?.medium?.gutter, 0);
    const semilargeGutter = validateValue(props?.semilarge?.gutter, 0);
    const largeGutter = validateValue(props?.large?.gutter, 0);
    const xlargeGutter = validateValue(props?.xlarge?.gutter, 0);

    const propertyTop = mode === 'grid' ? 'margin-top: -' : 'padding-top: ';
    const propertyLeft = mode === 'grid' ? 'margin-left: -' : 'padding-left: ';

    return css`
        ${propertyTop}${gutter}px;
        ${propertyLeft}${gutter}px;

        ${mediumGutter !== undefined &&
        css`
            @media ${mq.medium} {
                ${propertyTop}${mediumGutter}px;
                ${propertyLeft}${mediumGutter}px;
            }
        `}

        ${semilargeGutter !== undefined &&
        css`
            @media ${mq.semilarge} {
                ${propertyTop}${semilargeGutter}px;
                ${propertyLeft}${semilargeGutter}px;
            }
        `}
        
        ${largeGutter !== undefined &&
        css`
            @media ${mq.large} {
                ${propertyTop}${largeGutter}px;
                ${propertyLeft}${largeGutter}px;
            }
        `}

        ${xlargeGutter !== undefined &&
        css`
            @media ${mq.xlarge} {
                ${propertyTop}${xlargeGutter}px;
                ${propertyLeft}${xlargeGutter}px;
            }
        `}
    `;
};

const getTextAlign = (props: ColProps) => {
    const mediumTextAlign = props?.medium?.textAlign;
    const semilargeTextAlign = props?.semilarge?.textAlign;
    const largeTextAlign = props?.large?.textAlign;
    const xlargeTextAlign = props?.xlarge?.textAlign;

    return css`
        text-align: ${props?.textAlign || undefined};

        ${mediumTextAlign !== undefined &&
        css`
            @media ${mq.medium} {
                text-align: ${mediumTextAlign};
            }
        `}

        ${semilargeTextAlign !== undefined &&
        css`
            @media ${mq.semilarge} {
                text-align: ${semilargeTextAlign};
            }
        `}

        ${largeTextAlign !== undefined &&
        css`
            @media ${mq.large} {
                text-align: ${largeTextAlign};
            }
        `}

        ${xlargeTextAlign !== undefined &&
        css`
            @media ${mq.xlarge} {
                text-align: ${xlargeTextAlign};
            }
        `}
    `;
};

const mapVerticalAlign = (alignMode?: VerticalAlign) => {
    switch (alignMode) {
        case 'top':
            return 'flex-start';
        case 'center':
            return 'center';
        case 'bottom':
            return 'flex-end';
        default:
            return undefined;
    }
};

const getVerticalAlign =
    (selfAlign?: boolean) => (props: ColProps & GridProps) => {
        const vAlign = mapVerticalAlign(props.valign);
        const mediumAlign = mapVerticalAlign(props?.medium?.valign);
        const semilargelAlign = mapVerticalAlign(props?.semilarge?.valign);
        const largeAlign = mapVerticalAlign(props?.large?.valign);
        const xlargeAlign = mapVerticalAlign(props?.xlarge?.valign);

        const property = selfAlign ? 'align-self: ' : 'align-items: ';

        return css`
            ${property}${vAlign || undefined};

            ${mediumAlign !== undefined &&
            css`
                @media ${mq.medium} {
                    ${property}${mediumAlign};
                }
            `}

            ${semilargelAlign !== undefined &&
            css`
                @media ${mq.semilarge} {
                    ${property}${semilargelAlign};
                }
            `}

        ${largeAlign !== undefined &&
            css`
                @media ${mq.large} {
                    ${property}${largeAlign};
                }
            `}

        ${xlargeAlign !== undefined &&
            css`
                @media ${mq.xlarge} {
                    ${property}${xlargeAlign};
                }
            `}
        `;
    };

const mapHorizontalAlign = (alignMode?: HorizontalAlign) => {
    switch (alignMode) {
        case 'left':
            return 'flex-start';
        case 'center':
            return 'center';
        case 'right':
            return 'flex-end';
        default:
            return undefined;
    }
};

const getHorinzontalAlign = (props: GridProps) => {
    const hAlign = mapHorizontalAlign(props.halign);
    const mediumAlign = mapHorizontalAlign(props?.medium?.halign);
    const semilargelAlign = mapHorizontalAlign(props?.semilarge?.halign);
    const largeAlign = mapHorizontalAlign(props?.large?.halign);
    const xlargeAlign = mapHorizontalAlign(props?.xlarge?.halign);

    return css`
        justify-content: ${hAlign || undefined};

        ${mediumAlign !== undefined &&
        css`
            @media ${mq.medium} {
                justify-content: ${mediumAlign};
            }
        `}

        ${semilargelAlign !== undefined &&
        css`
            @media ${mq.semilarge} {
                justify-content: ${semilargelAlign};
            }
        `}

        ${largeAlign !== undefined &&
        css`
            @media ${mq.large} {
                justify-content: ${largeAlign};
            }
        `}

        ${xlargeAlign !== undefined &&
        css`
            @media ${mq.xlarge} {
                justify-content: ${xlargeAlign};
            }
        `}
    `;
};

const StyledCol = styled.div<GridProps & ColProps>`
    ${getWidth};
    ${getLeftRight};
    ${getGutter('col')}
    display: block;
    position: relative;

    ${getTextAlign}
    ${getVerticalAlign(true)}
`;

const Col: React.FC<ColProps> = (props) => {
    return <React.Fragment>{props?.children}</React.Fragment>;
};

interface GridPropsSettings {
    gutter?: number;
    valign?: VerticalAlign;
    halign?: HorizontalAlign;
}

interface GridProps extends GridPropsSettings {
    medium?: GridPropsSettings;
    semilarge?: GridPropsSettings;
    large?: GridPropsSettings;
    xlarge?: GridPropsSettings;
}

const StyledGrid = styled.div<GridProps>`
    ${getGutter('grid')}
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    ${getVerticalAlign()}
    ${getHorinzontalAlign}
`;

const mapGutterToCol = (gutter?: number, colSettings?: any) => {
    if (gutter === undefined) return colSettings;
    if (colSettings) {
        return {
            ...colSettings,
            gutter,
        };
    } else {
        return {
            gutter,
        };
    }
};

const Grid: React.FC<GridProps> = ({
    gutter,
    valign,
    children,
    halign,
    medium,
    semilarge,
    large,
    xlarge,
}) => {
    return (
        <StyledGrid
            gutter={gutter}
            valign={valign}
            halign={halign}
            medium={medium}
            semilarge={semilarge}
            large={large}
            xlarge={xlarge}
        >
            {React.Children.map(children, (comp: any) => {
                return comp ? (
                    <StyledCol
                        {...comp?.props}
                        gutter={gutter}
                        medium={mapGutterToCol(
                            medium?.gutter,
                            comp?.props?.medium
                        )}
                        semilarge={mapGutterToCol(
                            semilarge?.gutter,
                            comp?.props?.semilarge
                        )}
                        large={mapGutterToCol(
                            large?.gutter,
                            comp?.props?.large
                        )}
                        xlarge={mapGutterToCol(
                            xlarge?.gutter,
                            comp?.props?.xlarge
                        )}
                    />
                ) : undefined;
            })}
        </StyledGrid>
    );
};

Grid.defaultProps = {
    gutter: gridSettings.gutter,
};

export default {
    Row: Grid,
    Col,
};
