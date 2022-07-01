import React from 'react';

import Textfield from 'components/fields/Textfield';
import { Field, FieldGenerationProps } from '../DynamicForm';

const renderField = ({
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
        label={`${key}${field.isRequired ? ' *' : ''}`}
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

export default renderField;
