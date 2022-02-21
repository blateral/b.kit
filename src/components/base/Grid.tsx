import * as React from 'react';
import styled, { css } from 'styled-components';
import { spacings, mq } from 'utils/styles';

export interface ColPropsSettings {
    /** Normalisierte Werte zwischen 0 und 1: z.B.  12 von 28 Spalten (12 / 28) */
    span?: number;
    /** Normalisierte Werte zwischen -1 und 1: z.B. -12 von 28 Spalten (-12 / 28) */
    move?: number;
    valign?: VerticalAlign;
    halign?: HorizontalAlign;
    textAlign?: TextAlign;
}

type VerticalAlign = 'top' | 'center' | 'bottom';
type HorizontalAlign = 'left' | 'center' | 'right';
type TextAlign = 'left' | 'center' | 'right';

interface ColProps extends ColPropsSettings {
    medium?: Pick<ColPropsSettings, 'span' | 'move'>;
    semilarge?: Pick<ColPropsSettings, 'span' | 'move'>;
    large?: Pick<ColPropsSettings, 'span' | 'move'>;
    xlarge?: Pick<ColPropsSettings, 'span' | 'move'>;
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

const getWidth = (props: ColProps) => {
    const mediumSpan = props?.medium ? props.medium.span : 1;
    const semilargeSpan = props?.semilarge ? props.semilarge.span : 1;
    const largeSpan = props?.large ? props.large.span : 1;
    const xlargeSpan = props?.xlarge ? props.xlarge.span : 1;

    return css`
        width: ${(props.span || 1) * 100}%;

        ${(props: ColProps) => {
            return props?.medium
                ? css`
                      @media ${mq.medium} {
                          width: ${(mediumSpan || 1) * 100}%;
                      }
                  `
                : '';
        }}

        ${(props: ColProps) => {
            return props?.semilarge
                ? css`
                      @media ${mq.semilarge} {
                          width: ${(semilargeSpan || 1) * 100}%;
                      }
                  `
                : '';
        }}

        ${(props: ColProps) => {
            return props?.large
                ? css`
                      @media ${mq.large} {
                          width: ${(largeSpan || 1) * 100}%;
                      }
                  `
                : '';
        }}

        ${(props: ColProps) => {
            return props?.xlarge
                ? css`
                      @media ${mq.xlarge} {
                          width: ${(xlargeSpan || 1) * 100}%;
                      }
                  `
                : '';
        }}
    `;
};

const getLeftRight = (props: ColProps) => {
    const mediumMove = props?.medium ? props?.medium.move : 0;
    const semilargeMove = props?.semilarge ? props?.semilarge.move : 0;
    const largeMove = props?.large ? props?.large.move : 0;
    const xlargeMove = props?.xlarge ? props?.xlarge.move : 0;

    return css`
        left: ${props?.move && props?.move > 0
            ? props?.move * 100 + '%'
            : 'auto'};
        right: ${props?.move && props?.move < 0
            ? props?.move * -100 + '%'
            : 'auto'};

        ${(props: ColProps) => {
            return props?.medium
                ? css`
                      @media ${mq.medium} {
                          left: ${mediumMove && mediumMove > 0
                              ? mediumMove * 100 + '%'
                              : 'auto'};
                          right: ${mediumMove && mediumMove < 0
                              ? mediumMove * -100 + '%'
                              : 'auto'};
                      }
                  `
                : '';
        }}

        ${(props: ColProps) => {
            return props?.semilarge
                ? css`
                      @media ${mq.semilarge} {
                          left: ${semilargeMove && semilargeMove > 0
                              ? semilargeMove * 100 + '%'
                              : 'auto'};
                          right: ${semilargeMove && semilargeMove < 0
                              ? semilargeMove * -100 + '%'
                              : 'auto'};
                      }
                  `
                : '';
        }}

        ${(props: ColProps) => {
            return props?.large
                ? css`
                      @media ${mq.large} {
                          left: ${largeMove && largeMove > 0
                              ? largeMove * 100 + '%'
                              : 'auto'};
                          right: ${largeMove && largeMove < 0
                              ? largeMove * -100 + '%'
                              : 'auto'};
                      }
                  `
                : '';
        }}

        ${(props: ColProps) => {
            return props?.xlarge
                ? css`
                      @media ${mq.xlarge} {
                          left: ${xlargeMove && xlargeMove > 0
                              ? xlargeMove * 100 + '%'
                              : 'auto'};
                          right: ${xlargeMove && xlargeMove < 0
                              ? xlargeMove * -100 + '%'
                              : 'auto'};
                      }
                  `
                : '';
        }}
    `;
};

const getGutter = (mode: 'grid' | 'col') => (props: GridProps) => {
    const mediumGutter = props?.medium?.gutter;
    const semilargeGutter = props?.semilarge?.gutter;
    const largeGutter = props?.large?.gutter;
    const xlargeGutter = props?.xlarge?.gutter;

    const propertyTop = mode === 'grid' ? 'margin-top: -' : 'padding-top: ';
    const propertyLeft = mode === 'grid' ? 'margin-left: -' : 'padding-left: ';

    return css`
        ${propertyTop}${props.gutter || 0}px;
        ${propertyLeft}${props.gutter || 0}px;

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

const StyledCol = styled.div<GridProps & ColProps>`
    ${getWidth};
    ${getLeftRight};
    ${getGutter('col')}
    display: block;
    position: relative;

    text-align: ${({ textAlign }) => textAlign || 'left'};
    align-self: ${({ valign }) => {
        switch (valign) {
            case 'top':
                return 'flex-start';
            case 'center':
                return 'center';
            case 'bottom':
                return 'flex-end';
            default:
                return undefined;
        }
    }};
`;

const Col: React.FC<ColProps> = (props) => {
    return <React.Fragment>{props?.children}</React.Fragment>;
};

interface GridPropsSettings {
    gutter?: number;
    valign?: VerticalAlign;
    halign?: HorizontalAlign;
    textAlign?: TextAlign;
}

interface GridProps extends GridPropsSettings {
    medium?: Pick<GridPropsSettings, 'gutter'>;
    semilarge?: Pick<GridPropsSettings, 'gutter'>;
    large?: Pick<GridPropsSettings, 'gutter'>;
    xlarge?: Pick<GridPropsSettings, 'gutter'>;
}

const StyledGrid = styled.div<GridProps>`
    ${getGutter('grid')}
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    text-align: ${({ textAlign }) => textAlign || 'left'};
    align-items: ${({ valign }) => {
        switch (valign) {
            case 'top':
                return 'flex-start';
            case 'center':
                return 'center';
            case 'bottom':
                return 'flex-end';
            default:
                return undefined;
        }
    }};

    justify-content: ${({ halign }) => {
        switch (halign) {
            case 'left':
                return 'flex-start';
            case 'center':
                return 'center';
            case 'right':
                return 'flex-end';
            default:
                return undefined;
        }
    }};
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
