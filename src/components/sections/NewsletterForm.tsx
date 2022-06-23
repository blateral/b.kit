import React, { FC, useCallback } from 'react';
import styled, { DefaultTheme } from 'styled-components';

import { useLibTheme, withLibTheme } from 'utils/LibThemeProvider';
import Section, { mapToBgMode } from 'components/base/Section';
import { getColors as color, mq, spacings } from 'utils/styles';
import Wrapper from 'components/base/Wrapper';
import Textfield from 'components/fields/Textfield';
import { FormikErrors, useFormik } from 'formik';
import Actions from 'components/blocks/Actions';
import Button from 'components/buttons/Button';

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media ${mq.semilarge} {
        flex-direction: row;
    }
`;

const FieldContainer = styled.div`
    flex: 1 1 0;
    text-align: center;

    & + & {
        margin-top: ${spacings.nudge * 3}px;
    }

    & > * + * {
        margin-top: ${spacings.nudge * 3}px;
    }

    @media ${mq.semilarge} {
        max-width: 590px;

        & + & {
            margin-top: 0;
        }

        &:first-child {
            padding-right: ${spacings.nudge * 3}px;
        }

        &:last-child {
            padding-left: ${spacings.nudge * 3}px;
        }
    }
`;

const ActionContainer = styled.div`
    width: 100%;
    max-width: calc(590px * 2 + ${spacings.nudge * 2}px);

    margin: 0 auto;
    margin-top: ${spacings.spacer * 2}px;

    text-align: left;
