import React from 'react';
import { Meta, Story } from '@storybook/react';
import JobList, { JobListComponent } from 'components/sections/jobs/JobList';

export default {
    title: 'Sections / Jobs /  JobList',
    component: JobListComponent,
    parameters: {
        status: {
            type: ['preview', 'qsReady'],
        },
    },
} as Meta;

export const Default: Story = () => (
    <JobList
        jobs={[
            {
                jobTitle: 'Jobtitle 1<br/>(m/w/d)',
                employmentTypes: [
                    { name: 'Vollzeit', type: 'FULL_TIME' },
                    { name: 'Teilzeit', type: 'PART_TIME' },
                ],
                locations: [
                    { name: 'Tuttlingen', addressCountry: 'DE' },
                    { name: 'Sipplingen', addressCountry: 'DE' },
                ],
                link: { href: '#0' },
            },
            {
                jobTitle: `Jobtitle 2<br/>(m/w/d)`,
                employmentTypes: [
                    { name: 'Vollzeit', type: 'FULL_TIME' },
                    { name: 'Teilzeit', type: 'PART_TIME' },
                ],
                locations: [
                    { name: 'Tuttlingen', addressCountry: 'DE' },
                    { name: 'Sipplingen', addressCountry: 'en' },
                ],
                link: { href: '#0' },
            },
            {
                jobTitle: `Jobtitle 3<br/>(m/w/d)`,
                employmentTypes: [
                    { name: 'Vollzeit', type: 'FULL_TIME' },
                    { name: 'Teilzeit', type: 'PART_TIME' },
                ],
                locations: [
                    { name: 'Friedrichshafen', addressCountry: 'DE' },
                    { name: 'Sipplingen', addressCountry: 'DE' },
                ],
                link: { href: '#0' },
            },
            {
                jobTitle: `Jobtitle 4<br/>(m/w/d)`,
                employmentTypes: [
                    { name: 'Vollzeit', type: 'FULL_TIME' },
                    { name: 'Teilzeit', type: 'PART_TIME' },
                ],
                locations: [
                    { name: 'Tuttlingen', addressCountry: 'DE' },
                    { name: 'Sipplingen', addressCountry: 'DE' },
                ],
                link: { href: '#0' },
            },
            {
                jobTitle: `Jobtitle 5<br/>(m/w/d)`,
                employmentTypes: [
                    { name: 'Vollzeit', type: 'FULL_TIME' },
                    { name: 'Teilzeit', type: 'PART_TIME' },
                ],
                locations: [
                    { name: 'Tuttlingen', addressCountry: 'DE' },
                    { name: 'Sipplingen', addressCountry: 'DE' },
                ],
                link: { href: '#0' },
            },
            {
                jobTitle: `Jobtitle 6<br/>(m/w/d)`,
                employmentTypes: [
                    { name: 'Vollzeit', type: 'FULL_TIME' },
                    { name: 'Teilzeit', type: 'PART_TIME' },
                ],
                locations: [
                    { name: 'Tuttlingen', addressCountry: 'DE' },
                    { name: 'Sipplingen', addressCountry: 'DE' },
                ],
                link: { href: '#0' },
            },
            {
                jobTitle: `Jobtitle 7<br/>(m/w/d)`,
                employmentTypes: [
                    { name: 'Vollzeit', type: 'FULL_TIME' },
                    { name: 'Teilzeit', type: 'PART_TIME' },
                ],
                locations: [
                    { name: 'Tuttlingen', addressCountry: 'DE' },
                    { name: 'Sipplingen', addressCountry: 'DE' },
                ],
                link: { href: '#0' },
            },
            {
                jobTitle: `Jobtitle 8<br/>(m/w/d)`,
                employmentTypes: [
                    { name: 'Vollzeit', type: 'FULL_TIME' },
                    { name: 'Teilzeit', type: 'PART_TIME' },
                ],
                locations: [
                    { name: 'Tuttlingen', addressCountry: 'DE' },
                    { name: 'Sipplingen', addressCountry: 'DE' },
                ],
                link: { href: '#0' },
            },
            {
                jobTitle: `Jobtitle 9<br/>(m/w/d)`,
                employmentTypes: [
                    { name: 'Vollzeit', type: 'FULL_TIME' },
                    { name: 'Teilzeit', type: 'PART_TIME' },
                ],
                locations: [
                    { name: 'Tuttlingen', addressCountry: 'DE' },
                    { name: 'Sipplingen', addressCountry: 'DE' },
                ],
                link: { href: '#0' },
            },
        ]}
    />
);

