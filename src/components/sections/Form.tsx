import * as React from 'react';
import styled, { ThemeContext } from 'styled-components';
import Section from 'components/base/Section';
import { HeadlineTag } from 'components/typography/Heading';
import { spacings, mq, getColors as color, withRange } from 'utils/styles';
import Textfield, { FormProps } from 'components/fields/Textfield';
import Textarea from 'components/fields/Textarea';
import Checkbox from 'components/fields/Checkbox';
import Wrapper from 'components/base/Wrapper';
import Intro from 'components/blocks/Intro';
import { Field, Formik } from 'formik';
import { FormEvent } from 'react';
import Actions from 'components/blocks/Actions';

const StyledIntro = styled(Intro)`
    ${withRange([spacings.spacer * 2, spacings.spacer * 3], 'padding-bottom')}
`;

const FieldsContainer = styled.div`
    padding-bottom: 30px;
    max-width: 1150px;

    & > * > * + * {
        padding-top: 30px;
    }

    @media ${mq.medium} {
        display: flex;
        flex-direction: row;
        align-items: top;
    }
`;

const FlexContainer = styled.div`
    flex: 0 1 50%;
    width: 100%;
    max-width: 650px;

    & + & {
        padding-top: 30px;
    }

    @media ${mq.medium} {
        & + & {
            padding-top: 0;
            margin-left: 30px;
        }
    }
`;

const ActionWrapper = styled(Actions)`
    margin-top: ${spacings.spacer * 3}px;
`;

export interface FormData {
    name?: string;
    surname?: string;
    mail?: string;
    phone?: string;
    area?: string;
    check?: boolean;
}

export type FormFieldProps = Omit<FormProps, 'value' | 'name' | 'errorMessage'>;
export type FormDataErrors = { [key in keyof FormData]: string };

