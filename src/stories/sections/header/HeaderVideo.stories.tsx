/* eslint-disable react/display-name */
import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import HeaderVideo from 'components/sections/header/HeaderVideo';

export default {
    title: 'Sections/Header/HeaderVideo',
    component: HeaderVideo,
    decorators: [
        (Story) => (
            <div style={{ height: '100vh', width: '100%' }}>
                <Story />
            </div>
        ),
    ],
} as Meta;

export const Default: Story = () => (
    <HeaderVideo
        videoUrl="images/videos/alps_stockvideo.mp4"
        placeholderImg={{
            small: 'https://unsplash.it/660/792?id=1',
            medium: 'https://unsplash.it/1100/1320?id=1',
            semilarge: 'https://unsplash.it/1100/700?id=1',
            large: 'https://unsplash.it/1596/860?id=1',
            xlarge: 'https://unsplash.it/2450/1320?id=1',
        }}
    />
);

export const HideOnMobile: Story = () => (
    <HeaderVideo
        loadOnMobile={false}
        videoUrl="images/videos/alps_stockvideo.mp4"
        placeholderImg={{
            small: 'https://unsplash.it/660/792?id=1',
            medium: 'https://unsplash.it/1100/1320?id=1',
            semilarge: 'https://unsplash.it/1100/700?id=1',
            large: 'https://unsplash.it/1596/860?id=1',
            xlarge: 'https://unsplash.it/2450/1320?id=1',
        }}
    />
);
