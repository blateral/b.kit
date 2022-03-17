import React, { useMemo } from 'react';
import styled from 'styled-components';

import Section, { mapToBgMode } from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';

import NewsCard, { NewsCardProps } from 'components/blocks/NewsCard';
import { mq, spacings } from 'utils/styles';
import { useEqualSheetHeight } from 'utils/useEqualSheetHeight';
import { useLibTheme, withLibTheme } from 'utils/LibThemeProvider';

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

export type NewsItem = Omit<
    NewsCardProps,
    'isInverted' | 'onTagClick' | 'customTag'
>;

const NewsList: React.FC<{
    /** Show a short version of three or a expanded version of six news items */
    mode?: 'short' | 'expanded';

    /** Array of news card settings */
    news?: NewsItem[];

    /** Sections background */
    bgMode?: 'full' | 'inverted';

    /**
     * Callback function to handle tag click outside of component
     * */
    onTagClick?: (tag: string) => void;

    /** Function to inject custom tag node */
    customTag?: (props: {
        name: string;
        isInverted?: boolean;
        isActive?: boolean;
        clickHandler?: (ev?: React.SyntheticEvent<HTMLButtonElement>) => void;
    }) => React.ReactNode;
}> = ({ mode = 'short', news, bgMode, onTagClick, customTag }) => {
    const { colors } = useLibTheme();

    const items = useMemo<NewsCardProps[]>(() => {
        if (!news) return [];
        if (mode === 'expanded') return news.slice(0, 6);
        else return news.slice(0, 3);
    }, [news, mode]);

    const isInverted = bgMode === 'inverted';
    const hasBg = bgMode === 'full';

    const { sheetRefs: cardRefs } = useEqualSheetHeight({
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
            bgColor={
                isInverted
                    ? colors.new.sectionBg.dark
                    : hasBg
                    ? colors.new.sectionBg.medium
                    : colors.new.sectionBg.light
            }
            bgMode={mapToBgMode(bgMode, true)}
        >
            <Wrapper addWhitespace>
                <News>
                    {items?.map((item, i) => (
                        <NewsItem key={i}>
                            <NewsCard
                                ref={cardRefs[i]}
                                {...item}
                                onTagClick={onTagClick}
                                isInverted={isInverted}
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
