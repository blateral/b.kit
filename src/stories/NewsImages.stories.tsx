import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import NewsImages from '../components/sections/news/NewsImages';

export default {
    title: 'Sections/News/NewsImages',
    component: NewsImages,
} as Meta;

export const Default: Story = () => (
    <NewsImages
        images={[
            {
                small: 'https://unsplash.it/619/305?image=400',
                medium: 'https://unsplash.it/983/483?image=400',
                large: 'https://unsplash.it/1399/688?image=400',
                xlarge: 'https://unsplash.it/1400/690?image=400',
            },
        ]}
    />
);

export const SingleImageHalf: Story = () => (
    <NewsImages
        images={[
            {
                small: 'https://unsplash.it/419/313?image=400',
                medium: 'https://unsplash.it/983/736?image=400',
                large: 'https://unsplash.it/1399/1048?image=400',
                xlarge: 'https://unsplash.it/1400/1050?image=400',
            },
        ]}
        imageStyle="half"
    />
);

export const WithMultipleImages: Story = () => (
    <NewsImages
        images={[
            {
                small: 'https://unsplash.it/419/313?image=400',
                medium: 'https://unsplash.it/983/736?image=400',
                large: 'https://unsplash.it/1399/1048?image=400',
                xlarge: 'https://unsplash.it/1400/1050?image=400',
            },
            {
                small: 'https://unsplash.it/419/313?image=401',
                medium: 'https://unsplash.it/983/736?image=401',
                large: 'https://unsplash.it/1399/1048?image=401',
                xlarge: 'https://unsplash.it/1400/1050?image=401',
            },
        ]}
        imageStyle="half"
    />
);
