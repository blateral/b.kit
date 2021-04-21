/* eslint-disable react/display-name */
import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import FeatureList from 'components/sections/FeatureList';
import Button from 'components/buttons/Button';
import { FeatureProps } from 'components/blocks/Feature';
import { generateItemList } from 'utils/storyHelpers';
import ButtonGhost from 'components/buttons/ButtonGhost';

const actions = {
    primaryAction: (isInverted?: boolean) => (
        <Button.View isInverted={isInverted}>
            <Button.Label>Primary</Button.Label>
        </Button.View>
    ),
    secondaryAction: (isInverted?: boolean) => (
        <ButtonGhost.View isInverted={isInverted}>
            <ButtonGhost.Label>Secondary</ButtonGhost.Label>
        </ButtonGhost.View>
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
            small: 'https://unsplash.it/599/450?image=70' + i,
            medium: 'https://unsplash.it/789/789?image=70' + i,
            large: 'https://unsplash.it/591/591?image=70' + i,
            xlarge: 'https://unsplash.it/592/592?image=70' + i,
            coverSpace: true,
        },
    })
);

const exampleFeaturesEven = generateItemList<FeatureProps>(
    exampleFeature,
    4,
    (item, i) => ({
        ...item,
        image: {
            small: 'https://unsplash.it/599/450?image=70' + i,
            medium: 'https://unsplash.it/789/789?image=70' + i,
            large: 'https://unsplash.it/591/591?image=70' + i,
            xlarge: 'https://unsplash.it/592/592?image=70' + i,
            coverSpace: true,
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
                small: 'https://unsplash.it/599/450?image=70' + i,
                medium: 'https://unsplash.it/789/789?image=70' + i,
                large: 'https://unsplash.it/591/591?image=70' + i,
                xlarge: 'https://unsplash.it/592/592?image=70' + i,
                coverSpace: true,
            },
        }))}
    />
);

export const WithIntro: Story = () => (
    <FeatureList
        features={exampleFeaturesUneven.map((item, i) => ({
            ...item,
            image: {
                small: 'https://unsplash.it/599/450?image=70' + i,
                medium: 'https://unsplash.it/789/789?image=70' + i,
                large: 'https://unsplash.it/591/591?image=70' + i,
                xlarge: 'https://unsplash.it/592/592?image=70' + i,
                coverSpace: true,
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
        secondaryAction={(isInverted?: boolean) => (
            <ButtonGhost.View isInverted={isInverted}>
                <ButtonGhost.Label>Secondary</ButtonGhost.Label>
            </ButtonGhost.View>
        )}
    />
);

export const ImgRatioA: Story = () => (
    <FeatureList
        features={exampleFeaturesUneven.map((item, i) => ({
            ...item,
            image: {
                small: 'https://unsplash.it/599/450?image=70' + i,
                medium: 'https://unsplash.it/688/593?image=70' + i,
                large: 'https://unsplash.it/591/444?image=70' + i,
                xlarge: 'https://unsplash.it/592/445?image=70' + i,
                coverSpace: true,
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
        secondaryAction={(isInverted?: boolean) => (
            <ButtonGhost.View isInverted={isInverted}>
                <ButtonGhost.Label>Secondary</ButtonGhost.Label>
            </ButtonGhost.View>
        )}
    />
);
ImgRatioA.storyName = 'Image ratio 4:3';

export const ImgRatioB: Story = () => (
    <FeatureList
        features={exampleFeaturesUneven.map((item, i) => ({
            ...item,
            image: {
                small: 'https://unsplash.it/599/450?image=70' + i,
                medium: 'https://unsplash.it/791/1070?image=70' + i,
                large: 'https://unsplash.it/591/801?image=70' + i,
                xlarge: 'https://unsplash.it/592/802?image=70' + i,
                coverSpace: true,
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
        secondaryAction={(isInverted?: boolean) => (
            <ButtonGhost.View isInverted={isInverted}>
                <ButtonGhost.Label>Secondary</ButtonGhost.Label>
            </ButtonGhost.View>
        )}
    />
);
ImgRatioB.storyName = 'Image ratio 3:4';

export const EvenAmountOfFeatures: Story = () => (
    <FeatureList
        features={exampleFeaturesEven.map((item, i) => ({
            ...item,
            image: {
                small: 'https://unsplash.it/599/450?image=70' + i,
                medium: 'https://unsplash.it/789/789?image=70' + i,
                large: 'https://unsplash.it/591/591?image=70' + i,
                xlarge: 'https://unsplash.it/592/592?image=70' + i,
                coverSpace: true,
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
        secondaryAction={(isInverted?: boolean) => (
            <ButtonGhost.View isInverted={isInverted}>
                <ButtonGhost.Label>Secondary</ButtonGhost.Label>
            </ButtonGhost.View>
        )}
    />
);

export const WithBackground: Story = () => (
    <FeatureList
        bgMode="full"
        features={exampleFeaturesEven.map((item, i) => ({
            ...item,
            image: {
                small: 'https://unsplash.it/599/450?image=70' + i,
                medium: 'https://unsplash.it/789/789?image=70' + i,
                large: 'https://unsplash.it/591/591?image=70' + i,
                xlarge: 'https://unsplash.it/592/592?image=70' + i,
                coverSpace: true,
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
        secondaryAction={(isInverted?: boolean) => (
            <ButtonGhost.View isInverted={isInverted}>
                <ButtonGhost.Label>Secondary</ButtonGhost.Label>
            </ButtonGhost.View>
        )}
    />
);

export const WithSplittedBackground: Story = () => (
    <FeatureList
        bgMode="splitted"
        features={exampleFeaturesEven.map((item, i) => ({
            ...item,
            image: {
                small: 'https://unsplash.it/599/450?image=70' + i,
                medium: 'https://unsplash.it/789/789?image=70' + i,
                large: 'https://unsplash.it/591/591?image=70' + i,
                xlarge: 'https://unsplash.it/592/592?image=70' + i,
                coverSpace: true,
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
        secondaryAction={(isInverted?: boolean) => (
            <ButtonGhost.View isInverted={isInverted}>
                <ButtonGhost.Label>Secondary</ButtonGhost.Label>
            </ButtonGhost.View>
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
                small: 'https://unsplash.it/599/450?image=70' + i,
                medium: 'https://unsplash.it/789/789?image=70' + i,
                large: 'https://unsplash.it/591/591?image=70' + i,
                xlarge: 'https://unsplash.it/592/592?image=70' + i,
                coverSpace: true,
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
        secondaryAction={(isInverted?: boolean) => (
            <ButtonGhost.View isInverted={isInverted}>
                <ButtonGhost.Label>Secondary</ButtonGhost.Label>
            </ButtonGhost.View>
        )}
    />
);
