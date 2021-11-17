import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import Poster, { PosterComponent } from 'components/sections/Poster';
import Button from 'components/buttons/Button';
import ButtonGhost from 'components/buttons/ButtonGhost';

export default {
    title: 'Sections/Poster',
    component: PosterComponent,
    parameters: {
        status: {
            type: 'stable',
        },
    },
} as Meta;

export const Default: Story = () => (
    <Poster
        image={{
            small: 'https://unsplash.it/1023/500?image=409',
            medium: 'https://unsplash.it/1023/500?image=409',
            large: 'https://unsplash.it/1439/511?image=409',
            xlarge: 'https://unsplash.it/2400/854?image=409',
        }}
    />
);

export const WithContent: Story = () => (
    <Poster
        superTitle="Haus St. Franziskus"
        title="Haus St. Franziskus – lorem ipsum dolor sit amet"
        text="Mitten im historischen Altstadtkern von Überlingen liegt das Haus St. Franziskus. Das prachtvolle Gebäude, ursprünglich als Kloster von Franziskanermönchen errichtet, kann auf eine rund 750-jährige Geschichte zurückblicken."
        image={{
            small: 'https://unsplash.it/1023/500?image=409',
            medium: 'https://unsplash.it/1023/500?image=409',
            large: 'https://unsplash.it/1439/511?image=409',
            xlarge: 'https://unsplash.it/2400/854?image=409',
        }}
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
    />
);

export const WithWrapper: Story = () => (
    <Poster
        superTitle="Haus St. Franziskus"
        title="Haus St. Franziskus – lorem ipsum dolor sit amet"
        text="Mitten im historischen Altstadtkern von Überlingen liegt das Haus St. Franziskus. Das prachtvolle Gebäude, ursprünglich als Kloster von Franziskanermönchen errichtet, kann auf eine rund 750-jährige Geschichte zurückblicken."
        image={{
            small: 'https://unsplash.it/1023/500?image=409',
            medium: 'https://unsplash.it/1023/500?image=409',
            large: 'https://unsplash.it/1439/511?image=409',
            xlarge: 'https://unsplash.it/2400/854?image=409',
        }}
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
        hasWrapper
    />
);
