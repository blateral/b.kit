import React from 'react';
import { Meta, Story } from '@storybook/react';
import JobList from 'components/sections/JobList';

export default {
    title: 'Sections / JobList',
    component: JobList,
} as Meta;

export const Default: Story = () => (
    <JobList
        jobs={[
            {
                jobTitle: 'Jobtitle 1<br/>(m/w/d)',
                timeModel: 'Vollzeit',
                location: 'Immenstaad / Ravensburg',
            },
            {
                jobTitle: `Jobtitle 2<br/>(m/w/d)`,
                timeModel: 'Vollzeit',
                location: 'Immenstaad / Ravensburg',
            },
            {
                jobTitle: `Jobtitle 3<br/>(m/w/d)`,
                timeModel: 'Vollzeit',
                location: 'Immenstaad / Ravensburg',
            },
            {
                jobTitle: `Jobtitle 4<br/>(m/w/d)`,
                timeModel: 'Vollzeit',
                location: 'Immenstaad / Ravensburg',
            },
            {
                jobTitle: `Jobtitle 5<br/>(m/w/d)`,
                timeModel: 'Vollzeit',
                location: 'Immenstaad / Ravensburg',
            },
            {
                jobTitle: `Jobtitle 6<br/>(m/w/d)`,
                timeModel: 'Vollzeit',
                location: 'Immenstaad / Ravensburg',
            },
            {
                jobTitle: `Jobtitle 7<br/>(m/w/d)`,
                timeModel: 'Vollzeit',
                location: 'Immenstaad / Ravensburg',
            },
            {
                jobTitle: `Jobtitle 8<br/>(m/w/d)`,
                timeModel: 'Vollzeit',
                location: 'Immenstaad / Ravensburg',
            },
            {
                jobTitle: `Jobtitle 9<br/>(m/w/d)`,
                timeModel: 'Vollzeit',
                location: 'Immenstaad / Ravensburg',
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
            },
            {
                jobTitle: `Jobtitle 2<br/>(m/w/d)`,
                timeModel: 'Vollzeit',
                location: 'Immenstaad / Ravensburg',
            },
            {
                jobTitle: `Jobtitle 3<br/>(m/w/d)`,
                timeModel: 'Vollzeit',
                location: 'Immenstaad / Ravensburg',
            },
            {
                jobTitle: `Jobtitle 4<br/>(m/w/d)`,
                timeModel: 'Vollzeit',
                location: 'Immenstaad / Ravensburg',
            },
            {
                jobTitle: `Jobtitle 5<br/>(m/w/d)`,
                timeModel: 'Vollzeit',
                location: 'Immenstaad / Ravensburg',
            },
            {
                jobTitle: `Jobtitle 6<br/>(m/w/d)`,
                timeModel: 'Vollzeit',
                location: 'Immenstaad / Ravensburg',
            },
            {
                jobTitle: `Jobtitle 7<br/>(m/w/d)`,
                timeModel: 'Vollzeit',
                location: 'Immenstaad / Ravensburg',
            },
            {
                jobTitle: `Jobtitle 8<br/>(m/w/d)`,
                timeModel: 'Vollzeit',
                location: 'Immenstaad / Ravensburg',
            },
            {
                jobTitle: `Jobtitle 9<br/>(m/w/d)`,
                timeModel: 'Vollzeit',
                location: 'Immenstaad / Ravensburg',
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
            },
            {
                jobTitle: `Jobtitle 2<br/>(m/w/d)`,
                timeModel: 'Vollzeit',
                location: 'Immenstaad / Ravensburg',
            },
            {
                jobTitle: `Jobtitle 3<br/>(m/w/d)`,
                timeModel: 'Vollzeit',
                location: 'Immenstaad / Ravensburg',
            },
            {
                jobTitle: `Jobtitle 4<br/>(m/w/d)`,
                timeModel: 'Vollzeit',
                location: 'Immenstaad / Ravensburg',
            },
            {
                jobTitle: `Jobtitle 5<br/>(m/w/d)`,
                timeModel: 'Vollzeit',
                location: 'Immenstaad / Ravensburg',
            },
            {
                jobTitle: `Jobtitle 6<br/>(m/w/d)`,
                timeModel: 'Vollzeit',
                location: 'Immenstaad / Ravensburg',
            },
            {
                jobTitle: `Jobtitle 7<br/>(m/w/d)`,
                timeModel: 'Vollzeit',
                location: 'Immenstaad / Ravensburg',
            },
            {
                jobTitle: `Jobtitle 8<br/>(m/w/d)`,
                timeModel: 'Vollzeit',
                location: 'Immenstaad / Ravensburg',
            },
            {
                jobTitle: `Jobtitle 9<br/>(m/w/d)`,
                timeModel: 'Vollzeit',
                location: 'Immenstaad / Ravensburg',
            },
        ]}
    />
);
