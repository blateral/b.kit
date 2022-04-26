import React from 'react';
import { Meta, Story } from '@storybook/react';
import EventOverview, {
    EventItem,
    EventOverviewComponent,
} from 'components/sections/events/EventOverview';
import { generateItemList } from 'utils/storyHelpers';

export default {
    title: 'Sections / Events / EventOverview',
    component: EventOverviewComponent,
    parameters: {
        status: {
            type: ['preview', 'qsReady'],
        },
    },
} as Meta;

const exampleEventCard: EventItem = {
    tags: [{ name: 'Tag 1', link: { href: '#0' } }],
    date: new Date('July 22, 2021 03:24:00'),
    title: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy ',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
    link: { href: '#0' },
};

const exampleEventTag1 = generateItemList<EventItem>(
    exampleEventCard,
    10,
    (item, i) => ({
        ...item,
        tags: [
            { name: 'Tag 1', link: { href: '#0' } },
            { name: 'Tag 2', link: { href: '#0' } },
        ],
        publishDate: new Date(`July ${i + 1}, 2021 03:24:00`),
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

const exampleEventTag2 = generateItemList<EventItem>(
    exampleEventCard,
    10,
    (item, i) => ({
        ...item,
        tags: [
            { name: 'Tag 1', link: { href: '#0' } },
            { name: 'Tag 3', link: { href: '#0' } },
        ],
        publishDate: new Date(`May ${i + 1}, 2021 03:24:00`),
        image: {
            small: 'https://unsplash.it/640/274' + i,
            medium: 'https://unsplash.it/832/357' + i,
            semilarge: 'https://unsplash.it/1024/439' + i,
            large: 'https://unsplash.it/832/624' + i,
        },
    })
);

const exampleEventTag3 = generateItemList<EventItem>(
    exampleEventCard,
    10,
    (item, i) => ({
        ...item,
        tags: [{ name: 'Tag 3', link: { href: '#0' } }],
        publishDate: new Date(`November ${i + 1}, 2021 03:24:00`),
        image: {
            small: 'https://unsplash.it/640/274' + i,
            medium: 'https://unsplash.it/832/357' + i,
            semilarge: 'https://unsplash.it/1024/439' + i,
            large: 'https://unsplash.it/832/624' + i,
        },
    })
);

export const Default: Story = () => (
    <EventOverview
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
        events={[...exampleEventTag1, ...exampleEventTag2, ...exampleEventTag3]}
    />
);

export const WithBackground: Story = () => (
    <EventOverview
        bgMode="full"
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
        events={[...exampleEventTag1, ...exampleEventTag2, ...exampleEventTag3]}
    />
);

export const IsInverted: Story = () => (
    <EventOverview
        bgMode="inverted"
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
        events={[...exampleEventTag1, ...exampleEventTag2, ...exampleEventTag3]}
    />
);
