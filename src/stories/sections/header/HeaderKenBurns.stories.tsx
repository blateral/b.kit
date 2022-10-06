import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import HeaderKenBurns from 'components/sections/header/HeaderKenBurns';

export default {
    title: 'Sections/Header/HeaderKenBurns',
    component: HeaderKenBurns,
    decorators: [
        (Story) => (
            <div style={{ height: '80vh' }}>
                <Story />
            </div>
        ),
    ],
    parameters: {
        status: {
            type: 'stable',
        },
    },
} as Meta;

export const ThreeImages: Story = () => (
    <HeaderKenBurns
        images={[
            {
                small: 'https://unsplash.it/640/360?id=1',
                medium: 'https://unsplash.it/1024/576?id=1',
                large: 'https://unsplash.it/1440/620?id=1',
                xlarge: 'https://unsplash.it/1680/620?id=1',
                webp: {
                    small: 'https://unsplash.it/640/360.webp?id=1',
                    medium: 'https://unsplash.it/1024/576.webp?id=1',
                    large: 'https://unsplash.it/1440/620.webp?id=1',
                    xlarge: 'https://unsplash.it/1680/620.webp?id=1',
                },
            },
            {
                small: 'https://unsplash.it/640/360?id=2',
                medium: 'https://unsplash.it/1024/576?id=2',
                large: 'https://unsplash.it/1440/620?id=2',
                xlarge: 'https://unsplash.it/1680/620?id=2',
            },
            {
                small: 'https://unsplash.it/640/360?id=3',
                medium: 'https://unsplash.it/1024/576?id=3',
                large: 'https://unsplash.it/1440/620?id=3',
                xlarge: 'https://unsplash.it/1680/620?id=3',
            },
        ]}
    />
);

export const WithCustomZoom: Story = () => (
    <HeaderKenBurns
        zoom={1.5}
        images={[
            {
                small: 'https://unsplash.it/640/360?id=1',
                medium: 'https://unsplash.it/1024/576?id=1',
                large: 'https://unsplash.it/1440/620?id=1',
                xlarge: 'https://unsplash.it/1680/620?id=1',
                webp: {
                    small: 'https://unsplash.it/640/360.webp?id=1',
                    medium: 'https://unsplash.it/1024/576.webp?id=1',
                    large: 'https://unsplash.it/1440/620.webp?id=1',
                    xlarge: 'https://unsplash.it/1680/620.webp?id=1',
                },
            },
            {
                small: 'https://unsplash.it/640/360?id=2',
                medium: 'https://unsplash.it/1024/576?id=2',
                large: 'https://unsplash.it/1440/620?id=2',
                xlarge: 'https://unsplash.it/1680/620?id=2',
            },
            {
                small: 'https://unsplash.it/640/360?id=3',
                medium: 'https://unsplash.it/1024/576?id=3',
                large: 'https://unsplash.it/1440/620?id=3',
                xlarge: 'https://unsplash.it/1680/620?id=3',
            },
        ]}
    />
);

export const WithCustomZoomPoint: Story = () => (
    <HeaderKenBurns
        zoomPoint={[0.2, 0.8]}
        images={[
            {
                small: 'https://unsplash.it/640/360?id=1',
                medium: 'https://unsplash.it/1024/576?id=1',
                large: 'https://unsplash.it/1440/620?id=1',
                xlarge: 'https://unsplash.it/1680/620?id=1',
                webp: {
                    small: 'https://unsplash.it/640/360.webp?id=1',
                    medium: 'https://unsplash.it/1024/576.webp?id=1',
                    large: 'https://unsplash.it/1440/620.webp?id=1',
                    xlarge: 'https://unsplash.it/1680/620.webp?id=1',
                },
            },
            {
                small: 'https://unsplash.it/640/360?id=2',
                medium: 'https://unsplash.it/1024/576?id=2',
                large: 'https://unsplash.it/1440/620?id=2',
                xlarge: 'https://unsplash.it/1680/620?id=2',
            },
            {
                small: 'https://unsplash.it/640/360?id=3',
                medium: 'https://unsplash.it/1024/576?id=3',
                large: 'https://unsplash.it/1440/620?id=3',
                xlarge: 'https://unsplash.it/1680/620?id=3',
            },
        ]}
    />
);

export const WithCustomInterval: Story = () => (
    <HeaderKenBurns
        interval={3000}
        images={[
            {
                small: 'https://unsplash.it/640/360?id=1',
                medium: 'https://unsplash.it/1024/576?id=1',
                large: 'https://unsplash.it/1440/620?id=1',
                xlarge: 'https://unsplash.it/1680/620?id=1',
                webp: {
                    small: 'https://unsplash.it/640/360.webp?id=1',
                    medium: 'https://unsplash.it/1024/576.webp?id=1',
                    large: 'https://unsplash.it/1440/620.webp?id=1',
                    xlarge: 'https://unsplash.it/1680/620.webp?id=1',
                },
            },
            {
                small: 'https://unsplash.it/640/360?id=2',
                medium: 'https://unsplash.it/1024/576?id=2',
                large: 'https://unsplash.it/1440/620?id=2',
                xlarge: 'https://unsplash.it/1680/620?id=2',
            },
            {
                small: 'https://unsplash.it/640/360?id=3',
                medium: 'https://unsplash.it/1024/576?id=3',
                large: 'https://unsplash.it/1440/620?id=3',
                xlarge: 'https://unsplash.it/1680/620?id=3',
            },
        ]}
    />
);