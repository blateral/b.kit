/* eslint-disable react/display-name */
import * as React from 'react';
import { Meta, Story } from '@storybook/react';

import Map, { MapLocation, MapComponent } from 'components/sections/Map';
import FlyTo from 'components/base/icons/FlyTo';
import ArrowRight from 'components/base/icons/ArrowRight';

import marker from '../../../public/images/Marker.svg';

export default {
    title: 'Sections/Map',
    component: MapComponent,
    parameters: {
        status: {
            type: 'preview',
        },
    },
} as Meta;

const locations: MapLocation[] = [
    {
        id: 'id1',
        position: [47.79678, 9.09737],

        image: ['https://placehold.it/40'],
        companyName: 'Example Company 1',
        superTitle: 'Anfahrt & Kontakt',

        address: {
            street: 'Example Street 1',
            postalCode: '12345',
            city: 'Example City',
            country: 'DE',
        },

        contact: {
            telephone: { label: '+49 123 1234567' },
            email: { label: 'example@email.com' },
        },

        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        icon: {
            size: [20, 28],
            anchor: [10, 28],
            sizeActive: [50, 70],
            anchorActive: [25, 70],
            url: marker,
        },
    },
    {
        id: 'id2',
        position: [48.864716, 2.349014],

        companyName: 'Example Company 2',
        superTitle: 'Anfahrt & Kontakt',
        image: ['https://placehold.it/40'],
        address: {
            street: 'Example Street 1',
            postalCode: '12345',
            city: 'Example City',
            country: 'FR',
        },
        contact: {
            telephone: { label: '+49 123 1234567' },
        },

        icon: {
            size: [20, 28],
            anchor: [10, 28],
            sizeActive: [50, 70],
            anchorActive: [25, 70],
            url: marker,
        },
    },
    {
        id: 'id3',
        position: [53.551086, 9.993682],

        title: 'Title',
        companyName: 'Example Company 3',
        superTitle: 'Anfahrt & Kontakt',

        address: {
            street: 'Example Street 1',
            postalCode: '12345',
            city: 'Example City',
            country: 'DE',
        },

        contact: {
            telephone: {
                label: '+49 123 1234567',
                icon: ({ isInverted }) => (
                    <ArrowRight iconColor={isInverted ? '#fff' : '#000'} />
                ),
            },
        },
        icon: {
            size: [20, 28],
            anchor: [10, 28],
            sizeActive: [50, 70],
            anchorActive: [25, 70],
            url: marker,
        },
    },
];

export const Default: Story = () => (
    <Map initialLocation="id1" locations={locations} />
);

export const ShowAllMarkersOnLoad: Story = () => (
    <Map
        initialLocation="id1"
        locations={locations}
        allMarkersOnInit
        fitBoundsPadding={[30, 30]}
    />
);

export const WithSingleLocation: Story = () => (
    <Map
        initialLocation="id1"
        locations={[
            {
                id: 'id1',
                position: [47.79678, 9.09737],

                image: ['https://placehold.it/40'],
                companyName: 'Example Company 1',
                superTitle: 'Anfahrt & Kontakt',

                address: {
                    street: 'Example Street 1',
                    postalCode: '12345',
                    city: 'Example City',
                    country: 'DE',
                },

                contact: {
                    telephone: { label: '+49 123 1234567' },
                    email: { label: 'example@email.com' },
                },

                description:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                icon: {
                    size: [20, 28],
                    anchor: [10, 28],
                    sizeActive: [50, 70],
                    anchorActive: [25, 70],
                    url: marker,
                },
            },
        ]}
    />
);

export const WithFlyToControl: Story = () => (
    <Map
        initialLocation="id1"
        locations={locations}
        flyToControl={<FlyTo />}
        flyToZoom={12}
        allMarkersOnInit
        fitBoundsPadding={[30, 30]}
    />
);

export const Mirrored: Story = () => (
    <Map
        isMirrored
        initialLocation="id1"
        locations={locations}
        flyToControl={<FlyTo />}
        flyToZoom={12}
        allMarkersOnInit
        fitBoundsPadding={[30, 30]}
    />
);

export const WithBackground: Story = () => (
    <Map
        bgMode="full"
        initialLocation="id1"
        locations={locations}
        flyToControl={<FlyTo />}
        flyToZoom={12}
        allMarkersOnInit
        fitBoundsPadding={[30, 30]}
    />
);

export const Inverted: Story = () => (
    <Map
        bgMode="inverted"
        initialLocation="id1"
        locations={locations}
        flyToControl={<FlyTo />}
        flyToZoom={12}
        allMarkersOnInit
        fitBoundsPadding={[30, 30]}
    />
);

export const WithCustomControls: Story = () => (
    <Map
        initialLocation="id1"
        locations={locations}
        flyToControl={<FlyTo />}
        flyToZoom={12}
        allMarkersOnInit
        fitBoundsPadding={[30, 30]}
        controlNext={() => <ArrowRight />}
        controlPrev={() => <ArrowRight />}
    />
);

export const WithCustomDots: Story = () => (
    <Map
        initialLocation="id1"
        locations={locations}
        flyToControl={<FlyTo />}
        flyToZoom={12}
        allMarkersOnInit
        fitBoundsPadding={[30, 30]}
        dot={({ isActive }) => (
            <ArrowRight iconColor={isActive ? 'red' : 'grey'} />
        )}
    />
);

export const WithCustomMapProvider: Story = () => (
    <Map
        provider="https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}"
        attribution="Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012"
        initialLocation="id1"
        locations={locations}
        flyToControl={<FlyTo />}
        flyToZoom={12}
        allMarkersOnInit
        fitBoundsPadding={[30, 30]}
    />
);
