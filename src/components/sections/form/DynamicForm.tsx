import React, { FC, useCallback } from 'react';
import styled, { DefaultTheme } from 'styled-components';

import { getColors as color, mq, spacings } from 'utils/styles';
import { useLibTheme, withLibTheme } from 'utils/LibThemeProvider';
import Section, { mapToBgMode } from 'components/base/Section';
import { Field, FormikErrors, useFormik } from 'formik';
import Wrapper from 'components/base/Wrapper';
import Actions from 'components/blocks/Actions';
import Button from 'components/buttons/Button';

import { LocationData } from 'components/fields/LocationField';

/** Field Renderer */
import renderLocationField from './renderer/locationRenderer';
import renderDatepickerField from './renderer/datepickerRenderer';
import {
    renderCheckboxGroupField,
    renderRadioGroupField,
} from './renderer/fieldGroupRenderer';
import renderAreaField from './renderer/areaRenderer';
import renderField from './renderer/fieldRenderer';
import renderSelectField from './renderer/selectRenderer';
import renderUploadField from './renderer/uploadRenderer';
import fieldValidator from './validators/fieldValidator';
import areaValidator from './validators/areaValidator';
import selectValidator from './validators/selectValidator';
import datepickerValidator from './validators/datepickerValidator';
import locationValidator from './validators/locationValidator';
import fieldGroupValidator from './validators/fieldGroupValidator';
import uploadValidator from './validators/uploadValidator';

const StyledSection = styled(Section)`
    overflow: visible;
`;

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

const ActionContainer = styled.div<{ hasCols?: boolean }>`
    width: 100%;
    max-width: calc(590px * 2 + ${spacings.nudge * 2}px);

    margin: 0 auto;
    margin-top: ${spacings.spacer * 2}px;

    text-align: ${({ hasCols }) => (hasCols ? 'left' : 'center')};
`;

export interface FormStructure {
    [key: string]:
        | Field
        | Area
        | Select
        | Datepicker
        | Location
        | FieldGroup
        | FileUpload;
}

export interface FormField {
    isRequired?: boolean;
}

export interface Field extends FormField {
    type: 'Field';
    inputType?: 'text' | 'number' | 'email' | 'password' | 'tel';
    initialValue?: string;
    placeholder?: string;
    info?: string;
    validate?: (key: string, value: string, config: Field) => Promise<string>;
    errorMsg?: string;
}

export interface Area extends FormField {
    type: 'Area';
    initialValue?: string;
    placeholder?: string;
    info?: string;
    validate?: (key: string, value: string, config: Area) => Promise<string>;
    errorMsg?: string;
}

export interface Select extends FormField {
    type: 'Select';
    initialValue?: string;
    placeholder?: string;
    dropdownItems: {
        value?: string;
        label?: string;
    }[];
    info?: string;
    validate?: (key: string, value: string, config: Select) => Promise<string>;
    indicator?: (props: {
        isOpen: boolean;
        isDisabled?: boolean;
    }) => React.ReactNode;
    errorMsg?: string;
}

export interface Datepicker extends FormField {
    type: 'Datepicker';
    initialDates?: [Date, Date];
    placeholder?: string;
    minDate?: Date;
    maxDate?: Date;
    singleSelect?: boolean;
    info?: string;
    customIcon?: (props: {
        isInverted?: boolean;
        singleSelect?: boolean;
    }) => React.ReactNode;

    singleDateError?: string;
    multiDateError?: string;
    nextCtrlUrl?: React.ReactNode;
    prevCtrlUrl?: React.ReactNode;
    validate?: (
        key: string,
        value: [Date | null, Date | null],
        config: Datepicker
    ) => Promise<string>;
    deleteAction?: (
        handleClick?: (
            e: React.SyntheticEvent<HTMLButtonElement, Event>
        ) => void
    ) => React.ReactNode;
    submitAction?: (
        handleClick?: (
            e: React.SyntheticEvent<HTMLButtonElement, Event>
        ) => void
    ) => React.ReactNode;
}

export interface Location extends FormField {
    type: 'Location';
    initialPosition?: [number, number];
    placeholder?: string;
    info?: string;
    errorMsg?: string;
    customLocationIcon?: (props: { isInverted?: boolean }) => React.ReactNode;
    customAddressIcon?: (props: { isInverted?: boolean }) => React.ReactNode;
    validate?: (
        key: string,
        value: LocationData,
        config: Location
    ) => Promise<string>;
    toggleAction?: (props: {
        isInverted?: boolean;
        asGeolocation?: boolean;
        handleClick?: (
            e: React.SyntheticEvent<HTMLButtonElement, Event>
        ) => void;
    }) => React.ReactNode;
}

export interface FieldGroup extends FormField {
    type: 'FieldGroup';
    groupType: 'Radio' | 'Checkbox';
    fields: Array<{ initialChecked?: boolean; text?: string }>;
    validate?: (
        key: string,
        value: Array<string> | string,
        config: FieldGroup
    ) => Promise<string>;
    errorMsg?: string;
    infoMsg?: string;
}

