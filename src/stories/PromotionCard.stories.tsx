import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import PromotionCard from 'components/blocks/PromotionCard';
import Button from 'components/buttons/Button';
import ButtonGhost from 'components/buttons/ButtonGhost';

export default {
    title: 'Blocks/PromotionCard',
    component: PromotionCard,
} as Meta;

export const Default: Story = () => (
    <PromotionCard
        superTitle="Haus St. Franziskus"
        title="Haus St. Franziskus – lorem ipsum dolor sit amet"
        image={{
            small: 'https://unsplash.it/338/253?image=409',
            medium: 'https://unsplash.it/722/541?image=409',
            large: 'https://unsplash.it/958/718?image=409',
        }}
    />
);

export const WithText: Story = () => (
    <PromotionCard
        superTitle="Haus St. Franziskus"
        title="Haus St. Franziskus – lorem ipsum dolor sit amet"
        text="Mitten im historischen Altstadtkern von Überlingen liegt das Haus St. Franziskus. Das prachtvolle Gebäude, ursprünglich als Kloster von Franziskanermönchen errichtet, kann auf eine rund 750-jährige Geschichte zurückblicken."
        image={{
            small: 'https://unsplash.it/338/253?image=409',
            medium: 'https://unsplash.it/722/541?image=409',
            large: 'https://unsplash.it/958/718?image=409',
        }}
    />
);

export const WithActions: Story = () => (
    <PromotionCard
        superTitle="Haus St. Franziskus"
        title="Haus St. Franziskus – lorem ipsum dolor sit amet"
        text="Mitten im historischen Altstadtkern von Überlingen liegt das Haus St. Franziskus. Das prachtvolle Gebäude, ursprünglich als Kloster von Franziskanermönchen errichtet, kann auf eine rund 750-jährige Geschichte zurückblicken."
        image={{
            small: 'https://unsplash.it/338/253?image=409',
            medium: 'https://unsplash.it/722/541?image=409',
            large: 'https://unsplash.it/958/718?image=409',
        }}
        primaryAction={
            <Button.View isInverted>
                <Button.Label>Primary</Button.Label>
            </Button.View>
        }
        secondaryAction={
            <ButtonGhost.View isInverted>
                <ButtonGhost.Label>Secondary</ButtonGhost.Label>
            </ButtonGhost.View>
        }
    />
);

export const WithLink: Story = () => (
    <PromotionCard
        superTitle="Haus St. Franziskus"
        title="Haus St. Franziskus – lorem ipsum dolor sit amet"
        text="Mitten im historischen Altstadtkern von Überlingen liegt das Haus St. Franziskus. Das prachtvolle Gebäude, ursprünglich als Kloster von Franziskanermönchen errichtet, kann auf eine rund 750-jährige Geschichte zurückblicken."
        image={{
            small: 'https://unsplash.it/338/253?image=409',
            medium: 'https://unsplash.it/722/541?image=409',
            large: 'https://unsplash.it/958/718?image=409',
        }}
        primaryAction={
            <Button.View isInverted>
                <Button.Label>Primary</Button.Label>
            </Button.View>
        }
        secondaryAction={
            <ButtonGhost.View isInverted>
                <ButtonGhost.Label>Secondary</ButtonGhost.Label>
            </ButtonGhost.View>
        }
        href="#0"
    />
);

export const WithClickHandler: Story = () => (
    <PromotionCard
        superTitle="Haus St. Franziskus"
        title="Haus St. Franziskus – lorem ipsum dolor sit amet"
        text="Mitten im historischen Altstadtkern von Überlingen liegt das Haus St. Franziskus. Das prachtvolle Gebäude, ursprünglich als Kloster von Franziskanermönchen errichtet, kann auf eine rund 750-jährige Geschichte zurückblicken."
        image={{
            small: 'https://unsplash.it/338/253?image=409',
            medium: 'https://unsplash.it/722/541?image=409',
            large: 'https://unsplash.it/958/718?image=409',
        }}
        primaryAction={
            <Button.View isInverted>
                <Button.Label>Primary</Button.Label>
            </Button.View>
        }
        secondaryAction={
            <ButtonGhost.View isInverted>
                <ButtonGhost.Label>Secondary</ButtonGhost.Label>
            </ButtonGhost.View>
        }
        onClick={() => console.log('click')}
    />
);
