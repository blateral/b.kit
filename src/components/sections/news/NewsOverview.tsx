import React, { useContext, useEffect, useRef, useState } from 'react';
import styled, { ThemeContext } from 'styled-components';

import Section, { mapToBgMode } from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';

import NewsCard, { NewsCardProps } from 'components/blocks/NewsCard';
import { getColors, mq, spacings, withRange } from 'utils/styles';
import { withLibTheme } from 'utils/LibThemeProvider';
import Tag from 'components/blocks/Tag';
import { useMediaQuery } from 'utils/useMediaQuery';
import { useEqualSheetHeight } from 'utils/useEqualSheetHeight';
import { useObserverSupport } from 'utils/useObserverSupport';
import Copy from 'components/typography/Copy';
import { useScrollTo } from 'utils/useScrollTo';
import Pointer from 'components/buttons/Pointer';
import Grid from 'components/base/Grid';

const TagContainer = styled.div`
    margin: -${spacings.nudge}px;
    ${withRange([spacings.nudge * 3, spacings.spacer], 'margin-bottom')};

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

const TagWrapper = styled.div`
    padding: ${spacings.nudge}px;
`;

const ListFooter = styled.div`
    ${withRange([spacings.nudge * 3, spacings.spacer], 'margin-top')};
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
    news: NewsCardProps[];
    activeTag?: string;
    tags?: string[];
    queryParams?: Record<string, any>;
    onTagClick?: (tag: string, insideList?: boolean) => void;
    showMoreText?: string;

    bgMode?: 'full' | 'inverted';
}> = ({
    news,
    activeTag,
    tags,
    queryParams,
    onTagClick,
    showMoreText,

    bgMode,
}) => {
    const theme = useContext(ThemeContext);

    const isInverted = bgMode === 'inverted';
    const hasBg = bgMode === 'full';

    activeTag = queryParams?.selected
        ? decodeURI(queryParams.selected)
        : activeTag;
    const [selectedTag, setSelectedTag] = useState<string | undefined>(
        activeTag || undefined
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

    useEffect(() => {
        setSelectedTag(activeTag);
    }, [activeTag]);

    useEffect(() => {
        // if new tag is selected reset list rows to three visible item rows
        setVisibleRows(3);
        triggerCalculation();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedTag]);

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

    return (
        <Section
            addSeperation
            bgColor={
                isInverted
                    ? getColors(theme).new.sectionBg.dark
                    : hasBg
                    ? getColors(theme).new.sectionBg.medium
                    : 'transparent'
            }
            bgMode={mapToBgMode(bgMode, true)}
        >
            <Wrapper addWhitespace>
                <Grid.Row>
                    <Grid.Col>
                        {tags && (
                            <TagContainer>
                                {tags.sort().map((tag, i) => {
                                    return (
                                        <TagWrapper key={'tag_' + i}>
                                            <Tag
                                                isInverted={isInverted}
                                                onClick={() => {
                                                    if (!onTagClick) {
                                                        // if no callback is defined handle filtering on client side inside the component
                                                        setSelectedTag(
                                                            selectedTag === tag
                                                                ? undefined
                                                                : tag
                                                        );
                                                    } else
                                                        onTagClick(tag, false);
                                                }}
                                                isActive={selectedTag === tag}
                                            >
                                                {tag}
                                            </Tag>
                                        </TagWrapper>
                                    );
                                })}
                            </TagContainer>
                        )}
                    </Grid.Col>
                </Grid.Row>
                <Grid.Row>
                    {news &&
                        news
                            .filter((item) =>
                                selectedTag ? item.tag === selectedTag : true
                            )
                            .filter((_, i) => i < visibleRows * itemsPerRow)
                            .map((item, i) => {
                                return (
                                    <Grid.Col
                                        medium={{ span: 6 / 12 }}
                                        large={{ span: 4 / 12 }}
                                        key={i}
                                    >
                                        <div ref={cardRefs[i]}>
                                            <NewsCard
                                                isInverted={isInverted}
                                                onTagClick={(name) => {
                                                    // scroll back to top
                                                    setNewPos(0);
                                                    if (!onTagClick) {
                                                        // if no callback is defined handle filtering on client side inside the component
                                                        setSelectedTag(
                                                            selectedTag === name
                                                                ? undefined
                                                                : name
                                                        );
                                                    } else {
                                                        onTagClick(name, true);
                                                    }
                                                }}
                                                {...item}
                                            />
                                        </div>
                                    </Grid.Col>
                                );
                            })}
                </Grid.Row>
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
