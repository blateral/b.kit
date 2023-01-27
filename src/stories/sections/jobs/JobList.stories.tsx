import React from 'react';
import { Meta, Story } from '@storybook/react';
import JobList, {
    JobItem,
    JobListComponent,
} from 'components/sections/jobs/JobList';

export default {
    title: 'Sections / Jobs /  JobList',
    component: JobListComponent,
    parameters: {
        status: {
            type: ['preview', 'qsReady'],
        },
    },
} as Meta;

const jobs: JobItem[] = [
    {
        id: 'job_0',
        jobTitle: 'Softwareentwickler<br/>(m/w/d)',
        employmentTypes: [{ name: 'Vollzeit', type: 'FULL_TIME' }],
        locations: [
            {
                name: 'Tuttlingen',
                addressCountry: 'DE',
                addressRegion: 'Landkreis Tuttlingen',
            },
        ],
        link: { href: '#0' },
    },
    {
        id: 'job_1',
        jobTitle: `Finanzanalyst<br/>(m/w/d)`,
        employmentTypes: [
            { name: 'Vollzeit', type: 'FULL_TIME' },
            { name: 'Teilzeit', type: 'PART_TIME' },
        ],
        locations: [
            {
                name: 'Tuttlingen',
                addressCountry: 'DE',
                addressRegion: 'Landkreis Tuttlingen',
            },
            {
                name: 'Sipplingen',
                addressCountry: 'en',
                addressRegion: 'Bodenseekreis',
            },
        ],
        link: { href: '#0' },
    },
    {
        id: 'job_2',
        jobTitle: `Versuchstechniker / Versuchsingenieur (m/w/d)`,
        employmentTypes: [{ name: 'Teilzeit', type: 'PART_TIME' }],
        locations: [
            {
                name: 'Friedrichshafen',
                addressCountry: 'DE',
                addressRegion: 'Bodenseekreis',
            },
        ],
        link: { href: '#0' },
    },
    {
        id: 'job_3',
        jobTitle: `Servicetechniker`,
        employmentTypes: [
            { name: 'Vollzeit', type: 'FULL_TIME' },
            { name: 'Teilzeit', type: 'PART_TIME' },
        ],
        locations: [
            {
                name: 'Sipplingen',
                addressCountry: 'DE',
                addressRegion: 'Bodenseekreis',
            },
        ],
        link: { href: '#0' },
    },
    {
        id: 'job_4',
        jobTitle: `Ingenieur<br/>(m/w/d)`,
        employmentTypes: [
            { name: 'Vollzeit', type: 'FULL_TIME' },
            { name: 'Teilzeit', type: 'PART_TIME' },
        ],
        locations: [
            {
                name: 'Tuttlingen',
                addressCountry: 'DE',
                addressRegion: 'Landkreis Tuttlingen',
            },
            {
                name: 'Sipplingen',
                addressCountry: 'DE',
                addressRegion: 'Bodenseekreis',
            },
        ],
        link: { href: '#0' },
    },
    {
        id: 'job_5',
        jobTitle: `Lehrer<br/>(m/w/d)`,
        employmentTypes: [
            { name: 'Vollzeit', type: 'FULL_TIME' },
            { name: 'Teilzeit', type: 'PART_TIME' },
        ],
        locations: [
            {
                name: 'Tuttlingen',
                addressCountry: 'DE',
                addressRegion: 'Landkreis Tuttlingen',
            },
            {
                name: 'Sipplingen',
                addressCountry: 'DE',
                addressRegion: 'Bodenseekreis',
            },
        ],
        link: { href: '#0' },
    },
    {
        id: 'job_6',
        jobTitle: `Entwickler`,
        employmentTypes: [
            { name: 'Vollzeit', type: 'FULL_TIME' },
            { name: 'Teilzeit', type: 'PART_TIME' },
        ],
        locations: [
            {
                name: 'Tuttlingen',
                addressCountry: 'DE',
                addressRegion: 'Landkreis Tuttlingen',
            },
            {
                name: 'Sipplingen',
                addressCountry: 'DE',
                addressRegion: 'Bodenseekreis',
            },
        ],
        link: { href: '#0' },
    },
    {
        id: 'job_7',
        jobTitle: `Softwareentwickler<br/>(m/w/d)`,
        employmentTypes: [{ name: 'Teilzeit', type: 'PART_TIME' }],
        locations: [
            {
                name: 'Sipplingen',
                addressCountry: 'DE',
                addressRegion: 'Bodenseekreis',
            },
        ],
        link: { href: '#0' },
    },
    {
        id: 'job_8',
        jobTitle: `Webentwickler Backend<br/>(m/w/d)`,
        employmentTypes: [
            { name: 'Vollzeit', type: 'FULL_TIME' },
            { name: 'Teilzeit', type: 'PART_TIME' },
        ],
        locations: [
            {
                name: 'Tuttlingen',
                addressCountry: 'DE',
                addressRegion: 'Landkreis Tuttlingen',
            },
        ],
        link: { href: '#0' },
    },
];

export const Default: Story = () => <JobList jobs={jobs} />;

export const WithBackground: Story = () => (
    <JobList bgMode="full" jobs={jobs} />
);

export const IsInverted: Story = () => (
    <JobList bgMode="inverted" jobs={jobs} />
);

export const WithAllLocationsLabel: Story = () => (
    <JobList
        totalJobLocations={2}
        allJobLocationsLabel="All locations"
        jobs={jobs}
    />
);

export const WithFilter: Story = () => <JobList hasFilter jobs={jobs} />;
