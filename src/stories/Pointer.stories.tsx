import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import styled from 'styled-components';

import Pointer from 'components/buttons/Pointer';
import ArrowRight from 'components/base/icons/ArrowRight';

export default {
    title: 'Buttons/Pointer',
    component: Pointer.View,
    decorators: [
        (Story) => (
            <Helper>
                <Story />
            </Helper>
        ),
    ],
} as Meta;

// Story Helper
const Helper = styled.div`
    height: 300px;
    width: 100%;
    padding: 20px;
`;

export const Default: Story = () => (
    <Pointer.View as="button" onClick={console.log}>
        <Pointer.Label>Primary</Pointer.Label>
    </Pointer.View>
);

export const Link: Story = () => (
    <Pointer.View as="a" href="#" onClick={console.log}>
        <Pointer.Label>Primary</Pointer.Label>
    </Pointer.View>
);

export const ExternalLink: Story = () => (
    <Pointer.View as="a" href="#" isExternal onClick={console.log}>
        <Pointer.Label>Primary</Pointer.Label>
    </Pointer.View>
);

export const WithIcon: Story = () => (
    <Pointer.View as="a" href="#" onClick={console.log}>
        <Pointer.Label>zum Haus St. Ulrich</Pointer.Label>
        <Pointer.Icon>
            <ArrowRight />
        </Pointer.Icon>
    </Pointer.View>
);

export const Disabled: Story = () => (
    <Pointer.View as="a" href="#" isDisabled onClick={console.log}>
        <Pointer.Label>zum Haus St. Ulrich</Pointer.Label>
        <Pointer.Icon>
            <ArrowRight />
        </Pointer.Icon>
    </Pointer.View>
);

export const Inverted: Story = () => (
    <Pointer.View as="a" href="#" isInverted onClick={console.log}>
        <Pointer.Label>zum Haus St. Ulrich</Pointer.Label>
        <Pointer.Icon>
            <ArrowRight />
        </Pointer.Icon>
    </Pointer.View>
);

Inverted.parameters = {
    backgrounds: {
        default: 'inverted',
        values: [{ name: 'inverted', value: 'black' }],
    },
};

export const InvertedAndDisabled: Story = () => (
    <Pointer.View as="a" href="#" isInverted isDisabled onClick={console.log}>
        <Pointer.Label>zum Haus St. Ulrich</Pointer.Label>
        <Pointer.Icon>
            <ArrowRight />
        </Pointer.Icon>
    </Pointer.View>
);

InvertedAndDisabled.parameters = {
    backgrounds: {
        default: 'inverted',
        values: [{ name: 'inverted', value: 'black' }],
    },
};
