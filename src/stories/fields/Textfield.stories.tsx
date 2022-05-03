import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import Textfield from 'components/fields/Textfield';
import styled from 'styled-components';

export default {
    title: 'Fields/Textfield',
    component: Textfield,
    decorators: [
        (Story) => (
            <Helper>
                <Story />
            </Helper>
        ),
    ],
    parameters: {
        status: {
            type: 'preview',
        },
    },
} as Meta;

// Story Helper
const Helper = styled.div`
    height: 300px;
    width: 100%;
    padding: 20px;
`;

export const Default: Story = () => <Textfield name="field_a" />;

export const WithLightBackground: Story = () => (
    <Textfield name="field_a" lightBg />
);
WithLightBackground.parameters = {
    backgrounds: {
        default: 'gray',
        values: [{ name: 'gray', value: '#F0F0F0' }],
    },
};

export const WithPlaceholder: Story = () => (
    <Textfield name="field_a" placeholder="Placeholder" />
);

export const WithLabel: Story = () => (
    <Textfield name="field_a" label="Label" placeholder="Placeholder" />
);

export const WithInfoMessage: Story = () => (
    <Textfield
        name="field_a"
        label="Label"
        placeholder="Placeholder"
        infoMessage="This is a Textfield"
    />
);

export const AsRequired: Story = () => (
    <Textfield
        name="field_a"
        label="Label"
        placeholder="Placeholder"
        infoMessage="This is a Textfield"
        isRequired
    />
);

export const IsDisabled: Story = () => (
    <Textfield
        isDisabled
        name="field_a"
        label="Label"
        placeholder="Placeholder"
        infoMessage="Das ist ein Textfeld"
    />
);

export const HasError: Story = () => (
    <Textfield
        name="field_a"
        label="Label"
        placeholder="Placeholder"
        infoMessage="Das ist ein Textfeld"
        errorMessage="Bitte geben Sie einen gültigen Wert ein!"
    />
);

export const IsInverted: Story = () => (
    <Textfield
        name="field_a"
        label="Label"
        placeholder="Placeholder"
        infoMessage="This is a Textfield"
        isInverted
    />
);
IsInverted.parameters = {
    backgrounds: {
        default: 'inverted',
        values: [{ name: 'inverted', value: 'black' }],
    },
};
