import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import styled from 'styled-components';

import ButtonGhost from 'components/buttons/ButtonGhost';
import ArrowRight from 'components/base/icons/ArrowRight';

export default {
    title: 'Buttons/ButtonGhost',
    component: ButtonGhost.View,
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

export const Ghost: Story = () => (
    <ButtonGhost.View as="a" href="#" onClick={console.log}>
        <ButtonGhost.Label>Lorem Ipsum</ButtonGhost.Label>
    </ButtonGhost.View>
);

export const Small: Story = () => (
    <ButtonGhost.View as="a" href="#" size="small" onClick={console.log}>
        <ButtonGhost.Label>Lorem Ipsum</ButtonGhost.Label>
    </ButtonGhost.View>
);

export const GhostWithIcon: Story = () => (
    <ButtonGhost.View as="a" href="#" onClick={console.log}>
        <ButtonGhost.Label>Lorem Ipsum</ButtonGhost.Label>
        <ButtonGhost.Icon>
            <ArrowRight />
        </ButtonGhost.Icon>
    </ButtonGhost.View>
);

export const GhostDisabled: Story = () => (
    <ButtonGhost.View as="a" href="#" isDisabled onClick={console.log}>
        <ButtonGhost.Label>Lorem Ipsum</ButtonGhost.Label>
        <ButtonGhost.Icon>
            <ArrowRight />
        </ButtonGhost.Icon>
    </ButtonGhost.View>
);

export const GhostInverted: Story = () => (
    <ButtonGhost.View as="a" href="#" isInverted onClick={console.log}>
        <ButtonGhost.Label>Lorem Ipsum</ButtonGhost.Label>
        <ButtonGhost.Icon>
            <ArrowRight />
        </ButtonGhost.Icon>
    </ButtonGhost.View>
);

GhostInverted.parameters = {
    backgrounds: {
        default: 'inverted',
        values: [{ name: 'inverted', value: 'black' }],
    },
};

export const GhostInvertedAndDisabled: Story = () => (
    <ButtonGhost.View
        as="a"
        href="#"
        isInverted
        isDisabled
        onClick={console.log}
    >
        <ButtonGhost.Label>Lorem Ipsum</ButtonGhost.Label>
        <ButtonGhost.Icon>
            <ArrowRight />
        </ButtonGhost.Icon>
    </ButtonGhost.View>
);

GhostInvertedAndDisabled.parameters = {
    backgrounds: {
        default: 'inverted',
        values: [{ name: 'inverted', value: 'black' }],
    },
};
