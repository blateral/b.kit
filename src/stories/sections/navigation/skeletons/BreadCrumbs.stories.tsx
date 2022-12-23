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

export const LongNavLabels: Story = () => (
    <BarBreadcrumbs
        rootLink={{ href: '' }}
        navItems={[
            {
                uid: 'itemA',
                link: { href: '/services' },
                label: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consete',
            },
            {
                uid: 'itemB',
                link: { href: '/news' },
                label: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr',
                subItems: [
                    {
                        uid: 'itemA1',
                        link: { href: '/companynews' },
                        label: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consete',
                        isCurrent: true,
                    },
                ],
            },
            {
                uid: 'itemC',
                link: { href: '/impressum' },
                label: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consete',
            },
        ]}
    />
);
