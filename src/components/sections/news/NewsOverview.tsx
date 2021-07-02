import * as React from 'react';
import styled, { ThemeContext } from 'styled-components';

import Section from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';

import NewsCard, { NewsCardProps } from '../../blocks/NewsCard';
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

const List = styled.ul`
    margin: 0;
    margin: -${spacings.spacer}px;
    padding: 0;
    list-style: none;

    @media ${mq.semilarge} {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        align-items: center;
    }
`;

const ListItem = styled.li`
    flex: 0 0 33.33%;
`;

const NewsOverview: React.FC<{
    list: NewsCardProps[];
    tags?: { label?: string; id: string }[];

    intro?: {
        title: string;
        titleAs?: HeadlineTag;
        superTitle?: string;
        superTitleAs?: HeadlineTag;
        text?: string;
    };

    isInverted?: boolean;
}> = ({
    list,
    tags,

    intro,
    isInverted,
}) => {
    const theme = React.useContext(ThemeContext);
    return (
        <Section
            addSeperation
            bgColor={isInverted ? getColors(theme).dark : 'transparent'}
        >
            <Wrapper addWhitespace clampWidth="small">
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
                                    <Tag isInverted={isInverted}>
                                        {tag.label}
                                    </Tag>
                                </TagWrapper>
                            );
                        })}
                    </TagContainer>
                )}
            </Wrapper>
            <Wrapper addWhitespace clampWidth="normal">
                <List>
                    {list.map((item, i) => {
                        return (
                            <ListItem key={i}>
                                <NewsCard
                                    {...item}
                                    index={i}
                                    visibleCards={list.length}
                                    isInverted={isInverted}
                                />
                            </ListItem>
                        );
                    })}
                </List>
            </Wrapper>
        </Section>
    );
};

export default NewsOverview;