export const WithBackground: Story = () => (
    <JobList
        bgMode="full"
        jobs={[
            {
                jobTitle: 'Jobtitle 1<br/>(m/w/d)',
                employmentTypes: [
                    { name: 'Vollzeit', type: 'FULL_TIME' },
                    { name: 'Teilzeit', type: 'PART_TIME' },
                ],
                locations: [
                    { name: 'Tuttlingen', addressCountry: 'DE' },
                    { name: 'Sipplingen', addressCountry: 'DE' },
                ],
                link: { href: '#0' },
            },
            {
                jobTitle: `Jobtitle 2<br/>(m/w/d)`,
                employmentTypes: [
                    { name: 'Vollzeit', type: 'FULL_TIME' },
                    { name: 'Teilzeit', type: 'PART_TIME' },
                ],
                locations: [
                    { name: 'Tuttlingen', addressCountry: 'DE' },
                    { name: 'Sipplingen', addressCountry: 'DE' },
                ],
                link: { href: '#0' },
            },
            {
                jobTitle: `Jobtitle 3<br/>(m/w/d)`,
                employmentTypes: [
                    { name: 'Vollzeit', type: 'FULL_TIME' },
                    { name: 'Teilzeit', type: 'PART_TIME' },
                ],
                locations: [
                    { name: 'Tuttlingen', addressCountry: 'DE' },
                    { name: 'Sipplingen', addressCountry: 'DE' },
                ],
                link: { href: '#0' },
            },
            {
                jobTitle: `Jobtitle 4<br/>(m/w/d)`,
                employmentTypes: [
                    { name: 'Vollzeit', type: 'FULL_TIME' },
                    { name: 'Teilzeit', type: 'PART_TIME' },
                ],
                locations: [
                    { name: 'Tuttlingen', addressCountry: 'DE' },
                    { name: 'Sipplingen', addressCountry: 'DE' },
                ],
                link: { href: '#0' },
            },
            {
                jobTitle: `Jobtitle 5<br/>(m/w/d)`,
                employmentTypes: [
                    { name: 'Vollzeit', type: 'FULL_TIME' },
                    { name: 'Teilzeit', type: 'PART_TIME' },
                ],
                locations: [
                    { name: 'Tuttlingen', addressCountry: 'DE' },
                    { name: 'Sipplingen', addressCountry: 'DE' },
                ],
                link: { href: '#0' },
            },
            {
                jobTitle: `Jobtitle 6<br/>(m/w/d)`,
                employmentTypes: [
                    { name: 'Vollzeit', type: 'FULL_TIME' },
                    { name: 'Teilzeit', type: 'PART_TIME' },
                ],
                locations: [
                    { name: 'Tuttlingen', addressCountry: 'DE' },
                    { name: 'Sipplingen', addressCountry: 'DE' },
                ],
                link: { href: '#0' },
            },
            {
                jobTitle: `Jobtitle 7<br/>(m/w/d)`,
                employmentTypes: [
                    { name: 'Vollzeit', type: 'FULL_TIME' },
                    { name: 'Teilzeit', type: 'PART_TIME' },
                ],
                locations: [
                    { name: 'Tuttlingen', addressCountry: 'DE' },
                    { name: 'Sipplingen', addressCountry: 'DE' },
                ],
                link: { href: '#0' },
            },
            {
                jobTitle: `Jobtitle 8<br/>(m/w/d)`,
                employmentTypes: [
                    { name: 'Vollzeit', type: 'FULL_TIME' },
                    { name: 'Teilzeit', type: 'PART_TIME' },
                ],
                locations: [
                    { name: 'Tuttlingen', addressCountry: 'DE' },
                    { name: 'Sipplingen', addressCountry: 'DE' },
                ],
                link: { href: '#0' },
            },
            {
                jobTitle: `Jobtitle 9<br/>(m/w/d)`,
                employmentTypes: [
                    { name: 'Vollzeit', type: 'FULL_TIME' },
                    { name: 'Teilzeit', type: 'PART_TIME' },
                ],
                locations: [
                    { name: 'Tuttlingen', addressCountry: 'DE' },
                    { name: 'Sipplingen', addressCountry: 'DE' },
                ],
                link: { href: '#0' },
            },
        ]}
    />
);

