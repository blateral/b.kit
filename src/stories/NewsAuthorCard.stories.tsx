import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import NewsAuthorCard from '../components/sections/news/NewsAuthorCard';

export default {
    title: 'Sections/News/NewsAuthorCard',
    component: NewsAuthorCard,
} as Meta;

export const Default: Story = () => (
    <NewsAuthorCard
        author="Author Name"
        avatar={{
            src: 'http://placehold.it/150',
        }}
    />
);
