import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import DynamicForm from '../components/sections/DynamicForm';

export default {
    title: 'Sections / DynamicForm',
    component: DynamicForm,
} as Meta;

export const Default: Story = () => (
    <DynamicForm
        action="https://httpbin.org/post"
        recipientId="122345"
        successPageUrl="/home"
        fields={{
            Nachname: {
                type: 'Field',
                placeholder: 'Nachname..',
                isRequired: true,
                info: 'Nachname eingeben',
                icon: { src: 'http://placehold.it/25' },
            },
            Nachricht: {
                type: 'Area',
                placeholder: 'Nachricht eingeben..',
                info: 'Nachricht eingeben',
                isRequired: true,
            },
            Email: {
                type: 'Field',
                placeholder: 'Email eingeben..',
                info: 'Email eingeben',
                isRequired: true,
                inputType: 'email',
            },
            Reisezeitraum: {
                type: 'Datepicker',
                isRequired: true,
                info: 'Reisezeitraum eingeben',
                placeholder: 'Reisezeitraum wählen..',
                icon: { src: 'http://placehold.it/25' },
            },
            Leistungen: {
                type: 'FieldGroup',
                groupType: 'Checkbox',
                isRequired: true,
                fields: [
                    { text: 'mit Bad' },
                    { text: 'mit Küche', initialChecked: true },
                ],
            },
            Personen: {
                type: 'FieldGroup',
                groupType: 'Radio',
                isRequired: true,
                fields: [{ text: '1' }, { text: '2', initialChecked: true }],
            },
            Alter: {
                type: 'Field',
                placeholder: 'Alter eingeben',
                info: 'Bitte geben Sie Ihr Alter an',
                inputType: 'number',
            },
            Land: {
                type: 'Select',
                // initalValue: 'Germany',
                isRequired: true,
                dropdownItems: [
                    { label: 'Schweiz', value: 'Switzerland' },
                    { label: 'Deutschland', value: 'Germany' },
                ],
                icon: { src: 'http://placehold.it/25' },
            },
        }}
    />
);
