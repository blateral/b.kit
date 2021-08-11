import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import IconList from 'components/sections/IconList';
import Button from 'components/buttons/Button';
import ButtonGhost from 'components/buttons/ButtonGhost';

const Items = [
    {
        src: '//placehold.it/200x70',
        alt: '',
    },
    {
        src: '//placehold.it/200x70',
        alt: '',
    },
    {
        src: '//placehold.it/200x70',
        alt: '',
    },
    {
        src: '//placehold.it/200x70',
        alt: '',
    },
    {
        src: '//placehold.it/200x70',
        alt: '',
    },
    {
        src: '//placehold.it/200x70',
        alt: '',
    },
    {
        src: '//placehold.it/200x70',
        alt: '',
    },
    {
        src: '//placehold.it/200x70',
        alt: '',
    },
    {
        src: '//placehold.it/200x70',
        alt: '',
    },
    {
        src: '//placehold.it/200x70',
        alt: '',
    },
    {
        src: '//placehold.it/200x70',
        alt: '',
    },
    {
        src: '//placehold.it/200x70',
        alt: '',
    },
    {
        src: '//placehold.it/200x70',
        alt: '',
    },
    {
        src: '//placehold.it/200x70',
        alt: '',
    },
    {
        src: '//placehold.it/200x70',
        alt: '',
    },
    {
        src: '//placehold.it/200x70',
        alt: '',
    },
    {
        src: '//placehold.it/200x70',
        alt: '',
    },
    {
        src: '//placehold.it/200x70',
        alt: '',
    },
    {
        src: '//placehold.it/200x70',
        alt: '',
    },
    {
        src: '//placehold.it/200x70',
        alt: '',
    },
    {
        src: '//placehold.it/200x70',
        alt: '',
    },
    {
        src: '//placehold.it/200x70',
        alt: '',
    },
    {
        src: '//placehold.it/200x70',
        alt: '',
    },
    {
        src: '//placehold.it/200x70',
        alt: '',
    },
];

export default {
    title: 'Sections/IconList',
    component: IconList,
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

export const WithBackground: Story = () => (
    <IconList bgMode="full" items={Items} />
);

export const Inverted: Story = () => (
    <IconList bgMode="inverted" items={Items} />
);

export const Centered: Story = () => <IconList isCentered items={Items} />;
