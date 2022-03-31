/* eslint-disable react/display-name */
import React, { FC, useContext } from 'react';
import { DefaultTheme, ThemeContext, ThemeProvider } from 'styled-components';

import {
    FontBase,
    baseTheme,
    getColors,
    getFonts,
    getGlobals,
} from 'utils/styles';

export type RecursivePartial<T> = {
    [P in keyof T]?: RecursivePartial<T[P]>;
};

export type ThemeMods = RecursivePartial<DefaultTheme>;

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
 * Combining Theme objects
 * @param target Result theme object
 * @param source Theme object that should be assigned to target
 */
export const assignTo = <T extends ThemeMods | DefaultTheme>(
    target: T,
    source?: ThemeMods
) => {
    const output = { ...target };
    if (!source) return output as T;

    Object.keys(source).forEach((key) => {
        const sourceVal = source[key];
        const targetVal = target[key];

        if (
            targetVal &&
            sourceVal &&
            typeof targetVal === 'object' &&
            typeof sourceVal === 'object'
        ) {
            output[key] = assignTo(targetVal, sourceVal);
        } else if (sourceVal) {
            output[key] = sourceVal;
        }
        // output[key] =
        //     targetVal &&
        //     sourceVal &&
        //     typeof targetVal === 'object' &&
        //     typeof sourceVal === 'object'
        //         ? assignTo(targetVal, sourceVal)
        //         : sourceVal;
    });
    return output as T;
};

export const LibThemeProvider: FC<{
    theme?: ThemeMods;
}> = ({ theme, children }) => {
    const ctx = useContext(ThemeContext);

    if (theme) {
        const newTheme = modifyTheme(ctx, theme);

        return <ThemeProvider theme={newTheme}>{children}</ThemeProvider>;
    } else {
        return <React.Fragment>{children}</React.Fragment>;
    }
};

interface WithLibThemeProps {
    theme?: ThemeMods;
}

export const modifyTheme = (
    activeTheme?: DefaultTheme,
    modifications?: ThemeMods
) => {
    // asigning base font to all settings on top of base theme. If base fonts are undefined return base theme
    const combinedBaseTheme = assignFontBase(
        baseTheme,
        activeTheme?.fonts?.base
    );

    // adding base theme to active theme context if possible
    const combinedTheme = activeTheme
        ? assignTo(combinedBaseTheme, activeTheme)
        : combinedBaseTheme;

    // adding additional base font styles and other settings to theme
    let newTheme = combinedTheme;
    if (modifications) {
        newTheme = assignFontBase(combinedTheme, modifications?.fonts?.base);
        newTheme = assignTo(newTheme, modifications);
    }

    return newTheme;
};

export const useLibTheme = () => {
    const theme = useContext(ThemeContext);

    return {
        colors: getColors(theme),
        fonts: getFonts(theme),
        globals: getGlobals(theme),
        theme: theme,
    };
};

export const withLibTheme =
    <P extends Record<string, unknown>>(
        Component: React.ComponentType<P>
    ): React.FC<
        P & {
            /** Component specific theme properties that overrides global theme settings */
            theme?: ThemeMods;
        }
    > =>
    ({ theme, ...props }: WithLibThemeProps) => {
        const ctx = useContext(ThemeContext);
        const newTheme = modifyTheme(ctx, theme);

        return (
            <ThemeProvider theme={newTheme}>
                <Component {...(props as P)} />
            </ThemeProvider>
        );
    };
