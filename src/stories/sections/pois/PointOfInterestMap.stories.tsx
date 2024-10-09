import React from 'react';
import { Meta, Story } from '@storybook/react';
import PointOfInterestMap, {
    MapPOI,
    PointOfInterestMapComponent,
} from 'components/sections/pois/PointOfInterestMap';
import Computer from 'components/base/icons/Computer';
import Phone from 'components/base/icons/Phone';
import Mail from 'components/base/icons/Mail';
import Map from 'components/base/icons/Map';

import marker from '../../../../public/images/Marker.svg';
import LocationPin from 'components/base/icons/LocationPin';
import Pointer from 'components/buttons/Pointer';
import AngleRight from 'components/base/icons/AngleRight';
import FlyTo from 'components/base/icons/FlyTo';

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
        name: 'POI A',
        position: [47.79678, 9.09737],
        facts: ['Fact 1', 'Fact 2', 'Fact 3', 'Fact 4', 'Fact 5'],
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit turpis cursus in hac habitasse platea dictumst quisque. Elit ut aliquam purus sit amet. Hendrerit dolor magna eget est lorem ipsum dolor sit amet. Sollicitudin tempor id eu nisl nunc mi ipsum.',
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
        icon: {
            size: [20, 28],
            anchor: [10, 28],
            sizeActive: [50, 70],
            anchorActive: [25, 70],
            url: marker,
        },
        action: (
            <Pointer.View as="a" href="#" onClick={console.log}>
                <Pointer.Label>Details</Pointer.Label>
                <Pointer.Icon>
                    <AngleRight />
                </Pointer.Icon>
            </Pointer.View>
        ),
    },
    {
        id: 'id2',
        name: 'Spielplatz Schloss Rauenstein',
        position: [48.864716, 2.349014],
        facts: ['Fact 1', 'Fact 2', 'Fact 3'],
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        id: 'id3',
        name: 'POI C',
        position: [53.551086, 9.993682],
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
        ],
        action: (
            <Pointer.View as="a" href="#" onClick={console.log}>
                <Pointer.Label>Details</Pointer.Label>
                <Pointer.Icon>
                    <AngleRight />
                </Pointer.Icon>
            </Pointer.View>
        ),
    },
];

export const Default: Story = () => <PointOfInterestMap />;

export const WithPOIs: Story = () => (
    <PointOfInterestMap
        pois={pois}
        flyToZoom={12}
        allMarkersOnInit
        fitBoundsPadding={[30, 30]}
    />
);

export const WithFilter: Story = () => (
    <PointOfInterestMap
        poiFilters={{
            categoryFilter: {},
            textFilter: {},
        }}
        pois={pois}
        flyToZoom={12}
        allMarkersOnInit
        fitBoundsPadding={[30, 30]}
    />
);

export const WithInitialFilters: Story = () => (
    <PointOfInterestMap
        initialPoiFilters={{ categoryFilter: ['id1'], textFilter: 'id2' }}
        poiFilters={{
            categoryFilter: {},
            textFilter: {},
        }}
        pois={pois}
        flyToZoom={12}
        allMarkersOnInit
        fitBoundsPadding={[30, 30]}
    />
);

export const WithCustomFilters: Story = () => (
    <PointOfInterestMap
        poiFilters={({ pois, filters, setFilters }) => (
            <div>
                <input
                    value={filters.textFilter || ''}
                    onChange={(e) =>
                        setFilters((prev) => ({
                            ...prev,
                            textFilter: e.target.value,
                        }))
                    }
                />
                <select
                    value={filters.categoryFilter?.[0] || ''}
                    onChange={(e) => {
                        setFilters((prev) => ({
                            ...prev,
                            categoryFilter: [
                                ...(filters.categoryFilter || []),
                                e.target.value,
                            ],
                        }));
                    }}
                >
                    <option value=""></option>
                    {pois.map((poi) => (
                        <option key={poi.id} value={poi.id}>
                            {poi.name}
                        </option>
                    ))}
                </select>
            </div>
        )}
        pois={pois}
        flyToZoom={12}
        allMarkersOnInit
        fitBoundsPadding={[30, 30]}
    />
);

export const WithInitialPOI: Story = () => (
    <PointOfInterestMap
        pois={pois}
        initialPointOfInterest="id2"
        flyToZoom={12}
        allMarkersOnInit
        fitBoundsPadding={[30, 30]}
        poiFilters={{
            categoryFilter: {},
            textFilter: {},
        }}
    />
);

export const Large: Story = () => (
    <PointOfInterestMap
        size="large"
        pois={pois}
        flyToZoom={12}
        allMarkersOnInit
        fitBoundsPadding={[30, 30]}
        poiFilters={{
            categoryFilter: {},
            textFilter: {},
        }}
    />
);

export const LargeWithHeader: Story = () => (
    <>
        <header data-navbar-ident="top-main-bottom-beforeContent" />
        <PointOfInterestMap
            size="large"
            pois={pois}
            flyToZoom={12}
            allMarkersOnInit
            fitBoundsPadding={[30, 30]}
            poiFilters={{
                categoryFilter: {},
                textFilter: {},
            }}
        />
    </>
);

export const WithGeolocation: Story = () => (
    <>
        <header data-navbar-ident="top-main-bottom-beforeContent" />
        <PointOfInterestMap
            size="large"
            pois={pois}
            flyToZoom={12}
            allMarkersOnInit
            fitBoundsPadding={[30, 30]}
            showOwnPosition
            poiFilters={{
                categoryFilter: {},
                textFilter: {},
            }}
        />
    </>
);

export const CustomCurrentPosMarker: Story = () => (
    <>
        <header data-navbar-ident="top-main-bottom-beforeContent" />
        <PointOfInterestMap
            size="large"
            pois={pois}
            flyToZoom={12}
            allMarkersOnInit
            fitBoundsPadding={[30, 30]}
            currentPosMarker={{
                size: [20, 28],
                anchor: [10, 28],
                sizeActive: [50, 70],
                anchorActive: [25, 70],
                url: marker,
            }}
            showOwnPosition
            poiFilters={{
                categoryFilter: {},
                textFilter: {},
            }}
        />
    </>
);

export const CustomLocationRequestIcon: Story = () => (
    <>
        <header data-navbar-ident="top-main-bottom-beforeContent" />
        <PointOfInterestMap
            size="large"
            pois={pois}
            flyToZoom={12}
            allMarkersOnInit
            fitBoundsPadding={[30, 30]}
            customLocationRequest={<FlyTo />}
            showOwnPosition
            poiFilters={{
                categoryFilter: {},
                textFilter: {},
            }}
        />
    </>
);
