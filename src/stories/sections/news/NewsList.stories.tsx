/* eslint-disable react/display-name */
import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import NewsList, {
    NewsItem,
    NewsListComponent,
} from 'components/sections/news/NewsList';
import Button from 'components/buttons/Button';
import ButtonGhost from 'components/buttons/ButtonGhost';
import { generateItemList } from 'utils/storyHelpers';

export default {
    title: 'Sections/News/NewsList',
    component: NewsListComponent,
    parameters: {
        status: {
            type: ['preview', 'qsReady'],
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

const exampleNewsCard: NewsItem = {
    tag: 'Secondary Tag',
    publishDate: new Date('July 22, 2021 03:24:00'),
    title: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy ',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
    link: { href: '#0' },
    ...actions,
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

export const WithHandler: Story = () => (
    <NewsList bgMode="inverted" news={exampleNews} onTagClick={console.log} />
);

export const WithMoreVisibleItems: Story = () => (
    <NewsList
        mode="expanded"
        bgMode="inverted"
        news={exampleNews}
        onTagClick={console.log}
    />
);
