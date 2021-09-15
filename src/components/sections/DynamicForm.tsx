import React, { FC } from 'react';
import styled, { ThemeContext } from 'styled-components';
import * as Yup from 'yup';

import { getColors as color, spacings } from 'utils/styles';
import Section from 'components/base/Section';
import { Field, FormikErrors, FormikTouched, useFormik } from 'formik';
import Wrapper from 'components/base/Wrapper';
import Actions from 'components/blocks/Actions';
import Button from 'components/buttons/Button';
import Datepicker from 'components/fields/Datepicker';
import Checkbox from 'components/fields/Checkbox';
import RadioButton from 'components/fields/Radio';
import Textarea from 'components/fields/Textarea';
import Textfield from 'components/fields/Textfield';
import SelectDropdown from 'components/fields/SelectDropdown';
import Copy from 'components/typography/Copy';

const StyledSection = styled(Section)`
    overflow: visible;
`;

const FieldContainer = styled.div`
    max-width: 590px;
    margin: 0 auto;
    text-align: center;

    & > * + * {
        margin-top: ${spacings.spacer * 1.5}px;
    }
`;

export interface FormStructure {
    [key: string]: Field | Area | Select | Datepicker | FieldGroup;
}

export interface FormField {
    isRequired?: boolean;
}

export interface Field extends FormField {
    type: 'Field';
    inputType?: 'text' | 'number' | 'email' | 'password' | 'tel';
    initalValue?: string;
    placeholder?: string;
    info?: string;
    icon?: { src: string; alt?: string };
}

export interface Area extends FormField {
    type: 'Area';
    initalValue?: string;
    placeholder?: string;
    info?: string;
}

export interface Select extends FormField {
    type: 'Select';
    initalValue?: string;
    placeholder?: string;
    dropdownItems: {
        value?: string;
        label?: string;
    }[];
    info?: string;
    icon?: { src: string; alt?: string };
}

export interface Datepicker extends FormField {
    type: 'Datepicker';
    initialDates?: [Date, Date];
    placeholder?: string;
    minDate?: Date;
    maxDate?: Date;
    singleSelect?: boolean;
    info?: string;
    icon?: { src: string; alt?: string };
}

export interface FieldGroup extends FormField {
    type: 'FieldGroup';
    groupType: 'Radio' | 'Checkbox';
    fields: Array<{ initialChecked?: boolean; text?: string }>;
}

export interface FormData {
    [key: string]:
        | string
        | boolean
        | Array<string>
        | [Date | null, Date | null];
}

interface FieldGenerationProps {
    index: number;
    field: Field | Area | Select | Datepicker | FieldGroup;
    formikValues: FormData;
    formikErrors: FormikErrors<FormData>;
    formikTouches: FormikTouched<FormData>;
    key: string;
    setField: (
        field: string,
        value: any,
        shouldValidate?: boolean | undefined
    ) => Promise<void> | Promise<FormikErrors<FormData>>;
    validateField: (
        name: string
    ) => Promise<string | undefined> | Promise<void>;
    setTouched: (
        field: string,
        touched?: boolean | undefined,
        shouldValidate?: boolean | undefined
    ) => Promise<void> | Promise<FormikErrors<FormData>>;
    handleChange: {
        (e: React.ChangeEvent<any>): void;
        <T_1 = string | React.ChangeEvent<any>>(
            field: T_1
        ): T_1 extends React.ChangeEvent<any>
            ? void
            : (e: string | React.ChangeEvent<any>) => void;
    };
    handleBlur: {
        (e: React.FocusEvent<any>): void;
        <T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void;
    };
}

