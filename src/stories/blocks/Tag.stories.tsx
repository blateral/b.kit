import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import Tag from 'components/blocks/Tag';

export default {
    title: 'Blocks/Tag',
    component: Tag,
    parameters: {
        status: {
            type: ['preview'],
        },
    },
} as Meta;

export const Default: Story = () => <Tag>Tag Default</Tag>;

export const WithHandler: Story = () => (
    <Tag onClick={() => console.log('click')}>Tag Default</Tag>
);

export const Active: Story = () => (
    <Tag isActive onClick={() => console.log('click')}>
        Tag Default
    </Tag>
);

export const Inverted: Story = () => (
    <Tag isInverted onClick={() => console.log('click')}>
        Tag Default
    </Tag>
);
Inverted.parameters = {
    backgrounds: {
        default: 'inverted',
        values: [{ name: 'inverted', value: 'black' }],
    },
};

export const ActiveInverted: Story = () => (
    <Tag isInverted isActive onClick={() => console.log('click')}>
        Tag Default
    </Tag>
);
ActiveInverted.parameters = {
    backgrounds: {
        default: 'inverted',
        values: [{ name: 'inverted', value: 'black' }],
    },
};
