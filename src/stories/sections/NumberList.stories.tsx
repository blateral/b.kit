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
                number: '1234567',
                label: 'Lorem Ipsum',
            },
            {
                icon: { src: 'https://picsum.photos/140' },
                number: '544',
                label: 'Dolor Sit Amet',
            },
            {
                icon: { src: 'https://picsum.photos/140' },
                number: '197',
                label: 'Consetetur sadipscing elitr',
            },
            {
                icon: { src: 'https://picsum.photos/140' },
                number: '514',
                label: 'Sed diam nonumy eirmod tempor invidunt ut labore',
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
                number: '1234567',
                label: 'Lorem Ipsum',
            },
            {
                icon: { src: 'https://picsum.photos/140' },
                number: '544',
                label: 'Dolor Sit Amet',
            },
            {
                icon: { src: 'https://picsum.photos/140' },
                number: '197',
                label: 'Consetetur sadipscing elitr',
            },
            {
                icon: { src: 'https://picsum.photos/140' },
                number: '514',
                label: 'Sed diam nonumy eirmod tempor invidunt ut labore',
            },
        ]}
    />
);

export const IsInverted: Story = () => (
    <NumberList
        items={[
            {
                icon: { src: 'https://picsum.photos/140' },
                number: '1234567',
                label: 'Lorem Ipsum',
            },
            {
                icon: { src: 'https://picsum.photos/140' },
                number: '544',
                label: 'Dolor Sit Amet',
            },
            {
                icon: { src: 'https://picsum.photos/140' },
                number: '197',
                label: 'Consetetur sadipscing elitr',
            },
            {
                icon: { src: 'https://picsum.photos/140' },
                number: '514',
                label: 'Sed diam nonumy eirmod tempor invidunt ut labore',
            },
        ]}
        bgMode="inverted"
    />
);
