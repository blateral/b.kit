import * as React from 'react';
import Section from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import styled, { ThemeContext } from 'styled-components';
import { getColors, mq, spacings } from 'utils/styles';
import Copy from 'components/typography/Copy';
import NewsCard, { NewsCardProps } from '../../blocks/NewsCard';

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
    text-align: center;
    /* display: flex;
    flex-direction: row;
    justify-content: center; */

    & > * + * {
        margin-left: 20px;
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
    items: NewsCardProps[];

    isInverted?: boolean;
}> = ({ items, isInverted }) => {
    const theme = React.useContext(ThemeContext);
    const [visibleCard, setVisibleCard] = React.useState(2);
    return (
        <Section
            addSeperation
            bgColor={isInverted ? getColors(theme).dark : 'transparent'}
        >
            <Wrapper addWhitespace clampWidth="small">
                <ContentFlex>
                    {items.map(
                        ({ tag, publishDate, title, text, image }, i) => {
                            return (
                                <NewsCard
                                    key={i}
                                    // index={i}
                                    image={image}
                                    // visibleCards={visibleCard}
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
                    <Copy isInverted={isInverted}>
                        <ShowMore
                            itemCount={items.length}
                            onClick={(ev) => {
                                ev.preventDefault();
                                visibleCard >= items.length
                                    ? setVisibleCard(visibleCard - 2)
                                    : setVisibleCard(visibleCard + 2);
                            }}
                        >
                            {visibleCard < items.length && 'weitere Anzeigen'}
                        </ShowMore>
                    </Copy>
                </Actions>
            </Wrapper>
        </Section>
    );
};

export default NewsFooter;
