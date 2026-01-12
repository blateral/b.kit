import DatepickerCmp from 'components/fields/Datepicker';
import React from 'react';
import { Datepicker, FieldGenerationProps } from '../DynamicForm';

const renderDatepickerField = ({
    key,
    field,
    value,
    error,
    isTouched,
    isInverted,
    setField,
    setTouched,
    validateField,
}: FieldGenerationProps<Datepicker>) => {
    const dates = value as [Date | null, Date | null];

    const handleChange = async (start?: Date | null, end?: Date | null) => {
        await setTouched(key, true);
        await setField({
            key,
            value: [start || null, end || null],
        });
        validateField(key);
    };

    return (
        <DatepickerCmp
            key={key}
            enableMemo
            onChange={handleChange}
            values={[dates?.[0] as Date, dates?.[1] as Date]}
            label={`${key}${field.isRequired ? ' *' : ''}`}
            placeholder={field.placeholder}
            infoMessage={field.info}
            errorMessage={error && isTouched ? error : undefined}
            name={key}
            isInverted={isInverted}
            minDate={field.minDate}
            maxDate={field.maxDate}
            singleSelect={field.singleSelect}
            visibleMonths={field.visibleMonths}
            shouldCloseOnSelect={field.shouldCloseOnSelect}
            submitLabel={field.submitLabel}
            clearLabel={field.clearLabel}
            customHeader={field.customHeader}
            customFooter={field.customFooter}
            customIcon={field?.customIcon}
        />
    );
};

export default renderDatepickerField;
