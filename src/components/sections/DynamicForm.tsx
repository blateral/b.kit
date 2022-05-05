import React, { FC, useCallback, useContext } from 'react';
import styled, { DefaultTheme, ThemeContext } from 'styled-components';

import { getColors as color, mq, spacings } from 'utils/styles';
import { withLibTheme } from 'utils/LibThemeProvider';
import Section, { mapToBgMode } from 'components/base/Section';
import { Field, FormikErrors, useFormik } from 'formik';
import Wrapper from 'components/base/Wrapper';
import Actions from 'components/blocks/Actions';
import Button from 'components/buttons/Button';
import ButtonGhost from 'components/buttons/ButtonGhost';
import Datepicker from 'components/fields/Datepicker';
import Checkbox from 'components/fields/Checkbox';
import RadioButton from 'components/fields/Radio';
import Textarea from 'components/fields/Textarea';
import Textfield from 'components/fields/Textfield';
import SelectDropdown from 'components/fields/SelectDropdown';
import Copy from 'components/typography/Copy';
import FileUpload from 'components/fields/FileUpload';
import FieldWrapper from 'components/fields/Field';

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
    [key: string]: Field | Area | Select | Datepicker | FieldGroup | FileUpload;
}

export interface FormField {
    isRequired?: boolean;
    column?: 'left' | 'right';
}

export interface Field extends FormField {
    type: 'Field';
    inputType?: 'text' | 'number' | 'email' | 'password' | 'tel';
    initialValue?: string;
    placeholder?: string;
    info?: string;
    icon?: { src: string; alt?: string };
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
    icon?: { src: string; alt?: string };
    validate?: (key: string, value: string, config: Select) => Promise<string>;
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
    customIcon?: () => React.ReactNode;

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
    customIcon: () => React.ReactNode;
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
    | Array<File>;

type FieldTypes = Field | Area | Select | Datepicker | FieldGroup | FileUpload;

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
}

