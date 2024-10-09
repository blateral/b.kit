import React from 'react';
import { Meta, Story } from '@storybook/react';
import PointOfInterestOverview, {
    PointOfInterestOverviewComponent,
} from 'components/sections/pois/PointOfInterestOverview';
import AngleRight from 'components/base/icons/AngleRight';
import Pointer from 'components/buttons/Pointer';
import LocationPin from 'components/base/icons/LocationPin';
import Phone from 'components/base/icons/Phone';
import Mail from 'components/base/icons/Mail';
import Computer from 'components/base/icons/Computer';
import Map from 'components/base/icons/Map';

export default {
    title: 'Sections / POIs / PointOfInterestOverview',
    component: PointOfInterestOverviewComponent,
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
                id: 'poi_1',
                name: 'Beispiel POI 1',
                shortDescription:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptas non Poi 3 tempore fugit dolore numquam quidem adipisci cum fugiat a.',
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
                    'Fact 1',
                    'Fact 2',
                    'Fact 3',
                    'Fact 4',
                    'Fact 5',
                    'Fact 6',
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
                id: 'poi_2',
                name: 'Beispiel POI 2',
                shortDescription:
                    'Bavaria ipsum dolor sit amet hallelujah sog i, luja de Biagadn wea ko, dea ko da Kini mei des. Woaß Sauwedda hoam middn Edlweiss: Und da geh, woaß: Heid gfoids ma sagrisch guad Freibia vo de so schee ghupft wia gsprunga gschmeidig anbandeln ned woar. G’hupft wia gsprunga a ganze hallelujah sog i, luja wia. Baamwach af des is hoid aso, hi Schorsch. Obazda d’ Milli oa? No wann griagd ma nacha wos z’dringa jo mei nackata Weißwiaschd sodala hoid Gidarn. Wui gor dringma aweng no a Maß, ja, wo samma denn fias noch da Giasinga Heiwog: Gidarn auf der Oim, da gibt’s koa Sünd Biaschlegl schaugn, koa. Weida Biazelt blärrd af, Xaver do legst di nieda: Glei es Vergeltsgott a Prosit der Gmiadlichkeit des i moan scho aa Foidweg Heimatland san moand. Marei vui und sei obandeln Schuabladdla, g’hupft wia gsprunga.',
                infos: [
                    {
                        text: `Neues Rathaus, Münsterstraße , 12345 Example City`,
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
                facts: ['Fact 1', 'Fact 2', 'Fact 3', 'Fact 4', 'Fact 5'],
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
                id: 'poi_3',
                name: 'Beispiel POI 3',
                shortDescription:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptas non tempore fugit dolore numquam quidem adipisci cum fugiat a. POI1 hallelujah',
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
                facts: ['Fact 1', 'Fact 2', 'Fact 3', 'Fact 4', 'Fact 5'],
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

export const WithFiltering: Story = () => (
    <PointOfInterestOverview
        poiFilters={{
            categoryFilter: {},
            textFilter: {},
        }}
        pois={[
            {
                id: 'poi_1',
                name: 'Beispiel POI 1',
                shortDescription:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptas non Poi 3 tempore fugit dolore numquam quidem adipisci cum fugiat a.',
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
                    'Fact 1',
                    'Fact 2',
                    'Fact 3',
                    'Fact 4',
                    'Fact 5',
                    'Fact 6',
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
                id: 'poi_2',
                name: 'Beispiel POI 2',
                shortDescription:
                    'Bavaria ipsum dolor sit amet hallelujah sog i, luja de Biagadn wea ko, dea ko da Kini mei des. Woaß Sauwedda hoam middn Edlweiss: Und da geh, woaß: Heid gfoids ma sagrisch guad Freibia vo de so schee ghupft wia gsprunga gschmeidig anbandeln ned woar. G’hupft wia gsprunga a ganze hallelujah sog i, luja wia. Baamwach af des is hoid aso, hi Schorsch. Obazda d’ Milli oa? No wann griagd ma nacha wos z’dringa jo mei nackata Weißwiaschd sodala hoid Gidarn. Wui gor dringma aweng no a Maß, ja, wo samma denn fias noch da Giasinga Heiwog: Gidarn auf der Oim, da gibt’s koa Sünd Biaschlegl schaugn, koa. Weida Biazelt blärrd af, Xaver do legst di nieda: Glei es Vergeltsgott a Prosit der Gmiadlichkeit des i moan scho aa Foidweg Heimatland san moand. Marei vui und sei obandeln Schuabladdla, g’hupft wia gsprunga.',
                infos: [
                    {
                        text: `Neues Rathaus, Münsterstraße , 12345 Example City`,
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
                facts: ['Fact 1', 'Fact 2', 'Fact 3', 'Fact 4', 'Fact 5'],
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
                id: 'poi_3',
                name: 'Beispiel POI 3',
                shortDescription:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptas non tempore fugit dolore numquam quidem adipisci cum fugiat a. POI1 hallelujah',
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
                facts: ['Fact 1', 'Fact 2', 'Fact 3', 'Fact 4', 'Fact 5'],
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
        poiFilters={{
            categoryFilter: {},
            textFilter: {},
        }}
        pois={[
            {
                id: 'poi_1',
                name: 'Beispiel POI 1',
                shortDescription:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptas Poi 3 non tempore fugit dolore numquam quidem adipisci cum fugiat a.',
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
                    'Fact 1',
                    'Fact 2',
                    'Fact 3',
                    'Fact 4',
                    'Fact 5',
                    'Fact 6',
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
                id: 'poi_2',
                name: 'Beispiel POI 2',
                shortDescription:
                    'Bavaria ipsum dolor sit amet hallelujah sog i, luja de Biagadn wea ko, dea ko da Kini mei des. Woaß Sauwedda hoam middn Edlweiss: Und da geh, woaß: Heid gfoids ma sagrisch guad Freibia vo de so schee ghupft wia gsprunga gschmeidig anbandeln ned woar. G’hupft wia gsprunga a ganze hallelujah sog i, luja wia. Baamwach af des is hoid aso, hi Schorsch. Obazda d’ Milli oa? No wann griagd ma nacha wos z’dringa jo mei nackata Weißwiaschd sodala hoid Gidarn. Wui gor dringma aweng no a Maß, ja, wo samma denn fias noch da Giasinga Heiwog: Gidarn auf der Oim, da gibt’s koa Sünd Biaschlegl schaugn, koa. Weida Biazelt blärrd af, Xaver do legst di nieda: Glei es Vergeltsgott a Prosit der Gmiadlichkeit des i moan scho aa Foidweg Heimatland san moand. Marei vui und sei obandeln Schuabladdla, g’hupft wia gsprunga.',
                infos: [
                    {
                        text: `Neues Rathaus, Münsterstraße , 12345 Example City`,
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
                facts: ['Fact 1', 'Fact 2', 'Fact 3', 'Fact 4', 'Fact 5'],
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
                id: 'poi_3',
                name: 'Beispiel POI 3',
                shortDescription:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptas non tempore fugit dolore numquam quidem adipisci cum fugiat a. POI1 hallelujah',
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
                facts: ['Fact 1', 'Fact 2', 'Fact 3', 'Fact 4', 'Fact 5'],
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
        poiFilters={{
            categoryFilter: {},
            textFilter: {},
        }}
        pois={[
            {
                id: 'poi_1',
                name: 'Beispiel POI 1',
                shortDescription:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptas non tempore Poi 3 fugit dolore numquam quidem adipisci cum fugiat a.',
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
                    'Fact 1',
                    'Fact 2',
                    'Fact 3',
                    'Fact 4',
                    'Fact 5',
                    'Fact 6',
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
                id: 'poi_2',
                name: 'Beispiel POI 2',
                shortDescription:
                    'Bavaria ipsum dolor sit amet hallelujah sog i, luja de Biagadn wea ko, dea ko da Kini mei des. Woaß Sauwedda hoam middn Edlweiss: Und da geh, woaß: Heid gfoids ma sagrisch guad Freibia vo de so schee ghupft wia gsprunga gschmeidig anbandeln ned woar. G’hupft wia gsprunga a ganze hallelujah sog i, luja wia. Baamwach af des is hoid aso, hi Schorsch. Obazda d’ Milli oa? No wann griagd ma nacha wos z’dringa jo mei nackata Weißwiaschd sodala hoid Gidarn. Wui gor dringma aweng no a Maß, ja, wo samma denn fias noch da Giasinga Heiwog: Gidarn auf der Oim, da gibt’s koa Sünd Biaschlegl schaugn, koa. Weida Biazelt blärrd af, Xaver do legst di nieda: Glei es Vergeltsgott a Prosit der Gmiadlichkeit des i moan scho aa Foidweg Heimatland san moand. Marei vui und sei obandeln Schuabladdla, g’hupft wia gsprunga.',
                infos: [
                    {
                        text: `Neues Rathaus, Münsterstraße , 12345 Example City`,
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
                facts: ['Fact 1', 'Fact 2', 'Fact 3', 'Fact 4', 'Fact 5'],
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
                id: 'poi_3',
                name: 'Beispiel POI 3',
                shortDescription:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptas non tempore fugit dolore numquam quidem adipisci cum fugiat a. POI1 hallelujah',
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
                facts: ['Fact 1', 'Fact 2', 'Fact 3', 'Fact 4', 'Fact 5'],
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
