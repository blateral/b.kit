import React from 'react';

import SelectDropdown from 'components/fields/SelectDropdown';
import { Select, FieldGenerationProps } from '../DynamicForm';

const renderSelectField = ({
    field,
    key,
    value,
    error,
    isTouched,
    isInverted,
    setField,
    setTouched,
    validateField,
    validateOnChange,
    validateOnBlur,
}: FieldGenerationProps<Select>) => (
    <SelectDropdown
        key={key}
        enableMemo
        label={`${key}${field.isRequired ? ' *' : ''}`}
        name={key}
        placeholder={field.placeholder}
        errorMessage={error && isTouched ? error : undefined}
        items={field.dropdownItems || []}
        value={value as string}
        onChange={async (value) => {
            await setField(key, value);
            await setTouched(key, true);
            if (validateOnChange) validateField(key);
        }}
        onBlur={() => setTouched(key, true, validateOnBlur)}
        indicator={field.indicator}
        isInverted={isInverted}
    />
);

export default renderSelectField;
