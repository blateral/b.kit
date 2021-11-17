import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import styled from 'styled-components';

import CompactForm from 'components/fields/CompactForm';

const Helper = styled.div`
    height: 150px;
    width: 100%;
    padding: 20px;
`;

export default {
    title: 'Fields/CompactForm',
    component: CompactForm,
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

export const Default: Story = () => (
    <CompactForm
        placeholder="Geben Sie Ihre E-Mail Adresse an"
        onSubmit={console.log}
        onClick={console.log}
        onBlur={console.log}
    />
);

export const WithButton: Story = () => (
    <CompactForm
        placeholder="Geben Sie Ihre E-Mail Adresse an"
        buttonIcon={'Primary'}
        onSubmit={console.log}
        onClick={console.log}
        onBlur={console.log}
    />
);

export const Inverted: Story = () => (
    <CompactForm
        isInverted
        placeholder="Geben Sie Ihre E-Mail Adresse an"
        buttonIcon={'Primary'}
        onSubmit={console.log}
        onClick={console.log}
        onBlur={console.log}
    />
);

Inverted.parameters = {
    backgrounds: {
        default: 'inverted',
        values: [{ name: 'inverted', value: 'black' }],
    },
};
