import React from 'react';
import styled from 'styled-components';

import RadioButton from 'components/fields/Radio';
import { FieldGenerationProps, FieldGroup } from '../DynamicForm';
import FieldWrapper from 'components/fields/FormField';
import { spacings } from 'utils/styles';
import Checkbox from 'components/fields/Checkbox';

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

const Fields = styled.div`
    & > * + * {
        margin-top: ${spacings.nudge}px;
    }
`;

export const renderRadioGroupField = ({
    key,
    field,
    value,
    error,
    isTouched,
    isInverted,
    info,
    setField,
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
                                setField({
                                    key,
                                    value: e.currentTarget.value,
                                });
                            }
                        }}
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

export const renderCheckboxGroupField = ({
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
                                setField({
                                    key,
                                    value: groupData,
                                });
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
