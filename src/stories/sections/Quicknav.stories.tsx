import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import Quicknav, { QuicknavComponent } from 'components/sections/Quicknav';

export default {
    title: 'Sections / Quicknav',
    component: QuicknavComponent,
    parameters: {
        status: {
            type: 'stable',
        },
    },
} as Meta;

export const Default: Story = () => (
    <Quicknav
        navItems={[
            { label: 'Lorem', link: '#0' },
            { label: 'Ipsum Dolor', link: '#0' },
            { label: 'Sit Amet', link: '#0' },
            { label: 'Consetetur sadipscin', link: '#0' },
            { label: 'At vero eos et accusam ', link: '#0' },
        ]}
    />
);

export const WithActiveItem: Story = () => (
    <Quicknav
        activeNavItem="Sit Amet"
        navItems={[
            { label: 'Lorem', link: '#0' },
            { label: 'Ipsum Dolor', link: '#0' },
            { label: 'Sit Amet', link: '#0' },
            { label: 'Consetetur sadipscin', link: '#0' },
            { label: 'At vero eos et accusam ', link: '#0' },
        ]}
    />
);

export const IsInverted: Story = () => (
    <Quicknav
        activeNavItem="Sit Amet"
        navItems={[
            { label: 'Lorem', link: '#0' },
            { label: 'Ipsum Dolor', link: '#0' },
            { label: 'Sit Amet', link: '#0' },
            { label: 'Consetetur sadipscin', link: '#0' },
            { label: 'At vero eos et accusam ', link: '#0' },
        ]}
        bgMode="inverted"
    />
);
