import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import Quicknav from 'components/sections/Quicknav';

export default {
    title: 'Sections / Quicknav',
    component: Quicknav,
} as Meta;

export const Default: Story = () => (
    <Quicknav
        navItems={[
            { label: 'Dsygnathie', link: '#0' },
            { label: 'Dentalveoläre Chirurgie', link: '#0' },
            { label: 'Implantologie', link: '#0' },
            { label: 'Ästhetische Chirurgie', link: '#0' },
            { label: 'Hautchirurgie', link: '#0' },
        ]}
    />
);

export const WithActiveItem: Story = () => (
    <Quicknav
        activeNavItem="Implantologie"
        navItems={[
            { label: 'Dsygnathie', link: '#0' },
            { label: 'Dentalveoläre Chirurgie', link: '#0' },
            { label: 'Implantologie', link: '#0' },
            { label: 'Ästhetische Chirurgie', link: '#0' },
            { label: 'Hautchirurgie', link: '#0' },
        ]}
    />
);
