import React from 'react';
import { JsonLd } from 'react-schemaorg';
import { MapLocation } from 'components/sections/Map';
import { FAQPage, LocalBusiness } from 'schema-dts';

export const generateLocalBusiness = (locations: MapLocation[]) => {
    return locations?.map(({ meta, position }, i) => {
        return (
            <JsonLd<LocalBusiness>
                key={i}
                item={{
                    '@context': 'https://schema.org',
                    '@type': 'LocalBusiness',
                    name: meta?.name,

                    geo: {
                        '@type': 'GeoCoordinates',
                        name: 'Coordinates',
                        latitude: position[0],
                        longitude: position[1],
                    },

                    address: {
                        '@type': 'PostalAddress',
                        streetAddress: meta?.address?.street,
                        addressLocality: meta?.address?.city,
                        addressRegion: meta?.address?.city,
                        postalCode: meta?.address?.postalCode,
                        addressCountry: meta?.address?.country,
                    },

                    image: meta?.image,

                    telephone: `${meta?.telephone}`,

                    email: `${meta?.email}`,
                }}
            />
        );
    });
};

export const generateFAQ = (
    items: {
        label?: string;
        text?: string;
        aside?: string;
        hasColumns?: boolean;
    }[]
) => {
    return (
        <JsonLd<FAQPage>
            item={{
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                mainEntity: items.map(({ label, text }) => {
                    return {
                        '@type': 'Question',
                        name: label,
                        acceptedAnswer: {
                            '@type': 'Answer',
                            text: text,
                        },
                    };
                }),
            }}
        />
    );
};
