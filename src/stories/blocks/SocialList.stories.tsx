/* eslint-disable react/display-name */
import React from 'react';
import { Meta, Story } from '@storybook/react';

import SocialList from 'components/blocks/SocialList';

import Facebook from 'components/base/icons/socials/Facebook';
import LinkedIn from 'components/base/icons/socials/LinkedIn';
import Xing from 'components/base/icons/socials/Xing';
import Twitter from 'components/base/icons/socials/Twitter';

export default {
    title: 'Blocks/SocialList',
    component: SocialList,
    parameters: {
        status: {
            type: ['preview', 'qsReady'],
        },
    },
} as Meta;

export const Default: Story = () => (
    <SocialList
        items={[
            { href: '#', title: 'Facebook', icon: () => <Facebook /> },
            { href: '#', title: 'LinkedIn', icon: () => <LinkedIn /> },
            { href: '#', title: 'Xing', icon: () => <Xing /> },
            { href: '#', title: 'Twitter', icon: () => <Twitter /> },
        ]}
    />
);

export const WithTitle: Story = () => (
    <SocialList
        title="Follow us"
        items={[
            { href: '#', title: 'Facebook', icon: () => <Facebook /> },
            { href: '#', title: 'LinkedIn', icon: () => <LinkedIn /> },
            { href: '#', title: 'Xing', icon: () => <Xing /> },
            { href: '#', title: 'Twitter', icon: () => <Twitter /> },
        ]}
    />
);

export const Inverted: Story = () => (
    <SocialList
        isInverted
        title="Follow us"
        items={[
            { href: '#', title: 'Facebook', icon: () => <Facebook /> },
            { href: '#', title: 'LinkedIn', icon: () => <LinkedIn /> },
            { href: '#', title: 'Xing', icon: () => <Xing /> },
            { href: '#', title: 'Twitter', icon: () => <Twitter /> },
        ]}
    />
);

Inverted.parameters = {
    backgrounds: {
        default: 'inverted',
        values: [{ name: 'inverted', value: 'black' }],
    },
};
