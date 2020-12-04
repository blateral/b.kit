/***** Color Types *****/
interface ColorOptions {
    light: string;
    medium: string;
    dark: string;
}
export interface Colors {
    black: string;
    white: string;
    mono: ColorOptions;
    primary: ColorOptions;
    secondary: ColorOptions;
    tertiary: ColorOptions;
}
export declare type ColorType = keyof Colors;
/***** Font Types *****/
export interface FontProps {
    family: string;
    weight?: string;
    style?: string;
    lineHeight?: string;
    letterSpacing?: string;
    size: [number, number];
    textTransform?: string;
}
export interface FontOptions {
    small: FontProps;
    medium: FontProps;
    big: FontProps;
}
export declare type FontOptionType = keyof FontOptions;
export interface Fonts {
    copy: FontOptions;
    'copy-i': FontOptions;
    'copy-b': FontOptions;
    super: FontProps;
    'heading-1': FontProps;
    'heading-2': FontProps;
    'heading-3': FontProps;
    'heading-4': FontProps;
    label: FontOptions;
    callout: FontOptions;
}
export declare type FontType = keyof Fonts;
/***** Colors *****/
export declare const colors: Colors;
export declare const fonts: Fonts;
export {};
//# sourceMappingURL=theme.d.ts.map