const DynamicForm: FC<{
    fields?: FormStructure;
    submitLabel?: string;
    action?: string;
    successPageUrl?: string;
    recipientId?: string;
    subjectLine?: string;
}> = ({
    fields,
    submitLabel = 'senden',
    action,
    successPageUrl,
    recipientId,
    subjectLine,
}) => {
    // generate initial data and setup yup validation definition
    const initalData: FormData = {};
    const yupDefinition: { [key: string]: any } = {};
    for (const key in fields) {
        switch (fields[key].type) {
            case 'Field':
                initalData[key] = (fields[key] as Field).initalValue || '';
                break;
            case 'Area':
                initalData[key] = (fields[key] as Area).initalValue || '';
                break;
            case 'Select':
                initalData[key] = (fields[key] as Select).initalValue || '';
                break;
            case 'Datepicker':
                initalData[key] = (fields[key] as Datepicker).initialDates || [
                    null,
                    null,
                ];
                break;
            case 'FieldGroup': {
                const group = fields[key] as FieldGroup;
                const type = (fields[key] as FieldGroup).groupType;
                if (type === 'Checkbox') {
                    const initalArray: string[] = [];
                    group.fields.forEach((field) => {
                        if (field.initialChecked && field.text)
                            initalArray.push(field.text);
                    });
                    initalData[key] = initalArray;
                } else if (type === 'Radio') {
                    initalData[key] = '';
                    group.fields.every((field) => {
                        if (field.initialChecked && field.text) {
                            initalData[key] = field.text;
                            return false;
                        }
                        return true;
                    });
                }
                break;
            }
        }
    }

    // create yup schema
    for (const key in fields) {
        switch (fields[key].type) {
            case 'Field': {
                const inputType = (fields[key] as Field).inputType;
                let validator = Yup.string();
                if (fields[key].isRequired)
                    validator = validator.required('Pflichtfeld');
                switch (inputType) {
                    case 'email':
                        validator = validator.email(
                            'Format der E-Mail Adresse ungültig'
                        );
                        break;
                    case 'tel':
                        // validator = validator.matches(
                        //     /^\+(?:[0-9]⋅?){6,14}[0-9]$/,
                        //     'Format der Telefonnummer ungültig'
                        // );
                        break;
                    case 'number':
                        validator = validator.matches(
                            /^[+]?\d+([.]\d+)?$/gm,
                            'Zahlenformat ungültig'
                        );
                        break;
                }

                yupDefinition[key] = validator;
                break;
            }
            case 'Area': {
                let validator = Yup.string();
                if (fields[key].isRequired)
                    validator = validator.required('Pflichtfeld');
                yupDefinition[key] = validator;
                break;
            }
            case 'Select': {
                let validator = Yup.string();
                if (fields[key].isRequired)
                    validator = validator.required('Pflichtfeld');
                yupDefinition[key] = validator;
                break;
            }
            case 'Datepicker': {
                const single = (fields[key] as Datepicker).singleSelect;
                let validator = Yup.array();
                if (fields[key].isRequired)
                    validator = validator
                        .of(Yup.date().nullable(true))
                        .test(
                            'DATE_FORMAT',
                            single
                                ? 'Bitte Datum angeben'
                                : 'Bitte Start- und Enddatum angeben',
                            (value) => {
                                const nonNullValues = value?.filter(
                                    (val) => val !== null && val !== undefined
                                )?.length;
                                return nonNullValues
                                    ? nonNullValues == (single ? 1 : 2)
                                    : false;
                            }
                        );
                yupDefinition[key] = validator;
                break;
            }
            case 'FieldGroup': {
                const type = (fields[key] as FieldGroup).groupType;
                if (type === 'Checkbox') {
                    let validator = Yup.array(Yup.string());
                    if (fields[key].isRequired)
                        validator = validator
                            .required('Pflichtfeld')
                            .min(1, 'Bitte mindestens ein Feld auswählen');

                    yupDefinition[key] = validator;
                } else if (type === 'Radio') {
                    let validator = Yup.string();
                    if (fields[key].isRequired)
                        validator = validator.required('Pflichtfeld');
                    yupDefinition[key] = validator;
                }
                break;
            }
        }
    }

    const schema = Yup.object().shape({
        ...yupDefinition,
    });

    // formik hook
    const {
        handleSubmit,
        handleChange,
        handleBlur,
        setFieldValue,
        setFieldTouched,
        setSubmitting,
        validateField,
        isSubmitting,
        touched,
        values,
        errors,
        dirty,
    } = useFormik<FormData>({
        initialValues: {
            ...initalData,
        } as FormData,

        onSubmit: async (values) => {
            values.successPageUrl = successPageUrl || '';
            values.recipientId = recipientId || '';
            values.subjectLine = subjectLine || '';
            if (action) {
                await fetch(action, {
                    method: 'post',
                    body: JSON.stringify(values),
                    headers: { 'Content-Type': 'application/json' },
                }).then((res) => {
                    res.json();
                });
                setSubmitting(false);
            }
        },
        validateOnBlur: true,
        validateOnChange: true,
        validationSchema: schema,
    });

    const theme = React.useContext(ThemeContext);
    return (
        <StyledSection
            addSeperation
            bgColor={color(theme).mono.light}
            bgMode="full"
        >
            <Wrapper addWhitespace>
                <form action={action} method="post" onSubmit={handleSubmit}>
                    <FieldContainer>
                        {fields &&
                            Object.keys(fields)?.map((label, i) => {
                                const generationProps = {
                                    index: i,
                                    field: fields[label],
                                    key: label,
                                    formikValues: values,
                                    formikErrors: errors,
                                    formikTouches: touched,
                                    setField: setFieldValue,
                                    setTouched: setFieldTouched,
                                    validateField: validateField,
                                    handleChange: handleChange,
                                    handleBlur: handleBlur,
                                } as FieldGenerationProps;

                                switch (fields[label].type) {
                                    case 'Field':
                                        return generateField(generationProps);
                                    case 'Area':
                                        return generateArea(generationProps);
                                    case 'Datepicker':
                                        return generateDatepicker(
                                            generationProps
                                        );
                                    case 'FieldGroup': {
                                        if (
                                            (fields[label] as FieldGroup)
                                                .groupType === 'Checkbox'
                                        ) {
                                            return generateCheckboxGroup(
                                                generationProps
                                            );
                                        } else {
                                            return generateRadioGroup(
                                                generationProps
                                            );
                                        }
                                    }
                                    case 'Select':
                                        return generateSelect(generationProps);
                                    default:
                                        return null;
                                }
                            })}
                        {fields && submitLabel && (
                            <Actions
                                isCentered
                                primary={
                                    <Button.View
                                        as="button"
                                        isDisabled={isSubmitting || !dirty}
                                        {...{
                                            type: 'submit',
                                        }}
                                    >
                                        <Button.Label>
                                            {submitLabel}
                                        </Button.Label>
                                    </Button.View>
                                }
                            />
                        )}
                    </FieldContainer>
                </form>
            </Wrapper>
        </StyledSection>
    );
};

