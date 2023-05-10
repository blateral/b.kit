import { css, DefaultTheme } from 'styled-components';

export type MediaQueryType =
    | 'small'
    | 'medium'
    | 'semilarge'
    | 'large'
    | 'xlarge'
    | 'xxlarge'
    | 'xxxLarge';

export const mq: { [key in Exclude<MediaQueryType, 'small'>]: string } = {
    medium: '(min-width: 40em)', // 640 px
    semilarge: '(min-width: 52em)', // 832 px
    large: '(min-width: 64em)', // 1024 px
    xlarge: '(min-width: 90em)', // 1440 px
    xxlarge: '(min-width: 105em)', // 1680 px
    xxxLarge: '(min-width: 150em)', // 2400 px
};

export const spacings = {
    nudge: 5,
    spacer: 20,
    wrapperSmall: 1000,
    wrapper: 1440,
    wrapperLarge: 2400,
};

/***** Range Helper *****/
export const getSizeByRange = (range: [number, number]): string =>
    `calc(${range[0]}px + (${range[1]} - ${range[0]}) * ((100vw - 300px) / (${spacings.wrapperLarge} - 320)));`;

export const withRange = (
    range: [number, number],
    property: string
): string => {
    if (!property) return '';

    return `
        ${property}: ${range[0]}px;
        ${property}: ${getSizeByRange(range)};

        @media ${mq.xxlarge} {
            ${property}: ${range[1]}px;
        }
    `;
};

/**
 * Generate css attributes to style text color with plain color or gradient
 * @param fallbackColor
 * @param gradient
 */
export const styleTextColor = (fallbackColor?: string, gradient?: string) => {
    if (gradient) {
        return css`
            color: ${fallbackColor};

            @supports (-webkit-text-stroke: thin) {
                padding-top: 2px;
                background: ${gradient};
                background-clip: text;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }
        `;
    } else {
        return css`
            color: ${fallbackColor};
        `;
    }
};

/***** Color Types *****/
interface ColorOptions {
    light: string;
    medium: string;
    dark: string;
}

export type ColorOptionsType = keyof ColorOptions;

export interface Colors {
    dark: string;
    light: string;
    mono: ColorOptions;
    primary: ColorOptions;
    secondary: ColorOptions;
    tertiary: ColorOptions;
}

export type ColorType = keyof Colors;

/***** Font Types *****/
export interface FontProps {
    family: string;
    weight?: string;
    style?: string;
    lineHeight?: string;
    letterSpacing?: string;
    size: [number, number];
    textTransform?: string;
    color?: string;
    colorInverted?: string;
    colorGradient?: string;
    colorGradientInverted?: string;
}

export type FontPropsType = keyof FontProps;

export interface FontOptions {
    small: FontProps;
    medium: FontProps;
    big: FontProps;
    
}

export type FontOptionType = keyof FontOptions;

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

export type FontType = keyof Fonts;

/**
 * Base font styles for all font types
 */
export type FontBase = FontProps;

/***** Colors *****/
const defaultColors: Colors = {
    dark: '#000000',
    light: '#ffffff',
    mono: {
        light: '#F0F0F0',
        medium: '#C8C8C8',
        dark: '#A5A5A5',
    },
    primary: {
        light: '#DD8AA3',
        medium: '#98012E',
        dark: '#59011B',
    },
    secondary: {
        light: '#5A7384',
        medium: '#35444E',
        dark: '#222A30',
    },
    tertiary: {
        light: '#F2F5FA',
        medium: '#C9CED7',
        dark: '#A8ABB4',
    },
};

/***** Fonts *****/
const copyBase: FontProps = {
    family: 'Roboto',
    weight: '400',
    style: 'normal',
    lineHeight: '1.53',
    letterSpacing: '0',
    size: [10, 13],
    textTransform: '',
    color: defaultColors.dark,
    colorInverted: defaultColors.light,
};

const headingBase: FontProps = {
    family: 'Roboto',
    weight: '700',
    style: 'normal',
    lineHeight: '1.1',
    letterSpacing: '0',
    size: [38, 40],
    color: defaultColors.dark,
    colorInverted: defaultColors.light,
};

