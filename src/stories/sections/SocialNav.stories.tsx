import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import SocialNav, { SocialNavComponent } from 'components/sections/SocialNav';
import Twitter from 'components/base/icons/socials/Twitter';
import LinkedIn from 'components/base/icons/socials/LinkedIn';
import Xing from 'components/base/icons/socials/Xing';
import Facebook from 'components/base/icons/socials/Facebook';

export default {
    title: 'Sections/SocialNav',
    component: SocialNavComponent,
    parameters: {
        status: {
            type: 'stable',
        },
    },
} as Meta;

export const Default: Story = () => (
    <SocialNav
        socials={[
            { href: '#0', icon: <Twitter /> },
            { href: '#0', icon: <LinkedIn /> },
            { href: '#0', icon: <Xing /> },
            { href: '#0', icon: <Facebook /> },
        ]}
    />
);

export const WithBackground: Story = () => (
    <SocialNav
        bgMode="full"
        socials={[
            { href: '#0', icon: <Twitter /> },
            { href: '#0', icon: <LinkedIn /> },
            { href: '#0', icon: <Xing /> },
            { href: '#0', icon: <Facebook /> },
        ]}
    />
);

export const IsInverted: Story = () => (
    <SocialNav
        socials={[
            { href: '#0', icon: <Twitter /> },
            { href: '#0', icon: <LinkedIn /> },
            { href: '#0', icon: <Xing /> },
            { href: '#0', icon: <Facebook /> },
        ]}
        bgMode="inverted"
    />
);
