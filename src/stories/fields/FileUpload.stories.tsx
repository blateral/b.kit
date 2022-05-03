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
    <FileUpload uploadLabel="Dateien auswählen" field={{ label: 'Label' }} />
);

export const WithInfoMessage: Story = () => (
    <FileUpload
        uploadLabel="Dateien auswählen"
        field={{
            label: 'Label',
            infoMessage: 'Optionale Info Message',
        }}
    />
);

export const AsRequired: Story = () => (
    <FileUpload
        uploadLabel="Dateien auswählen"
        field={{
            label: 'Label',
            infoMessage: 'Optionale Info Message',
            isRequired: true,
        }}
    />
);

export const isDisabled: Story = () => (
    <FileUpload
        uploadLabel="Dateien auswählen"
        field={{
            label: 'Label',
            infoMessage: 'Optionale Info Message',
            isRequired: true,
            isDisabled: true,
        }}
    />
);

export const IsInverted: Story = () => (
    <FileUpload
        uploadLabel="Dateien auswählen"
        field={{
            label: 'Label',
            infoMessage: 'Optionale Info Message',
            isRequired: true,
            isDisabled: true,
            isInverted: true,
        }}
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
        field={{
            label: 'Label',
            infoMessage: 'Optionale Info Message',
            isRequired: true,
            errorMessage: 'Error!',
        }}
    />
);
