import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import NumberList, {
    NumberListComponent,
} from 'components/sections/NumberList';

export default {
    title: 'Sections/NumberList',
    component: NumberListComponent,
    parameters: {
        status: {
            type: ['preview', 'qsReady', 'releaseCandidate'],
        },
    },
} as Meta;

export const Default: Story = () => (
    <NumberList
        items={[
            {
                image: {
                    small: 'https://unsplash.it/380/209?image=700',
                    coverSpace: true,
                    ratios: {
                        small: { w: 380, h: 209 },
                    },
                },
                digit: '28000',
                label: 'Lorem Ipsum',
                text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam  Lorem ipsum dolor sit amet, consetetur  ',
            },
            {
                image: {
                    small: 'https://unsplash.it/380/209?image=700',
                    coverSpace: true,
                    ratios: {
                        small: { w: 380, h: 209 },
                    },
                },
                digit: '544',
                label: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam',
                text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam  Lorem ipsum dolor sit amet, consetetur  ',
            },
            {
                image: {
                    small: 'https://unsplash.it/380/209?image=700',
                    coverSpace: true,
                    ratios: {
                        small: { w: 380, h: 209 },
                    },
                },
                digit: '197',
                label: 'Consetetur sadipscing elitr',
                text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam  Lorem ipsum dolor sit amet, consetetur  ',
            },
            {
                image: {
                    small: 'https://unsplash.it/380/209?image=700',
                    coverSpace: true,
                    ratios: {
                        small: { w: 380, h: 209 },
                    },
                },
                digit: '544',
                label: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam',
                text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam  Lorem ipsum dolor sit amet, consetetur  ',
            },
            {
                image: {
                    small: 'https://unsplash.it/380/209?image=700',
                    coverSpace: true,
                    ratios: {
                        small: { w: 380, h: 209 },
                    },
                },
                digit: '197',
                label: 'Consetetur sadipscing elitr',
                text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam  Lorem ipsum dolor sit amet, consetetur  ',
            },
        ]}
    />
);

export const WithSVG: Story = () => (
    <NumberList
        items={[
            {
                image: {
                    small: '/images/leaf.svg',
                    coverSpace: false,
                },
                digit: '28000',
                label: 'Lorem Ipsum',
                text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam  Lorem ipsum dolor sit amet, consetetur  ',
            },
            {
                image: {
                    small: '/images/leaf.svg',
                    coverSpace: false,
                },
                digit: '544',
                label: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam',
                text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam  Lorem ipsum dolor sit amet, consetetur  ',
            },
            {
                image: {
                    small: '/images/leaf.svg',
                    coverSpace: false,
                },
                digit: '197',
                label: 'Consetetur sadipscing elitr',
                text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam  Lorem ipsum dolor sit amet, consetetur  ',
            },
            {
                image: {
                    small: '/images/leaf.svg',
                    coverSpace: false,
                },
                digit: '544',
                label: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam',
                text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam  Lorem ipsum dolor sit amet, consetetur  ',
            },
            {
                image: {
                    small: '/images/leaf.svg',
                    coverSpace: false,
                },
                digit: '197',
                label: 'Consetetur sadipscing elitr',
                text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam  Lorem ipsum dolor sit amet, consetetur  ',
            },
        ]}
    />
);

export const WithBackground: Story = () => (
    <NumberList
        bgMode="full"
        items={[
            {
                image: {
                    small: 'https://unsplash.it/380/209?image=700',
                    coverSpace: true,
                    ratios: {
                        small: { w: 380, h: 209 },
                    },
                },
                digit: '28000',
                label: 'Lorem Ipsum',
                text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam  Lorem ipsum dolor sit amet, consetetur  ',
            },
            {
                image: {
                    small: 'https://unsplash.it/380/209?image=700',
                    coverSpace: true,
                    ratios: {
                        small: { w: 380, h: 209 },
                    },
                },
                digit: '544',
                label: 'Dolor Sit Amet',
                text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam  Lorem ipsum dolor sit amet, consetetur  ',
            },
            {
                image: {
                    small: 'https://unsplash.it/380/209?image=700',
                    coverSpace: true,
                    ratios: {
                        small: { w: 380, h: 209 },
                    },
                },
                digit: '197',
                label: 'Consetetur sadipscing elitr',
                text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam  Lorem ipsum dolor sit amet, consetetur  ',
            },
            {
                image: {
                    small: 'https://unsplash.it/380/209?image=700',
                    coverSpace: true,
                    ratios: {
                        small: { w: 380, h: 209 },
                    },
                },
                digit: '544',
                label: 'Dolor Sit Amet',
                text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam  Lorem ipsum dolor sit amet, consetetur  ',
            },
            {
                image: {
                    small: 'https://unsplash.it/380/209?image=700',
                    coverSpace: true,
                    ratios: {
                        small: { w: 380, h: 209 },
                    },
                },
                digit: '197',
                label: 'Consetetur sadipscing elitr',
                text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam  Lorem ipsum dolor sit amet, consetetur  ',
            },
        ]}
    />
);

