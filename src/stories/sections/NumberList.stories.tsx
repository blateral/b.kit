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
                icon: { src: 'https://picsum.photos/140' },
                digit: '28000',
                label: 'Lorem Ipsum',
                text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam  Lorem ipsum dolor sit amet, consetetur  ',
            },
            {
                icon: { src: 'https://picsum.photos/140' },
                digit: '544',
                label: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam',
                text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam  Lorem ipsum dolor sit amet, consetetur  ',
            },
            {
                icon: { src: 'https://picsum.photos/140' },
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
                icon: { src: 'https://picsum.photos/140' },
                digit: '28000',
                label: 'Lorem Ipsum',
                text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam  Lorem ipsum dolor sit amet, consetetur  ',
            },
            {
                icon: { src: 'https://picsum.photos/140' },
                digit: '544',
                label: 'Dolor Sit Amet',
                text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam  Lorem ipsum dolor sit amet, consetetur  ',
            },
            {
                icon: { src: 'https://picsum.photos/140' },
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
                icon: { src: 'https://picsum.photos/140' },
                digit: '28000',
                label: 'Lorem Ipsum',
                text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam  Lorem ipsum dolor sit amet, consetetur  ',
            },
            {
                icon: { src: 'https://picsum.photos/140' },
                digit: '544',
                label: 'Dolor Sit Amet',
                text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam  Lorem ipsum dolor sit amet, consetetur  ',
            },
            {
                icon: { src: 'https://picsum.photos/140' },
                digit: '197',
                label: 'Consetetur sadipscing elitr',
                text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam  Lorem ipsum dolor sit amet, consetetur  ',
            },
        ]}
        bgMode="inverted"
    />
);

export const With4Items: Story = () => (
    <NumberList
        columns={4}
        items={[
            {
                icon: { src: 'https://picsum.photos/140' },
                digit: '28000',
                label: 'Lorem Ipsum',
                text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam  Lorem ipsum dolor sit amet, consetetur  ',
            },
            {
                icon: { src: 'https://picsum.photos/140' },
                digit: '544',
                label: 'Dolor Sit Amet',
                text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam  Lorem ipsum dolor sit amet, consetetur  ',
            },
            {
                icon: { src: 'https://picsum.photos/140' },
                digit: '197',
                label: 'Consetetur sadipscing elitr',
                text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam  Lorem ipsum dolor sit amet, consetetur  ',
            },
            {
                icon: { src: 'https://picsum.photos/140' },
                digit: '514',
                label: 'Sed diam nonumy eirmod tempor invidunt ut labore',
                text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam  Lorem ipsum dolor sit amet, consetetur  ',
            },
        ]}
    />
);

export const LeftAligned: Story = () => (
    <NumberList
        isCentered={false}
        items={[
            {
                icon: { src: 'https://picsum.photos/140' },
                digit: '28000',
                label: 'Lorem Ipsum',
                text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam  Lorem ipsum dolor sit amet, consetetur  ',
            },
            {
                icon: { src: 'https://picsum.photos/140' },
                digit: '544',
                label: 'Dolor Sit Amet',
                text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam  Lorem ipsum dolor sit amet, consetetur  ',
            },
            {
                icon: { src: 'https://picsum.photos/140' },
                digit: '197',
                label: 'Consetetur sadipscing elitr',
                text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam  Lorem ipsum dolor sit amet, consetetur  ',
            },
            {
                icon: { src: 'https://picsum.photos/140' },
                digit: '197',
                label: 'Consetetur sadipscing elitr',
                text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam  Lorem ipsum dolor sit amet, consetetur  ',
            },
            {
                icon: { src: 'https://picsum.photos/140' },
                digit: '197',
                label: 'Consetetur sadipscing elitr',
                text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam  Lorem ipsum dolor sit amet, consetetur  ',
            },
        ]}
    />
);
