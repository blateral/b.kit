import React from 'react';
import { Meta, Story } from '@storybook/react';
import ArrayHookExample from 'components/examples/hooks/ArrayHookExample';

export default {
    title: 'Examples / Hooks / ArrayHookExample',
    component: ArrayHookExample,
    parameters: {
        status: {
            type: 'stable',
        },
    },
} as Meta;

export const Default: Story = () => <ArrayHookExample />;
