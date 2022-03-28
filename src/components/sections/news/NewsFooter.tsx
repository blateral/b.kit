import * as React from 'react';
import styled, { ThemeContext } from 'styled-components';

import Section, { mapToBgMode } from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import { getColors as color, spacings } from 'utils/styles';
import Copy from 'components/typography/Copy';
import NewsCard, { NewsCardProps } from 'components/blocks/NewsCard';
import { useContext, useEffect, useState } from 'react';
import { useMediaQuery } from 'utils/useMediaQuery';
import { useEqualSheetHeight } from 'utils/useEqualSheetHeight';
import Pointer from 'components/buttons/Pointer';
import { withLibTheme } from 'utils/LibThemeProvider';
import Grid from 'components/base/Grid';

const Actions = styled.div`
    margin-top: ${spacings.spacer}px;
    text-align: left;
`;

const ShowMore = styled.span<{ itemCount?: number }>`
    display: ${({ itemCount }) =>
        itemCount && itemCount > 2 ? 'block' : 'none'};
`;

type NewsFooterMq = 'small' | 'semilarge';

const NewsFooter: React.FC<{
    news: NewsCardProps[];
    onTagClick?: (tag: string) => void;

    bgMode?: 'full' | 'inverted';
    showMoreText?: string;
}> = ({ news, onTagClick, bgMode, showMoreText }) => {
    const newsCount = news?.length || 0;
    const theme = useContext(ThemeContext);

    const isInverted = bgMode === 'inverted';
    const hasBg = bgMode === 'full';

    const mqs: NewsFooterMq[] = ['small', 'semilarge'];
    const currentMq = useMediaQuery(mqs) as NewsFooterMq | undefined;
    const [itemsPerRow, setItemsPerRow] = useState(2);
    const [visibleRows, setVisibleRows] = useState(1);

    const { sheetRefs: cardRefs } = useEqualSheetHeight<HTMLDivElement>({
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
            large: 2,
            xlarge: 2,
        },
    });

    useEffect(() => {
        switch (currentMq) {
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
            <Wrapper addWhitespace clampWidth="small">
                <Grid.Row>
                    {news &&
                        news
                            .filter((_, i) => i < visibleRows * itemsPerRow)
                            .map((item, i) => {
                                return (
                                    <Grid.Col medium={{ span: 6 / 12 }} key={i}>
                                        <div key={i} ref={cardRefs[i]}>
                                            <NewsCard
                                                isInverted={isInverted}
                                                onTagClick={onTagClick}
                                                {...item}
                                            />
                                        </div>
                                    </Grid.Col>
                                );
                            })}
                </Grid.Row>
                {news && news.length > 0 && (
                    <Actions>
                        <Copy isInverted={isInverted}>
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
                    </Actions>
                )}
            </Wrapper>
        </Section>
    );
};

export const NewsFooterComponent = NewsFooter;
export default withLibTheme(NewsFooter);
