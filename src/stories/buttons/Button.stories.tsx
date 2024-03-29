import React from 'react';
import { Meta, Story } from '@storybook/react';
import styled from 'styled-components';

import Button from 'components/buttons/Button';
import ArrowRight from 'components/base/icons/ArrowRight';

export default {
    title: 'Buttons/Button',
    component: Button.View,
    decorators: [
        (Story) => (
            <Helper>
                <Story />
            </Helper>
        ),
    ],
    parameters: {
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

export const Default: Story = () => (
    <Button.View as="button" onClick={console.log}>
        <Button.Label>Primary</Button.Label>
    </Button.View>
);

export const Small: Story = () => (
    <Button.View as="button" size="small" onClick={console.log}>
        <Button.Label>Primary</Button.Label>
    </Button.View>
);

export const Link: Story = () => (
    <Button.View as="a" href="#" onClick={console.log}>
        <Button.Label>Primary</Button.Label>
    </Button.View>
);

export const ExternalLink: Story = () => (
    <Button.View as="a" href="#" isExternal onClick={console.log}>
        <Button.Label>Primary</Button.Label>
    </Button.View>
);

export const WithIcon: Story = () => (
    <Button.View as="a" href="#" onClick={console.log}>
        <Button.Label>Lorem Ipsum</Button.Label>
        <Button.Icon>
            <ArrowRight />
        </Button.Icon>
    </Button.View>
);

export const Disabled: Story = () => (
    <Button.View as="a" href="#" isDisabled onClick={console.log}>
        <Button.Label>Lorem Ipsum</Button.Label>
        <Button.Icon>
            <ArrowRight />
        </Button.Icon>
    </Button.View>
);

export const Inverted: Story = () => (
    <Button.View as="a" href="#" isInverted onClick={console.log}>
        <Button.Label>Lorem Ipsum</Button.Label>
        <Button.Icon>
            <ArrowRight />
        </Button.Icon>
    </Button.View>
);

Inverted.parameters = {
    backgrounds: {
        default: 'inverted',
        values: [{ name: 'inverted', value: 'black' }],
    },
};

export const InvertedAndDisabled: Story = () => (
    <Button.View as="a" href="#" isInverted isDisabled onClick={console.log}>
        <Button.Label>Lorem Ipsum</Button.Label>
        <Button.Icon>
            <ArrowRight />
        </Button.Icon>
    </Button.View>
);

InvertedAndDisabled.parameters = {
    backgrounds: {
        default: 'inverted',
        values: [{ name: 'inverted', value: 'black' }],
    },
};
