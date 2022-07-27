import React from 'react';
import { Meta, Story } from '@storybook/react';
import PointOfInterestOverview from 'components/sections/pois/PointOfInterestOverview';
import AngleRight from 'components/base/icons/AngleRight';
import Pointer from 'components/buttons/Pointer';
import LocationPin from 'components/base/icons/LocationPin';
import Phone from 'components/base/icons/Phone';
import Mail from 'components/base/icons/Mail';
import Computer from 'components/base/icons/Computer';
import Map from 'components/base/icons/Map';

export default {
    title: 'Sections / POIs / PointOfInterestOverview',
    component: PointOfInterestOverview,
    parameters: {
        status: {
            type: ['preview'],
        },
    },
} as Meta;

export const Default: Story = () => (
    <PointOfInterestOverview
        pois={[
            {
                name: 'Beispiel POI 1',
                shortDescription:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptas non tempore fugit dolore numquam quidem adipisci cum fugiat a.',
                infos: [
                    {
                        text: `Altes Rathaus, Münsterstraße , 12345 Example City`,
                        icon: () => <LocationPin />,
                    },
                    {
                        text: `Auf Karte anzeigen`,
                        icon: () => <Map />,
                    },
                    {
                        text: `07551 / 888666`,
                        icon: () => <Phone />,
                    },
                    {
                        text: `max.mustermann@gmail.com`,
                        icon: () => <Mail />,
                    },
                    {
                        text: `www.einrichtung.com`,
                        icon: () => <Computer />,
                    },
                ],
                facts: [
                    'Feature 1',
                    'Feature 2',
                    'Feature 3',
                    'Feature 4',
                    'Feature 5',
                ],
                action: (isInverted) => (
                    <Pointer.View
                        as="a"
                        href="#"
                        isInverted={isInverted}
                        onClick={console.log}
                    >
                        <Pointer.Label>Details</Pointer.Label>
                        <Pointer.Icon>
                            <AngleRight />
                        </Pointer.Icon>
                    </Pointer.View>
                ),
            },
            {
                name: 'Beispiel POI 2',
                shortDescription:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptas non tempore fugit dolore numquam quidem adipisci cum fugiat a.',
                infos: [
                    {
                        text: `Altes Rathaus, Münsterstraße , 12345 Example City`,
                        icon: () => <LocationPin />,
                    },
                    {
                        text: `Auf Karte anzeigen`,
                        icon: () => <Map />,
                    },
                    {
                        text: `07551 / 888666`,
                        icon: () => <Phone />,
                    },
                    {
                        text: `max.mustermann@gmail.com`,
                        icon: () => <Mail />,
                    },
                    {
                        text: `www.einrichtung.com`,
                        icon: () => <Computer />,
                    },
                ],
                facts: [
                    'Feature 1',
                    'Feature 2',
                    'Feature 3',
                    'Feature 4',
                    'Feature 5',
                ],
                action: (isInverted) => (
                    <Pointer.View
                        as="a"
                        href="#"
                        isInverted={isInverted}
                        onClick={console.log}
                    >
                        <Pointer.Label>Details</Pointer.Label>
                        <Pointer.Icon>
                            <AngleRight />
                        </Pointer.Icon>
                    </Pointer.View>
                ),
            },
            {
                name: 'Beispiel POI 3',
                shortDescription:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptas non tempore fugit dolore numquam quidem adipisci cum fugiat a.',
                infos: [
                    {
                        text: `Altes Rathaus, Münsterstraße , 12345 Example City`,
                        icon: () => <LocationPin />,
                    },
                    {
                        text: `Auf Karte anzeigen`,
                        icon: () => <Map />,
                    },
                    {
                        text: `07551 / 888666`,
                        icon: () => <Phone />,
                    },
                    {
                        text: `max.mustermann@gmail.com`,
                        icon: () => <Mail />,
                    },
                    {
                        text: `www.einrichtung.com`,
                        icon: () => <Computer />,
                    },
                ],
                facts: [
                    'Feature 1',
                    'Feature 2',
                    'Feature 3',
                    'Feature 4',
                    'Feature 5',
                ],
                action: (isInverted) => (
                    <Pointer.View
                        as="a"
                        href="#"
                        isInverted={isInverted}
                        onClick={console.log}
                    >
                        <Pointer.Label>Details</Pointer.Label>
                        <Pointer.Icon>
                            <AngleRight />
                        </Pointer.Icon>
                    </Pointer.View>
                ),
            },
        ]}
    />
);

