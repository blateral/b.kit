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

/***** Sections *****/
export { default as Accordion } from 'components/sections/Accordion';
export { default as AlertList } from 'components/sections/AlertList';
export { default as Article } from 'components/sections/Article';
export { default as CallToAction } from 'components/sections/CallToAction';
export { default as CardList } from 'components/sections/CardList';
export { default as ComparisonSlider } from 'components/sections/ComparisonSlider';
export { default as CrossPromotion } from 'components/sections/CrossPromotion';
export { default as DynamicForm } from 'components/sections/form/DynamicForm';
export { default as NewsletterForm } from 'components/sections/NewsletterForm';
export { default as EventList } from 'components/sections/events/EventList';
export { default as EventOverview } from 'components/sections/events/EventOverview';
export { default as EventDetail } from 'components/sections/events/EventDetail';
export { default as FactGrid } from 'components/sections/FactGrid';
export { default as FactList } from 'components/sections/FactList';
export { default as FeatureList } from 'components/sections/FeatureList';
export { default as Gallery } from 'components/sections/Gallery';
export { default as Header } from 'components/sections/header/Header';
export { default as IconList } from 'components/sections/IconList';
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
export { default as Quote } from 'components/sections/Quote';
export { default as SimpleImage } from 'components/sections/SimpleImage';
export { default as SocialWall } from 'components/sections/SocialWall';
export { default as Table } from 'components/sections/Table';
export { default as Teaser } from 'components/sections/Teaser';
export { default as TeaserWide } from 'components/sections/TeaserWide';
export { default as Timeline } from 'components/sections/Timeline';
export { default as Video } from 'components/sections/Video';
export { default as RawVideo } from 'components/sections/RawVideo';
export { default as JobList } from 'components/sections/jobs/JobList';
export { default as JobArticle } from 'components/sections/jobs/JobArticle';
export { default as PointOfInterestDetail } from 'components/sections/pois/PointOfInterestDetail';
export { default as PointOfInterestOverview } from 'components/sections/pois/PointOfInterestOverview';
export { default as PointOfInterestMap } from 'components/sections/pois/PointOfInterestMap';

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

/***** Blocks *****/
export { default as Title } from 'components/blocks/Title';
export { default as Actions } from 'components/blocks/Actions';
export { default as Bdot } from 'components/blocks/Bdot';
export { default as IntroBlock } from 'components/blocks/IntroBlock';
export { default as Image } from 'components/blocks/Image';
export { default as LanguageSwitcher } from 'components/blocks/LanguageSwitcher';
export { default as VideoBlock } from 'components/blocks/VideoBlock';
export { default as EventBlock } from 'components/blocks/EventBlock';
export { default as TableBlock } from 'components/blocks/TableBlock';
export { default as Tag } from 'components/blocks/Tag';
export { default as POIFacts } from 'components/blocks/POIFacts';
export { default as POICard } from 'components/blocks/POICard';
export { default as InfoList } from 'components/blocks/InfoList';
export { default as HeaderPoster } from 'components/sections/header/HeaderPoster';
export { default as HeaderVideo } from 'components/sections/header/HeaderVideo';
export { default as HeaderKenBurns } from 'components/sections/header/HeaderKenBurns';

export {
    default as CookieConsent,
    CookieIcon,
    CookieTitle,
    CookieText,
    CookieActions,
    CookieTypeSelect,
} from 'components/blocks/CookieConsent';

export { default as SocialList } from 'components/blocks/SocialList';
