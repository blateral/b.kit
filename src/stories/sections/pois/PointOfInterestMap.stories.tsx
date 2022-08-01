import React from 'react';
import { Meta, Story } from '@storybook/react';
import PointOfInterestMap, {
    MapPOI,
    PointOfInterestMapComponent,
} from 'components/sections/pois/PointOfInterestMap';

import marker from '../../../../public/images/Marker.svg';

export default {
    title: 'Sections / POIs / PointOfInterestMap',
    component: PointOfInterestMapComponent,
    parameters: {
        status: {
            type: ['preview'],
        },
    },
} as Meta;

const pois: MapPOI[] = [
    {
        id: 'id1',
        position: [47.79678, 9.09737],
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
    },
    {
        id: 'id3',
        position: [53.551086, 9.993682],
    },
];

export const Default: Story = () => <PointOfInterestMap />;

export const WithPOIs: Story = () => (
    <PointOfInterestMap
        pois={pois}
        initialPointOfInterest="id2"
        flyToZoom={12}
        allMarkersOnInit
        fitBoundsPadding={[30, 30]}
    />
);

export const Large: Story = () => (
    <PointOfInterestMap
        size="large"
        pois={pois}
        initialPointOfInterest="id2"
        flyToZoom={12}
        allMarkersOnInit
        fitBoundsPadding={[30, 30]}
    />
);

export const LargeWithHeader: Story = () => (
    <>
        <header data-navbar-ident="top-main-bottom-beforeContent" />
        <PointOfInterestMap
            size="large"
            pois={pois}
            initialPointOfInterest="id2"
            flyToZoom={12}
            allMarkersOnInit
            fitBoundsPadding={[30, 30]}
        />
    </>
);
