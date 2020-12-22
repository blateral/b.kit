import React, { FC } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';

import { getBaseTheme } from 'utils/styles';

type RecursivePartial<T> = {
    [P in keyof T]?: RecursivePartial<T[P]>;
};

const assignTo = (
    target: DefaultTheme,
    source: RecursivePartial<DefaultTheme>
) => {
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

const LibThemeProvider: FC<{
    theme: RecursivePartial<DefaultTheme>;
}> = ({ theme, children }) => {
    const combinedTheme = assignTo(getBaseTheme(), theme);
    return <ThemeProvider theme={combinedTheme}>{children}</ThemeProvider>;
};

export default LibThemeProvider;
