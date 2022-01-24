import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import SimpleImage from 'components/sections/SimpleImage';

export default {
    title: 'Sections/SimpleImage',
    component: SimpleImage,
    parameters: {
        status: {
            type: 'releaseCandidate',
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
        }}
    />
);
