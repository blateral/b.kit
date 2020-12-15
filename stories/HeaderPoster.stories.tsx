import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import HeaderPoster from '../src/components/sections/header/HeaderPoster';

export default {
    title: 'Sections/Header/HeaderPoster',
    component: HeaderPoster,
    decorators: [
        (Story) => (
            <div style={{ height: '80vh' }}>
                <Story />
            </div>
        ),
    ],
} as Meta;

export const Full: Story = () => (
    <HeaderPoster
        bgImage={{
            small: 'https://unsplash.it/640/360',
            medium: 'https://unsplash.it/1024/576',
            large: 'https://unsplash.it/1440/620',
            xlarge: 'https://unsplash.it/1680/620',
            webp: {
                small: 'https://unsplash.it/640/360.webp',
                medium: 'https://unsplash.it/1024/576.webp',
                large: 'https://unsplash.it/1440/620.webp',
                xlarge: 'https://unsplash.it/1680/620.webp',
            },
        }}
    />
);
