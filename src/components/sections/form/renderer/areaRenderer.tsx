import React from 'react';

import Textarea from 'components/fields/Textarea';
import { Area, FieldGenerationProps } from '../DynamicForm';

const renderAreaField = ({
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
        enableMemo
        label={`${key}${field.isRequired ? ' *' : ''}`}
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

export default renderAreaField;
