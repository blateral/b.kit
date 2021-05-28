import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import Form from 'components/sections/Form';
import Button from 'components/buttons/Button';
import * as Yup from 'yup';

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
            label: `Ich aktzeptiere die <a href="#0">Datenschutzbestimmungen</a>`,
        }}
        submitAction={({ isInverted, additionalProps }) => (
            <Button.View isInverted={isInverted} {...additionalProps}>
                <Button.Label>Senden</Button.Label>
            </Button.View>
        )}
        onSubmit={console.log}
    />
);

export const WithValidation: Story = () => (
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
            label: `Ich aktzeptiere die <a href="#0">Datenschutzbestimmungen</a>`,
        }}
        submitAction={({ isInverted, additionalProps }) => (
            <Button.View isInverted={isInverted} {...additionalProps}>
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
            label: `Ich aktzeptiere die <a href="#0">Datenschutzbestimmungen</a>`,
        }}
        submitAction={({ isInverted, additionalProps }) => (
            <Button.View isInverted={isInverted} {...additionalProps}>
                <Button.Label>Senden</Button.Label>
            </Button.View>
        )}
        onSubmit={console.log}
        yupValidationSchema={Yup.object({
            name: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
            surname: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Required'),
            mail: Yup.string()
                .email('Invalid email address')
                .required('Required'),
        })}
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
            label: `Ich aktzeptiere die <a href="#0">Datenschutzbestimmungen</a>`,
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
            label: `Ich aktzeptiere die <a href="#0">Datenschutzbestimmungen</a>`,
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
