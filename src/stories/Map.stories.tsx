/* eslint-disable react/display-name */
import * as React from 'react';
import { Meta, Story } from '@storybook/react';

import Map, { MapLocation, MapComponent } from 'components/sections/Map';
import Button from 'components/buttons/Button';
import ButtonGhost from 'components/buttons/ButtonGhost';
import FlyTo from 'components/base/icons/FlyTo';
import Phone from 'components/base/icons/Phone';
import Mail from 'components/base/icons/Mail';
import Youtube from 'components/base/icons/socials/Youtube';
import ArrowRight from 'components/base/icons/ArrowRight';

import marker from '../../public/images/Marker.svg';

export default {
    title: 'Sections/Map',
    component: MapComponent,
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
            primaryAction: (isInverted) => (
                <Button.View isInverted={isInverted}>
                    <Button.Label>Primär</Button.Label>
                </Button.View>
            ),
            secondaryAction: (isInverted) => (
                <ButtonGhost.View isInverted={isInverted}>
                    <ButtonGhost.Label>Sekundär</ButtonGhost.Label>
                </ButtonGhost.View>
            ),
            contact: [
                { icon: <Phone />, label: '9879534957943' },
                {
                    icon: <Mail />,
                    label:
                        '<a href="tel:musterman@mustermail.com">musterman@mustermail.com</a>',
                },
                { icon: <Youtube />, label: '9879534957943' },
            ],
        },
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
        id: 'Paris',
        position: [48.864716, 2.349014],
        meta: {
            title: 'Standort Paris',
            superTitle: 'Standort',
            primaryAction: (isInverted) => (
                <Button.View isInverted={isInverted}>
                    <Button.Label>Find us</Button.Label>
                </Button.View>
            ),
            secondaryAction: (isInverted) => (
                <ButtonGhost.View isInverted={isInverted}>
                    <ButtonGhost.Label>Contact</ButtonGhost.Label>
                </ButtonGhost.View>
            ),
            contact: [
                { icon: <Phone />, label: '9879534957943' },
                {
                    icon: <Mail />,
                    label:
                        '<a href="tel:musterman@mustermail.com">musterman@mustermail.com</a>',
                },
            ],
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
        id: 'Hamburg',
        position: [53.551086, 9.993682],
        meta: {
            title: 'Standort Hamburg',
            superTitle: 'Location',
            primaryAction: (isInverted) => (
                <Button.View isInverted={isInverted}>
                    <Button.Label>Finde uns</Button.Label>
                </Button.View>
            ),
            secondaryAction: (isInverted) => (
                <ButtonGhost.View isInverted={isInverted}>
                    <ButtonGhost.Label>Kontakt</ButtonGhost.Label>
                </ButtonGhost.View>
            ),
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

export const Default: Story = () => <Map />;

export const WithLocations: Story = () => (
    <Map initialLocation="Sipplingen" locations={exampleLocations} />
);

export const ShowAllMarkersOnLoad: Story = () => (
    <Map
        initialLocation="Sipplingen"
        locations={exampleLocations}
        allMarkersOnInit
        fitBoundsPadding={[30, 30]}
    />
);

export const WithSingleLocation: Story = () => (
    <Map
        initialLocation="Sipplingen"
        locations={[
            {
                id: 'Sipplingen',
                meta: {
                    title: `b.lateral GmbH & Co. KG </br>
                    Lenzensteig 3 </br>
                    78354 Sipplingen </br>
                    am Bodensee </br>
                    Deutschland`,
                    superTitle: 'Anfahrt und Kontakt',
                    primaryAction: (isInverted) => (
                        <Button.View isInverted={isInverted}>
                            <Button.Label>Primary</Button.Label>
                        </Button.View>
                    ),
                    secondaryAction: (isInverted) => (
                        <ButtonGhost.View isInverted={isInverted}>
                            <ButtonGhost.Label>Secondary</ButtonGhost.Label>
                        </ButtonGhost.View>
                    ),
                },
                position: [47.79678, 9.09737],
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
        initialLocation="Sipplingen"
        locations={exampleLocations}
        flyToControl={<FlyTo />}
        flyToZoom={12}
        allMarkersOnInit
        fitBoundsPadding={[30, 30]}
    />
);

export const Mirrored: Story = () => (
    <Map
        isMirrored
        initialLocation="Sipplingen"
        locations={exampleLocations}
        flyToControl={<FlyTo />}
        flyToZoom={12}
        allMarkersOnInit
        fitBoundsPadding={[30, 30]}
    />
);

export const Inverted: Story = () => (
    <Map
        bgMode="inverted"
        initialLocation="Sipplingen"
        locations={exampleLocations}
        flyToControl={<FlyTo />}
        flyToZoom={12}
        allMarkersOnInit
        fitBoundsPadding={[30, 30]}
    />
);

export const WithCustomControls: Story = () => (
    <Map
        initialLocation="Sipplingen"
        locations={exampleLocations}
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
        initialLocation="Sipplingen"
        locations={exampleLocations}
        flyToControl={<FlyTo />}
        flyToZoom={12}
        allMarkersOnInit
        fitBoundsPadding={[30, 30]}
        dot={({ isActive }) => (
            <ArrowRight iconColor={isActive ? 'red' : 'grey'} />
        )}
    />
);
