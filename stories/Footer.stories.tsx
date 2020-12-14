import * as React from 'react';
import { Meta, Story } from '@storybook/react';

import Link from '../src/components/typography/Link';
import Footer from '../src/components/sections/Footer';
// import CompactForm from '../src/components/fields/CompactForm';
import ArrowRight from '../src/components/base/icons/ArrowRight';

import Facebook from '../src/components/base/icons/socials/Facebook';
import LinkedIn from '../src/components/base/icons/socials/LinkedIn';
import Xing from '../src/components/base/icons/socials/Xing';
import Twitter from '../src/components/base/icons/socials/Twitter';
import { spacings } from '../src/utils/styles';
// import Logo from '../src/components/base/icons/logos/Logo';

const exampleContactData = (
    <>
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
        <Link isExternal href="max-mustermann@examplemail.com">
            max-mustermann@examplemail.com
        </Link>
    </>
);

export default {
    title: 'Sections/Footer',
    component: Footer,
} as Meta;

export const WithContactData: Story = () => (
    <Footer
        contactData={
            <>
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
                <Link isExternal href="max-mustermann@examplemail.com">
                    max-mustermann@examplemail.com
                </Link>
            </>
        }
    />
);

export const WithLogo: Story = () => (
    <Footer
        logo={{
            image: <img src="https://via.placeholder.com/208x65" />,
            link: '/',
        }}
        contactData={exampleContactData}
    />
);

export const WithSiteLinks: Story = () => (
    <Footer
        logo={{
            image: <img src="https://via.placeholder.com/208x65" />,
            link: '/',
        }}
        contactData={exampleContactData}
        siteLinks={[
            [
                { href: '#', label: 'Aufgaben/Bereiche' },
                { href: '#', label: 'Pflege' },
                { href: '#', label: 'Wohnen', isActive: true },
                { href: '#', label: 'Arbeiten & Mitwirken' },
                { href: '#', label: 'Spenden' },
                { href: '#', label: 'Stiftung' },
            ],
            [
                { href: '#', label: 'Aufgaben/Bereiche' },
                { href: '#', label: 'Pflege' },
                { href: '#', label: 'Wohnen' },
                { href: '#', label: 'Arbeiten & Mitwirken' },
                { href: '#', label: 'Spenden' },
                { href: '#', label: 'Stiftung' },
            ],
        ]}
    />
);

export const WithNewsletterTitleAndText: Story = () => (
    <Footer
        logo={{
            image: <img src="https://via.placeholder.com/208x65" />,
            link: '/',
        }}
        contactData={exampleContactData}
        siteLinks={[
            [
                { href: '#', label: 'Aufgaben/Bereiche' },
                { href: '#', label: 'Pflege' },
                { href: '#', label: 'Wohnen', isActive: true },
                { href: '#', label: 'Arbeiten & Mitwirken' },
                { href: '#', label: 'Spenden' },
                { href: '#', label: 'Stiftung' },
            ],
            [
                { href: '#', label: 'Aufgaben/Bereiche' },
                { href: '#', label: 'Pflege' },
                { href: '#', label: 'Wohnen' },
                { href: '#', label: 'Arbeiten & Mitwirken' },
                { href: '#', label: 'Spenden' },
                { href: '#', label: 'Stiftung' },
            ],
        ]}
        newsTitle="Newsletter"
        newsText={`Bleiben Sie immer aktuell, Softwareneuerungen, Informationen aus dem Unternehmen usw. Abbonieren Sie kostenfrei unseren Newsletter, einfach nur <a href="#">E-Mail Adresse</a> hinterlassen und von immer aktuellen Nachrichten profitieren.`}
    />
);

// export const WithNewsletterForm: Story = () => (
//     <Footer
//         logo={{
//             image: <img src="https://via.placeholder.com/208x65" />,
//             link: '/',
//         }}
//         contactData={exampleContactData}
//         siteLinks={[
//             [
//                 { href: '#', label: 'Aufgaben/Bereiche' },
//                 { href: '#', label: 'Pflege' },
//                 { href: '#', label: 'Wohnen', isActive: true },
//                 { href: '#', label: 'Arbeiten & Mitwirken' },
//                 { href: '#', label: 'Spenden' },
//                 { href: '#', label: 'Stiftung' },
//             ],
//             [
//                 { href: '#', label: 'Aufgaben/Bereiche' },
//                 { href: '#', label: 'Pflege' },
//                 { href: '#', label: 'Wohnen' },
//                 { href: '#', label: 'Arbeiten & Mitwirken' },
//                 { href: '#', label: 'Spenden' },
//                 { href: '#', label: 'Stiftung' },
//             ],
//         ]}
//         newsTitle="Newsletter"
//         newsText={`Bleiben Sie immer aktuell, Softwareneuerungen, Informationen aus dem Unternehmen usw. Abbonieren Sie kostenfrei unseren Newsletter, einfach nur <a href="#">E-Mail Adresse</a> hinterlassen und von immer aktuellen Nachrichten profitieren.`}
//         newsForm={
//             <CompactForm
//                 isInverted
//                 placeholder="Geben Sie Ihre E-Mail Adresse an"
//                 buttonIcon={<ArrowRight />}
//                 onSubmit={console.log}
//                 onClick={console.log}
//                 onBlur={console.log}
//             />
//         }
//     />
// );

