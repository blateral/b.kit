import { DefaultTheme } from 'styled-components';

import { getFonts as font } from 'utils/styles';
import { clampValue } from './clamp';

export const getFormFieldTextSize = (
    theme: DefaultTheme
): [number, number?] => {
    const min = clampValue(font(theme).copy.small.size[0], 16);
    const max = font(theme).copy.small.size[1];
    return [min, max];
};
