import * as React from 'react';
export interface ColPropsSettings {
    /** Normalisierte Werte zwischen 0 und 1: z.B.  12 von 28 Spalten (12 / 28) */
    span?: number;
    /** Normalisierte Werte zwischen -1 und 1: z.B. -12 von 28 Spalten (-12 / 28) */
    move?: number;
    valign?: VerticalAlign;
}
declare type VerticalAlign = 'top' | 'center' | 'bottom';
interface ColProps extends ColPropsSettings {
    medium?: ColPropsSettings;
    semilarge?: ColPropsSettings;
    large?: ColPropsSettings;
    xlarge?: ColPropsSettings;
}
interface GridProps {
    gutter?: number;
    valign?: VerticalAlign;
}
declare const _default: {
    Row: React.FC<GridProps>;
    Col: React.FC<ColProps>;
};
export default _default;
//# sourceMappingURL=Grid.d.ts.map