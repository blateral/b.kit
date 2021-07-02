import * as React from 'react';
import styled, { ThemeContext } from 'styled-components';

import Section from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';

import NewsCard, { NewsCardProps } from 'components/blocks/NewsCard';
import { getColors as color, mq, spacings, withRange } from 'utils/styles';
import { HeadlineTag } from 'components/typography/Heading';
import Intro from 'components/blocks/Intro';
import Copy from 'components/typography/Copy';
import { useEqualSheetHeight } from 'utils/useEqualSheetHeight';

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
    ${withRange([spacings.spacer * 1.5, spacings.spacer * 3], 'margin-top')};

    & > * + * {
        ${withRange([spacings.spacer, spacings.spacer * 2], 'margin-top')};
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

const NewsList: React.FC<{
    title: string;
    titleAs?: HeadlineTag;
    superTitle?: string;
    superTitleAs?: HeadlineTag;
    text?: string;

    news?: NewsCardProps[];
    isInverted?: boolean;
    hasBack?: boolean;

    primaryAction?: (isInverted?: boolean) => React.ReactNode;
    secondaryAction?: (isInverted?: boolean) => React.ReactNode;
}> = ({
    title,
    titleAs,
    superTitle,
    superTitleAs,
    text,
    news,
    isInverted = false,
    hasBack,

    primaryAction,
    secondaryAction,
}) => {
    const theme = React.useContext(ThemeContext);
    const [visibleCard, setVisibleCard] = React.useState(3);

    const newsCount = news?.length || 0;

    const cardRefs = useEqualSheetHeight({
        listLength: newsCount,
        identifiers: [
            '[data-sheet="head"]',
            '[data-sheet="title"]',
            '[data-sheet="text"]',
        ],
        responsive: {
            small: 1,
            medium: 1,
            semilarge: 2,
            large: newsCount % 2 === 0 ? 2 : 3,
            xlarge: newsCount % 2 === 0 ? 2 : 3,
        },
    });

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
                        news.map((item, i) => {
                            return (
                                <div key={i} ref={cardRefs[i]}>
                                    <NewsCard
                                        isInverted={isInverted}
                                        {...item}
                                    />
                                </div>
                            );
                        })}
                </News>
                <ListFooter>
                    {news && news.length > 0 && (
                        <Copy isInverted={isInverted}>
                            <ShowMore
                                itemCount={news.length}
                                onClick={(ev) => {
                                    ev.preventDefault();
                                    visibleCard >= news.length
                                        ? setVisibleCard(visibleCard - 3)
                                        : setVisibleCard(visibleCard + 3);
                                }}
                            >
                                {visibleCard < news.length &&
                                    'weitere Anzeigen'}
                            </ShowMore>
                        </Copy>
                    )}
                </ListFooter>
            </Wrapper>
        </Section>
    );
};

export default NewsList;
