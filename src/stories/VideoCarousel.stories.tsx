/* eslint-disable react/display-name */
import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import ArrowRight from 'components/base/icons/ArrowRight';
import { VideoCardProps } from 'components/blocks/VideoCard';
import VideoCarousel from 'components/sections/carousel/VideoCarousel';

import { generateItemList } from 'utils/storyHelpers';

const exampleVideo: VideoCardProps = {
    bgImage: {
        small: 'http://unsplash.it/553/311',
        medium: 'http://unsplash.it/704/396',
        large: 'http://unsplash.it/533/285',
        xlarge: 'http://unsplash.it/680/382',
        alt: 'Placeholder Image',
    },
    embedId: 'NpEaa2P7qZI',
};

const exampleVideos = generateItemList<VideoCardProps>(
    exampleVideo,
    4,
    (item, i) => ({
        ...item,
        superTitle: 'Haus St. Franziskus',
        title: 'Haus St. Franziskus – lorem ipsum dolor sit amet',
        bgImage: {
            small: `http://unsplash.it/553/311?image=40${i}`,
            medium: `http://unsplash.it/704/396?image=40${i}`,
            large: `http://unsplash.it/533/285?image=40${i}`,
            xlarge: `http://unsplash.it/680/382?image=40${i}`,
            alt: 'Placeholder Image ' + i,
        },
    })
);

export default {
    title: 'Sections/Carousels/VideoCarousel',
    component: VideoCarousel,
} as Meta;

export const Default: Story = () => (
    <VideoCarousel
        videos={exampleVideos.map((item, i) => ({
            ...item,
            bgImage: {
                small: `http://unsplash.it/553/311?image=40${i}`,
                medium: `http://unsplash.it/704/396?image=40${i}`,
                large: `http://unsplash.it/533/285?image=40${i}`,
                xlarge: `http://unsplash.it/680/382?image=40${i}`,
                alt: 'Placeholder Image ' + i,
            },
        }))}
    />
);

export const Inverted: Story = () => (
    <VideoCarousel
        bgMode="inverted"
        videos={exampleVideos.map((item, i) => ({
            ...item,
            bgImage: {
                small: `http://unsplash.it/553/311?image=40${i}`,
                medium: `http://unsplash.it/704/396?image=40${i}`,
                large: `http://unsplash.it/533/285?image=40${i}`,
                xlarge: `http://unsplash.it/680/382?image=40${i}`,
                alt: 'Placeholder Image ' + i,
            },
        }))}
    />
);

export const WithBackground: Story = () => (
    <VideoCarousel
        bgMode="full"
        videos={exampleVideos.map((item, i) => ({
            ...item,
            bgImage: {
                small: `http://unsplash.it/553/311?image=40${i}`,
                medium: `http://unsplash.it/704/396?image=40${i}`,
                large: `http://unsplash.it/533/285?image=40${i}`,
                xlarge: `http://unsplash.it/680/382?image=40${i}`,
                alt: 'Placeholder Image ' + i,
            },
        }))}
    />
);

export const WithHalfBackground: Story = () => (
    <VideoCarousel
        bgMode="splitted"
        videos={exampleVideos.map((item, i) => ({
            ...item,
            bgImage: {
                small: `http://unsplash.it/553/311?image=40${i}`,
                medium: `http://unsplash.it/704/396?image=40${i}`,
                large: `http://unsplash.it/533/285?image=40${i}`,
                xlarge: `http://unsplash.it/680/382?image=40${i}`,
                alt: 'Placeholder Image ' + i,
            },
        }))}
    />
);

export const WithHandlers: Story = () => (
    <VideoCarousel
        bgMode="full"
        videos={exampleVideos.map((item, i) => ({
            ...item,
            bgImage: {
                small: `http://unsplash.it/553/311?image=40${i}`,
                medium: `http://unsplash.it/704/396?image=40${i}`,
                large: `http://unsplash.it/533/285?image=40${i}`,
                xlarge: `http://unsplash.it/680/382?image=40${i}`,
                alt: 'Placeholder Image ' + i,
            },
        }))}
        onInit={(steps) => console.log('carousel has ' + steps + ' steps')}
        beforeChange={(current) => console.log('before step: ' + current)}
        afterChange={(current) => console.log('after step: ' + current)}
    />
);

export const WithCustomControls: Story = () => (
    <VideoCarousel
        bgMode="full"
        videos={exampleVideos.map((item, i) => ({
            ...item,
            bgImage: {
                small: `http://unsplash.it/553/311?image=40${i}`,
                medium: `http://unsplash.it/704/396?image=40${i}`,
                large: `http://unsplash.it/533/285?image=40${i}`,
                xlarge: `http://unsplash.it/680/382?image=40${i}`,
                alt: 'Placeholder Image ' + i,
            },
        }))}
        controlNext={() => <ArrowRight />}
        controlPrev={() => <ArrowRight />}
    />
);

export const WithCustomDots: Story = () => (
    <VideoCarousel
        bgMode="full"
        videos={exampleVideos.map((item, i) => ({
            ...item,
            bgImage: {
                small: `http://unsplash.it/553/311?image=40${i}`,
                medium: `http://unsplash.it/704/396?image=40${i}`,
                large: `http://unsplash.it/533/285?image=40${i}`,
                xlarge: `http://unsplash.it/680/382?image=40${i}`,
                alt: 'Placeholder Image ' + i,
            },
        }))}
        dot={({ isActive }) => (
            <ArrowRight iconColor={isActive ? 'red' : 'grey'} />
        )}
    />
);
