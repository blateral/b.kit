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
                small: 'https://unsplash.it/640/480?image=400',
                medium: 'https://unsplash.it/832/624?image=400',
                semilarge: 'https://unsplash.it/468/351?image=400',
                ratios: {
                    small: { w: 4, h: 3 },
                },
            },
        ]}
    />
);

export const SingleImageFull: Story = () => (
    <NewsImages
        images={[
            {
                isFull: true,
                small: 'https://unsplash.it/619/305?image=400',
                medium: 'https://unsplash.it/983/483?image=400',
                ratios: {
                    small: { w: 983, h: 483 },
                },
            },
        ]}
    />
);

export const MultipleHalfImages: Story = () => (
    <NewsImages
        images={[
            {
                small: 'https://unsplash.it/640/480?image=400',
                medium: 'https://unsplash.it/832/624?image=400',
                semilarge: 'https://unsplash.it/468/351?image=400',
                ratios: {
                    small: { w: 4, h: 3 },
                },
            },
            {
                small: 'https://unsplash.it/640/480?image=401',
                medium: 'https://unsplash.it/832/624?image=401',
                semilarge: 'https://unsplash.it/468/351?image=401',
                ratios: {
                    small: { w: 4, h: 3 },
                },
            },
            {
                small: 'https://unsplash.it/640/480?image=402',
                medium: 'https://unsplash.it/832/624?image=402',
                semilarge: 'https://unsplash.it/468/351?image=402',
                ratios: {
                    small: { w: 4, h: 3 },
                },
            },
        ]}
    />
);

export const Mixed: Story = () => (
    <NewsImages
        images={[
            {
                isFull: true,
                small: 'https://unsplash.it/619/305?image=400',
                medium: 'https://unsplash.it/983/483?image=400',
                ratios: {
                    small: { w: 983, h: 483 },
                },
            },
            {
                small: 'https://unsplash.it/640/480?image=400',
                medium: 'https://unsplash.it/832/624?image=400',
                semilarge: 'https://unsplash.it/468/351?image=400',
                ratios: {
                    small: { w: 4, h: 3 },
                },
            },
            {
                small: 'https://unsplash.it/640/480?image=401',
                medium: 'https://unsplash.it/832/624?image=401',
                semilarge: 'https://unsplash.it/468/351?image=401',
                ratios: {
                    small: { w: 4, h: 3 },
                },
            },
            {
                small: 'https://unsplash.it/640/480?image=402',
                medium: 'https://unsplash.it/832/624?image=402',
                semilarge: 'https://unsplash.it/468/351?image=402',
                ratios: {
                    small: { w: 4, h: 3 },
                },
            },
        ]}
    />
);

export const WithBackground: Story = () => (
    <NewsImages
        bgMode="full"
        images={[
            {
                small: 'https://unsplash.it/640/480?image=400',
                medium: 'https://unsplash.it/832/624?image=400',
                semilarge: 'https://unsplash.it/468/351?image=400',
                ratios: {
                    small: { w: 4, h: 3 },
                },
            },
            {
                small: 'https://unsplash.it/640/480?image=401',
                medium: 'https://unsplash.it/832/624?image=401',
                semilarge: 'https://unsplash.it/468/351?image=401',
                ratios: {
                    small: { w: 4, h: 3 },
                },
            },
        ]}
    />
);

export const Inverted: Story = () => (
    <NewsImages
        images={[
            {
                small: 'https://unsplash.it/640/480?image=400',
                medium: 'https://unsplash.it/832/624?image=400',
                semilarge: 'https://unsplash.it/468/351?image=400',
                ratios: {
                    small: { w: 4, h: 3 },
                },
            },
            {
                small: 'https://unsplash.it/640/480?image=401',
                medium: 'https://unsplash.it/832/624?image=401',
                semilarge: 'https://unsplash.it/468/351?image=401',
                ratios: {
                    small: { w: 4, h: 3 },
                },
            },
        ]}
        bgMode="inverted"
    />
);