export const IsInverted: Story = () => (
    <JobList
        bgMode="inverted"
        jobs={[
            {
                jobTitle: 'Jobtitle 1<br/>(m/w/d)',
                employmentTypes: [
                    { name: 'Vollzeit', type: 'FULL_TIME' },
                    { name: 'Teilzeit', type: 'PART_TIME' },
                ],
                locations: [
                    { name: 'Tuttlingen', addressCountry: 'DE' },
                    { name: 'Sipplingen', addressCountry: 'DE' },
                ],
                link: { href: '#0' },
            },
            {
                jobTitle: `Jobtitle 2<br/>(m/w/d)`,
                employmentTypes: [
                    { name: 'Vollzeit', type: 'FULL_TIME' },
                    { name: 'Teilzeit', type: 'PART_TIME' },
                ],
                locations: [
                    { name: 'Tuttlingen', addressCountry: 'DE' },
                    { name: 'Sipplingen', addressCountry: 'DE' },
                ],
                link: { href: '#0' },
            },
            {
                jobTitle: `Jobtitle 3<br/>(m/w/d)`,
                employmentTypes: [
                    { name: 'Vollzeit', type: 'FULL_TIME' },
                    { name: 'Teilzeit', type: 'PART_TIME' },
                ],
                locations: [
                    { name: 'Tuttlingen', addressCountry: 'DE' },
                    { name: 'Sipplingen', addressCountry: 'DE' },
                ],
                link: { href: '#0' },
            },
            {
                jobTitle: `Jobtitle 4<br/>(m/w/d)`,
                employmentTypes: [
                    { name: 'Vollzeit', type: 'FULL_TIME' },
                    { name: 'Teilzeit', type: 'PART_TIME' },
                ],
                locations: [
                    { name: 'Tuttlingen', addressCountry: 'DE' },
                    { name: 'Sipplingen', addressCountry: 'DE' },
                ],
                link: { href: '#0' },
            },
            {
                jobTitle: `Jobtitle 5<br/>(m/w/d)`,
                employmentTypes: [
                    { name: 'Vollzeit', type: 'FULL_TIME' },
                    { name: 'Teilzeit', type: 'PART_TIME' },
                ],
                locations: [
                    { name: 'Tuttlingen', addressCountry: 'DE' },
                    { name: 'Sipplingen', addressCountry: 'DE' },
                ],
                link: { href: '#0' },
            },
            {
                jobTitle: `Jobtitle 6<br/>(m/w/d)`,
                employmentTypes: [
                    { name: 'Vollzeit', type: 'FULL_TIME' },
                    { name: 'Teilzeit', type: 'PART_TIME' },
                ],
                locations: [
                    { name: 'Tuttlingen', addressCountry: 'DE' },
                    { name: 'Sipplingen', addressCountry: 'DE' },
                ],
                link: { href: '#0' },
            },
            {
                jobTitle: `Jobtitle 7<br/>(m/w/d)`,
                employmentTypes: [
                    { name: 'Vollzeit', type: 'FULL_TIME' },
                    { name: 'Teilzeit', type: 'PART_TIME' },
                ],
                locations: [
                    { name: 'Tuttlingen', addressCountry: 'DE' },
                    { name: 'Sipplingen', addressCountry: 'DE' },
                ],
                link: { href: '#0' },
            },
            {
                jobTitle: `Jobtitle 8<br/>(m/w/d)`,
                employmentTypes: [
                    { name: 'Vollzeit', type: 'FULL_TIME' },
                    { name: 'Teilzeit', type: 'PART_TIME' },
                ],
                locations: [
                    { name: 'Tuttlingen', addressCountry: 'DE' },
                    { name: 'Sipplingen', addressCountry: 'DE' },
                ],
                link: { href: '#0' },
            },
            {
                jobTitle: `Jobtitle 9<br/>(m/w/d)`,
                employmentTypes: [
                    { name: 'Vollzeit', type: 'FULL_TIME' },
                    { name: 'Teilzeit', type: 'PART_TIME' },
                ],
                locations: [
                    { name: 'Tuttlingen', addressCountry: 'DE' },
                    { name: 'Sipplingen', addressCountry: 'DE' },
                ],
                link: { href: '#0' },
            },
        ]}
    />
);

