import * as React from 'react';
import { storiesOf } from '@storybook/react';
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

storiesOf('Sections / IconList', module)
    .add('default', () => {
        return (
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
    })
    .add('inverted', () => {
        return (
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
    })
    .add('with centered', () => {
        return (
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
    });
