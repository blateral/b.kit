/***** Version: 0.3.1 *****/

import 'styled-components';
import { Colors, Fonts } from 'utils/styles';

/***** Styled Component theme override *****/
declare module 'styled-components' {
    export interface DefaultTheme {
        colors: Colors;
        fonts: Fonts;
    }
}

/***** Functional exports *****/
export { getColors, getFonts, getBaseTheme } from 'utils/styles';

/***** Component exports *****/
export * from 'utils/LibThemeProvider';

/***** Sections *****/
export { default as Gallery } from 'components/sections/Gallery';
export { default as Teaser } from 'components/sections/Teaser';
export { default as TeaserWide } from 'components/sections/TeaserWide';
export { default as IconList } from 'components/sections/IconList';
export { default as Article } from 'components/sections/Article';
export { default as FeatureList } from 'components/sections/FeatureList';
export { default as CrossPromotion } from 'components/sections/CrossPromotion';
export { default as Poster } from 'components/sections/Poster';
export { default as Video } from 'components/sections/Video';
export { default as ImageCarousel } from 'components/sections/carousel/ImageCarousel';
export { default as FeatureCarousel } from 'components/sections/carousel/FeatureCarousel';
export { default as PromotionCarousel } from 'components/sections/carousel/PromotionCarousel';
export { default as VideoCarousel } from 'components/sections/carousel/VideoCarousel';
export { default as Footer } from 'components/sections/Footer';
export { default as Header } from 'components/sections/header/Header';

/***** Buttons *****/
export { default as Button } from 'components/buttons/Button';

/***** Fields *****/
export { default as CompactForm } from 'components/fields/CompactForm';
export { default as SearchInput } from 'components/fields/SearchInput';
