import React from 'react';
import { Meta, Story } from '@storybook/react';
import RawVideo, { RawVideoComponent } from 'components/sections/RawVideo';
import Play from 'components/base/icons/Play';

export default {
    title: 'Sections/RawVideo',
    component: RawVideoComponent,
    parameters: {
        status: {
            type: ['preview', 'qsReady'],
        },
    },
} as Meta;

export const Default: Story = () => (
    <RawVideo videoUrls={['images/videos/alps_stockvideo.mp4']} />
);

export const WithPlaceholderImg: Story = () => (
    <RawVideo
        placeholderImg={{
            small: 'https://unsplash.it/640/480',
            medium: 'https://unsplash.it/1024/576',
            large: 'https://unsplash.it/1440/810',
            xlarge: 'https://unsplash.it/1680/810',
            alt: 'Placeholder Image',
        }}
        videoUrls={['images/videos/alps_stockvideo.mp4']}
    />
);

export const Autoplay: Story = () => (
    <RawVideo autoplay videoUrls={['images/videos/alps_stockvideo.mp4']} />
);

export const Loop: Story = () => (
    <RawVideo loop videoUrls={['images/videos/alps_stockvideo.mp4']} />
);

export const AutoplayWithLoop: Story = () => (
    <RawVideo autoplay loop videoUrls={['images/videos/alps_stockvideo.mp4']} />
);

export const WithBackground: Story = () => (
    <RawVideo
        bgMode="full"
        placeholderImg={{
            small: 'https://unsplash.it/640/480',
            medium: 'https://unsplash.it/1024/576',
            large: 'https://unsplash.it/1440/810',
            xlarge: 'https://unsplash.it/1680/810',
            alt: 'Placeholder Image',
        }}
        videoUrls={['images/videos/alps_stockvideo.mp4']}
    />
);

export const SplittedBackground: Story = () => (
    <RawVideo
        bgMode="splitted"
        placeholderImg={{
            small: 'https://unsplash.it/640/480',
            medium: 'https://unsplash.it/1024/576',
            large: 'https://unsplash.it/1440/810',
            xlarge: 'https://unsplash.it/1680/810',
            alt: 'Placeholder Image',
        }}
        videoUrls={['images/videos/alps_stockvideo.mp4']}
    />
);

export const Inverted: Story = () => (
    <RawVideo
        bgMode="inverted"
        placeholderImg={{
            small: 'https://unsplash.it/640/480',
            medium: 'https://unsplash.it/1024/576',
            large: 'https://unsplash.it/1440/810',
            xlarge: 'https://unsplash.it/1680/810',
            alt: 'Placeholder Image',
        }}
        videoUrls={['images/videos/alps_stockvideo.mp4']}
    />
);

export const CustomPlayIcon: Story = () => (
    <RawVideo
        videoUrls={['images/videos/alps_stockvideo.mp4']}
        placeholderImg={{
            small: 'https://unsplash.it/640/480',
            medium: 'https://unsplash.it/1024/576',
            large: 'https://unsplash.it/1440/810',
            xlarge: 'https://unsplash.it/1680/810',
            alt: 'Placeholder Image',
        }}
        playIcon={<Play iconColor="red" />}
    />
);

export const InvalidVideo: Story = () => (
    <RawVideo
        bgMode="inverted"
        placeholderImg={{
            small: 'https://unsplash.it/640/480',
            medium: 'https://unsplash.it/1024/576',
            large: 'https://unsplash.it/1440/810',
            xlarge: 'https://unsplash.it/1680/810',
            alt: 'Placeholder Image',
        }}
        videoUrls={['images/videos/alps_stockvide.mp4']}
    />
);
