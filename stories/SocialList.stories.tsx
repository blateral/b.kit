import * as React from 'react';
import { Meta, Story } from '@storybook/react';

import SocialList from '../src/components/blocks/SocialList';

import FacebookIcon from '../src/components/base/icons/socials/Facebook';
import LinkedInIcon from '../src/components/base/icons/socials/LinkedIn';
import XingIcon from '../src/components/base/icons/socials/Xing';
import TwitterIcon from '../src/components/base/icons/socials/Twitter';

export default {
    title: 'Blocks/SocialList',
    component: SocialList,
} as Meta;

export const Default: Story = () => (
    <SocialList
        items={[
            { href: '#', icon: <FacebookIcon /> },
            { href: '#', icon: <LinkedInIcon /> },
            { href: '#', icon: <XingIcon /> },
            { href: '#', icon: <TwitterIcon /> },
        ]}
    />
);

export const Inverted: Story = () => (
    <SocialList
        isInverted
        items={[
            { href: '#', icon: <FacebookIcon /> },
            { href: '#', icon: <LinkedInIcon /> },
            { href: '#', icon: <XingIcon /> },
            { href: '#', icon: <TwitterIcon /> },
        ]}
    />
);

Inverted.parameters = {
    backgrounds: {
        default: 'inverted',
        values: [{ name: 'inverted', value: 'black' }],
    },
};
