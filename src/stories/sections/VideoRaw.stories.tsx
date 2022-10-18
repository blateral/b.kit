import React from 'react';
import { Meta, Story } from '@storybook/react';
import VideoRaw, { VideoRawComponent } from 'components/sections/VideoRaw';
import Play from 'components/base/icons/Play';

export default {
    title: 'Sections/VideoRaw',
    component: VideoRawComponent,
    parameters: {
        status: {
            type: ['preview', 'qsReady'],
        },
    },
} as Meta;

export const Default: Story = () => (
    <VideoRaw videoUrls={['images/videos/alps_stockvideo.mp4']} />
);

export const WithBackground: Story = () => (
    <VideoRaw bgMode="full" videoUrls={['images/videos/alps_stockvideo.mp4']} />
);

export const SplittedBackground: Story = () => (
    <VideoRaw
        bgMode="splitted"
        videoUrls={['images/videos/alps_stockvideo.mp4']}
    />
);

export const Inverted: Story = () => (
    <VideoRaw
        bgMode="inverted"
        videoUrls={['images/videos/alps_stockvideo.mp4']}
    />
);

export const CustomPlayIcon: Story = () => (
    <VideoRaw
        videoUrls={['images/videos/alps_stockvideo.mp4']}
        playIcon={<Play iconColor="red" />}
    />
);

export const InvalidVideo: Story = () => (
    <VideoRaw
        bgMode="inverted"
        videoUrls={['images/videos/alps_stockvide.mp4']}
    />
);