export const WithSocials: Story = () => (
    <Footer
        logo={{
            image: <img src="https://via.placeholder.com/208x65" />,
            link: '/',
        }}
        contactData={exampleContactData}
        siteLinks={[
            [
                { href: '#', label: 'Aufgaben/Bereiche' },
                { href: '#', label: 'Pflege' },
                { href: '#', label: 'Wohnen', isActive: true },
                { href: '#', label: 'Arbeiten & Mitwirken' },
                { href: '#', label: 'Spenden' },
                { href: '#', label: 'Stiftung' },
            ],
            [
                { href: '#', label: 'Aufgaben/Bereiche' },
                { href: '#', label: 'Pflege' },
                { href: '#', label: 'Wohnen' },
                { href: '#', label: 'Arbeiten & Mitwirken' },
                { href: '#', label: 'Spenden' },
                { href: '#', label: 'Stiftung' },
            ],
        ]}
        newsTitle="Newsletter"
        newsText={`Bleiben Sie immer aktuell, Softwareneuerungen, Informationen aus dem Unternehmen usw. Abbonieren Sie kostenfrei unseren Newsletter, einfach nur <a href="#">E-Mail Adresse</a> hinterlassen und von immer aktuellen Nachrichten profitieren.`}
        // newsForm={
        //     <CompactForm
        //         isInverted
        //         placeholder="Geben Sie Ihre E-Mail Adresse an"
        //         buttonIcon={<ArrowRight />}
        //         onSubmit={console.log}
        //         onClick={console.log}
        //         onBlur={console.log}
        //     />
        // }
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
            image: <img src="https://via.placeholder.com/208x65" />,
            link: '/',
        }}
        columnTopSpace={spacings.spacer}
        contactData={exampleContactData}
        siteLinks={[
            [
                { href: '#', label: 'Aufgaben/Bereiche' },
                { href: '#', label: 'Pflege' },
                { href: '#', label: 'Wohnen', isActive: true },
                { href: '#', label: 'Arbeiten & Mitwirken' },
                { href: '#', label: 'Spenden' },
                { href: '#', label: 'Stiftung' },
            ],
            [
                { href: '#', label: 'Aufgaben/Bereiche' },
                { href: '#', label: 'Pflege' },
                { href: '#', label: 'Wohnen' },
                { href: '#', label: 'Arbeiten & Mitwirken' },
                { href: '#', label: 'Spenden' },
                { href: '#', label: 'Stiftung' },
            ],
        ]}
        newsTitle="Newsletter"
        newsText={`Bleiben Sie immer aktuell, Softwareneuerungen, Informationen aus dem Unternehmen usw. Abbonieren Sie kostenfrei unseren Newsletter, einfach nur <a href="#">E-Mail Adresse</a> hinterlassen und von immer aktuellen Nachrichten profitieren.`}
        // newsForm={
        //     <CompactForm
        //         isInverted
        //         placeholder="Geben Sie Ihre E-Mail Adresse an"
        //         buttonIcon={<ArrowRight />}
        //         onSubmit={console.log}
        //         onClick={console.log}
        //         onBlur={console.log}
        //     />
        // }
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
            image: <img src="https://via.placeholder.com/208x65" />,
            link: '/',
        }}
        columnTopSpace={spacings.spacer}
        contactData={exampleContactData}
        siteLinks={[
            [
                { href: '#', label: 'Aufgaben/Bereiche' },
                { href: '#', label: 'Pflege' },
                { href: '#', label: 'Wohnen', isActive: true },
                { href: '#', label: 'Arbeiten & Mitwirken' },
                { href: '#', label: 'Spenden' },
                { href: '#', label: 'Stiftung' },
            ],
            [
                { href: '#', label: 'Aufgaben/Bereiche' },
                { href: '#', label: 'Pflege' },
                { href: '#', label: 'Wohnen' },
                { href: '#', label: 'Arbeiten & Mitwirken' },
                { href: '#', label: 'Spenden' },
                { href: '#', label: 'Stiftung' },
            ],
        ]}
        newsTitle="Newsletter"
        newsText={`Bleiben Sie immer aktuell, Softwareneuerungen, Informationen aus dem Unternehmen usw. Abbonieren Sie kostenfrei unseren Newsletter, einfach nur <a href="#">E-Mail Adresse</a> hinterlassen und von immer aktuellen Nachrichten profitieren.`}
        // newsForm={
        //     <CompactForm
        //         isInverted
        //         placeholder="Geben Sie Ihre E-Mail Adresse an"
        //         buttonIcon={<ArrowRight />}
        //         onSubmit={console.log}
        //         onClick={console.log}
        //         onBlur={console.log}
        //     />
        // }
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