const defaultFonts: Fonts = {
    copy: {
        small: {
            ...copyBase,
            lineHeight: '1.53',
            size: [11, 13],
        },
        medium: {
            ...copyBase,
            lineHeight: '1.43',
            size: [14, 16],
        },
        big: {
            ...copyBase,
            lineHeight: '1.18',
            size: [20, 22],
        },
    },
    'copy-i': {
        small: {
            ...copyBase,
            style: 'italic',
            lineHeight: '1.53',
            size: [11, 13],
        },
        medium: {
            ...copyBase,
            style: 'italic',
            lineHeight: '1.43',
            size: [14, 16],
        },
        big: {
            ...copyBase,
            style: 'italic',
            lineHeight: '1.18',
            size: [20, 22],
        },
    },
    'copy-b': {
        small: {
            ...copyBase,
            weight: '700',
            lineHeight: '1.53',
            size: [11, 13],
        },
        medium: {
            ...copyBase,
            weight: '700',
            lineHeight: '1.43',
            size: [14, 16],
        },
        big: {
            ...copyBase,
            weight: '700',
            lineHeight: '1.18',
            size: [20, 22],
        },
    },
    super: {
        ...copyBase,
        weight: '700',
        lineHeight: '1.43',
        size: [14, 16],
    },
    'heading-1': headingBase,
    'heading-2': {
        ...headingBase,
        size: [32, 35],
        lineHeight: '1.14',
    },
    'heading-3': {
        ...headingBase,
        size: [19, 22],
        lineHeight: '1.14',
    },
    'heading-4': {
        ...headingBase,
        size: [16, 19],
        lineHeight: '1.5',
    },
    label: {
        small: {
            ...copyBase,
            lineHeight: '1.53',
            size: [11, 13],
        },
        medium: {
            ...copyBase,
            lineHeight: '1.43',
            size: [14, 16],
        },
        big: {
            ...copyBase,
            lineHeight: '1.18',
            size: [20, 22],
        },
    },
    callout: {
        small: {
            ...headingBase,
            lineHeight: '1.14',
            size: [33, 35],
        },
        medium: {
            ...headingBase,
            lineHeight: '1.18',
            size: [50, 55],
        },
        big: {
            ...headingBase,
            lineHeight: '1.18',
            size: [60, 62],
        },
    },
};

/***** Global Settings *****/
export interface GlobalSettings {
    sections: {
        /** Add seperation around sections with background attribute 'plain' (e.g. Teaser) */
        plainSeperation: boolean;
        /** Customnize gradient for all text on image background gradients */
        imageTextGradient: string;
        /** Date and Time Formats for all news sections */
        newsDateFormat: string;
        newsTimeFormat: string;
        newsLocaleKey: 'de' | 'en';
    };
}

const defaultGlobalSettings: GlobalSettings = {
    sections: {
        plainSeperation: false,
        imageTextGradient: `
            linear-gradient(
                0deg,
                rgba(0, 0, 0, 0.6) 0%,
                rgba(0, 0, 0, 0.4) 30%,
                rgba(0, 0, 0, 0.1) 60%,
                rgba(0, 0, 0, 0) 100%
            );
        `,
        newsDateFormat: 'dd/mm/yy',
        newsTimeFormat: 'hh:mm',
        newsLocaleKey: 'en',
    },
};

/***** Theme Helper *****/
export const getBaseTheme = () => {
    return {
        colors: { ...defaultColors },
        fonts: { types: { ...defaultFonts } },
        globalSettings: { ...defaultGlobalSettings },
    } as DefaultTheme;
};

export const getTheme = (theme?: DefaultTheme) => {
    return (
        (theme && theme.colors && theme.fonts && theme.globalSettings) ||
        getBaseTheme()
    );
};

export const getColors = (theme?: DefaultTheme) => {
    return theme && theme.colors ? theme.colors : getBaseTheme().colors;
};

export const getFonts = (theme?: DefaultTheme) => {
    return theme && theme.fonts?.types
        ? theme.fonts.types
        : getBaseTheme().fonts.types;
};

export const getGlobalSettings = (theme?: DefaultTheme) => {
    return theme && theme.globalSettings
        ? theme.globalSettings
        : getBaseTheme().globalSettings;
};
