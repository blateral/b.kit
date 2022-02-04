/***** Version: 1.18.0 *****/

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
        globalSettings: GlobalSettings;
    }
}

/***** Functional exports *****/
export {
    getColors,
    getFonts,
    getBaseTheme,
    getGlobalSettings,
    withRange,
    spacings,
    mq,
} from 'utils/styles';

/***** Hooks *****/
export { useEqualSheetHeight } from 'utils/useEqualSheetHeight';
export {
    setCookie,
    deleteCookie,
    getCookie,
} from 'utils/cookie-consent/cookie';
export { default as useIE } from 'utils/useIE';
export { useItemHeight } from 'utils/useItemHeight';
export { useFontsLoaded } from 'utils/useFontsLoaded';
export { getMediaQuery, isBrowser, useMediaQuery } from 'utils/useMediaQuery';
export { useScroll, ScrollDirection } from 'utils/useScroll';
export { useScrollTo } from 'utils/useScrollTo';
export { usePoster, canUseWebP } from 'utils/usePoster';
export { default as useInterval } from 'utils/useInterval';
export { default as useTouch } from 'utils/useTouch';
export { useImgPreload } from 'utils/useImgPreload';
export { hexToRgba } from 'utils/hexRgbConverter';
export { getBgImage } from 'utils/backgroundImage';

/***** Component exports *****/
export * from 'utils/LibThemeProvider';

/***** Sections *****/
export { default as Intro } from 'components/sections/Intro';
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
export { default as FactList } from 'components/sections/FactList';
export { default as FactGrid } from 'components/sections/FactGrid';
export { default as Table } from 'components/sections/Table';
export { default as Map } from 'components/sections/Map';
export { default as Form } from 'components/sections/Form';
export { default as Accordion } from 'components/sections/Accordion';
export { default as ComparisonSlider } from 'components/sections/ComparisonSlider';
export { default as ImageCarousel } from 'components/sections/carousel/ImageCarousel';
export { default as FeatureCarousel } from 'components/sections/carousel/FeatureCarousel';
export { default as PromotionCarousel } from 'components/sections/carousel/PromotionCarousel';
export { default as VideoCarousel } from 'components/sections/carousel/VideoCarousel';
export { default as Footer } from 'components/sections/Footer';
export { default as Header } from 'components/sections/header/Header';
export { default as NewsAuthorCard } from 'components/sections/news/NewsAuthorCard';
export { default as NewsFooter } from 'components/sections/news/NewsFooter';
export { default as NewsImages } from 'components/sections/news/NewsImages';
export { default as NewsIntro } from 'components/sections/news/NewsIntro';
export { default as NewsList } from 'components/sections/news/NewsList';
export { default as NewsTable } from 'components/sections/news/NewsTable';
export { default as NewsText } from 'components/sections/news/NewsText';
export { default as NewsVideo } from 'components/sections/news/NewsVideo';
export { default as NewsOverview } from 'components/sections/news/NewsOverview';
export { default as QuickNav } from 'components/sections/Quicknav';
export { default as Timeline } from 'components/sections/Timeline';
export { default as SocialNav } from 'components/sections/SocialNav';
export { default as NumberList } from 'components/sections/NumberList';
export { default as DynamicForm } from 'components/sections/DynamicForm';
export { default as SocialWall } from 'components/sections/SocialWall';
export { default as ParallaxBackground } from 'components/sections/ParallaxBackground';
export { default as CallToActionDouble } from 'components/sections/CallToActionDouble';
export { default as PriceList } from 'components/sections/PriceList';
export { default as SimpleImage } from 'components/sections/SimpleImage';
export { default as PriceTable } from 'components/sections/PriceTable';

/***** Buttons *****/
export { default as Button } from 'components/buttons/Button';
export { default as ButtonGhost } from 'components/buttons/ButtonGhost';
export { default as Pointer } from 'components/buttons/Pointer';

/***** Base *****/
export { default as Grid } from 'components/base/Grid';
export { default as Section, mapToBgMode } from 'components/base/Section';
export { default as Wrapper } from 'components/base/Wrapper';

/***** Typography *****/
export { default as Heading } from 'components/typography/Heading';
export { default as Copy } from 'components/typography/Copy';
export { default as Callout } from 'components/typography/Callout';
export { default as Link } from 'components/typography/Link';

/***** Fields *****/
export { default as CompactForm } from 'components/fields/CompactForm';
export { default as SearchInput } from 'components/fields/SearchInput';

/***** Blocks *****/
export { default as Title } from 'components/blocks/Title';
export { default as Actions } from 'components/blocks/Actions';
export { default as Bdot } from 'components/blocks/Bdot';
export { default as IntroBlock } from 'components/blocks/IntroBlock';
export { default as Image } from 'components/blocks/Image';
export {
    default as CookieConsent,
    CookieIcon,
    CookieTitle,
    CookieText,
    CookieActions,
} from 'components/blocks/CookieConsent';
export { default as Slider } from 'components/blocks/Slider';
export { default as Navigation } from 'components/sections/navigation/Navigation';
export { default as Menu } from 'components/sections/navigation/menu/Menu';
export { default as TopBar } from 'components/sections/navigation/TopBar';
export { default as SocialList } from 'components/blocks/SocialList';

/***** Icons *****/
export { default as ArrowRightIcon } from 'components/base/icons/ArrowRight';
export { default as ArrowLeftGhostIcon } from 'components/base/icons/ArrowLeftGhost';
export { default as ArrowRightGhostIcon } from 'components/base/icons/ArrowRightGhost';
export { default as CrossIcon } from 'components/base/icons/Cross';
export { default as CrossSmallIcon } from 'components/base/icons/CrossSmall';
export { default as MagnifierIcon } from 'components/base/icons/Magnifier';
export { default as MenuBurgerIcon } from 'components/base/icons/MenuBurger';
export { default as PlayIcon } from 'components/base/icons/Play';
export { default as FlyToIcon } from 'components/base/icons/FlyTo';
export { default as StarIcon } from 'components/base/icons/Star';
export { default as StarGhostIcon } from 'components/base/icons/StarGhost';
export { default as MailIcon } from 'components/base/icons/Mail';
export { default as PhoneIcon } from 'components/base/icons/Phone';
export { default as RouteIcon } from 'components/base/icons/Route';
export { default as ExternalIcon } from 'components/base/icons/External';

/***** Social Icons *****/
export { default as FacebookIcon } from 'components/base/icons/socials/Facebook';
export { default as LinkedInIcon } from 'components/base/icons/socials/LinkedIn';
export { default as TwitterIcon } from 'components/base/icons/socials/Twitter';
export { default as XingIcon } from 'components/base/icons/socials/Xing';
export { default as InstagramIcon } from 'components/base/icons/socials/Instagram';
export { default as YoutubeIcon } from 'components/base/icons/socials/Youtube';
