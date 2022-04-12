import React from 'react';
import Section, { mapToBgMode } from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import NewsCard, { NewsCardProps } from 'components/blocks/NewsCard';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'utils/useMediaQuery';
import { useEqualSheetHeight } from 'utils/useEqualSheetHeight';
import { useLibTheme, withLibTheme } from 'utils/LibThemeProvider';
import Grid from 'components/base/Grid';

type NewsFooterMq = 'small' | 'semilarge';

export type NewsItem = Omit<
    NewsCardProps,
    'isInverted' | 'onTagClick' | 'customTag'
>;

const NewsFooter: React.FC<{
    /** ID value for targeting section with anchor hashes */
    anchorId?: string;

    /** Array of news item settings */
    news: NewsItem[];

    /** Section background */
    bgMode?: 'full' | 'inverted';

    /** Function to inject custom tag node */
    customTag?: (props: {
        name: string;
        isInverted?: boolean;
        isActive?: boolean;
        clickHandler?: (ev?: React.SyntheticEvent<HTMLElement>) => void;
    }) => React.ReactNode;
}> = ({ anchorId, news, bgMode, customTag }) => {
    const { colors } = useLibTheme();
    const newsCount = news?.length || 0;

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
            anchorId={anchorId}
            bgColor={
                isInverted
                    ? colors.new.sectionBg.dark
                    : hasBg
                    ? colors.new.sectionBg.medium
                    : 'transparent'
            }
            bgMode={mapToBgMode(bgMode, true)}
        >
            <Wrapper addWhitespace clampWidth="small">
                <Grid.Row>
                    {news
                        ?.filter((_, i) => i < visibleRows * itemsPerRow)
                        .map((item, i) => (
                            <Grid.Col medium={{ span: 6 / 12 }} key={i}>
                                <NewsCard
                                    key={i}
                                    ref={cardRefs[i]}
                                    {...item}
                                    isInverted={isInverted}
                                    customTag={customTag}
                                />
                            </Grid.Col>
                        ))}
                </Grid.Row>
            </Wrapper>
        </Section>
    );
};

export const NewsFooterComponent = NewsFooter;
export default withLibTheme(NewsFooter);
