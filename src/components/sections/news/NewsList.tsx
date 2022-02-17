import * as React from 'react';
import styled, { ThemeContext } from 'styled-components';

import Section, { mapToBgMode } from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';

import NewsCard, { NewsCardProps } from 'components/blocks/NewsCard';
import { getColors as color, mq, spacings, withRange } from 'utils/styles';
import Copy from 'components/typography/Copy';
import { useEqualSheetHeight } from 'utils/useEqualSheetHeight';
import { useContext, useEffect, useState } from 'react';
import { useMediaQuery } from 'utils/useMediaQuery';
import Pointer from 'components/buttons/Pointer';
import { withLibTheme } from 'utils/LibThemeProvider';
import Grid from 'components/base/Grid';

const ListFooter = styled.div`
    ${withRange([spacings.nudge * 2, spacings.nudge * 5], 'margin-top')};
    text-align: center;

    @media ${mq.medium} {
        text-align: left;
    }
`;

const ShowMore = styled.span<{ itemCount?: number }>`
    display: ${({ itemCount }) =>
        itemCount && itemCount > 2 ? 'block' : 'none'};
`;

type NewsListMq = 'small' | 'semilarge' | 'large';

const NewsList: React.FC<{
    news?: NewsCardProps[];
    onTagClick?: (tag: string) => void;
    bgMode?: 'full' | 'inverted';
    showMoreText?: string;
}> = ({
    news,
    onTagClick,
    bgMode,

    showMoreText,
}) => {
    const theme = useContext(ThemeContext);
    const mqs: NewsListMq[] = ['small', 'semilarge', 'large'];
    const currentMq = useMediaQuery(mqs) as NewsListMq | undefined;
    const [itemsPerRow, setItemsPerRow] = useState(3);
    const [visibleRows, setVisibleRows] = useState(1);

    const newsCount = news?.length || 0;

    const isInverted = bgMode === 'inverted';
    const hasBg = bgMode === 'full';

    const { sheetRefs: cardRefs } = useEqualSheetHeight({
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
                <Grid.Row>
                    {news &&
                        news
                            .filter((_, i) => i < visibleRows * itemsPerRow)
                            .map((item, i) => {
                                return (
                                    <Grid.Col
                                        key={i}
                                        medium={{ span: 6 / 12 }}
                                        large={{ span: 4 / 12 }}
                                    >
                                        <div ref={cardRefs[i]}>
                                            <NewsCard
                                                onTagClick={onTagClick}
                                                isInverted={isInverted}
                                                {...item}
                                            />
                                        </div>
                                    </Grid.Col>
                                );
                            })}
                </Grid.Row>
                <ListFooter>
                    {news && news.length > 0 && (
                        <Copy type="copy" size="medium" isInverted={isInverted}>
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
                                            {showMoreText || 'mehr anzeigen'}
                                        </Pointer.Label>
                                    </Pointer.View>
                                )}
                            </ShowMore>
                        </Copy>
                    )}
                </ListFooter>
            </Wrapper>
        </Section>
    );
};

export const NewsListComponent = NewsList;
export default withLibTheme(NewsList);
