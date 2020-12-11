// Version: 0.2.4

import 'styled-components';
import { Colors, Fonts } from './utils/styles';

import LibThemeProvider from './utils/LibThemeProvider';
import Gallery from './components/sections/Gallery';
import Teaser from './components/sections/Teaser';
import TeaserWide from './components/sections/TeaserWide';
import IconList from './components/sections/IconList';
import Article from './components/sections/Article';
import FeatureList from './components/sections/FeatureList';
import ImageCarousel from './components/sections/carousel/ImageCarousel';
import FeatureCarousel from './components/sections/carousel/FeatureCarousel';

import Button from './components/buttons/Button';

/***** Styled Component theme override *****/
declare module 'styled-components' {
    export interface DefaultTheme {
        colors: Colors;
        fonts: Fonts;
    }
}

/***** Component exports *****/
export {
    LibThemeProvider,
    Gallery,
    Teaser,
    TeaserWide,
    IconList,
    Article,
    FeatureList,
    ImageCarousel,
    FeatureCarousel,
    Button,
};
