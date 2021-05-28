import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import Checkbox from 'components/fields/Checkbox';
import styled from 'styled-components';

export default {
    title: 'Fields/Checkbox',
    component: Checkbox,
} as Meta;

const Background = styled.div<{ dark?: boolean }>`
    background-color: ${({ dark }) => (dark ? '#1d2223' : 'transparent')};
    height: 100vh;
    padding: 20px;
`;

export const Default: Story = () => (
    <Background>
        <Checkbox label="Example Checkbox" name="test" value="" />
    </Background>
);

export const isSelected: Story = () => (
    <Background>
        <Checkbox
            label="Example Selected Checkbox"
            isSelected
            name="test"
            value=""
        />
    </Background>
);

export const isDisabled: Story = () => (
    <Background>
        <Checkbox
            label="Example Disabled Checkbox"
            isDisabled
            name="test"
            value=""
        />
    </Background>
);

export const isInverted: Story = () => (
    <Background dark>
        <Checkbox label="Example Checkbox" isInverted name="test" value="" />
    </Background>
);

export const isInvertedAndSelected: Story = () => (
    <Background dark>
        <Checkbox
            label="Example Checkbox"
            isInverted
            isSelected
            name="test"
            value=""
        />
    </Background>
);
