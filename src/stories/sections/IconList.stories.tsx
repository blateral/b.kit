import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import IconList, { IconListComponent } from 'components/sections/IconList';
import Button from 'components/buttons/Button';
import ButtonGhost from 'components/buttons/ButtonGhost';

const Items = [
    {
        src: 'https://via.placeholder.com/200x70',
        alt: '',
        size: {
            width: 200,
            height: 70,
        },
    },
    {
        src: 'https://via.placeholder.com/180x70',
        alt: '',
        size: {
            width: 180,
            height: 70,
        },
    },
    {
        src: 'https://via.placeholder.com/70x70',
        alt: '',
        size: {
            width: 70,
            height: 70,
        },
    },
    {
        src: 'https://via.placeholder.com/300x70',
        alt: '',
        size: {
            width: 300,
            height: 70,
        },
    },
    {
        src: 'https://via.placeholder.com/150x70',
        alt: '',
        size: {
            width: 150,
            height: 70,
        },
    },
    {
        src: 'https://via.placeholder.com/150x70',
        alt: '',
        size: {
            width: 150,
            height: 70,
        },
    },
    {
        src: 'https://via.placeholder.com/95x70',
        alt: '',
        size: {
            width: 95,
            height: 70,
        },
    },
    {
        src: 'https://via.placeholder.com/200x70',
        alt: '',
        size: {
            width: 200,
            height: 70,
        },
    },
    {
        src: 'https://via.placeholder.com/200x70',
        alt: '',
        size: {
            width: 200,
            height: 70,
        },
    },
    {
        src: 'https://via.placeholder.com/350x70',
        alt: '',
        size: {
            width: 350,
            height: 70,
        },
    },
    {
        src: 'https://via.placeholder.com/170x70',
        alt: '',
        size: {
            width: 170,
            height: 70,
        },
    },
    {
        src: 'https://via.placeholder.com/170x70',
        alt: '',
        size: {
            width: 170,
            height: 70,
        },
    },
    {
        src: 'https://via.placeholder.com/50x70',
        alt: '',
        size: {
            width: 50,
            height: 70,
        },
    },
    {
        src: 'https://via.placeholder.com/230x70',
        alt: '',
        size: {
            width: 230,
            height: 70,
        },
    },
    {
        src: 'https://via.placeholder.com/200x70',
        alt: '',
        size: {
            width: 200,
            height: 70,
        },
    },
    {
        src: 'https://via.placeholder.com/70x70',
        alt: '',
        size: {
            width: 70,
            height: 70,
        },
    },
    {
        src: 'https://via.placeholder.com/100x70',
        alt: '',
        size: {
            width: 100,
            height: 70,
        },
    },
    {
        src: 'https://via.placeholder.com/120x70',
        alt: '',
        size: {
            width: 120,
            height: 70,
        },
    },
    {
        src: 'https://via.placeholder.com/200x70',
        alt: '',
        size: {
            width: 200,
            height: 70,
        },
    },
    {
        src: 'https://via.placeholder.com/200x70',
        alt: '',
        size: {
            width: 200,
            height: 70,
        },
    },
    {
        src: 'https://via.placeholder.com/200x70',
        alt: '',
        size: {
            width: 200,
            height: 70,
        },
    },
    {
        src: 'https://via.placeholder.com/200x70',
        alt: '',
        size: {
            width: 200,
            height: 70,
        },
    },
    {
        src: 'https://via.placeholder.com/200x70',
        alt: '',
        size: {
            width: 200,
            height: 70,
        },
    },
    {
        src: 'https://via.placeholder.com/200x70',
        alt: '',
        size: {
            width: 200,
            height: 70,
        },
    },
];

export default {
    title: 'Sections/IconList',
    component: IconListComponent,
    parameters: {
        status: {
            type: ['preview', 'qsReady'],
        },
    },
} as Meta;

export const Default: Story = () => <IconList items={Items} />;

export const WithToggle: Story = () => <IconList enableToggle items={Items} />;

export const WithActions: Story = () => (
    <IconList
        enableToggle
        primaryAction={(isInverted) => (
            <Button.View isInverted={isInverted}>
                <Button.Label>Primary</Button.Label>
            </Button.View>
        )}
        secondaryAction={(isInverted) => (
            <ButtonGhost.View isInverted={isInverted}>
                <ButtonGhost.Label>Secondary</ButtonGhost.Label>
            </ButtonGhost.View>
        )}
        items={Items}
    />
);

export const WithBackground: Story = () => (
    <IconList enableToggle bgMode="full" items={Items} />
);

export const Inverted: Story = () => (
    <IconList enableToggle bgMode="inverted" items={Items} />
);

export const Centered: Story = () => (
    <IconList enableToggle isCentered items={Items} />
);
