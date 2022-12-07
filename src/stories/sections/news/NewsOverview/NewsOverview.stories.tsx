/* eslint-disable react/display-name */
import React from 'react';
import { Meta, Story } from '@storybook/react';
import NewsOverview, {
    NewsItem,
    NewsOverviewComponent,
} from 'components/sections/news/NewsOverview';
import { generateItemList } from 'utils/storyHelpers';
import Pointer from 'components/buttons/Pointer';
import AngleRight from 'components/base/icons/AngleRight';

export default {
    title: 'Sections/News/NewsOverview',
    component: NewsOverviewComponent,
    parameters: {
        status: {
            type: ['preview', 'qsReady'],
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
    tags: [{ name: 'Tag 1', link: { href: '#0' } }],
    publishDate: new Date('July 22, 2021 03:24:00'),
    title: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy ',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
    link: { href: '#0' },
    ...action,
};

const exampleNewsTag1 = generateItemList<NewsItem>(
    exampleNewsCard,
    10,
    (item, i) => ({
        ...item,
        tags: [
            { name: 'Tag 1', link: { href: '#0' } },
            { name: 'Tag 2', link: { href: '#0' } },
        ],
        publishDate: new Date(`July ${i + 1}, 2021 03:24:00`),
        text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
    })
);

const exampleNewsTag2 = generateItemList<NewsItem>(
    exampleNewsCard,
    10,
    (item, i) => ({
        ...item,
        tags: [
            { name: 'Tag 1', link: { href: '#0' } },
            { name: 'Tag 3', link: { href: '#0' } },
        ],
        publishDate: new Date(`May ${i + 1}, 2021 03:24:00`),
        image: {
            small: 'https://unsplash.it/599/450?image=50' + i,
            medium: 'https://unsplash.it/688/516?image=50' + i,
            large: 'https://unsplash.it/591/444?image=50' + i,
            xlarge: 'https://unsplash.it/592/445?image=50' + i,
            ratios: {
                small: { w: 4, h: 3 },
            },
        },
    })
);

const exampleNewsTag3 = generateItemList<NewsItem>(
    exampleNewsCard,
    10,
    (item, i) => ({
        ...item,
        tags: [{ name: 'Tag 3', link: { href: '#0' } }],
        publishDate: new Date(`November ${i + 1}, 2021 03:24:00`),
    })
);

export const Default: Story = () => (
    <NewsOverview
        tags={[
            'Tag 1',
            'Tag 2',
            'Tag 3',
            'Tag 4',
            'Tag 5',
            'Tag 6',
            'Tag 7',
            'Tag 8',
            'Tag 9',
            'Tag 10',
            'Tag 11',
            'Tag 12',
            'Tag 13',
            'Tag 14',
            'Tag 15',
            'Tag 16',
        ]}
        news={[...exampleNewsTag1, ...exampleNewsTag2, ...exampleNewsTag3]}
    />
);

export const WithInitialValues: Story = () => (
    <NewsOverview
        initial={{
            tags: ['Tag 3', 'Tag 5'],
            rows: 7,
        }}
        tags={[
            'Tag 1',
            'Tag 2',
            'Tag 3',
            'Tag 4',
            'Tag 5',
            'Tag 6',
            'Tag 7',
            'Tag 8',
            'Tag 9',
            'Tag 10',
            'Tag 11',
            'Tag 12',
            'Tag 13',
            'Tag 14',
            'Tag 15',
            'Tag 16',
        ]}
        news={[...exampleNewsTag1, ...exampleNewsTag2, ...exampleNewsTag3]}
    />
);

export const WithTagClickHandler: Story = () => (
    <NewsOverview
        tags={[
            'Tag 1',
            'Tag 2',
            'Tag 3',
            'Tag 4',
            'Tag 5',
            'Tag 6',
            'Tag 7',
            'Tag 8',
            'Tag 9',
            'Tag 10',
            'Tag 11',
            'Tag 12',
            'Tag 13',
            'Tag 14',
            'Tag 15',
            'Tag 16',
        ]}
        news={[...exampleNewsTag1, ...exampleNewsTag2, ...exampleNewsTag3]}
        onTagClick={console.log}
    />
);

export const WithBackground: Story = () => (
    <NewsOverview
        tags={[
            'Tag 1',
            'Tag 2',
            'Tag 3',
            'Tag 4',
            'Tag 5',
            'Tag 6',
            'Tag 7',
            'Tag 8',
            'Tag 9',
            'Tag 10',
            'Tag 11',
            'Tag 12',
            'Tag 13',
            'Tag 14',
            'Tag 15',
            'Tag 16',
        ]}
        news={[...exampleNewsTag1, ...exampleNewsTag2, ...exampleNewsTag3]}
        bgMode="full"
    />
);

export const IsInverted: Story = () => (
    <NewsOverview
        tags={[
            'Tag 1',
            'Tag 2',
            'Tag 3',
            'Tag 4',
            'Tag 5',
            'Tag 6',
            'Tag 7',
            'Tag 8',
            'Tag 9',
            'Tag 10',
            'Tag 11',
            'Tag 12',
            'Tag 13',
            'Tag 14',
            'Tag 15',
            'Tag 16',
        ]}
        news={[...exampleNewsTag1, ...exampleNewsTag2, ...exampleNewsTag3]}
        bgMode="inverted"
    />
);

export const WithCustomTag: Story = () => (
    <NewsOverview
        tags={[
            'Tag 1',
            'Tag 2',
            'Tag 3',
            'Tag 4',
            'Tag 5',
            'Tag 6',
            'Tag 7',
            'Tag 8',
            'Tag 9',
            'Tag 10',
            'Tag 11',
            'Tag 12',
            'Tag 13',
            'Tag 14',
            'Tag 15',
            'Tag 16',
        ]}
        news={[...exampleNewsTag1, ...exampleNewsTag2, ...exampleNewsTag3]}
        customTag={({ name, isActive, clickHandler }) => (
            <button
                style={{ background: isActive ? 'gray' : 'lightgray' }}
                onClick={() => clickHandler && clickHandler()}
            >
                {name}
            </button>
        )}
    />
);
