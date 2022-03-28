import React from 'react';
import { Meta, Story } from '@storybook/react';
import AlertList, { AlertListComponent } from 'components/sections/AlertList';

export default {
    title: 'Sections / AlertList',
    component: AlertListComponent,
    parameters: {
        status: {
            type: ['preview', 'qsReady'],
        },
    },
} as Meta;

export const Default: Story = () => (
    <AlertList
        items={[
            {
                title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                date: new Date(),
                description:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus suscipit voluptatem aliquid itaque eos ullam sit neque ipsam delectus molestiae.',
                link: { href: '#' },
            },
            {
                title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                date: new Date(),
                description:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
                link: { href: '#' },
            },
            {
                title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                date: new Date(),
                description:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus suscipit voluptatem aliquid itaque eos ullam sit neque ipsam delectus molestiae.',
                link: { href: '#' },
            },
            {
                title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                date: new Date(),
                description:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus suscipit voluptatem aliquid itaque eos ullam sit neque ipsam delectus molestiae.',
                link: { href: '#' },
            },
        ]}
    />
);

export const MoreItems: Story = () => (
    <AlertList
        items={[
            {
                title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                date: new Date(),
                description:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus suscipit voluptatem aliquid itaque eos ullam sit neque ipsam delectus molestiae.',
                link: { href: '#' },
            },
            {
                title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                date: new Date(),
                description:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
                link: { href: '#' },
            },
            {
                title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                date: new Date(),
                description:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus suscipit voluptatem',
                link: { href: '#' },
            },
            {
                title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                date: new Date(),
                description:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus suscipit voluptatem aliquid itaque eos ullam sit',
                link: { href: '#' },
            },
            {
                title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                date: new Date(),
                description:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus suscipit voluptatem aliquid itaque eos ullam sit neque ipsam delectus molestiae.',
                link: { href: '#' },
            },
        ]}
    />
);

export const WithBackground: Story = () => (
    <AlertList
        bgMode="full"
        items={[
            {
                title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                date: new Date(),
                description:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus suscipit voluptatem aliquid itaque eos ullam sit neque ipsam delectus molestiae.',
                link: { href: '#' },
            },
            {
                title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                date: new Date(),
                description:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
                link: { href: '#' },
            },
            {
                title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                date: new Date(),
                description:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus suscipit voluptatem',
                link: { href: '#' },
            },
            {
                title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                date: new Date(),
                description:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus suscipit voluptatem aliquid itaque eos ullam sit',
                link: { href: '#' },
            },
            {
                title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                date: new Date(),
                description:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus suscipit voluptatem aliquid itaque eos ullam sit neque ipsam delectus molestiae.',
                link: { href: '#' },
            },
        ]}
    />
);

export const Inverted: Story = () => (
    <AlertList
        bgMode="inverted"
        items={[
            {
                title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                date: new Date(),
                description:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus suscipit voluptatem aliquid itaque eos ullam sit neque ipsam delectus molestiae.',
                link: { href: '#' },
            },
            {
                title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                date: new Date(),
                description:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
                link: { href: '#' },
            },
            {
                title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                date: new Date(),
                description:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus suscipit voluptatem',
                link: { href: '#' },
            },
            {
                title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                date: new Date(),
                description:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus suscipit voluptatem aliquid itaque eos ullam sit',
                link: { href: '#' },
            },
            {
                title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                date: new Date(),
                description:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus suscipit voluptatem aliquid itaque eos ullam sit neque ipsam delectus molestiae.',
                link: { href: '#' },
            },
        ]}
    />
);