`;

export interface FieldGenerationProps {
    field: NewsletterField;
    value: string;
    error: string;
    info?: string;
    isTouched: boolean;
    key: string;
    isInverted: boolean;
    theme: DefaultTheme;
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
    validateOnBlur?: boolean;
    validateOnChange?: boolean;
}

export interface NewsletterFormStructure {
    [key: string]: NewsletterField;
}

export interface FormData {
    [key: string]: string;
}

export interface NewsletterField {
    inputType?: 'text' | 'number' | 'email' | 'password' | 'tel';
    isRequired?: boolean;
    label?: string;
    errorMsg?: string;
    initialValue?: string;
    placeholder?: string;
    info?: string;
    validate?: (
        key: string,
        value: string,
        config: NewsletterField
    ) => Promise<string>;
}

const NewsletterForm: FC<{
    /** ID value for targeting section with anchor hashes */
    anchorId?: string;

    /** Structure to define fields of newsletter form  */
    fields?: NewsletterFormStructure;

    /** Function to inject custom field definition */
    customField?: (props: FieldGenerationProps) => React.ReactNode;

    /** Function to inject custom submit button */
    submitAction?: (props: {
        isInverted?: boolean;
        handleSubmit?: () => Promise<any>;
        isDisabled?: boolean;
    }) => React.ReactNode;

    /** Section background */
    bgMode?: 'full' | 'inverted';
}> = ({ anchorId, bgMode, fields, customField, submitAction }) => {
    const { theme } = useLibTheme();
    const isInverted = bgMode === 'inverted';

    // generate initial data and setup yup validation definition
    const initialData: FormData = {};

    for (const key in fields) {
        initialData[key] = fields[key].initialValue || '';
    }

    const validation = async (values: FormData) => {
        const errors: Partial<FormData> = {};

        // search for errors and set them
        for (const key in fields) {
            const config = fields[key];
            const inputType = config.inputType;

            // default
            if (fields[key].isRequired && !values[key]) {
                errors[key] = fields[key].errorMsg || 'Required field';
            }

            // custom validation
            if (config.validate) {
                const error = await config.validate(
                    key,
                    values[key] as string,
                    config
                );
                if (error) errors[key] = error;
                break;
            }

            switch (inputType) {
                case 'email':
                    if (
                        values[key] &&
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
                            values[key] as string
                        )
                    ) {
                        errors[key] =
                            fields[key].errorMsg || 'Invalid Mail format';
                    }
                    break;
                case 'tel':
                    if (values[key] && /[A-Z]/gi.test(values[key] as string)) {
                        errors[key] =
                            fields[key].errorMsg || 'Ungültige Telefonnummer';
                    }
                    break;
                case 'number':
                    if (
                        values[key] &&
                        !/^[+]?\d+([.]\d+)?$/gm.test(values[key] as string)
                    ) {
                        errors[key] =
                            fields[key].errorMsg || 'Zahlenformat ungültig';
                    }
                    break;
            }
        }

        return errors;
    };

    // formik hook
    const {
        // handleSubmit,
        handleChange,
        handleBlur,
        setFieldTouched,
        // setSubmitting,
        validateField,
        submitForm,
        setValues,
        isSubmitting,
        touched,
        values,
        errors,
        dirty,
        validateOnBlur,
        validateOnChange,
    } = useFormik<FormData>({
        initialValues: {
            ...initialData,
        } as FormData,

        onSubmit: async (values) => {
            // const valuesAndMails = {
            //     ...values,
            //     targetEmails: targetEmails || '',
            //     subjectLine: subjectLine || '',
            // };
            // onSubmit && (await onSubmit(valuesAndMails));
            // setSubmitting(false);
            console.log(values);
        },
        validateOnBlur: true,
        validateOnChange: true,
        validate: validation,
    });

    // rewrite setFieldValue to prevent loadash feature of Formik: https://github.com/jaredpalmer/formik/issues/2262
    const setField = useCallback(
        async (key: string, value: any, shouldValidate?: boolean) => {
            return setValues({ ...values, [key]: value }, shouldValidate);
        },
        [setValues, values]
    );

    return (
        <Section
            addSeperation
            anchorId={anchorId}
            bgColor={
                isInverted
                    ? color(theme).sectionBg.dark
                    : bgMode
                    ? color(theme).sectionBg.medium
                    : color(theme).sectionBg.light
            }
            bgMode={mapToBgMode(bgMode, true)}
        >
            <Wrapper addWhitespace>
                <Form>
                    <FieldContainer>
                        {fields &&
                            Object.keys(fields).map((key, i) => {
                                const generationProps = {
                                    index: i,
                                    field: fields[key],
                                    key: key,
                                    value: values[key],
                                    error: errors[key],
                                    isTouched: touched[key] || false,
                                    isInverted: isInverted,
                                    setField: setField,
                                    setTouched: setFieldTouched,
                                    validateField: validateField,
                                    handleChange: handleChange,
                                    handleBlur: handleBlur,
                                    validateOnBlur,
                                    validateOnChange,
                                    theme: theme,
                                } as FieldGenerationProps;

                                return customField
                                    ? customField(generationProps)
                                    : generateTextField(generationProps);
                            })}
                    </FieldContainer>
                </Form>
                {fields && (
                    <ActionContainer>
                        <Actions
                            primary={
                                submitAction ? (
                                    submitAction({
                                        isInverted,
                                        isDisabled: isSubmitting || !dirty,
                                        handleSubmit: submitForm,
                                    })
                                ) : (
                                    <Button.View
                                        as="button"
                                        onClick={submitForm}
                                        isDisabled={isSubmitting || !dirty}
                                        {...{
                                            type: 'submit',
                                        }}
                                    >
                                        <Button.Label>send</Button.Label>
                                    </Button.View>
                                )
                            }
                        />
                    </ActionContainer>
                )}
            </Wrapper>
        </Section>
    );
};

const generateTextField = ({
    key,
    field,
    isInverted,
    value,
    handleChange,
    handleBlur,
    error,
    isTouched,
}: FieldGenerationProps) => (
    <Textfield
        key={key}
        label={`${field.label || key}${field.isRequired ? '*' : ''}`}
        placeholder={field.placeholder}
        name={`['${key}']`}
        isInverted={isInverted}
        value={value as string}
        onChange={handleChange}
        onBlur={handleBlur}
        infoMessage={field.info}
        errorMessage={error && isTouched ? error : undefined}
    />
);

export const NewsletterFormComponent = NewsletterForm;
export default withLibTheme(NewsletterForm);
