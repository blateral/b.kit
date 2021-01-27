import * as React from 'react';
import { Meta, Story } from '@storybook/react';

import Footer from 'components/sections/Footer';

import Facebook from 'components/base/icons/socials/Facebook';
import LinkedIn from 'components/base/icons/socials/LinkedIn';
import Xing from 'components/base/icons/socials/Xing';
import Twitter from 'components/base/icons/socials/Twitter';
import CompactForm from 'components/fields/CompactForm';

const exampleContactData = `
    Max Mustermann GmbH
    <br />
    Musterstraße 15-17
    <br />
    12345 Musterstadt
    <br />
    <br />
    Tel. +49 2302 2233-223
    <br />
    Fax +49 2302 2233-223
    <br />
    <a href="mailto:max-mustermann@examplemail.com">
        max-mustermann@examplemail.com
    </a>
`;
export default {
    title: 'Sections/Footer',
    component: Footer,
} as Meta;

export const WithContactData: Story = () => (
    <Footer contactData={exampleContactData} />
);

export const WithLogo: Story = () => (
    <Footer
        logo={{
            img: 'https://via.placeholder.com/289x77?text=Logo',
            link: '/',
        }}
        contactData={exampleContactData}
    />
);

export const WithSiteLinks: Story = () => (
    <Footer
        logo={{
            img: 'https://via.placeholder.com/289x77?text=Logo',
            link: '/',
        }}
        contactData={exampleContactData}
        siteLinks={[
            { href: '#', label: 'Aufgaben/Bereiche' },
            { href: '#', label: 'Pflege' },
            { href: '#', label: 'Wohnen', isActive: true },
            { href: '#', label: 'Arbeiten & Mitwirken' },
            { href: '#', label: 'Spenden' },
            { href: '#', label: 'Stiftung' },
        ]}
    />
);

export const WithMoreSiteLinks: Story = () => (
    <Footer
        logo={{
            img: 'https://via.placeholder.com/289x77?text=Logo',
            link: '/',
        }}
        contactData={exampleContactData}
        siteLinks={[
            { href: '#', label: 'Aufgaben/Bereiche' },
            { href: '#', label: 'Pflege' },
            { href: '#', label: 'Wohnen', isActive: true },
            { href: '#', label: 'Arbeiten & Mitwirken' },
            { href: '#', label: 'Spenden' },
            { href: '#', label: 'Stiftung' },
            { href: '#', label: 'Aufgaben/Bereiche' },
            { href: '#', label: 'Pflege' },
            { href: '#', label: 'Wohnen' },
            { href: '#', label: 'Arbeiten & Mitwirken' },
            { href: '#', label: 'Spenden' },
            { href: '#', label: 'Stiftung' },
        ]}
    />
);

export const WithUnevenSiteLinks: Story = () => (
    <Footer
        logo={{
            img: 'https://via.placeholder.com/289x77?text=Logo',
            link: '/',
        }}
        contactData={exampleContactData}
        siteLinks={[
            { href: '#', label: 'Aufgaben/Bereiche' },
            { href: '#', label: 'Pflege' },
            { href: '#', label: 'Wohnen', isActive: true },
            { href: '#', label: 'Arbeiten & Mitwirken' },
            { href: '#', label: 'Spenden' },
            { href: '#', label: 'Stiftung' },
            { href: '#', label: 'Aufgaben/Bereiche' },
            { href: '#', label: 'Pflege' },
            { href: '#', label: 'Wohnen' },
        ]}
    />
);

export const WithNewsletterTitleAndText: Story = () => (
    <Footer
        logo={{
            img: 'https://via.placeholder.com/289x77?text=Logo',
            link: '/',
        }}
        contactData={exampleContactData}
        siteLinks={[
            { href: '#', label: 'Aufgaben/Bereiche' },
            { href: '#', label: 'Pflege' },
            { href: '#', label: 'Wohnen', isActive: true },
            { href: '#', label: 'Arbeiten & Mitwirken' },
            { href: '#', label: 'Spenden' },
            { href: '#', label: 'Stiftung' },
            { href: '#', label: 'Aufgaben/Bereiche' },
            { href: '#', label: 'Pflege' },
            { href: '#', label: 'Wohnen' },
            { href: '#', label: 'Arbeiten & Mitwirken' },
            { href: '#', label: 'Spenden' },
            { href: '#', label: 'Stiftung' },
        ]}
        newsTitle="Newsletter"
        newsText={`Bleiben Sie immer aktuell, Softwareneuerungen, Informationen aus dem Unternehmen usw. Abbonieren Sie kostenfrei unseren Newsletter, einfach nur <a href="#">E-Mail Adresse</a> hinterlassen und von immer aktuellen Nachrichten profitieren.`}
    />
);

