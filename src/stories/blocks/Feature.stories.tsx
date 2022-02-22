import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import Feature from 'components/blocks/Feature';
import Button from 'components/buttons/Button';
import ButtonGhost from 'components/buttons/ButtonGhost';

export default {
    title: 'Blocks/Feature',
    component: Feature,
    parameters: {
        status: {
            type: 'preview',
        },
    },
} as Meta;

export const Default: Story = () => (
    <Feature
        image={{
            small: 'https://unsplash.it/502/376?image=703',
            medium: 'https://unsplash.it/600/600?image=703',
            large: 'https://unsplash.it/314/314?image=703',
            xlarge: 'https://unsplash.it/453/453?image=703',
        }}
        title="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy"
        intro="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
    />
);

export const WithText: Story = () => (
    <Feature
        image={{
            small: 'https://unsplash.it/502/376?image=703',
            medium: 'https://unsplash.it/600/600?image=703',
            large: 'https://unsplash.it/314/314?image=703',
            xlarge: 'https://unsplash.it/453/453?image=703',
        }}
        title="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy"
        intro="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. "
    />
);

export const WithDescription: Story = () => (
    <Feature
        image={{
            small: 'https://unsplash.it/502/376?image=703',
            medium: 'https://unsplash.it/600/600?image=703',
            large: 'https://unsplash.it/314/314?image=703',
            xlarge: 'https://unsplash.it/453/453?image=703',
        }}
        title="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy"
        description="Name/ Place/Position/ Telefon/Date"
        intro="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. "
    />
);

export const WithActions: Story = () => (
    <Feature
        image={{
            small: 'https://unsplash.it/502/376?image=703',
            medium: 'https://unsplash.it/600/600?image=703',
            large: 'https://unsplash.it/314/314?image=703',
            xlarge: 'https://unsplash.it/453/453?image=703',
        }}
        title="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy"
        description="Name/ Place/Position/ Telefon/Date"
        intro="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. "
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

export const Centered: Story = () => (
    <Feature
        isCentered
        image={{
            small: 'https://unsplash.it/502/376?image=703',
            medium: 'https://unsplash.it/600/600?image=703',
            large: 'https://unsplash.it/314/314?image=703',
            xlarge: 'https://unsplash.it/453/453?image=703',
        }}
        title="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy"
        description="Name/ Place/Position/ Telefon/Date"
        intro="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. "
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

export const Inverted: Story = () => (
    <Feature
        isInverted
        image={{
            small: 'https://unsplash.it/502/376?image=703',
            medium: 'https://unsplash.it/600/600?image=703',
            large: 'https://unsplash.it/314/314?image=703',
            xlarge: 'https://unsplash.it/453/453?image=703',
        }}
        title="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy"
        description="Name/ Place/Position/ Telefon/Date"
        intro="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. "
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

Inverted.parameters = {
    backgrounds: {
        default: 'inverted',
        values: [{ name: 'inverted', value: 'black' }],
    },
};
