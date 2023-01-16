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

/***** Buttons *****/
export { default as Button } from 'components/buttons/Button';
export { default as ButtonGhost } from 'components/buttons/ButtonGhost';
export { default as Pointer } from 'components/buttons/Pointer';
export { default as Control } from 'components/buttons/Control';

/***** Base *****/
export {
    default as Grid,
    gridSettings,
    getGridWidth,
} from 'components/base/Grid';
export { default as Section, mapToBgMode } from 'components/base/Section';
export { default as Wrapper, wrapperWhitespace } from 'components/base/Wrapper';

/***** Typography *****/
export { default as Heading } from 'components/typography/Heading';
export { default as Copy, copyStyle } from 'components/typography/Copy';
export { default as Callout } from 'components/typography/Callout';
export { default as Link } from 'components/typography/Link';

/***** Fields *****/
export { default as CompactForm } from 'components/fields/CompactForm';
export { default as SearchInput } from 'components/fields/SearchInput';
export { default as FilterField } from 'components/fields/FilterField';
export { default as FormField } from 'components/fields/FormField';

/***** Navigation *****/
export {
    default as Navigation,
    getFullNavbarHeights,
    getNavbarState,
    generateNavbarIdent,
} from 'components/sections/navigation/Navigation';
export * as NavPartials from 'components/sections/navigation/partials/index';
export * as NavSkeletons from 'components/sections/navigation/skeletons/index';

export { default as NavBarMainPartial } from 'components/sections/navigation/partials/NavBarMain';
export { default as NavBarTopPartial } from 'components/sections/navigation/partials/NavBarTop';
export { default as NavBarBottomPartial } from 'components/sections/navigation/partials/NavBarBottom';
export { default as MenuHeaderPartial } from 'components/sections/navigation/partials/MenuHeader';
export { default as MenuFooterPartial } from 'components/sections/navigation/partials/MenuFooter';

export { default as SocialList } from 'components/blocks/SocialList';

/***** Footer *****/
export { default as Footer } from 'components/sections/footer/Footer';
export * as FooterPartials from 'components/sections/footer/partials/index';
export * as FooterSkeletons from 'components/sections/footer/skeletons/index';
