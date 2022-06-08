/* eslint-disable react/display-name */
import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import FeatureList, {
    FeatureListComponent,
} from 'components/sections/FeatureList';
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
    title: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy',
    description: 'Name/ Place/Position/ Telefon/Date',
    intro: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
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
        },
    })
);

export default {
    title: 'Sections/FeatureList',
    component: FeatureListComponent,
    parameters: {
        status: {
            type: 'preview',
        },
    },
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
                ratios: {
                    small: { w: 599, h: 450 },
                    medium: { w: 789, h: 789 },
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
                small: 'https://unsplash.it/599/450?image=70' + i,
                medium: 'https://unsplash.it/688/593?image=70' + i,
                large: 'https://unsplash.it/591/444?image=70' + i,
                xlarge: 'https://unsplash.it/592/445?image=70' + i,
                ratios: {
                    small: { w: 599, h: 450 },
                    medium: { w: 688, h: 593 },
                    large: { w: 591, h: 444 },
                    xlarge: { w: 592, h: 445 },
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
                small: 'https://unsplash.it/599/450?image=70' + i,
                medium: 'https://unsplash.it/791/1070?image=70' + i,
                large: 'https://unsplash.it/591/801?image=70' + i,
                xlarge: 'https://unsplash.it/592/802?image=70' + i,
                ratios: {
                    small: { w: 599, h: 450 },
                    medium: { w: 791, h: 1070 },
                    large: { w: 591, h: 801 },
                    xlarge: { w: 592, h: 802 },
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
                small: 'https://unsplash.it/599/450?image=70' + i,
                medium: 'https://unsplash.it/789/789?image=70' + i,
                large: 'https://unsplash.it/591/591?image=70' + i,
                xlarge: 'https://unsplash.it/592/592?image=70' + i,
                ratios: {
                    small: { w: 599, h: 450 },
                    medium: { w: 789, h: 789 },
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
                small: 'https://unsplash.it/599/450?image=70' + i,
                medium: 'https://unsplash.it/789/789?image=70' + i,
                large: 'https://unsplash.it/591/591?image=70' + i,
                xlarge: 'https://unsplash.it/592/592?image=70' + i,
                ratios: {
                    small: { w: 599, h: 450 },
                    medium: { w: 789, h: 789 },
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
                small: 'https://unsplash.it/599/450?image=70' + i,
                medium: 'https://unsplash.it/789/789?image=70' + i,
                large: 'https://unsplash.it/591/591?image=70' + i,
                xlarge: 'https://unsplash.it/592/592?image=70' + i,
                ratios: {
                    small: { w: 599, h: 450 },
                    medium: { w: 789, h: 789 },
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
                small: 'https://unsplash.it/599/450?image=70' + i,
                medium: 'https://unsplash.it/789/789?image=70' + i,
                large: 'https://unsplash.it/591/591?image=70' + i,
                xlarge: 'https://unsplash.it/592/592?image=70' + i,
                ratios: {
                    small: { w: 599, h: 450 },
                    medium: { w: 789, h: 789 },
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
                small: 'https://unsplash.it/599/450?image=70' + i,
                medium: 'https://unsplash.it/789/789?image=70' + i,
                large: 'https://unsplash.it/591/591?image=70' + i,
                xlarge: 'https://unsplash.it/592/592?image=70' + i,
                ratios: {
                    small: { w: 599, h: 450 },
                    medium: { w: 789, h: 789 },
                },
            },
        }))}
    />
);
