import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import Form from 'components/sections/Form';
import Button from 'components/buttons/Button';

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
        submitAction={({ isInverted, additionalProps }) => (
            <Button.View isInverted={isInverted} {...additionalProps}>
                <Button.Label>Senden</Button.Label>
            </Button.View>
        )}
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
        submitAction={({ isInverted, additionalProps }) => (
            <Button.View isInverted={isInverted} {...additionalProps}>
                <Button.Label>Senden</Button.Label>
            </Button.View>
        )}
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
        submitAction={({ isInverted, additionalProps }) => (
            <Button.View isInverted={isInverted} {...additionalProps}>
                <Button.Label>Senden</Button.Label>
            </Button.View>
        )}
        isInverted
    />
);
