import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import NewsFooter from '../components/sections/news/NewsFooter';

export default {
    title: 'Sections/News/NewsFooter',
    component: NewsFooter,
} as Meta;

export const Default: Story = () => (
    <NewsFooter
        news={[
            {
                tag: 'Tag Secondary',
                publishDate: new Date('July 22, 2021 03:24:00'),
                title:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy ',
                text:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
                image: {
                    small: 'https://unsplash.it/629/464?image=400',
                    medium: 'https://unsplash.it/791/594?image=400',
                    semilarge: 'https://unsplash.it/462/347?image=400',
                },
                link: { href: '#0' },
            },
            {
                tag: 'Tag Secondary',
                publishDate: new Date('July 22, 2021 03:24:00'),
                title:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy ',
                text:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
                image: {
                    small: 'https://unsplash.it/629/464?image=401',
                    medium: 'https://unsplash.it/791/594?image=401',
                    semilarge: 'https://unsplash.it/462/347?image=401',
                },
                link: { href: '#0' },
            },
        ]}
    />
);

export const WithMoreItems: Story = () => (
    <NewsFooter
        news={[
            {
                tag: 'Tag Secondary',
                publishDate: new Date('July 22, 2021 03:24:00'),
                title:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy ',
                text:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
                image: {
                    small: 'https://unsplash.it/629/464?image=400',
                    medium: 'https://unsplash.it/791/594?image=400',
                    semilarge: 'https://unsplash.it/462/347?image=400',
                },
                link: { href: '#0' },
            },
            {
                tag: 'Tag Secondary',
                publishDate: new Date('July 22, 2021 03:24:00'),
                title:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy ',
                text:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
                image: {
                    small: 'https://unsplash.it/629/464?image=401',
                    medium: 'https://unsplash.it/791/594?image=401',
                    semilarge: 'https://unsplash.it/462/347?image=401',
                },
                link: { href: '#0' },
            },
            {
                tag: 'Tag Secondary',
                publishDate: new Date('July 22, 2021 03:24:00'),
                title:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy ',
                text:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
                image: {
                    small: 'https://unsplash.it/629/464?image=402',
                    medium: 'https://unsplash.it/791/594?image=402',
                    semilarge: 'https://unsplash.it/462/347?image=402',
                },
                link: { href: '#0' },
            },
            {
                tag: 'Tag Secondary',
                publishDate: new Date('July 22, 2021 03:24:00'),
                title:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy ',
                text:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
                image: {
                    small: 'https://unsplash.it/629/464?image=403',
                    medium: 'https://unsplash.it/791/594?image=403',
                    semilarge: 'https://unsplash.it/462/347?image=403',
                },
                link: { href: '#0' },
            },
            {
                tag: 'Tag Secondary',
                publishDate: new Date('July 22, 2021 03:24:00'),
                title:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy ',
                text:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
                image: {
                    small: 'https://unsplash.it/629/464?image=404',
                    medium: 'https://unsplash.it/791/594?image=404',
                    semilarge: 'https://unsplash.it/462/347?image=404',
                },
                link: { href: '#0' },
            },
        ]}
    />
);

export const WithBackground: Story = () => (
    <NewsFooter
        bgMode="full"
        news={[
            {
                tag: 'Tag Secondary',
                publishDate: new Date('July 22, 2021 03:24:00'),
                title:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy ',
                text:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
                image: {
                    small: 'https://unsplash.it/629/464?image=400',
                    medium: 'https://unsplash.it/791/594?image=400',
                    semilarge: 'https://unsplash.it/462/347?image=400',
                },
                link: { href: '#0' },
            },
            {
                tag: 'Tag Secondary',
                publishDate: new Date('July 22, 2021 03:24:00'),
                title:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy ',
                text:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
                image: {
                    small: 'https://unsplash.it/629/464?image=401',
                    medium: 'https://unsplash.it/791/594?image=401',
                    semilarge: 'https://unsplash.it/462/347?image=401',
                },
                link: { href: '#0' },
            },
            {
                tag: 'Tag Secondary',
                publishDate: new Date('July 22, 2021 03:24:00'),
                title:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy ',
                text:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
                image: {
                    small: 'https://unsplash.it/629/464?image=402',
                    medium: 'https://unsplash.it/791/594?image=402',
                    semilarge: 'https://unsplash.it/462/347?image=402',
                },
                link: { href: '#0' },
            },
            {
                tag: 'Tag Secondary',
                publishDate: new Date('July 22, 2021 03:24:00'),
                title:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy ',
                text:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
                image: {
                    small: 'https://unsplash.it/629/464?image=403',
                    medium: 'https://unsplash.it/791/594?image=403',
                    semilarge: 'https://unsplash.it/462/347?image=403',
                },
                link: { href: '#0' },
            },
            {
                tag: 'Tag Secondary',
                publishDate: new Date('July 22, 2021 03:24:00'),
                title:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy ',
                text:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
                image: {
                    small: 'https://unsplash.it/629/464?image=404',
                    medium: 'https://unsplash.it/791/594?image=404',
                    semilarge: 'https://unsplash.it/462/347?image=404',
                },
                link: { href: '#0' },
            },
        ]}
    />
);

