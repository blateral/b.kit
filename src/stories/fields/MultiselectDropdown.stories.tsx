import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import styled from 'styled-components';
import MultiselectDropdown from 'components/fields/MultiselectDropdown';
import Filter from 'components/base/icons/Filter';

export default {
    title: 'Fields / MultiselectDropdown',
    component: MultiselectDropdown,
    decorators: [
        (Story) => (
            <Helper>
                <Story />
            </Helper>
        ),
    ],
    parameters: {
        backgrounds: {
            default: 'gray',
            values: [{ name: 'gray', value: '#F0F0F0' }],
        },
        status: {
            type: 'preview',
        },
    },
} as Meta;

const Helper = styled.div`
    height: 300px;
    width: 100%;
    padding: 20px;
`;

export const Default: Story = () => (
    <MultiselectDropdown
        placeholder="Categories"
        items={[
            {
                label: 'Item 1',
                value: 'item_1',
            },
            {
                label: 'Item 2',
                value: 'item_2',
            },
            {
                label: 'Item 3',
                value: 'item_3',
            },
            {
                label: 'Item 4',
                value: 'item_4',
            },
            {
                label: 'Item 5',
                value: 'item_5',
            },
        ]}
        onChange={console.log}
    />
);

export const WithLabel: Story = () => (
    <MultiselectDropdown
        label="Label"
        placeholder="Categories"
        items={[
            {
                label: 'Item 1',
                value: 'item_1',
            },
            {
                label: 'Item 2',
                value: 'item_2',
            },
            {
                label: 'Item 3',
                value: 'item_3',
            },
            {
                label: 'Item 4',
                value: 'item_4',
            },
            {
                label: 'Item 5',
                value: 'item_5',
            },
        ]}
        onChange={console.log}
    />
);

export const WithReset: Story = () => (
    <MultiselectDropdown
        label="Label"
        placeholder="Categories"
        items={[
            {
                label: 'Item 1',
                value: 'item_1',
            },
            {
                label: 'Item 2',
                value: 'item_2',
            },
            {
                label: 'Item 3',
                value: 'item_3',
            },
            {
                label: 'Item 4',
                value: 'item_4',
            },
            {
                label: 'Item 5',
                value: 'item_5',
            },
        ]}
        onChange={console.log}
        resetLabel="Reset"
    />
);

export const Inlined: Story = () => (
    <MultiselectDropdown
        inlined
        label="Label"
        placeholder="Categories"
        items={[
            {
                label: 'Item 1',
                value: 'item_1',
            },
            {
                label: 'Item 2',
                value: 'item_2',
            },
            {
                label: 'Item 3',
                value: 'item_3',
            },
            {
                label: 'Item 4',
                value: 'item_4',
            },
            {
                label: 'Item 5',
                value: 'item_5',
            },
        ]}
        onChange={console.log}
        resetLabel="Reset"
    />
);

export const WithInitial: Story = () => (
    <MultiselectDropdown
        selectedItems={['item_2']}
        label="Label"
        placeholder="Categories"
        items={[
            {
                label: 'Item 1',
                value: 'item_1',
            },
            {
                label: 'Item 2',
                value: 'item_2',
            },
            {
                label: 'Item 3',
                value: 'item_3',
            },
            {
                label: 'Item 4',
                value: 'item_4',
            },
            {
                label: 'Item 5',
                value: 'item_5',
            },
        ]}
        onChange={console.log}
    />
);

export const AsRequired: Story = () => (
    <MultiselectDropdown
        label="Label"
        isRequired
        placeholder="Categories"
        items={[
            {
                label: 'Item 1',
                value: 'item_1',
            },
            {
                label: 'Item 2',
                value: 'item_2',
            },
            {
                label: 'Item 3',
                value: 'item_3',
            },
            {
                label: 'Item 4',
                value: 'item_4',
            },
            {
                label: 'Item 5',
                value: 'item_5',
            },
        ]}
        onChange={console.log}
    />
);

export const IsDisabled: Story = () => (
    <MultiselectDropdown
        label="Label"
        isRequired
        isDisabled
        placeholder="Categories"
        items={[
            {
                label: 'Item 1',
                value: 'item_1',
            },
            {
                label: 'Item 2',
                value: 'item_2',
            },
            {
                label: 'Item 3',
                value: 'item_3',
            },
            {
                label: 'Item 4',
                value: 'item_4',
            },
            {
                label: 'Item 5',
                value: 'item_5',
            },
        ]}
        onChange={console.log}
    />
);

export const IsInverted: Story = () => (
    <MultiselectDropdown
        label="Label"
        isInverted
        placeholder="Categories"
        items={[
            {
                label: 'Item 1',
                value: 'item_1',
            },
            {
                label: 'Item 2',
                value: 'item_2',
            },
            {
                label: 'Item 3',
                value: 'item_3',
            },
            {
                label: 'Item 4',
                value: 'item_4',
            },
            {
                label: 'Item 5',
                value: 'item_5',
            },
        ]}
        onChange={console.log}
    />
);

IsInverted.parameters = {
    backgrounds: {
        default: 'inverted',
        values: [{ name: 'inverted', value: 'black' }],
    },
};

export const WithIcons: Story = () => (
    <MultiselectDropdown
        label="Label"
        isRequired
        placeholder="Categories"
        items={[
            {
                label: 'Item 1',
                value: 'item_1',
            },
            {
                label: 'Item 2',
                value: 'item_2',
            },
            {
                label: 'Item 3',
                value: 'item_3',
            },
            {
                label: 'Item 4',
                value: 'item_4',
            },
            {
                label: 'Item 5',
                value: 'item_5',
            },
        ]}
        onChange={console.log}
        icon={() => <Filter />}
    />
);

export const HasError: Story = () => (
    <MultiselectDropdown
        label="Label"
        isRequired
        errorMessage="Bitte wählen Sie etwas aus!"
        placeholder="Categories"
        items={[
            {
                label: 'Item 1',
                value: 'item_1',
            },
            {
                label: 'Item 2',
                value: 'item_2',
            },
            {
                label: 'Item 3',
                value: 'item_3',
            },
            {
                label: 'Item 4',
                value: 'item_4',
            },
            {
                label: 'Item 5',
                value: 'item_5',
            },
        ]}
        onChange={console.log}
    />
);

export const WithCustomIndicator: Story = () => (
    <MultiselectDropdown
        label="Label"
        isRequired
        errorMessage="Bitte wählen Sie etwas aus!"
        placeholder="Categories"
        items={[
            {
                label: 'Item 1',
                value: 'item_1',
            },
            {
                label: 'Item 2',
                value: 'item_2',
            },
            {
                label: 'Item 3',
                value: 'item_3',
            },
            {
                label: 'Item 4',
                value: 'item_4',
            },
            {
                label: 'Item 5',
                value: 'item_5',
            },
        ]}
        indicator={({ isOpen }) => <div>{isOpen ? 'close' : 'open'}</div>}
        onChange={console.log}
    />
);
