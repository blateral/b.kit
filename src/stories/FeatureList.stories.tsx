/* eslint-disable react/display-name */
import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import FeatureList from 'components/sections/FeatureList';
import Button from 'components/buttons/Button';
import { FeatureProps } from 'components/blocks/Feature';
import { generateItemList } from 'utils/storyHelpers';

const actions = {
    primaryAction: (isInverted?: boolean) => (
        <Button.View isInverted={isInverted}>
            <Button.Label>Primary</Button.Label>
        </Button.View>
    ),
    secondaryAction: (isInverted?: boolean) => (
        <Button.View type="ghost" isInverted={isInverted}>
            <Button.Label>Secondary</Button.Label>
        </Button.View>
    ),
};

const exampleFeature: FeatureProps = {
    title:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy',
    description: 'Name/ Place/Position/ Telefon/Date',
    intro:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
    text:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
    ...actions,
};

const exampleFeaturesUneven = generateItemList<FeatureProps>(
    exampleFeature,
    5,
    (item, i) => ({
        ...item,
        image: {
            small: 'https://unsplash.it/502/376?image=70' + i,
            medium: 'https://unsplash.it/600/600?image=70' + i,
            large: 'https://unsplash.it/413/413?image=70' + i,
            xlarge: 'https://unsplash.it/592/592?image=70' + i,
        },
    })
);

const exampleFeaturesEven = generateItemList<FeatureProps>(
    exampleFeature,
    4,
    (item, i) => ({
        ...item,
        image: {
            small: 'https://unsplash.it/502/376?image=70' + i,
            medium: 'https://unsplash.it/600/600?image=70' + i,
            large: 'https://unsplash.it/413/413?image=70' + i,
            xlarge: 'https://unsplash.it/592/592?image=70' + i,
        },
    })
);

export default {
    title: 'Sections/FeatureList',
    component: FeatureList,
} as Meta;

export const Default: Story = () => (
    <FeatureList
        features={exampleFeaturesUneven.map((item, i) => ({
            ...item,
            image: {
                small: 'https://unsplash.it/502/376?image=70' + i,
                medium: 'https://unsplash.it/600/600?image=70' + i,
                large: 'https://unsplash.it/413/413?image=70' + i,
                xlarge: 'https://unsplash.it/592/592?image=70' + i,
            },
        }))}
    />
);

export const WithIntro: Story = () => (
    <FeatureList
        features={exampleFeaturesUneven.map((item, i) => ({
            ...item,
            image: {
                small: 'https://unsplash.it/502/376?image=70' + i,
                medium: 'https://unsplash.it/600/600?image=70' + i,
                large: 'https://unsplash.it/413/413?image=70' + i,
                xlarge: 'https://unsplash.it/592/592?image=70' + i,
            },
        }))}
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
        features={exampleFeaturesEven.map((item, i) => ({
            ...item,
            image: {
                small: 'https://unsplash.it/502/376?image=70' + i,
                medium: 'https://unsplash.it/600/600?image=70' + i,
                large: 'https://unsplash.it/413/413?image=70' + i,
                xlarge: 'https://unsplash.it/592/592?image=70' + i,
            },
        }))}
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
        features={exampleFeaturesEven.map((item, i) => ({
            ...item,
            image: {
                small: 'https://unsplash.it/502/376?image=70' + i,
                medium: 'https://unsplash.it/600/600?image=70' + i,
                large: 'https://unsplash.it/413/413?image=70' + i,
                xlarge: 'https://unsplash.it/592/592?image=70' + i,
            },
        }))}
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
        features={exampleFeaturesEven.map((item, i) => ({
            ...item,
            image: {
                small: 'https://unsplash.it/502/376?image=70' + i,
                medium: 'https://unsplash.it/600/600?image=70' + i,
                large: 'https://unsplash.it/413/413?image=70' + i,
                xlarge: 'https://unsplash.it/592/592?image=70' + i,
            },
        }))}
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
        features={exampleFeaturesEven.map((item, i) => ({
            ...item,
            image: {
                small: 'https://unsplash.it/502/376?image=70' + i,
                medium: 'https://unsplash.it/600/600?image=70' + i,
                large: 'https://unsplash.it/413/413?image=70' + i,
                xlarge: 'https://unsplash.it/592/592?image=70' + i,
            },
        }))}
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
