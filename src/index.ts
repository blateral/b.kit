import 'styled-components';
import { Colors, FontBase, Fonts, GlobalSettings } from 'utils/styles';

/***** Styled Component theme override *****/
declare module 'styled-components' {
    export interface DefaultTheme {
        colors: Colors;
        fonts: {
            base?: FontBase;
            types: Fonts;
        };
        globals: GlobalSettings;
    }
}

/***** Functional exports *****/
export {
    getColors,
    getFonts,
    baseTheme as getBaseTheme,
    getGlobals,
    withRange,
    spacings,
    mq,
} from 'utils/styles';

/***** Component exports *****/
export * from 'utils/LibThemeProvider';
