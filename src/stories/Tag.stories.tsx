import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import Tag from 'components/blocks/Tag';

export default {
    title: 'Blocks/Tag',
    component: Tag,
} as Meta;

export const Default: Story = () => <Tag>Tag Default</Tag>;

export const Inverted: Story = () => <Tag isInverted>Tag Default</Tag>;
Inverted.parameters = {
    backgrounds: {
        default: 'inverted',
        values: [{ name: 'inverted', value: 'black' }],
    },
};
