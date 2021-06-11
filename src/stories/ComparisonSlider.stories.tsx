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

export const WithInitialValue: Story = () => (
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

export const WithAnimation: Story = () => (
    <ComparisonSlider
        enableControlAnim
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

export const WithLabels: Story = () => (
    <ComparisonSlider
        initialValue={0.6}
        backgroundImg={{
            small: 'http://unsplash.it/640/480',
            medium: 'http://unsplash.it/1024/576',
            large: 'http://unsplash.it/1440/810',
            xlarge: 'http://unsplash.it/1680/810',
            alt: 'Placeholder Image',
        }}
        backgroundLabel="After"
        foregroundImg={{
            small: 'http://unsplash.it/640/480?image=410',
            medium: 'http://unsplash.it/1024/576?image=410',
            large: 'http://unsplash.it/1440/810?image=410',
            xlarge: 'http://unsplash.it/1680/810?image=410',
            alt: 'Placeholder Image',
        }}
        foregroundLabel="Before"
    />
);

export const WithFullBackground: Story = () => (
    <ComparisonSlider
        bgMode="full"
        initialValue={0.6}
        backgroundImg={{
            small: 'http://unsplash.it/640/480',
            medium: 'http://unsplash.it/1024/576',
            large: 'http://unsplash.it/1440/810',
            xlarge: 'http://unsplash.it/1680/810',
            alt: 'Placeholder Image',
        }}
        backgroundLabel="After"
        foregroundImg={{
            small: 'http://unsplash.it/640/480?image=410',
            medium: 'http://unsplash.it/1024/576?image=410',
            large: 'http://unsplash.it/1440/810?image=410',
            xlarge: 'http://unsplash.it/1680/810?image=410',
            alt: 'Placeholder Image',
        }}
        foregroundLabel="Before"
    />
);

export const WithHalfLeftBg: Story = () => (
    <ComparisonSlider
        bgMode="half-left"
        initialValue={0.6}
        backgroundImg={{
            small: 'http://unsplash.it/640/480',
            medium: 'http://unsplash.it/1024/576',
            large: 'http://unsplash.it/1440/810',
            xlarge: 'http://unsplash.it/1680/810',
            alt: 'Placeholder Image',
        }}
        backgroundLabel="After"
        foregroundImg={{
            small: 'http://unsplash.it/640/480?image=410',
            medium: 'http://unsplash.it/1024/576?image=410',
            large: 'http://unsplash.it/1440/810?image=410',
            xlarge: 'http://unsplash.it/1680/810?image=410',
            alt: 'Placeholder Image',
        }}
        foregroundLabel="Before"
    />
);

export const WithHalfRightBg: Story = () => (
    <ComparisonSlider
        bgMode="half-right"
        initialValue={0.6}
        backgroundImg={{
            small: 'http://unsplash.it/640/480',
            medium: 'http://unsplash.it/1024/576',
            large: 'http://unsplash.it/1440/810',
            xlarge: 'http://unsplash.it/1680/810',
            alt: 'Placeholder Image',
        }}
        backgroundLabel="After"
        foregroundImg={{
            small: 'http://unsplash.it/640/480?image=410',
            medium: 'http://unsplash.it/1024/576?image=410',
            large: 'http://unsplash.it/1440/810?image=410',
            xlarge: 'http://unsplash.it/1680/810?image=410',
            alt: 'Placeholder Image',
        }}
        foregroundLabel="Before"
    />
);

export const WithLargerRightBg: Story = () => (
    <ComparisonSlider
        bgMode="larger-right"
        initialValue={0.6}
        backgroundImg={{
            small: 'http://unsplash.it/640/480',
            medium: 'http://unsplash.it/1024/576',
            large: 'http://unsplash.it/1440/810',
            xlarge: 'http://unsplash.it/1680/810',
            alt: 'Placeholder Image',
        }}
        backgroundLabel="After"
        foregroundImg={{
            small: 'http://unsplash.it/640/480?image=410',
            medium: 'http://unsplash.it/1024/576?image=410',
            large: 'http://unsplash.it/1440/810?image=410',
            xlarge: 'http://unsplash.it/1680/810?image=410',
            alt: 'Placeholder Image',
        }}
        foregroundLabel="Before"
    />
);

export const WithLargerLeftBg: Story = () => (
    <ComparisonSlider
        bgMode="larger-left"
        initialValue={0.6}
        backgroundImg={{
            small: 'http://unsplash.it/640/480',
            medium: 'http://unsplash.it/1024/576',
            large: 'http://unsplash.it/1440/810',
            xlarge: 'http://unsplash.it/1680/810',
            alt: 'Placeholder Image',
        }}
        backgroundLabel="After"
        foregroundImg={{
            small: 'http://unsplash.it/640/480?image=410',
            medium: 'http://unsplash.it/1024/576?image=410',
            large: 'http://unsplash.it/1440/810?image=410',
            xlarge: 'http://unsplash.it/1680/810?image=410',
            alt: 'Placeholder Image',
        }}
        foregroundLabel="Before"
    />
);

export const IsInverted: Story = () => (
    <ComparisonSlider
        isInverted
        initialValue={0.6}
        backgroundImg={{
            small: 'http://unsplash.it/640/480',
            medium: 'http://unsplash.it/1024/576',
            large: 'http://unsplash.it/1440/810',
            xlarge: 'http://unsplash.it/1680/810',
            alt: 'Placeholder Image',
        }}
        backgroundLabel="After"
        foregroundImg={{
            small: 'http://unsplash.it/640/480?image=410',
            medium: 'http://unsplash.it/1024/576?image=410',
            large: 'http://unsplash.it/1440/810?image=410',
            xlarge: 'http://unsplash.it/1680/810?image=410',
            alt: 'Placeholder Image',
        }}
        foregroundLabel="Before"
    />
);

export const CustomOverlayOpacity: Story = () => (
    <ComparisonSlider
        initialValue={0.6}
        overlayColor="rgba(0,0,0,0.6)"
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
