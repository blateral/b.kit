import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import Textarea from 'components/fields/Textarea';
import styled from 'styled-components';

export default {
    title: 'Fields/Textarea',
    component: Textarea,
} as Meta;

const Background = styled.div<{ dark?: boolean }>`
    background-color: ${({ dark }) => (dark ? '#1d2223' : 'transparent')};
    height: 100vh;
    padding: 20px;
`;

export const Default: Story = () => (
    <Background>
        <Textarea label="Textarea" />
    </Background>
);

export const isInverted: Story = () => (
    <Background dark>
        <Textarea label="Textarea" isInverted />
    </Background>
);

export const isDisabled: Story = () => (
    <Background dark>
        <Textarea label="Textarea" isDisabled />
    </Background>
);

export const hasError: Story = () => (
    <Background dark>
        <Textarea
            label="Textarea"
            hasError
            errorMessage="Bitte füllen Sie dieses Feld aus!"
        />
    </Background>
);

export const WithInfoMessage: Story = () => (
    <Background dark>
        <Textarea label="Textarea" infoMessage="Das ist ein Textfeld" />
    </Background>
);

export const IsOptional: Story = () => (
    <Background dark>
        <Textarea label="Textarea" isOptional />
    </Background>
);
