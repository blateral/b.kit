import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import styled from 'styled-components';
import QuicknavButton from 'components/buttons/QuicknavButton';

const Helper = styled.div`
    height: 150px;
    width: 100%;
    padding: 20px;
`;

export default {
    title: 'Buttons/QuicknavButton',
    component: QuicknavButton,
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
    <QuicknavButton link="#0" label="Textlink" />
);

export const isActive: Story = () => (
    <QuicknavButton link="#0" label="Textlink" isActive />
);

export const isDisabled: Story = () => (
    <QuicknavButton link="#0" label="Textlink" isDisabled />
);

export const isInverted: Story = () => (
    <QuicknavButton link="#0" label="Textlink" isInverted />
);

isInverted.parameters = {
    backgrounds: {
        default: 'inverted',
        values: [{ name: 'inverted', value: '#2E4959' }],
    },
};
