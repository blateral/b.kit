import * as React from 'react';
import styled, { ThemeContext } from 'styled-components';

import Section from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';

import NewsCard, { NewsCardProps } from '../../blocks/NewsCard';
import { getColors, mq, spacings, withRange } from 'utils/styles';
import Actions from 'components/blocks/Actions';
import { HeadlineTag } from 'components/typography/Heading';
import Intro from 'components/blocks/Intro';
import Copy from 'components/typography/Copy';

const StyledIntro = styled(Intro)`
    ${withRange([spacings.spacer * 1.5, spacings.spacer * 3], 'margin-bottom')};
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
    list: NewsCardProps[];

    intro?: {
        title: string;
        titleAs?: HeadlineTag;
        superTitle?: string;
        superTitleAs?: HeadlineTag;
        text?: string;
    };

    isInverted?: boolean;

    primaryAction?: (isInverted?: boolean) => React.ReactNode;
    secondaryAction?: (isInverted?: boolean) => React.ReactNode;
}> = ({
    list,

    intro,
    isInverted,

    primaryAction,
    secondaryAction,
}) => {
    const theme = React.useContext(ThemeContext);
    const [visibleCard, setVisibleCard] = React.useState(3);
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
            </Wrapper>
            <Wrapper addWhitespace clampWidth="normal">
                <List>
                    {list.map((item, i) => {
                        return (
                            <ListItem key={i}>
                                <NewsCard
                                    {...item}
                                    index={i}
                                    visibleCards={visibleCard}
                                    isInverted={isInverted}
                                />
                            </ListItem>
                        );
                    })}
                </List>
            </Wrapper>
            <Wrapper addWhitespace clampWidth="small">
                <ListFooter>
                    <Copy isInverted={isInverted}>
                        <ShowMore
                            itemCount={list.length}
                            onClick={(ev) => {
                                ev.preventDefault();
                                visibleCard >= list.length
                                    ? setVisibleCard(visibleCard - 3)
                                    : setVisibleCard(visibleCard + 3);
                            }}
                        >
                            {visibleCard < list.length && 'weitere Anzeigen'}
                        </ShowMore>
                    </Copy>
                    {(primaryAction || secondaryAction) && (
                        <Actions
                            primary={primaryAction && primaryAction(isInverted)}
                            secondary={
                                secondaryAction && secondaryAction(isInverted)
                            }
                        />
                    )}
                </ListFooter>
            </Wrapper>
        </Section>
    );
};

export default NewsList;
