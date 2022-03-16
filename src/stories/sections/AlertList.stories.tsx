import React from 'react';
import { Meta, Story } from '@storybook/react';
import AlertList from '../../components/sections/AlertList';

export default {
    title: 'Sections / AlertList',
    component: AlertList,
} as Meta;

export const Default: Story = () => (
    <AlertList
        items={[
            {
                label: 'Änderungen der Corona-Verordnung',
                date: new Date(),
                link: '#0',
            },
            {
                label: 'Änderungen der Corona-Verordnung',
                date: new Date(),
                link: '#0',
            },
            {
                label: 'Änderungen der Corona-Verordnung',
                date: new Date(),
                link: '#0',
            },
            {
                label: 'Änderungen der Corona-Verordnung',
                date: new Date(),
                link: '#0',
            },
        ]}
    />
);
