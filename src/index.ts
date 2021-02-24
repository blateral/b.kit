/***** Version: 0.4.10 *****/

import 'styled-components';
import { Colors, FontBase, Fonts } from 'utils/styles';

/***** Styled Component theme override *****/
declare module 'styled-components' {
    export interface DefaultTheme {
        colors: Colors;
        fonts: {
            base?: FontBase;
            types: Fonts;
        };
    }
}

/***** Functional exports *****/
export {
    getColors,
    getFonts,
    getBaseTheme,
    withRange,
    spacings,
    mq,
} from 'utils/styles';

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
export { default as CallToAction } from 'components/sections/CallToAction';
export { default as ImageCarousel } from 'components/sections/carousel/ImageCarousel';
export { default as FeatureCarousel } from 'components/sections/carousel/FeatureCarousel';
export { default as PromotionCarousel } from 'components/sections/carousel/PromotionCarousel';
export { default as VideoCarousel } from 'components/sections/carousel/VideoCarousel';
export { default as Footer } from 'components/sections/Footer';
export { default as Header } from 'components/sections/header/Header';

/***** Buttons *****/
export { default as Button } from 'components/buttons/Button';
export { default as ButtonGhost } from 'components/buttons/ButtonGhost';
export { default as MenuAction } from 'components/sections/header/menu/MenuActions';

/***** Fields *****/
export { default as CompactForm } from 'components/fields/CompactForm';
export { default as SearchInput } from 'components/fields/SearchInput';

/***** Icons *****/
export { default as ArrowRightIcon } from 'components/base/icons/ArrowRight';
export { default as ArrowLeftGhostIcon } from 'components/base/icons/ArrowLeftGhost';
export { default as ArrowRightGhostIcon } from 'components/base/icons/ArrowRightGhost';
export { default as CrossIcon } from 'components/base/icons/Cross';
export { default as CrossSmallIcon } from 'components/base/icons/CrossSmall';
export { default as MagnifierIcon } from 'components/base/icons/Magnifier';
export { default as MenuBurgerIcon } from 'components/base/icons/MenuBurger';
export { default as PlayIcon } from 'components/base/icons/Play';
export { default as StarIcon } from 'components/base/icons/Star';
export { default as StarGhostIcon } from 'components/base/icons/StarGhost';

/***** Social Icons *****/
export { default as FacebookIcon } from 'components/base/icons/socials/Facebook';
export { default as LinkedInIcon } from 'components/base/icons/socials/LinkedIn';
export { default as TwitterIcon } from 'components/base/icons/socials/Twitter';
export { default as XingIcon } from 'components/base/icons/socials/Xing';
export { default as InstagramIcon } from 'components/base/icons/socials/Instagram';
export { default as YoutubeIcon } from 'components/base/icons/socials/Youtube';
