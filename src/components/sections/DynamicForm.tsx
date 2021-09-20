import React, { FC, useContext } from 'react';
import styled, { DefaultTheme, ThemeContext } from 'styled-components';

import { getColors as color, spacings } from 'utils/styles';
import Section, { mapToBgMode } from 'components/base/Section';
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
import FileUpload from 'components/fields/FileUpload';

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
    [key: string]: Field | Area | Select | Datepicker | FieldGroup | FileUpload;
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
    validate?: (value: string, config: Field) => Promise<string>;
    errorMsg?: string;
}

export interface Area extends FormField {
    type: 'Area';
    initalValue?: string;
    placeholder?: string;
    info?: string;
    validate?: (value: string, config: Area) => Promise<string>;
    errorMsg?: string;
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
    validate?: (value: string, config: Select) => Promise<string>;
    errorMsg?: string;
}

export interface Datepicker extends FormField {
    type: 'Datepicker';
    initialDates?: [Date, Date];
    placeholder?: string;
    minDate?: Date;
    maxDate?: Date;
    singleSelect?: boolean;
    icon?: { src: string; alt?: string };
    info?: string;

    singleDateError?: string;
    mutliDateError?: string;
    nextCtrlUrl?: string;
    prevCtrlUrl?: string;
    validate?: (
        value: [Date | null, Date | null],
        config: Datepicker
    ) => Promise<string>;
    deleteAction?: (
        handleClick: (e: React.SyntheticEvent<HTMLButtonElement, Event>) => void
    ) => React.ReactNode;
    submitAction?: (
        handleClick?: (
            e: React.SyntheticEvent<HTMLButtonElement, Event>
        ) => void
    ) => React.ReactNode;
}

export interface FieldGroup extends FormField {
    type: 'FieldGroup';
    groupType: 'Radio' | 'Checkbox';
    fields: Array<{ initialChecked?: boolean; text?: string }>;
    validate?: (
        value: Array<string> | string,
        config: FieldGroup
    ) => Promise<string>;
    errorMsg?: string;
}

export interface FileUpload extends FormField {
    type: 'Upload';
    addBtnLabel?: string;
    removeBtnLabel?: string;
    info?: string;
    acceptedFormats?: string;
    validate?: (value: Array<File>, config: FileUpload) => Promise<string>;
    errorMsg?: string;
}

export interface FormData {
    [key: string]:
        | string
        | boolean
        | Array<string>
        | [Date | null, Date | null]
        | Array<File>;
}

type FieldTypes = Field | Area | Select | Datepicker | FieldGroup | FileUpload;

interface FieldGenerationProps<T extends FieldTypes> {
    index: number;
    field: T;
    formikValues: FormData;
    formikErrors: FormikErrors<FormData>;
    formikTouches: FormikTouched<FormData>;
    key: string;
    isInverted: boolean;
    hasBg: boolean;
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
}

