/* eslint-disable react/display-name */
import React from 'react';
import { Meta, Story } from '@storybook/react';
import Footer, {
    BottomLink,
    SiteLinkGroup,
    FooterComponent,
} from 'components/sections/footer/Footer';
import Facebook from 'components/base/icons/socials/Facebook';
import Instagram from 'components/base/icons/socials/Instagram';
import Youtube from 'components/base/icons/socials/Youtube';
import ButtonGhost from 'components/buttons/ButtonGhost';

import FooterColumn from 'components/sections/footer/partials/FooterColumn';

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

const exampleSocials = [
    { href: '#', icon: () => <Facebook /> },
    { href: '#', icon: () => <Instagram /> },
    { href: '#', icon: () => <Youtube /> },
];

const exampleBottomLinks: BottomLink[] = [
    { link: { href: '/impressum' }, label: 'Impressum' },
    { link: { href: '/agb' }, label: 'AGB' },
    { link: { href: '/datenschutz' }, label: 'Datenschutz' },
];

export default {
    title: 'Sections / Footer',
    component: FooterComponent,
    parameters: {
        status: {
            type: ['preview', 'qsReady'],
        },
    },
} as Meta;

export const Default: Story = () => <Footer siteLinks={exampleSiteLinks} />;

export const WithCustomColumn: Story = () => (
    <Footer
        siteLinks={exampleSiteLinks}
        customColumn={({ isInverted }) => (
            <FooterColumn
                isInverted={isInverted}
                title="Newsletter"
                text="Immer gut informiert. Abbonieren Sie unseren Newsletter um regelmäßig Informationen zu bekommen."
                action={({ isInverted }) => (
                    <ButtonGhost.View isInverted={isInverted} href="#0">
                        <ButtonGhost.Label>Primary</ButtonGhost.Label>
                    </ButtonGhost.View>
                )}
                socialTitle="Follow us"
                socials={exampleSocials}
            />
        )}
    />
);

export const WithFootNote: Story = () => (
    <Footer
        siteLinks={exampleSiteLinks}
        customColumn={({ isInverted }) => (
            <FooterColumn
                isInverted={isInverted}
                title="Newsletter"
                text="Immer gut informiert. Abbonieren Sie unseren Newsletter um regelmäßig Informationen zu bekommen."
                action={({ isInverted }) => (
                    <ButtonGhost.View isInverted={isInverted} href="#0">
                        <ButtonGhost.Label>Primary</ButtonGhost.Label>
                    </ButtonGhost.View>
                )}
                socialTitle="Follow us"
                socials={exampleSocials}
            />
        )}
        footNote={`<b>© Villa Wunschgarten</b> | Münsterstraße 157 | 88662 Überlingen | Tel: 07551 8112345 | info@villa-wunschgarten.de`}
    />
);

export const WithBottomLinks: Story = () => (
    <Footer
        siteLinks={exampleSiteLinks}
        customColumn={({ isInverted }) => (
            <FooterColumn
                isInverted={isInverted}
                title="Newsletter"
                text="Immer gut informiert. Abbonieren Sie unseren Newsletter um regelmäßig Informationen zu bekommen."
                action={({ isInverted }) => (
                    <ButtonGhost.View isInverted={isInverted} href="#0">
                        <ButtonGhost.Label>Primary</ButtonGhost.Label>
                    </ButtonGhost.View>
                )}
                socialTitle="Follow us"
                socials={exampleSocials}
            />
        )}
        footNote={`<b>© Villa Wunschgarten</b> | Münsterstraße 157 | 88662 Überlingen | Tel: 07551 8112345 | info@villa-wunschgarten.de`}
        bottomLinks={exampleBottomLinks}
    />
);

export const WithLanguageSwitcher: Story = () => (
    <Footer
        siteLinks={exampleSiteLinks}
        customColumn={({ isInverted }) => (
            <FooterColumn
                isInverted={isInverted}
                title="Newsletter"
                text="Immer gut informiert. Abbonieren Sie unseren Newsletter um regelmäßig Informationen zu bekommen."
                action={({ isInverted }) => (
                    <ButtonGhost.View isInverted={isInverted} href="#0">
                        <ButtonGhost.Label>Primary</ButtonGhost.Label>
                    </ButtonGhost.View>
                )}
                socialTitle="Follow us"
                socials={exampleSocials}
            />
        )}
        footNote={`<b>© Villa Wunschgarten</b> | Münsterstraße 157 | 88662 Überlingen | Tel: 07551 8112345 | info@villa-wunschgarten.de`}
        bottomLinks={exampleBottomLinks}
        languages={[
            { label: 'deutsch', link: { href: '/de' } },
            { label: 'englisch', link: { href: '/en' } },
            { label: 'französisch', link: { href: '/fr' } },
        ]}
    />
);

