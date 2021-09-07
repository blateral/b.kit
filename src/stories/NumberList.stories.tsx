import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import NumberList from 'components/sections/NumberList';

export default {
    title: 'Sections/NumberList',
    component: NumberList,
} as Meta;

export const Default: Story = () => (
    <NumberList
        items={[
            {
                icon: { src: 'https://picsum.photos/140' },
                number: '1234567',
                label: 'Tonnen CO2 Reduktion',
            },
            {
                icon: { src: 'https://picsum.photos/140' },
                number: '544',
                label: 'Mio. KM Elektrische Range verkauft ',
            },
            {
                icon: { src: 'https://picsum.photos/140' },
                number: '197',
                label: 'R&D projects totaling 7 % of revenue',
            },
            {
                icon: { src: 'https://picsum.photos/140' },
                number: '514',
                label: 'Lorem Ipsum Dolor',
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
                label: 'Tonnen CO2 Reduktion',
            },
            {
                icon: { src: 'https://picsum.photos/140' },
                number: '544',
                label: 'Mio. KM Elektrische Range verkauft ',
            },
            {
                icon: { src: 'https://picsum.photos/140' },
                number: '197',
                label: 'R&D projects totaling 7 % of revenue',
            },
            {
                icon: { src: 'https://picsum.photos/140' },
                number: '514',
                label: 'Lorem Ipsum Dolor',
            },
        ]}
    />
);

export const IsInverted: Story = () => (
    <NumberList
        items={[
            {
                icon: { src: 'https://picsum.photos/140' },
                number: '123897392749',
                label: 'Tonnen CO2 Reduktion',
            },
            {
                icon: { src: 'https://picsum.photos/140' },
                number: '544',
                label: 'Mio. KM Elektrische Range verkauft ',
            },
            {
                icon: { src: 'https://picsum.photos/140' },
                number: '197',
                label: 'R&D projects totaling 7 % of revenue',
            },
            {
                icon: { src: 'https://picsum.photos/140' },
                number: '514',
                label: 'Lorem Ipsum Dolor',
            },
        ]}
        bgMode="inverted"
    />
);
