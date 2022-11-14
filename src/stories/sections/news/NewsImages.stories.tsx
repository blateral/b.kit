import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import NewsImages, {
    NewsImagesComponent,
} from 'components/sections/news/NewsImages';

export default {
    title: 'Sections/News/NewsImages',
    component: NewsImagesComponent,
    parameters: {
        status: {
            type: ['preview', 'qsReady', 'releaseCandidate'],
        },
    },
} as Meta;

export const Default: Story = () => (
    <NewsImages
        images={[
            {
                small: 'https://unsplash.it/619/305?image=400',
                medium: 'https://unsplash.it/983/483?image=400',
                ratios: {
                    small: { w: 983, h: 483 },
                },
            },
        ]}
    />
);

export const SingleImageHalf: Story = () => (
    <NewsImages
        images={[
            {
                small: 'https://unsplash.it/619/465?image=400',
                medium: 'https://unsplash.it/376/282?image=400',
                large: 'https://unsplash.it/452/339?image=400',
                ratios: {
                    small: { w: 452, h: 339 },
                },
            },
        ]}
        imageStyle="half"
    />
);

export const MultipleHalfImages: Story = () => (
    <NewsImages
        images={[
            {
                small: 'https://unsplash.it/619/465?image=400',
                medium: 'https://unsplash.it/376/282?image=400',
                large: 'https://unsplash.it/452/339?image=400',
                ratios: {
                    small: { w: 452, h: 339 },
                },
            },
            {
                small: 'https://unsplash.it/619/465?image=401',
                medium: 'https://unsplash.it/376/282?image=401',
                large: 'https://unsplash.it/452/339?image=401',
                ratios: {
                    small: { w: 452, h: 339 },
                },
            },
            {
                small: 'https://unsplash.it/619/465?image=402',
                medium: 'https://unsplash.it/376/282?image=402',
                large: 'https://unsplash.it/452/339?image=402',
                ratios: {
                    small: { w: 452, h: 339 },
                },
            },
        ]}
        imageStyle="half"
    />
);

export const WithBackground: Story = () => (
    <NewsImages
        bgMode="full"
        images={[
            {
                small: 'https://unsplash.it/619/465?image=400',
                medium: 'https://unsplash.it/376/282?image=400',
                large: 'https://unsplash.it/452/339?image=400',
                ratios: {
                    small: { w: 452, h: 339 },
                },
            },
            {
                small: 'https://unsplash.it/619/465?image=401',
                medium: 'https://unsplash.it/376/282?image=401',
                large: 'https://unsplash.it/452/339?image=401',
                ratios: {
                    small: { w: 452, h: 339 },
                },
            },
        ]}
        imageStyle="half"
    />
);

export const Inverted: Story = () => (
    <NewsImages
        images={[
            {
                small: 'https://unsplash.it/619/465?image=400',
                medium: 'https://unsplash.it/376/282?image=400',
                large: 'https://unsplash.it/452/339?image=400',
                ratios: {
                    small: { w: 452, h: 339 },
                },
            },
            {
                small: 'https://unsplash.it/619/465?image=401',
                medium: 'https://unsplash.it/376/282?image=401',
                large: 'https://unsplash.it/452/339?image=401',
                ratios: {
                    small: { w: 452, h: 339 },
                },
            },
        ]}
        imageStyle="half"
        bgMode="inverted"
    />
);
