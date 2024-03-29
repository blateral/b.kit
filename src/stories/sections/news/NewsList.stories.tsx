/* eslint-disable react/display-name */
import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import NewsList, {
    NewsItem,
    NewsListComponent,
} from 'components/sections/news/NewsList';
import { generateItemList } from 'utils/storyHelpers';
import Pointer from 'components/buttons/Pointer';
import AngleRight from 'components/base/icons/AngleRight';

export default {
    title: 'Sections/News/NewsList',
    component: NewsListComponent,
    parameters: {
        status: {
            type: ['preview', 'qsReady', 'releaseCandidate'],
        },
    },
} as Meta;

const action = {
    action: (isInverted?: boolean) => (
        <Pointer.View textDecoration="none" isInverted={isInverted}>
            <Pointer.Label>Tertiary</Pointer.Label>
            <Pointer.Icon>
                <AngleRight />
            </Pointer.Icon>
        </Pointer.View>
    ),
};

const exampleNewsCard: NewsItem = {
    tags: [
        { name: 'rathaus', link: { href: '#0' } },
        { name: 'TagB', link: { href: '#0' } },
        { name: 'TagC', link: { href: '#0' } },
        { name: 'TagD', link: { href: '#0' } },
        { name: 'TagE', link: { href: '#0' } },
        { name: 'TagF', link: { href: '#0' } },
        { name: 'TagG', link: { href: '#0' } },
    ],
    publishDate: new Date('July 22, 2021 03:24:00'),
    title: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy ',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
    link: { href: '#0' },
    ...action,
};

const exampleNews = generateItemList<NewsItem>(
    exampleNewsCard,
    10,
    (item, i) => ({
        ...item,
        image: {
            small: 'https://unsplash.it/599/450?image=40' + i,
            medium: 'https://unsplash.it/688/516?image=40' + i,
            large: 'https://unsplash.it/591/444?image=40' + i,
            xlarge: 'https://unsplash.it/592/445?image=40' + i,
            ratios: {
                small: { w: 4, h: 3 },
            },
        },
    })
);

export const Default: Story = () => <NewsList news={exampleNews} />;

export const WithBackground: Story = () => (
    <NewsList bgMode="full" news={exampleNews} />
);

export const Inverted: Story = () => (
    <NewsList bgMode="inverted" news={exampleNews} />
);

export const WithMoreVisibleItems: Story = () => (
    <NewsList mode="expanded" bgMode="inverted" news={exampleNews} />
);

export const WithCustomTag: Story = () => (
    <NewsList
        bgMode="inverted"
        news={exampleNews}
        customTag={({ name, isActive, link }) => (
            <a
                style={{
                    display: 'block',
                    background: isActive ? 'gray' : 'lightgray',
                }}
                {...link}
            >
                {name}
            </a>
        )}
    />
);
