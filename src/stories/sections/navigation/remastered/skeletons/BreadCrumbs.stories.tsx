/* eslint-disable react/display-name */
import React from 'react';
import { Meta, Story } from '@storybook/react';
import BarBreadcrumbs from 'components/sections/navigation/remastered/skeletons/BarBreadCrumbs';

export default {
    title: 'Sections/Navigation v2/Skeletons/Breadcrumbs',
    component: BarBreadcrumbs,
    parameters: {
        status: {
            type: 'preview',
        },
    },
} as Meta;

export const Default: Story = () => (
    <BarBreadcrumbs
        rootLink={{ href: '' }}
        navItems={[
            { link: { href: '/services' }, label: 'Services' },
            {
                link: { href: '/news' },
                label: 'News',
                subItems: [
                    {
                        link: { href: '/companynews' },
                        label: 'Company News Worldwide',
                        isCurrent: true,
                    },
                ],
            },
            { link: { href: '/impressum' }, label: 'Impressum' },
        ]}
    />
);