export const WithNewsletterForm: Story = () => (
    <Footer
        logo={{
            img: 'https://via.placeholder.com/289x77?text=Logo',
            link: '/',
        }}
        contactData={exampleContactData}
        siteLinks={[
            { href: '#', label: 'Aufgaben/Bereiche' },
            { href: '#', label: 'Pflege' },
            { href: '#', label: 'Wohnen', isActive: true },
            { href: '#', label: 'Arbeiten & Mitwirken' },
            { href: '#', label: 'Spenden' },
            { href: '#', label: 'Stiftung' },
            { href: '#', label: 'Aufgaben/Bereiche' },
            { href: '#', label: 'Pflege' },
            { href: '#', label: 'Wohnen' },
            { href: '#', label: 'Arbeiten & Mitwirken' },
            { href: '#', label: 'Spenden' },
            { href: '#', label: 'Stiftung' },
        ]}
        newsTitle="Newsletter"
        newsText={`Bleiben Sie immer aktuell, Softwareneuerungen, Informationen aus dem Unternehmen usw. Abbonieren Sie kostenfrei unseren Newsletter, einfach nur <a href="#">E-Mail Adresse</a> hinterlassen und von immer aktuellen Nachrichten profitieren.`}
        newsForm={(isInverted) => (
            <CompactForm
                isInverted={isInverted}
                placeholder="Geben Sie Ihre E-Mail Adresse an"
                buttonIcon={'Primary'}
                onSubmit={console.log}
                onClick={console.log}
                onBlur={console.log}
            />
        )}
    />
);

export const WithSocials: Story = () => (
    <Footer
        logo={{
            img: 'https://via.placeholder.com/289x77?text=Logo',
            link: '/',
        }}
        contactData={exampleContactData}
        siteLinks={[
            { href: '#', label: 'Aufgaben/Bereiche' },
            { href: '#', label: 'Pflege' },
            { href: '#', label: 'Wohnen', isActive: true },
            { href: '#', label: 'Arbeiten & Mitwirken' },
            { href: '#', label: 'Spenden' },
            { href: '#', label: 'Stiftung' },
            { href: '#', label: 'Aufgaben/Bereiche' },
            { href: '#', label: 'Pflege' },
            { href: '#', label: 'Wohnen' },
            { href: '#', label: 'Arbeiten & Mitwirken' },
            { href: '#', label: 'Spenden' },
            { href: '#', label: 'Stiftung' },
        ]}
        newsTitle="Newsletter"
        newsText={`Bleiben Sie immer aktuell, Softwareneuerungen, Informationen aus dem Unternehmen usw. Abbonieren Sie kostenfrei unseren Newsletter, einfach nur <a href="#">E-Mail Adresse</a> hinterlassen und von immer aktuellen Nachrichten profitieren.`}
        newsForm={(isInverted) => (
            <CompactForm
                isInverted={isInverted}
                placeholder="Geben Sie Ihre E-Mail Adresse an"
                buttonIcon={'Primary'}
                onSubmit={console.log}
                onClick={console.log}
                onBlur={console.log}
            />
        )}
        socials={[
            { href: '#', icon: <Facebook /> },
            { href: '#', icon: <LinkedIn /> },
            { href: '#', icon: <Xing /> },
            { href: '#', icon: <Twitter /> },
        ]}
    />
);

export const WithColumnTopSpace: Story = () => (
    <Footer
        logo={{
            img: 'https://via.placeholder.com/289x77?text=Logo',
            link: '/',
        }}
        columnTopSpace="40px"
        contactData={exampleContactData}
        siteLinks={[
            { href: '#', label: 'Aufgaben/Bereiche' },
            { href: '#', label: 'Pflege' },
            { href: '#', label: 'Wohnen', isActive: true },
            { href: '#', label: 'Arbeiten & Mitwirken' },
            { href: '#', label: 'Spenden' },
            { href: '#', label: 'Stiftung' },
            { href: '#', label: 'Aufgaben/Bereiche' },
            { href: '#', label: 'Pflege' },
            { href: '#', label: 'Wohnen' },
            { href: '#', label: 'Arbeiten & Mitwirken' },
            { href: '#', label: 'Spenden' },
            { href: '#', label: 'Stiftung' },
        ]}
        newsTitle="Newsletter"
        newsText={`Bleiben Sie immer aktuell, Softwareneuerungen, Informationen aus dem Unternehmen usw. Abbonieren Sie kostenfrei unseren Newsletter, einfach nur <a href="#">E-Mail Adresse</a> hinterlassen und von immer aktuellen Nachrichten profitieren.`}
        newsForm={(isInverted) => (
            <CompactForm
                isInverted={isInverted}
                placeholder="Geben Sie Ihre E-Mail Adresse an"
                buttonIcon={'Primary'}
                onSubmit={console.log}
                onClick={console.log}
                onBlur={console.log}
            />
        )}
        socials={[
            { href: '#', icon: <Facebook /> },
            { href: '#', icon: <LinkedIn /> },
            { href: '#', icon: <Xing /> },
            { href: '#', icon: <Twitter /> },
        ]}
    />
);

