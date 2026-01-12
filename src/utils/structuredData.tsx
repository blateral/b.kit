import React from 'react';
import { JsonLd } from 'react-schemaorg';
import { MapLocation } from 'components/sections/Map';
import {
    FAQPage,
    ItemList,
    JobPosting,
    LocalBusiness,
    Place,
} from 'schema-dts';
import { OrganizationData } from 'components/sections/jobs/JobArticle';
import { distinct } from './filters';
import { JobLocation } from 'components/blocks/JobCard';
import { isValidArray } from './arrays';

export const generateLocalBusiness = (locations: MapLocation[]) => {
    return locations?.map(
        ({ position, address, contact, companyName, image }, i) => {
            if (!companyName) return '';
            return (
                <JsonLd<LocalBusiness>
                    key={i}
                    item={{
                        '@context': 'https://schema.org',
                        '@type': 'LocalBusiness',
                        name: companyName,

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

                        image: image || [],

                        telephone: `${contact?.telephone?.label}`,

                        email: `${contact?.email?.label}`,
                    }}
                />
            );
        }
    );
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

export type StructuredEmploymentType =
    | 'FULL_TIME'
    | 'PART_TIME'
    | 'CONTRACTOR'
    | 'TEMPORARY'
    | 'INTERN'
    | 'VOLUNTEER'
    | 'PER_DIEM'
    | 'OTHER';

export const generateJob = ({
    jobTitle,
    jobDesc,
    organization,
    directApply,
    locations,
    employmentTypes,
    datePosted,
}: {
    jobTitle: string;
    jobDesc?: string;
    organization?: OrganizationData;
    directApply?: boolean;
    locations?: JobLocation[];
    employmentTypes?: StructuredEmploymentType[];
    datePosted?: Date;
}) => {
    return (
        <JsonLd<JobPosting>
            item={{
                '@context': 'https://schema.org',
                '@type': 'JobPosting',
                title: jobTitle,
                description: jobDesc,
                datePosted: datePosted?.toISOString(),
                employmentType: employmentTypes?.filter(distinct),
                hiringOrganization: {
                    '@type': 'Organization',
                    name: organization?.name,
                    url: organization?.url
                        ? encodeURIComponent(organization?.url)
                        : '',
                    logo: organization?.logo,
                    telephone: organization?.telephone,
                    email: organization?.email,
                    address: organization?.address?.streetAddress
                        ? {
                              '@type': 'PostalAddress',
                              streetAddress:
                                  organization?.address?.streetAddress,
                              addressLocality:
                                  organization?.address?.addressLocality,
                              postalCode: organization?.address?.postalCode,
                              addressCountry:
                                  organization?.address?.addressCountry,
                          }
                        : undefined,
                },
                jobLocation: locations?.map<Place>((loc) => ({
                    '@type': 'Place',
                    address: {
                        '@type': 'PostalAddress',
                        addressLocality: loc.addressLocality || loc.name,
                        streetAddress: loc.streetAddress,
                        addressRegion: loc.addressRegion,
                        postalCode: loc.postalCode,
                        addressCountry: loc.addressCountry,
                    },
                })),
                directApply: directApply,
            }}
        />
    );
};

export interface JsonLdPriceListItem {
    name?: string;
    description?: string;
    price?: string;
    currency?: string;
    url?: string;
    priceValidUntil?: string;
}

export interface JsonLdPriceListProps {
    type: 'service' | 'product';
    items?: JsonLdPriceListItem[];
    name?: string;
}

export const generatePriceList = (props?: JsonLdPriceListProps) => {
    if (!props || !isValidArray(props.items, false)) return null;

    return (
        <JsonLd<ItemList>
            item={{
                '@context': 'https://schema.org',
                '@type': 'ItemList',
                name: props.name,
                itemListElement: props.items?.map((item) => {
                    return {
                        '@type': 'ListItem',
                        item: {
                            '@type':
                                props.type === 'service'
                                    ? 'Service'
                                    : 'Product',
                            name: item.name,
                            description: item.description,
                            offers: {
                                '@type': 'Offer',
                                url: item.url,
                                price: item.price,
                                priceCurrency: item.currency || 'EUR',
                                priceValidUntil: item.priceValidUntil,
                            },
                        },
                    };
                }),
            }}
        />
    );
};
