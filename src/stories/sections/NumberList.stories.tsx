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
            type: 'stable',
        },
    },
} as Meta;

export const Default: Story = () => (
    <NumberList
        items={[
            {
                icon: { src: 'https://picsum.photos/140' },
                number: '28000',
                label: 'Lorem Ipsum',
                text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam  Lorem ipsum dolor sit amet, consetetur  ',
            },
            {
                icon: { src: 'https://picsum.photos/140' },
                number: '544',
                label: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam',
                text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam  Lorem ipsum dolor sit amet, consetetur  ',
            },
            {
                icon: { src: 'https://picsum.photos/140' },
                number: '197',
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
                icon: { src: 'https://picsum.photos/140' },
                number: '28000',
                label: 'Lorem Ipsum',
                text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam  Lorem ipsum dolor sit amet, consetetur  ',
            },
            {
                icon: { src: 'https://picsum.photos/140' },
                number: '544',
                label: 'Dolor Sit Amet',
                text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam  Lorem ipsum dolor sit amet, consetetur  ',
            },
            {
                icon: { src: 'https://picsum.photos/140' },
                number: '197',
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
                icon: { src: 'https://picsum.photos/140' },
                number: '28000',
                label: 'Lorem Ipsum',
                text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam  Lorem ipsum dolor sit amet, consetetur  ',
            },
            {
                icon: { src: 'https://picsum.photos/140' },
                number: '544',
                label: 'Dolor Sit Amet',
                text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam  Lorem ipsum dolor sit amet, consetetur  ',
            },
            {
                icon: { src: 'https://picsum.photos/140' },
                number: '197',
                label: 'Consetetur sadipscing elitr',
                text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam  Lorem ipsum dolor sit amet, consetetur  ',
            },
        ]}
        bgMode="inverted"
    />
);

export const With4Items: Story = () => (
    <NumberList
        cols={4}
        items={[
            {
                icon: { src: 'https://picsum.photos/140' },
                number: '28000',
                label: 'Lorem Ipsum',
                text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam  Lorem ipsum dolor sit amet, consetetur  ',
            },
            {
                icon: { src: 'https://picsum.photos/140' },
                number: '544',
                label: 'Dolor Sit Amet',
                text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam  Lorem ipsum dolor sit amet, consetetur  ',
            },
            {
                icon: { src: 'https://picsum.photos/140' },
                number: '197',
                label: 'Consetetur sadipscing elitr',
                text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam  Lorem ipsum dolor sit amet, consetetur  ',
            },
            {
                icon: { src: 'https://picsum.photos/140' },
                number: '514',
                label: 'Sed diam nonumy eirmod tempor invidunt ut labore',
                text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam  Lorem ipsum dolor sit amet, consetetur  ',
            },
        ]}
        bgMode="inverted"
    />
);
