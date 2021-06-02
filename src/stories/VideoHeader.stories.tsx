/* eslint-disable react/display-name */
import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import VideoHeader from '../components/sections/header/VideoHeader';

export default {
    title: 'Sections/Header/VideoHeader',
    component: VideoHeader,
    decorators: [
        (Story) => (
            <div style={{ height: '100vh', width: '100%' }}>
                <Story />
            </div>
        ),
    ],
} as Meta;

export const Default: Story = () => (
    <VideoHeader
        url="images/videos/Startseite_Webpage_blau.mp4"
        mobileImage={{
            small: 'https://unsplash.it/660/792?id=1',
            medium: 'https://unsplash.it/1100/1320?id=1',
            semilarge: 'https://unsplash.it/1100/700?id=1',
            large: 'https://unsplash.it/1596/860?id=1',
            xlarge: 'https://unsplash.it/2450/1320?id=1',
        }}
    />
);
