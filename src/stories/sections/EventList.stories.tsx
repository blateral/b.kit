/* eslint-disable react/display-name */
import React from 'react';
import { Meta, Story } from '@storybook/react';
import EventList, { EventListComponent } from 'components/sections/EventList';
import Pointer from 'components/buttons/Pointer';
import AngleRight from 'components/base/icons/AngleRight';

export default {
    title: 'Sections / EventList',
    component: EventListComponent,
    parameters: {
        status: {
            type: ['preview', 'qsReady'],
        },
    },
} as Meta;

export const Default: Story = () => (
    <EventList
        onTagClick={console.log}
        events={[
            {
                date: new Date('July 22, 2021 03:24:00'),
                title: 'Sitzung des Gemeinderates',
                text: '17:00-22:00 Uhr | Stadt Überlingen, im Pfarrsaal, Münsterplatz 5',
                tags: ['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4', 'Tag 5'],
                action: ({ isInverted }) => (
                    <Pointer.View isInverted={isInverted} textDecoration="none">
                        <Pointer.Label>Lorem Ipsum</Pointer.Label>
                        <Pointer.Icon>
                            <AngleRight />
                        </Pointer.Icon>
                    </Pointer.View>
                ),
            },
            {
                date: new Date('July 22, 2021 03:24:00'),
                title: 'Sitzung des Gemeinderates',
                text: '17:00-22:00 Uhr | Stadt Überlingen, im Pfarrsaal, Münsterplatz 5',
                tags: ['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4', 'Tag 5'],
                action: ({ isInverted }) => (
                    <Pointer.View isInverted={isInverted} textDecoration="none">
                        <Pointer.Label>Lorem Ipsum</Pointer.Label>
                        <Pointer.Icon>
                            <AngleRight />
                        </Pointer.Icon>
                    </Pointer.View>
                ),
            },
            {
                date: new Date('July 22, 2021 03:24:00'),
                title: 'Sitzung des Gemeinderates',
                text: '17:00-22:00 Uhr | Stadt Überlingen, im Pfarrsaal, Münsterplatz 5',
                tags: ['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4', 'Tag 5'],
                action: ({ isInverted }) => (
                    <Pointer.View isInverted={isInverted} textDecoration="none">
                        <Pointer.Label>Lorem Ipsum</Pointer.Label>
                        <Pointer.Icon>
                            <AngleRight />
                        </Pointer.Icon>
                    </Pointer.View>
                ),
            },
            {
                date: new Date('July 22, 2021 03:24:00'),
                title: 'Sitzung des Gemeinderates',
                text: '17:00-22:00 Uhr | Stadt Überlingen, im Pfarrsaal, Münsterplatz 5',
                tags: ['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4', 'Tag 5'],
                action: ({ isInverted }) => (
                    <Pointer.View isInverted={isInverted} textDecoration="none">
                        <Pointer.Label>Lorem Ipsum</Pointer.Label>
                        <Pointer.Icon>
                            <AngleRight />
                        </Pointer.Icon>
                    </Pointer.View>
                ),
            },
            {
                date: new Date('July 22, 2021 03:24:00'),
                title: 'Sitzung des Gemeinderates',
                text: '17:00-22:00 Uhr | Stadt Überlingen, im Pfarrsaal, Münsterplatz 5',
                tags: ['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4', 'Tag 5'],
                action: ({ isInverted }) => (
                    <Pointer.View isInverted={isInverted} textDecoration="none">
                        <Pointer.Label>Lorem Ipsum</Pointer.Label>
                        <Pointer.Icon>
                            <AngleRight />
                        </Pointer.Icon>
                    </Pointer.View>
                ),
            },
        ]}
    />
);

