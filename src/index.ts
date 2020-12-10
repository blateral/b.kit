// Version: 0.2.0

import 'styled-components';
import { Colors, Fonts } from './utils/styles';

import LibThemeProvider from './utils/LibThemeProvider';
import GallerySection from './components/sections/Gallery';
import TeaserSection from './components/sections/Teaser';
import TeaserWideSection from './components/sections/TeaserWide';
import IconListSection from './components/sections/IconList';
import ArticleSection from './components/sections/Article';
import ImageCarouselSection from './components/sections/carousel/ImageCarousel';

import Button from './components/buttons/Button';

/***** Styled Component theme override *****/
declare module 'styled-components' {
    export interface DefaultTheme {
        colors: Colors;
        fonts: Fonts;
    }
}

/***** Section exports *****/
export const Provider = LibThemeProvider;
export const Gallery = GallerySection;
export const Teaser = TeaserSection;
export const TeaserWide = TeaserWideSection;
export const IconList = IconListSection;
export const Article = ArticleSection;
export const ImageCarousel = ImageCarouselSection;

/***** Action exports *****/
export { Button };
