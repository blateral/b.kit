import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import NewsletterForm, {
    NewsletterFormComponent,
} from 'components/sections/NewsletterForm';

export default {
    title: 'Sections/NewsletterForm ',
    component: NewsletterFormComponent,
    parameters: {
        status: {
            type: ['preview'],
        },
    },
} as Meta;

export const Default: Story = () => (
    <NewsletterForm
        fields={{
            VORNAME: {
                inputType: 'text',
                label: 'Firstname',
                placeholder: 'Vorname',
                isRequired: true,
                errorMsg: 'Enter your firstname!',
            },
            NACHNAHME: {
                inputType: 'text',
                label: 'Lastname',
                placeholder: 'Nachname',
                errorMsg: 'Enter your lastname!',
            },
            EMAIL: {
                inputType: 'email',
                label: 'E-Mail',
                placeholder: 'E-Mail',
                isRequired: true,
                errorMsg: 'Enter a valid mail address!',
            },
        }}
        onSubmit={async (values, el) => console.log(values, el)}
    />
);

export const WithFormAction: Story = () => (
    <NewsletterForm
        action="google.com"
        method="post"
        fields={{
            VORNAME: {
                inputType: 'text',
                label: 'Firstname',
                placeholder: 'Vorname',
                isRequired: true,
                errorMsg: 'Enter your firstname!',
            },
            NACHNAHME: {
                inputType: 'text',
                label: 'Lastname',
                placeholder: 'Nachname',
                errorMsg: 'Enter your lastname!',
            },
            EMAIL: {
                inputType: 'email',
                label: 'E-Mail',
                placeholder: 'E-Mail',
                isRequired: true,
                errorMsg: 'Enter a valid mail address!',
            },
        }}
        onSubmit={async (values, el) => console.log(values, el)}
    />
);

export const CustomField: Story = () => (
    <NewsletterForm
        fields={{
            VORNAME: {
                inputType: 'text',
                label: 'Firstname',
                placeholder: 'Vorname',
            },
            NACHNAHME: {
                inputType: 'text',
                label: 'Lastname',
                placeholder: 'Nachname',
            },
            EMAIL: {
                inputType: 'email',
                label: 'E-Mail',
                placeholder: 'E-Mail',
            },
        }}
        customField={({
            key,
            value,
            error,
            handleChange,
            handleBlur,
            isTouched,
        }) => (
            <React.Fragment key={key}>
                <input
                    name={key}
                    value={value as string}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {error && isTouched && <span>{error}</span>}
            </React.Fragment>
        )}
        onSubmit={async (values, el) => console.log(values, el)}
    />
);

export const CustomValidation: Story = () => (
    <NewsletterForm
        fields={{
            VORNAME: {
                inputType: 'text',
                label: 'Firstname',
                placeholder: 'Vorname',
                validate: async (key, value) => {
                    if (!value) return 'ERRRORRR!';
                    else return '';
                },
            },
            NACHNAHME: {
                inputType: 'text',
                label: 'Lastname',
                placeholder: 'Nachname',
            },
            EMAIL: {
                inputType: 'email',
                label: 'E-Mail',
                placeholder: 'E-Mail',
            },
        }}
        onSubmit={async (values, el) => console.log(values, el)}
    />
);

export const CustomSubmit: Story = () => (
    <NewsletterForm
        fields={{
            VORNAME: {
                inputType: 'text',
                label: 'Firstname',
                placeholder: 'Vorname',
            },
            NACHNAHME: {
                inputType: 'text',
                label: 'Lastname',
                placeholder: 'Nachname',
            },
            EMAIL: {
                inputType: 'email',
                label: 'E-Mail',
                placeholder: 'E-Mail',
            },
        }}
        onSubmit={async (values, el) => console.log(values, el)}
        submitAction={({ isDisabled, handleSubmit }) => (
            <button onClick={handleSubmit} disabled={isDisabled}>
                submit
            </button>
        )}
    />
);