export const WithImages: Story = () => (
    <EventList
        onTagClick={console.log}
        events={[
            {
                date: new Date('July 22, 2021 03:24:00'),
                title: 'Sitzung des Gemeinderates',
                image: {
                    small: 'https://unsplash.it/640/274',
                    medium: 'https://unsplash.it/832/357',
                    semilarge: 'https://unsplash.it/1024/439',
                    large: 'https://unsplash.it/832/624',
                    ratios: {
                        small: { w: 352, h: 176 },
                        medium: { w: 752, h: 276 },
                        large: { w: 375, h: 250 },
                    },
                },
                text: '17:00-22:00 Uhr | Stadt Überlingen, im Pfarrsaal, Münsterplatz 5',
                tags: ['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4', 'Tag 5'],
                action: ({ isInverted }) => (
                    <Pointer.View isInverted={isInverted} textDecoration="none">
                        <Pointer.Label>Lorem Ipsum</Pointer.Label>
                        <Pointer.Icon>
                            <AngleRight />
                        </Pointer.Icon>
                    </Pointer.View>
                ),
            },
            {
                date: new Date('July 22, 2021 03:24:00'),
                title: 'Sitzung des Gemeinderates',
                image: {
                    small: 'https://unsplash.it/640/274',
                    medium: 'https://unsplash.it/832/357',
                    semilarge: 'https://unsplash.it/1024/439',
                    large: 'https://unsplash.it/832/624',
                    ratios: {
                        small: { w: 352, h: 176 },
                        medium: { w: 752, h: 276 },
                        large: { w: 375, h: 250 },
                    },
                },
                text: '17:00-22:00 Uhr | Stadt Überlingen, im Pfarrsaal, Münsterplatz 5',
                tags: ['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4', 'Tag 5'],
                action: ({ isInverted }) => (
                    <Pointer.View isInverted={isInverted} textDecoration="none">
                        <Pointer.Label>Lorem Ipsum</Pointer.Label>
                        <Pointer.Icon>
                            <AngleRight />
                        </Pointer.Icon>
                    </Pointer.View>
                ),
            },
            {
                date: new Date('July 22, 2021 03:24:00'),
                title: 'Sitzung des Gemeinderates',
                image: {
                    small: 'https://unsplash.it/640/274',
                    medium: 'https://unsplash.it/832/357',
                    semilarge: 'https://unsplash.it/1024/439',
                    large: 'https://unsplash.it/832/624',
                    ratios: {
                        small: { w: 352, h: 176 },
                        medium: { w: 752, h: 276 },
                        large: { w: 375, h: 250 },
                    },
                },
                text: '17:00-22:00 Uhr | Stadt Überlingen, im Pfarrsaal, Münsterplatz 5',
                tags: ['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4', 'Tag 5'],
                action: ({ isInverted }) => (
                    <Pointer.View isInverted={isInverted} textDecoration="none">
                        <Pointer.Label>Lorem Ipsum</Pointer.Label>
                        <Pointer.Icon>
                            <AngleRight />
                        </Pointer.Icon>
                    </Pointer.View>
                ),
            },
            {
                date: new Date('July 22, 2021 03:24:00'),
                title: 'Sitzung des Gemeinderates',
                image: {
                    small: 'https://unsplash.it/640/274',
                    medium: 'https://unsplash.it/832/357',
                    semilarge: 'https://unsplash.it/1024/439',
                    large: 'https://unsplash.it/832/624',
                    ratios: {
                        small: { w: 352, h: 176 },
                        medium: { w: 752, h: 276 },
                        large: { w: 375, h: 250 },
                    },
                },
                text: '17:00-22:00 Uhr | Stadt Überlingen, im Pfarrsaal, Münsterplatz 5',
                tags: ['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4', 'Tag 5'],
                action: ({ isInverted }) => (
                    <Pointer.View isInverted={isInverted} textDecoration="none">
                        <Pointer.Label>Lorem Ipsum</Pointer.Label>
                        <Pointer.Icon>
                            <AngleRight />
                        </Pointer.Icon>
                    </Pointer.View>
                ),
            },
            {
                date: new Date('July 22, 2021 03:24:00'),
                title: 'Sitzung des Gemeinderates',
                image: {
                    small: 'https://unsplash.it/640/274',
                    medium: 'https://unsplash.it/832/357',
                    semilarge: 'https://unsplash.it/1024/439',
                    large: 'https://unsplash.it/832/624',
                    ratios: {
                        small: { w: 352, h: 176 },
                        medium: { w: 752, h: 276 },
                        large: { w: 375, h: 250 },
                    },
                },
                text: '17:00-22:00 Uhr | Stadt Überlingen, im Pfarrsaal, Münsterplatz 5',
                tags: ['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4', 'Tag 5'],
                action: ({ isInverted }) => (
                    <Pointer.View isInverted={isInverted} textDecoration="none">
                        <Pointer.Label>Lorem Ipsum</Pointer.Label>
                        <Pointer.Icon>
                            <AngleRight />
                        </Pointer.Icon>
                    </Pointer.View>
                ),
            },
        ]}
    />
);

