import React from 'react';
import { Meta, Story } from '@storybook/react';
import VideoRaw, { VideoRawComponent } from 'components/sections/VideoRaw';

export default {
    title: '',
    component: VideoRawComponent,
} as Meta;

export const Default: Story = () => (
    <VideoRaw
        bgImage={{
            small: 'http://unsplash.it/640/480',
            medium: 'http://unsplash.it/1024/576',
            large: 'http://unsplash.it/1440/810',
            xlarge: 'http://unsplash.it/1680/810',
            alt: 'Placeholder Image',
        }}
    />
);
