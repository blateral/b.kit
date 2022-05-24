import { clampValue } from './clamp';

// converting 6 character hex color code to rgba string
export const hexToRgba = (hex: string, alpha = 1) => {
    const rgb = hex.match(/\w\w/g)?.map((x) => parseInt(x, 16));
    if (!rgb) return undefined;
    if (!rgb[0] || isNaN(rgb[0])) return undefined;
    if (!rgb[1] || isNaN(rgb[1])) return undefined;
    if (!rgb[2] || isNaN(rgb[2])) return undefined;

    return `rgba(${rgb[0]},${rgb[1]},${rgb[2]},${clampValue(alpha, 0, 1)})`;
};
