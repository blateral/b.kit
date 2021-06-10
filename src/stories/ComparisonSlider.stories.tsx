import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import ComparisonSlider from 'components/sections/ComparisonSlider';
import ArrowRightGhost from 'components/base/icons/ArrowRightGhost';

export default {
    title: 'Sections/ComparisonSlider',
    component: ComparisonSlider,
} as Meta;

export const Default: Story = () => (
    <ComparisonSlider
        initialValue={0.6}
        backgroundImg={{
            small: 'http://unsplash.it/640/480',
            medium: 'http://unsplash.it/1024/576',
            large: 'http://unsplash.it/1440/810',
            xlarge: 'http://unsplash.it/1680/810',
            alt: 'Placeholder Image',
        }}
        foregroundImg={{
            small: 'http://unsplash.it/640/480?image=410',
            medium: 'http://unsplash.it/1024/576?image=410',
            large: 'http://unsplash.it/1440/810?image=410',
            xlarge: 'http://unsplash.it/1680/810?image=410',
            alt: 'Placeholder Image',
        }}
    />
);

export const WithCustomControl: Story = () => (
    <ComparisonSlider
        initialValue={0.6}
        backgroundImg={{
            small: 'http://unsplash.it/640/480',
            medium: 'http://unsplash.it/1024/576',
            large: 'http://unsplash.it/1440/810',
            xlarge: 'http://unsplash.it/1680/810',
            alt: 'Placeholder Image',
        }}
        foregroundImg={{
            small: 'http://unsplash.it/640/480?image=410',
            medium: 'http://unsplash.it/1024/576?image=410',
            large: 'http://unsplash.it/1440/810?image=410',
            xlarge: 'http://unsplash.it/1680/810?image=410',
            alt: 'Placeholder Image',
        }}
        dragControl={<ArrowRightGhost />}
    />
);
