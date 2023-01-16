/* eslint-disable react/display-name */
import React from 'react';
import { Meta, Story } from '@storybook/react';
import DynamicForm, {
    DynamicFormComponent,
} from 'components/sections/form/DynamicForm';
import * as Icons from 'icons';

export default {
    title: 'Sections / DynamicForm',
    component: DynamicFormComponent,
    parameters: {
        status: {
            type: ['preview'],
        },
    },
} as Meta;

export const Default: Story = () => (
    <DynamicForm
        fields={{
            Nachname: {
                type: 'Field',
                placeholder: 'Nachname..',
                isRequired: true,
                info: 'Nachname eingeben',
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
                customIcon: ({ singleSelect }) => {
                    return singleSelect ? (
                        <Icons.CalendarToday />
                    ) : (
                        <Icons.DateRange />
                    );
                },
                type: 'Datepicker',
                isRequired: true,
                info: 'Reisezeitraum eingeben',
                placeholder: 'Reisezeitraum wählen..',
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
            Standort: {
                type: 'Location',
                placeholder: 'Ort eingeben',
                info: 'Bitte geben Sie einen Ort an',
                isRequired: true,
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
                placeholder: 'Select',
                type: 'Select',
                initialOption: 'Deutschland',
                isRequired: true,
                dropdownItems: [
                    { label: 'Schweiz', value: { country: 'Switzerland' } },
                    { label: 'Deutschland', value: { country: 'Switzerland' } },
                ],
            },
            Upload: {
                type: 'Upload',
                customUploadIcon: () => <Icons.UploadFile />,
                customDeleteIcon: () => <Icons.DeleteForever />,
                isRequired: true,
                addBtnLabel: 'Datei/en auswählen',
                removeBtnLabel: 'Auswahl löschen',
                acceptedFormats: 'image/png, image/jpg',
            },
        }}
        onSubmit={async (values) => {
            console.log(values);
            return {
                isError: false,
                message: 'Mail has been sent!',
            };
        }}
    />
);

export const WithCustomDatepickerButtons: Story = () => (
    <DynamicForm
        fields={{
            Nachname: {
                type: 'Field',
                placeholder: 'Nachname..',
                isRequired: true,
                info: 'Nachname eingeben',
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
                customIcon: ({ singleSelect }) => {
                    return singleSelect ? (
                        <Icons.CalendarToday />
                    ) : (
                        <Icons.DateRange />
                    );
                },
                type: 'Datepicker',
                isRequired: true,
                info: 'Reisezeitraum eingeben',
                placeholder: 'Reisezeitraum wählen..',
                submitAction: (clickHandler) => (
                    <button onClick={clickHandler}>auswählen</button>
                ),
                deleteAction: (clickHandler) => (
                    <button onClick={clickHandler}>löschen</button>
                ),
                nextCtrlUrl: '/images/Arrow-Right.svg',
                prevCtrlUrl: '/images/Arrow-Left.svg',
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
                placeholder: 'Select',
                type: 'Select',
                initialOption: 'Deutschland',
                isRequired: true,
                dropdownItems: [
                    { label: 'Schweiz', value: { country: 'Switzerland' } },
                    { label: 'Deutschland', value: { country: 'Switzerland' } },
                ],
            },
            Upload: {
                type: 'Upload',
                customUploadIcon: () => <Icons.UploadFile />,
                customDeleteIcon: () => <Icons.DeleteForever />,
                isRequired: true,
                addBtnLabel: 'Datei/en auswählen',
                removeBtnLabel: 'Auswahl löschen',
                acceptedFormats: 'image/png, image/jpg',
            },
        }}
        onSubmit={async (values) => {
            console.log(values);
            return {
                isError: false,
                message: 'Mail has been sent!',
            };
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
                customIcon: ({ singleSelect }) => {
                    return singleSelect ? (
                        <Icons.CalendarToday />
                    ) : (
                        <Icons.DateRange />
                    );
                },
                type: 'Datepicker',
                isRequired: true,
                info: 'Reisezeitraum eingeben',
                placeholder: 'Reisezeitraum wählen..',
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
                placeholder: 'Select',
                type: 'Select',
                initialOption: 'Deutschland',
                isRequired: true,
                dropdownItems: [
                    { label: 'Schweiz', value: { country: 'Switzerland' } },
                    { label: 'Deutschland', value: { country: 'Switzerland' } },
                ],
            },
            Upload: {
                type: 'Upload',
                customUploadIcon: () => <Icons.UploadFile />,
                customDeleteIcon: () => <Icons.DeleteForever />,
                isRequired: true,
                addBtnLabel: 'Datei/en auswählen',
                removeBtnLabel: 'Auswahl löschen',
                acceptedFormats: 'image/png, image/jpg',
            },
        }}
        onSubmit={async (values) => {
            console.log(values);
            return {
                isError: false,
                message: 'Mail has been sent!',
            };
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
                customIcon: ({ singleSelect }) => {
                    return singleSelect ? (
                        <Icons.CalendarToday />
                    ) : (
                        <Icons.DateRange />
                    );
                },
                type: 'Datepicker',
                isRequired: true,
                info: 'Reisezeitraum eingeben',
                placeholder: 'Reisezeitraum wählen..',
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
                placeholder: 'Select',
                type: 'Select',
                initialOption: 'Deutschland',
                isRequired: true,
                dropdownItems: [
                    { label: 'Schweiz', value: { country: 'Switzerland' } },
                    { label: 'Deutschland', value: { country: 'Switzerland' } },
                ],
            },
            Upload: {
                type: 'Upload',
                customUploadIcon: () => <Icons.UploadFile />,
                customDeleteIcon: () => <Icons.DeleteForever />,
                isRequired: true,
                addBtnLabel: 'Datei/en auswählen',
                removeBtnLabel: 'Auswahl löschen',
                acceptedFormats: 'image/png, image/jpg',
            },
        }}
        onSubmit={async (values) => {
            console.log(values);
            return {
                isError: false,
                message: 'Mail has been sent!',
            };
        }}
    />
);

