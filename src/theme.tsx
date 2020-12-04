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
export const colors: Colors = {
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

export const fonts: Fonts = {
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
