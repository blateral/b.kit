import * as React from 'react';
import styled, { ThemeContext } from 'styled-components';

import Section, { mapToBgMode } from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';

import NewsCard, { NewsCardProps } from 'components/blocks/NewsCard';
import { getColors as color, mq, spacings } from 'utils/styles';
import { useEqualSheetHeight } from 'utils/useEqualSheetHeight';
import { useContext } from 'react';
import { withLibTheme } from 'utils/LibThemeProvider';

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

const NewsItem = styled.li<{ isVisible?: boolean }>`
    display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
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

const NewsList: React.FC<{
    news?: NewsCardProps[];
    onTagClick?: (tag: string) => void;
    bgMode?: 'full' | 'inverted';
    showItems?: '3' | '6';
}> = ({ news, onTagClick, bgMode, showItems = '3' }) => {
    const theme = useContext(ThemeContext);

    const newsCount = news?.length || 0;

    const isInverted = bgMode === 'inverted';
    const hasBg = bgMode === 'full';

    const { sheetRefs: cardRefs } = useEqualSheetHeight({
        listLength: Math.min(parseInt(showItems), newsCount),
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
                    ? color(theme).new.sectionBg.dark
                    : hasBg
                    ? color(theme).new.sectionBg.medium
                    : 'transparent'
            }
            bgMode={mapToBgMode(bgMode, true)}
        >
            <Wrapper addWhitespace clampWidth="normal">
                <News>
                    {news &&
                        news.map((item, i) => {
                            return (
                                <NewsItem
                                    isVisible={i < parseInt(showItems)}
                                    key={i}
                                >
                                    <div ref={cardRefs[i]}>
                                        <NewsCard
                                            onTagClick={onTagClick}
                                            isInverted={isInverted}
                                            {...item}
                                        />
                                    </div>
                                </NewsItem>
                            );
                        })}
                </News>
            </Wrapper>
        </Section>
    );
};

export const NewsListComponent = NewsList;
export default withLibTheme(NewsList);