export const IsInverted: Story = () => (
    <NewsFooter
        news={[
            {
                tag: 'Tag Secondary',
                publishDate: new Date('July 22, 2021 03:24:00'),
                title:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy ',
                text:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
                image: {
                    small: 'https://unsplash.it/629/464?image=400',
                    medium: 'https://unsplash.it/791/594?image=400',
                    semilarge: 'https://unsplash.it/462/347?image=400',
                },
                link: { href: '#0' },
            },
            {
                tag: 'Tag Secondary',
                publishDate: new Date('July 22, 2021 03:24:00'),
                title:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy ',
                text:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
                image: {
                    small: 'https://unsplash.it/629/464?image=401',
                    medium: 'https://unsplash.it/791/594?image=401',
                    semilarge: 'https://unsplash.it/462/347?image=401',
                },
                link: { href: '#0' },
            },
            {
                tag: 'Tag Secondary',
                publishDate: new Date('July 22, 2021 03:24:00'),
                title:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy ',
                text:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
                image: {
                    small: 'https://unsplash.it/629/464?image=402',
                    medium: 'https://unsplash.it/791/594?image=402',
                    semilarge: 'https://unsplash.it/462/347?image=402',
                },
                link: { href: '#0' },
            },
            {
                tag: 'Tag Secondary',
                publishDate: new Date('July 22, 2021 03:24:00'),
                title:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy ',
                text:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
                image: {
                    small: 'https://unsplash.it/629/464?image=403',
                    medium: 'https://unsplash.it/791/594?image=403',
                    semilarge: 'https://unsplash.it/462/347?image=403',
                },
                link: { href: '#0' },
            },
            {
                tag: 'Tag Secondary',
                publishDate: new Date('July 22, 2021 03:24:00'),
                title:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy ',
                text:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
                image: {
                    small: 'https://unsplash.it/629/464?image=404',
                    medium: 'https://unsplash.it/791/594?image=404',
                    semilarge: 'https://unsplash.it/462/347?image=404',
                },
                link: { href: '#0' },
            },
        ]}
        bgMode="inverted"
    />
);

export const WithHandler: Story = () => (
    <NewsFooter
        news={[
            {
                tag: 'Tag Secondary',
                publishDate: new Date('July 22, 2021 03:24:00'),
                title:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy ',
                text:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
                image: {
                    small: 'https://unsplash.it/629/464?image=400',
                    medium: 'https://unsplash.it/791/594?image=400',
                    semilarge: 'https://unsplash.it/462/347?image=400',
                },
                link: { href: '#0' },
            },
            {
                tag: 'Tag Secondary',
                publishDate: new Date('July 22, 2021 03:24:00'),
                title:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy ',
                text:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
                image: {
                    small: 'https://unsplash.it/629/464?image=401',
                    medium: 'https://unsplash.it/791/594?image=401',
                    semilarge: 'https://unsplash.it/462/347?image=401',
                },
                link: { href: '#0' },
            },
            {
                tag: 'Tag Secondary',
                publishDate: new Date('July 22, 2021 03:24:00'),
                title:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy ',
                text:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
                image: {
                    small: 'https://unsplash.it/629/464?image=402',
                    medium: 'https://unsplash.it/791/594?image=402',
                    semilarge: 'https://unsplash.it/462/347?image=402',
                },
                link: { href: '#0' },
            },
            {
                tag: 'Tag Secondary',
                publishDate: new Date('July 22, 2021 03:24:00'),
                title:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy ',
                text:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
                image: {
                    small: 'https://unsplash.it/629/464?image=403',
                    medium: 'https://unsplash.it/791/594?image=403',
                    semilarge: 'https://unsplash.it/462/347?image=403',
                },
                link: { href: '#0' },
            },
            {
                tag: 'Tag Secondary',
                publishDate: new Date('July 22, 2021 03:24:00'),
                title:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy ',
                text:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
                image: {
                    small: 'https://unsplash.it/629/464?image=404',
                    medium: 'https://unsplash.it/791/594?image=404',
                    semilarge: 'https://unsplash.it/462/347?image=404',
                },
                link: { href: '#0' },
            },
        ]}
        onTagClick={console.log}
    />
);
