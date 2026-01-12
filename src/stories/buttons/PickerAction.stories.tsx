import React from 'react';
import { Meta, Story } from '@storybook/react';
import styled from 'styled-components';

import PickerAction from 'components/buttons/PickerAction';

export default {
    title: 'Buttons/PickerAction',
    component: PickerAction,
    decorators: [
        (Story) => (
            <Helper>
                <Story />
            </Helper>
        ),
    ],
    parameters: {
        status: {
            type: 'production',
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
    <PickerAction onClick={console.log}>Submit</PickerAction>
);

export const Disabled: Story = () => (
    <PickerAction disabled onClick={console.log}>
        Submit
    </PickerAction>
);

export const Ghost: Story = () => (
    <PickerAction variant="ghost" onClick={console.log}>
        Submit
    </PickerAction>
);

export const GhostDisabled: Story = () => (
    <PickerAction disabled variant="ghost" onClick={console.log}>
        Submit
    </PickerAction>
);
