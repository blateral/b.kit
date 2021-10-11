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
    <Textfield name="field_a" placeholder="Enter text.." />
);

export const WithLabel: Story = () => (
    <Textfield name="field_a" label="Label text" placeholder="Enter text.." />
);

export const WithInfoMessage: Story = () => (
    <Textfield
        name="field_a"
        label="Label text"
        placeholder="Enter text.."
        infoMessage="Das ist ein Textfeld"
    />
);

export const AsRequired: Story = () => (
    <Textfield
        name="field_a"
        label="Label text"
        placeholder="Enter text.."
        infoMessage="Das ist ein Textfeld"
        isRequired
    />
);

export const IsDisabled: Story = () => (
    <Textfield
        isDisabled
        name="field_a"
        label="Label text"
        placeholder="Enter text.."
        infoMessage="Das ist ein Textfeld"
    />
);

export const HasError: Story = () => (
    <Textfield
        name="field_a"
        label="Label text"
        placeholder="Enter text.."
        infoMessage="Das ist ein Textfeld"
        errorMessage="Bitte geben Sie einen gültigen Wert ein!"
    />
);

export const IsInverted: Story = () => (
    <Textfield
        name="field_a"
        label="Label text"
        placeholder="Enter text.."
        infoMessage="Das ist ein Textfeld"
        isInverted
    />
);
IsInverted.parameters = {
    backgrounds: {
        default: 'inverted',
        values: [{ name: 'inverted', value: 'black' }],
    },
};
