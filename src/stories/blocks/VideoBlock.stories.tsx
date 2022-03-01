import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import VideoBlock from 'components/blocks/VideoBlock';

export default {
    title: 'Blocks/VideoBlock',
    component: VideoBlock,
    parameters: {
        status: {
            type: 'preview',
        },
    },
} as Meta;

export const Default: Story = () => (
    <VideoBlock urls={['images/videos/alps_stockvideo.mp4']} />
);

export const WithControls: Story = () => (
    <VideoBlock controls urls={['images/videos/alps_stockvideo.mp4']} />
);

export const Muted: Story = () => (
    <VideoBlock muted urls={['images/videos/alps_stockvideo.mp4']} />
);

export const Autoplay: Story = () => (
    <VideoBlock autoPlay urls={['images/videos/alps_stockvideo.mp4']} />
);

export const Loop: Story = () => (
    <VideoBlock autoPlay loop urls={['images/videos/alps_stockvideo.mp4']} />
);

export const WithAspectRatio: Story = () => (
    <VideoBlock
        ratios={{ small: 1 }}
        urls={['images/videos/alps_stockvideo.mp4']}
    />
);
