import React from 'react';
import { Meta, Story } from '@storybook/react';
import IntervalHookExample from 'components/examples/hooks/IntervalHookExample';

export default {
    title: 'Examples / Hooks / IntervalHookExample',
    component: IntervalHookExample,
    parameters: {
        status: {
            type: 'stable',
        },
    },
} as Meta;

export const Default: Story = () => <IntervalHookExample />;
