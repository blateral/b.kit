import React from 'react';
import { Meta, Story } from '@storybook/react';
import Index from 'components/sections/Index';

export default {
    title: 'Sections / Index',
    component: Index,
} as Meta;

export const Default: Story = () => (
    <Index
        items={[
            {
                label: 'Ansprechpartner',
                link: '#0',
            },
            {
                label: 'Wichtige Links',
                link: '#0',
            },
            {
                label: 'Downloads',
                link: '#0',
            },
        ]}
    />
);
