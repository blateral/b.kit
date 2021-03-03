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

export const WithIntro: Story = () => (
    <IconList
        title="Lorem ipsum dolor sit amet."
        superTitle="Lorem, ipsum dolor."
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid veniam corrupti tempore doloribus nobis at minima sed similique, nulla molestias!"
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

export const Inverted: Story = () => (
    <IconList
        title="Lorem ipsum dolor sit amet."
        superTitle="Lorem, ipsum dolor."
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid veniam corrupti tempore doloribus nobis at minima sed similique, nulla molestias!"
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
        isInverted
    />
);

export const Centered: Story = () => (
    <IconList
        title="Lorem ipsum dolor sit amet."
        superTitle="Lorem, ipsum dolor."
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid veniam corrupti tempore doloribus nobis at minima sed similique, nulla molestias!"
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
        isCentered
        items={Items}
    />
);
