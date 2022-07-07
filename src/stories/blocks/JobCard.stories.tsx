import React from 'react';
import { Meta, Story } from '@storybook/react';
import JobCard from 'components/blocks/JobCard';

export default {
    title: 'Blocks / JobCard',
    component: JobCard,
    parameters: {
        status: {
            type: ['preview', 'qsReady'],
        },
    },
} as Meta;

export const Default: Story = () => (
    <JobCard
        jobTitle="Jobtitle<br/>(m/w/d)"
        employmentTypes={[{ name: 'Vollzeit', type: 'FULL_TIME' }]}
        locations={[{ name: 'Tuttlingen', addressCountry: 'DE' }]}
        link={{ href: '#0' }}
    />
);

export const MultipleEmploymentTypes: Story = () => (
    <JobCard
        jobTitle="Jobtitle<br/>(m/w/d)"
        employmentTypes={[
            { name: 'Vollzeit', type: 'FULL_TIME' },
            { name: 'Teilzeit', type: 'PART_TIME' },
        ]}
        locations={[{ name: 'Tuttlingen', addressCountry: 'DE' }]}
        link={{ href: '#0' }}
    />
);

export const MultipleLocations: Story = () => (
    <JobCard
        jobTitle="Jobtitle<br/>(m/w/d)"
        employmentTypes={[{ name: 'Vollzeit', type: 'FULL_TIME' }]}
        locations={[
            { name: 'Tuttlingen', addressCountry: 'DE' },
            { name: 'Sipplingen', addressCountry: 'DE' },
        ]}
        link={{ href: '#0' }}
    />
);
