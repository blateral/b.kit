import React from 'react';
import { JsonLd } from 'react-schemaorg';
import { MapLocation } from 'components/sections/Map';
import { FAQPage, LocalBusiness } from 'schema-dts';

export const generateLocalBusiness = (locations: MapLocation[]) => {
    return locations?.map(({ meta, position, address, contactData }, i) => {
        return (
            <JsonLd<LocalBusiness>
                key={i}
                item={{
                    '@context': 'https://schema.org',
                    '@type': 'LocalBusiness',
                    name: meta?.companyName,

                    geo: {
                        '@type': 'GeoCoordinates',
                        name: 'Coordinates',
                        latitude: position[0],
                        longitude: position[1],
                    },

                    address: {
                        '@type': 'PostalAddress',
                        streetAddress: address?.street,
                        addressLocality: address?.city,
                        addressRegion: address?.city,
                        postalCode: address?.postalCode,
                        addressCountry: address?.country,
                    },

                    image: meta?.image,

                    telephone: `${contactData?.telephone?.label}`,

                    email: `${contactData?.email?.label}`,
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