const FieldHead = styled.div`
    display: flex;
    flex-direction: row;
    align-items: top;
    justify-content: space-between;
    padding-bottom: ${spacings.nudge * 3}px;
    padding-left: ${spacings.nudge}px;
    padding-right: ${spacings.nudge}px;
`;

export default DynamicForm;

const Fields = styled.div`
    & > * + * {
        margin-top: ${spacings.nudge * 1.5}px;
    }
`;

const ErrorMessage = styled(Copy)`
    text-align: left;
    margin-top: ${spacings.nudge * 2}px;
    padding-left: ${spacings.nudge}px;
`;

const generateCheckboxGroup = ({
    index,
    field,
    key,
    formikValues,
    formikTouches,
    formikErrors,
    setTouched,
    validateField,
    setField,
}: FieldGenerationProps) => {
    const group = field as FieldGroup;
    const groupData = formikValues[key] as string[];
    return (
        <div key={index}>
            <FieldHead>
                {key && (
                    <Copy textColor={'inherit'} type="copy-b" size="medium">
                        {`${key}${field.isRequired ? '*' : ''}`}
                    </Copy>
                )}
            </FieldHead>
            <Fields>
                {group?.fields?.map((field, ci) => (
                    <Checkbox
                        key={ci}
                        onClick={() => {
                            // add key to form data array if not exists. Otherwise remove it
                            if (field.text) {
                                const cIndex = groupData.indexOf(field.text);
                                if (cIndex === -1) {
                                    groupData.push(field.text);
                                } else {
                                    groupData.splice(cIndex, 1);
                                }
                                // set formik values
                                setField(key, groupData);
                                setTouched(key, true);
                                validateField(key);
                            }
                        }}
                        onChange={() => ''}
                        isSelected={
                            field.text
                                ? groupData.indexOf(field.text) !== -1
                                : false
                        }
                        name={key}
                        value={field.text}
                        label={field.text}
                    />
                ))}
            </Fields>
            {formikErrors[key] && formikTouches[key] && (
                <ErrorMessage textColor="#ff0000" size="small">
                    {formikErrors[key]}
                </ErrorMessage>
            )}
        </div>
    );
};

