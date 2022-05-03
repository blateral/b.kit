import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import styled from 'styled-components';
import FileUpload from 'components/fields/FileUpload';

export default {
    title: 'fields/FileUpload',
    component: FileUpload,
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

export const Default: Story = () => <FileUpload />;

export const WithLabel: Story = () => (
    <FileUpload uploadLabel="Dateien auswählen" label="Label" />
);

export const WithInfoMessage: Story = () => (
    <FileUpload
        uploadLabel="Dateien auswählen"
        label="Label"
        infoMessage="Optionale Info Message"
    />
);

export const AsRequired: Story = () => (
    <FileUpload
        uploadLabel="Dateien auswählen"
        label="Label"
        infoMessage="Optionale Info Message"
        isRequired
    />
);

export const isDisabled: Story = () => (
    <FileUpload
        uploadLabel="Dateien auswählen"
        label="Label"
        infoMessage="Optionale Info Message"
        isRequired
        isDisabled
    />
);

export const IsInverted: Story = () => (
    <FileUpload
        uploadLabel="Dateien auswählen"
        label="Label"
        infoMessage="Optionale Info Message"
        isRequired
        isInverted
    />
);
IsInverted.parameters = {
    backgrounds: {
        default: 'inverted',
        values: [{ name: 'inverted', value: 'black' }],
    },
};

export const HasError: Story = () => (
    <FileUpload
        uploadLabel="Dateien auswählen"
        label="Label"
        infoMessage="Optionale Info Message"
        isRequired
        errorMessage="Error!"
    />
);

export const WithCustomButton: Story = () => (
    <FileUpload
        uploadLabel="Dateien auswählen"
        label="Label"
        infoMessage="Optionale Info Message"
        isRequired
        errorMessage="Error!"
    />
);
