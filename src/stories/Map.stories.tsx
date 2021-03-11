import * as React from 'react';
import { Meta, Story } from '@storybook/react';

import Map, { MapLocation } from 'components/sections/Map';
import Button from 'components/buttons/Button';
import ButtonGhost from 'components/buttons/ButtonGhost';
import FlyTo from 'components/base/icons/FlyTo';

export default {
    title: 'Sections/Map',
    component: Map,
} as Meta;

const exampleLocations: MapLocation[] = [
    {
        id: 'Sipplingen',
        meta: {
            title: `b.lateral GmbH & Co. KG </br>
                Lenzensteig 3 </br>
                78354 Sipplingen </br>
                am Bodensee </br>
                Deutschland`,
            superTitle: 'Anfahrt und Kontakt',
            primaryLabel: 'Primary',
            secondaryLabel: 'Secondary',
        },
        position: [47.79678, 9.09737],
        icon: {
            size: [20, 28],
            anchor: [10, 28],
            url: '/images/Marker.svg',
        },
        iconActive: {
            size: [50, 70],
            anchor: [25, 70],
            url: '/images/Marker.svg',
        },
    },
    {
        id: 'Paris',
        position: [48.864716, 2.349014],
        meta: {
            title: 'Standort Paris',
            superTitle: 'Standort',
            primaryLabel: 'Finde uns!',
            secondaryLabel: 'Contact',
        },
        icon: {
            size: [20, 28],
            anchor: [10, 28],
            url: '/images/Marker.svg',
        },
        iconActive: {
            size: [50, 70],
            anchor: [25, 70],
            url: '/images/Marker.svg',
        },
    },
    {
        id: 'Hamburg',
        position: [53.551086, 9.993682],
        meta: {
            title: 'Standort Hamburg',
            superTitle: 'Location',
            primaryLabel: 'Finde uns!',
            secondaryLabel: 'Contact',
        },
        icon: {
            size: [20, 28],
            anchor: [10, 28],
            url: '/images/Marker.svg',
        },
        iconActive: {
            size: [50, 70],
            anchor: [25, 70],
            url: '/images/Marker.svg',
        },
    },
];

export const Default: Story = () => <Map />;

export const WithLocations: Story = () => (
    <Map initialLocation="Sipplingen" locations={exampleLocations} />
);

export const ShowAllMarkersOnLoad: Story = () => (
    <Map
        initialLocation="Sipplingen"
        locations={exampleLocations}
        allMarkersVisible
        fitBoundsPadding={[30, 30]}
    />
);

export const WithFlyToControl: Story = () => (
    <Map
        initialLocation="Sipplingen"
        locations={exampleLocations}
        flyToControl={<FlyTo />}
        flyToZoom={12}
        allMarkersVisible
        fitBoundsPadding={[30, 30]}
    />
);

export const WithActions: Story = () => (
    <Map
        initialLocation="Sipplingen"
        locations={exampleLocations}
        flyToControl={<FlyTo />}
        flyToZoom={12}
        allMarkersVisible
        fitBoundsPadding={[30, 30]}
        primaryAction={({ isInverted, label }) => (
            <Button.View isInverted={isInverted}>
                <Button.Label>{label}</Button.Label>
            </Button.View>
        )}
        secondaryAction={({ isInverted, label }) => (
            <ButtonGhost.View isInverted={isInverted}>
                <ButtonGhost.Label>{label}</ButtonGhost.Label>
            </ButtonGhost.View>
        )}
    />
);

export const Mirrored: Story = () => (
    <Map
        isMirrored
        initialLocation="Sipplingen"
        locations={exampleLocations}
        flyToControl={<FlyTo />}
        flyToZoom={12}
        allMarkersVisible
        fitBoundsPadding={[30, 30]}
        primaryAction={({ isInverted, label }) => (
            <Button.View isInverted={isInverted}>
                <Button.Label>{label}</Button.Label>
            </Button.View>
        )}
        secondaryAction={({ isInverted, label }) => (
            <ButtonGhost.View isInverted={isInverted}>
                <ButtonGhost.Label>{label}</ButtonGhost.Label>
            </ButtonGhost.View>
        )}
    />
);

export const Inverted: Story = () => (
    <Map
        isInverted
        initialLocation="Sipplingen"
        locations={exampleLocations}
        flyToControl={<FlyTo />}
        flyToZoom={12}
        allMarkersVisible
        fitBoundsPadding={[30, 30]}
        primaryAction={({ isInverted, label }) => (
            <Button.View isInverted={isInverted}>
                <Button.Label>{label}</Button.Label>
            </Button.View>
        )}
        secondaryAction={({ isInverted, label }) => (
            <ButtonGhost.View isInverted={isInverted}>
                <ButtonGhost.Label>{label}</ButtonGhost.Label>
            </ButtonGhost.View>
        )}
    />
);
