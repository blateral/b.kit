import React from 'react';
import { Meta, Story } from '@storybook/react';
import InfoList from 'components/blocks/InfoList';
import Clock from 'components/base/icons/Clock';
import Money from 'components/base/icons/Money';
import Place from 'components/base/icons/Place';
import Mail from 'components/base/icons/Mail';
import Phone from 'components/base/icons/Phone';
import Computer from 'components/base/icons/Computer';
import Person from 'components/base/icons/Person';
import Category from 'components/base/icons/Category';

export default {
    title: 'Blocks / InfoList',
    component: InfoList,
    parameters: {
        status: {
            type: 'preview',
        },
    },
} as Meta;

export const Default: Story = () => (
    <InfoList
        items={[
            {
                title: 'Öffnungszeiten',
                items: [
                    {
                        icon: () => <Clock />,
                        text: `Mo - Fr 10.00 Uhr - 18.00 Uhr <br />
                    Sa 08.00 Uhr - 12.00 Uhr <br />
                    So geschlossen`,
                    },
                ],
            },
            {
                title: 'Preisinformationen',
                items: [
                    {
                        icon: () => <Money />,
                        text: `Erwachsene 12,00 € pro Monat <br />
                    Kinder 6,00 € pro Monat`,
                    },
                ],
            },
            {
                title: 'Standort',
                items: [
                    {
                        icon: () => <Place />,
                        text: `Altes Rauthaus, Münsterstraße 23, 88662 <br /> Überlingen`,
                    },
                    {
                        icon: () => <Mail />,
                        text: '<a href="mailto:max.mustermann@gmail.com">max.mustermann@gmail.com</a>',
                    },
                    {
                        icon: () => <Phone />,
                        text: '07551 / 888666',
                    },
                    {
                        icon: () => <Computer />,
                        text: 'www.topevents.com',
                    },
                ],
            },
            {
                items: [
                    {
                        icon: () => <Person />,
                        text: `Max Mustermann`,
                    },
                    {
                        icon: () => <Category />,
                        text: 'Vorstandsvorsitzender',
                    },
                    {
                        icon: () => <Place />,
                        text: `Altes Rauthaus, Münsterstraße 23, 88662 <br /> Überlingen`,
                    },
                    {
                        icon: () => <Phone />,
                        text: '07551 / 888666',
                    },
                    {
                        icon: () => <Mail />,
                        text: '<a href="mailto:max.mustermann@gmail.com">max.mustermann@gmail.com</a>',
                    },
                ],
            },
        ]}
    />
);

export const Inverted: Story = () => (
    <InfoList
        isInverted
        items={[
            {
                title: 'Öffnungszeiten',
                items: [
                    {
                        icon: () => <Clock />,
                        text: `Mo - Fr 10.00 Uhr - 18.00 Uhr <br />
                    Sa 08.00 Uhr - 12.00 Uhr <br />
                    So geschlossen`,
                    },
                ],
            },
            {
                title: 'Preisinformationen',
                items: [
                    {
                        icon: () => <Money />,
                        text: `Erwachsene 12,00 € pro Monat <br />
                    Kinder 6,00 € pro Monat`,
                    },
                ],
            },
            {
                title: 'Standort',
                items: [
                    {
                        icon: () => <Place />,
                        text: `Altes Rauthaus, Münsterstraße 23, 88662 <br /> Überlingen`,
                    },
                    {
                        icon: () => <Mail />,
                        text: '<a href="mailto:max.mustermann@gmail.com">max.mustermann@gmail.com</a>',
                    },
                    {
                        icon: () => <Phone />,
                        text: '07551 / 888666',
                    },
                    {
                        icon: () => <Computer />,
                        text: 'www.topevents.com',
                    },
                ],
            },
            {
                items: [
                    {
                        icon: () => <Person />,
                        text: `Max Mustermann`,
                    },
                    {
                        icon: () => <Category />,
                        text: 'Vorstandsvorsitzender',
                    },
                    {
                        icon: () => <Place />,
                        text: `Altes Rauthaus, Münsterstraße 23, 88662 <br /> Überlingen`,
                    },
                    {
                        icon: () => <Phone />,
                        text: '07551 / 888666',
                    },
                    {
                        icon: () => <Mail />,
                        text: '<a href="mailto:max.mustermann@gmail.com">max.mustermann@gmail.com</a>',
                    },
                ],
            },
        ]}
    />
);

Inverted.parameters = {
    backgrounds: {
        default: 'inverted',
        values: [{ name: 'inverted', value: 'black' }],
    },
};