export const WithAllLocationsLabel: Story = () => (
    <JobList
        totalJobLocations={2}
        allJobLocationsLabel="All locations"
        jobs={[
            {
                jobTitle: 'Jobtitle 1<br/>(m/w/d)',
                employmentTypes: [
                    { name: 'Vollzeit', type: 'FULL_TIME' },
                    { name: 'Teilzeit', type: 'PART_TIME' },
                ],
                locations: [
                    { name: 'Tuttlingen', addressCountry: 'DE' },
                    { name: 'Sipplingen', addressCountry: 'DE' },
                ],
                link: { href: '#0' },
            },
            {
                jobTitle: `Jobtitle 2<br/>(m/w/d)`,
                employmentTypes: [
                    { name: 'Vollzeit', type: 'FULL_TIME' },
                    { name: 'Teilzeit', type: 'PART_TIME' },
                ],
                locations: [{ name: 'Tuttlingen', addressCountry: 'DE' }],
                link: { href: '#0' },
            },
            {
                jobTitle: `Jobtitle 3<br/>(m/w/d)`,
                employmentTypes: [
                    { name: 'Vollzeit', type: 'FULL_TIME' },
                    { name: 'Teilzeit', type: 'PART_TIME' },
                ],
                locations: [
                    { name: 'Tuttlingen', addressCountry: 'DE' },
                    { name: 'Sipplingen', addressCountry: 'DE' },
                ],
                link: { href: '#0' },
            },
            {
                jobTitle: `Jobtitle 4<br/>(m/w/d)`,
                employmentTypes: [
                    { name: 'Vollzeit', type: 'FULL_TIME' },
                    { name: 'Teilzeit', type: 'PART_TIME' },
                ],
                locations: [{ name: 'Tuttlingen', addressCountry: 'DE' }],
                link: { href: '#0' },
            },
            {
                jobTitle: `Jobtitle 5<br/>(m/w/d)`,
                employmentTypes: [
                    { name: 'Vollzeit', type: 'FULL_TIME' },
                    { name: 'Teilzeit', type: 'PART_TIME' },
                ],
                locations: [
                    { name: 'Tuttlingen', addressCountry: 'DE' },
                    { name: 'Sipplingen', addressCountry: 'DE' },
                ],
                link: { href: '#0' },
            },
            {
                jobTitle: `Jobtitle 6<br/>(m/w/d)`,
                employmentTypes: [
                    { name: 'Vollzeit', type: 'FULL_TIME' },
                    { name: 'Teilzeit', type: 'PART_TIME' },
                ],
                locations: [
                    { name: 'Tuttlingen', addressCountry: 'DE' },
                    { name: 'Sipplingen', addressCountry: 'DE' },
                ],
                link: { href: '#0' },
            },
            {
                jobTitle: `Jobtitle 7<br/>(m/w/d)`,
                employmentTypes: [
                    { name: 'Vollzeit', type: 'FULL_TIME' },
                    { name: 'Teilzeit', type: 'PART_TIME' },
                ],
                locations: [
                    { name: 'Tuttlingen', addressCountry: 'DE' },
                    { name: 'Sipplingen', addressCountry: 'DE' },
                ],
                link: { href: '#0' },
            },
            {
                jobTitle: `Jobtitle 8<br/>(m/w/d)`,
                employmentTypes: [
                    { name: 'Vollzeit', type: 'FULL_TIME' },
                    { name: 'Teilzeit', type: 'PART_TIME' },
                ],
                locations: [
                    { name: 'Tuttlingen', addressCountry: 'DE' },
                    { name: 'Sipplingen', addressCountry: 'DE' },
                ],
                link: { href: '#0' },
            },
            {
                jobTitle: `Jobtitle 9<br/>(m/w/d)`,
                employmentTypes: [
                    { name: 'Vollzeit', type: 'FULL_TIME' },
                    { name: 'Teilzeit', type: 'PART_TIME' },
                ],
                locations: [
                    { name: 'Tuttlingen', addressCountry: 'DE' },
                    { name: 'Sipplingen', addressCountry: 'DE' },
                ],
                link: { href: '#0' },
            },
        ]}
    />
);