export interface FileUpload extends FormField {
    type: 'Upload';
    addBtnLabel?: string;
    removeBtnLabel?: string;
    info?: string;
    acceptedFormats?: string;
    customUploadIcon?: (isInverted?: boolean) => React.ReactNode;
    customDeleteIcon?: (isInverted?: boolean) => React.ReactNode;
    validate?: (
        key: string,
        value: Array<File>,
        config: FileUpload
    ) => Promise<string>;
    errorMsg?: string;
}

export interface FormData {
    [key: string]: FormDataTypes | string;
}

export type FormDataTypes =
    | string
    | boolean
    | Array<string>
    | [Date | null, Date | null]
    | Array<File>
    | LocationData;

type FieldTypes =
    | Field
    | Area
    | Select
    | Datepicker
    | Location
    | FieldGroup
    | FileUpload;

export interface FieldGenerationProps<T extends FieldTypes> {
    field: T;
    value: FormDataTypes;
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

const DynamicForm: FC<{
    /** ID value for targeting section with anchor hashes */
    anchorId?: string;

    /** Field definitions */
    fields?: FormStructure;

    /** Callback on form submit */
    onSubmit?: (values: FormData) => Promise<void>;

    /** Function to inject custom submit button */
    submitAction?: (props: {
        isInverted?: boolean;
        handleSubmit?: () => Promise<any>;
        isDisabled?: boolean;
    }) => React.ReactNode;

    /** Comma seperated list of target emails */
    targetEmails?: string;

    /** E-Mail subject */
    subjectLine?: string;

    /** Section background */
    bgMode?: 'full' | 'inverted';

    /** Functions to inject custom field components (React nodes) */
    definitions?: {
        field?: (props: FieldGenerationProps<Field>) => React.ReactNode;
        area?: (props: FieldGenerationProps<Area>) => React.ReactNode;
        select?: (props: FieldGenerationProps<Select>) => React.ReactNode;
        datepicker?: (
            props: FieldGenerationProps<Datepicker>
        ) => React.ReactNode;
        location?: (props: FieldGenerationProps<Location>) => React.ReactNode;
        checkbox?: (props: FieldGenerationProps<FieldGroup>) => React.ReactNode;
        radio?: (props: FieldGenerationProps<FieldGroup>) => React.ReactNode;
        upload?: (props: FieldGenerationProps<FieldGroup>) => React.ReactNode;
    };
}> = ({
    anchorId,
    fields,
    onSubmit,
    submitAction,
    definitions,
    subjectLine,
    targetEmails,
    bgMode,
}) => {
    const isInverted = bgMode === 'inverted';

    // generate initial data and setup yup validation definition
    const initalData: FormData = {};

    for (const key in fields) {
        switch (fields[key].type) {
            case 'Field':
                initalData[key] = (fields[key] as Field).initialValue || '';
                break;
            case 'Area':
                initalData[key] = (fields[key] as Area).initialValue || '';
                break;
            case 'Select':
                initalData[key] = (fields[key] as Select).initialValue || '';
                break;
            case 'Datepicker':
                initalData[key] = (fields[key] as Datepicker).initialDates || [
                    null,
                    null,
                ];
                break;
            case 'Location': {
                initalData[key] = {
                    description: '',
                    position: [0, 0],
                };
                break;
            }
            case 'Upload':
                initalData[key] = [];
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

    const validation = async (values: FormData) => {
        const errors: Partial<FormData> = {};

        // search for errors and set them
        for (const key in fields) {
            switch (fields[key].type) {
                case 'Field': {
                    const config = fields[key] as Field;
                    const value = values[key] as string;

                    // custom validation
                    if (config.validate) {
                        const error = await config.validate(key, value, config);
                        if (error) errors[key] = error;
                        break;
                    }

                    // default
                    const error = await fieldValidator(key, value, config);
                    if (error) errors[key] = error;
                    break;
                }

                case 'Area': {
                    const config = fields[key] as Area;
                    const value = values[key] as string;

                    // custom validation
                    if (config.validate) {
                        const error = await config.validate(key, value, config);
                        if (error) errors[key] = error;
                        break;
                    }

                    // default
                    const error = await areaValidator(key, value, config);
                    if (error) errors[key] = error;
                    break;
                }

                case 'Select': {
                    const config = fields[key] as Select;
                    const value = values[key] as string;

                    // custom validation
                    if (config.validate) {
                        const error = await config.validate(key, value, config);
                        if (error) errors[key] = error;
                        break;
                    }

                    // default
                    const error = await selectValidator(key, value, config);
                    if (error) errors[key] = error;
                    break;
                }

                case 'Datepicker': {
                    const config = fields[key] as Datepicker;
                    const value = values[key] as [Date | null, Date | null];

                    // custom validation
                    if (config.validate) {
                        const error = await config.validate(key, value, config);
                        if (error) errors[key] = error;
                        break;
                    }

                    // default
                    const error = await datepickerValidator(key, value, config);
                    if (error) errors[key] = error;
                    break;
                }

                case 'Location': {
                    const config = fields[key] as Location;
                    const value = values[key] as LocationData;

                    // custom validation
                    if (config.validate) {
                        const error = await config.validate(key, value, config);
                        if (error) errors[key] = error;
                        break;
                    }

                    // default
                    const error = await locationValidator(key, value, config);
                    if (error) errors[key] = error;
                    break;
                }

                case 'FieldGroup': {
                    const config = fields[key] as FieldGroup;
                    const value = values[key] as Array<string> | string;

                    // custom validation
                    if (config.validate) {
                        const error = await config.validate(key, value, config);
                        if (error) errors[key] = error;
                        break;
                    }

                    // default
                    const error = await fieldGroupValidator(key, value, config);
                    if (error) errors[key] = error;
                    break;
                }

                case 'Upload': {
                    const config = fields[key] as FileUpload;
                    const files = values[key] as File[];

                    // custom validation
                    if (config.validate) {
                        const error = await config.validate(key, files, config);
                        if (error) errors[key] = error;
                        break;
                    }

                    // default
                    const error = await uploadValidator(key, files, config);
                    if (error) errors[key] = error;
                    break;
                }
            }
        }

        return errors;
    };

    // formik hook
    const {
        handleSubmit,
        handleChange,
        handleBlur,
        setFieldTouched,
        setSubmitting,
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
            ...initalData,
        } as FormData,

        onSubmit: async (values) => {
            const valuesAndMails = {
                ...values,
                targetEmails: targetEmails || '',
                subjectLine: subjectLine || '',
            };
            onSubmit && (await onSubmit(valuesAndMails));
            setSubmitting(false);
        },
        validateOnBlur: true,
        validateOnChange: true,
        validate: validation,
    });

    const { theme } = useLibTheme();

    // rewrite setFieldValue to prevent loadash feature of Formik: https://github.com/jaredpalmer/formik/issues/2262
    const setField = useCallback(
        async (key: string, value: any, shouldValidate?: boolean) => {
            return setValues({ ...values, [key]: value }, shouldValidate);
        },
        [setValues, values]
    );

    const fieldKeys = fields && Object.keys(fields);

    return (
        <StyledSection
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
                <Form noValidate onSubmit={handleSubmit}>
                    <FieldContainer>
                        {fields &&
                            fieldKeys?.map((label, i) => {
                                const props = {
                                    index: i,
                                    field: fields[label],
                                    key: label,
                                    value: values[label],
                                    error: errors[label],
                                    isTouched: touched[label] || false,
                                    isInverted: isInverted,
                                    setField: setField,
                                    setTouched: setFieldTouched,
                                    validateField: validateField,
                                    handleChange: handleChange,
                                    handleBlur: handleBlur,
                                    validateOnBlur,
                                    validateOnChange,
                                    theme: theme,
                                } as FieldGenerationProps<any>;

                                switch (fields[label].type) {
                                    case 'Field': {
                                        if (definitions?.field) {
                                            return definitions.field(props);
                                        } else {
                                            return renderField(props);
                                        }
                                    }

                                    case 'Area': {
                                        if (definitions?.area) {
                                            return definitions.area(props);
                                        } else {
                                            return renderAreaField(props);
                                        }
                                    }

                                    case 'Datepicker': {
                                        if (definitions?.datepicker) {
                                            return definitions.datepicker(
                                                props
                                            );
                                        } else {
                                            return renderDatepickerField(props);
                                        }
                                    }

                                    case 'Location': {
                                        if (definitions?.location) {
                                            return definitions.location(props);
                                        } else {
                                            return renderLocationField(props);
                                        }
                                    }

                                    case 'FieldGroup': {
                                        if (
                                            (fields[label] as FieldGroup)
                                                .groupType === 'Checkbox'
                                        ) {
                                            if (definitions?.checkbox) {
                                                return definitions.checkbox(
                                                    props
                                                );
                                            } else {
                                                return renderCheckboxGroupField(
                                                    props
                                                );
                                            }
                                        } else {
                                            if (definitions?.radio) {
                                                return definitions.radio(props);
                                            } else {
                                                return renderRadioGroupField(
                                                    props
                                                );
                                            }
                                        }
                                    }

                                    case 'Select': {
                                        if (definitions?.select) {
                                            return definitions.select(props);
                                        } else {
                                            return renderSelectField(props);
                                        }
                                    }

                                    case 'Upload': {
                                        if (definitions?.upload) {
                                            return definitions.upload(props);
                                        } else {
                                            return renderUploadField(props);
                                        }
                                    }
                                    default:
                                        return null;
                                }
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
        </StyledSection>
    );
};

export const DynamicFormComponent = DynamicForm;
export default withLibTheme(DynamicForm);
