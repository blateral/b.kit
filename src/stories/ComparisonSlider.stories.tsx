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
            small: 'http://unsplash.it/640/310',
            medium: 'http://unsplash.it/1024/494',
            large: 'http://unsplash.it/1440/694',
            xlarge: 'http://unsplash.it/1680/810',
            alt: 'Placeholder Image',
        }}
        foregroundImg={{
            small: 'http://unsplash.it/640/310?image=410',
            medium: 'http://unsplash.it/1024/494?image=410',
            large: 'http://unsplash.it/1440/694?image=410',
            xlarge: 'http://unsplash.it/1680/810?image=410',
            alt: 'Placeholder Image',
        }}
    />
);

export const WithInitialValue: Story = () => (
    <ComparisonSlider
        initialValue={0.6}
        backgroundImg={{
            small: 'http://unsplash.it/640/310',
            medium: 'http://unsplash.it/1024/494',
            large: 'http://unsplash.it/1440/694',
            xlarge: 'http://unsplash.it/1680/810',
            alt: 'Placeholder Image',
        }}
        foregroundImg={{
            small: 'http://unsplash.it/640/310?image=410',
            medium: 'http://unsplash.it/1024/494?image=410',
            large: 'http://unsplash.it/1440/694?image=410',
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
            small: 'http://unsplash.it/640/310',
            medium: 'http://unsplash.it/1024/494',
            large: 'http://unsplash.it/1440/694',
            xlarge: 'http://unsplash.it/1680/810',
            alt: 'Placeholder Image',
        }}
        foregroundImg={{
            small: 'http://unsplash.it/640/310?image=410',
            medium: 'http://unsplash.it/1024/494?image=410',
            large: 'http://unsplash.it/1440/694?image=410',
            xlarge: 'http://unsplash.it/1680/810?image=410',
            alt: 'Placeholder Image',
        }}
    />
);

export const WithLabels: Story = () => (
    <ComparisonSlider
        initialValue={0.6}
        backgroundImg={{
            small: 'http://unsplash.it/640/310',
            medium: 'http://unsplash.it/1024/494',
            large: 'http://unsplash.it/1440/694',
            xlarge: 'http://unsplash.it/1680/810',
            alt: 'Placeholder Image',
        }}
        backgroundLabel="After"
        foregroundImg={{
            small: 'http://unsplash.it/640/310?image=410',
            medium: 'http://unsplash.it/1024/494?image=410',
            large: 'http://unsplash.it/1440/694?image=410',
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
            small: 'http://unsplash.it/640/310',
            medium: 'http://unsplash.it/1024/494',
            large: 'http://unsplash.it/1440/694',
            xlarge: 'http://unsplash.it/1680/810',
            alt: 'Placeholder Image',
        }}
        backgroundLabel="After"
        foregroundImg={{
            small: 'http://unsplash.it/640/310?image=410',
            medium: 'http://unsplash.it/1024/494?image=410',
            large: 'http://unsplash.it/1440/694?image=410',
            xlarge: 'http://unsplash.it/1680/810?image=410',
            alt: 'Placeholder Image',
        }}
        foregroundLabel="Before"
    />
);

export const SplittedBackground: Story = () => (
    <ComparisonSlider
        bgMode="splitted"
        initialValue={0.6}
        backgroundImg={{
            small: 'http://unsplash.it/640/310',
            medium: 'http://unsplash.it/1024/494',
            large: 'http://unsplash.it/1440/694',
            xlarge: 'http://unsplash.it/1680/810',
            alt: 'Placeholder Image',
        }}
        backgroundLabel="After"
        foregroundImg={{
            small: 'http://unsplash.it/640/310?image=410',
            medium: 'http://unsplash.it/1024/494?image=410',
            large: 'http://unsplash.it/1440/694?image=410',
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
            small: 'http://unsplash.it/640/310',
            medium: 'http://unsplash.it/1024/494',
            large: 'http://unsplash.it/1440/694',
            xlarge: 'http://unsplash.it/1680/810',
            alt: 'Placeholder Image',
        }}
        backgroundLabel="After"
        foregroundImg={{
            small: 'http://unsplash.it/640/310?image=410',
            medium: 'http://unsplash.it/1024/494?image=410',
            large: 'http://unsplash.it/1440/694?image=410',
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
            small: 'http://unsplash.it/640/310',
            medium: 'http://unsplash.it/1024/494',
            large: 'http://unsplash.it/1440/694',
            xlarge: 'http://unsplash.it/1680/810',
            alt: 'Placeholder Image',
        }}
        foregroundImg={{
            small: 'http://unsplash.it/640/310?image=410',
            medium: 'http://unsplash.it/1024/494?image=410',
            large: 'http://unsplash.it/1440/694?image=410',
            xlarge: 'http://unsplash.it/1680/810?image=410',
            alt: 'Placeholder Image',
        }}
    />
);

export const WithCustomControl: Story = () => (
    <ComparisonSlider
        initialValue={0.6}
        backgroundImg={{
            small: 'http://unsplash.it/640/310',
            medium: 'http://unsplash.it/1024/494',
            large: 'http://unsplash.it/1440/694',
            xlarge: 'http://unsplash.it/1680/810',
            alt: 'Placeholder Image',
        }}
        foregroundImg={{
            small: 'http://unsplash.it/640/310?image=410',
            medium: 'http://unsplash.it/1024/494?image=410',
            large: 'http://unsplash.it/1440/694?image=410',
            xlarge: 'http://unsplash.it/1680/810?image=410',
            alt: 'Placeholder Image',
        }}
        dragControl={<ArrowRightGhost />}
    />
);
