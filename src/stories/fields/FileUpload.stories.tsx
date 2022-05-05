import React from 'react';
import styled from 'styled-components';

import { Meta, Story } from '@storybook/react';
import FileUpload from 'components/fields/FileUpload';
import Clock from 'components/base/icons/Clock';

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

export const Default: Story = () => <FileUpload />;

export const WithLabel: Story = () => (
    <FileUpload uploadLabel="Dateien auswählen.." label="Label" />
);

export const WithInfoMessage: Story = () => (
    <FileUpload
        uploadLabel="Dateien auswählen.."
        label="Label"
        infoMessage="Optionale Info Message"
    />
);

export const AsRequired: Story = () => (
    <FileUpload
        uploadLabel="Dateien auswählen.."
        label="Label"
        infoMessage="Optionale Info Message"
        isRequired
    />
);

export const isDisabled: Story = () => (
    <FileUpload
        uploadLabel="Dateien auswählen.."
        label="Label"
        infoMessage="Optionale Info Message"
        isRequired
        isDisabled
    />
);

export const IsInverted: Story = () => (
    <FileUpload
        uploadLabel="Dateien auswählen.."
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
        uploadLabel="Dateien auswählen.."
        label="Label"
        infoMessage="Optionale Info Message"
        isRequired
        errorMessage="Error!"
    />
);

export const WithIcon: Story = () => (
    <FileUpload
        uploadLabel="Dateien auswählen.."
        label="Label"
        infoMessage="Optionale Info Message"
        isRequired
        customIcon={() => <Clock />}
    />
);
