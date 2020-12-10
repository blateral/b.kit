/* eslint-disable react/display-name */
import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import FeatureCarousel from '../src/components/sections/carousel/FeatureCarousel';
import Button from '../src/components/buttons/Button';
import ArrowRight from '../src/components/base/icons/ArrowRight';

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

const features = [
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
    title: 'Sections/Carousels/FeatureCarousel',
    component: FeatureCarousel,
} as Meta;

export const Default: Story = () => <FeatureCarousel features={features} />;

export const Inverted: Story = () => (
    <FeatureCarousel isInverted bgMode="full" features={features} />
);

export const WithBackground: Story = () => (
    <FeatureCarousel bgMode="full" features={features} />
);

export const WithHalfBackground: Story = () => (
    <FeatureCarousel bgMode="splitted" features={features} />
);

export const WithHandlers: Story = () => (
    <FeatureCarousel
        bgMode="full"
        features={features}
        onInit={(steps) => console.log('carousel has ' + steps + ' steps')}
        beforeChange={(current) => console.log('before step: ' + current)}
        afterChange={(current) => console.log('after step: ' + current)}
    />
);

export const WithCustomControls: Story = () => (
    <FeatureCarousel
        bgMode="full"
        features={features}
        controlNext={() => <ArrowRight />}
        controlPrev={() => <ArrowRight />}
    />
);

export const WithCustomDots: Story = () => (
    <FeatureCarousel
        bgMode="full"
        features={features}
        dot={(isInverted, isActive) => (
            <ArrowRight iconColor={isActive ? 'red' : 'grey'} />
        )}
    />
);
