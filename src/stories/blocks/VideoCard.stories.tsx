import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import VideoCard from 'components/blocks/VideoCard';
import Play from 'components/base/icons/Play';

export default {
    title: 'Blocks/VideoCard',
    component: VideoCard,
    parameters: {
        status: {
            type: 'stable',
        },
    },
} as Meta;

export const Default: Story = () => (
    <VideoCard
        bgImage={{
            small: 'http://unsplash.it/640/480',
            medium: 'http://unsplash.it/1024/576',
            large: 'http://unsplash.it/1440/810',
            xlarge: 'http://unsplash.it/1680/810',
            alt: 'Placeholder Image',
        }}
        embedId="pVE92TNDwUk"
    />
);

export const WithCustomPlayIcon: Story = () => (
    <VideoCard
        bgImage={{
            small: 'http://unsplash.it/640/480',
            medium: 'http://unsplash.it/1024/576',
            large: 'http://unsplash.it/1440/810',
            xlarge: 'http://unsplash.it/1680/810',
            alt: 'Placeholder Image',
        }}
        embedId="pVE92TNDwUk"
        playIcon={<Play iconColor="red" />}
    />
);
