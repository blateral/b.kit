/* eslint-disable react/display-name */
import React from 'react';
import { Meta, Story } from '@storybook/react';
import FooterNew, { SiteLinkGroup } from 'components/sections/FooterNew';
import Facebook from 'components/base/icons/socials/Facebook';
import Instagram from 'components/base/icons/socials/Instagram';
import Youtube from 'components/base/icons/socials/Youtube';
import ButtonGhost from 'components/buttons/ButtonGhost';
import LanguageIcon from 'components/base/icons/Language';

const exampleSiteLinks: SiteLinkGroup[] = [
    {
        title: 'Produkte',
        links: [
            {
                link: { href: '#0' },
                label: 'Lorem ipsum',
            },
            {
                link: { href: '#0' },
                label: 'Dolor sit amet',
            },
            {
                link: { href: '#0' },
                label: 'Consectetur adipisicing elit',
            },
            {
                link: { href: '#0' },
                label: 'Totam iste odio',
            },
            {
                link: { href: '#0' },
                label: 'Quos inventore hic a',
            },
        ],
    },
    {
        title: 'Dienstleistungen',
        links: [
            {
                link: { href: '#0' },
                label: 'Lorem ipsum',
            },
            {
                link: { href: '#0' },
                label: 'Dolor sit amet',
            },
            {
                link: { href: '#0' },
                label: 'Consectetur adipisicing elit',
            },
            {
                link: { href: '#0' },
                label: 'Totam iste odio',
            },
            {
                link: { href: '#0' },
                label: 'Quos inventore hic a',
            },
        ],
    },
    {
        title: 'Unternehmen',
        links: [
            {
                link: { href: '#0' },
                label: 'Lorem ipsum',
            },
            {
                link: { href: '#0' },
                label: 'Dolor sit amet',
            },
            {
                link: { href: '#0' },
                label: 'Consectetur adipisicing elit',
            },
            {
                link: { href: '#0' },
                label: 'Totam iste odio',
            },
            {
                link: { href: '#0' },
                label: 'Quos inventore hic a',
            },
        ],
    },
];

const exampleCallToAction = {
    title: 'Newsletter',
    text: 'Immer gut informiert. Abbonieren Sie unseren Newsletter um regelmäßig Informationen zu bekommen.',
    action: (isInverted?: boolean) => (
        <ButtonGhost.View isInverted={isInverted}>
            <ButtonGhost.Label>Primary</ButtonGhost.Label>
        </ButtonGhost.View>
    ),
};

const exampleSocials = {
    title: 'Folgen Sie Uns',
    social: [
        { href: '#', icon: () => <Facebook /> },
        { href: '#', icon: () => <Instagram /> },
        { href: '#', icon: () => <Youtube /> },
    ],
};

const exampleBottomLinks = [
    { href: '/impressum', label: 'Impressum' },
    { href: '/agb', label: 'AGB' },
    { href: '/datenschutz', label: 'Datenschutz' },
];

export default {
    title: 'Sections / FooterNew',
    component: FooterNew,
} as Meta;

export const Default: Story = () => <FooterNew siteLinks={exampleSiteLinks} />;

export const WithCallToAction: Story = () => (
    <FooterNew
        siteLinks={exampleSiteLinks}
        callToAction={exampleCallToAction}
    />
);

export const WithSocials: Story = () => (
    <FooterNew
        siteLinks={exampleSiteLinks}
        callToAction={exampleCallToAction}
        socials={exampleSocials}
    />
);

export const WithFootNote: Story = () => (
    <FooterNew
        siteLinks={exampleSiteLinks}
        callToAction={exampleCallToAction}
        socials={exampleSocials}
        footNote={`<b>© Villa Wunschgarten</b> | Münsterstraße 157 | 88662 Überlingen | Tel: 07551 8112345 | info@villa-wunschgarten.de`}
    />
);

export const WithBottomLinks: Story = () => (
    <FooterNew
        siteLinks={exampleSiteLinks}
        callToAction={exampleCallToAction}
        socials={exampleSocials}
        footNote={`<b>© Villa Wunschgarten</b> | Münsterstraße 157 | 88662 Überlingen | Tel: 07551 8112345 | info@villa-wunschgarten.de`}
        bottomLinks={exampleBottomLinks}
    />
);

export const WithLanguageSwitcher: Story = () => (
    <FooterNew
        siteLinks={exampleSiteLinks}
        callToAction={exampleCallToAction}
        socials={exampleSocials}
        footNote={`<b>© Villa Wunschgarten</b> | Münsterstraße 157 | 88662 Überlingen | Tel: 07551 8112345 | info@villa-wunschgarten.de`}
        bottomLinks={exampleBottomLinks}
        language={[
            { label: 'deutsch', link: { href: '/de' } },
            { label: 'englisch', link: { href: '/en' } },
            { label: 'französisch', link: { href: '/fr' } },
        ]}
    />
);

export const WithLanguageSwitcherIcon: Story = () => (
    <FooterNew
        siteLinks={exampleSiteLinks}
        callToAction={exampleCallToAction}
        socials={exampleSocials}
        footNote={`<b>© Villa Wunschgarten</b> | Münsterstraße 157 | 88662 Überlingen | Tel: 07551 8112345 | info@villa-wunschgarten.de`}
        bottomLinks={exampleBottomLinks}
        language={[
            { label: 'deutsch', link: { href: '/de' } },
            { label: 'englisch', link: { href: '/en' } },
            { label: 'französisch', link: { href: '/fr' } },
        ]}
        languageIcon={() => <LanguageIcon />}
    />
);

export const IsInverted: Story = () => (
    <FooterNew
        bgMode="inverted"
        siteLinks={exampleSiteLinks}
        callToAction={exampleCallToAction}
        socials={exampleSocials}
        footNote={`<b>© Villa Wunschgarten</b> | Münsterstraße 157 | 88662 Überlingen | Tel: 07551 8112345 | info@villa-wunschgarten.de`}
        bottomLinks={exampleBottomLinks}
        language={[
            { label: 'deutsch', link: { href: '/de' } },
            { label: 'englisch', link: { href: '/en' } },
            { label: 'französisch', link: { href: '/fr' } },
        ]}
        languageIcon={() => <LanguageIcon />}
    />
);
