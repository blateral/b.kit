import React from 'react';
import { Meta, Story } from '@storybook/react';
import SimpleImage, {
    SimpleImageComponent,
} from 'components/sections/SimpleImage';

export default {
    title: 'Sections/SimpleImage',
    component: SimpleImageComponent,
    parameters: {
        status: {
            type: ['preview', 'qsReady', 'releaseCandidate'],
        },
    },
} as Meta;

export const Default: Story = () => (
    <SimpleImage
        image={{
            small: 'https://unsplash.it/500/500?image=409',
            medium: 'https://unsplash.it/500/500?image=409',
            large: 'https://unsplash.it/511/511?image=409',
            xlarge: 'https://unsplash.it/854/854?image=409',
            ratios: {
                small: { w: 500, h: 500 },
                medium: { w: 500, h: 500 },
                large: { w: 511, h: 511 },
                xlarge: { w: 854, h: 854 },
            },
        }}
    />
);

export const RightAlign: Story = () => (
    <SimpleImage
        hAlign="right"
        image={{
            small: 'https://unsplash.it/500/500?image=409',
            medium: 'https://unsplash.it/500/500?image=409',
            large: 'https://unsplash.it/511/511?image=409',
            xlarge: 'https://unsplash.it/854/854?image=409',
            ratios: {
                small: { w: 500, h: 500 },
                medium: { w: 500, h: 500 },
                large: { w: 511, h: 511 },
                xlarge: { w: 854, h: 854 },
            },
        }}
    />
);

export const Centered: Story = () => (
    <SimpleImage
        hAlign="center"
        image={{
            small: 'https://unsplash.it/500/500?image=409',
            medium: 'https://unsplash.it/500/500?image=409',
            large: 'https://unsplash.it/511/511?image=409',
            xlarge: 'https://unsplash.it/854/854?image=409',
            ratios: {
                small: { w: 500, h: 500 },
                medium: { w: 500, h: 500 },
                large: { w: 511, h: 511 },
                xlarge: { w: 854, h: 854 },
            },
        }}
    />
);

export const WithCopyright: Story = () => (
    <SimpleImage
        image={{
            small: 'https://unsplash.it/500/500?image=409',
            medium: 'https://unsplash.it/500/500?image=409',
            large: 'https://unsplash.it/511/511?image=409',
            xlarge: 'https://unsplash.it/854/854?image=409',
            ratios: {
                small: { w: 500, h: 500 },
                medium: { w: 500, h: 500 },
                large: { w: 511, h: 511 },
                xlarge: { w: 854, h: 854 },
            },
            copyright: 'Olaf Meister',
        }}
    />
);

export const WithBackground: Story = () => (
    <SimpleImage
        bgMode="full"
        image={{
            small: 'https://unsplash.it/500/500?image=409',
            medium: 'https://unsplash.it/500/500?image=409',
            large: 'https://unsplash.it/511/511?image=409',
            xlarge: 'https://unsplash.it/854/854?image=409',
            ratios: {
                small: { w: 500, h: 500 },
                medium: { w: 500, h: 500 },
                large: { w: 511, h: 511 },
                xlarge: { w: 854, h: 854 },
            },
        }}
    />
);

export const Inverted: Story = () => (
    <SimpleImage
        bgMode="inverted"
        image={{
            small: 'https://unsplash.it/500/500?image=409',
            medium: 'https://unsplash.it/500/500?image=409',
            large: 'https://unsplash.it/511/511?image=409',
            xlarge: 'https://unsplash.it/854/854?image=409',
            ratios: {
                small: { w: 500, h: 500 },
            },
        }}
    />
);
