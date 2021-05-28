// converting 6 character hex color code to rgba string
export const hexToRgba = (hex: string, alpha = 1) => {
    const rgb = hex.match(/\w\w/g)?.map((x) => parseInt(x, 16));
    return rgb && `rgba(${rgb[0]},${rgb[1]},${rgb[2]},${alpha})`;
};
