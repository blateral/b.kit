import React, { useMemo } from 'react';
import styled from 'styled-components';

import Section, { mapToBgMode } from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';

import NewsCard, { NewsCardProps } from 'components/blocks/NewsCard';
import { mq, spacings } from 'utils/styles';
import { useEqualSheetHeight } from 'utils/useEqualSheetHeight';
import { useLibTheme, withLibTheme } from 'utils/LibThemeProvider';
import { LinkProps } from 'components/typography/Link';
import { getNewsFilterParams } from './NewsOverview';

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
    max-width: 100%;

    @media ${mq.medium} {
        flex: 1 0 50%;
        max-width: 50%;
    }

    @media ${mq.large} {
        flex: 1 0 33.33%;
        max-width: 33.33%;
    }
`;

export type NewsItem = Omit<
    NewsCardProps,
    'isInverted' | 'onTagClick' | 'customTag'
>;

const NewsList: React.FC<{
    /** ID value for targeting section with anchor hashes */
    anchorId?: string;

    /** Show a short version of three or a expanded version of six news items */
    mode?: 'short' | 'expanded';

    /** Array of news card settings */
    news?: NewsItem[];

    /** Sections background */
    bgMode?: 'full' | 'inverted';

    /** Function to inject custom tag node */
    customTag?: (props: {
        key: React.Key;
        name: string;
        isInverted?: boolean;
        isActive?: boolean;
        link?: LinkProps;
    }) => React.ReactNode;
}> = ({ anchorId, mode = 'short', news, bgMode, customTag }) => {
    const { colors, theme } = useLibTheme();

    const items = useMemo<NewsCardProps[]>(() => {
        if (!news) return [];
        if (mode === 'expanded') return news.slice(0, 6);
        else return news.slice(0, 3);
    }, [news, mode]);

    const isInverted = bgMode === 'inverted';
    const hasBg = bgMode === 'full';

    const { sheetRefs: cardRefs } = useEqualSheetHeight<HTMLDivElement>({
        listLength: items.length,
        identifiers: [
            '[data-sheet="head"]',
            '[data-sheet="title"]',
            '[data-sheet="text"]',
        ],
        responsive: {
            small: 1,
            medium: 2,
            semilarge: 2,
            large: 3,
            xlarge: 3,
        },
    });

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
                <News>
                    {items?.map((item, i) => (
                        <NewsItem key={i}>
                            <NewsCard
                                key={i}
                                ref={cardRefs[i]}
                                {...item}
                                isInverted={isInverted}
                                tags={item.tags?.map((tag) => {
                                    let tagHref: string | undefined = undefined;

                                    if (tag.name && tag.link?.href) {
                                        tagHref = getNewsFilterParams(
                                            tag.link.href,
                                            theme,
                                            [tag.name]
                                        );
                                    }

                                    return {
                                        name: tag.name,
                                        link: tag.link?.href
                                            ? {
                                                  ...tag.link,
                                                  href: tagHref,
                                              }
                                            : undefined,
                                    };
                                })}
                                customTag={customTag}
                            />
                        </NewsItem>
                    ))}
                </News>
            </Wrapper>
        </Section>
    );
};

export const NewsListComponent = NewsList;
export default withLibTheme(NewsList);
