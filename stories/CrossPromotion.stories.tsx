import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import CrossPromotion from '../src/components/sections/CrossPromotion';
import Button from '../src/components/buttons/Button';

export default {
    title: 'Sections/CrossPromotion',
    component: CrossPromotion,
} as Meta;

export const SingleImageFull: Story = () => (
    <CrossPromotion
        main={[
            {
                image: {
                    size: 'full',
                    small: 'https://unsplash.it/610/457?image=400',
                    medium: 'https://unsplash.it/507/380?image=400',
                    large: 'https://unsplash.it/507/380?image=400',
                },
                title: 'Haus St. Franziskus – lorem ipsum dolor sit amet',
                superTitle: 'Haus St. Franziskus',
                text:
                    'Mitten im historischen Altstadtkern von Überlingen liegt das Haus St. Franziskus. Das prachtvolle Gebäude, ursprünglich als Kloster von Franziskanermönchen errichtet, kann auf eine rund 750-jährige Geschichte zurückblicken.',
                primaryAction: (isInverted) => {
                    <Button.View isInverted={isInverted}>
                        <Button.Label>Primary</Button.Label>
                    </Button.View>;
                },
                secondaryAction: (isInverted) => {
                    <Button.View isInverted={isInverted}>
                        <Button.Label>Secondary</Button.Label>
                    </Button.View>;
                },
            },
        ]}
        title="Haus St. Franziskus – lorem ipsum dolor sit amet"
        superTitle="Haus St. Franziskus"
        text="Mitten im historischen Altstadtkern von Überlingen liegt das Haus St. Franziskus. Das prachtvolle Gebäude, ursprünglich als Kloster von Franziskanermönchen errichtet, kann auf eine rund 750-jährige Geschichte zurückblicken."
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
    />
);

export const WithBackground: Story = () => (
    <CrossPromotion
        main={[
            {
                image: {
                    small: 'https://unsplash.it/610/457?image=400',
                    medium: 'https://unsplash.it/507/380?image=400',
                    large: 'https://unsplash.it/507/380?image=400',
                },
                title: 'Haus St. Franziskus – lorem ipsum dolor sit amet',
            },
        ]}
        aside={[
            {
                image: {
                    small: 'https://unsplash.it/610/457?image=400',
                    medium: 'https://unsplash.it/507/380?image=400',
                    large: 'https://unsplash.it/507/380?image=400',
                },
                title: 'Haus St. Franziskus – lorem ipsum dolor sit amet',
            },
            {
                image: {
                    small: 'https://unsplash.it/610/457?image=400',
                    medium: 'https://unsplash.it/507/380?image=400',
                    large: 'https://unsplash.it/507/380?image=400',
                },
                title: 'Haus St. Franziskus – lorem ipsum dolor sit amet',
            },
        ]}
        title="Haus St. Franziskus – lorem ipsum dolor sit amet"
        superTitle="Haus St. Franziskus"
        text="Mitten im historischen Altstadtkern von Überlingen liegt das Haus St. Franziskus. Das prachtvolle Gebäude, ursprünglich als Kloster von Franziskanermönchen errichtet, kann auf eine rund 750-jährige Geschichte zurückblicken."
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
        bgMode="splitted"
    />
);

export const Inverted: Story = () => (
    <CrossPromotion
        isInverted
        main={[
            {
                image: {
                    size: 'half',
                    small: 'https://unsplash.it/610/457?image=400',
                    medium: 'https://unsplash.it/507/380?image=400',
                    large: 'https://unsplash.it/507/380?image=400',
                },
                title: 'Haus St. Franziskus – lorem ipsum dolor sit amet',
            },
            {
                image: {
                    size: 'half',
                    small: 'https://unsplash.it/610/457?image=400',
                    medium: 'https://unsplash.it/507/380?image=400',
                    large: 'https://unsplash.it/507/380?image=400',
                },
                title: 'Haus St. Franziskus – lorem ipsum dolor sit amet',
            },
            {
                image: {
                    size: 'half',
                    small: 'https://unsplash.it/610/457?image=400',
                    medium: 'https://unsplash.it/507/380?image=400',
                    large: 'https://unsplash.it/507/380?image=400',
                },
                title: 'Haus St. Franziskus – lorem ipsum dolor sit amet',
            },
            {
                image: {
                    size: 'half',
                    small: 'https://unsplash.it/610/457?image=400',
                    medium: 'https://unsplash.it/507/380?image=400',
                    large: 'https://unsplash.it/507/380?image=400',
                },
                title: 'Haus St. Franziskus – lorem ipsum dolor sit amet',
            },
        ]}
        title="Haus St. Franziskus – lorem ipsum dolor sit amet"
        superTitle="Haus St. Franziskus"
        text="Mitten im historischen Altstadtkern von Überlingen liegt das Haus St. Franziskus. Das prachtvolle Gebäude, ursprünglich als Kloster von Franziskanermönchen errichtet, kann auf eine rund 750-jährige Geschichte zurückblicken."
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
    />
);
