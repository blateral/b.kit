import React, {
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react';
import styled, { DefaultTheme } from 'styled-components';

import Section, { mapToBgMode } from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';

import NewsCard, { NewsCardProps } from 'components/blocks/NewsCard';
import { mq, spacings } from 'utils/styles';
import { useLibTheme, withLibTheme } from 'utils/LibThemeProvider';
import Tag, { TagProps } from 'components/blocks/Tag';
import { useMediaQuery } from 'utils/useMediaQuery';
import { useEqualSheetHeight } from 'utils/useEqualSheetHeight';
import { useObserverSupport } from 'utils/useObserverSupport';
import Copy from 'components/typography/Copy';
import { useScrollTo } from 'utils/useScrollTo';
import Pointer from 'components/buttons/Pointer';
import { isValidArray } from 'utils/arrays';
import { deleteUrlParam, getUrlParams, setUrlParam } from 'utils/urlParams';
import Filter from 'components/base/icons/Filter';
import useUpdateEffect from 'utils/useUpdateEffect';
import useMounted from 'utils/useMounted';

const TagContainer = styled.div`
    margin-top: -${spacings.nudge}px;
    margin-left: -${spacings.nudge}px;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    &:not(:only-child) {
        margin-bottom: ${spacings.nudge * 6}px;
    }
`;

const TagWrapper = styled.div`
    padding-top: ${spacings.nudge}px;
    padding-left: ${spacings.nudge}px;
`;

const News = styled.ul`
    list-style: none;
    margin: 0;
    margin-top: -${spacings.nudge * 6}px;
    margin-left: -${spacings.spacer}px;
    padding: 0;

    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;

    flex-wrap: wrap;
`;

const NewsItem = styled.li`
    padding-top: ${spacings.nudge * 6}px;
    padding-left: ${spacings.spacer}px;
    flex: 1 0 100%;

    @media ${mq.medium} {
        flex: 1 0 50%;
        max-width: 50%;
    }

    @media ${mq.large} {
        flex: 1 0 33.33%;
        max-width: 33.33%;
    }
`;

const ListFooter = styled.div`
    margin-top: ${spacings.nudge * 6}px;
    text-align: center;

    @media ${mq.medium} {
        text-align: left;
    }
`;

const ShowMore = styled.span<{ itemCount?: number }>`
    display: ${({ itemCount }) =>
        itemCount && itemCount > 2 ? 'block' : 'none'};
`;

const FilterIcon = styled(Copy)`
    display: flex;
    flex-direction: row;
    align-items: center;

    padding: ${spacings.nudge / 2}px ${spacings.nudge}px 0 0;

    & > * + * {
        margin-left: ${spacings.nudge}px;
    }
`;

export const getNewsFilterParams = (
    url: string,
    theme: DefaultTheme,
    tags: string[] = []
) => {
    if (!url) return '';
    if (!isValidArray(tags, false)) return url;

    const filterName = theme.globals.sections.newsFilterName;
    if (!filterName) return url;

    try {
        const validUrl = new URL(url);
        const newParams = new URLSearchParams(validUrl.search);
        newParams.set(filterName, encodeURIComponent(tags.join(',')));

        return `${url}?${newParams.toString()}`;
    } catch (err) {
        return `${url}?${filterName}=${encodeURIComponent(tags.join(','))}`;
    }
};

type NewsOverviewMq = 'small' | 'semilarge' | 'large';

export type NewsItem = Omit<
    NewsCardProps,
    'customTag' | 'isInverted' | 'onTagClick'
>;

const NewsOverview: React.FC<{
    /** ID value for targeting section with anchor hashes */
    anchorId?: string;

    /** Array of news item settings */
    news?: NewsItem[];

    /** Tags for news filtering */
    tags?: string[];

    /** Initial data. If not defined the component tries to collect this from URL params */
    initial?: {
        activeTags?: string[];
        visibleRows?: number;
    };

    /** Text for load more toggle. Only visible if browser doesn't support IntersectionObserver. */
    showMoreText?: string;

    /** Section background */
    bgMode?: 'full' | 'inverted';

    /**
     * Callback function to handle tag click outside of component
     * If no callback is defined filtering is controlled on client
     * */
    onTagClick?: (tag: TagProps, insideList?: boolean) => void;

    /** Function to inject custom tag node */
    customTag?: (props: {
        key: React.Key;
        name: string;
        isInverted?: boolean;
        isActive?: boolean;
        clickHandler?: (ev?: React.SyntheticEvent<HTMLElement>) => void;
    }) => React.ReactNode;
}> = ({
    anchorId,
    news,
    tags,
    initial,
    showMoreText,
    bgMode,

    onTagClick,
    customTag,
}) => {
    const { colors, globals } = useLibTheme();
    const filterName = globals.sections.newsFilterName;

    const isInverted = bgMode === 'inverted';
    const hasBg = bgMode === 'full';

    const [selectedTags, setSelectedTags] = useState<string[]>(
        initial?.activeTags || []
    );

    const mqs: NewsOverviewMq[] = ['small', 'semilarge', 'large'];
    const currentMq = useMediaQuery(mqs) as NewsOverviewMq | undefined;
    const [itemsPerRow, setItemsPerRow] = useState(3);
    const [visibleRows, setVisibleRows] = useState(initial?.visibleRows || 3);
    const isMounted = useMounted();

    const targetRef = useRef<HTMLDivElement>(null);
    const observerSupported = useObserverSupport();

    const newsCount = news?.length || 0;

    const setNewPos = useScrollTo(800);
    const { sheetRefs: cardRefs, triggerCalculation } =
        useEqualSheetHeight<HTMLDivElement>({
            listLength: Math.min(visibleRows * itemsPerRow, newsCount),
            identifiers: [
                '[data-sheet="head"]',
                '[data-sheet="title"]',
                '[data-sheet="text"]',
            ],
            responsive: {
                small: 1,
                medium: 1,
                semilarge: 2,
                large: 3,
                xlarge: 3,
            },
        });

    const getFilters = useCallback(() => {
        const tags: string[] = [];

        const filters = getUrlParams()[filterName];
        if (filters) {
            const tagsFilter = filters?.split(',');
            if (isValidArray(tagsFilter, false)) {
                tags.push(...tagsFilter);
            }
        }
        return tags;
    }, [filterName]);

    useEffect(() => {
        // if initial data is defined exit hook
        if (initial) return;

        // if no initial data provied try to find needed params in URL
        const paramTags = getFilters();
        const paramRows = parseInt(getUrlParams()['rows']);

        setVisibleRows(paramRows || 3);

        if (isValidArray(paramTags, false)) {
            setSelectedTags(paramTags);
        }

        // trigger equal sheet height recalculation
        triggerCalculation();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [getFilters, initial]);

    useEffect(() => {
        if (!initial || isMounted) return;

        // set inital data into URL
        setUrlParam('rows', initial?.visibleRows || 3);

        if (isValidArray(initial?.activeTags, false)) {
            setUrlParam(filterName, initial?.activeTags?.join(','));
        } else {
            deleteUrlParam(filterName);
        }
    }, [filterName, initial, isMounted]);

    useUpdateEffect(() => {
        setUrlParam('rows', visibleRows);
    }, [visibleRows]);

    useUpdateEffect(() => {
        if (onTagClick || !isValidArray(selectedTags)) return;

        // set filters to URL params
        if (selectedTags.length > 0) {
            setUrlParam(filterName, selectedTags.join(','));
        } else {
            deleteUrlParam(filterName);
        }
    }, [selectedTags]);

    useEffect(() => {
        switch (currentMq) {
            case 'large':
                setItemsPerRow(3);
                break;

            case 'semilarge':
                setItemsPerRow(2);
                break;

            case 'small':
                setItemsPerRow(1);
                if (visibleRows < 3) setVisibleRows(3);
                break;

            default:
                setItemsPerRow(1);
        }
    }, [currentMq, visibleRows]);

    const handleTagClick = (tag: TagProps, enableToggling = true) => {
        setSelectedTags((prev) => {
            const prevCopy = [...prev];
            const itemIndex = tag.name ? prev.indexOf(tag.name) : -1;

            if (itemIndex === -1 && tag.name) {
                return [...prevCopy, tag.name];
            }
            if (enableToggling) {
                prevCopy.splice(itemIndex, 1);
                return prevCopy;
            }
            return prev;
        });
        // trigger equal sheet height recalculation
        triggerCalculation();
        setVisibleRows(3);
    };

    const filteredNews = useMemo(() => {
        const tagFilterFn = (item: NewsItem) => {
            if (!isValidArray(selectedTags, false)) return true;
            if (!item.tags) return false;

            let hasTags = false;
            for (let i = 0; i < item.tags.length; i++) {
                if (selectedTags.indexOf(item.tags[i].name || '') !== -1) {
                    hasTags = true;
                    break;
                }
            }
            return hasTags;
        };

        let filtered = isValidArray(news) ? [...news] : [];

        // adding filter
        filtered = filtered?.filter(tagFilterFn);

        return filtered;
    }, [news, selectedTags]);

    const visibleNews: NewsItem[] = useMemo(() => {
        return (
            filteredNews?.filter((_, i) => i < visibleRows * itemsPerRow) || []
        );
    }, [filteredNews, itemsPerRow, visibleRows]);

    useEffect(() => {
        // cancel if intersection observers are not supported
        if (!observerSupported) return;

        const element = targetRef.current;
        let observer: IntersectionObserver;

        if (element) {
            const options = {
                rootMargin: '0px 0px 100px 0px',
                threshold: 0,
            };

            observer = new IntersectionObserver((entries) => {
                const entry = entries[0];
                if (entry?.isIntersecting) {
                    // on bottom of the wrapper load more news
                    if (
                        visibleRows <
                        Math.ceil(filteredNews.length / itemsPerRow)
                    ) {
                        setVisibleRows((prev) => prev + 1);
                    }
                }
            }, options);
            observer.observe(element);
        }

        return () => {
            if (observer) observer.disconnect();
        };
    }, [
        itemsPerRow,
        newsCount,
        visibleRows,
        observerSupported,
        filteredNews.length,
    ]);

    const filteredTags = useMemo(() => {
        return tags?.filter((tag) => tag);
    }, [tags]);

    return (
        <Section
            addSeperation
            anchorId={anchorId}
            bgColor={
                isInverted
                    ? colors.sectionBg.dark
                    : hasBg
                    ? colors.sectionBg.medium
                    : colors.sectionBg.light
            }
            bgMode={mapToBgMode(bgMode, true)}
        >
            <Wrapper addWhitespace>
                {isValidArray(filteredTags, false) && (
                    <TagContainer>
                        <FilterIcon
                            size="small"
                            type="copy"
                            isInverted={isInverted}
                        >
                            <Filter />
                            <span>Filter</span>
                        </FilterIcon>
                        {filteredTags.map((tag, i) => (
                            <TagWrapper key={i}>
                                {customTag ? (
                                    customTag({
                                        key: i,
                                        name: tag,
                                        isInverted: isInverted,
                                        isActive:
                                            selectedTags.indexOf(tag) !== -1,
                                        clickHandler: (ev) => {
                                            ev?.preventDefault();
                                            if (!onTagClick) {
                                                handleTagClick({ name: tag });
                                            } else onTagClick({ name: tag });
                                        },
                                    })
                                ) : (
                                    <Tag
                                        isInverted={isInverted}
                                        onClick={(ev) => {
                                            ev?.preventDefault();
                                            if (!onTagClick) {
                                                handleTagClick({ name: tag });
                                            } else
                                                onTagClick(
                                                    { name: tag },
                                                    false
                                                );
                                        }}
                                        isActive={
                                            selectedTags.indexOf(tag) !== -1
                                        }
                                    >
                                        {tag}
                                    </Tag>
                                )}
                            </TagWrapper>
                        ))}
                    </TagContainer>
                )}
                <News>
                    {visibleNews.map((item, i) => (
                        <NewsItem key={`${i}_news_${item.title}`}>
                            <NewsCard
                                hasBg={hasBg || isInverted}
                                ref={cardRefs[i]}
                                {...item}
                                tags={item.tags?.map((tag) => ({
                                    name: tag.name,
                                }))}
                                isInverted={isInverted}
                                onTagClick={(tag) => {
                                    // scroll back to top
                                    setNewPos(0);
                                    if (!onTagClick) {
                                        // if no callback is defined handle filtering on client side inside the component
                                        handleTagClick(
                                            { name: tag.name },
                                            false
                                        );
                                    } else {
                                        onTagClick({ name: tag.name }, true);
                                    }
                                }}
                                customTag={customTag}
                            />
                        </NewsItem>
                    ))}
                </News>
                <div ref={targetRef} />
                {!observerSupported && (
                    <ListFooter>
                        {news && news.length > 0 && (
                            <Copy
                                type="copy"
                                size="medium"
                                isInverted={isInverted}
                            >
                                <ShowMore
                                    itemCount={news.length}
                                    onClick={(ev) => {
                                        ev.preventDefault();
                                        if (
                                            visibleRows <
                                            Math.ceil(
                                                filteredNews.length /
                                                    itemsPerRow
                                            )
                                        ) {
                                            setVisibleRows((prev) => prev + 1);
                                        }
                                    }}
                                >
                                    {visibleRows <
                                        filteredNews.length / itemsPerRow && (
                                        <Pointer.View
                                            as="button"
                                            isInverted={isInverted}
                                        >
                                            <Pointer.Label>
                                                {showMoreText ||
                                                    'mehr anzeigen'}
                                            </Pointer.Label>
                                        </Pointer.View>
                                    )}
                                </ShowMore>
                            </Copy>
                        )}
                    </ListFooter>
                )}
            </Wrapper>
        </Section>
    );
};

export const NewsOverviewComponent = NewsOverview;
export default withLibTheme(NewsOverview);
