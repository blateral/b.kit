import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import IconList from '../src/components/sections/IconList';
import Button from '../src/components/buttons/Button';

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
];

export default {
    title: 'Sections/IconList',
    component: IconList,
} as Meta;

export const Default: Story = () => (
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
            <Button.View type="ghost" isInverted={isInverted}>
                <Button.Label>Secondary</Button.Label>
            </Button.View>
        )}
        primaryItems={Items}
        secondaryItems={Items}
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
            <Button.View type="ghost" isInverted={isInverted}>
                <Button.Label>Secondary</Button.Label>
            </Button.View>
        )}
        primaryItems={Items}
        secondaryItems={Items}
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
            <Button.View type="ghost" isInverted={isInverted}>
                <Button.Label>Secondary</Button.Label>
            </Button.View>
        )}
        primaryItems={Items}
        secondaryItems={Items}
        isCentered
        bgMode="full"
    />
);