export const WithBackground: Story = () => (
    <PointOfInterestOverview
        bgMode="full"
        pois={[
            {
                name: 'Beispiel POI 1',
                shortDescription:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptas non tempore fugit dolore numquam quidem adipisci cum fugiat a.',
                infos: [
                    {
                        text: `Altes Rathaus, Münsterstraße , 12345 Example City`,
                        icon: () => <LocationPin />,
                    },
                    {
                        text: `Auf Karte anzeigen`,
                        icon: () => <Map />,
                    },
                    {
                        text: `07551 / 888666`,
                        icon: () => <Phone />,
                    },
                    {
                        text: `max.mustermann@gmail.com`,
                        icon: () => <Mail />,
                    },
                    {
                        text: `www.einrichtung.com`,
                        icon: () => <Computer />,
                    },
                ],
                facts: [
                    'Feature 1',
                    'Feature 2',
                    'Feature 3',
                    'Feature 4',
                    'Feature 5',
                ],
                action: (isInverted) => (
                    <Pointer.View
                        as="a"
                        href="#"
                        isInverted={isInverted}
                        onClick={console.log}
                    >
                        <Pointer.Label>Details</Pointer.Label>
                        <Pointer.Icon>
                            <AngleRight />
                        </Pointer.Icon>
                    </Pointer.View>
                ),
            },
            {
                name: 'Beispiel POI 2',
                shortDescription:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptas non tempore fugit dolore numquam quidem adipisci cum fugiat a.',
                infos: [
                    {
                        text: `Altes Rathaus, Münsterstraße , 12345 Example City`,
                        icon: () => <LocationPin />,
                    },
                    {
                        text: `Auf Karte anzeigen`,
                        icon: () => <Map />,
                    },
                    {
                        text: `07551 / 888666`,
                        icon: () => <Phone />,
                    },
                    {
                        text: `max.mustermann@gmail.com`,
                        icon: () => <Mail />,
                    },
                    {
                        text: `www.einrichtung.com`,
                        icon: () => <Computer />,
                    },
                ],
                facts: [
                    'Feature 1',
                    'Feature 2',
                    'Feature 3',
                    'Feature 4',
                    'Feature 5',
                ],
                action: (isInverted) => (
                    <Pointer.View
                        as="a"
                        href="#"
                        isInverted={isInverted}
                        onClick={console.log}
                    >
                        <Pointer.Label>Details</Pointer.Label>
                        <Pointer.Icon>
                            <AngleRight />
                        </Pointer.Icon>
                    </Pointer.View>
                ),
            },
            {
                name: 'Beispiel POI 3',
                shortDescription:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptas non tempore fugit dolore numquam quidem adipisci cum fugiat a.',
                infos: [
                    {
                        text: `Altes Rathaus, Münsterstraße , 12345 Example City`,
                        icon: () => <LocationPin />,
                    },
                    {
                        text: `Auf Karte anzeigen`,
                        icon: () => <Map />,
                    },
                    {
                        text: `07551 / 888666`,
                        icon: () => <Phone />,
                    },
                    {
                        text: `max.mustermann@gmail.com`,
                        icon: () => <Mail />,
                    },
                    {
                        text: `www.einrichtung.com`,
                        icon: () => <Computer />,
                    },
                ],
                facts: [
                    'Feature 1',
                    'Feature 2',
                    'Feature 3',
                    'Feature 4',
                    'Feature 5',
                ],
                action: (isInverted) => (
                    <Pointer.View
                        as="a"
                        href="#"
                        isInverted={isInverted}
                        onClick={console.log}
                    >
                        <Pointer.Label>Details</Pointer.Label>
                        <Pointer.Icon>
                            <AngleRight />
                        </Pointer.Icon>
                    </Pointer.View>
                ),
            },
        ]}
    />
);

