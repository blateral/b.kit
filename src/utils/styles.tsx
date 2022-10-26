/* eslint-disable react/display-name */
import * as Icons from 'components/base/icons/Icons';
import React from 'react';

import { css, DefaultTheme } from 'styled-components';
import { getSVGDataImg as getSVGData } from 'utils/dataURI';
import { CookieTypes } from './cookie-consent/useCookieConsent';
import { XOR } from './types';

export type MediaQueryType =
    | 'small'
    | 'medium'
    | 'semilarge'
    | 'large'
    | 'xlarge'
    | 'xxlarge';

export const mq: { [key in Exclude<MediaQueryType, 'small'>]: string } = {
    medium: '(min-width: 40em)', // 640 px
    semilarge: '(min-width: 52em)', // 832 px
    large: '(min-width: 64em)', // 1024 px
    xlarge: '(min-width: 90em)', // 1440 px
    xxlarge: '(min-width: 150em)', // 2400 px
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

export const withRange = (range: [number, number?], property: string) => {
    if (!property) return '';
    const min = range[0];
    const max = range[1];

    if (max !== undefined) {
        return `
            ${property}: ${min}px;
            ${property}: ${getSizeByRange(range as [number, number])};

            @media ${mq.xlarge} {
                ${property}: ${max}px;
            }
        `;
    } else {
        return `
            ${property}: ${min}px;
        `;
    }
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
    default: string;
    inverted: string;
    hover: string;
    invertedHover: string;
}

export type ColorOptionsType = keyof ColorOptions;

export interface Colors {
    text: {
        default: string;
        inverted: string;
        error: string;
        errorInverted: string;
        heading: string;
        headingInverted: string;
        copy: string;
        copyInverted: string;
        subtile: string;
        subtileInverted: string;
    };
    sectionBg: {
        light: string;
        medium: string;
        dark: string;
    };
    elementBg: {
        light: string;
        lightHover: string;
        medium: string;
        mediumHover: string;
        dark: string;
        darkHover: string;
    };
    primary: ColorOptions;
    secondary: ColorOptions;
    error: string;
    errorInverted: string;
}

export type ColorType = keyof Colors;

/***** Font Types *****/
export interface FontProps {
    family: string;
    weight?: string;
    style?: string;
    lineHeight?: string;
    letterSpacing?: string;
    size: [number, number?];
    textTransform?: string;
    textDecoration?: string;
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
    link: {
        color: string;
        colorInverted: string;
        colorHover: string;
        colorHoverInverted: string;
        textTransform?: string;
        textDecoration?: string;
    };
    navigation: {
        featured: FontProps;
        main: FontProps;
        sub: FontProps;
        secondary: FontProps;
    };
}

export type FontType = keyof Fonts;

/**
 * Base font styles for all font types
 */
export type FontBase = FontProps;

/***** Colors *****/
const defaultColors: Colors = {
    text: {
        default: '#333333',
        inverted: '#FAFAFA',
        error: '#FF2D2D',
        errorInverted: '#FF2D2D',
        heading: '#333333',
        headingInverted: '#FFFFFF',
        copy: '#333333',
        copyInverted: '#FFFFFF',
        subtile: '#878787',
        subtileInverted: '#878787',
    },
    sectionBg: {
        light: 'transparent',
        medium: '#F0F0F0',
        dark: '#000000',
    },
    elementBg: {
        light: '#FFFFFF',
        lightHover: '#FFDEDE',
        medium: '#DBDBDB',
        mediumHover: '#E0B5B5',
        dark: '#393434',
        darkHover: '#653434',
    },
    primary: {
        default: '#7749F8',
        inverted: '#A88AFB',
        hover: '#42278F',
        invertedHover: '#D2C1FF',
    },
    secondary: {
        default: '#6C757D',
        inverted: '#C5BEE0',
        hover: '#3b4045',
        invertedHover: '#BCB7C9',
    },
    error: '#FF2D2D',
    errorInverted: '#FF2D2D',
};

/***** Fonts *****/
const copyBase: FontProps = {
    family: '"Roboto", Roboto-fallback, Helvetica, sans-serif',
    weight: '400',
    style: 'normal',
    lineHeight: '1.5',
    letterSpacing: '0',
    size: [16],
    textTransform: '',
    color: defaultColors.text.copy,
    colorInverted: defaultColors.text.copyInverted,
};

const headingBase: FontProps = {
    family: '"Roboto", Roboto-fallback, Helvetica, sans-serif',
    weight: '700',
    style: 'normal',
    lineHeight: '1.17',
    letterSpacing: '0',
    size: [56],
    color: defaultColors.text.heading,
    colorInverted: defaultColors.text.headingInverted,
};

const defaultFonts: Fonts = {
    copy: {
        small: {
            ...copyBase,
            lineHeight: '1.42',
            size: [14],
        },
        medium: {
            ...copyBase,
            lineHeight: '1.5',
            size: [16],
        },
        big: {
            ...copyBase,
            lineHeight: '1.2',
            size: [20],
        },
    },
    'copy-i': {
        small: {
            ...copyBase,
            style: 'italic',
            lineHeight: '1.42',
            size: [14],
        },
        medium: {
            ...copyBase,
            style: 'italic',
            lineHeight: '1.5',
            size: [16],
        },
        big: {
            ...copyBase,
            style: 'italic',
            lineHeight: '1.2',
            size: [20],
        },
    },
    'copy-b': {
        small: {
            ...copyBase,
            weight: '700',
            lineHeight: '1.42',
            size: [14],
        },
        medium: {
            ...copyBase,
            weight: '700',
            lineHeight: '1.5',
            size: [16],
        },
        big: {
            ...copyBase,
            weight: '700',
            lineHeight: '1.2',
            size: [20],
        },
    },
    super: {
        ...headingBase,
        lineHeight: '1.43',
        size: [16],
    },
    'heading-1': headingBase,
    'heading-2': {
        ...headingBase,
        size: [40],
        lineHeight: '1.17',
    },
    'heading-3': {
        ...headingBase,
        size: [32],
        lineHeight: '1.17',
    },
    'heading-4': {
        ...headingBase,
        size: [24],
        lineHeight: '1.17',
    },
    callout: {
        small: {
            ...headingBase,
            lineHeight: '1.5',
            weight: '300',
            size: [32],
        },
        medium: {
            ...headingBase,
            weight: '300',
            lineHeight: '1.17',
            size: [72],
        },
        big: {
            ...headingBase,
            weight: '300',
            lineHeight: '1.17',
            size: [92],
        },
    },
    link: {
        color: '#2441DA',
        colorHover: '#122278',
        colorInverted: '#fff',
        colorHoverInverted: '#C8C8C8',
    },
    navigation: {
        featured: {
            ...copyBase,
            weight: '700',
            lineHeight: '1.5',
            size: [16],
        },
        main: {
            ...copyBase,
            weight: '700',
            lineHeight: '1.5',
            size: [16],
        },
        sub: {
            ...copyBase,
            weight: '700',
            lineHeight: '1.5',
            size: [16],
        },
        secondary: {
            ...copyBase,
            weight: '700',
            lineHeight: '1.5',
            size: [16],
        },
    },
};

/***** Global Settings *****/
export type NavBarHeights = {
    small: number;
    large: number;
};

interface LinkIcon {
    isExternal?: boolean;
    /** Patterns of Href value to show this icon (e.g. .svg, .png) */
    patterns: string[];
    /** Icon scale factor. 1 is default */
    scale?: (props: { type?: keyof Fonts; size?: FontOptionType }) => number;
    /** Set vertical alignment of icon in text */
    vAlign?:
        | 'bottom'
        | 'baseline'
        | 'middle'
        | 'top'
        | 'text-top'
        | 'text-bottom'
        | 'super'
        | 'sub';
}

export interface LinkUrlIcon extends LinkIcon {
    // icon (e.g. URL, base64 or icon font char)
    iconUrl: (isInverted?: boolean) => string;
}

export interface LinkFontIcon extends LinkIcon {
    /** Define font family for icon font */
    iconFont: string;
    /** Define icon font character */
    iconChar: string;
}

export interface GlobalSettings {
    sections: {
        /** Paddings and Margins for seperating each section */
        seperation: {
            forcePadding: boolean;
            padding: {
                default: [number, number?];
                stackable: [number, number?];
            };
            margin: {
                default: [number, number?];
                stackable: [number, number?];
            };
        };

        /** Radius of image and card edges */
        edgeRadius: string | null;

        /** Customnize gradient for all text on image background gradients */
        imageTextGradient: string;

        /** Show placeholder background unitl image has been loaded */
        imagePlaceholderBg: {
            default: string;
            inverted: string;
        };

        /** Date and Time Formats for all news sections */
        newsDateFormat: (date: Date) => string;
        newsTimeFormat: (date: Date) => string;
        newsLocaleKey: 'de' | 'en';

        /** Date and Time Formats for all event sections */
        eventDateFormat: (date: Date) => string;
        eventTimeFormat: (date: Date) => string;
        eventTimespanFormat: (start: Date, duration?: number) => string;
        eventLocaleKey: 'de' | 'en';

        /** Date and Time Formats for Datepickers */
        datepickerLocaleKey: 'de' | 'en';
        datepickerDateFormat: string;
    };
    cookie: {
        name: string;
        types: CookieTypes;
        lifetime: number;

        /** Date and Time Formats for cookie consent */
        consentDateFormat: (date: Date) => string;
        consentTimeFormat: (date: Date) => string;
        consentLocaleKey: 'de' | 'en';
        consentStatusFormat: string;

        videoCookieTypeRestrictions: string[];
    };
    navigation: {
        /** Settings of top navigation bar */
        navBar: {
            /**
             * Heights of top bar.
             * Array values are like: [mobile, desktop]
             * Top navbar is hidden if value equal 0
             */
            topHeight: {
                small: [number, number?];
                large: [number, number?];
            };
            /**
             * Heights of main bar.
             * Array values are like: [mobile, desktop]
             */
            mainHeight: {
                small: [number, number?];
                large: [number, number?];
            };
            /**
             * Heights of bottom bar.
             * Array values are like: [mobile, desktop]
             */
            bottomHeight: {
                small: [number, number?];
                large: [number, number?];
            };
        };
        menu: {
            /**
             * Heights of menu header.
             * Array values are like: [mobile, desktop]
             * Menu header is hidden if value equal 0
             */
            headerHeight: {
                small: [number, number?];
                large: [number, number?];
            };
        };
    };
    icons: {
        /** Icon setup for link/download lists */
        // linkIcons: {
        //     default: (isInverted?: boolean) => React.ReactNode;
        //     variations: Array<LinkIcon>;
        // };
        linkIcons: Array<XOR<LinkUrlIcon, LinkFontIcon>>;
    };
}

const getLinkIconScale = (props: {
    type?: keyof Fonts;
    size?: FontOptionType;
}) => {
    if (
        props.type === 'copy' ||
        props.type === 'copy-b' ||
        props.type === 'copy-i'
    ) {
        if (props.size === 'medium') return 0.8;
        if (props.size === 'small') return 0.7;
        if (props.size === 'big') return 0.9;
    }
    return 0.8;
};

const defaultGlobalSettings: GlobalSettings = {
    sections: {
        seperation: {
            forcePadding: false,
            padding: {
                default: [spacings.nudge * 5, spacings.nudge * 10],
                stackable: [spacings.spacer],
            },
            margin: {
                default: [spacings.nudge * 5, spacings.nudge * 10],
                stackable: [spacings.spacer],
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
        imagePlaceholderBg: {
            default: '#e2e2e2',
            inverted: '#1e1c1f',
        },
        newsDateFormat: () => 'dd.mm.yy',
        newsTimeFormat: () => 'hh:mm',
        newsLocaleKey: 'de',
        eventDateFormat: () => 'ddd, dd.mm.yyyy',
        eventTimeFormat: () => 'hh:mm',
        eventTimespanFormat: () => '<START><SEP><END> Uhr',
        eventLocaleKey: 'de',
        datepickerLocaleKey: 'de',
        datepickerDateFormat: 'dd.MM.yyyy',
    },
    cookie: {
        name: 'cookie-consent-v2',
        lifetime: 365,
        types: {
            essentials: {
                isAccepted: true,
                isEditable: false,
                label: 'Essentielle Funktionen',
            },
            analytics: {
                isAccepted: false,
                isEditable: true,
                label: 'Analyse & Marketing',
            },
            functionals: {
                isAccepted: false,
                isEditable: true,
                label: 'Funktionelle Erweiterungen',
            },
        },
        consentDateFormat: () => 'dd.mm.yy',
        consentTimeFormat: () => 'hh:mm',
        consentLocaleKey: 'de',
        consentStatusFormat: 'Cookie aktualisiert am <DATE> um <TIME> Uhr',

        videoCookieTypeRestrictions: ['functionals'],
    },
    navigation: {
        navBar: {
            topHeight: {
                small: [0, 40],
                large: [30, 40],
            },
            mainHeight: {
                small: [80, 90],
                large: [100, 120],
            },
            bottomHeight: {
                small: [0, 40],
                large: [30, 40],
            },
        },
        menu: {
            headerHeight: {
                small: [210],
                large: [210],
            },
        },
    },
    icons: {
        linkIcons: [
            {
                iconUrl: (isInverted) =>
                    getSVGData(
                        <Icons.BoxArrowUpRight
                            iconColor={
                                isInverted
                                    ? defaultFonts.link.colorInverted
                                    : defaultFonts.link.color
                            }
                        />
                    ),
                patterns: [], // default link icon
                isExternal: true,
                scale: getLinkIconScale,
            },
            {
                iconUrl: (isInverted) =>
                    getSVGData(
                        <Icons.Mail
                            iconColor={
                                isInverted
                                    ? defaultFonts.link.colorInverted
                                    : defaultFonts.link.color
                            }
                        />
                    ),
                patterns: ['mailto:'],
                scale: getLinkIconScale,
            },
            {
                iconUrl: (isInverted) =>
                    getSVGData(
                        <Icons.Phone
                            iconColor={
                                isInverted
                                    ? defaultFonts.link.colorInverted
                                    : defaultFonts.link.color
                            }
                        />
                    ),
                patterns: ['tel:'],
                scale: getLinkIconScale,
            },
            {
                iconUrl: (isInverted) =>
                    getSVGData(
                        <Icons.Pdf
                            iconColor={
                                isInverted
                                    ? defaultFonts.link.colorInverted
                                    : defaultFonts.link.color
                            }
                        />
                    ),
                patterns: ['.pdf'],
                scale: getLinkIconScale,
            },
            {
                iconUrl: (isInverted) =>
                    getSVGData(
                        <Icons.Word
                            iconColor={
                                isInverted
                                    ? defaultFonts.link.colorInverted
                                    : defaultFonts.link.color
                            }
                        />
                    ),
                patterns: ['.docx'],
                scale: getLinkIconScale,
            },
            {
                iconUrl: (isInverted) =>
                    getSVGData(
                        <Icons.Excel
                            iconColor={
                                isInverted
                                    ? defaultFonts.link.colorInverted
                                    : defaultFonts.link.color
                            }
                        />
                    ),
                patterns: ['.xlsx'],
                scale: getLinkIconScale,
            },
            {
                iconUrl: (isInverted) =>
                    getSVGData(
                        <Icons.PowerPoint
                            iconColor={
                                isInverted
                                    ? defaultFonts.link.colorInverted
                                    : defaultFonts.link.color
                            }
                        />
                    ),
                patterns: ['.pptx'],
                scale: getLinkIconScale,
            },
            {
                iconUrl: (isInverted) =>
                    getSVGData(
                        <Icons.Image
                            iconColor={
                                isInverted
                                    ? defaultFonts.link.colorInverted
                                    : defaultFonts.link.color
                            }
                        />
                    ),
                patterns: ['.jpg', '.jpeg', '.png', '.svg'],
                scale: getLinkIconScale,
            },
            {
                iconUrl: (isInverted) =>
                    getSVGData(
                        <Icons.Zip
                            iconColor={
                                isInverted
                                    ? defaultFonts.link.colorInverted
                                    : defaultFonts.link.color
                            }
                        />
                    ),
                patterns: ['.zip', '.tar'],
                scale: getLinkIconScale,
            },
        ],
    },
};

/***** Theme Helper *****/
export const baseTheme: DefaultTheme = {
    colors: { ...defaultColors },
    fonts: { types: { ...defaultFonts } },
    globals: { ...defaultGlobalSettings },
};

export const getTheme = (theme?: DefaultTheme) => {
    return theme && theme.colors && theme.fonts && theme.globals
        ? theme
        : baseTheme;
};

export const getColors = (theme?: DefaultTheme) => {
    return theme && theme.colors ? theme.colors : baseTheme.colors;
};

export const getFonts = (theme?: DefaultTheme) => {
    return theme && theme.fonts?.types
        ? theme.fonts.types
        : baseTheme.fonts.types;
};

export const getGlobals = (theme?: DefaultTheme) => {
    return theme && theme.globals ? theme.globals : baseTheme.globals;
};
