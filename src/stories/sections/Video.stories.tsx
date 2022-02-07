import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import Video, { VideoComponent } from 'components/sections/Video';
import Play from 'components/base/icons/Play';

export default {
    title: 'Sections/Video',
    component: VideoComponent,
    parameters: {
        status: {
            type: 'stable',
        },
    },
} as Meta;

export const Default: Story = () => (
    <Video
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

export const WithBackground: Story = () => (
    <Video
        bgMode="full"
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

export const Inverted: Story = () => (
    <Video
        bgMode="inverted"
        bgImage={{
            small: 'https://unsplash.it/640/480',
            medium: 'https://unsplash.it/1024/576',
            large: 'https://unsplash.it/1440/810',
            xlarge: 'https://unsplash.it/1680/810',
            alt: 'Placeholder Image',
        }}
        embedId="pVE92TNDwUk"
    />
);

export const WithCustomPlayIcon: Story = () => (
    <Video
        bgMode="inverted"
        bgImage={{
            small: 'https://unsplash.it/640/480',
            medium: 'https://unsplash.it/1024/576',
            large: 'https://unsplash.it/1440/810',
            xlarge: 'https://unsplash.it/1680/810',
            alt: 'Placeholder Image',
        }}
        embedId="pVE92TNDwUk"
        playIcon={<Play iconColor="red" />}
    />
);