export const WithBackground: Story = () => (
    <EventList
        onTagClick={console.log}
        events={[
            {
                date: new Date('July 22, 2021 03:24:00'),
                title: 'Sitzung des Gemeinderates',
                image: {
                    small: 'https://unsplash.it/640/274',
                    medium: 'https://unsplash.it/832/357',
                    semilarge: 'https://unsplash.it/1024/439',
                    large: 'https://unsplash.it/832/624',
                    ratios: {
                        small: { w: 352, h: 176 },
                        medium: { w: 752, h: 276 },
                        large: { w: 375, h: 250 },
                    },
                },
                text: '17:00-22:00 Uhr | Stadt Überlingen, im Pfarrsaal, Münsterplatz 5',
                tags: ['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4', 'Tag 5'],
                action: ({ isInverted }) => (
                    <Pointer.View isInverted={isInverted} textDecoration="none">
                        <Pointer.Label>Lorem Ipsum</Pointer.Label>
                        <Pointer.Icon>
                            <AngleRight />
                        </Pointer.Icon>
                    </Pointer.View>
                ),
            },
            {
                date: new Date('July 22, 2021 03:24:00'),
                title: 'Sitzung des Gemeinderates',
                image: {
                    small: 'https://unsplash.it/640/274',
                    medium: 'https://unsplash.it/832/357',
                    semilarge: 'https://unsplash.it/1024/439',
                    large: 'https://unsplash.it/832/624',
                    ratios: {
                        small: { w: 352, h: 176 },
                        medium: { w: 752, h: 276 },
                        large: { w: 375, h: 250 },
                    },
                },
                text: '17:00-22:00 Uhr | Stadt Überlingen, im Pfarrsaal, Münsterplatz 5',
                tags: ['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4', 'Tag 5'],
                action: ({ isInverted }) => (
                    <Pointer.View isInverted={isInverted} textDecoration="none">
                        <Pointer.Label>Lorem Ipsum</Pointer.Label>
                        <Pointer.Icon>
                            <AngleRight />
                        </Pointer.Icon>
                    </Pointer.View>
                ),
            },
            {
                date: new Date('July 22, 2021 03:24:00'),
                title: 'Sitzung des Gemeinderates',
                image: {
                    small: 'https://unsplash.it/640/274',
                    medium: 'https://unsplash.it/832/357',
                    semilarge: 'https://unsplash.it/1024/439',
                    large: 'https://unsplash.it/832/624',
                    ratios: {
                        small: { w: 352, h: 176 },
                        medium: { w: 752, h: 276 },
                        large: { w: 375, h: 250 },
                    },
                },
                text: '17:00-22:00 Uhr | Stadt Überlingen, im Pfarrsaal, Münsterplatz 5',
                tags: ['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4', 'Tag 5'],
                action: ({ isInverted }) => (
                    <Pointer.View isInverted={isInverted} textDecoration="none">
                        <Pointer.Label>Lorem Ipsum</Pointer.Label>
                        <Pointer.Icon>
                            <AngleRight />
                        </Pointer.Icon>
                    </Pointer.View>
                ),
            },
            {
                date: new Date('July 22, 2021 03:24:00'),
                title: 'Sitzung des Gemeinderates',
                image: {
                    small: 'https://unsplash.it/640/274',
                    medium: 'https://unsplash.it/832/357',
                    semilarge: 'https://unsplash.it/1024/439',
                    large: 'https://unsplash.it/832/624',
                    ratios: {
                        small: { w: 352, h: 176 },
                        medium: { w: 752, h: 276 },
                        large: { w: 375, h: 250 },
                    },
                },
                text: '17:00-22:00 Uhr | Stadt Überlingen, im Pfarrsaal, Münsterplatz 5',
                tags: ['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4', 'Tag 5'],
                action: ({ isInverted }) => (
                    <Pointer.View isInverted={isInverted} textDecoration="none">
                        <Pointer.Label>Lorem Ipsum</Pointer.Label>
                        <Pointer.Icon>
                            <AngleRight />
                        </Pointer.Icon>
                    </Pointer.View>
                ),
            },
            {
                date: new Date('July 22, 2021 03:24:00'),
                title: 'Sitzung des Gemeinderates',
                image: {
                    small: 'https://unsplash.it/640/274',
                    medium: 'https://unsplash.it/832/357',
                    semilarge: 'https://unsplash.it/1024/439',
                    large: 'https://unsplash.it/832/624',
                    ratios: {
                        small: { w: 352, h: 176 },
                        medium: { w: 752, h: 276 },
                        large: { w: 375, h: 250 },
                    },
                },
                text: '17:00-22:00 Uhr | Stadt Überlingen, im Pfarrsaal, Münsterplatz 5',
                tags: ['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4', 'Tag 5'],
                action: ({ isInverted }) => (
                    <Pointer.View isInverted={isInverted} textDecoration="none">
                        <Pointer.Label>Lorem Ipsum</Pointer.Label>
                        <Pointer.Icon>
                            <AngleRight />
                        </Pointer.Icon>
                    </Pointer.View>
                ),
            },
        ]}
        bgMode="full"
    />
);

