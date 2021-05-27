import * as React from 'react';
import styled, { ThemeContext } from 'styled-components';
import Section, { BgMode } from 'components/base/Section';
import { HeadlineTag } from 'components/typography/Heading';
import { spacings, mq, getColors as color, withRange } from 'utils/styles';
import Textfield, { FormProps } from 'components/fields/Textfield';
import Textarea from 'components/fields/Textarea';
import Checkbox from 'components/fields/Checkbox';
import Wrapper from 'components/base/Wrapper';
import Intro from 'components/blocks/Intro';
import { Field, Formik } from 'formik';
import { FormEvent } from 'react';

const StyledIntro = styled(Intro)`
    ${withRange([spacings.spacer * 2, spacings.spacer * 3], 'padding-bottom')}
`;

const FieldsContainer = styled.div`
    padding-bottom: 30px;

    & > * > * + * {
        padding-top: 30px;
    }

    @media ${mq.medium} {
        display: flex;
        flex-direction: row;
        align-items: top;
    }

    @media ${mq.semilarge} {
        width: 70%;
    }
`;

const FlexContainer = styled.div`
    flex: 1 0 50%;
    width: 100%;

    & + & {
        padding-top: 30px;
    }

    @media ${mq.medium} {
        & + & {
            padding-top: 0;
            padding-left: 30px;
        }
    }
`;

const ActionWrapper = styled.div`
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

export type FormFieldProps = Omit<FormProps, 'value' | 'name'>;

const Form: React.FC<{
    title?: string;
    titleAs?: HeadlineTag;
    superTitle?: string;
    superTitleAs?: HeadlineTag;
    text?: string;

    primaryAction?: (isInverted?: boolean) => React.ReactNode;
    secondaryAction?: (isInverted?: boolean) => React.ReactNode;
    submitAction?: (props: {
        isInverted?: boolean;
        additionalProps: { type: string; as: 'button' | 'a' };
    }) => React.ReactNode;
    onSubmit?: (data: FormData) => void;

    isInverted?: boolean;
    bgMode?: BgMode;

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
    bgMode,
    isInverted = false,
    title,
    titleAs,
    superTitle,
    superTitleAs,
    text,
    primaryAction,
    secondaryAction,
    submitAction,
    onSubmit,
    formFields,
    checkbox,
}) => {
    const theme = React.useContext(ThemeContext);

    return (
        <Section
            addSeperation
            bgColor={
                isInverted
                    ? color(theme).dark
                    : bgMode
                    ? color(theme).mono.light
                    : 'transparent'
            }
            bgMode={!isInverted ? bgMode : undefined}
        >
            <Wrapper clampWidth="normal" addWhitespace>
                {title && (
                    <StyledIntro
                        title={title}
                        titleAs={titleAs}
                        superTitle={superTitle}
                        superTitleAs={superTitleAs}
                        text={text}
                        primaryAction={primaryAction}
                        secondaryAction={secondaryAction}
                        isInverted={isInverted}
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
                    onSubmit={async (values) => {
                        onSubmit && onSubmit(values);
                    }}
                >
                    {({ handleSubmit, setFieldValue, values }) => (
                        <form
                            onSubmit={(e: FormEvent<HTMLFormElement>) => {
                                e.preventDefault();
                                handleSubmit(e);
                            }}
                        >
                            <FieldsContainer>
                                <FlexContainer>
                                    <Field
                                        label={
                                            formFields.name?.label || 'Vorname'
                                        }
                                        placeholder={
                                            formFields.name?.placeholder
                                        }
                                        infoMessage={
                                            formFields.name?.infoMessage
                                        }
                                        as={Textfield}
                                        name="name"
                                        isRequired={formFields.name?.isRequired}
                                        errorMessage={
                                            formFields.name?.errorMessage
                                        }
                                        optionalLabel={
                                            formFields.name?.optionalLabel
                                        }
                                        isInverted={isInverted}
                                    />
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
                                        errorMessage={
                                            formFields.surname?.errorMessage
                                        }
                                        optionalLabel={
                                            formFields.name?.optionalLabel
                                        }
                                        isInverted={isInverted}
                                    />
                                    <Field
                                        type="email"
                                        label={
                                            formFields.mail?.label || 'E-Mail'
                                        }
                                        placeholder={
                                            formFields.mail?.placeholder
                                        }
                                        infoMessage={
                                            formFields.mail?.infoMessage
                                        }
                                        as={Textfield}
                                        name="mail"
                                        isRequired={formFields.mail?.isRequired}
                                        errorMessage={
                                            formFields.mail?.errorMessage
                                        }
                                        optionalLabel={
                                            formFields.name?.optionalLabel
                                        }
                                        isInverted={isInverted}
                                    />
                                    <Field
                                        type="tel"
                                        label={
                                            formFields.phone?.label || 'Telefon'
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
                                        errorMessage={
                                            formFields.phone?.errorMessage
                                        }
                                        optionalLabel={
                                            formFields.name?.optionalLabel
                                        }
                                        isInverted={isInverted}
                                    />
                                </FlexContainer>
                                <FlexContainer>
                                    <Field
                                        label={
                                            formFields.area?.label || 'Textfeld'
                                        }
                                        placeholder={
                                            formFields.area?.placeholder
                                        }
                                        infoMessage={
                                            formFields.area?.infoMessage
                                        }
                                        name="area"
                                        as={Textarea}
                                        isRequired={formFields.area?.isRequired}
                                        errorMessage={
                                            formFields.area?.errorMessage
                                        }
                                        optionalLabel={
                                            formFields.name?.optionalLabel
                                        }
                                        isInverted={isInverted}
                                    />
                                </FlexContainer>
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
                                <ActionWrapper>
                                    {submitAction &&
                                        submitAction({
                                            isInverted,
                                            additionalProps: {
                                                type: 'submit',
                                                as: 'button',
                                            },
                                        })}
                                </ActionWrapper>
                            )}
                        </form>
                    )}
                </Formik>
            </Wrapper>
        </Section>
    );
};

export default Form;
