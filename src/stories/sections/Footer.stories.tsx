import * as React from 'react';
import { Meta, Story } from '@storybook/react';

import Footer, { FooterComponent } from 'components/sections/Footer';

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
    component: FooterComponent,
    parameters: {
        status: {
            type: 'stable',
        },
    },
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
            { href: '#', label: 'Lorem' },
            { href: '#', label: 'Ipsum' },
            { href: '#', label: 'Dolor', isActive: true },
            { href: '#', label: 'Sit Amet' },
            { href: '#', label: 'Consetetur' },
            { href: '#', label: 'Elitr' },
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
            { href: '#', label: 'Lorem' },
            { href: '#', label: 'Ipsum' },
            { href: '#', label: 'Dolor', isActive: true },
            { href: '#', label: 'Sit Amet' },
            { href: '#', label: 'Consetetur' },
            { href: '#', label: 'Elitr' },
            { href: '#', label: 'Lorem' },
            { href: '#', label: 'Ipsum' },
            { href: '#', label: 'Dolor' },
            { href: '#', label: 'Sit Amet' },
            { href: '#', label: 'Consetetur' },
            { href: '#', label: 'Elitr' },
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
            { href: '#', label: 'Lorem' },
            { href: '#', label: 'Ipsum' },
            { href: '#', label: 'Dolor', isActive: true },
            { href: '#', label: 'Sit Amet' },
            { href: '#', label: 'Consetetur' },
            { href: '#', label: 'Elitr' },
            { href: '#', label: 'Lorem' },
            { href: '#', label: 'Ipsum' },
            { href: '#', label: 'Dolor' },
        ]}
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
            { href: '#', label: 'Lorem' },
            { href: '#', label: 'Ipsum' },
            { href: '#', label: 'Dolor', isActive: true },
            { href: '#', label: 'Sit Amet' },
            { href: '#', label: 'Consetetur' },
            { href: '#', label: 'Elitr' },
            { href: '#', label: 'Lorem' },
            { href: '#', label: 'Ipsum' },
            { href: '#', label: 'Dolor' },
        ]}
        socials={[
            { href: '#', icon: <Facebook /> },
            { href: '#', icon: <LinkedIn /> },
            { href: '#', icon: <Xing /> },
            { href: '#', icon: <Twitter /> },
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
            { href: '#', label: 'Lorem' },
            { href: '#', label: 'Ipsum' },
            { href: '#', label: 'Dolor', isActive: true },
            { href: '#', label: 'Sit Amet' },
            { href: '#', label: 'Consetetur' },
            { href: '#', label: 'Elitr' },
            { href: '#', label: 'Lorem' },
            { href: '#', label: 'Ipsum' },
            { href: '#', label: 'Dolor' },
            { href: '#', label: 'Sit Amet' },
            { href: '#', label: 'Consetetur' },
            { href: '#', label: 'Elitr' },
        ]}
        socials={[
            { href: '#', icon: <Facebook /> },
            { href: '#', icon: <LinkedIn /> },
            { href: '#', icon: <Xing /> },
            { href: '#', icon: <Twitter /> },
        ]}
        newsTitle="Newsletter"
        newsText={`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. <a href="#">E-Mail Adresse</a>  no sea takimata sanctus est Lorem ipsum dolor sit amet.`}
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
            { href: '#', label: 'Lorem' },
            { href: '#', label: 'Ipsum' },
            { href: '#', label: 'Dolor', isActive: true },
            { href: '#', label: 'Sit Amet' },
            { href: '#', label: 'Consetetur' },
            { href: '#', label: 'Elitr' },
            { href: '#', label: 'Lorem' },
            { href: '#', label: 'Ipsum' },
            { href: '#', label: 'Dolor' },
            { href: '#', label: 'Sit Amet' },
            { href: '#', label: 'Consetetur' },
            { href: '#', label: 'Elitr' },
        ]}
        newsTitle="Newsletter"
        newsText={`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. <a href="#">E-Mail Adresse</a>  no sea takimata sanctus est Lorem ipsum dolor sit amet.`}
        newsForm={(isInverted) => (
            <CompactForm
                mode={isInverted ? 'onDark' : 'default'}
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
            { href: '#', label: 'Lorem' },
            { href: '#', label: 'Ipsum' },
            { href: '#', label: 'Dolor', isActive: true },
            { href: '#', label: 'Sit Amet' },
            { href: '#', label: 'Consetetur' },
            { href: '#', label: 'Elitr' },
            { href: '#', label: 'Lorem' },
            { href: '#', label: 'Ipsum' },
            { href: '#', label: 'Dolor' },
            { href: '#', label: 'Sit Amet' },
            { href: '#', label: 'Consetetur' },
            { href: '#', label: 'Elitr' },
        ]}
        newsTitle="Newsletter"
        newsText={`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. <a href="#">E-Mail Adresse</a>  no sea takimata sanctus est Lorem ipsum dolor sit amet.`}
        newsForm={(isInverted) => (
            <CompactForm
                mode={isInverted ? 'onDark' : 'default'}
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
            { href: '#', label: 'Lorem' },
            { href: '#', label: 'Ipsum' },
            { href: '#', label: 'Dolor', isActive: true },
            { href: '#', label: 'Sit Amet' },
            { href: '#', label: 'Consetetur' },
            { href: '#', label: 'Elitr' },
            { href: '#', label: 'Lorem' },
            { href: '#', label: 'Ipsum' },
            { href: '#', label: 'Dolor' },
            { href: '#', label: 'Sit Amet' },
            { href: '#', label: 'Consetetur' },
            { href: '#', label: 'Elitr' },
        ]}
        newsTitle="Newsletter"
        newsText={`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. <a href="#">E-Mail Adresse</a>  no sea takimata sanctus est Lorem ipsum dolor sit amet.`}
        newsForm={(isInverted) => (
            <CompactForm
                mode={isInverted ? 'onDark' : 'default'}
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
            { href: '#', label: 'Lorem' },
            { href: '#', label: 'Ipsum' },
            { href: '#', label: 'Dolor', isActive: true },
            { href: '#', label: 'Sit Amet' },
            { href: '#', label: 'Consetetur' },
            { href: '#', label: 'Elitr' },
            { href: '#', label: 'Lorem' },
            { href: '#', label: 'Ipsum' },
            { href: '#', label: 'Dolor' },
            { href: '#', label: 'Sit Amet' },
            { href: '#', label: 'Consetetur' },
            { href: '#', label: 'Elitr' },
        ]}
        newsTitle="Newsletter"
        newsText={`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. <a href="#">E-Mail Adresse</a>  no sea takimata sanctus est Lorem ipsum dolor sit amet.`}
        newsForm={(isInverted) => (
            <CompactForm
                mode={isInverted ? 'onDark' : 'default'}
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