export const WithErrorResponse: Story = () => (
    <DynamicForm
        fields={{
            Nachname: {
                type: 'Field',
                placeholder: 'Nachname..',
                isRequired: true,
                info: 'Nachname eingeben',
            },
            // Nachricht: {
            //     type: 'Area',
            //     placeholder: 'Nachricht eingeben..',
            //     info: 'Nachricht eingeben',
            //     isRequired: true,
            // },
            // Email: {
            //     type: 'Field',
            //     placeholder: 'Email eingeben..',
            //     info: 'Email eingeben',
            //     isRequired: true,
            //     inputType: 'email',
            // },
            // Reisezeitraum: {
            //     customIcon: ({ singleSelect }) => {
            //         return singleSelect ? (
            //             <Icons.CalendarToday />
            //         ) : (
            //             <Icons.DateRange />
            //         );
            //     },
            //     type: 'Datepicker',
            //     isRequired: true,
            //     info: 'Reisezeitraum eingeben',
            //     placeholder: 'Reisezeitraum wählen..',
            // },
            // Leistungen: {
            //     type: 'FieldGroup',
            //     groupType: 'Checkbox',
            //     isRequired: true,
            //     fields: [
            //         { text: 'mit Bad' },
            //         { text: 'mit Küche', initialChecked: true },
            //     ],
            // },
            // Personen: {
            //     type: 'FieldGroup',
            //     groupType: 'Radio',
            //     isRequired: true,
            //     fields: [{ text: '1' }, { text: '2', initialChecked: true }],
            // },
            // Alter: {
            //     type: 'Field',
            //     placeholder: 'Alter eingeben',
            //     info: 'Bitte geben Sie Ihr Alter an',
            //     inputType: 'number',
            // },
            // Land: {
            //     placeholder: 'Select',
            //     type: 'Select',
            //     initialOption: 'Deutschland',
            //     isRequired: true,
            //     dropdownItems: [
            //         { label: 'Schweiz', value: { country: 'Switzerland' } },
            //         { label: 'Deutschland', value: { country: 'Switzerland' } },
            //     ],
            // },
            // Upload: {
            //     type: 'Upload',
            //     customUploadIcon: () => <Icons.UploadFile />,
            //     customDeleteIcon: () => <Icons.DeleteForever />,
            //     isRequired: true,
            //     addBtnLabel: 'Datei/en auswählen',
            //     removeBtnLabel: 'Auswahl löschen',
            //     acceptedFormats: 'image/png, image/jpg',
            // },
        }}
        onSubmit={async (values) => {
            console.log(values);
            return {
                isError: true,
                message: 'Cannot send mail data!',
            };
        }}
    />
);

