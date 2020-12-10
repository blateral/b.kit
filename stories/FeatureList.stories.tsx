/* eslint-disable react/display-name */
import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import FeatureList from '../src/components/sections/FeatureList';
import Button from '../src/components/buttons/Button';

const actions = {
    primaryAction: (isInverted) => (
        <Button.View isInverted={isInverted}>
            <Button.Label>Primary</Button.Label>
        </Button.View>
    ),
    secondaryAction: (isInverted) => (
        <Button.View type="ghost" isInverted={isInverted}>
            <Button.Label>Secondary</Button.Label>
        </Button.View>
    ),
};

const Features = [
    {
        image: {
            small: 'https://unsplash.it/502/376?image=700',
            medium: 'https://unsplash.it/600/600?image=700',
            large: 'https://unsplash.it/314/314?image=700',
            xlarge: 'https://unsplash.it/453/453?image=700',
        },
        title:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy',
        description: 'Name/ Place/Position/ Telefon/Date',
        intro:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
        text:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
        ...actions,
    },
    {
        image: {
            small: 'https://unsplash.it/502/376?image=701',
            medium: 'https://unsplash.it/600/600?image=701',
            large: 'https://unsplash.it/314/314?image=701',
            xlarge: 'https://unsplash.it/453/453?image=701',
        },
        title:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy',
        description: 'Name/ Place/Position/ Telefon/Date',
        intro:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
        text:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
        ...actions,
    },
    {
        image: {
            small: 'https://unsplash.it/502/376?image=702',
            medium: 'https://unsplash.it/600/600?image=702',
            large: 'https://unsplash.it/314/314?image=702',
            xlarge: 'https://unsplash.it/453/453?image=702',
        },
        title:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy',
        description: 'Name/ Place/Position/ Telefon/Date',
        intro:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
        text:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
        ...actions,
    },
    {
        image: {
            small: 'https://unsplash.it/502/376?image=703',
            medium: 'https://unsplash.it/600/600?image=703',
            large: 'https://unsplash.it/314/314?image=703',
            xlarge: 'https://unsplash.it/453/453?image=703',
        },
        title:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy',
        description: 'Name/ Place/Position/ Telefon/Date',
        intro:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
        text:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
        ...actions,
    },
];

export default {
    title: 'Sections/FeatureList',
    component: FeatureList,
} as Meta;

export const Default: Story = () => <FeatureList features={Features} />;

export const WithBackground: Story = () => (
    <FeatureList bgMode="full" features={Features} />
);

export const WithSplittedBackground: Story = () => (
    <FeatureList bgMode="splitted" features={Features} />
);

export const Inverted: Story = () => (
    <FeatureList isInverted bgMode="splitted" features={Features} />
);
