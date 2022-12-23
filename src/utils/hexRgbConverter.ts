import { clampValue } from './clamp';

/** Convert hex string to full 6 digit hex */
const toFullHex = (hex: string) => {
    if (!hex) return undefined;
    if (hex.length >= 6) return hex;

    const chars = hex.split('').map((char) => {
        if (char === '#') return char;
        return char + char;
    });
    return chars.join('');
};

// converting 6 character hex color code to rgba string
export const hexToRgba = (hex: string, alpha = 1) => {
    const fullHex = toFullHex(hex);
    if (!fullHex) return undefined;

    const rgb = fullHex.match(/\w\w/g)?.map((x) => parseInt(x, 16));
    if (!rgb) return undefined;
    if (!rgb[0] || isNaN(rgb[0])) return undefined;
    if (!rgb[1] || isNaN(rgb[1])) return undefined;
    if (!rgb[2] || isNaN(rgb[2])) return undefined;

    return `rgba(${rgb[0]},${rgb[1]},${rgb[2]},${clampValue(alpha, 0, 1)})`;
};
