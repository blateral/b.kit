import React, { useContext, useEffect, useRef, useState } from 'react';
import styled, { ThemeContext } from 'styled-components';

import Section from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';

import NewsCard, { NewsCardProps } from 'components/blocks/NewsCard';
import { getColors, mq, spacings, withRange } from 'utils/styles';
import { HeadlineTag } from 'components/typography/Heading';
import Intro from 'components/blocks/Intro';
import Tag from 'components/blocks/Tag';
import { useMediaQuery } from 'utils/useMediaQuery';
import { useEqualSheetHeight } from 'utils/useEqualSheetHeight';
import { useObserverSupport } from 'utils/useObserverSupport';
import Copy from 'components/typography/Copy';

const StyledIntro = styled(Intro)`
    ${withRange([spacings.spacer * 1.5, spacings.spacer * 3], 'margin-bottom')};
`;

const TagContainer = styled.div`
    margin: -${spacings.nudge}px;
    ${withRange([spacings.spacer * 1.5, spacings.spacer * 3], 'margin-bottom')};

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

const TagWrapper = styled.div`
    padding: ${spacings.nudge}px;
`;

const List = styled.div`
    & > * + * {
        padding-top: ${spacings.spacer * 2}px;
    }

    & > * + * {
        padding-top: ${spacings.spacer * 2}px;
    }

    @media ${mq.semilarge} {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: 'flex-start';
        align-items: flex-start;

        margin-left: -20px;
        margin-top: -40px;

        & > * {
            padding-left: 20px;
            padding-top: 40px;
            flex: 1 0 50%;
            max-width: 50%;
        }
    }

    @media ${mq.large} {
        & > * {
            flex: 1 0 33.33%;
            max-width: 33.33%;
        }
    }
`;

const ListFooter = styled.div`
    ${withRange([spacings.spacer, spacings.spacer * 2], 'margin-top')};
    text-align: center;

    @media ${mq.medium} {
        text-align: left;
    }
`;

const ShowMore = styled.span<{ itemCount?: number }>`
    cursor: pointer;

    text-decoration: underline;

    display: ${({ itemCount }) =>
        itemCount && itemCount > 2 ? 'block' : 'none'};

    &:hover {
        opacity: 0.75;
    }
`;

type NewsOverviewMq = 'small' | 'semilarge' | 'large';

const NewsOverview: React.FC<{
    title: string;
    titleAs?: HeadlineTag;
    superTitle?: string;
    superTitleAs?: HeadlineTag;
    text?: string;

    news: NewsCardProps[];
    activeTag?: string;
    tags?: string[];
    queryParams?: Record<string, any>;
    onTagClick?: (tag: string) => void;
    showMoreText?: string;

    isInverted?: boolean;
    hasBack?: boolean;
}> = ({
    title,
    titleAs,
    superTitle,
    superTitleAs,
    text,

    news,
    activeTag,
    tags,
    queryParams,
    onTagClick,
    showMoreText,

    isInverted,
    hasBack,
}) => {
    const theme = useContext(ThemeContext);

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
                    ? getColors(theme).dark
                    : hasBack
                    ? getColors(theme).mono.light
                    : 'transparent'
            }
        >
            <Wrapper addWhitespace>
                {title && (
                    <StyledIntro
                        title={title}
                        titleAs={titleAs}
                        superTitle={superTitle}
                        superTitleAs={superTitleAs}
                        text={text}
                        colorMode={isInverted ? 'inverted' : 'default'}
                    />
                )}
                {tags && (
                    <TagContainer>
                        {tags.map((tag, i) => {
                            return (
                                <TagWrapper key={i}>
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
                                            } else onTagClick(tag);
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
                <List>
                    {news &&
                        news
                            .filter((item) =>
                                selectedTag ? item.tag === selectedTag : true
                            )
                            .filter((_, i) => i < visibleRows * itemsPerRow)
                            .map((item, i) => {
                                return (
                                    <div key={i} ref={cardRefs[i]}>
                                        <NewsCard
                                            isList={false}
                                            isInverted={isInverted}
                                            onTagClick={
                                                activeTag !== item.tag
                                                    ? (name) => {
                                                          if (!onTagClick) {
                                                              // if no callback is defined handle filtering on client side inside the component
                                                              setSelectedTag(
                                                                  selectedTag ===
                                                                      name
                                                                      ? undefined
                                                                      : name
                                                              );
                                                          } else
                                                              onTagClick(name);
                                                      }
                                                    : undefined
                                            }
                                            {...item}
                                        />
                                    </div>
                                );
                            })}
                </List>
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
                                    {visibleRows < newsCount / itemsPerRow &&
                                        (showMoreText || 'show more')}
                                </ShowMore>
                            </Copy>
                        )}
                    </ListFooter>
                )}
            </Wrapper>
        </Section>
    );
};

export default NewsOverview;
