/* eslint-disable react/display-name */
import React from 'react';
import { Meta, Story } from '@storybook/react';
import CardList, { CardListComponent } from 'components/sections/CardList';
import AngleRight from 'components/base/icons/AngleRight';
import Magnifier from 'components/base/icons/Magnifier';

export default {
    title: 'Sections / CardList',
    component: CardListComponent,
    parameters: {
        status: {
            type: ['preview', 'qsReady'],
        },
    },
} as Meta;

export const Default: Story = () => (
    <CardList
        items={[
            {
                title: 'Musikschule',
                subLabel: 'überlingen',
                link: { href: '#0' },
            },
            {
                title: 'Stadtbücherei',
                subLabel: 'überlingen',
                image: {
                    small: 'https://unsplash.it/619/619',
                    medium: 'https://unsplash.it/791/791',
                    semilarge: 'https://unsplash.it/883/883',
                    large: 'https://unsplash.it/766/766',
                    xlarge: 'https://unsplash.it/824/824',
                },
                link: { href: '#0' },
            },
            {
                title: 'Museum',
                subLabel: 'überlingen',
                link: { href: '#0' },
            },
            {
                title: 'Feuerwehr',
                subLabel: 'überlingen',
                link: { href: '#0' },
            },
            {
                title: 'Soziale Einrichtungen Soziale Einrichtungen Soziale Einrichtungen',
                subLabel: 'überlingen',
                image: {
                    small: 'https://unsplash.it/619/619',
                    medium: 'https://unsplash.it/791/791',
                    semilarge: 'https://unsplash.it/883/883',
                    large: 'https://unsplash.it/766/766',
                    xlarge: 'https://unsplash.it/824/824',
                },
                link: { href: '#0' },
            },
        ]}
    />
);

export const WithCustomCardColor: Story = () => (
    <CardList
        items={[
            {
                title: 'Musikschule',
                subLabel: 'überlingen',
                link: { href: '#0' },
                cardColor: 'red',
            },
            {
                title: 'Stadtbücherei',
                subLabel: 'überlingen',
                image: {
                    small: 'https://unsplash.it/619/619',
                    medium: 'https://unsplash.it/791/791',
                    semilarge: 'https://unsplash.it/883/883',
                    large: 'https://unsplash.it/766/766',
                    xlarge: 'https://unsplash.it/824/824',
                },
                link: { href: '#0' },
                cardColor: 'darkgreen',
            },
            {
                title: 'Museum',
                subLabel: 'überlingen',
                link: { href: '#0' },
                cardColor: 'blue',
            },
            {
                title: 'Feuerwehr',
                subLabel: 'überlingen',
                link: { href: '#0' },
            },
            {
                title: 'Soziale Einrichtungen Soziale Einrichtungen Soziale Einrichtungen',
                subLabel: 'überlingen',
                image: {
                    small: 'https://unsplash.it/619/619',
                    medium: 'https://unsplash.it/791/791',
                    semilarge: 'https://unsplash.it/883/883',
                    large: 'https://unsplash.it/766/766',
                    xlarge: 'https://unsplash.it/824/824',
                },
                link: { href: '#0' },
            },
        ]}
    />
);

export const WithIcon: Story = () => (
    <CardList
        items={[
            {
                title: 'Musikschule',
                subLabel: 'überlingen',
                customIcon: () => <Magnifier />,
                link: { href: '#0' },
            },
            {
                title: 'Stadtbücherei',
                subLabel: 'überlingen',
                customIcon: () => <Magnifier />,
                image: {
                    small: 'https://unsplash.it/619/619',
                    medium: 'https://unsplash.it/791/791',
                    semilarge: 'https://unsplash.it/883/883',
                    large: 'https://unsplash.it/766/766',
                    xlarge: 'https://unsplash.it/824/824',
                },
                link: { href: '#0' },
            },
            {
                title: 'Museum',
                subLabel: 'überlingen',
                customIcon: () => <Magnifier />,
                link: { href: '#0' },
            },
            {
                title: 'Feuerwehr',
                subLabel: 'überlingen',
                customIcon: () => <Magnifier />,
                link: { href: '#0' },
            },
            {
                title: 'Soziale Einrichtungen',
                subLabel: 'überlingen',
                customIcon: () => <Magnifier />,
                image: {
                    small: 'https://unsplash.it/619/619',
                    medium: 'https://unsplash.it/791/791',
                    semilarge: 'https://unsplash.it/883/883',
                    large: 'https://unsplash.it/766/766',
                    xlarge: 'https://unsplash.it/824/824',
                },
                link: { href: '#0' },
            },
        ]}
    />
);

export const EqualItemAmount: Story = () => (
    <CardList
        items={[
            {
                title: 'Musikschule',
                subLabel: 'überlingen',
                customIcon: () => <Magnifier />,
                link: { href: '#0' },
            },
            {
                title: 'Stadtbücherei',
                subLabel: 'überlingen',
                customIcon: () => <Magnifier />,
                image: {
                    small: 'https://unsplash.it/619/619',
                    medium: 'https://unsplash.it/791/791',
                    semilarge: 'https://unsplash.it/883/883',
                    large: 'https://unsplash.it/766/766',
                    xlarge: 'https://unsplash.it/824/824',
                },
                link: { href: '#0' },
            },
            {
                title: 'Museum',
                customIcon: () => <Magnifier />,
                subLabel: 'überlingen',
                link: { href: '#0' },
            },
            {
                title: 'Feuerwehr',
                customIcon: () => <Magnifier />,
                subLabel: 'überlingen',
                link: { href: '#0' },
            },
            {
                title: 'Soziale Einrichtungen',
                customIcon: () => <Magnifier />,
                subLabel: 'überlingen',
                image: {
                    small: 'https://unsplash.it/619/619',
                    medium: 'https://unsplash.it/791/791',
                    semilarge: 'https://unsplash.it/883/883',
                    large: 'https://unsplash.it/766/766',
                    xlarge: 'https://unsplash.it/824/824',
                },
                link: { href: '#0' },
            },
            {
                title: 'Krankenhaus',
                customIcon: () => <Magnifier />,
                subLabel: 'überlingen',
                link: { href: '#0' },
            },
        ]}
    />
);

