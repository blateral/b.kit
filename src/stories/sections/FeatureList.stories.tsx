/* eslint-disable react/display-name */
import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import FeatureList, {
    FeatureListComponent,
} from 'components/sections/FeatureList';
import Button from 'components/buttons/Button';
import { FeatureProps } from 'components/blocks/Feature';
import { generateItemList } from 'utils/storyHelpers';

const actions = {
    action: (isInverted?: boolean) => (
        <Button.View href="#test" isInverted={isInverted}>
            <Button.Label>Primary</Button.Label>
        </Button.View>
    ),
};

const exampleFeature: FeatureProps = {
    title: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy',
    description: 'Name/ Place/Position/ Telefon/Date',
    intro: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
    link: { href: '#test' },
    ...actions,
};

const exampleFeaturesUneven = generateItemList<FeatureProps>(
    exampleFeature,
    5,
    (item, i) => ({
        ...item,
        link: { href: '#card-' + i },
        image: {
            small: 'https://unsplash.it/640/640?image=70' + i,
            medium: 'https://unsplash.it/832/832?image=70' + i,
            semilarge: 'https://unsplash.it/600/600?image=70' + i,
        },
    })
);

const exampleFeaturesEven = generateItemList<FeatureProps>(
    exampleFeature,
    4,
    (item, i) => ({
        ...item,
        link: { href: '#card-' + i },
        image: {
            small: 'https://unsplash.it/640/640?image=70' + i,
            medium: 'https://unsplash.it/832/832?image=70' + i,
            semilarge: 'https://unsplash.it/600/600?image=70' + i,
        },
    })
);

export default {
    title: 'Sections/FeatureList',
    component: FeatureListComponent,
    parameters: {
        status: {
            type: ['preview', 'qsReady', 'releaseCandidate'],
        },
    },
} as Meta;

export const Default: Story = () => (
    <FeatureList
        features={exampleFeaturesUneven.map((item, i) => ({
            ...item,
            image: {
                small: 'https://unsplash.it/640/640?image=70' + i,
                medium: 'https://unsplash.it/832/832?image=70' + i,
                semilarge: 'https://unsplash.it/600/600?image=70' + i,
                ratios: {
                    small: { w: 640, h: 640 },
                },
            },
        }))}
    />
);

export const ImgRatioA: Story = () => (
    <FeatureList
        features={exampleFeaturesUneven.map((item, i) => ({
            ...item,
            image: {
                small: 'https://unsplash.it/640/480?image=70' + i,
                medium: 'https://unsplash.it/832/624?image=70' + i,
                semilarge: 'https://unsplash.it/600/450?image=70' + i,
                ratios: {
                    small: { w: 640, h: 480 },
                },
            },
        }))}
    />
);
ImgRatioA.storyName = 'Image ratio 4:3';

export const ImgRatioB: Story = () => (
    <FeatureList
        features={exampleFeaturesUneven.map((item, i) => ({
            ...item,
            image: {
                small: 'https://unsplash.it/640/854?image=70' + i,
                medium: 'https://unsplash.it/832/1110?image=70' + i,
                semilarge: 'https://unsplash.it/600/801?image=70' + i,
                ratios: {
                    small: { w: 640, h: 854 },
                },
            },
        }))}
    />
);
ImgRatioB.storyName = 'Image ratio 3:4';

export const EvenAmountOfFeatures: Story = () => (
    <FeatureList
        features={exampleFeaturesEven.map((item, i) => ({
            ...item,
            image: {
                small: 'https://unsplash.it/640/640?image=70' + i,
                medium: 'https://unsplash.it/832/832?image=70' + i,
                semilarge: 'https://unsplash.it/600/600?image=70' + i,
                ratios: {
                    small: { w: 640, h: 640 },
                },
            },
        }))}
    />
);

export const DefinedItemsPerRow: Story = () => (
    <FeatureList
        columns={3}
        features={exampleFeaturesEven.map((item, i) => ({
            ...item,
            image: {
                small: 'https://unsplash.it/640/640?image=70' + i,
                medium: 'https://unsplash.it/832/832?image=70' + i,
                semilarge: 'https://unsplash.it/600/600?image=70' + i,
                ratios: {
                    small: { w: 640, h: 640 },
                },
            },
        }))}
    />
);

