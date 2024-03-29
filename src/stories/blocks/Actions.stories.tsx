import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import Actions from 'components/blocks/Actions';
import Button from 'components/buttons/Button';
import ButtonGhost from 'components/buttons/ButtonGhost';

export default {
    title: 'Blocks/Actions',
    component: Actions,
    decorators: [
        (Story) => (
            <div style={{ padding: '20px' }}>
                <Story />
            </div>
        ),
    ],
    parameters: {
        status: {
            type: 'preview',
        },
    },
} as Meta;

export const Default: Story = () => (
    <Actions
        primary={
            <Button.View>
                <Button.Label>Primary</Button.Label>
            </Button.View>
        }
        secondary={
            <ButtonGhost.View>
                <ButtonGhost.Label>Secondary</ButtonGhost.Label>
            </ButtonGhost.View>
        }
    />
);

export const CoverMode: Story = () => (
    <Actions
        mode="cover"
        primary={
            <Button.View>
                <Button.Label>Primary</Button.Label>
            </Button.View>
        }
        secondary={
            <ButtonGhost.View>
                <ButtonGhost.Label>Secondary</ButtonGhost.Label>
            </ButtonGhost.View>
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
            <ButtonGhost.View>
                <ButtonGhost.Label>Secondary</ButtonGhost.Label>
            </ButtonGhost.View>
        }
    />
);