export const WithBackground: Story = () => (
    <CardList
        bgMode="full"
        items={[
            {
                title: 'Musikschule',
                subLabel: 'überlingen',
                customIcon: () => <Magnifier />,
                link: { href: '#0' },
            },
            {
                title: 'Stadtbücherei',
                subLabel: 'überlingen',
                customIcon: () => <Magnifier />,
                image: {
                    small: 'https://unsplash.it/619/619',
                    medium: 'https://unsplash.it/791/791',
                    semilarge: 'https://unsplash.it/883/883',
                    large: 'https://unsplash.it/766/766',
                    xlarge: 'https://unsplash.it/824/824',
                },
                link: { href: '#0' },
            },
            {
                title: 'Museum',
                customIcon: () => <Magnifier />,
                subLabel: 'überlingen',
                link: { href: '#0' },
            },
            {
                title: 'Feuerwehr',
                customIcon: () => <Magnifier />,
                subLabel: 'überlingen',
                link: { href: '#0' },
            },
            {
                title: 'Soziale Einrichtungen',
                customIcon: () => <Magnifier />,
                subLabel: 'überlingen',
                image: {
                    small: 'https://unsplash.it/619/619',
                    medium: 'https://unsplash.it/791/791',
                    semilarge: 'https://unsplash.it/883/883',
                    large: 'https://unsplash.it/766/766',
                    xlarge: 'https://unsplash.it/824/824',
                },
                link: { href: '#0' },
            },
            {
                title: 'Krankenhaus',
                customIcon: () => <Magnifier />,
                subLabel: 'überlingen',
                link: { href: '#0' },
            },
        ]}
    />
);

export const IsInverted: Story = () => (
    <CardList
        bgMode="inverted"
        items={[
            {
                title: 'Musikschule',
                subLabel: 'überlingen',
                customIcon: () => <Magnifier />,
                link: { href: '#0' },
            },
            {
                title: 'Stadtbücherei',
                subLabel: 'überlingen',
                customIcon: () => <Magnifier />,
                image: {
                    small: 'https://unsplash.it/619/619',
                    medium: 'https://unsplash.it/791/791',
                    semilarge: 'https://unsplash.it/883/883',
                    large: 'https://unsplash.it/766/766',
                    xlarge: 'https://unsplash.it/824/824',
                },
                link: { href: '#0' },
            },
            {
                title: 'Museum',
                customIcon: () => <Magnifier />,
                subLabel: 'überlingen',
                link: { href: '#0' },
            },
            {
                title: 'Feuerwehr',
                customIcon: () => <Magnifier />,
                subLabel: 'überlingen',
                link: { href: '#0' },
            },
            {
                title: 'Soziale Einrichtungen',
                customIcon: () => <Magnifier />,
                subLabel: 'überlingen',
                image: {
                    small: 'https://unsplash.it/619/619',
                    medium: 'https://unsplash.it/791/791',
                    semilarge: 'https://unsplash.it/883/883',
                    large: 'https://unsplash.it/766/766',
                    xlarge: 'https://unsplash.it/824/824',
                },
                link: { href: '#0' },
            },
            {
                title: 'Krankenhaus',
                customIcon: () => <Magnifier />,
                subLabel: 'überlingen',
                link: { href: '#0' },
            },
        ]}
    />
);

export const WithDecorator: Story = () => (
    <CardList
        decorator={() => <AngleRight />}
        items={[
            {
                title: 'Musikschule',
                subLabel: 'überlingen',
                customIcon: () => <Magnifier />,
                link: { href: '#0' },
            },
            {
                title: 'Stadtbücherei',
                subLabel: 'überlingen',
                customIcon: () => <Magnifier />,
                image: {
                    small: 'https://unsplash.it/619/619',
                    medium: 'https://unsplash.it/791/791',
                    semilarge: 'https://unsplash.it/883/883',
                    large: 'https://unsplash.it/766/766',
                    xlarge: 'https://unsplash.it/824/824',
                },
                link: { href: '#0' },
            },
            {
                title: 'Museum',
                customIcon: () => <Magnifier />,
                subLabel: 'überlingen',
                link: { href: '#0' },
            },
            {
                title: 'Feuerwehr',
                customIcon: () => <Magnifier />,
                subLabel: 'überlingen',
                link: { href: '#0' },
            },
            {
                title: 'Soziale Einrichtungen',
                customIcon: () => <Magnifier />,
                subLabel: 'überlingen',
                image: {
                    small: 'https://unsplash.it/619/619',
                    medium: 'https://unsplash.it/791/791',
                    semilarge: 'https://unsplash.it/883/883',
                    large: 'https://unsplash.it/766/766',
                    xlarge: 'https://unsplash.it/824/824',
                },
                link: { href: '#0' },
            },
            {
                title: 'Krankenhaus',
                customIcon: () => <Magnifier />,
                subLabel: 'überlingen',
                link: { href: '#0' },
            },
        ]}
    />
);