const generateRadioGroup = ({
    index,
    field,
    key,
    formikValues,
    formikErrors,
    formikTouches,
    setField,
}: FieldGenerationProps) => {
    const group = field as FieldGroup;
    const groupData = formikValues[key] as string;
    return (
        <div key={index}>
            <FieldHead>
                {key && (
                    <Copy textColor={'inherit'} type="copy-b" size="medium">
                        {`${key}${field.isRequired ? '*' : ''}`}
                    </Copy>
                )}
            </FieldHead>
            <Fields>
                {group?.fields?.map((field, fi) => (
                    <RadioButton
                        key={fi}
                        name={key}
                        value={field.text}
                        label={field.text}
                        isSelected={
                            field.text ? groupData === field.text : false
                        }
                        onChange={(e) => {
                            if (field.text) {
                                setField(key, e.currentTarget.value);
                            }
                        }}
                    />
                ))}
            </Fields>
            {formikErrors[key] && formikTouches[key] && (
                <ErrorMessage textColor="#ff0000" size="small">
                    {formikErrors[key]}
                </ErrorMessage>
            )}
        </div>
    );
};

const generateDatepicker = ({
    index,
    field,
    key,
    formikValues,
    formikErrors,
    formikTouches,
    setField,
    setTouched,
    validateField,
}: FieldGenerationProps) => {
    const dates = formikValues[key] as [Date | null, Date | null];

    return (
        <Datepicker
            key={index}
            onSubmit={async (start?: Date, end?: Date) => {
                await setField(key, [start, end]);
                await setTouched(key, true);
                validateField(key);
            }}
            values={[dates?.[0] as Date, dates?.[1] as Date]}
            label={`${key}${field.isRequired ? '*' : ''}`}
            placeholder={(field as Datepicker).placeholder}
            icon={(field as Datepicker).icon}
            singleSelect={(field as Datepicker).singleSelect}
            infoMessage={(field as Field).info}
            errorMessage={
                formikErrors[key] && formikTouches[key]
                    ? formikErrors[key]
                    : undefined
            }
            name={key}
        />
    );
};

const generateArea = ({
    index,
    field,
    key,
    formikValues,
    formikErrors,
    formikTouches,
    handleChange,
}: FieldGenerationProps) => (
    <Textarea
        key={index}
        label={`${key}${field.isRequired ? '*' : ''}`}
        placeholder={(field as Datepicker).placeholder}
        name={key}
        value={formikValues[key] as string}
        onChange={handleChange}
        infoMessage={(field as Field).info}
        errorMessage={
            formikErrors[key] && formikTouches[key]
                ? formikErrors[key]
                : undefined
        }
        lightBg
    />
);

const generateField = ({
    index,
    field,
    key,
    formikValues,
    formikErrors,
    formikTouches,
    handleChange,
}: FieldGenerationProps) => (
    <Textfield
        key={index}
        label={`${key}${field.isRequired ? '*' : ''}`}
        placeholder={(field as Field).placeholder}
        name={key}
        value={formikValues[key] as string}
        onChange={handleChange}
        infoMessage={(field as Field).info}
        errorMessage={
            formikErrors[key] && formikTouches[key]
                ? formikErrors[key]
                : undefined
        }
        lightBg
    />
);

const generateSelect = ({
    index,
    field,
    key,
    formikValues,
    formikErrors,
    formikTouches,
    setField,
    setTouched,
}: FieldGenerationProps) => (
    <SelectDropdown
        key={index}
        label={`${key}${field.isRequired ? '*' : ''}`}
        name={key}
        placeholder={(field as Select).placeholder}
        errorMessage={
            formikErrors[key] && formikTouches[key]
                ? formikErrors[key]
                : undefined
        }
        items={(field as Select).dropdownItems || []}
        value={formikValues[key] as string}
        onChange={(value) => {
            setField(key, value);
            setTouched(key, true);
        }}
        onBlur={() => setTouched(key, true, true)}
        icon={(field as Select).icon}
    />
);
