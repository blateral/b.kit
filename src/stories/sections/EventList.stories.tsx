import React from 'react';
import { Meta, Story } from '@storybook/react';
import EventList from 'components/sections/EventList';

export default {
    title: 'Sections / EventList',
    component: EventList,
} as Meta;

export const Default: Story = () => (
    <EventList
        events={[
            {
                date: new Date('July 22, 2021 03:24:00'),
                title: 'Sitzung des Gemeinderates',
                text: '17:00-22:00 Uhr | Stadt Überlingen, im Pfarrsaal, Münsterplatz 5',
                tags: ['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4', 'Tag 5'],
            },
            {
                date: new Date('July 22, 2021 03:24:00'),
                title: 'Sitzung des Gemeinderates',
                text: '17:00-22:00 Uhr | Stadt Überlingen, im Pfarrsaal, Münsterplatz 5',
                tags: ['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4', 'Tag 5'],
            },
            {
                date: new Date('July 22, 2021 03:24:00'),
                title: 'Sitzung des Gemeinderates',
                text: '17:00-22:00 Uhr | Stadt Überlingen, im Pfarrsaal, Münsterplatz 5',
                tags: ['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4', 'Tag 5'],
            },
            {
                date: new Date('July 22, 2021 03:24:00'),
                title: 'Sitzung des Gemeinderates',
                text: '17:00-22:00 Uhr | Stadt Überlingen, im Pfarrsaal, Münsterplatz 5',
                tags: ['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4', 'Tag 5'],
            },
            {
                date: new Date('July 22, 2021 03:24:00'),
                title: 'Sitzung des Gemeinderates',
                text: '17:00-22:00 Uhr | Stadt Überlingen, im Pfarrsaal, Münsterplatz 5',
                tags: ['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4', 'Tag 5'],
            },
        ]}
    />
);

export const WithBackground: Story = () => (
    <EventList
        events={[
            {
                date: new Date('July 22, 2021 03:24:00'),
                title: 'Sitzung des Gemeinderates',
                text: '17:00-22:00 Uhr | Stadt Überlingen, im Pfarrsaal, Münsterplatz 5',
                tags: ['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4', 'Tag 5'],
            },
            {
                date: new Date('July 22, 2021 03:24:00'),
                title: 'Sitzung des Gemeinderates',
                text: '17:00-22:00 Uhr | Stadt Überlingen, im Pfarrsaal, Münsterplatz 5',
                tags: ['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4', 'Tag 5'],
            },
            {
                date: new Date('July 22, 2021 03:24:00'),
                title: 'Sitzung des Gemeinderates',
                text: '17:00-22:00 Uhr | Stadt Überlingen, im Pfarrsaal, Münsterplatz 5',
                tags: ['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4', 'Tag 5'],
            },
            {
                date: new Date('July 22, 2021 03:24:00'),
                title: 'Sitzung des Gemeinderates',
                text: '17:00-22:00 Uhr | Stadt Überlingen, im Pfarrsaal, Münsterplatz 5',
                tags: ['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4', 'Tag 5'],
            },
            {
                date: new Date('July 22, 2021 03:24:00'),
                title: 'Sitzung des Gemeinderates',
                text: '17:00-22:00 Uhr | Stadt Überlingen, im Pfarrsaal, Münsterplatz 5',
                tags: ['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4', 'Tag 5'],
            },
        ]}
        bgMode="full"
    />
);

export const IsInverted: Story = () => (
    <EventList
        events={[
            {
                date: new Date('July 22, 2021 03:24:00'),
                title: 'Sitzung des Gemeinderates',
                text: '17:00-22:00 Uhr | Stadt Überlingen, im Pfarrsaal, Münsterplatz 5',
                tags: ['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4', 'Tag 5'],
            },
            {
                date: new Date('July 22, 2021 03:24:00'),
                title: 'Sitzung des Gemeinderates',
                text: '17:00-22:00 Uhr | Stadt Überlingen, im Pfarrsaal, Münsterplatz 5',
                tags: ['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4', 'Tag 5'],
            },
            {
                date: new Date('July 22, 2021 03:24:00'),
                title: 'Sitzung des Gemeinderates',
                text: '17:00-22:00 Uhr | Stadt Überlingen, im Pfarrsaal, Münsterplatz 5',
                tags: ['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4', 'Tag 5'],
            },
            {
                date: new Date('July 22, 2021 03:24:00'),
                title: 'Sitzung des Gemeinderates',
                text: '17:00-22:00 Uhr | Stadt Überlingen, im Pfarrsaal, Münsterplatz 5',
                tags: ['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4', 'Tag 5'],
            },
            {
                date: new Date('July 22, 2021 03:24:00'),
                title: 'Sitzung des Gemeinderates',
                text: '17:00-22:00 Uhr | Stadt Überlingen, im Pfarrsaal, Münsterplatz 5',
                tags: ['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4', 'Tag 5'],
            },
        ]}
        bgMode="inverted"
    />
);