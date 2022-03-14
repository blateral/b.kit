import React from 'react';
import { Meta, Story } from '@storybook/react';
import Poster, { PosterComponent } from 'components/sections/Poster';
import Button from 'components/buttons/Button';
import ButtonGhost from 'components/buttons/ButtonGhost';

export default {
    title: 'Sections/Poster',
    component: PosterComponent,
    parameters: {
        status: {
            type: ['preview', 'qsReady'],
        },
    },
} as Meta;

export const Default: Story = () => (
    <Poster
        image={{
            small: 'https://unsplash.it/640/550?image=507',
            medium: 'https://unsplash.it/832/550?image=507',
            semilarge: 'https://unsplash.it/1024/550?image=507',
            large: 'https://unsplash.it/1440/550?image=507',
            xlarge: 'https://unsplash.it/2400/550?image=507',
            alt: '',
        }}
    />
);

export const WithContent: Story = () => (
    <Poster
        superTitle="Lorem Ipsum"
        title="Lorem ipsum dolor sit amet"
        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
        image={{
            small: 'https://unsplash.it/640/550?image=507',
            medium: 'https://unsplash.it/832/550?image=507',
            semilarge: 'https://unsplash.it/1024/550?image=507',
            large: 'https://unsplash.it/1440/550?image=507',
            xlarge: 'https://unsplash.it/2400/550?image=507',
            alt: '',
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

export const FullWidth: Story = () => (
    <Poster
        width="full"
        superTitle="Lorem Ipsum"
        title="Lorem ipsum dolor sit amet"
        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
        image={{
            small: 'https://unsplash.it/640/550?image=507',
            medium: 'https://unsplash.it/832/550?image=507',
            semilarge: 'https://unsplash.it/1024/550?image=507',
            large: 'https://unsplash.it/1440/550?image=507',
            xlarge: 'https://unsplash.it/2400/550?image=507',
            alt: '',
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