export const IsInverted: Story = () => (
    <EventList
        onTagClick={console.log}
        events={[
            {
                date: new Date('July 22, 2021 03:24:00'),
                title: 'Sitzung des Gemeinderates',
                image: {
                    small: 'https://unsplash.it/640/274',
                    medium: 'https://unsplash.it/832/357',
                    semilarge: 'https://unsplash.it/1024/439',
                    large: 'https://unsplash.it/832/624',
                    ratios: {
                        small: { w: 352, h: 176 },
                        medium: { w: 752, h: 276 },
                        large: { w: 375, h: 250 },
                    },
                },
                text: '17:00-22:00 Uhr | Stadt Überlingen, im Pfarrsaal, Münsterplatz 5',
                tags: ['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4', 'Tag 5'],
                action: ({ isInverted }) => (
                    <Pointer.View isInverted={isInverted} textDecoration="none">
                        <Pointer.Label>Lorem Ipsum</Pointer.Label>
                        <Pointer.Icon>
                            <AngleRight />
                        </Pointer.Icon>
                    </Pointer.View>
                ),
            },
            {
                date: new Date('July 22, 2021 03:24:00'),
                title: 'Sitzung des Gemeinderates',
                image: {
                    small: 'https://unsplash.it/640/274',
                    medium: 'https://unsplash.it/832/357',
                    semilarge: 'https://unsplash.it/1024/439',
                    large: 'https://unsplash.it/832/624',
                    ratios: {
                        small: { w: 352, h: 176 },
                        medium: { w: 752, h: 276 },
                        large: { w: 375, h: 250 },
                    },
                },
                text: '17:00-22:00 Uhr | Stadt Überlingen, im Pfarrsaal, Münsterplatz 5',
                tags: ['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4', 'Tag 5'],
                action: ({ isInverted }) => (
                    <Pointer.View isInverted={isInverted} textDecoration="none">
                        <Pointer.Label>Lorem Ipsum</Pointer.Label>
                        <Pointer.Icon>
                            <AngleRight />
                        </Pointer.Icon>
                    </Pointer.View>
                ),
            },
            {
                date: new Date('July 22, 2021 03:24:00'),
                title: 'Sitzung des Gemeinderates',
                image: {
                    small: 'https://unsplash.it/640/274',
                    medium: 'https://unsplash.it/832/357',
                    semilarge: 'https://unsplash.it/1024/439',
                    large: 'https://unsplash.it/832/624',
                    ratios: {
                        small: { w: 352, h: 176 },
                        medium: { w: 752, h: 276 },
                        large: { w: 375, h: 250 },
                    },
                },
                text: '17:00-22:00 Uhr | Stadt Überlingen, im Pfarrsaal, Münsterplatz 5',
                tags: ['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4', 'Tag 5'],
                action: ({ isInverted }) => (
                    <Pointer.View isInverted={isInverted} textDecoration="none">
                        <Pointer.Label>Lorem Ipsum</Pointer.Label>
                        <Pointer.Icon>
                            <AngleRight />
                        </Pointer.Icon>
                    </Pointer.View>
                ),
            },
            {
                date: new Date('July 22, 2021 03:24:00'),
                title: 'Sitzung des Gemeinderates',
                image: {
                    small: 'https://unsplash.it/640/274',
                    medium: 'https://unsplash.it/832/357',
                    semilarge: 'https://unsplash.it/1024/439',
                    large: 'https://unsplash.it/832/624',
                    ratios: {
                        small: { w: 352, h: 176 },
                        medium: { w: 752, h: 276 },
                        large: { w: 375, h: 250 },
                    },
                },
                text: '17:00-22:00 Uhr | Stadt Überlingen, im Pfarrsaal, Münsterplatz 5',
                tags: ['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4', 'Tag 5'],
                action: ({ isInverted }) => (
                    <Pointer.View isInverted={isInverted} textDecoration="none">
                        <Pointer.Label>Lorem Ipsum</Pointer.Label>
                        <Pointer.Icon>
                            <AngleRight />
                        </Pointer.Icon>
                    </Pointer.View>
                ),
            },
            {
                date: new Date('July 22, 2021 03:24:00'),
                title: 'Sitzung des Gemeinderates',
                image: {
                    small: 'https://unsplash.it/640/274',
                    medium: 'https://unsplash.it/832/357',
                    semilarge: 'https://unsplash.it/1024/439',
                    large: 'https://unsplash.it/832/624',
                    ratios: {
                        small: { w: 352, h: 176 },
                        medium: { w: 752, h: 276 },
                        large: { w: 375, h: 250 },
                    },
                },
                text: '17:00-22:00 Uhr | Stadt Überlingen, im Pfarrsaal, Münsterplatz 5',
                tags: ['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4', 'Tag 5'],
                action: ({ isInverted }) => (
                    <Pointer.View isInverted={isInverted} textDecoration="none">
                        <Pointer.Label>Lorem Ipsum</Pointer.Label>
                        <Pointer.Icon>
                            <AngleRight />
                        </Pointer.Icon>
                    </Pointer.View>
                ),
            },
        ]}
        bgMode="inverted"
    />
);