export const WithBackground: Story = () => (
    <Footer
        bgMode="full"
        siteLinks={exampleSiteLinks}
        customColumn={({ isInverted }) => (
            <FooterColumn
                isInverted={isInverted}
                title="Newsletter"
                text="Immer gut informiert. Abbonieren Sie unseren Newsletter um regelmäßig Informationen zu bekommen."
                action={({ isInverted }) => (
                    <ButtonGhost.View isInverted={isInverted} href="#0">
                        <ButtonGhost.Label>Primary</ButtonGhost.Label>
                    </ButtonGhost.View>
                )}
                socialTitle="Follow us"
                socials={exampleSocials}
            />
        )}
        footNote={`<b>© Villa Wunschgarten</b> | Münsterstraße 157 | 88662 Überlingen | Tel: 07551 8112345 | info@villa-wunschgarten.de`}
        bottomLinks={exampleBottomLinks}
        languages={[
            { label: 'deutsch', link: { href: '/de' } },
            { label: 'englisch', link: { href: '/en' } },
            { label: 'französisch', link: { href: '/fr' } },
        ]}
    />
);

export const IsInverted: Story = () => (
    <Footer
        bgMode="inverted"
        siteLinks={exampleSiteLinks}
        customColumn={({ isInverted }) => (
            <FooterColumn
                isInverted={isInverted}
                title="Newsletter"
                text="Immer gut informiert. Abbonieren Sie unseren Newsletter um regelmäßig Informationen zu bekommen."
                action={({ isInverted }) => (
                    <ButtonGhost.View isInverted={isInverted} href="#0">
                        <ButtonGhost.Label>Primary</ButtonGhost.Label>
                    </ButtonGhost.View>
                )}
                socialTitle="Follow us"
                socials={exampleSocials}
            />
        )}
        footNote={`<b>© Villa Wunschgarten</b> | Münsterstraße 157 | 88662 Überlingen | Tel: 07551 8112345 | info@villa-wunschgarten.de`}
        bottomLinks={exampleBottomLinks}
        languages={[
            { label: 'deutsch', link: { href: '/de' } },
            { label: 'englisch', link: { href: '/en' } },
            { label: 'französisch', link: { href: '/fr' } },
        ]}
    />
);

export const SuppressBottom: Story = () => (
    <Footer
        siteLinks={exampleSiteLinks}
        customColumn={({ isInverted }) => (
            <FooterColumn
                isInverted={isInverted}
                title="Newsletter"
                text="Immer gut informiert. Abbonieren Sie unseren Newsletter um regelmäßig Informationen zu bekommen."
                action={({ isInverted }) => (
                    <ButtonGhost.View isInverted={isInverted} href="#0">
                        <ButtonGhost.Label>Primary</ButtonGhost.Label>
                    </ButtonGhost.View>
                )}
                socialTitle="Follow us"
                socials={exampleSocials}
            />
        )}
        footNote={`<b>© Villa Wunschgarten</b> | Münsterstraße 157 | 88662 Überlingen | Tel: 07551 8112345 | info@villa-wunschgarten.de`}
        bottomLinks={exampleBottomLinks}
        languages={[
            { label: 'deutsch', link: { href: '/de' } },
            { label: 'englisch', link: { href: '/en' } },
            { label: 'französisch', link: { href: '/fr' } },
        ]}
        bottomBar={null}
    />
);

export const CustomBottom: Story = () => (
    <Footer
        siteLinks={exampleSiteLinks}
        customColumn={({ isInverted }) => (
            <FooterColumn
                isInverted={isInverted}
                title="Newsletter"
                text="Immer gut informiert. Abbonieren Sie unseren Newsletter um regelmäßig Informationen zu bekommen."
                action={({ isInverted }) => (
                    <ButtonGhost.View isInverted={isInverted} href="#0">
                        <ButtonGhost.Label>Primary</ButtonGhost.Label>
                    </ButtonGhost.View>
                )}
                socialTitle="Follow us"
                socials={exampleSocials}
            />
        )}
        footNote={`<b>© Villa Wunschgarten</b> | Münsterstraße 157 | 88662 Überlingen | Tel: 07551 8112345 | info@villa-wunschgarten.de`}
        bottomLinks={exampleBottomLinks}
        languages={[
            { label: 'deutsch', link: { href: '/de' } },
            { label: 'englisch', link: { href: '/en' } },
            { label: 'französisch', link: { href: '/fr' } },
        ]}
        bottomBar={({ bottomLinks }) => (
            <div>Bottom bar with {(bottomLinks?.length || 0) + 1} Links</div>
        )}
    />
);
