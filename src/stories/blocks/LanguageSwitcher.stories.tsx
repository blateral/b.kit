import React from 'react';
import { Meta, Story } from '@storybook/react';
import LanguageSwitcher from 'components/blocks/LanguageSwitcher';

export default {
    title: 'Blocks/LanguageSwitcher',
    component: LanguageSwitcher,
    parameters: {
        status: {
            type: ['preview'],
        },
    },
    decorators: [
        (Story) => (
            <div style={{ padding: '20px' }}>
                <Story />
            </div>
        ),
    ],
} as Meta;

export const Default: Story = () => (
    <LanguageSwitcher
        langs={[
            { label: 'DE', link: { href: '/de' } },
            { label: 'EN', link: { href: '/en' } },
        ]}
    />
);

export const Inverted: Story = () => (
    <LanguageSwitcher
        isInverted
        langs={[
            { label: 'DE', link: { href: '/de' } },
            { label: 'EN', link: { href: '/en' } },
        ]}
    />
);

Inverted.parameters = {
    backgrounds: {
        default: 'inverted',
        values: [{ name: 'inverted', value: 'black' }],
    },
};

export const WithMoreLanguages: Story = () => (
    <LanguageSwitcher
        langs={[
            { label: 'DE', link: { href: '/de' } },
            { label: 'EN', link: { href: '/en' } },
            { label: 'FR', link: { href: '/fr' } },
            { label: 'ESP', link: { href: '/esp' } },
        ]}
    />
);
