import * as React from 'react';
import { ImageProps } from 'components/blocks/Image';
import Section from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import styled, { ThemeContext } from 'styled-components';
import { getColors, mq, spacings } from 'utils/styles';
import Copy from 'components/typography/Copy';
import NewsCard from './NewsCard';

const ContentFlex = styled.div`
    @media ${mq.semilarge} {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: flex-start;

        margin: -20px;
    }
`;

const Actions = styled.div`
    margin-top: ${spacings.spacer * 4}px;

    display: flex;
    flex-direction: row;
    justify-content: center;

    & > * + * {
        margin-left: 20px;
    }
`;

const ShowAll = styled.a`
    text-decoration: none;

    &:hover {
        opacity: 0.75;
    }
`;

const ShowMore = styled.span<{ itemCount?: number }>`
    cursor: pointer;

    display: ${({ itemCount }) =>
        itemCount && itemCount > 2 ? 'block' : 'none'};

    &:hover {
        opacity: 0.75;
    }
`;

const NewsFooter: React.FC<{
    items: {
        newsLink?: string;
        tag?: string;
        publishDate?: string;
        title?: string;
        text?: string;
        image?: ImageProps;

        primaryAction?: (isInverted?: boolean) => React.ReactNode;
        secondaryAction?: (isInverted?: boolean) => React.ReactNode;
    }[];

    showAllLink?: string;

    isInverted?: boolean;
}> = ({ items, showAllLink, isInverted }) => {
    const theme = React.useContext(ThemeContext);
    const [showMore, setShowMore] = React.useState(false);
    return (
        <Section
            addSeperation
            bgColor={isInverted ? getColors(theme).dark : 'transparent'}
        >
            <Wrapper addWhitespace clampWidth="small">
                <ContentFlex>
                    {items.map(
                        (
                            { tag, publishDate, title, text, image, newsLink },
                            i
                        ) => {
                            return (
                                <NewsCard
                                    key={i}
                                    index={i}
                                    image={image}
                                    newsLink={newsLink}
                                    isVisible={showMore}
                                    publishDate={publishDate}
                                    tag={tag}
                                    title={title}
                                    text={text}
                                    isInverted={isInverted}
                                />
                            );
                        }
                    )}
                </ContentFlex>
                <Actions>
                    <ShowAll href={showAllLink}>
                        <Copy isInverted={isInverted}>Show All</Copy>
                    </ShowAll>

                    <ShowMore
                        itemCount={items.length}
                        onClick={() => setShowMore((prev) => !prev)}
                    >
                        <Copy isInverted={isInverted}>
                            {showMore ? 'Show Less' : 'Show More'}
                        </Copy>
                    </ShowMore>
                </Actions>
            </Wrapper>
        </Section>
    );
};

export default NewsFooter;
