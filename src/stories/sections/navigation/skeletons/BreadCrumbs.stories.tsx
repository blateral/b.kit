/* eslint-disable react/display-name */
import React from 'react';
import { Meta, Story } from '@storybook/react';
import BarBreadcrumbs from 'components/sections/navigation/skeletons/BarBreadCrumbs';

export default {
    title: 'Sections/Navigation/Skeletons/Breadcrumbs',
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
            { uid: 'itemA', link: { href: '/services' }, label: 'Services' },
            {
                uid: 'itemB',
                link: { href: '/news' },
                label: 'News',
                subItems: [
                    {
                        uid: 'itemA1',
                        link: { href: '/companynews' },
                        label: 'Company News Worldwide',
                        isCurrent: true,
                    },
                ],
            },
            { uid: 'itemC', link: { href: '/impressum' }, label: 'Impressum' },
        ]}
    />
);
