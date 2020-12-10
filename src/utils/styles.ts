import { DefaultTheme } from 'styled-components';

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

/***** Color Types *****/
interface ColorOptions {
    light: string;
    medium: string;
    dark: string;
}

export type ColorOptionsType = keyof ColorOptions;

export interface Colors {
    black: string;
    white: string;
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

/***** Colors *****/
const defaultColors: Colors = {
    black: '#000000',
    white: '#ffffff',
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
};

const headingBase: FontProps = {
    family: 'Roboto',
    weight: '700',
    style: 'normal',
    lineHeight: '1.1',
    letterSpacing: '0',
    size: [38, 40],
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
        size: [32, 35],
        lineHeight: '1.14',
    },
    'heading-4': {
        ...headingBase,
        size: [32, 35],
        lineHeight: '1.14',
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
};

/***** Theme Helper *****/
export const getBaseTheme = () => {
    return { colors: defaultColors, fonts: defaultFonts } as DefaultTheme;
};

export const getTheme = (theme?: DefaultTheme) => {
    return (theme && theme.colors && theme.fonts) || getBaseTheme();
};

export const getColors = (theme?: DefaultTheme) => {
    return theme && theme.colors ? theme.colors : getBaseTheme().colors;
};

export const getFonts = (theme?: DefaultTheme) => {
    return theme && theme.fonts ? theme.fonts : getBaseTheme().fonts;
};
