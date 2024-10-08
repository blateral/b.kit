import React from 'react';
import { Meta, Story } from '@storybook/react';
import FilterBar from 'components/blocks/FilterBar';
import Filter from 'components/base/icons/Filter';
import { CrossBubble, Magnifier } from 'components/base/icons/Icons';

export default {
    title: 'Blocks/FilterBar',
    component: FilterBar,
    parameters: {
        status: {
            type: 'preview',
        },
    },
    decorators: [
        (Story) => (
            <div
                style={{ padding: '40px', background: 'gray', height: '100vh' }}
            >
                <Story />
            </div>
        ),
    ],
} as Meta;

export const Default: Story = () => (
    <FilterBar
        value={{ textFilter: '', categoryFilter: [] }}
        onChange={console.log}
        toggleLabel="Search & Filter"
        textFilter={{
            placeholder: 'Search...',
            icon: () => <Magnifier width={18} height={18} />,
            submitIcon: () => null,
            clearIcon: () => <CrossBubble />,
        }}
        categoryFilter={{
            label: 'Kategories',
            items: [
                { label: 'Restaurant', value: 'restaurant' },
                { label: 'Hotel', value: 'hotel' },
                { label: 'Handel', value: 'handel' },
                { label: 'Kantine', value: 'kantine' },
            ],
            icon: () => <Filter />,
            resetLabel: 'reset selection',
        }}
    />
);
