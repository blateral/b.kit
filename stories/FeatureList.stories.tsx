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

const Feature = {
    title:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy',
    description: 'Name/ Place/Position/ Telefon/Date',
    intro:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
    text:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
    ...actions,
};

const FeaturesUneven = [
    {
        ...Feature,
        image: {
            small: 'https://unsplash.it/502/376?image=700',
            medium: 'https://unsplash.it/600/600?image=700',
            large: 'https://unsplash.it/413/413?image=700',
            xlarge: 'https://unsplash.it/592/592?image=700',
        },
    },
    {
        ...Feature,
        image: {
            small: 'https://unsplash.it/502/376?image=701',
            medium: 'https://unsplash.it/600/600?image=701',
            large: 'https://unsplash.it/413/413?image=701',
            xlarge: 'https://unsplash.it/592/592?image=701',
        },
    },
    {
        ...Feature,
        image: {
            small: 'https://unsplash.it/502/376?image=702',
            medium: 'https://unsplash.it/600/600?image=702',
            large: 'https://unsplash.it/413/413?image=702',
            xlarge: 'https://unsplash.it/592/592?image=702',
        },
    },
    {
        ...Feature,
        image: {
            small: 'https://unsplash.it/502/376?image=703',
            medium: 'https://unsplash.it/600/600?image=703',
            large: 'https://unsplash.it/413/413?image=703',
            xlarge: 'https://unsplash.it/592/592?image=703',
        },
    },
    {
        ...Feature,
        image: {
            small: 'https://unsplash.it/502/376?image=704',
            medium: 'https://unsplash.it/600/600?image=704',
            large: 'https://unsplash.it/413/413?image=704',
            xlarge: 'https://unsplash.it/592/592?image=704',
        },
    },
];

const FeaturesEven = [
    {
        ...Feature,
        image: {
            small: 'https://unsplash.it/502/376?image=700',
            medium: 'https://unsplash.it/600/600?image=700',
            large: 'https://unsplash.it/413/413?image=700',
            xlarge: 'https://unsplash.it/592/592?image=700',
        },
    },
    {
        ...Feature,
        image: {
            small: 'https://unsplash.it/502/376?image=701',
            medium: 'https://unsplash.it/600/600?image=701',
            large: 'https://unsplash.it/413/413?image=701',
            xlarge: 'https://unsplash.it/592/592?image=701',
        },
    },
    {
        ...Feature,
        image: {
            small: 'https://unsplash.it/502/376?image=702',
            medium: 'https://unsplash.it/600/600?image=702',
            large: 'https://unsplash.it/413/413?image=702',
            xlarge: 'https://unsplash.it/592/592?image=702',
        },
    },
    {
        ...Feature,
        image: {
            small: 'https://unsplash.it/502/376?image=703',
            medium: 'https://unsplash.it/600/600?image=703',
            large: 'https://unsplash.it/413/413?image=703',
            xlarge: 'https://unsplash.it/592/592?image=703',
        },
    },
];

export default {
    title: 'Sections/FeatureList',
    component: FeatureList,
} as Meta;

export const Default: Story = () => <FeatureList features={FeaturesUneven} />;

export const WithIntro: Story = () => (
    <FeatureList
        features={FeaturesUneven}
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

export const EvenAmountOfFeatures: Story = () => (
    <FeatureList
        features={FeaturesEven}
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
    <FeatureList
        bgMode="full"
        features={FeaturesEven}
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

export const WithSplittedBackground: Story = () => (
    <FeatureList
        bgMode="splitted"
        features={FeaturesEven}
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

export const Inverted: Story = () => (
    <FeatureList
        isInverted
        bgMode="splitted"
        features={FeaturesEven}
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