export const CustomSubmitButton: Story = () => (
    <DynamicForm
        fields={{
            Nachname: {
                type: 'Field',
                placeholder: 'Nachname..',
                isRequired: true,
                info: 'Nachname eingeben',
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
                customIcon: ({ singleSelect }) => {
                    return singleSelect ? (
                        <Icons.CalendarToday />
                    ) : (
                        <Icons.DateRange />
                    );
                },
                type: 'Datepicker',
                isRequired: true,
                info: 'Reisezeitraum eingeben',
                placeholder: 'Reisezeitraum wählen..',
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
                placeholder: 'Select',
                type: 'Select',
                initialOption: 'Deutschland',
                isRequired: true,
                dropdownItems: [
                    { label: 'Schweiz', value: { country: 'Switzerland' } },
                    { label: 'Deutschland', value: { country: 'Switzerland' } },
                ],
            },
            Upload: {
                type: 'Upload',
                customUploadIcon: () => <Icons.UploadFile />,
                customDeleteIcon: () => <Icons.DeleteForever />,
                isRequired: true,
                addBtnLabel: 'Datei/en auswählen',
                removeBtnLabel: 'Auswahl löschen',
                acceptedFormats: 'image/png, image/jpg',
            },
        }}
        onSubmit={async (values) => {
            console.log(values);
            return {
                isError: false,
                message: 'Mail has been sent!',
            };
        }}
        submitAction={({ handleSubmit }) => (
            <button onClick={handleSubmit}>Submit</button>
        )}
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
                errorMsg: 'Bitte geben Sie Ihren Nachnamen an',
            },
            Nachricht: {
                type: 'Area',
                placeholder: 'Nachricht eingeben..',
                info: 'Nachricht eingeben',
                isRequired: true,
                errorMsg: 'Bitte hinterlassen Sie eine Nachricht',
            },
            Email: {
                type: 'Field',
                placeholder: 'Email eingeben..',
                info: 'Email eingeben',
                isRequired: true,
                inputType: 'email',
                errorMsg: 'Bitte geben Sie eine valide E-Mail an',
            },
            Reisezeitraum: {
                customIcon: ({ singleSelect }) => {
                    return singleSelect ? (
                        <Icons.CalendarToday />
                    ) : (
                        <Icons.DateRange />
                    );
                },
                type: 'Datepicker',
                isRequired: true,
                info: 'Reisezeitraum eingeben',
                placeholder: 'Reisezeitraum wählen..',
                singleDateError: 'Bitte geben Sie ein Datum an',
                multiDateError: 'Bitte geben Sie ein Start- und Enddatum an',
            },
            Leistungen: {
                type: 'FieldGroup',
                groupType: 'Checkbox',
                isRequired: true,
                fields: [
                    { text: 'mit Bad' },
                    { text: 'mit Küche', initialChecked: true },
                ],
                errorMsg: 'Bitte treffen Sie mindestens eine Auswahl',
            },
            Personen: {
                type: 'FieldGroup',
                groupType: 'Radio',
                isRequired: true,
                fields: [{ text: '1' }, { text: '2', initialChecked: true }],
                errorMsg: 'Bitte wählen Sie eine der Optionen',
            },
            Alter: {
                type: 'Field',
                placeholder: 'Alter eingeben',
                info: 'Bitte geben Sie Ihr Alter an',
                inputType: 'number',
                errorMsg: 'Bitte geben Sie ein Alter an',
            },
            Land: {
                placeholder: 'Select',
                type: 'Select',
                initialOption: 'Deutschland',
                isRequired: true,
                dropdownItems: [
                    { label: 'Schweiz', value: { country: 'Switzerland' } },
                    { label: 'Deutschland', value: { country: 'Switzerland' } },
                ],
                errorMsg: 'Bitte wählen Sie ein Land',
            },
            Upload: {
                type: 'Upload',
                customUploadIcon: () => <Icons.UploadFile />,
                customDeleteIcon: () => <Icons.DeleteForever />,
                isRequired: true,
                addBtnLabel: 'Datei/en auswählen',
                removeBtnLabel: 'Auswahl löschen',
                errorMsg: 'Bitte wählen Sie mindestens eine Datei',
                acceptedFormats: 'image/png, image/jpg',
            },
        }}
        onSubmit={async (values) => {
            console.log(values);
            return {
                isError: false,
                message: 'Mail has been sent!',
            };
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
                validate: async (key, value, config) => {
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
                validate: async (key, value, config) => {
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
                validate: async (key, value, config) => {
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
                customIcon: ({ singleSelect }) => {
                    return singleSelect ? (
                        <Icons.CalendarToday />
                    ) : (
                        <Icons.DateRange />
                    );
                },
                type: 'Datepicker',
                isRequired: true,
                info: 'Reisezeitraum eingeben',
                placeholder: 'Reisezeitraum wählen..',
                validate: async (key, value, config) => {
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
                validate: async (key, value, config) => {
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
                validate: async (key, value, config) => {
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
                validate: async (key, value, config) => {
                    let error = '';
                    if (!value && config.isRequired)
                        error = 'Something is missing!';
                    return error;
                },
            },
            Land: {
                placeholder: 'Select',
                type: 'Select',
                initialOption: 'Deutschland',
                isRequired: true,
                dropdownItems: [
                    { label: 'Schweiz', value: { country: 'Switzerland' } },
                    { label: 'Deutschland', value: { country: 'Switzerland' } },
                ],
                validate: async (key, value, config) => {
                    let error = '';
                    if (!value && config.isRequired)
                        error = 'Selection is missing!';
                    return error;
                },
            },
            Upload: {
                type: 'Upload',
                customUploadIcon: () => <Icons.UploadFile />,
                customDeleteIcon: () => <Icons.DeleteForever />,
                isRequired: true,
                addBtnLabel: 'Datei/en auswählen',
                removeBtnLabel: 'Auswahl löschen',
                validate: async (key, value, config) => {
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
            return {
                isError: false,
                message: 'Mail has been sent!',
            };
        }}
    />
);

export const WithCustomFieldDefinition: Story = () => (
    <DynamicForm
        definitions={{
            field: ({
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
            ),
        }}
        fields={{
            Nachname: {
                type: 'Field',
                placeholder: 'Nachname..',
                isRequired: true,
                info: 'Nachname eingeben',
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
                customIcon: ({ singleSelect }) => {
                    return singleSelect ? (
                        <Icons.CalendarToday />
                    ) : (
                        <Icons.DateRange />
                    );
                },
                type: 'Datepicker',
                isRequired: true,
                info: 'Reisezeitraum eingeben',
                placeholder: 'Reisezeitraum wählen..',
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
                placeholder: 'Select',
                type: 'Select',
                initialOption: 'Deutschland',
                isRequired: true,
                dropdownItems: [
                    { label: 'Schweiz', value: { country: 'Switzerland' } },
                    { label: 'Deutschland', value: { country: 'Switzerland' } },
                ],
            },
            Upload: {
                type: 'Upload',
                customUploadIcon: () => <Icons.UploadFile />,
                customDeleteIcon: () => <Icons.DeleteForever />,
                isRequired: true,
                addBtnLabel: 'Datei/en auswählen',
                removeBtnLabel: 'Auswahl löschen',
                acceptedFormats: 'image/png, image/jpg',
            },
        }}
        onSubmit={async (values) => {
            console.log(values);
            return {
                isError: false,
                message: 'Mail has been sent!',
            };
        }}
    />
);

export const WithCustomDatepicker: Story = () => (
    <DynamicForm
        fields={{
            Nachname: {
                type: 'Field',
                placeholder: 'Nachname..',
                isRequired: true,
                info: 'Nachname eingeben',
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
                customIcon: ({ singleSelect }) => {
                    return singleSelect ? (
                        <Icons.CalendarToday />
                    ) : (
                        <Icons.DateRange />
                    );
                },
                type: 'Datepicker',
                isRequired: true,
                info: 'Reisezeitraum eingeben',
                placeholder: 'Reisezeitraum wählen..',
                deleteAction: (handleClick) => (
                    <button onClick={handleClick}>delete</button>
                ),
                submitAction: (handleClick) => (
                    <button onClick={handleClick}>submit</button>
                ),
                prevCtrlUrl: <img src="images/Arrow-Left.svg" />,
                nextCtrlUrl: <img src="images/Arrow-Right.svg" />,
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
                placeholder: 'Select',
                type: 'Select',
                initialOption: 'Deutschland',
                isRequired: true,
                dropdownItems: [
                    { label: 'Schweiz', value: { country: 'Switzerland' } },
                    { label: 'Deutschland', value: { country: 'Switzerland' } },
                ],
            },
            Upload: {
                type: 'Upload',
                customUploadIcon: () => <Icons.UploadFile />,
                customDeleteIcon: () => <Icons.DeleteForever />,
                isRequired: true,
                addBtnLabel: 'Datei/en auswählen',
                removeBtnLabel: 'Auswahl löschen',
                acceptedFormats: 'image/png, image/jpg',
            },
        }}
        onSubmit={async (values) => {
            console.log(values);
            return {
                isError: false,
                message: 'Mail has been sent!',
            };
        }}
    />
);
