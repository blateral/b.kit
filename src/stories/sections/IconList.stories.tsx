import React from 'react';
import { Meta, Story } from '@storybook/react';
import IconList, { IconListComponent } from 'components/sections/IconList';
import Button from 'components/buttons/Button';
import ButtonGhost from 'components/buttons/ButtonGhost';

const items = [
    {
        src: 'https://via.placeholder.com/200x100',
        alt: '',
    },
    {
        src: 'https://via.placeholder.com/180x80',
        alt: '',
    },
    {
        src: 'https://via.placeholder.com/70x90',
        alt: '',
    },
    {
        src: 'https://via.placeholder.com/300x70',
        alt: '',
    },
    {
        src: 'https://via.placeholder.com/150x120',
        alt: '',
    },
    {
        src: 'https://via.placeholder.com/150x70',
        alt: '',
    },
    {
        src: 'https://via.placeholder.com/95x95',
        alt: '',
    },
    {
        src: 'https://via.placeholder.com/200x100',
        alt: '',
    },
    {
        src: 'https://via.placeholder.com/200x80',
        alt: '',
    },
    {
        src: 'https://via.placeholder.com/350x70',
        alt: '',
    },
    {
        src: 'https://via.placeholder.com/170x40',
        alt: '',
    },
    {
        src: 'https://via.placeholder.com/170x70',
        alt: '',
    },
    {
        src: 'https://via.placeholder.com/50x70',
        alt: '',
    },
    {
        src: 'https://via.placeholder.com/230x70',
        alt: '',
    },
    {
        src: 'https://via.placeholder.com/200x70',
        alt: '',
    },
    {
        src: 'https://via.placeholder.com/70x70',
        alt: '',
    },
    {
        src: 'https://via.placeholder.com/100x70',
        alt: '',
    },
    {
        src: 'https://via.placeholder.com/120x70',
        alt: '',
    },
    {
        src: 'https://via.placeholder.com/200x70',
        alt: '',
    },
    {
        src: 'https://via.placeholder.com/200x70',
        alt: '',
    },
    {
        src: 'https://via.placeholder.com/200x70',
        alt: '',
    },
    {
        src: 'https://via.placeholder.com/200x70',
        alt: '',
    },
    {
        src: 'https://via.placeholder.com/200x70',
        alt: '',
    },
    {
        src: 'https://via.placeholder.com/200x70',
        alt: '',
    },
];

const itemsWithAspectRatio = [
    {
        src: 'https://via.placeholder.com/200x100',
        alt: '',
        ratio: {
            w: 200,
            h: 100,
        },
    },
    {
        src: 'https://via.placeholder.com/180x80',
        alt: '',
        ratio: {
            w: 180,
            h: 80,
        },
    },
    {
        src: 'https://via.placeholder.com/70x90',
        alt: '',
        ratio: {
            w: 70,
            h: 90,
        },
    },
    {
        src: 'https://via.placeholder.com/300x70',
        alt: '',
        ratio: {
            w: 300,
            h: 70,
        },
    },
    {
        src: 'https://via.placeholder.com/150x120',
        alt: '',
        ratio: {
            w: 150,
            h: 120,
        },
    },
    {
        src: 'https://via.placeholder.com/150x70',
        alt: '',
        ratio: {
            w: 150,
            h: 70,
        },
    },
    {
        src: 'https://via.placeholder.com/95x95',
        alt: '',
        ratio: {
            w: 95,
            h: 95,
        },
    },
    {
        src: 'https://via.placeholder.com/200x100',
        alt: '',
        ratio: {
            w: 200,
            h: 100,
        },
    },
    {
        src: 'https://via.placeholder.com/200x80',
        alt: '',
        ratio: {
            w: 200,
            h: 80,
        },
    },
    {
        src: 'https://via.placeholder.com/350x70',
        alt: '',
        ratio: {
            w: 350,
            h: 70,
        },
    },
    {
        src: 'https://via.placeholder.com/170x40',
        alt: '',
        ratio: {
            w: 170,
            h: 40,
        },
    },
    {
        src: 'https://via.placeholder.com/170x70',
        alt: '',
        ratio: {
            w: 170,
            h: 70,
        },
    },
    {
        src: 'https://via.placeholder.com/50x70',
        alt: '',
        ratio: {
            w: 50,
            h: 70,
        },
    },
    {
        src: 'https://via.placeholder.com/230x70',
        alt: '',
        ratio: {
            w: 230,
            h: 70,
        },
    },
    {
        src: 'https://via.placeholder.com/200x70',
        alt: '',
        ratio: {
            w: 200,
            h: 70,
        },
    },
    {
        src: 'https://via.placeholder.com/70x70',
        alt: '',
        ratio: {
            w: 70,
            h: 70,
        },
    },
    {
        src: 'https://via.placeholder.com/100x70',
        alt: '',
        ratio: {
            w: 100,
            h: 70,
        },
    },
    {
        src: 'https://via.placeholder.com/120x80',
        alt: '',
        ratio: {
            w: 120,
            h: 80,
        },
    },
    {
        src: 'https://via.placeholder.com/200x70',
        alt: '',
        ratio: {
            w: 200,
            h: 70,
        },
    },
    {
        src: 'https://via.placeholder.com/70x70',
        alt: '',
        ratio: {
            w: 70,
            h: 70,
        },
    },
    {
        src: 'https://via.placeholder.com/200x70',
        alt: '',
        ratio: {
            w: 200,
            h: 70,
        },
    },
    {
        src: 'https://via.placeholder.com/100x200',
        alt: '',
        ratio: {
            w: 100,
            h: 200,
        },
    },
    {
        src: 'https://via.placeholder.com/200x70',
        alt: '',
        ratio: {
            w: 200,
            h: 70,
        },
    },
    {
        src: 'https://via.placeholder.com/200x70',
        alt: '',
        ratio: {
            w: 200,
            h: 70,
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

export const Default: Story = () => <IconList items={items} />;

export const WithDefinedRatio: Story = () => (
    <IconList items={itemsWithAspectRatio} />
);

export const WithToggle: Story = () => (
    <IconList enableToggle items={itemsWithAspectRatio} />
);

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
        items={itemsWithAspectRatio}
    />
);

export const WithBackground: Story = () => (
    <IconList enableToggle bgMode="full" items={itemsWithAspectRatio} />
);

export const Inverted: Story = () => (
    <IconList enableToggle bgMode="inverted" items={itemsWithAspectRatio} />
);

export const Centered: Story = () => (
    <IconList enableToggle isCentered items={itemsWithAspectRatio} />
);
