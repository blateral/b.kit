import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import Checkbox from 'components/fields/Checkbox';
import styled from 'styled-components';

export default {
    title: 'Fields/Checkbox',
    component: Checkbox,
    decorators: [
        (Story) => (
            <Background>
                <Story />
            </Background>
        ),
    ],
} as Meta;

const Background = styled.div<{ dark?: boolean }>`
    background-color: ${({ dark }) => (dark ? '#1d2223' : 'transparent')};
    height: 100vh;
    padding: 20px;
`;

export const Default: Story = () => (
    <Checkbox label="Example Checkbox" name="test" value="" />
);

export const isSelected: Story = () => (
    <Checkbox
        label="Example Selected Checkbox"
        isSelected
        name="test"
        value=""
    />
);

export const isRequired: Story = () => (
    <Checkbox
        isRequired
        label="Example Selected Checkbox"
        isSelected
        name="test"
        value=""
    />
);

export const isDisabled: Story = () => (
    <Checkbox
        label="Example Disabled Checkbox"
        isDisabled
        name="test"
        value=""
    />
);

export const isInverted: Story = () => (
    <Checkbox label="Example Checkbox" isInverted name="test" value="" />
);

isInverted.parameters = {
    backgrounds: {
        default: 'inverted',
        values: [{ name: 'inverted', value: 'black' }],
    },
};

export const isInvertedAndSelected: Story = () => (
    <Checkbox
        label="Example Checkbox"
        isInverted
        isSelected
        name="test"
        value=""
    />
);
isInvertedAndSelected.parameters = {
    backgrounds: {
        default: 'inverted',
        values: [{ name: 'inverted', value: 'black' }],
    },
};
