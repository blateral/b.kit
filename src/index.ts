import 'styled-components';

import GallerySection from './components/sections/Gallery';
import TeaserSection from './components/sections/Teaser';
import TeaserWideSection from './components/sections/TeaserWide';
import IconListSection from './components/sections/IconList';
import { Colors, Fonts } from './utils/styles';

/***** Styled Component theme override *****/
type RecursivePartial<T> = {
    [P in keyof T]?: RecursivePartial<T[P]>;
};

declare module 'styled-components' {
    export interface DefaultTheme {
        colors?: RecursivePartial<Colors>;
        fonts?: RecursivePartial<Fonts>;
    }
}

/***** Components *****/
export const Gallery = GallerySection;
export const Teaser = TeaserSection;
export const TeaserWide = TeaserWideSection;
export const IconList = IconListSection;
