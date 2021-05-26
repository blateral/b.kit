import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import Form from 'components/sections/Form';

export default {
    title: 'Sections/Form',
    component: Form,
} as Meta;

export const Default: Story = () => (
    <Form
        formFields={{
            name: {
                isRequired: true,
            },
            surname: {
                isRequired: true,
            },
            mail: {
                isRequired: true,
            },
            phone: {
                isRequired: true,
                infoMessage: '*Help extra info line option',
            },
            area: {},
        }}
        checkbox={{
            label: 'Ich aktzeptiere die Datenschutzbestimmungen',
        }}
    />
);

export const WithIntro: Story = () => (
    <Form
        title="Haus St. Franziskus – lorem ipsum dolor sit amet"
        superTitle="Haus St. Franziskus"
        formFields={{
            name: {
                isRequired: true,
            },
            surname: {
                isRequired: true,
            },
            mail: {
                isRequired: true,
            },
            phone: {
                isRequired: true,
                infoMessage: '*Help extra info line option',
            },
            area: {},
        }}
        checkbox={{
            label: 'Ich aktzeptiere die Datenschutzbestimmungen',
        }}
    />
);

export const IsInverted: Story = () => (
    <Form
        title="Haus St. Franziskus – lorem ipsum dolor sit amet"
        superTitle="Haus St. Franziskus"
        formFields={{
            name: {
                isRequired: true,
            },
            surname: {
                isRequired: true,
            },
            mail: {
                isRequired: true,
            },
            phone: {
                isRequired: true,
                infoMessage: '*Help extra info line option',
            },
            area: {},
        }}
        checkbox={{
            label: 'Ich aktzeptiere die Datenschutzbestimmungen',
        }}
        isInverted
    />
);
