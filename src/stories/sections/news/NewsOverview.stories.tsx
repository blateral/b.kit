/* eslint-disable react/display-name */
import React from 'react';
import { Meta, Story } from '@storybook/react';
import NewsOverview, {
    NewsOverviewComponent,
} from 'components/sections/news/NewsOverview';
import { generateItemList } from 'utils/storyHelpers';
import { NewsCardProps } from 'components/blocks/NewsCard';
import Button from 'components/buttons/Button';
import ButtonGhost from 'components/buttons/ButtonGhost';

export default {
    title: 'Sections/News/NewsOverview',
    component: NewsOverviewComponent,
    parameters: {
        status: {
            type: ['preview'],
        },
    },
} as Meta;

const actions = {
    primaryAction: (isInverted?: boolean) => (
        <Button.View isInverted={isInverted}>
            <Button.Label>Primary</Button.Label>
        </Button.View>
    ),
    secondaryAction: (isInverted?: boolean) => (
        <ButtonGhost.View isInverted={isInverted}>
            <ButtonGhost.Label>Secondary</ButtonGhost.Label>
        </ButtonGhost.View>
    ),
};

const exampleNewsCard: NewsCardProps = {
    tag: 'Secondary Tag',
    publishDate: new Date('July 22, 2021 03:24:00'),
    title: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy ',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
    link: { href: '#0' },
    ...actions,
};

const exampleNewsTag1 = generateItemList<NewsCardProps>(
    { ...exampleNewsCard, publishDate: new Date('July 15, 2021 03:24:00') },
    10,
    (item, i) => ({
        ...item,
        tag: 'Tag 1',
        image: {
            small: 'https://unsplash.it/599/450?image=40' + i,
            medium: 'https://unsplash.it/688/516?image=40' + i,
            large: 'https://unsplash.it/591/444?image=40' + i,
            xlarge: 'https://unsplash.it/592/445?image=40' + i,
            ratios: {
                small: { w: 4, h: 3 },
            },
        },
        text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
    })
);

const exampleNewsTag2 = generateItemList<NewsCardProps>(
    exampleNewsCard,
    10,
    (item, i) => ({
        ...item,
        tag: 'Tag 2',
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

const exampleNewsTag3 = generateItemList<NewsCardProps>(
    exampleNewsCard,
    10,
    (item, i) => ({
        ...item,
        tag: 'Tag 3',
        image: {
            small: 'https://unsplash.it/599/450?image=30' + i,
            medium: 'https://unsplash.it/688/516?image=30' + i,
            large: 'https://unsplash.it/591/444?image=30' + i,
            xlarge: 'https://unsplash.it/592/445?image=30' + i,
            ratios: {
                small: { w: 4, h: 3 },
            },
        },
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

export const WithActiveTag: Story = () => (
    <NewsOverview
        activeTags={['Tag 3']}
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
        activeTags={['Tag 3']}
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
        activeTags={['Tag 3']}
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
        activeTags={['Tag 3']}
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
