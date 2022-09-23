import React from 'react';
import DatepickerCmp from 'components/fields/Datepicker';
import { Datepicker, FieldGenerationProps } from '../DynamicForm';
import ButtonGhost from 'components/buttons/ButtonGhost';
import Button from 'components/buttons/Button';

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

    const handleSubmit = async (start?: Date | null, end?: Date | null) => {
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
            onSubmit={handleSubmit}
            onDataChange={handleSubmit}
            values={[dates?.[0] as Date, dates?.[1] as Date]}
            label={`${key}${field.isRequired ? ' *' : ''}`}
            placeholder={field.placeholder}
            singleSelect={field.singleSelect}
            infoMessage={field.info}
            errorMessage={error && isTouched ? error : undefined}
            name={key}
            customIcon={field?.customIcon}
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

export default renderDatepickerField;
