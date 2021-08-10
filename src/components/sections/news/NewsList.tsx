import * as React from 'react';
import styled, { ThemeContext } from 'styled-components';

import Section, { mapToBgMode } from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';

import NewsCard, { NewsCardProps } from 'components/blocks/NewsCard';
import { getColors as color, mq, spacings, withRange } from 'utils/styles';
import { HeadlineTag } from 'components/typography/Heading';
import Intro from 'components/blocks/Intro';
import Copy from 'components/typography/Copy';
import { useEqualSheetHeight } from 'utils/useEqualSheetHeight';
import { useContext, useEffect, useState } from 'react';
import { useMediaQuery } from 'utils/useMediaQuery';
import Pointer from 'components/buttons/Pointer';

const StyledIntro = styled(Intro)`
    padding-bottom: ${spacings.spacer * 2}px;
`;

const News = styled.div`
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
    display: ${({ itemCount }) =>
        itemCount && itemCount > 2 ? 'block' : 'none'};
`;

type NewsListMq = 'small' | 'semilarge' | 'large';

const NewsList: React.FC<{
    title: string;
    titleAs?: HeadlineTag;
    superTitle?: string;
    superTitleAs?: HeadlineTag;
    text?: string;

    news?: NewsCardProps[];
    onTagClick?: (tag: string) => void;
    // isInverted?: boolean;
    // hasBg?: boolean;
    bgMode?: 'full' | 'inverted';

    primaryAction?: (isInverted?: boolean) => React.ReactNode;
    secondaryAction?: (isInverted?: boolean) => React.ReactNode;
    showMoreText?: string;
}> = ({
    title,
    titleAs,
    superTitle,
    superTitleAs,
    text,
    news,
    onTagClick,

    // isInverted = false,
    // hasBg = false,
    bgMode,

    primaryAction,
    secondaryAction,
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
                    ? color(theme).dark
                    : hasBg
                    ? color(theme).mono.light
                    : 'transparent'
            }
            bgMode={mapToBgMode(bgMode)}
        >
            {title && (
                <Wrapper addWhitespace>
                    <StyledIntro
                        title={title}
                        titleAs={titleAs}
                        superTitle={superTitle}
                        superTitleAs={superTitleAs}
                        text={text}
                        primaryAction={primaryAction}
                        secondaryAction={secondaryAction}
                        colorMode={isInverted ? 'inverted' : 'default'}
                    />
                </Wrapper>
            )}
            <Wrapper addWhitespace clampWidth="normal">
                <News>
                    {news &&
                        news
                            .filter((_, i) => i < visibleRows * itemsPerRow)
                            .map((item, i) => {
                                return (
                                    <div key={i} ref={cardRefs[i]}>
                                        <NewsCard
                                            onTagClick={onTagClick}
                                            isInverted={isInverted}
                                            {...item}
                                        />
                                    </div>
                                );
                            })}
                </News>
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

export default NewsList;
