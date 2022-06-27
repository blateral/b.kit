import React from 'react';
import { JsonLd } from 'react-schemaorg';
import { MapLocation } from 'components/sections/Map';
import { FAQPage, JobPosting, LocalBusiness } from 'schema-dts';
import { OrganizationData } from 'components/sections/jobs/JobArticle';

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

export const generateJob = ({
    jobTitle,
    jobDesc,
    organization,
    directApply,
    location,
    timeModel,
    datePosted,
}: {
    jobTitle: string;
    jobDesc?: string;
    organization?: OrganizationData;
    directApply?: boolean;
    location?: string;
    timeModel?: string;
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
                employmentType: timeModel,
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
                jobLocation: {
                    '@type': 'Place',
                    address: {
                        '@type': 'PostalAddress',
                        addressLocality: location,
                    },
                },
                directApply: directApply,
            }}
        />
    );
};
