import React from 'react';
import { Meta, Story } from '@storybook/react';
import PointOfInterest from 'components/blocks/pois/PointOfInterest';

export default {
    title: 'Blocks / POIs / PointOfInterest',
    component: PointOfInterest,
} as Meta;

export const Default: Story = () => (
    <PointOfInterest
        id={1}
        location={{
            address: 'Altes Rathaus Mmünsterstraße',
            street: '1',
            postalCode: '12345',
            city: 'Example City',
            mail: 'max.mustermann@gmail.com',
            phone: '07551 / 888666',
            web: 'www.einrichtung.com',
        }}
        basics={{
            name: 'Beispiel POI 1',
            shortDescription:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptas non tempore fugit dolore numquam quidem adipisci cum fugiat a.',
        }}
        features={[
            'Feature 1',
            'Feature 2',
            'Feature 3',
            'Feature 4',
            'Feature 5',
        ]}
    />
);
