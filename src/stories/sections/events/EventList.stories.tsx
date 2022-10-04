/* eslint-disable react/display-name */
import React from 'react';
import { Meta, Story } from '@storybook/react';
import EventList, {
    EventListComponent,
} from 'components/sections/events/EventList';
import Pointer from 'components/buttons/Pointer';
import AngleRight from 'components/base/icons/AngleRight';

export default {
    title: 'Sections / Events / EventList',
    component: EventListComponent,
    parameters: {
        status: {
            type: ['preview', 'qsReady'],
        },
    },
} as Meta;

export const Default: Story = () => (
    <EventList
        events={[
            {
                date: new Date('July 22, 2021 03:24:00'),
                title: 'Sitzung des Gemeinderates',
                address: 'Stadt Überlingen, im Pfarrsaal, Münsterplatz 5',
                tags: [
                    { name: 'Tag 1', link: { href: '#0' } },
                    { name: 'Tag 2', link: { href: '#0' } },
                    { name: 'Tag 3', link: { href: '#0' } },
                    { name: 'Tag 4', link: { href: '#0' } },
                    { name: 'Tag 5', link: { href: '#0' } },
                ],
                link: { href: '#0' },
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
                address: 'Stadt Überlingen, im Pfarrsaal, Münsterplatz 5',
                tags: [
                    { name: 'Tag 1', link: { href: '#0' } },
                    { name: 'Tag 2', link: { href: '#0' } },
                    { name: 'Tag 3', link: { href: '#0' } },
                    { name: 'Tag 4', link: { href: '#0' } },
                    { name: 'Tag 5', link: { href: '#0' } },
                ],
                link: { href: '#0' },
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
                address: 'Stadt Überlingen, im Pfarrsaal, Münsterplatz 5',
                tags: [
                    { name: 'Tag 1', link: { href: '#0' } },
                    { name: 'Tag 2', link: { href: '#0' } },
                    { name: 'Tag 3', link: { href: '#0' } },
                    { name: 'Tag 4', link: { href: '#0' } },
                    { name: 'Tag 5', link: { href: '#0' } },
                ],
                link: { href: '#0' },
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
                address: 'Stadt Überlingen, im Pfarrsaal, Münsterplatz 5',
                tags: [
                    { name: 'Tag 1', link: { href: '#0' } },
                    { name: 'Tag 2', link: { href: '#0' } },
                    { name: 'Tag 3', link: { href: '#0' } },
                    { name: 'Tag 4', link: { href: '#0' } },
                    { name: 'Tag 5', link: { href: '#0' } },
                ],
                link: { href: '#0' },
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
                address: 'Stadt Überlingen, im Pfarrsaal, Münsterplatz 5',
                tags: [
                    { name: 'Tag 1', link: { href: '#0' } },
                    { name: 'Tag 2', link: { href: '#0' } },
                    { name: 'Tag 3', link: { href: '#0' } },
                    { name: 'Tag 4', link: { href: '#0' } },
                    { name: 'Tag 5', link: { href: '#0' } },
                ],
                link: { href: '#0' },
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
                address: 'Stadt Überlingen, im Pfarrsaal, Münsterplatz 5',
                tags: [
                    { name: 'Tag 1', link: { href: '#0' } },
                    { name: 'Tag 2', link: { href: '#0' } },
                    { name: 'Tag 3', link: { href: '#0' } },
                    { name: 'Tag 4', link: { href: '#0' } },
                    { name: 'Tag 5', link: { href: '#0' } },
                ],
                link: { href: '#0' },
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
                address: 'Stadt Überlingen, im Pfarrsaal, Münsterplatz 5',
                tags: [
                    { name: 'Tag 1', link: { href: '#0' } },
                    { name: 'Tag 2', link: { href: '#0' } },
                    { name: 'Tag 3', link: { href: '#0' } },
                    { name: 'Tag 4', link: { href: '#0' } },
                    { name: 'Tag 5', link: { href: '#0' } },
                ],
                link: { href: '#0' },
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
                address: 'Stadt Überlingen, im Pfarrsaal, Münsterplatz 5',
                tags: [
                    { name: 'Tag 1', link: { href: '#0' } },
                    { name: 'Tag 2', link: { href: '#0' } },
                    { name: 'Tag 3', link: { href: '#0' } },
                    { name: 'Tag 4', link: { href: '#0' } },
                    { name: 'Tag 5', link: { href: '#0' } },
                ],
                link: { href: '#0' },
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
                address: 'Stadt Überlingen, im Pfarrsaal, Münsterplatz 5',
                tags: [
                    { name: 'Tag 1', link: { href: '#0' } },
                    { name: 'Tag 2', link: { href: '#0' } },
                    { name: 'Tag 3', link: { href: '#0' } },
                    { name: 'Tag 4', link: { href: '#0' } },
                    { name: 'Tag 5', link: { href: '#0' } },
                ],
                link: { href: '#0' },
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
                address: 'Stadt Überlingen, im Pfarrsaal, Münsterplatz 5',
                tags: [
                    { name: 'Tag 1', link: { href: '#0' } },
                    { name: 'Tag 2', link: { href: '#0' } },
                    { name: 'Tag 3', link: { href: '#0' } },
                    { name: 'Tag 4', link: { href: '#0' } },
                    { name: 'Tag 5', link: { href: '#0' } },
                ],
                link: { href: '#0' },
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
                address: 'Stadt Überlingen, im Pfarrsaal, Münsterplatz 5',
                tags: [
                    { name: 'Tag 1', link: { href: '#0' } },
                    { name: 'Tag 2', link: { href: '#0' } },
                    { name: 'Tag 3', link: { href: '#0' } },
                    { name: 'Tag 4', link: { href: '#0' } },
                    { name: 'Tag 5', link: { href: '#0' } },
                ],
                link: { href: '#0' },
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
                address: 'Stadt Überlingen, im Pfarrsaal, Münsterplatz 5',
                tags: [
                    { name: 'Tag 1', link: { href: '#0' } },
                    { name: 'Tag 2', link: { href: '#0' } },
                    { name: 'Tag 3', link: { href: '#0' } },
                    { name: 'Tag 4', link: { href: '#0' } },
                    { name: 'Tag 5', link: { href: '#0' } },
                ],
                link: { href: '#0' },
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
                address: 'Stadt Überlingen, im Pfarrsaal, Münsterplatz 5',
                tags: [
                    { name: 'Tag 1', link: { href: '#0' } },
                    { name: 'Tag 2', link: { href: '#0' } },
                    { name: 'Tag 3', link: { href: '#0' } },
                    { name: 'Tag 4', link: { href: '#0' } },
                    { name: 'Tag 5', link: { href: '#0' } },
                ],
                link: { href: '#0' },
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
                address: 'Stadt Überlingen, im Pfarrsaal, Münsterplatz 5',
                tags: [
                    { name: 'Tag 1', link: { href: '#0' } },
                    { name: 'Tag 2', link: { href: '#0' } },
                    { name: 'Tag 3', link: { href: '#0' } },
                    { name: 'Tag 4', link: { href: '#0' } },
                    { name: 'Tag 5', link: { href: '#0' } },
                ],
                link: { href: '#0' },
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
                address: 'Stadt Überlingen, im Pfarrsaal, Münsterplatz 5',
                tags: [
                    { name: 'Tag 1', link: { href: '#0' } },
                    { name: 'Tag 2', link: { href: '#0' } },
                    { name: 'Tag 3', link: { href: '#0' } },
                    { name: 'Tag 4', link: { href: '#0' } },
                    { name: 'Tag 5', link: { href: '#0' } },
                ],
                link: { href: '#0' },
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
                address: 'Stadt Überlingen, im Pfarrsaal, Münsterplatz 5',
                tags: [
                    { name: 'Tag 1', link: { href: '#0' } },
                    { name: 'Tag 2', link: { href: '#0' } },
                    { name: 'Tag 3', link: { href: '#0' } },
                    { name: 'Tag 4', link: { href: '#0' } },
                    { name: 'Tag 5', link: { href: '#0' } },
                ],
                link: { href: '#0' },
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
                address: 'Stadt Überlingen, im Pfarrsaal, Münsterplatz 5',
                tags: [
                    { name: 'Tag 1', link: { href: '#0' } },
                    { name: 'Tag 2', link: { href: '#0' } },
                    { name: 'Tag 3', link: { href: '#0' } },
                    { name: 'Tag 4', link: { href: '#0' } },
                    { name: 'Tag 5', link: { href: '#0' } },
                ],
                link: { href: '#0' },
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
                address: 'Stadt Überlingen, im Pfarrsaal, Münsterplatz 5',
                tags: [
                    { name: 'Tag 1', link: { href: '#0' } },
                    { name: 'Tag 2', link: { href: '#0' } },
                    { name: 'Tag 3', link: { href: '#0' } },
                    { name: 'Tag 4', link: { href: '#0' } },
                    { name: 'Tag 5', link: { href: '#0' } },
                ],
                link: { href: '#0' },
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
                address: 'Stadt Überlingen, im Pfarrsaal, Münsterplatz 5',
                tags: [
                    { name: 'Tag 1', link: { href: '#0' } },
                    { name: 'Tag 2', link: { href: '#0' } },
                    { name: 'Tag 3', link: { href: '#0' } },
                    { name: 'Tag 4', link: { href: '#0' } },
                    { name: 'Tag 5', link: { href: '#0' } },
                ],
                link: { href: '#0' },
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
                address: 'Stadt Überlingen, im Pfarrsaal, Münsterplatz 5',
                tags: [
                    { name: 'Tag 1', link: { href: '#0' } },
                    { name: 'Tag 2', link: { href: '#0' } },
                    { name: 'Tag 3', link: { href: '#0' } },
                    { name: 'Tag 4', link: { href: '#0' } },
                    { name: 'Tag 5', link: { href: '#0' } },
                ],
                link: { href: '#0' },
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
                address: 'Stadt Überlingen, im Pfarrsaal, Münsterplatz 5',
                tags: [
                    { name: 'Tag 1', link: { href: '#0' } },
                    { name: 'Tag 2', link: { href: '#0' } },
                    { name: 'Tag 3', link: { href: '#0' } },
                    { name: 'Tag 4', link: { href: '#0' } },
                    { name: 'Tag 5', link: { href: '#0' } },
                ],
                link: { href: '#0' },
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
                address: 'Stadt Überlingen, im Pfarrsaal, Münsterplatz 5',
                tags: [
                    { name: 'Tag 1', link: { href: '#0' } },
                    { name: 'Tag 2', link: { href: '#0' } },
                    { name: 'Tag 3', link: { href: '#0' } },
                    { name: 'Tag 4', link: { href: '#0' } },
                    { name: 'Tag 5', link: { href: '#0' } },
                ],
                link: { href: '#0' },
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
                address: 'Stadt Überlingen, im Pfarrsaal, Münsterplatz 5',
                tags: [
                    { name: 'Tag 1', link: { href: '#0' } },
                    { name: 'Tag 2', link: { href: '#0' } },
                    { name: 'Tag 3', link: { href: '#0' } },
                    { name: 'Tag 4', link: { href: '#0' } },
                    { name: 'Tag 5', link: { href: '#0' } },
                ],
                link: { href: '#0' },
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
                address: 'Stadt Überlingen, im Pfarrsaal, Münsterplatz 5',
                tags: [
                    { name: 'Tag 1', link: { href: '#0' } },
                    { name: 'Tag 2', link: { href: '#0' } },
                    { name: 'Tag 3', link: { href: '#0' } },
                    { name: 'Tag 4', link: { href: '#0' } },
                    { name: 'Tag 5', link: { href: '#0' } },
                ],
                link: { href: '#0' },
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
                address: 'Stadt Überlingen, im Pfarrsaal, Münsterplatz 5',
                tags: [
                    { name: 'Tag 1', link: { href: '#0' } },
                    { name: 'Tag 2', link: { href: '#0' } },
                    { name: 'Tag 3', link: { href: '#0' } },
                    { name: 'Tag 4', link: { href: '#0' } },
                    { name: 'Tag 5', link: { href: '#0' } },
                ],
                link: { href: '#0' },
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