const Form: React.FC<{
    title?: string;
    titleAs?: HeadlineTag;
    superTitle?: string;
    superTitleAs?: HeadlineTag;
    intro?: string;

    primaryAction?: (isInverted?: boolean) => React.ReactNode;
    secondaryAction?: (isInverted?: boolean) => React.ReactNode;
    submitAction?: (props: {
        isInverted?: boolean;
        additionalProps: { type: 'submit'; as: 'button' | 'a' };
        isDisabled?: boolean;
    }) => React.ReactNode;
    onSubmit?: (data: FormData) => void;
    validation?: (values: FormData, errors: FormDataErrors) => FormDataErrors;
    yupValidationSchema?: any;

    isInverted?: boolean;
    hasBack?: boolean;

    formFields: {
        name?: FormFieldProps;
        surname?: FormFieldProps;
        mail?: FormFieldProps;
        phone?: FormFieldProps;
        area?: FormFieldProps;
    };

    checkbox?: {
        label?: string;
        name?: string;
        value?: string;
        isDisabled?: boolean;
    };
}> = ({
    hasBack,
    isInverted = false,
    title,
    titleAs,
    superTitle,
    superTitleAs,
    intro,
    primaryAction,
    secondaryAction,
    submitAction,
    onSubmit,
    formFields,
    checkbox,
    yupValidationSchema,
    validation,
}) => {
    const theme = React.useContext(ThemeContext);

    const isEmpty = (obj: any) => {
        return (
            obj && Object.keys(obj).length === 0 && obj.constructor === Object
        );
    };

    return (
        <Section
            addSeperation
            bgColor={
                isInverted
                    ? color(theme).dark
                    : hasBack
                    ? color(theme).mono.light
                    : 'transparent'
            }
        >
            <Wrapper clampWidth="normal" addWhitespace>
                {title && (
                    <StyledIntro
                        title={title}
                        titleAs={titleAs}
                        superTitle={superTitle}
                        superTitleAs={superTitleAs}
                        text={intro}
                        primaryAction={primaryAction}
                        secondaryAction={secondaryAction}
                        colorMode={isInverted ? 'inverted' : 'default'}
                    />
                )}
                <Formik
                    initialValues={
                        {
                            name: '',
                            surname: '',
                            phone: '',
                            area: '',
                            mail: '',
                            check: false,
                        } as FormData
                    }
                    validate={(values) => {
                        let errors: FormDataErrors = {};
                        if (validation)
                            errors = validation(
                                values,
                                errors
                            ) as FormDataErrors;
                        return errors;
                    }}
                    validationSchema={yupValidationSchema}
                    onSubmit={async (values) => {
                        onSubmit && onSubmit(values);
                    }}
                >
                    {({
                        handleSubmit,
                        setFieldValue,
                        values,
                        errors,
                        isValid,
                        dirty,
                    }) => (
                        <form
                            onSubmit={(e: FormEvent<HTMLFormElement>) => {
                                e.preventDefault();
                                handleSubmit(e);
                            }}
                        >
                            <FieldsContainer>
                                <FlexContainer>
                                    {formFields.name && (
                                        <Field
                                            label={
                                                formFields.name?.label ||
                                                'Vorname'
                                            }
                                            placeholder={
                                                formFields.name?.placeholder
                                            }
                                            infoMessage={
                                                formFields.name?.infoMessage
                                            }
                                            as={Textfield}
                                            name="name"
                                            isRequired={
                                                formFields.name?.isRequired
                                            }
                                            errorMessage={errors.name}
                                            isInverted={isInverted}
                                            lightBg={hasBack}
                                        />
                                    )}
                                    {formFields.surname && (
                                        <Field
                                            label={
                                                formFields.surname?.label ||
                                                'Nachname'
                                            }
                                            placeholder={
                                                formFields.surname?.placeholder
                                            }
                                            infoMessage={
                                                formFields.surname?.infoMessage
                                            }
                                            as={Textfield}
                                            name="surname"
                                            isRequired={
                                                formFields.surname?.isRequired
                                            }
                                            errorMessage={errors.surname}
                                            isInverted={isInverted}
                                            lightBg={hasBack}
                                        />
                                    )}
                                    {formFields.mail && (
                                        <Field
                                            type="email"
                                            label={
                                                formFields.mail?.label ||
                                                'E-Mail'
                                            }
                                            placeholder={
                                                formFields.mail?.placeholder
                                            }
                                            infoMessage={
                                                formFields.mail?.infoMessage
                                            }
                                            as={Textfield}
                                            name="mail"
                                            isRequired={
                                                formFields.mail?.isRequired
                                            }
                                            errorMessage={errors.mail}
                                            isInverted={isInverted}
                                            lightBg={hasBack}
                                        />
                                    )}
                                    {formFields.phone && (
                                        <Field
                                            type="tel"
                                            label={
                                                formFields.phone?.label ||
                                                'Telefon'
                                            }
                                            placeholder={
                                                formFields.phone?.placeholder
                                            }
                                            infoMessage={
                                                formFields.phone?.infoMessage
                                            }
                                            as={Textfield}
                                            name="phone"
                                            isRequired={
                                                formFields.phone?.isRequired
                                            }
                                            errorMessage={errors.phone}
                                            isInverted={isInverted}
                                            lightBg={hasBack}
                                        />
                                    )}
                                </FlexContainer>
                                {formFields.area && (
                                    <FlexContainer>
                                        <Field
                                            label={
                                                formFields.area?.label ||
                                                'Textfeld'
                                            }
                                            placeholder={
                                                formFields.area?.placeholder
                                            }
                                            infoMessage={
                                                formFields.area?.infoMessage
                                            }
                                            name="area"
                                            as={Textarea}
                                            isRequired={
                                                formFields.area?.isRequired
                                            }
                                            errorMessage={errors.area}
                                            isInverted={isInverted}
                                            lightBg={hasBack}
                                        />
                                    </FlexContainer>
                                )}
                            </FieldsContainer>
                            {checkbox && (
                                <Field
                                    onClick={() => {
                                        setFieldValue('check', !values.check);
                                    }}
                                    value={values.check}
                                    isSelected={values.check}
                                    isDisabled={checkbox.isDisabled}
                                    name="check"
                                    as={Checkbox}
                                    label={
                                        checkbox.label ||
                                        'Ich habe die Datenschutzbestimmungen zu Kenntnis genommen und aktzeptiere.'
                                    }
                                    isInverted={isInverted}
                                    isRequired
                                />
                            )}
                            {submitAction && (
                                <ActionWrapper
                                    primary={
                                        submitAction &&
                                        submitAction({
                                            isInverted,
                                            isDisabled:
                                                !dirty ||
                                                !isValid ||
                                                !isEmpty(errors),
                                            additionalProps: {
                                                type: 'submit',
                                                as: 'button',
                                            },
                                        })
                                    }
                                />
                            )}
                        </form>
                    )}
                </Formik>
            </Wrapper>
        </Section>
    );
};

export default Form;
