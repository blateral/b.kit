import React from 'react';
import { Meta, Story } from '@storybook/react';
import NewsFooter, {
    NewsFooterComponent,
} from 'components/sections/news/NewsFooter';

export default {
    title: 'Sections/News/NewsFooter',
    component: NewsFooterComponent,
    parameters: {
        status: {
            type: 'preview',
        },
    },
} as Meta;

export const Default: Story = () => (
    <NewsFooter
        news={[
            {
                tags: [
                    { name: 'Tag 1', link: { href: '#0' } },
                    { name: 'Tag 2', link: { href: '#0' } },
                ],
                publishDate: new Date('July 22, 2021 03:24:00'),
                title: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy ',
                text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
                image: {
                    small: 'https://unsplash.it/629/464?image=400',
                    medium: 'https://unsplash.it/791/594?image=400',
                    semilarge: 'https://unsplash.it/462/347?image=400',
                    ratios: {
                        small: { w: 629, h: 464 },
                        medium: { w: 791, h: 594 },
                    },
                },
                link: { href: '#0' },
            },
            {
                tags: [{ name: 'Tag 2', link: { href: '#0' } }],
                publishDate: new Date('July 22, 2021 03:24:00'),
                title: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy ',
                text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
                image: {
                    small: 'https://unsplash.it/629/464?image=401',
                    medium: 'https://unsplash.it/791/594?image=401',
                    semilarge: 'https://unsplash.it/462/347?image=401',
                    ratios: {
                        small: { w: 629, h: 464 },
                        medium: { w: 791, h: 594 },
                    },
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
                tags: [
                    { name: 'Tag 1', link: { href: '#0' } },
                    { name: 'Tag 2', link: { href: '#0' } },
                ],
                publishDate: new Date('July 22, 2021 03:24:00'),
                title: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy ',
                text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
                image: {
                    small: 'https://unsplash.it/629/464?image=400',
                    medium: 'https://unsplash.it/791/594?image=400',
                    semilarge: 'https://unsplash.it/462/347?image=400',
                    ratios: {
                        small: { w: 629, h: 464 },
                        medium: { w: 791, h: 594 },
                    },
                },
                link: { href: '#0' },
            },
            {
                tags: [{ name: 'Tag 2', link: { href: '#0' } }],
                publishDate: new Date('July 22, 2021 03:24:00'),
                title: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy ',
                text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
                image: {
                    small: 'https://unsplash.it/629/464?image=401',
                    medium: 'https://unsplash.it/791/594?image=401',
                    semilarge: 'https://unsplash.it/462/347?image=401',
                    ratios: {
                        small: { w: 629, h: 464 },
                        medium: { w: 791, h: 594 },
                    },
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
                tags: [
                    { name: 'Tag 1', link: { href: '#0' } },
                    { name: 'Tag 2', link: { href: '#0' } },
                ],
                publishDate: new Date('July 22, 2021 03:24:00'),
                title: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy ',
                text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
                image: {
                    small: 'https://unsplash.it/629/464?image=400',
                    medium: 'https://unsplash.it/791/594?image=400',
                    semilarge: 'https://unsplash.it/462/347?image=400',
                    ratios: {
                        small: { w: 629, h: 464 },
                        medium: { w: 791, h: 594 },
                    },
                },
                link: { href: '#0' },
            },
            {
                tags: [{ name: 'Tag 2', link: { href: '#0' } }],
                publishDate: new Date('July 22, 2021 03:24:00'),
                title: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy ',
                text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
                image: {
                    small: 'https://unsplash.it/629/464?image=401',
                    medium: 'https://unsplash.it/791/594?image=401',
                    semilarge: 'https://unsplash.it/462/347?image=401',
                    ratios: {
                        small: { w: 629, h: 464 },
                        medium: { w: 791, h: 594 },
                    },
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
                tags: [
                    { name: 'Tag 1', link: { href: '#0' } },
                    { name: 'Tag 2', link: { href: '#0' } },
                ],
                publishDate: new Date('July 22, 2021 03:24:00'),
                title: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy ',
                text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
                image: {
                    small: 'https://unsplash.it/629/464?image=400',
                    medium: 'https://unsplash.it/791/594?image=400',
                    semilarge: 'https://unsplash.it/462/347?image=400',
                    ratios: {
                        small: { w: 629, h: 464 },
                        medium: { w: 791, h: 594 },
                    },
                },
                link: { href: '#0' },
            },
            {
                tags: [{ name: 'Tag 2', link: { href: '#0' } }],
                publishDate: new Date('July 22, 2021 03:24:00'),
                title: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy ',
                text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
                image: {
                    small: 'https://unsplash.it/629/464?image=401',
                    medium: 'https://unsplash.it/791/594?image=401',
                    semilarge: 'https://unsplash.it/462/347?image=401',
                    ratios: {
                        small: { w: 629, h: 464 },
                        medium: { w: 791, h: 594 },
                    },
                },
                link: { href: '#0' },
            },
        ]}
    />
);
