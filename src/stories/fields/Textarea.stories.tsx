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
            type: 'stable',
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

export const WithLightBackground: Story = () => (
    <Textarea name="field_a" lightBg />
);
WithLightBackground.parameters = {
    backgrounds: {
        default: 'gray',
        values: [{ name: 'gray', value: '#F0F0F0' }],
    },
};

export const WithPlaceholder: Story = () => (
    <Textarea name="field_a" placeholder="Enter text.." />
);

export const WithLabel: Story = () => (
    <Textarea name="field_a" label="Label text" placeholder="Enter text.." />
);

export const WithInfoMessage: Story = () => (
    <Textarea label="Textarea" infoMessage="Das ist ein Textfeld" />
);

export const AsRequired: Story = () => (
    <Textarea label="Textarea" isRequired infoMessage="Das ist ein Textfeld" />
);

export const isDisabled: Story = () => (
    <Textarea label="Textarea" isDisabled infoMessage="Das ist ein Textfeld" />
);

export const hasError: Story = () => (
    <Textarea
        label="Textarea"
        errorMessage="Bitte füllen Sie dieses Feld aus!"
        infoMessage="Das ist ein Textfeld"
    />
);

export const IsInverted: Story = () => (
    <Textarea
        lightBg={false}
        label="Textarea"
        isInverted
        infoMessage="Das ist ein Textfeld"
    />
);

IsInverted.parameters = {
    backgrounds: {
        default: 'inverted',
        values: [{ name: 'inverted', value: 'black' }],
    },
};
