// Version: 0.2.4

import 'styled-components';
import { Colors, Fonts } from './utils/styles';

/***** Styled Component theme override *****/
declare module 'styled-components' {
    export interface DefaultTheme {
        colors: Colors;
        fonts: Fonts;
    }
}

/***** Component exports *****/
export { default as LibThemeProvider } from './utils/LibThemeProvider';

/***** Sections *****/
export { default as Gallery } from './components/sections/Gallery';
export { default as Teaser } from './components/sections/Teaser';
export { default as TeaserWide } from './components/sections/TeaserWide';
export { default as IconList } from './components/sections/IconList';
export { default as Article } from './components/sections/Article';
export { default as FeatureList } from './components/sections/FeatureList';
export { default as ImageCarousel } from './components/sections/carousel/ImageCarousel';
export { default as FeatureCarousel } from './components/sections/carousel/FeatureCarousel';
export { default as Footer } from './components/sections/Footer';

/***** Buttons *****/
export { default as Button } from './components/buttons/Button';

/***** Fields *****/
export { default as ContactForm } from './components/fields/CompactForm';
