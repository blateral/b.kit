import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import Textarea from 'components/fields/Textarea';
import styled from 'styled-components';

export default {
    title: 'Fields/Textarea',
    component: Textarea,
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

export const Default: Story = () => <Textarea name="field_a" />;

export const WithLightBackground: Story = () => <Textarea name="field_a" />;
WithLightBackground.parameters = {
    backgrounds: {
        default: 'gray',
        values: [{ name: 'gray', value: '#F0F0F0' }],
    },
};

export const WithPlaceholder: Story = () => (
    <Textarea name="field_a" placeholder="Placeholder" />
);

export const WithLabel: Story = () => (
    <Textarea name="field_a" label="Label" placeholder="Placeholder" />
);

export const WithInfoMessage: Story = () => (
    <Textarea
        label="Label"
        placeholder="Placeholder"
        infoMessage="This is a Textarea"
    />
);

export const AsRequired: Story = () => (
    <Textarea
        label="Label"
        placeholder="Placeholder"
        infoMessage="This is a Textarea"
        isRequired
    />
);

export const isDisabled: Story = () => (
    <Textarea
        label="Label"
        placeholder="Placeholder"
        infoMessage="This is a Textarea"
        isDisabled
    />
);

export const hasError: Story = () => (
    <Textarea
        label="Label"
        placeholder="Placeholder"
        errorMessage="Please fill in"
        infoMessage="This is a Textarea"
    />
);

export const IsInverted: Story = () => (
    <Textarea
        label="Label"
        placeholder="Placeholder"
        infoMessage="This is a Textarea"
        isInverted
    />
);

IsInverted.parameters = {
    backgrounds: {
        default: 'inverted',
        values: [{ name: 'inverted', value: 'black' }],
    },
};