export const ThreeItemsGridWithOneItem: Story = () => (
    <FeatureList
        columns={3}
        features={exampleFeaturesEven.slice(0, 1).map((item, i) => ({
            ...item,
            image: {
                small: 'https://unsplash.it/640/640?image=70' + i,
                medium: 'https://unsplash.it/832/832?image=70' + i,
                semilarge: 'https://unsplash.it/600/600?image=70' + i,
                ratios: {
                    small: { w: 640, h: 640 },
                },
            },
        }))}
    />
);

export const ThreeItemsGridWithTwoItems: Story = () => (
    <FeatureList
        columns={3}
        features={exampleFeaturesEven.slice(0, 2).map((item, i) => ({
            ...item,
            image: {
                small: 'https://unsplash.it/640/640?image=70' + i,
                medium: 'https://unsplash.it/832/832?image=70' + i,
                semilarge: 'https://unsplash.it/600/600?image=70' + i,
                ratios: {
                    small: { w: 640, h: 640 },
                },
            },
        }))}
    />
);

export const TwoItemsGridWithOneItem: Story = () => (
    <FeatureList
        columns={2}
        features={exampleFeaturesEven.slice(0, 1).map((item, i) => ({
            ...item,
            image: {
                small: 'https://unsplash.it/640/640?image=70' + i,
                medium: 'https://unsplash.it/832/832?image=70' + i,
                semilarge: 'https://unsplash.it/600/600?image=70' + i,
                ratios: {
                    small: { w: 640, h: 640 },
                },
            },
        }))}
    />
);

export const TwoItemsGridWithTwoItems: Story = () => (
    <FeatureList
        columns={2}
        features={exampleFeaturesEven.slice(0, 2).map((item, i) => ({
            ...item,
            image: {
                small: 'https://unsplash.it/640/640?image=70' + i,
                medium: 'https://unsplash.it/832/832?image=70' + i,
                semilarge: 'https://unsplash.it/600/600?image=70' + i,
                ratios: {
                    small: { w: 640, h: 640 },
                },
            },
        }))}
    />
);

export const WithCenteredItems: Story = () => (
    <FeatureList
        isCentered
        features={exampleFeaturesEven.map((item, i) => ({
            ...item,
            image: {
                small: 'https://unsplash.it/640/640?image=70' + i,
                medium: 'https://unsplash.it/832/832?image=70' + i,
                semilarge: 'https://unsplash.it/600/600?image=70' + i,
                ratios: {
                    small: { w: 640, h: 640 },
                },
            },
        }))}
    />
);

export const WithBackground: Story = () => (
    <FeatureList
        bgMode="full"
        features={exampleFeaturesEven.map((item, i) => ({
            ...item,
            image: {
                small: 'https://unsplash.it/640/640?image=70' + i,
                medium: 'https://unsplash.it/832/832?image=70' + i,
                semilarge: 'https://unsplash.it/600/600?image=70' + i,
                ratios: {
                    small: { w: 640, h: 640 },
                },
            },
        }))}
    />
);

export const WithSplittedBackground: Story = () => (
    <FeatureList
        bgMode="splitted"
        features={exampleFeaturesEven.map((item, i) => ({
            ...item,
            image: {
                small: 'https://unsplash.it/640/640?image=70' + i,
                medium: 'https://unsplash.it/832/832?image=70' + i,
                semilarge: 'https://unsplash.it/600/600?image=70' + i,
                ratios: {
                    small: { w: 640, h: 640 },
                },
            },
        }))}
    />
);

export const Inverted: Story = () => (
    <FeatureList
        bgMode="inverted"
        features={exampleFeaturesEven.map((item, i) => ({
            ...item,
            image: {
                small: 'https://unsplash.it/640/640?image=70' + i,
                medium: 'https://unsplash.it/832/832?image=70' + i,
                semilarge: 'https://unsplash.it/600/600?image=70' + i,
                ratios: {
                    small: { w: 640, h: 640 },
                },
            },
        }))}
    />
);
