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
    nudge: 8,
    spacer: 32,
    wrapperSmall: 1000,
    wrapper: 1440,
    wrapperLarge: 2400,
};

/***** Range Helper *****/
export const getSizeByRange = (range: [number, number]): string =>
    `calc(${range[0]}px + (${range[1]} - ${range[0]}) * ((100vw - 300px) / (${spacings.wrapper} - 320)));`;

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

/***** New Color Types *****/
interface NewColorOptions {
    default: string;
    inverted: string;
}

export type NewColorOptionsType = keyof NewColorOptions;

export interface NewColors {
    text: NewColorOptions & {
        error: string;
    },
    bg: {
        default: string;
        mono: string;
        inverted: string;
    },
    primary: NewColorOptions,
    secondary: NewColorOptions,
    dark: string;
    light: string;
    mono: {
        medium: string,
    };
    error: string;

}

export type NewColorType = keyof NewColors;

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
    error: string;
    new: NewColors;
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
    callout: FontOptions;
}

export type FontType = keyof Fonts;

/**
 * Base font styles for all font types
 */
export type FontBase = FontProps;



const newColors: NewColors = {
    text: {
        default: '#333333',
        inverted: '#FAFAFA',
        error: '#FF2D2D',
    },
    bg: {
        default: 'transparent',
        mono: '#F0F0F0',
        inverted: '#333333',
    },
    primary: {
        default: '#FFE600',
        inverted: '#DFC800',
    },
    secondary: {
        default: '#DAD0FF',
        inverted: '#C5BEE0',
    },
    dark: '#333333',
    light: '#FAFAFA',
    mono: {
        medium: '#C8C8C8'
    },
    error: '#FF2D2D',
}

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
        light: '#FFC5A5',
        medium: '#FF9B63',
        dark: '#FF7F37',
    },
    secondary: {
        light: '#5A7384',
        medium: '#35444E',
        dark: '#222A30',
    },
    error: '#ff0000',
    new: newColors,
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
    color: defaultColors.new.text.default,
    colorInverted: defaultColors.new.text.inverted,
};

const headingBase: FontProps = {
    family: 'Roboto',
    weight: '700',
    style: 'normal',
    lineHeight: '1.1',
    letterSpacing: '0',
    size: [38, 40],
    color: defaultColors.new.text.default,
    colorInverted: defaultColors.new.text.inverted,
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
        size: [27, 30],
        lineHeight: '1.16',
    },
    'heading-4': {
        ...headingBase,
        size: [20, 25],
        lineHeight: '1.16',
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
        /** Paddings and Margins for seperating each section */
        seperation: {
            forcePadding: boolean;
            padding: {
                default: [number, number];
                stackable: [number, number];
            };
            margin: {
                default: [number, number];
                stackable: [number, number];
            };
        };

        /** Radius of image and card edges */
        edgeRadius: string | null;
        /** Customnize gradient for all text on image background gradients */
        imageTextGradient: string;
        /** Date and Time Formats for all news sections */
        newsDateFormat: string;
        newsTimeFormat: string;
        newsLocaleKey: 'de' | 'en';
        /** Date and Time Formats for Datepickers */
        datepickerLocaleKey: 'de' | 'en';
        datepickerDateFormat: string;
    };
}

const defaultGlobalSettings: GlobalSettings = {
    sections: {
        seperation: {
            forcePadding: false,
            padding: {
                default: [spacings.nudge * 5, spacings.nudge * 10],
                stackable: [spacings.spacer, spacings.spacer],
            },
            margin: {
                default: [spacings.nudge * 5, spacings.nudge * 10],
                stackable: [spacings.spacer, spacings.spacer],
            },
        },
        edgeRadius: null,
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
        newsLocaleKey: 'de',
        datepickerLocaleKey: 'de',
        datepickerDateFormat: 'dd.MM.yyyy',
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
