import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import styled from 'styled-components';
import SelectDropdown from 'components/fields/SelectDropdown';

export default {
    title: 'Fields / SelectDropdown',
    component: SelectDropdown,
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
    <SelectDropdown
        placeholder="Prompt Text"
        items={[
            {
                label: 'Item 1',
                value: '1',
            },
            {
                label: 'Item 2',
                value: '2',
            },
            {
                label: 'Item 3',
                value: '3',
            },
            {
                label: 'Item 4',
                value: '4',
            },
            {
                label: 'Item 5',
                value: '5',
            },
        ]}
        onChange={console.log}
    />
);

export const WithLabel: Story = () => (
    <SelectDropdown
        label="Label"
        placeholder="Prompt Text"
        items={[
            {
                label: 'Item 1',
                value: '1',
            },
            {
                label: 'Item 2',
                value: '2',
            },
            {
                label: 'Item 3',
                value: '3',
            },
            {
                label: 'Item 4',
                value: '4',
            },
            {
                label: 'Item 5',
                value: '5',
            },
        ]}
        onChange={console.log}
    />
);

export const WithInitial: Story = () => (
    <SelectDropdown
        value="2"
        label="Label"
        placeholder="Prompt Text"
        items={[
            {
                label: 'Item 1',
                value: '1',
            },
            {
                label: 'Item 2',
                value: '2',
            },
            {
                label: 'Item 3',
                value: '3',
            },
            {
                label: 'Item 4',
                value: '4',
            },
            {
                label: 'Item 5',
                value: '5',
            },
        ]}
        onChange={console.log}
    />
);

export const AsRequired: Story = () => (
    <SelectDropdown
        label="Label"
        isRequired
        placeholder="Prompt Text"
        items={[
            {
                label: 'Item 1',
                value: '1',
            },
            {
                label: 'Item 2',
                value: '2',
            },
            {
                label: 'Item 3',
                value: '3',
            },
            {
                label: 'Item 4',
                value: '4',
            },
            {
                label: 'Item 5',
                value: '5',
            },
        ]}
        onChange={console.log}
    />
);

export const IsDisabled: Story = () => (
    <SelectDropdown
        label="Label"
        isRequired
        isDisabled
        placeholder="Prompt Text"
        items={[
            {
                label: 'Item 1',
                value: '1',
            },
            {
                label: 'Item 2',
                value: '2',
            },
            {
                label: 'Item 3',
                value: '3',
            },
            {
                label: 'Item 4',
                value: '4',
            },
            {
                label: 'Item 5',
                value: '5',
            },
        ]}
        onChange={console.log}
    />
);

export const IsInverted: Story = () => (
    <SelectDropdown
        label="Label"
        isInverted
        placeholder="Prompt Text"
        items={[
            {
                label: 'Item 1',
                value: '1',
            },
            {
                label: 'Item 2',
                value: '2',
            },
            {
                label: 'Item 3',
                value: '3',
            },
            {
                label: 'Item 4',
                value: '4',
            },
            {
                label: 'Item 5',
                value: '5',
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

export const WithIcon: Story = () => (
    <SelectDropdown
        label="Label"
        isRequired
        placeholder="Prompt Text"
        items={[
            {
                label: 'Item 1',
                value: '1',
            },
            {
                label: 'Item 2',
                value: '2',
            },
            {
                label: 'Item 3',
                value: '3',
            },
            {
                label: 'Item 4',
                value: '4',
            },
            {
                label: 'Item 5',
                value: '5',
            },
            {
                label: 'Item 6',
                value: '6',
            },
            {
                label: 'Item 7',
                value: '7',
            },
        ]}
        onChange={console.log}
    />
);

export const HasError: Story = () => (
    <SelectDropdown
        label="Label"
        isRequired
        errorMessage="Bitte wählen Sie etwas aus!"
        placeholder="Prompt Text"
        items={[
            {
                label: 'Item 1',
                value: '1',
            },
            {
                label: 'Item 2',
                value: '2',
            },
            {
                label: 'Item 3',
                value: '3',
            },
            {
                label: 'Item 4',
                value: '4',
            },
            {
                label: 'Item 5',
                value: '5',
            },
        ]}
        onChange={console.log}
    />
);

export const WithCustomIndicator: Story = () => (
    <SelectDropdown
        label="Label"
        isRequired
        errorMessage="Bitte wählen Sie etwas aus!"
        placeholder="Prompt Text"
        items={[
            {
                label: 'Item 1',
                value: '1',
            },
            {
                label: 'Item 2',
                value: '2',
            },
            {
                label: 'Item 3',
                value: '3',
            },
            {
                label: 'Item 4',
                value: '4',
            },
            {
                label: 'Item 5',
                value: '5',
            },
            {
                label: 'Item 6',
                value: '6',
            },
            {
                label: 'Item 7',
                value: '7',
            },
        ]}
        indicator={({ isOpen }) => <div>{isOpen ? 'close' : 'open'}</div>}
        onChange={console.log}
    />
);
