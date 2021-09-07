import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import styled from 'styled-components';
import NumberList from 'components/sections/NumberList';

const Helper = styled.div`
    height: 150px;
    width: 100%;
    padding: 20px;
`;

export default {
    title: 'Sections/NumberList',
    component: NumberList,
    decorators: [
        (Story) => (
            <Helper>
                <Story />
            </Helper>
        ),
    ],
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
