import React from 'react';
import { Meta, Story } from '@storybook/react';
import JobCard from 'components/blocks/JobCard';

export default {
    title: 'Blocks / JobCard',
    component: JobCard,
} as Meta;

export const Default: Story = () => (
    <JobCard
        jobTitle="Jobtitle<br/>(m/w/d)"
        timeModel="Vollzeit"
        location="Immenstaad / Ravensburg"
    />
);
