import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import DynamicForm from '../components/sections/DynamicForm';

export default {
    title: 'Sections / DynamicForm',
    component: DynamicForm,
} as Meta;

export const Default: Story = () => (
    <DynamicForm
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
            Upload: {
                type: 'Upload',
                isRequired: true,
                addBtnLabel: 'Datei/en auswählen',
                removeBtnLabel: 'Auswahl löschen',
                acceptedFormats: 'image/png, image/jpg',
            },
        }}
        onSubmit={async (values) => {
            console.log(values);
            return;
        }}
    />
);

export const WithBackground: Story = () => (
    <DynamicForm
        bgMode="full"
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
            Upload: {
                type: 'Upload',
                isRequired: true,
                addBtnLabel: 'Datei/en auswählen',
                removeBtnLabel: 'Auswahl löschen',
                acceptedFormats: 'image/png, image/jpg',
            },
        }}
        onSubmit={async (values) => {
            console.log(values);
            return;
        }}
    />
);

export const Inverted: Story = () => (
    <DynamicForm
        bgMode="inverted"
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
            Upload: {
                type: 'Upload',
                isRequired: true,
                addBtnLabel: 'Datei/en auswählen',
                removeBtnLabel: 'Auswahl löschen',
                acceptedFormats: 'image/png, image/jpg',
            },
        }}
        onSubmit={async (values) => {
            console.log(values);
            return;
        }}
    />
);

export const WithCustomErrorMessages: Story = () => (
    <DynamicForm
        fields={{
            Nachname: {
                type: 'Field',
                placeholder: 'Nachname..',
                isRequired: true,
                info: 'Nachname eingeben',
                icon: { src: 'http://placehold.it/25' },
                requiredErrorMsg: 'Bitte geben Sie Ihren Nachnamen an',
            },
            Nachricht: {
                type: 'Area',
                placeholder: 'Nachricht eingeben..',
                info: 'Nachricht eingeben',
                isRequired: true,
                requiredErrorMsg: 'Bitte hinterlassen Sie eine Nachricht',
            },
            Email: {
                type: 'Field',
                placeholder: 'Email eingeben..',
                info: 'Email eingeben',
                isRequired: true,
                inputType: 'email',
                requiredErrorMsg: 'Bitte geben Sie eine valide E-Mail an',
            },
            Reisezeitraum: {
                type: 'Datepicker',
                isRequired: true,
                info: 'Reisezeitraum eingeben',
                placeholder: 'Reisezeitraum wählen..',
                icon: { src: 'http://placehold.it/25' },
                singleDateError: 'Bitte geben Sie ein Datum an',
                mutliDateError: 'Bitte geben Sie ein Start- und Enddatum an',
            },
            Leistungen: {
                type: 'FieldGroup',
                groupType: 'Checkbox',
                isRequired: true,
                fields: [
                    { text: 'mit Bad' },
                    { text: 'mit Küche', initialChecked: true },
                ],
                requiredErrorMsg: 'Bitte treffen Sie mindestens eine Auswahl',
            },
            Personen: {
                type: 'FieldGroup',
                groupType: 'Radio',
                isRequired: true,
                fields: [{ text: '1' }, { text: '2', initialChecked: true }],
                requiredErrorMsg: 'Bitte wählen Sie eine der Optionen',
            },
            Alter: {
                type: 'Field',
                placeholder: 'Alter eingeben',
                info: 'Bitte geben Sie Ihr Alter an',
                inputType: 'number',
                requiredErrorMsg: 'Bitte geben Sie ein Alter an',
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
                requiredErrorMsg: 'Bitte wählen Sie ein Land',
            },
            Upload: {
                type: 'Upload',
                isRequired: true,
                addBtnLabel: 'Datei/en auswählen',
                removeBtnLabel: 'Auswahl löschen',
                requiredErrorMsg: 'Bitte wählen Sie mindestens eine Datei',
                acceptedFormats: 'image/png, image/jpg',
            },
        }}
        onSubmit={async (values) => {
            console.log(values);
            return;
        }}
    />
);

export const CustomValidation: Story = () => (
    <DynamicForm
        fields={{
            Nachname: {
                type: 'Field',
                placeholder: 'Nachname..',
                isRequired: true,
                info: 'Nachname eingeben',
                icon: { src: 'http://placehold.it/25' },
                validate: async (value, config) => {
                    let error = '';
                    if (!value && config.isRequired)
                        error = 'Something is missing!';
                    return error;
                },
            },
            Nachricht: {
                type: 'Area',
                placeholder: 'Nachricht eingeben..',
                info: 'Nachricht eingeben',
                isRequired: true,
                validate: async (value, config) => {
                    let error = '';
                    if (!value && config.isRequired)
                        error = 'Something is missing!';
                    return error;
                },
            },
            Email: {
                type: 'Field',
                placeholder: 'Email eingeben..',
                info: 'Email eingeben',
                isRequired: true,
                inputType: 'email',
                validate: async (value, config) => {
                    let error = '';
                    if (!value && config.isRequired) {
                        error = 'Value is missing!';
                        return error;
                    }

                    switch (config.inputType) {
                        case 'email': {
                            if (
                                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
                                    value
                                )
                            ) {
                                error = 'Invalid email!!!!';
                            }
                        }
                    }
                    return error;
                },
            },
            Reisezeitraum: {
                type: 'Datepicker',
                isRequired: true,
                info: 'Reisezeitraum eingeben',
                placeholder: 'Reisezeitraum wählen..',
                icon: { src: 'http://placehold.it/25' },
                validate: async (value, config) => {
                    let error = '';
                    if (config.isRequired && (!value?.[0] || !value?.[1]))
                        error = 'Invalid or missing date!';
                    return error;
                },
            },
            Leistungen: {
                type: 'FieldGroup',
                groupType: 'Checkbox',
                isRequired: true,
                fields: [
                    { text: 'mit Bad' },
                    { text: 'mit Küche', initialChecked: true },
                ],
                validate: async (value, config) => {
                    let error = '';
                    const values = value as string[];
                    if (config.isRequired && (!value || values?.length < 1))
                        error = 'Select a item!';
                    return error;
                },
            },
            Personen: {
                type: 'FieldGroup',
                groupType: 'Radio',
                isRequired: true,
                fields: [{ text: '1' }, { text: '2', initialChecked: true }],
                validate: async (value, config) => {
                    let error = '';
                    if (config.isRequired && !value) error = 'Select a item!';
                    return error;
                },
            },
            Alter: {
                type: 'Field',
                placeholder: 'Alter eingeben',
                info: 'Bitte geben Sie Ihr Alter an',
                inputType: 'number',
                validate: async (value, config) => {
                    let error = '';
                    if (!value && config.isRequired)
                        error = 'Something is missing!';
                    return error;
                },
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
                validate: async (value, config) => {
                    let error = '';
                    if (!value && config.isRequired)
                        error = 'Selection is missing!';
                    return error;
                },
            },
            Upload: {
                type: 'Upload',
                isRequired: true,
                addBtnLabel: 'Datei/en auswählen',
                removeBtnLabel: 'Auswahl löschen',
                validate: async (value, config) => {
                    let error = '';
                    if (config.isRequired && (!value || value?.length < 1))
                        error = 'Select files please!';
                    return error;
                },
                acceptedFormats: 'image/png, image/jpg',
            },
        }}
        onSubmit={async (values) => {
            console.log(values);
            return;
        }}
    />
);
