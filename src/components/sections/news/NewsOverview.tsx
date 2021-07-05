import * as React from 'react';
import styled, { ThemeContext } from 'styled-components';

import Section from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';

import NewsCard, { NewsCardProps } from 'components/blocks/NewsCard';
import { getColors, mq, spacings, withRange } from 'utils/styles';
import { HeadlineTag } from 'components/typography/Heading';
import Intro from 'components/blocks/Intro';
import Tag from 'components/blocks/Tag';

const StyledIntro = styled(Intro)`
    ${withRange([spacings.spacer * 1.5, spacings.spacer * 3], 'margin-bottom')};
`;

const TagContainer = styled.div`
    margin: -${spacings.nudge}px;
    ${withRange([spacings.spacer * 1.5, spacings.spacer * 3], 'margin-bottom')};

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

const TagWrapper = styled.div`
    padding: ${spacings.nudge}px;
`;

const List = styled.div`
    & > * + * {
        padding-top: ${spacings.spacer * 2}px;
    }

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

const NewsOverview: React.FC<{
    news: NewsCardProps[];
    tags?: string[];

    intro?: {
        title: string;
        titleAs?: HeadlineTag;
        superTitle?: string;
        superTitleAs?: HeadlineTag;
        text?: string;
    };

    isInverted?: boolean;
    hasBack?: boolean;
}> = ({
    news,
    tags,

    intro,

    isInverted,
    hasBack,
}) => {
    const theme = React.useContext(ThemeContext);
    const [isActive, setIsActive] = React.useState(false);
    const [isSelected, setIsSelected] = React.useState<number | undefined>();
    return (
        <Section
            addSeperation
            bgColor={
                isInverted
                    ? getColors(theme).dark
                    : hasBack
                    ? getColors(theme).mono.light
                    : 'transparent'
            }
        >
            <Wrapper addWhitespace>
                {intro && (
                    <StyledIntro
                        title={intro.title}
                        titleAs={intro.titleAs}
                        superTitle={intro.superTitle}
                        superTitleAs={intro.superTitleAs}
                        text={intro.text}
                        colorMode={isInverted ? 'inverted' : 'default'}
                    />
                )}
                {tags && (
                    <TagContainer>
                        {tags.map((tag, i) => {
                            return (
                                <TagWrapper key={i}>
                                    <Tag
                                        isInverted={isInverted}
                                        onClick={() => {
                                            setIsSelected(
                                                isSelected === i ? undefined : i
                                            );
                                            setIsActive(true);
                                        }}
                                        isActive={isActive && isSelected === i}
                                    >
                                        {tag}
                                    </Tag>
                                </TagWrapper>
                            );
                        })}
                    </TagContainer>
                )}
            </Wrapper>
            <Wrapper addWhitespace>
                <List>
                    {news.map((item, i) => {
                        return (
                            <div key={i}>
                                <NewsCard {...item} isInverted={isInverted} />
                            </div>
                        );
                    })}
                </List>
            </Wrapper>
        </Section>
    );
};

export default NewsOverview;
