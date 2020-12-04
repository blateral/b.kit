import 'styled-components';
import { Colors, Fonts } from './theme';

import GallerySection from './components/sections/Gallery';
import TeaserSection from './components/sections/Teaser';
import TeaserWideSection from './components/sections/TeaserWide';
import IconListSection from './components/sections/IconList';

/***** Styled Component theme override *****/
declare module 'styled-components' {
    export interface DefaultTheme {
        colors: Partial<Colors>;
        fonts: Partial<Fonts>;
    }
}

/***** Components *****/
export const Gallery = GallerySection;
export const Teaser = TeaserSection;
export const TeaserWide = TeaserWideSection;
export const IconList = IconListSection;