export const IsInverted: Story = () => (
    <NumberList
        items={[
            {
                image: {
                    small: 'https://unsplash.it/380/209?image=700',
                    coverSpace: true,
                    ratios: {
                        small: { w: 380, h: 209 },
                    },
                },
                digit: '28000',
                label: 'Lorem Ipsum',
                text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam  Lorem ipsum dolor sit amet, consetetur  ',
            },
            {
                image: {
                    small: 'https://unsplash.it/380/209?image=700',
                    coverSpace: true,
                    ratios: {
                        small: { w: 380, h: 209 },
                    },
                },
                digit: '544',
                label: 'Dolor Sit Amet',
                text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam  Lorem ipsum dolor sit amet, consetetur  ',
            },
            {
                image: {
                    small: 'https://unsplash.it/380/209?image=700',
                    coverSpace: true,
                    ratios: {
                        small: { w: 380, h: 209 },
                    },
                },
                digit: '197',
                label: 'Consetetur sadipscing elitr',
                text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam  Lorem ipsum dolor sit amet, consetetur  ',
            },
            {
                image: {
                    small: 'https://unsplash.it/380/209?image=700',
                    coverSpace: true,
                    ratios: {
                        small: { w: 380, h: 209 },
                    },
                },
                digit: '544',
                label: 'Dolor Sit Amet',
                text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam  Lorem ipsum dolor sit amet, consetetur  ',
            },
            {
                image: {
                    small: 'https://unsplash.it/380/209?image=700',
                    coverSpace: true,
                    ratios: {
                        small: { w: 380, h: 209 },
                    },
                },
                digit: '197',
                label: 'Consetetur sadipscing elitr',
                text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam  Lorem ipsum dolor sit amet, consetetur  ',
            },
        ]}
        bgMode="inverted"
    />
);

export const LeftAligned: Story = () => (
    <NumberList
        isCentered={false}
        items={[
            {
                image: {
                    small: 'https://unsplash.it/380/209?image=700',
                    coverSpace: true,
                    ratios: {
                        small: { w: 380, h: 209 },
                    },
                },
                digit: '28000',
                label: 'Lorem Ipsum',
                text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam  Lorem ipsum dolor sit amet, consetetur  ',
            },
            {
                image: {
                    small: 'https://unsplash.it/380/209?image=700',
                    coverSpace: true,
                    ratios: {
                        small: { w: 380, h: 209 },
                    },
                },
                digit: '544',
                label: 'Dolor Sit Amet',
                text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam  Lorem ipsum dolor sit amet, consetetur  ',
            },
            {
                image: {
                    small: 'https://unsplash.it/380/209?image=700',
                    coverSpace: true,
                    ratios: {
                        small: { w: 380, h: 209 },
                    },
                },
                digit: '197',
                label: 'Consetetur sadipscing elitr',
                text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam  Lorem ipsum dolor sit amet, consetetur  ',
            },
            {
                image: {
                    small: 'https://unsplash.it/380/209?image=700',
                    coverSpace: true,
                    ratios: {
                        small: { w: 380, h: 209 },
                    },
                },
                digit: '197',
                label: 'Consetetur sadipscing elitr',
                text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam  Lorem ipsum dolor sit amet, consetetur  ',
            },
            {
                image: {
                    small: 'https://unsplash.it/380/209?image=700',
                    coverSpace: true,
                    ratios: {
                        small: { w: 380, h: 209 },
                    },
                },
                digit: '197',
                label: 'Consetetur sadipscing elitr',
                text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam  Lorem ipsum dolor sit amet, consetetur  ',
            },
        ]}
    />
);
