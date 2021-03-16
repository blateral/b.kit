import React, { FC } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';

import { FontBase, getBaseTheme } from 'utils/styles';

type RecursivePartial<T> = {
    [P in keyof T]?: RecursivePartial<T[P]>;
};

export type Theme = RecursivePartial<DefaultTheme>;

/**
 * Assigning font base key values to theme. Searches for each font base object key inside target theme object and replacing the values
 * @param target Combined result object
 * @param source FontBase object with properties that should by overritten.
 */
const assignFontBase = (
    target: DefaultTheme,
    source?: RecursivePartial<FontBase>
) => {
    if (!source) return target;
    // deep iterate through target and search matching key
    const assign = (target: any, key: string, value: string) => {
        Object.keys(target).forEach((tKey) => {
            // check if target value is an object and no array
            if (
                target[tKey] &&
                typeof target[tKey] === 'object' &&
                !Array.isArray(target[tKey])
            ) {
                target[tKey] = assign(target[tKey], key, value);
            } else if (key === tKey) {
                target[tKey] = value;
            }
        });
        return target;
    };

    // search each base key and replace values
    Object.keys(source).forEach((sKey) => {
        if (source[sKey])
            target.fonts.types = assign(target.fonts.types, sKey, source[sKey]);
    });
    return target;
};

/**
 * Comnbining Theme objects
 * @param target Result theme object
 * @param source Theme object that should be assigned to target
 */
const assignTo = (target: DefaultTheme, source: Theme) => {
    const output = { ...target };

    Object.keys(source).forEach((key) => {
        const sourceVal = source[key];
        const targetVal = target[key];
        output[key] =
            targetVal &&
            sourceVal &&
            typeof targetVal === 'object' &&
            typeof sourceVal === 'object'
                ? assignTo(targetVal, sourceVal)
                : sourceVal;
    });
    return output;
};

export const LibThemeProvider: FC<{
    theme: Theme;
}> = ({ theme, children }) => {
    const combinedBaseTheme = assignFontBase(getBaseTheme(), theme.fonts?.base);
    const combinedTheme = assignTo(combinedBaseTheme, theme);
    return <ThemeProvider theme={combinedTheme}>{children}</ThemeProvider>;
};
