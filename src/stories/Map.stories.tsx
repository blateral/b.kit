import * as React from 'react';
import { Meta, Story } from '@storybook/react';

import Map from 'components/sections/Map';

export default {
    title: 'Sections/Map',
    component: Map,
} as Meta;

export const Default: Story = () => <Map />;
export const WithLocations: Story = () => (
    <Map
        activeLocationId="Tuttlingen"
        locations={[
            {
                id: 'Sipplingen',
                position: { lat: 51.505, lng: -0.09 },
                icon: {
                    size: [20, 20],
                    anchor: [10, 20],
                    url:
                        'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png',
                },
                iconActive: {
                    size: [60, 60],
                    anchor: [30, 60],
                    url:
                        'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png',
                },
            },
            {
                id: 'Tuttlingen',
                position: { lat: 47.98464, lng: 8.8177 },
                icon: {
                    size: [20, 20],
                    anchor: [10, 20],
                    url:
                        'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png',
                },
                iconActive: {
                    size: [60, 60],
                    anchor: [30, 60],
                    url:
                        'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png',
                },
            },
        ]}
    />
);

export const Inverted: Story = () => <Map isInverted />;
