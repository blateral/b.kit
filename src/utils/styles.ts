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
