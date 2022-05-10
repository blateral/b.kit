import React from 'react';
import { Meta, Story } from '@storybook/react';
import styled from 'styled-components';

import Control from 'components/buttons/Control';
import * as Icons from 'components/base/icons/Icons';

export default {
    title: 'Buttons/Control',
    component: Control,
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
    <Control>
        <Icons.ArrowRightGhost />
    </Control>
);

export const Inverted: Story = () => (
    <Control isInverted>
        <Icons.ArrowRightGhost />
    </Control>
);

Inverted.parameters = {
    backgrounds: {
        default: 'inverted',
        values: [{ name: 'inverted', value: 'black' }],
    },
};

export const WithClickHandler: Story = () => (
    <Control onClick={console.log}>
        <Icons.ArrowRightGhost />
    </Control>
);
