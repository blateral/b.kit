import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import IconList, { IconListComponent } from 'components/sections/IconList';
import Button from 'components/buttons/Button';
import ButtonGhost from 'components/buttons/ButtonGhost';

const Items = [
    {
        src: 'https://via.placeholder.com/200x70',
        alt: '',
        link: { href: '#' },
    },
    {
        src: 'https://via.placeholder.com/200x70',
        alt: '',
        link: { href: '#' },
    },
    {
        src: 'https://via.placeholder.com/200x70',
        alt: '',
        link: { href: '#' },
    },
    {
        src: 'https://via.placeholder.com/200x70',
        alt: '',
        link: { href: '#' },
    },
    {
        src: 'https://via.placeholder.com/200x70',
        alt: '',
        link: { href: '#' },
    },
    {
        src: 'https://via.placeholder.com/200x70',
        alt: '',
        link: { href: '#' },
    },
    {
        src: 'https://via.placeholder.com/200x70',
        alt: '',
        link: { href: '#' },
    },
    {
        src: 'https://via.placeholder.com/200x70',
        alt: '',
        link: { href: '#' },
    },
    {
        src: 'https://via.placeholder.com/200x70',
        alt: '',
        link: { href: '#' },
    },
    {
        src: 'https://via.placeholder.com/200x70',
        alt: '',
        link: { href: '#' },
    },
    {
        src: 'https://via.placeholder.com/200x70',
        alt: '',
        link: { href: '#' },
    },
    {
        src: 'https://via.placeholder.com/200x70',
        alt: '',
        link: { href: '#' },
    },
    {
        src: 'https://via.placeholder.com/200x70',
        alt: '',
        link: { href: '#' },
    },
    {
        src: 'https://via.placeholder.com/200x70',
        alt: '',
        link: { href: '#' },
    },
    {
        src: 'https://via.placeholder.com/200x70',
        alt: '',
        link: { href: '#' },
    },
    {
        src: 'https://via.placeholder.com/200x70',
        alt: '',
        link: { href: '#' },
    },
    {
        src: 'https://via.placeholder.com/200x70',
        alt: '',
        link: { href: '#' },
    },
    {
        src: 'https://via.placeholder.com/200x70',
        alt: '',
        link: { href: '#' },
    },
    {
        src: 'https://via.placeholder.com/200x70',
        alt: '',
        link: { href: '#' },
    },
    {
        src: 'https://via.placeholder.com/200x70',
        alt: '',
        link: { href: '#' },
    },
    {
        src: 'https://via.placeholder.com/200x70',
        alt: '',
        link: { href: '#' },
    },
    {
        src: 'https://via.placeholder.com/200x70',
        alt: '',
        link: { href: '#' },
    },
    {
        src: 'https://via.placeholder.com/200x70',
        alt: '',
        link: { href: '#' },
    },
    {
        src: 'https://via.placeholder.com/200x70',
        alt: '',
        link: { href: '#' },
    },
];

export default {
    title: 'Sections/IconList',
    component: IconListComponent,
    parameters: {
        status: {
            type: 'stable',
        },
    },
} as Meta;

export const Default: Story = () => (
    <IconList
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

export const WithToggle: Story = () => (
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
