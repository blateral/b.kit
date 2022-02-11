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
            type: 'preview',
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
        superTitle="Lorem Ipsum"
        title="Lorem ipsum dolor sit amet"
        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
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
        superTitle="Lorem Ipsum"
        title="Lorem ipsum dolor sit amet"
        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
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
