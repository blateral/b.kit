import React from 'react';
import Section, { mapToBgMode } from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import NewsCard, { NewsCardProps } from 'components/blocks/NewsCard';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'utils/useMediaQuery';
import { useEqualSheetHeight } from 'utils/useEqualSheetHeight';
import { useLibTheme, withLibTheme } from 'utils/LibThemeProvider';
import Grid from 'components/base/Grid';
import { LinkProps } from 'components/typography/Link';
import { getNewsFilterParams } from './NewsOverview';

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
        key: React.Key;
        name: string;
        isInverted?: boolean;
        isActive?: boolean;
        link?: LinkProps;
    }) => React.ReactNode;
}> = ({ anchorId, news, bgMode, customTag }) => {
    const { colors, theme } = useLibTheme();
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
                    ? colors.sectionBg.dark
                    : hasBg
                    ? colors.sectionBg.medium
                    : colors.sectionBg.light
            }
            bgMode={mapToBgMode(bgMode, true)}
        >
            <Wrapper addWhitespace clampWidth="small">
                <Grid.Row>
                    {news
                        ?.filter((_, i) => i < visibleRows * itemsPerRow)
                        .map((item, i) => (
                            <Grid.Col
                                medium={{ span: 6 / 12 }}
                                key={`${i}_news_${item.title}`}
                            >
                                <NewsCard
                                    key={i}
                                    ref={cardRefs[i]}
                                    {...item}
                                    tags={item.tags?.map((tag) => {
                                        let tagHref: string | undefined =
                                            undefined;

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
