import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import NewsCard from '../components/sections/news/NewsCard';

export default {
    title: 'Sections/News/NewsCard',
    component: NewsCard,
} as Meta;

export const Default: Story = () => (
    <NewsCard
        index={1}
        tag="Secondary Tag"
        publishDate="Date"
        newsLink="#0"
        title="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy"
        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. "
        image={{
            small: 'https://unsplash.it/419/313?image=400',
            medium: 'https://unsplash.it/983/736?image=400',
            large: 'https://unsplash.it/1399/1048?image=400',
            xlarge: 'https://unsplash.it/1400/1050?image=400',
        }}
    />
);
