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

export const WithBackground: Story = () => (
    <RawVideo bgMode="full" videoUrls={['images/videos/alps_stockvideo.mp4']} />
);

export const SplittedBackground: Story = () => (
    <RawVideo
        bgMode="splitted"
        videoUrls={['images/videos/alps_stockvideo.mp4']}
    />
);

export const Inverted: Story = () => (
    <RawVideo
        bgMode="inverted"
        videoUrls={['images/videos/alps_stockvideo.mp4']}
    />
);

export const CustomPlayIcon: Story = () => (
    <RawVideo
        videoUrls={['images/videos/alps_stockvideo.mp4']}
        playIcon={<Play iconColor="red" />}
    />
);

export const InvalidVideo: Story = () => (
    <RawVideo
        bgMode="inverted"
        videoUrls={['images/videos/alps_stockvide.mp4']}
    />
);
