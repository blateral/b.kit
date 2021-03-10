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
        locations={[
            {
                id: 'Sipplingen',
                position: { lat: 51.505, lng: -0.09 },
                icon: {
                    url:
                        'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png',
                },
            },
        ]}
    />
);

export const Inverted: Story = () => <Map isInverted />;
