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

export const Default: Story = () => (
    <LocationField name="field_a" onChange={console.log} />
);

export const WithLightBackground: Story = () => (
    <LocationField name="field_a" onChange={console.log} />
);
WithLightBackground.parameters = {
    backgrounds: {
        default: 'gray',
        values: [{ name: 'gray', value: '#F0F0F0' }],
    },
};

export const WithPlaceholder: Story = () => (
    <LocationField
        name="field_a"
        placeholder="Placeholder"
        onChange={console.log}
    />
);

export const WithLabel: Story = () => (
    <LocationField
        name="field_a"
        label="Label"
        placeholder="Placeholder"
        onChange={console.log}
    />
);

export const WithInfoMessage: Story = () => (
    <LocationField
        name="field_a"
        label="Label"
        placeholder="Placeholder"
        infoMessage="This is a LocationField"
        onChange={console.log}
    />
);

export const WithInitalPosition: Story = () => (
    <LocationField
        name="field_a"
        label="Label"
        placeholder="Placeholder"
        infoMessage="This is a LocationField"
        initialMapCenter={[47.768379, 9.15934]}
        zoom={15}
        onChange={console.log}
    />
);

export const WithInitalData: Story = () => (
    <LocationField
        name="field_a"
        label="Label"
        placeholder="Placeholder"
        infoMessage="This is a LocationField"
        value={{ description: 'the place to be', position: [50, 9.0] }}
        onChange={console.log}
    />
);

export const WithCustomControls: Story = () => (
    <LocationField
        name="field_a"
        label="Label"
        placeholder="Placeholder"
        infoMessage="This is a LocationField"
        onChange={console.log}
        customToggle={({ viewState, handleClick }) => (
            <button onClick={handleClick}>
                {viewState === 'map'
                    ? 'describe place'
                    : 'pick location on map'}
            </button>
        )}
        customLocationControl={({ handleClick }) => (
            <button onClick={handleClick}>My location</button>
        )}
        customResetControl={({ handleClick }) => (
            <button onClick={handleClick}>reset</button>
        )}
    />
);

export const AsRequired: Story = () => (
    <LocationField
        name="field_a"
        label="Label"
        placeholder="Placeholder"
        infoMessage="This is a LocationField"
        isRequired
        onChange={console.log}
    />
);

export const IsDisabled: Story = () => (
    <LocationField
        isDisabled
        name="field_a"
        label="Label"
        placeholder="Placeholder"
        infoMessage="Das ist ein Textfeld"
        onChange={console.log}
    />
);

export const HasError: Story = () => (
    <LocationField
        name="field_a"
        label="Label"
        placeholder="Placeholder"
        infoMessage="Das ist ein Textfeld"
        errorMessage="Bitte geben Sie einen gültigen Wert ein!"
        onChange={console.log}
    />
);

export const IsInverted: Story = () => (
    <LocationField
        name="field_a"
        label="Label"
        placeholder="Placeholder"
        infoMessage="This is a LocationField"
        isInverted
        onChange={console.log}
    />
);
IsInverted.parameters = {
    backgrounds: {
        default: 'inverted',
        values: [{ name: 'inverted', value: 'black' }],
    },
};
