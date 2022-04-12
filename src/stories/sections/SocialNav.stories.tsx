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
            type: 'preview',
        },
    },
} as Meta;

export const Default: Story = () => (
    <SocialNav
        socials={[
            { link: { href: '#0' }, icon: <Twitter /> },
            { link: { href: '#0' }, icon: <LinkedIn /> },
            { link: { href: '#0' }, icon: <Xing /> },
            { link: { href: '#0' }, icon: <Facebook /> },
        ]}
    />
);

export const WithBackground: Story = () => (
    <SocialNav
        bgMode="full"
        socials={[
            { link: { href: '#0' }, icon: <Twitter /> },
            { link: { href: '#0' }, icon: <LinkedIn /> },
            { link: { href: '#0' }, icon: <Xing /> },
            { link: { href: '#0' }, icon: <Facebook /> },
        ]}
    />
);

export const IsInverted: Story = () => (
    <SocialNav
        socials={[
            { link: { href: '#0' }, icon: <Twitter /> },
            { link: { href: '#0' }, icon: <LinkedIn /> },
            { link: { href: '#0' }, icon: <Xing /> },
            { link: { href: '#0' }, icon: <Facebook /> },
        ]}
        bgMode="inverted"
    />
);
