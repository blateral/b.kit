import React from 'react';
import { Meta, Story } from '@storybook/react';
import VideoRaw, { VideoRawComponent } from 'components/sections/VideoRaw';

export default {
    title: 'Sections/VideoRaw',
    component: VideoRawComponent,
} as Meta;

export const Default: Story = () => (
    <VideoRaw videoUrls={['images/videos/alps_stockvideo.mp4']} />
);
