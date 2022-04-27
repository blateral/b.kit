import React from 'react';
import { Meta, Story } from '@storybook/react';
import FooterNew from 'components/sections/FooterNew';

const exampleSiteLinks = [
    {
        siteColTitle: 'Produkte',
        colLinks: [
            {
                href: '#0',
                label: 'Lorem ipsum',
            },
            {
                href: '#0',
                label: 'Dolor sit amet',
            },
            {
                href: '#0',
                label: 'Consectetur adipisicing elit',
            },
            {
                href: '#0',
                label: 'Totam iste odio',
            },
            {
                href: '#0',
                label: 'Quos inventore hic a',
            },
        ],
    },
    {
        siteColTitle: 'Dienstleistungen',
        colLinks: [
            {
                href: '#0',
                label: 'Lorem ipsum',
            },
            {
                href: '#0',
                label: 'Dolor sit amet',
            },
            {
                href: '#0',
                label: 'Consectetur adipisicing elit',
            },
            {
                href: '#0',
                label: 'Totam iste odio',
            },
            {
                href: '#0',
                label: 'Quos inventore hic a',
            },
        ],
    },
    {
        siteColTitle: 'Unternehmen',
        colLinks: [
            {
                href: '#0',
                label: 'Lorem ipsum',
            },
            {
                href: '#0',
                label: 'Dolor sit amet',
            },
            {
                href: '#0',
                label: 'Consectetur adipisicing elit',
            },
            {
                href: '#0',
                label: 'Totam iste odio',
            },
            {
                href: '#0',
                label: 'Quos inventore hic a',
            },
        ],
    },
];

export default {
    title: 'Sections / FooterNew',
    component: FooterNew,
} as Meta;

export const Default: Story = () => <FooterNew siteLinks={exampleSiteLinks} />;

export const IsInverted: Story = () => (
    <FooterNew bgMode="inverted" siteLinks={exampleSiteLinks} />
);