const DynamicForm: FC<{
    /** ID value for targeting section with anchor hashes */
    anchorId?: string;
    fields?: FormStructure;
    onSubmit?: (values: FormData) => Promise<void>;
    submitAction?: (props: {
        isInverted?: boolean;
        handleSubmit?: () => Promise<any>;
        isDisabled?: boolean;
    }) => React.ReactNode;
    targetEmails?: string;
    subjectLine?: string;
    bgMode?: 'full' | 'inverted';
    definitions?: {
        field?: (props: FieldGenerationProps<Field>) => React.ReactNode;
        area?: (props: FieldGenerationProps<Area>) => React.ReactNode;
        select?: (props: FieldGenerationProps<Select>) => React.ReactNode;
        datepicker?: (
            props: FieldGenerationProps<Datepicker>
        ) => React.ReactNode;
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

                    // default
                    if (fields[key].isRequired && !values[key]) {
                        errors[key] =
                            (fields[key] as Field).errorMsg || 'Required field';
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
                                    (fields[key] as Field).errorMsg ||
                                    'Invalid Mail format';
                            }
                            break;
                        case 'tel':
                            if (
                                values[key] &&
                                /[A-Z]/gi.test(values[key] as string)
                            ) {
                                errors[key] =
                                    (fields[key] as Field).errorMsg ||
                                    'Ungültige Telefonnummer';
                            }
                            break;
                        case 'number':
                            if (
                                values[key] &&
                                !/^[+]?\d+([.]\d+)?$/gm.test(
                                    values[key] as string
                                )
                            ) {
                                errors[key] =
                                    (fields[key] as Field).errorMsg ||
                                    'Zahlenformat ungültig';
                            }
                            break;
                    }
                    break;
                }
                case 'Area': {
                    const config = fields[key] as Area;

                    // default
                    if (config.isRequired && !values[key]) {
                        errors[key] =
                            (fields[key] as Area).errorMsg || 'Required field';
                    }

                    // custom validation
                    if (config.validate) {
                        const error = await config.validate(
                            key,
                            values[key] as string,
                            config
                        );
                        if (error) errors[key] = error;
                    }
                    break;
                }
                case 'Select': {
                    const config = fields[key] as Select;

                    // default
                    if (config.isRequired && !values[key]) {
                        errors[key] =
                            (fields[key] as Select).errorMsg ||
                            'Required field';
                    }

                    // custom validation
                    if (config.validate) {
                        const error = await config.validate(
                            key,
                            values[key] as string,
                            config
                        );
                        if (error) errors[key] = error;
                    }
                    break;
                }
                case 'Datepicker': {
                    const config = fields[key] as Datepicker;
                    const single = config.singleSelect;
                    const value = values[key] as [Date | null, Date | null];

                    // default
                    if (config.isRequired && !values[key]) {
                        errors[key] = single
                            ? (fields[key] as Datepicker).singleDateError ||
                              'Please submit date!'
                            : (fields[key] as Datepicker).multiDateError ||
                              'Please submit start- and enddate!';
                    } else if (config.isRequired && single && !value[0]) {
                        errors[key] =
                            (fields[key] as Datepicker).singleDateError ||
                            'Please submit date!';
                    } else if (
                        config.isRequired &&
                        !single &&
                        (!value[0] || !value[1])
                    ) {
                        errors[key] =
                            (fields[key] as Datepicker).multiDateError ||
                            'Please submit start- and enddate!';
                    }

                    // custom validation
                    if (config.validate) {
                        const error = await config.validate(
                            key,
                            values[key] as [Date | null, Date | null],
                            config
                        );
                        if (error) errors[key] = error;
                    }
                    break;
                }
                case 'FieldGroup': {
                    const config = fields[key] as FieldGroup;
                    const type = config.groupType;

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
                    } else if (type === 'Radio') {
                        const value = values[key] as string;
                        if (config.isRequired && !value) {
                            errors[key] =
                                (fields[key] as FieldGroup).errorMsg ||
                                'Selection required';
                        }
                    }

                    // custom validation
                    if (config.validate) {
                        const error = await config.validate(
                            key,
                            values[key] as Array<string> | string,
                            config
                        );
                        if (error) errors[key] = error;
                    }
                    break;
                }
                case 'Upload': {
                    const config = fields[key] as FileUpload;
                    const files = values[key] as File[];

                    // default
                    if (config.isRequired && (!files || files?.length < 1)) {
                        errors[key] =
                            (fields[key] as Field).errorMsg ||
                            'Please submit at least one file!';
                    }

                    // custom validation
                    if (config.validate) {
                        const error = await config.validate(
                            key,
                            values[key] as Array<File>,
                            config
                        );
                        if (error) errors[key] = error;
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
        // validationSchema: schema,
        validate: validation,
    });

    const theme = useContext(ThemeContext);

    // rewrite setFieldValue to prevent loadash feature of Formik: https://github.com/jaredpalmer/formik/issues/2262
    const setField = useCallback(
        async (key: string, value: any, shouldValidate?: boolean) => {
            return setValues({ ...values, [key]: value }, shouldValidate);
        },
        [setValues, values]
    );

    const leftColumn =
        fields &&
        Object.keys(fields).filter(
            (l) => !fields[l].column || fields[l].column === 'left'
        );

    const rightColumn =
        fields &&
        Object.keys(fields).filter((l) => fields[l].column === 'right');

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
                            leftColumn?.map((label, i) => {
                                const generationProps = {
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
                                    theme: theme,
                                } as FieldGenerationProps<any>;

                                switch (fields[label].type) {
                                    case 'Field':
                                        return definitions?.field
                                            ? definitions.field(generationProps)
                                            : generateField(generationProps);
                                    case 'Area':
                                        return definitions?.area
                                            ? definitions.area(generationProps)
                                            : generateArea(generationProps);
                                    case 'Datepicker':
                                        return definitions?.datepicker
                                            ? definitions.datepicker(
                                                  generationProps
                                              )
                                            : generateDatepicker(
                                                  generationProps
                                              );
                                    case 'FieldGroup': {
                                        if (
                                            (fields[label] as FieldGroup)
                                                .groupType === 'Checkbox'
                                        ) {
                                            return definitions?.checkbox
                                                ? definitions.checkbox(
                                                      generationProps
                                                  )
                                                : generateCheckboxGroup(
                                                      generationProps
                                                  );
                                        } else {
                                            return definitions?.radio
                                                ? definitions.radio(
                                                      generationProps
                                                  )
                                                : generateRadioGroup(
                                                      generationProps
                                                  );
                                        }
                                    }
                                    case 'Select':
                                        return definitions?.select
                                            ? definitions.select(
                                                  generationProps
                                              )
                                            : generateSelect(generationProps);
                                    case 'Upload':
                                        return definitions?.upload
                                            ? definitions.upload(
                                                  generationProps
                                              )
                                            : generateUpload(generationProps);
                                    default:
                                        return null;
                                }
                            })}
                    </FieldContainer>
                    {rightColumn && rightColumn.length > 0 && (
                        <FieldContainer>
                            {fields &&
                                rightColumn?.map((label, i) => {
                                    const generationProps = {
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
                                        theme: theme,
                                    } as FieldGenerationProps<any>;

                                    switch (fields[label].type) {
                                        case 'Field':
                                            return definitions?.field
                                                ? definitions.field(
                                                      generationProps
                                                  )
                                                : generateField(
                                                      generationProps
                                                  );
                                        case 'Area':
                                            return definitions?.area
                                                ? definitions.area(
                                                      generationProps
                                                  )
                                                : generateArea(generationProps);
                                        case 'Datepicker':
                                            return definitions?.datepicker
                                                ? definitions.datepicker(
                                                      generationProps
                                                  )
                                                : generateDatepicker(
                                                      generationProps
                                                  );
                                        case 'FieldGroup': {
                                            if (
                                                (fields[label] as FieldGroup)
                                                    .groupType === 'Checkbox'
                                            ) {
                                                return definitions?.checkbox
                                                    ? definitions.checkbox(
                                                          generationProps
                                                      )
                                                    : generateCheckboxGroup(
                                                          generationProps
                                                      );
                                            } else {
                                                return definitions?.radio
                                                    ? definitions.radio(
                                                          generationProps
                                                      )
                                                    : generateRadioGroup(
                                                          generationProps
                                                      );
                                            }
                                        }
                                        case 'Select':
                                            return definitions?.select
                                                ? definitions.select(
                                                      generationProps
                                                  )
                                                : generateSelect(
                                                      generationProps
                                                  );
                                        case 'Upload':
                                            return definitions?.upload
                                                ? definitions.upload(
                                                      generationProps
                                                  )
                                                : generateUpload(
                                                      generationProps
                                                  );
                                        default:
                                            return null;
                                    }
                                })}
                        </FieldContainer>
                    )}
                </Form>
                {fields && (
                    <ActionContainer
                        hasCols={rightColumn && rightColumn.length > 0}
                    >
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

const FieldSet = styled.fieldset`
    display: block;
    border: none;
    background: none;
    outline: none;
    padding: 0;
    margin-left: 0;
    margin-right: 0;
    text-align: left;
`;

export const DynamicFormComponent = DynamicForm;
export default withLibTheme(DynamicForm);

const Fields = styled.div`
    & > * + * {
        margin-top: ${spacings.nudge}px;
    }
`;

const ErrorMessage = styled(Copy)`
    text-align: left;
    margin-top: ${spacings.nudge * 2}px;
    padding-left: ${spacings.nudge}px;
`;

const generateCheckboxGroup = ({
    field,
    key,
    isInverted,
    value,
    isTouched,
    error,
    info,
    setTouched,
    validateField,
    setField,
}: FieldGenerationProps<FieldGroup>) => {
    const group = field;
    const groupData = value as string[];

    return (
        <FieldSet key={key}>
            {key && (
                <FieldWrapper.Head
                    isInverted={isInverted}
                    label={key}
                    isRequired={field.isRequired}
                />
            )}

            <Fields>
                {group?.fields?.map((field, ci) => (
                    <Checkbox
                        key={ci}
                        isInverted={isInverted}
                        onChange={(ev) => {
                            const value = ev.currentTarget.value;

                            // add key to form data array if not exists. Otherwise remove it
                            if (value) {
                                const cIndex = groupData.indexOf(value);
                                if (cIndex === -1) {
                                    groupData.push(value);
                                } else {
                                    groupData.splice(cIndex, 1);
                                }
                                // set formik values
                                setField(key, groupData);
                                setTouched(key, true);
                                validateField(key);
                            }
                        }}
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
            {isTouched && error && (
                <FieldWrapper.Messages
                    errorMessage={error}
                    infoMessage={info}
                />
            )}
        </FieldSet>
    );
};

const generateRadioGroup = ({
    field,
    key,
    value,
    error,
    isTouched,
    isInverted,
    setField,
    theme,
}: FieldGenerationProps<FieldGroup>) => {
    const group = field;
    const groupData = value as string;

    return (
        <FieldSet key={key}>
            {key && (
                <FieldWrapper.Head
                    isInverted={isInverted}
                    label={key}
                    isRequired={field.isRequired}
                />
            )}
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
                    />
                ))}
            </Fields>
            {error && isTouched && (
                <ErrorMessage textColor={color(theme).text.error} size="small">
                    {error}
                </ErrorMessage>
            )}
        </FieldSet>
    );
};

const generateDatepicker = ({
    field,
    key,
    value,
    error,
    isTouched,
    isInverted,
    setField,
    setTouched,
    validateField,
}: FieldGenerationProps<Datepicker>) => {
    const dates = value as [Date | null, Date | null];

    const handleSubmit = async (start?: Date | null, end?: Date | null) => {
        await setField(key, [start || null, end || null]);
        await setTouched(key, true);
        validateField(key);
    };

    return (
        <Datepicker
            key={key}
            onSubmit={handleSubmit}
            onDataChange={handleSubmit}
            values={[dates?.[0] as Date, dates?.[1] as Date]}
            label={`${key}${field.isRequired ? '*' : ''}`}
            placeholder={field.placeholder}
            singleSelect={field.singleSelect}
            infoMessage={field.info}
            errorMessage={error && isTouched ? error : undefined}
            name={key}
            customIcon={field.customIcon}
            isInverted={isInverted}
            minDate={field.minDate}
            maxDate={field.maxDate}
            deleteAction={(handleReset) =>
                field?.deleteAction ? (
                    field.deleteAction(handleReset)
                ) : (
                    <ButtonGhost.View onClick={handleReset}>
                        delete
                    </ButtonGhost.View>
                )
            }
            submitAction={(handleSubmit) =>
                field?.submitAction ? (
                    field.submitAction(handleSubmit)
                ) : (
                    <Button.View onClick={handleSubmit}>submit</Button.View>
                )
            }
            nextCtrlUrl={field.nextCtrlUrl}
            prevCtrlUrl={field.prevCtrlUrl}
        />
    );
};

const generateArea = ({
    field,
    key,
    value,
    error,
    isTouched,
    isInverted,
    handleChange,
    handleBlur,
}: FieldGenerationProps<Area>) => (
    <Textarea
        key={key}
        label={`${key}${field.isRequired ? '*' : ''}`}
        placeholder={field.placeholder}
        name={`['${key}']`}
        value={value as string}
        isInverted={isInverted}
        onChange={handleChange}
        onBlur={handleBlur}
        infoMessage={field.info}
        errorMessage={error && isTouched ? error : undefined}
    />
);

const generateUpload = ({
    field,
    key,
    error,
    isTouched,
    isInverted,
    setField,
}: FieldGenerationProps<FileUpload>) => (
    <FileUpload
        key={key}
        label={`${key}${field.isRequired ? '*' : ''}`}
        name={key}
        infoMessage={field.info}
        uploadLabel={field.addBtnLabel}
        removeUploadLabel={field.removeBtnLabel}
        errorMessage={error && isTouched ? error : undefined}
        acceptedFormats={field.acceptedFormats}
        onUploadFiles={(files) => {
            setField(key, files);
        }}
        customIcon={field.customIcon}
        isInverted={isInverted}
    />
);

const generateField = ({
    field,
    key,
    value,
    error,
    isTouched,
    handleChange,
    handleBlur,
    isInverted,
}: FieldGenerationProps<Field>) => (
    <Textfield
        key={key}
        label={`${key}${field.isRequired ? '*' : ''}`}
        placeholder={field.placeholder}
        name={`['${key}']`}
        type={field.inputType}
        isInverted={isInverted}
        value={value as string}
        onChange={handleChange}
        onBlur={handleBlur}
        infoMessage={field.info}
        errorMessage={error && isTouched ? error : undefined}
    />
);

const generateSelect = ({
    field,
    key,
    value,
    error,
    isTouched,
    isInverted,
    setField,
    setTouched,
    validateField,
}: FieldGenerationProps<Select>) => (
    <SelectDropdown
        key={key}
        label={`${key}${field.isRequired ? '*' : ''}`}
        name={key}
        placeholder={field.placeholder}
        errorMessage={error && isTouched ? error : undefined}
        items={field.dropdownItems || []}
        value={value as string}
        onChange={async (value) => {
            await setField(key, value);
            await setTouched(key, true);
            validateField(key);
        }}
        onBlur={() => setTouched(key, true, true)}
        icon={field.icon}
        isInverted={isInverted}
    />
);