export const WithBottomLinks: Story = () => (
    <Footer
        logo={{
            img: 'https://via.placeholder.com/289x77?text=Logo',
            link: '/',
        }}
        columnTopSpace="40px"
        contactData={exampleContactData}
        siteLinks={[
            { href: '#', label: 'Aufgaben/Bereiche' },
            { href: '#', label: 'Pflege' },
            { href: '#', label: 'Wohnen', isActive: true },
            { href: '#', label: 'Arbeiten & Mitwirken' },
            { href: '#', label: 'Spenden' },
            { href: '#', label: 'Stiftung' },
            { href: '#', label: 'Aufgaben/Bereiche' },
            { href: '#', label: 'Pflege' },
            { href: '#', label: 'Wohnen' },
            { href: '#', label: 'Arbeiten & Mitwirken' },
            { href: '#', label: 'Spenden' },
            { href: '#', label: 'Stiftung' },
        ]}
        newsTitle="Newsletter"
        newsText={`Bleiben Sie immer aktuell, Softwareneuerungen, Informationen aus dem Unternehmen usw. Abbonieren Sie kostenfrei unseren Newsletter, einfach nur <a href="#">E-Mail Adresse</a> hinterlassen und von immer aktuellen Nachrichten profitieren.`}
        newsForm={(isInverted) => (
            <CompactForm
                isInverted={isInverted}
                placeholder="Geben Sie Ihre E-Mail Adresse an"
                buttonIcon={'Primary'}
                onSubmit={console.log}
                onClick={console.log}
                onBlur={console.log}
            />
        )}
        socials={[
            { href: '#', icon: <Facebook /> },
            { href: '#', icon: <LinkedIn /> },
            { href: '#', icon: <Xing /> },
            { href: '#', icon: <Twitter /> },
        ]}
        bottomLinks={[
            { href: '/impressum', label: 'Impressum' },
            { href: '/datenschutz', label: 'Datenschutz' },
        ]}
    />
);

export const Inverted: Story = () => (
    <Footer
        isInverted
        logo={{
            img: 'https://via.placeholder.com/289x77?text=Logo',
            link: '/',
        }}
        columnTopSpace="40px"
        contactData={exampleContactData}
        siteLinks={[
            { href: '#', label: 'Aufgaben/Bereiche' },
            { href: '#', label: 'Pflege' },
            { href: '#', label: 'Wohnen', isActive: true },
            { href: '#', label: 'Arbeiten & Mitwirken' },
            { href: '#', label: 'Spenden' },
            { href: '#', label: 'Stiftung' },
            { href: '#', label: 'Aufgaben/Bereiche' },
            { href: '#', label: 'Pflege' },
            { href: '#', label: 'Wohnen' },
            { href: '#', label: 'Arbeiten & Mitwirken' },
            { href: '#', label: 'Spenden' },
            { href: '#', label: 'Stiftung' },
        ]}
        newsTitle="Newsletter"
        newsText={`Bleiben Sie immer aktuell, Softwareneuerungen, Informationen aus dem Unternehmen usw. Abbonieren Sie kostenfrei unseren Newsletter, einfach nur <a href="#">E-Mail Adresse</a> hinterlassen und von immer aktuellen Nachrichten profitieren.`}
        newsForm={(isInverted) => (
            <CompactForm
                isInverted={isInverted}
                placeholder="Geben Sie Ihre E-Mail Adresse an"
                buttonIcon={'Primary'}
                onSubmit={console.log}
                onClick={console.log}
                onBlur={console.log}
            />
        )}
        socials={[
            { href: '#', icon: <Facebook /> },
            { href: '#', icon: <LinkedIn /> },
            { href: '#', icon: <Xing /> },
            { href: '#', icon: <Twitter /> },
        ]}
        bottomLinks={[
            { href: '/impressum', label: 'Impressum' },
            { href: '/datenschutz', label: 'Datenschutz' },
        ]}
    />
);
