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
export { clampValue } from 'utils/clamp';
export { importFonts } from 'utils/fontLoading';
export { getCurrentNavItem, getCurrentNavPath } from 'utils/navigation';
export { isEmptyArray, isValidArray } from 'utils/arrays';
export { getLinkIcon } from 'utils/getLinkIcon';
export { default as useLeafletMap } from 'utils/useLeafletMap';

/***** Component exports *****/
export * from 'utils/LibThemeProvider';

/***** Sections *****/
export { default as Accordion } from 'components/sections/Accordion';
export { default as AlertList } from 'components/sections/AlertList';
export { default as Article } from 'components/sections/Article';
export { default as CallToAction } from 'components/sections/CallToAction';
export { default as CardList } from 'components/sections/CardList';
export { default as ComparisonSlider } from 'components/sections/ComparisonSlider';
export { default as CrossPromotion } from 'components/sections/CrossPromotion';
export { default as DynamicForm } from 'components/sections/DynamicForm';
export { default as NewsletterForm } from 'components/sections/NewsletterForm';
export { default as EventList } from 'components/sections/events/EventList';
export { default as EventOverview } from 'components/sections/events/EventOverview';
export { default as EventDetail } from 'components/sections/events/EventDetail';
export { default as FactGrid } from 'components/sections/FactGrid';
export { default as FactList } from 'components/sections/FactList';
export { default as FeatureCarousel } from 'components/sections/carousel/FeatureCarousel';
export { default as FeatureList } from 'components/sections/FeatureList';
export { default as Gallery } from 'components/sections/Gallery';
export { default as Header } from 'components/sections/header/Header';
export { default as IconList } from 'components/sections/IconList';
export { default as ImageCarousel } from 'components/sections/carousel/ImageCarousel';
export { default as IndexList } from 'components/sections/IndexList';
export { default as Intro } from 'components/sections/Intro';
export { default as Map } from 'components/sections/Map';
export { default as NavList } from 'components/sections/NavList';
export { default as NewsAuthorCard } from 'components/sections/news/NewsAuthorCard';
export { default as NewsFooter } from 'components/sections/news/NewsFooter';
export { default as NewsImages } from 'components/sections/news/NewsImages';
export { default as NewsIntro } from 'components/sections/news/NewsIntro';
export { default as NewsList } from 'components/sections/news/NewsList';
export { default as NewsOverview } from 'components/sections/news/NewsOverview';
export { default as NewsTable } from 'components/sections/news/NewsTable';
export { default as NewsText } from 'components/sections/news/NewsText';
export { default as NewsVideo } from 'components/sections/news/NewsVideo';
export { default as NumberList } from 'components/sections/NumberList';
export { default as ParallaxBackground } from 'components/sections/ParallaxBackground';
export { default as Poster } from 'components/sections/Poster';
export { default as PriceList } from 'components/sections/PriceList';
export { default as PriceTable } from 'components/sections/PriceTable';
export { default as PromotionCarousel } from 'components/sections/carousel/PromotionCarousel';
export { default as QuickNav } from 'components/sections/Quicknav';
export { default as Quote } from 'components/sections/Quote';
export { default as SimpleImage } from 'components/sections/SimpleImage';
export { default as SocialNav } from 'components/sections/SocialNav';
export { default as SocialWall } from 'components/sections/SocialWall';
export { default as Table } from 'components/sections/Table';
export { default as Teaser } from 'components/sections/Teaser';
export { default as TeaserWide } from 'components/sections/TeaserWide';
export { default as Timeline } from 'components/sections/Timeline';
export { default as Video } from 'components/sections/Video';
export { default as VideoCarousel } from 'components/sections/carousel/VideoCarousel';
export { default as JobList } from 'components/sections/jobs/JobList';
export { default as JobArticle } from 'components/sections/jobs/JobArticle';

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

/***** Blocks *****/
export { default as Title } from 'components/blocks/Title';
export { default as Actions } from 'components/blocks/Actions';
export { default as Bdot } from 'components/blocks/Bdot';
export { default as IntroBlock } from 'components/blocks/IntroBlock';
export { default as Image } from 'components/blocks/Image';
export { default as LanguageSwitcher } from 'components/blocks/LanguageSwitcher';
export { default as VideoBlock } from 'components/blocks/VideoBlock';
export { default as EventBlock } from 'components/blocks/EventBlock';
export { default as Tag } from 'components/blocks/Tag';

export {
    default as CookieConsent,
    CookieIcon,
    CookieTitle,
    CookieText,
    CookieActions,
} from 'components/blocks/CookieConsent';
export { default as Slider } from 'components/blocks/Slider';

/***** Navigation *****/
export {
    default as Navigation,
    getFullNavbarHeights,
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

/***** Icons *****/
export * as Icons from 'components/base/icons/Icons';
