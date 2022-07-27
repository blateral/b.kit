import React from 'react';
import { Meta, Story } from '@storybook/react';
import PointOfInterestList from 'components/sections/pois/PointOfInteresList';

export default {
    title: 'Sections / POIs / PointOfInterestList',
    component: PointOfInterestList,
} as Meta;

export const Default: Story = () => (
    <PointOfInterestList
        pois={[
            {
                id: 1,
                location: {
                    address: 'Altes Rathaus Mmünsterstraße',
                    street: '1',
                    postalCode: '12345',
                    city: 'Example City',
                    mail: 'max.mustermann@gmail.com',
                    phone: '07551 / 888666',
                    web: 'www.einrichtung.com',
                },
                basics: {
                    name: 'Beispiel POI 1',
                    shortDescription:
                        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptas non tempore fugit dolore numquam quidem adipisci cum fugiat a.',
                },
                facts: [
                    'Feature 1',
                    'Feature 2',
                    'Feature 3',
                    'Feature 4',
                    'Feature 5',
                ],
            },
            {
                id: 2,
                location: {
                    address: 'Altes Rathaus Mmünsterstraße',
                    street: '1',
                    postalCode: '12345',
                    city: 'Example City',
                    mail: 'max.mustermann@gmail.com',
                    phone: '07551 / 888666',
                    web: 'www.einrichtung.com',
                },
                basics: {
                    name: 'Beispiel POI 2',
                    shortDescription:
                        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptas non tempore fugit dolore numquam quidem adipisci cum fugiat a.',
                },
                facts: [
                    'Feature 1',
                    'Feature 2',
                    'Feature 3',
                    'Feature 4',
                    'Feature 5',
                ],
            },
            {
                id: 3,
                location: {
                    address: 'Altes Rathaus Mmünsterstraße',
                    street: '1',
                    postalCode: '12345',
                    city: 'Example City',
                    mail: 'max.mustermann@gmail.com',
                    phone: '07551 / 888666',
                    web: 'www.einrichtung.com',
                },
                basics: {
                    name: 'Beispiel POI 3',
                    shortDescription:
                        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptas non tempore fugit dolore numquam quidem adipisci cum fugiat a.',
                },
                facts: [
                    'Feature 1',
                    'Feature 2',
                    'Feature 3',
                    'Feature 4',
                    'Feature 5',
                ],
            },
        ]}
    />
);