export const Inverted: Story = () => (
    <PointOfInterestOverview
        bgMode="inverted"
        pois={[
            {
                name: 'Beispiel POI 1',
                shortDescription:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptas non tempore fugit dolore numquam quidem adipisci cum fugiat a.',
                infos: [
                    {
                        text: `Altes Rathaus, Münsterstraße , 12345 Example City`,
                        icon: () => <LocationPin />,
                    },
                    {
                        text: `Auf Karte anzeigen`,
                        icon: () => <Map />,
                    },
                    {
                        text: `07551 / 888666`,
                        icon: () => <Phone />,
                    },
                    {
                        text: `max.mustermann@gmail.com`,
                        icon: () => <Mail />,
                    },
                    {
                        text: `www.einrichtung.com`,
                        icon: () => <Computer />,
                    },
                ],
                facts: [
                    'Feature 1',
                    'Feature 2',
                    'Feature 3',
                    'Feature 4',
                    'Feature 5',
                ],
                action: (isInverted) => (
                    <Pointer.View
                        as="a"
                        href="#"
                        isInverted={isInverted}
                        onClick={console.log}
                    >
                        <Pointer.Label>Details</Pointer.Label>
                        <Pointer.Icon>
                            <AngleRight />
                        </Pointer.Icon>
                    </Pointer.View>
                ),
            },
            {
                name: 'Beispiel POI 2',
                shortDescription:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptas non tempore fugit dolore numquam quidem adipisci cum fugiat a.',
                infos: [
                    {
                        text: `Altes Rathaus, Münsterstraße , 12345 Example City`,
                        icon: () => <LocationPin />,
                    },
                    {
                        text: `Auf Karte anzeigen`,
                        icon: () => <Map />,
                    },
                    {
                        text: `07551 / 888666`,
                        icon: () => <Phone />,
                    },
                    {
                        text: `max.mustermann@gmail.com`,
                        icon: () => <Mail />,
                    },
                    {
                        text: `www.einrichtung.com`,
                        icon: () => <Computer />,
                    },
                ],
                facts: [
                    'Feature 1',
                    'Feature 2',
                    'Feature 3',
                    'Feature 4',
                    'Feature 5',
                ],
                action: (isInverted) => (
                    <Pointer.View
                        as="a"
                        href="#"
                        isInverted={isInverted}
                        onClick={console.log}
                    >
                        <Pointer.Label>Details</Pointer.Label>
                        <Pointer.Icon>
                            <AngleRight />
                        </Pointer.Icon>
                    </Pointer.View>
                ),
            },
            {
                name: 'Beispiel POI 3',
                shortDescription:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptas non tempore fugit dolore numquam quidem adipisci cum fugiat a.',
                infos: [
                    {
                        text: `Altes Rathaus, Münsterstraße , 12345 Example City`,
                        icon: () => <LocationPin />,
                    },
                    {
                        text: `Auf Karte anzeigen`,
                        icon: () => <Map />,
                    },
                    {
                        text: `07551 / 888666`,
                        icon: () => <Phone />,
                    },
                    {
                        text: `max.mustermann@gmail.com`,
                        icon: () => <Mail />,
                    },
                    {
                        text: `www.einrichtung.com`,
                        icon: () => <Computer />,
                    },
                ],
                facts: [
                    'Feature 1',
                    'Feature 2',
                    'Feature 3',
                    'Feature 4',
                    'Feature 5',
                ],
                action: (isInverted) => (
                    <Pointer.View
                        as="a"
                        href="#"
                        isInverted={isInverted}
                        onClick={console.log}
                    >
                        <Pointer.Label>Details</Pointer.Label>
                        <Pointer.Icon>
                            <AngleRight />
                        </Pointer.Icon>
                    </Pointer.View>
                ),
            },
        ]}
    />
);