export const WithCustomTag: Story = () => (
    <EventList
        onTagClick={console.log}
        events={[
            {
                date: new Date('July 22, 2021 03:24:00'),
                title: 'Sitzung des Gemeinderates',
                image: {
                    small: 'https://unsplash.it/640/274',
                    medium: 'https://unsplash.it/832/357',
                    semilarge: 'https://unsplash.it/1024/439',
                    large: 'https://unsplash.it/832/624',
                    ratios: {
                        small: { w: 352, h: 176 },
                        medium: { w: 752, h: 276 },
                        large: { w: 375, h: 250 },
                    },
                },
                text: '17:00-22:00 Uhr | Stadt Überlingen, im Pfarrsaal, Münsterplatz 5',
                tags: ['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4', 'Tag 5'],
                action: ({ isInverted }) => (
                    <Pointer.View isInverted={isInverted} textDecoration="none">
                        <Pointer.Label>Lorem Ipsum</Pointer.Label>
                        <Pointer.Icon>
                            <AngleRight />
                        </Pointer.Icon>
                    </Pointer.View>
                ),
            },
            {
                date: new Date('July 22, 2021 03:24:00'),
                title: 'Sitzung des Gemeinderates',
                image: {
                    small: 'https://unsplash.it/640/274',
                    medium: 'https://unsplash.it/832/357',
                    semilarge: 'https://unsplash.it/1024/439',
                    large: 'https://unsplash.it/832/624',
                    ratios: {
                        small: { w: 352, h: 176 },
                        medium: { w: 752, h: 276 },
                        large: { w: 375, h: 250 },
                    },
                },
                text: '17:00-22:00 Uhr | Stadt Überlingen, im Pfarrsaal, Münsterplatz 5',
                tags: ['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4', 'Tag 5'],
                action: ({ isInverted }) => (
                    <Pointer.View isInverted={isInverted} textDecoration="none">
                        <Pointer.Label>Lorem Ipsum</Pointer.Label>
                        <Pointer.Icon>
                            <AngleRight />
                        </Pointer.Icon>
                    </Pointer.View>
                ),
            },
            {
                date: new Date('July 22, 2021 03:24:00'),
                title: 'Sitzung des Gemeinderates',
                image: {
                    small: 'https://unsplash.it/640/274',
                    medium: 'https://unsplash.it/832/357',
                    semilarge: 'https://unsplash.it/1024/439',
                    large: 'https://unsplash.it/832/624',
                    ratios: {
                        small: { w: 352, h: 176 },
                        medium: { w: 752, h: 276 },
                        large: { w: 375, h: 250 },
                    },
                },
                text: '17:00-22:00 Uhr | Stadt Überlingen, im Pfarrsaal, Münsterplatz 5',
                tags: ['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4', 'Tag 5'],
                action: ({ isInverted }) => (
                    <Pointer.View isInverted={isInverted} textDecoration="none">
                        <Pointer.Label>Lorem Ipsum</Pointer.Label>
                        <Pointer.Icon>
                            <AngleRight />
                        </Pointer.Icon>
                    </Pointer.View>
                ),
            },
            {
                date: new Date('July 22, 2021 03:24:00'),
                title: 'Sitzung des Gemeinderates',
                image: {
                    small: 'https://unsplash.it/640/274',
                    medium: 'https://unsplash.it/832/357',
                    semilarge: 'https://unsplash.it/1024/439',
                    large: 'https://unsplash.it/832/624',
                    ratios: {
                        small: { w: 352, h: 176 },
                        medium: { w: 752, h: 276 },
                        large: { w: 375, h: 250 },
                    },
                },
                text: '17:00-22:00 Uhr | Stadt Überlingen, im Pfarrsaal, Münsterplatz 5',
                tags: ['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4', 'Tag 5'],
                action: ({ isInverted }) => (
                    <Pointer.View isInverted={isInverted} textDecoration="none">
                        <Pointer.Label>Lorem Ipsum</Pointer.Label>
                        <Pointer.Icon>
                            <AngleRight />
                        </Pointer.Icon>
                    </Pointer.View>
                ),
            },
            {
                date: new Date('July 22, 2021 03:24:00'),
                title: 'Sitzung des Gemeinderates',
                image: {
                    small: 'https://unsplash.it/640/274',
                    medium: 'https://unsplash.it/832/357',
                    semilarge: 'https://unsplash.it/1024/439',
                    large: 'https://unsplash.it/832/624',
                    ratios: {
                        small: { w: 352, h: 176 },
                        medium: { w: 752, h: 276 },
                        large: { w: 375, h: 250 },
                    },
                },
                text: '17:00-22:00 Uhr | Stadt Überlingen, im Pfarrsaal, Münsterplatz 5',
                tags: ['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4', 'Tag 5'],
                action: ({ isInverted }) => (
                    <Pointer.View isInverted={isInverted} textDecoration="none">
                        <Pointer.Label>Lorem Ipsum</Pointer.Label>
                        <Pointer.Icon>
                            <AngleRight />
                        </Pointer.Icon>
                    </Pointer.View>
                ),
            },
        ]}
        customTag={({ name, isActive, clickHandler }) => (
            <button
                style={{ background: isActive ? 'gray' : 'lightgray' }}
                onClick={clickHandler}
            >
                {name}
            </button>
        )}
    />
);
