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
        onSubmit={console.log}
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
        onSubmit={console.log}
    />
);

export const WithFullBackground: Story = () => (
    <Form
        bgMode="full"
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
        onSubmit={console.log}
    />
);

export const WithHalfLeftBackground: Story = () => (
    <Form
        bgMode="half-left"
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
        onSubmit={console.log}
    />
);

export const WithHalfRightBackground: Story = () => (
    <Form
        bgMode="half-right"
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
        onSubmit={console.log}
    />
);

export const WithLargerLeftBackground: Story = () => (
    <Form
        bgMode="larger-left"
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
        onSubmit={console.log}
    />
);

export const WithLargerRightBackground: Story = () => (
    <Form
        bgMode="larger-right"
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
        onSubmit={console.log}
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
        onSubmit={console.log}
    />
);