const DynamicForm: FC<{
    fields?: FormStructure;
    submitLabel?: string;
    onSubmit?: (values: FormData) => Promise<void>;

    bgMode?: 'full' | 'inverted';
}> = ({
    fields,
    submitLabel = 'senden',
    onSubmit,

    bgMode,
}) => {
    const isInverted = bgMode === 'inverted';
    const hasBg = bgMode === 'full';

    // generate initial data and setup yup validation definition
    const initalData: FormData = {};

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
                    const inputType = config.inputType;

                    // custom validation
                    if (config.validate) {
                        errors[key] = await config.validate(
                            values[key] as string,
                            config
                        );
                        break;
                    }

                    // default
                    if (fields[key].isRequired && !values[key]) {
                        errors[key] =
                            (fields[key] as Field).errorMsg || 'Required field';
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
                                    (fields[key] as Field).errorMsg ||
                                    'Invalid Mail format';
                            }
                            break;
                        case 'tel':
                            // validator = validator.matches(
                            //     /^\+(?:[0-9]⋅?){6,14}[0-9]$/,
                            //     'Format der Telefonnummer ungültig'
                            // );
                            break;
                        case 'number':
                            if (
                                values[key] &&
                                !/^[+]?\d+([.]\d+)?$/gm.test(
                                    values[key] as string
                                )
                            ) {
                                errors[key] = 'Zahlenformat ungültig';
                            }
                            break;
                    }
                    break;
                }
                case 'Area': {
                    const config = fields[key] as Area;

                    // custom validation
                    if (config.validate) {
                        errors[key] = await config.validate(
                            values[key] as string,
                            config
                        );
                        break;
                    }

                    // default
                    if (config.isRequired && !values[key]) {
                        errors[key] =
                            (fields[key] as Area).errorMsg || 'Required field';
                    }
                    break;
                }
                case 'Select': {
                    const config = fields[key] as Select;

                    // custom validation
                    if (config.validate) {
                        errors[key] = await config.validate(
                            values[key] as string,
                            config
                        );
                        break;
                    }

                    // default
                    if (config.isRequired && !values[key]) {
                        errors[key] =
                            (fields[key] as Select).errorMsg ||
                            'Required field';
                    }
                    break;
                }
                case 'Datepicker': {
                    const config = fields[key] as Datepicker;
                    const single = config.singleSelect;
                    const value = values[key] as [Date | null, Date | null];

                    // custom validation
                    if (config.validate) {
                        errors[key] = await config.validate(
                            values[key] as [Date | null, Date | null],
                            config
                        );
                        break;
                    }

                    // default
                    if (config.isRequired && !values[key]) {
                        errors[key] = single
                            ? (fields[key] as Datepicker).singleDateError ||
                              'Please submit date!'
                            : (fields[key] as Datepicker).mutliDateError ||
                              'Please submit start- and enddate!';
                        break;
                    }

                    if (single && !value[0]) {
                        errors[key] =
                            (fields[key] as Datepicker).singleDateError ||
                            'Please submit date!';
                    } else if (!single && (!value[0] || !value[1])) {
                        errors[key] =
                            (fields[key] as Datepicker).mutliDateError ||
                            'Please submit start- and enddate!';
                    }
                    break;
                }
                case 'FieldGroup': {
                    const config = fields[key] as FieldGroup;
                    const type = config.groupType;

                    // custom validation
                    if (config.validate) {
                        errors[key] = await config.validate(
                            values[key] as Array<string> | string,
                            config
                        );
                        break;
                    }

                    // default
                    if (type === 'Checkbox') {
                        const selectValues = values[key] as string[];
                        if (
                            config.isRequired &&
                            (!selectValues || selectValues?.length < 1)
                        ) {
                            errors[key] =
                                (fields[key] as FieldGroup).errorMsg ||
                                'Please select at least one item!';
                        }
                        break;
                    }
                    if (type === 'Radio') {
                        const value = values[key] as string;
                        if (config.isRequired && !value) {
                            errors[key] =
                                (fields[key] as FieldGroup).errorMsg ||
                                'Selection required';
                        }
                    }
                    break;
                }
                case 'Upload': {
                    const config = fields[key] as FileUpload;
                    const files = values[key] as File[];

                    // custom validation
                    if (config.validate) {
                        errors[key] = await config.validate(
                            values[key] as Array<File>,
                            config
                        );
                        break;
                    }

                    // default
                    if (config.isRequired && (!files || files?.length < 1)) {
                        errors[key] =
                            (fields[key] as Field).errorMsg ||
                            'Please submit at least one file!';
                    }
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
            onSubmit && (await onSubmit(values));
            setSubmitting(false);
        },
        validateOnBlur: true,
        validateOnChange: true,
        // validationSchema: schema,
        validate: validation,
    });

    const theme = useContext(ThemeContext);

    return (
        <StyledSection
            addSeperation
            bgColor={
                isInverted
                    ? color(theme).dark
                    : bgMode
                    ? color(theme).mono.light
                    : 'transparent'
            }
            bgMode={mapToBgMode(bgMode, true)}
        >
            <Wrapper addWhitespace>
                <form noValidate onSubmit={handleSubmit}>
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
                                    isInverted: isInverted,
                                    hasBg: hasBg,
                                    setField: setFieldValue,
                                    setTouched: setFieldTouched,
                                    validateField: validateField,
                                    handleChange: handleChange,
                                    handleBlur: handleBlur,
                                    theme: theme,
                                } as FieldGenerationProps<any>;

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
                                    case 'Upload':
                                        return generateUpload(generationProps);
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
    isInverted,
    formikValues,
    formikTouches,
    formikErrors,
    setTouched,
    validateField,
    setField,
    theme,
}: FieldGenerationProps<FieldGroup>) => {
    const group = field;
    const groupData = formikValues[key] as string[];

    return (
        <div key={index}>
            <FieldHead>
                {key && (
                    <Copy type="copy-b" size="medium">
                        {`${key}${field.isRequired ? '*' : ''}`}
                    </Copy>
                )}
            </FieldHead>
            <Fields>
                {group?.fields?.map((field, ci) => (
                    <Checkbox
                        key={ci}
                        isInverted={isInverted}
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
                <ErrorMessage textColor={color(theme).error} size="small">
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
    isInverted,
    hasBg,
    setField,
    theme,
}: FieldGenerationProps<FieldGroup>) => {
    const group = field;
    const groupData = formikValues[key] as string;

    return (
        <div key={index}>
            <FieldHead>
                {key && (
                    <Copy type="copy-b" size="medium" isInverted={isInverted}>
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
                        isInverted={isInverted}
                        isSelected={
                            field.text ? groupData === field.text : false
                        }
                        onChange={(e) => {
                            if (field.text) {
                                setField(key, e.currentTarget.value);
                            }
                        }}
                        hasBg={!hasBg}
                    />
                ))}
            </Fields>
            {formikErrors[key] && formikTouches[key] && (
                <ErrorMessage textColor={color(theme).error} size="small">
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
    isInverted,
    hasBg,
    setField,
    setTouched,
    validateField,
}: FieldGenerationProps<Datepicker>) => {
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
            placeholder={field.placeholder}
            icon={field.icon}
            singleSelect={field.singleSelect}
            infoMessage={field.info}
            errorMessage={
                formikErrors[key] && formikTouches[key]
                    ? formikErrors[key]
                    : undefined
            }
            name={key}
            isInverted={isInverted}
            hasBg={!hasBg}
            deleteAction={field.deleteAction}
            submitAction={field.submitAction}
            nextCtrlUrl={field.nextCtrlUrl}
            prevCtrlUrl={field.prevCtrlUrl}
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
    isInverted,
    hasBg,
    handleChange,
}: FieldGenerationProps<Area>) => (
    <Textarea
        key={index}
        label={`${key}${field.isRequired ? '*' : ''}`}
        placeholder={field.placeholder}
        name={key}
        value={formikValues[key] as string}
        isInverted={isInverted}
        onChange={handleChange}
        infoMessage={field.info}
        errorMessage={
            formikErrors[key] && formikTouches[key]
                ? formikErrors[key]
                : undefined
        }
        lightBg={hasBg}
    />
);

const generateUpload = ({
    index,
    field,
    key,
    formikErrors,
    formikTouches,
    isInverted,
    hasBg,
    setField,
}: FieldGenerationProps<FileUpload>) => (
    <FileUpload
        key={index}
        label={`${key}${field.isRequired ? '*' : ''}`}
        name={key}
        infoMessage={field.info}
        addBtnLabel={field.addBtnLabel}
        removeBtnLabel={field.removeBtnLabel}
        errorMessage={
            formikErrors[key] && formikTouches[key]
                ? formikErrors[key]
                : undefined
        }
        acceptedFormats={field.acceptedFormats}
        onUploadFiles={(files) => {
            setField(key, files);
        }}
        hasBg={!hasBg}
        isInverted={isInverted}
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
    isInverted,
    hasBg,
}: FieldGenerationProps<Field>) => (
    <Textfield
        key={index}
        label={`${key}${field.isRequired ? '*' : ''}`}
        placeholder={field.placeholder}
        name={key}
        isInverted={isInverted}
        value={formikValues[key] as string}
        onChange={handleChange}
        infoMessage={field.info}
        errorMessage={
            formikErrors[key] && formikTouches[key]
                ? formikErrors[key]
                : undefined
        }
        lightBg={hasBg}
    />
);

const generateSelect = ({
    index,
    field,
    key,
    formikValues,
    formikErrors,
    formikTouches,
    isInverted,
    hasBg,
    setField,
    setTouched,
}: FieldGenerationProps<Select>) => (
    <SelectDropdown
        key={index}
        label={`${key}${field.isRequired ? '*' : ''}`}
        name={key}
        placeholder={field.placeholder}
        errorMessage={
            formikErrors[key] && formikTouches[key]
                ? formikErrors[key]
                : undefined
        }
        items={field.dropdownItems || []}
        value={formikValues[key] as string}
        onChange={(value) => {
            setField(key, value);
            setTouched(key, true);
        }}
        onBlur={() => setTouched(key, true, true)}
        icon={field.icon}
        isInverted={isInverted}
        hasBg={!hasBg}
    />
);
