import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import Section, { mapToBgMode } from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';

import NewsCard, { NewsCardProps } from 'components/blocks/NewsCard';
import { mq, spacings } from 'utils/styles';
import { useLibTheme, withLibTheme } from 'utils/LibThemeProvider';
import Tag from 'components/blocks/Tag';
import { useMediaQuery } from 'utils/useMediaQuery';
import { useEqualSheetHeight } from 'utils/useEqualSheetHeight';
import { useObserverSupport } from 'utils/useObserverSupport';
import Copy from 'components/typography/Copy';
import { useScrollTo } from 'utils/useScrollTo';
import Pointer from 'components/buttons/Pointer';

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

type NewsOverviewMq = 'small' | 'semilarge' | 'large';

const NewsOverview: React.FC<{
    /** Array of news item settings */
    news?: NewsCardProps[];

    /** Tags for news filtering */
    tags?: string[];

    /** Initial active tags in filter */
    activeTags?: string[];

    /** Text for load more toggle. Only visible if browser doesn't support IntersectionObserver. */
    showMoreText?: string;

    /** Section background */
    bgMode?: 'full' | 'inverted';

    /**
     * Callback function to handle tag click outside of component e.g. on server side.
     * If no callback is defined filtering is controlled on client
     * */
    onTagClick?: (tag: string, insideList?: boolean) => void;

    /** Function to inject custom tag node */
    customTag?: (props: {
        name: string;
        isInverted?: boolean;
        isActive?: boolean;
        clickHandler?: (ev?: React.SyntheticEvent<HTMLButtonElement>) => void;
    }) => React.ReactNode;
}> = ({
    news,
    tags,
    activeTags,
    showMoreText,
    bgMode,

    onTagClick,
    customTag,
}) => {
    const { colors } = useLibTheme();

    const isInverted = bgMode === 'inverted';
    const hasBg = bgMode === 'full';

    const [selectedTags, setSelectedTags] = useState<string[]>(
        activeTags || []
    );

    const mqs: NewsOverviewMq[] = ['small', 'semilarge', 'large'];
    const currentMq = useMediaQuery(mqs) as NewsOverviewMq | undefined;
    const [itemsPerRow, setItemsPerRow] = useState(3);
    const [visibleRows, setVisibleRows] = useState(3);

    const targetRef = useRef<HTMLDivElement>(null);
    const observerSupported = useObserverSupport();

    const newsCount = news?.length || 0;

    const setNewPos = useScrollTo(800);
    const { sheetRefs: cardRefs, triggerCalculation } = useEqualSheetHeight({
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

    const getFilterParams = () => {
        const tags: string[] = [];

        if ('URLSearchParams' in window) {
            const params = new URLSearchParams(window.location.search);
            const paramTags = params
                .get('newsFilter')
                ?.split(',')
                ?.map((t) => decodeURIComponent(t))
                ?.filter((t) => t !== '');

            if (paramTags) tags.push(...paramTags);
        }
        return tags;
    };

    useEffect(() => {
        const paramTags = getFilterParams();

        if (paramTags.length > 0) {
            setSelectedTags(paramTags);
        } else {
            setSelectedTags(activeTags || []);
        }
    }, [activeTags]);

    useEffect(() => {
        if (
            !onTagClick &&
            selectedTags.length > 0 &&
            'URLSearchParams' in window
        ) {
            const params = new URLSearchParams(window.location.search);
            params.set(
                'newsFilter',
                selectedTags.map((t) => encodeURIComponent(t)).join(',')
            );

            window.history.replaceState(
                {},
                '',
                `${location.pathname}?${params.toString() + location.hash}`
            );
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedTags]);

    useEffect(() => {
        // if new tag is selected reset list rows to three visible item rows
        setVisibleRows(3);
        triggerCalculation();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedTags]);

    const handleTagClick = (tag: string) => {
        setSelectedTags((prev) => {
            const prevCopy = [...prev];
            const itemIndex = prev.indexOf(tag);

            if (itemIndex === -1) {
                return [...prevCopy, tag];
            } else {
                prevCopy.splice(itemIndex, 1);
                return prevCopy;
            }
        });
    };

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
                    if (visibleRows < Math.ceil(newsCount / itemsPerRow)) {
                        setVisibleRows((prev) => prev + 1);
                    }
                }
            }, options);
            observer.observe(element);
        }

        return () => {
            if (observer) observer.disconnect();
        };
    }, [itemsPerRow, newsCount, visibleRows, observerSupported]);

    const sortFilterFn = (a: NewsCardProps, b: NewsCardProps) => {
        if (a.publishDate && b.publishDate) {
            return b.publishDate.getTime() - a.publishDate.getTime();
        } else return 0;
    };

    return (
        <Section
            addSeperation
            bgColor={
                isInverted
                    ? colors.new.sectionBg.dark
                    : hasBg
                    ? colors.new.sectionBg.medium
                    : 'transparent'
            }
            bgMode={mapToBgMode(bgMode, true)}
        >
            <Wrapper addWhitespace>
                {tags && (
                    <TagContainer>
                        {tags.map((tag, i) => (
                            <TagWrapper key={'tag_' + i}>
                                {customTag ? (
                                    customTag({
                                        name: tag,
                                        isInverted: isInverted,
                                        isActive:
                                            selectedTags.indexOf(tag) !== -1,
                                        clickHandler: () => {
                                            if (!onTagClick) {
                                                handleTagClick(tag);
                                            } else onTagClick(tag, false);
                                        },
                                    })
                                ) : (
                                    <Tag
                                        isInverted={isInverted}
                                        onClick={() => {
                                            if (!onTagClick) {
                                                handleTagClick(tag);
                                            } else onTagClick(tag, false);
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
                    {news
                        ?.filter((item) =>
                            selectedTags.length > 0 && item.tag
                                ? selectedTags.indexOf(item.tag) !== -1
                                : true
                        )
                        .sort(sortFilterFn)
                        .filter((_, i) => i < visibleRows * itemsPerRow)
                        .map((item, i) => (
                            <NewsItem key={i}>
                                <NewsCard
                                    ref={cardRefs[i]}
                                    isInverted={isInverted}
                                    onTagClick={(name) => {
                                        // scroll back to top
                                        setNewPos(0);
                                        if (!onTagClick) {
                                            // if no callback is defined handle filtering on client side inside the component
                                            handleTagClick(name);
                                        } else {
                                            onTagClick(name, true);
                                        }
                                    }}
                                    customTag={customTag}
                                    {...item}
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
                                            Math.ceil(newsCount / itemsPerRow)
                                        ) {
                                            setVisibleRows((prev) => prev + 1);
                                        }
                                    }}
                                >
                                    {visibleRows < newsCount / itemsPerRow && (
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
