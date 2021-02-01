import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import Poster from 'components/sections/Poster';
import Button from 'components/buttons/Button';

export default {
    title: 'Sections/Poster',
    component: Poster,
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
        primaryAction={
            <Button.View isInverted>
                <Button.Label>Primary</Button.Label>
            </Button.View>
        }
        secondaryAction={
            <Button.View type="ghost" isInverted>
                <Button.Label>Secondary</Button.Label>
            </Button.View>
        }
    />
);
