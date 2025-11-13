import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import styled from 'styled-components';
import RadioButton from 'components/fields/Radio';

export default {
    title: 'Fields/Radio',
    component: RadioButton,
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
            type: 'production',
        },
    },
} as Meta;

const Helper = styled.div`
    height: 300px;
    width: 100%;
    padding: 20px;
`;

export const Default: Story = () => (
    <RadioButton
        label="Example Radio"
        name="test"
        value=""
        onChange={console.log}
    />
);

export const isInverted: Story = () => (
    <RadioButton
        isInverted
        label="Example Radio"
        name="test"
        value=""
        onChange={console.log}
    />
);

isInverted.parameters = {
    backgrounds: {
        default: 'inverted',
        values: [{ name: 'inverted', value: 'black' }],
    },
};

export const WithRichtext: Story = () => (
    <RadioButton
        label={'Example <a href="#">Radio</a>'}
        name="test"
        value=""
        onChange={console.log}
    />
);

export const isSelected: Story = () => (
    <RadioButton
        label="Example Selected Radio"
        isSelected
        name="test"
        value=""
        onChange={console.log}
    />
);

export const isSelectedAndInverted: Story = () => (
    <RadioButton
        isInverted
        isSelected
        label="Example Radio"
        name="test"
        value=""
        onChange={console.log}
    />
);

isSelectedAndInverted.parameters = {
    backgrounds: {
        default: 'inverted',
        values: [{ name: 'inverted', value: 'black' }],
    },
};

export const isDisabled: Story = () => (
    <RadioButton
        label="Example Disabled Radio"
        isDisabled
        name="test"
        value=""
        onChange={console.log}
    />
);