export const WithFilter: Story = () => (
    <JobList
        hasFilter
        totalJobLocations={2}
        allJobLocationsLabel="All locations"
        jobs={[
            {
                jobTitle: 'Jobtitle 1<br/>(m/w/d)',
                employmentTypes: [
                    { name: 'Vollzeit', type: 'FULL_TIME' },
                    { name: 'Teilzeit', type: 'PART_TIME' },
                ],
                locations: [
                    { name: 'Tuttlingen', addressCountry: 'DE' },
                    { name: 'Sipplingen', addressCountry: 'DE' },
                ],
                link: { href: '#0' },
            },
            {
                jobTitle: `Jobtitle 2<br/>(m/w/d)`,
                employmentTypes: [
                    { name: 'Vollzeit', type: 'FULL_TIME' },
                    { name: 'Teilzeit', type: 'PART_TIME' },
                ],
                locations: [{ name: 'Tuttlingen', addressCountry: 'DE' }],
                link: { href: '#0' },
            },
            {
                jobTitle: `Jobtitle 3<br/>(m/w/d)`,
                employmentTypes: [
                    { name: 'Vollzeit', type: 'FULL_TIME' },
                    { name: 'Teilzeit', type: 'PART_TIME' },
                ],
                locations: [
                    { name: 'Tuttlingen', addressCountry: 'DE' },
                    { name: 'Sipplingen', addressCountry: 'DE' },
                ],
                link: { href: '#0' },
            },
            {
                jobTitle: `Jobtitle 4<br/>(m/w/d)`,
                employmentTypes: [
                    { name: 'Vollzeit', type: 'FULL_TIME' },
                    { name: 'Teilzeit', type: 'PART_TIME' },
                ],
                locations: [{ name: 'Tuttlingen', addressCountry: 'DE' }],
                link: { href: '#0' },
            },
            {
                jobTitle: `Jobtitle 5<br/>(m/w/d)`,
                employmentTypes: [
                    { name: 'Vollzeit', type: 'FULL_TIME' },
                    { name: 'Teilzeit', type: 'PART_TIME' },
                ],
                locations: [
                    { name: 'Tuttlingen', addressCountry: 'DE' },
                    { name: 'Sipplingen', addressCountry: 'DE' },
                ],
                link: { href: '#0' },
            },
            {
                jobTitle: `Jobtitle 6<br/>(m/w/d)`,
                employmentTypes: [
                    { name: 'Vollzeit', type: 'FULL_TIME' },
                    { name: 'Teilzeit', type: 'PART_TIME' },
                ],
                locations: [
                    { name: 'Tuttlingen', addressCountry: 'DE' },
                    { name: 'Sipplingen', addressCountry: 'DE' },
                ],
                link: { href: '#0' },
            },
            {
                jobTitle: `Jobtitle 7<br/>(m/w/d)`,
                employmentTypes: [
                    { name: 'Vollzeit', type: 'FULL_TIME' },
                    { name: 'Teilzeit', type: 'PART_TIME' },
                ],
                locations: [
                    { name: 'Tuttlingen', addressCountry: 'DE' },
                    { name: 'Sipplingen', addressCountry: 'DE' },
                ],
                link: { href: '#0' },
            },
            {
                jobTitle: `Jobtitle 8<br/>(m/w/d)`,
                employmentTypes: [
                    { name: 'Vollzeit', type: 'FULL_TIME' },
                    { name: 'Teilzeit', type: 'PART_TIME' },
                ],
                locations: [
                    { name: 'Tuttlingen', addressCountry: 'DE' },
                    { name: 'Sipplingen', addressCountry: 'DE' },
                ],
                link: { href: '#0' },
            },
            {
                jobTitle: `Jobtitle 9<br/>(m/w/d)`,
                employmentTypes: [
                    { name: 'Vollzeit', type: 'FULL_TIME' },
                    { name: 'Teilzeit', type: 'PART_TIME' },
                ],
                locations: [
                    { name: 'Tuttlingen', addressCountry: 'DE' },
                    { name: 'Sipplingen', addressCountry: 'DE' },
                ],
                link: { href: '#0' },
            },
        ]}
    />
);
