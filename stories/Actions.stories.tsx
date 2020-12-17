import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import Actions from '../src/components/blocks/Actions';
import Button from '../src/components/buttons/Button';

export default {
    title: 'Blocks/Actions',
    component: Actions,
} as Meta;

export const Default: Story = () => (
    <Actions
        primary={
            <Button.View>
                <Button.Label>Primary</Button.Label>
            </Button.View>
        }
        secondary={
            <Button.View type="ghost">
                <Button.Label>Secondary</Button.Label>
            </Button.View>
        }
    />
);

export const Mirrored: Story = () => (
    <Actions
        isMirrored
        primary={
            <Button.View>
                <Button.Label>Primary</Button.Label>
            </Button.View>
        }
        secondary={
            <Button.View type="ghost">
                <Button.Label>Secondary</Button.Label>
            </Button.View>
        }
    />
);
