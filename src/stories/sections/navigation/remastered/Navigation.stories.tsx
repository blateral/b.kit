import React from 'react';
import { Meta, Story } from '@storybook/react';
import Navigation from 'components/sections/navigation/remastered/Navigation';

export default {
    title: 'Sections/Navigation/Remastered',
    component: Navigation,
    decorators: [
        (Story) => (
            <div style={{ height: '140vh' }}>
                <Story />
            </div>
        ),
    ],
    parameters: {
        status: {
            type: 'preview',
        },
    },
} as Meta;

export const Default: Story = () => <Navigation />;
