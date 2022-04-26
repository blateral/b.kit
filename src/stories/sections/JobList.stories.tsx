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
                jobTitle: 'Junior Steuerfachangestellter<br/>(m/w/d)',
                timeModel: 'Vollzeit',
                location: 'Immenstaad / Ravensburg',
            },
            {
                jobTitle: `Steuerfachangestellter<br/>(m/w/d)`,
                timeModel: 'Vollzeit',
                location: 'Immenstaad / Ravensburg',
            },
            {
                jobTitle: `Kaufmännischer Mitarbeiter<br/>(m/w/d)`,
                timeModel: 'Vollzeit',
                location: 'Immenstaad / Ravensburg',
            },
            {
                jobTitle: `Steuerberater Anwärter<br/>(m/w/d)`,
                timeModel: 'Vollzeit',
                location: 'Immenstaad / Ravensburg',
            },
            {
                jobTitle: `Lohnsachbearbeiter<br/>(m/w/d)`,
                timeModel: 'Vollzeit',
                location: 'Immenstaad / Ravensburg',
            },
            {
                jobTitle: `Junior Steuerfachangestellter<br/>(m/w/d)`,
                timeModel: 'Vollzeit',
                location: 'Immenstaad / Ravensburg',
            },
            {
                jobTitle: `Junior Steuerfachangestellter<br/>(m/w/d)`,
                timeModel: 'Vollzeit',
                location: 'Immenstaad / Ravensburg',
            },
            {
                jobTitle: `Junior Steuerfachangestellter<br/>(m/w/d)`,
                timeModel: 'Vollzeit',
                location: 'Immenstaad / Ravensburg',
            },
            {
                jobTitle: `Junior Steuerfachangestellter<br/>(m/w/d)`,
                timeModel: 'Vollzeit',
                location: 'Immenstaad / Ravensburg',
            },
        ]}
    />
);
