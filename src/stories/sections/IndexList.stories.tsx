import React from 'react';
import { Meta, Story } from '@storybook/react';
import IndexList, { IndexListComponent } from 'components/sections/IndexList';

export default {
    title: 'Sections / IndexList',
    component: IndexListComponent,
    parameters: {
        status: {
            type: ['preview'],
        },
    },
} as Meta;

export const Default: Story = () => (
    <IndexList
        items={[
            {
                label: 'Ansprechpartner',
                link: { href: '#0' },
            },
            {
                label: 'Wichtige Links',
                link: { href: '#1' },
            },
            {
                label: 'Downloads',
                link: { href: '#2' },
            },
            {
                label: 'Kontakt',
                link: { href: '#3' },
            },
        ]}
    />
);

export const WithBackground: Story = () => (
    <IndexList
        bgMode="full"
        items={[
            {
                label: 'Ansprechpartner',
                link: { href: '#0' },
            },
            {
                label: 'Wichtige Links',
                link: { href: '#1' },
            },
            {
                label: 'Downloads',
                link: { href: '#2' },
            },
            {
                label: 'Kontakt',
                link: { href: '#3' },
            },
        ]}
    />
);

export const Inverted: Story = () => (
    <IndexList
        bgMode="inverted"
        items={[
            {
                label: 'Ansprechpartner',
                link: { href: '#0' },
            },
            {
                label: 'Wichtige Links',
                link: { href: '#1' },
            },
            {
                label: 'Downloads',
                link: { href: '#2' },
            },
            {
                label: 'Kontakt',
                link: { href: '#3' },
            },
        ]}
    />
);
