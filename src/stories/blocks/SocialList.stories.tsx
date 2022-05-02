/* eslint-disable react/display-name */
import React from 'react';
import { Meta, Story } from '@storybook/react';

import SocialList from 'components/blocks/SocialList';

import FacebookIcon from 'components/base/icons/socials/Facebook';
import LinkedInIcon from 'components/base/icons/socials/LinkedIn';
import XingIcon from 'components/base/icons/socials/Xing';
import TwitterIcon from 'components/base/icons/socials/Twitter';

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
            { href: '#', title: 'Facebook', icon: () => <FacebookIcon /> },
            { href: '#', title: 'LinkedIn', icon: () => <LinkedInIcon /> },
            { href: '#', title: 'Xing', icon: () => <XingIcon /> },
            { href: '#', title: 'Twitter', icon: () => <TwitterIcon /> },
        ]}
    />
);

export const WithTitle: Story = () => (
    <SocialList
        title="Follow us"
        items={[
            { href: '#', title: 'Facebook', icon: () => <FacebookIcon /> },
            { href: '#', title: 'LinkedIn', icon: () => <LinkedInIcon /> },
            { href: '#', title: 'Xing', icon: () => <XingIcon /> },
            { href: '#', title: 'Twitter', icon: () => <TwitterIcon /> },
        ]}
    />
);

export const Inverted: Story = () => (
    <SocialList
        isInverted
        title="Follow us"
        items={[
            { href: '#', title: 'Facebook', icon: () => <FacebookIcon /> },
            { href: '#', title: 'LinkedIn', icon: () => <LinkedInIcon /> },
            { href: '#', title: 'Xing', icon: () => <XingIcon /> },
            { href: '#', title: 'Twitter', icon: () => <TwitterIcon /> },
        ]}
    />
);

Inverted.parameters = {
    backgrounds: {
        default: 'inverted',
        values: [{ name: 'inverted', value: 'black' }],
    },
};
