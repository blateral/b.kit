import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import LocationField from 'components/fields/LocationField';
import styled from 'styled-components';

export default {
    title: 'Fields/LocationField',
    component: LocationField,
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

export const Default: Story = () => <LocationField name="field_a" />;

export const WithLightBackground: Story = () => (
    <LocationField name="field_a" />
);
WithLightBackground.parameters = {
    backgrounds: {
        default: 'gray',
        values: [{ name: 'gray', value: '#F0F0F0' }],
    },
};

export const WithPlaceholder: Story = () => (
    <LocationField name="field_a" placeholder="Placeholder" />
);

export const WithLabel: Story = () => (
    <LocationField name="field_a" label="Label" placeholder="Placeholder" />
);

export const WithInfoMessage: Story = () => (
    <LocationField
        name="field_a"
        label="Label"
        placeholder="Placeholder"
        infoMessage="This is a LocationField"
    />
);

export const AsRequired: Story = () => (
    <LocationField
        name="field_a"
        label="Label"
        placeholder="Placeholder"
        infoMessage="This is a LocationField"
        isRequired
    />
);

export const IsDisabled: Story = () => (
    <LocationField
        isDisabled
        name="field_a"
        label="Label"
        placeholder="Placeholder"
        infoMessage="Das ist ein Textfeld"
    />
);

export const HasError: Story = () => (
    <LocationField
        name="field_a"
        label="Label"
        placeholder="Placeholder"
        infoMessage="Das ist ein Textfeld"
        errorMessage="Bitte geben Sie einen gültigen Wert ein!"
    />
);

export const IsInverted: Story = () => (
    <LocationField
        name="field_a"
        label="Label"
        placeholder="Placeholder"
        infoMessage="This is a LocationField"
        isInverted
    />
);
IsInverted.parameters = {
    backgrounds: {
        default: 'inverted',
        values: [{ name: 'inverted', value: 'black' }],
    },
};
