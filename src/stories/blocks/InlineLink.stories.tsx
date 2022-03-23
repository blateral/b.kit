import React from 'react';
import { Meta, Story } from '@storybook/react';
import InlineLink from 'components/blocks/InlineLink';

export default {
    title: 'Blocks / InlineLink',
    component: InlineLink,
} as Meta;

export const Default: Story = () => (
    <InlineLink title="Lorem Ipsum Dolor" link={{ href: '#0' }} />
);
