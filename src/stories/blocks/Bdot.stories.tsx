import React from 'react';
import { Meta, Story } from '@storybook/react';
import Bdot from 'components/blocks/Bdot';

export default {
    title: 'Blocks/Bdot',
    component: Bdot,
    parameters: {
        status: {
            type: 'stable',
        },
    },
} as Meta;

export const Default: Story = () => <Bdot />;
