import * as React from 'react';
import styled, { ThemeContext } from 'styled-components';

import Section from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import { getColors as color, mq, spacings, withRange } from 'utils/styles';
import Copy from 'components/typography/Copy';
import NewsCard, { NewsCardProps } from 'components/blocks/NewsCard';
import { useContext, useEffect, useState } from 'react';
import { useMediaQuery } from 'utils/useMediaQuery';
import { useEqualSheetHeight } from 'utils/useEqualSheetHeight';

const ContentFlex = styled.div`
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
`;

const Actions = styled.div`
    ${withRange([spacings.spacer, spacings.spacer * 2], 'margin-top')};
    text-align: center;
`;

const ShowMore = styled.span<{ itemCount?: number }>`
    cursor: pointer;

    display: ${({ itemCount }) =>
        itemCount && itemCount > 2 ? 'block' : 'none'};

    &:hover {
        opacity: 0.75;
    }
`;

type NewsFooterMq = 'small' | 'semilarge';

const NewsFooter: React.FC<{
    news: NewsCardProps[];

    isInverted?: boolean;
    hasBack?: boolean;
    showMoreText?: string;
}> = ({ news, isInverted = false, hasBack = false, showMoreText }) => {
    const newsCount = news?.length || 0;
    const theme = useContext(ThemeContext);

    const mqs: NewsFooterMq[] = ['small', 'semilarge'];
    const currentMq = useMediaQuery(mqs) as NewsFooterMq | undefined;
    const [itemsPerRow, setItemsPerRow] = useState(2);
    const [visibleRows, setVisibleRows] = useState(1);

    const cardRefs = useEqualSheetHeight({
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
                    ? color(theme).dark
                    : hasBack
                    ? color(theme).mono.light
                    : 'transparent'
            }
        >
            <Wrapper addWhitespace clampWidth="small">
                <ContentFlex>
                    {news &&
                        news
                            .filter((_, i) => i < visibleRows * itemsPerRow)
                            .map((item, i) => {
                                return (
                                    <div key={i} ref={cardRefs[i]}>
                                        <NewsCard
                                            isList={true}
                                            isInverted={isInverted}
                                            {...item}
                                        />
                                    </div>
                                );
                            })}
                </ContentFlex>
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
                                {visibleRows < newsCount / itemsPerRow &&
                                    (showMoreText || 'show more')}
                            </ShowMore>
                        </Copy>
                    </Actions>
                )}
            </Wrapper>
        </Section>
    );
};

export default NewsFooter;
