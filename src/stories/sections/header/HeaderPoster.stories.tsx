import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import HeaderPoster from 'components/sections/header/HeaderPoster';

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
    parameters: {
        status: {
            type: 'preview',
        },
    },
} as Meta;

export const Full: Story = () => (
    <HeaderPoster
        bgImage={{
            small: 'https://unsplash.it/640/360',
            medium: 'https://unsplash.it/1024/576',
            large: 'https://unsplash.it/1440/620',
            xlarge: 'https://unsplash.it/1680/620',
        }}
    />
);
