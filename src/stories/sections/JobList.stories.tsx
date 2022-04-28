import React from 'react';
import { Meta, Story } from '@storybook/react';
import JobList, { JobListComponent } from 'components/sections/JobList';

export default {
    title: 'Sections / JobList',
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
                timeModel: 'Vollzeit',
                location: 'Immenstaad / Ravensburg',
                link: { href: '#0' },
            },
            {
                jobTitle: `Jobtitle 2<br/>(m/w/d)`,
                timeModel: 'Vollzeit',
                location: 'Immenstaad / Ravensburg',
                link: { href: '#0' },
            },
            {
                jobTitle: `Jobtitle 3<br/>(m/w/d)`,
                timeModel: 'Vollzeit',
                location: 'Immenstaad / Ravensburg',
                link: { href: '#0' },
            },
            {
                jobTitle: `Jobtitle 4<br/>(m/w/d)`,
                timeModel: 'Vollzeit',
                location: 'Immenstaad / Ravensburg',
                link: { href: '#0' },
            },
            {
                jobTitle: `Jobtitle 5<br/>(m/w/d)`,
                timeModel: 'Vollzeit',
                location: 'Immenstaad / Ravensburg',
                link: { href: '#0' },
            },
            {
                jobTitle: `Jobtitle 6<br/>(m/w/d)`,
                timeModel: 'Vollzeit',
                location: 'Immenstaad / Ravensburg',
                link: { href: '#0' },
            },
            {
                jobTitle: `Jobtitle 7<br/>(m/w/d)`,
                timeModel: 'Vollzeit',
                location: 'Immenstaad / Ravensburg',
                link: { href: '#0' },
            },
            {
                jobTitle: `Jobtitle 8<br/>(m/w/d)`,
                timeModel: 'Vollzeit',
                location: 'Immenstaad / Ravensburg',
                link: { href: '#0' },
            },
            {
                jobTitle: `Jobtitle 9<br/>(m/w/d)`,
                timeModel: 'Vollzeit',
                location: 'Immenstaad / Ravensburg',
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
                timeModel: 'Vollzeit',
                location: 'Immenstaad / Ravensburg',
                link: { href: '#0' },
            },
            {
                jobTitle: `Jobtitle 2<br/>(m/w/d)`,
                timeModel: 'Vollzeit',
                location: 'Immenstaad / Ravensburg',
                link: { href: '#0' },
            },
            {
                jobTitle: `Jobtitle 3<br/>(m/w/d)`,
                timeModel: 'Vollzeit',
                location: 'Immenstaad / Ravensburg',
                link: { href: '#0' },
            },
            {
                jobTitle: `Jobtitle 4<br/>(m/w/d)`,
                timeModel: 'Vollzeit',
                location: 'Immenstaad / Ravensburg',
                link: { href: '#0' },
            },
            {
                jobTitle: `Jobtitle 5<br/>(m/w/d)`,
                timeModel: 'Vollzeit',
                location: 'Immenstaad / Ravensburg',
                link: { href: '#0' },
            },
            {
                jobTitle: `Jobtitle 6<br/>(m/w/d)`,
                timeModel: 'Vollzeit',
                location: 'Immenstaad / Ravensburg',
                link: { href: '#0' },
            },
            {
                jobTitle: `Jobtitle 7<br/>(m/w/d)`,
                timeModel: 'Vollzeit',
                location: 'Immenstaad / Ravensburg',
                link: { href: '#0' },
            },
            {
                jobTitle: `Jobtitle 8<br/>(m/w/d)`,
                timeModel: 'Vollzeit',
                location: 'Immenstaad / Ravensburg',
                link: { href: '#0' },
            },
            {
                jobTitle: `Jobtitle 9<br/>(m/w/d)`,
                timeModel: 'Vollzeit',
                location: 'Immenstaad / Ravensburg',
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
                timeModel: 'Vollzeit',
                location: 'Immenstaad / Ravensburg',
                link: { href: '#0' },
            },
            {
                jobTitle: `Jobtitle 2<br/>(m/w/d)`,
                timeModel: 'Vollzeit',
                location: 'Immenstaad / Ravensburg',
                link: { href: '#0' },
            },
            {
                jobTitle: `Jobtitle 3<br/>(m/w/d)`,
                timeModel: 'Vollzeit',
                location: 'Immenstaad / Ravensburg',
                link: { href: '#0' },
            },
            {
                jobTitle: `Jobtitle 4<br/>(m/w/d)`,
                timeModel: 'Vollzeit',
                location: 'Immenstaad / Ravensburg',
                link: { href: '#0' },
            },
            {
                jobTitle: `Jobtitle 5<br/>(m/w/d)`,
                timeModel: 'Vollzeit',
                location: 'Immenstaad / Ravensburg',
                link: { href: '#0' },
            },
            {
                jobTitle: `Jobtitle 6<br/>(m/w/d)`,
                timeModel: 'Vollzeit',
                location: 'Immenstaad / Ravensburg',
                link: { href: '#0' },
            },
            {
                jobTitle: `Jobtitle 7<br/>(m/w/d)`,
                timeModel: 'Vollzeit',
                location: 'Immenstaad / Ravensburg',
                link: { href: '#0' },
            },
            {
                jobTitle: `Jobtitle 8<br/>(m/w/d)`,
                timeModel: 'Vollzeit',
                location: 'Immenstaad / Ravensburg',
                link: { href: '#0' },
            },
            {
                jobTitle: `Jobtitle 9<br/>(m/w/d)`,
                timeModel: 'Vollzeit',
                location: 'Immenstaad / Ravensburg',
                link: { href: '#0' },
            },
        ]}
    />
);
