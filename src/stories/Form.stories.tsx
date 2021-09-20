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
            label: `Ich aktzeptiere die <a href="#0">Datenschutzbestimmungen</a>`,
        }}
        submitAction={({ isInverted, isDisabled, additionalProps }) => (
            <Button.View
                isInverted={isInverted}
                isDisabled={isDisabled}
                {...additionalProps}
            >
                <Button.Label>Senden</Button.Label>
            </Button.View>
        )}
        onSubmit={console.log}
    />
);

export const WithLessFields: Story = () => (
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
        }}
        checkbox={{
            label: `Ich aktzeptiere die <a href="#0">Datenschutzbestimmungen</a>`,
        }}
        submitAction={({ isInverted, isDisabled, additionalProps }) => (
            <Button.View
                isInverted={isInverted}
                isDisabled={isDisabled}
                {...additionalProps}
            >
                <Button.Label>Senden</Button.Label>
            </Button.View>
        )}
        onSubmit={console.log}
    />
);

export const WithValidation: Story = () => (
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
            label: `Ich aktzeptiere die <a href="#0">Datenschutzbestimmungen</a>`,
        }}
        submitAction={({ isInverted, isDisabled, additionalProps }) => (
            <Button.View
                isInverted={isInverted}
                isDisabled={isDisabled}
                {...additionalProps}
            >
                <Button.Label>Senden</Button.Label>
            </Button.View>
        )}
        onSubmit={console.log}
        validation={(values, errors) => {
            if ((values.name?.length ? values.name?.length : 0) > 5)
                errors.name = 'Too long!';
            return errors;
        }}
    />
);

export const WithYupValidation: Story = () => (
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
            label: `Ich aktzeptiere die <a href="#0">Datenschutzbestimmungen</a>`,
        }}
        submitAction={({ isInverted, isDisabled, additionalProps }) => (
            <Button.View
                isInverted={isInverted}
                isDisabled={isDisabled}
                {...additionalProps}
            >
                <Button.Label>Senden</Button.Label>
            </Button.View>
        )}
        onSubmit={console.log}
    />
);

export const WithBackground: Story = () => (
    <Form
        bgMode="full"
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
            label: `Ich aktzeptiere die <a href="#0">Datenschutzbestimmungen</a>`,
        }}
        submitAction={({ isInverted, isDisabled, additionalProps }) => (
            <Button.View
                isInverted={isInverted}
                isDisabled={isDisabled}
                {...additionalProps}
            >
                <Button.Label>Senden</Button.Label>
            </Button.View>
        )}
        onSubmit={console.log}
    />
);

export const IsInverted: Story = () => (
    <Form
        formFields={{
            name: { isRequired: true },
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
            label: `Ich aktzeptiere die <a href="#0">Datenschutzbestimmungen</a>`,
        }}
        submitAction={({ isInverted, isDisabled, additionalProps }) => (
            <Button.View
                isInverted={isInverted}
                isDisabled={isDisabled}
                {...additionalProps}
            >
                <Button.Label>Senden</Button.Label>
            </Button.View>
        )}
        bgMode="inverted"
        onSubmit={console.log}
    />
);
