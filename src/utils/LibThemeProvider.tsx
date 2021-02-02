import React, { FC } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';

import { getBaseTheme } from 'utils/styles';

type RecursivePartial<T> = {
    [P in keyof T]?: RecursivePartial<T[P]>;
};

export type Theme = RecursivePartial<DefaultTheme>;

const assignTo = (target: DefaultTheme, source: Theme) => {
    Object.keys(source).forEach((key) => {
        const sourceVal = source[key];
        const targetVal = target[key];
        target[key] =
            targetVal &&
            sourceVal &&
            typeof targetVal === 'object' &&
            typeof sourceVal === 'object'
                ? assignTo(targetVal, sourceVal)
                : sourceVal;
    });
    return target;
};

export const LibThemeProvider: FC<{
    theme: Theme;
}> = ({ theme, children }) => {
    const combinedTheme = assignTo(getBaseTheme(), theme);
    return <ThemeProvider theme={combinedTheme}>{children}</ThemeProvider>;
};
