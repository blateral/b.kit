import React from 'react';

import LocationField, { LocationData } from 'components/fields/LocationField';
import { FieldGenerationProps } from '../DynamicForm';
import { Location } from '../DynamicForm';

const renderLocationField = ({
    key,
    field,
    value,
    error,
    isTouched,
    isInverted,
    setField,
    setTouched,
    validateField,
}: FieldGenerationProps<Location>) => {
    const locationData = value as LocationData;

    const handleChange = async (location: LocationData) => {
        await setField(key, location);
        await setTouched(key, true);

        validateField(key);
    };

    return (
        <LocationField
            key={key}
            name={`['${key}']`}
            label={`${key}${field.isRequired ? ' *' : ''}`}
            placeholder={field.placeholder}
            isInverted={isInverted}
            infoMessage={field.info}
            errorMessage={error && isTouched ? error : undefined}
            value={locationData}
            onChange={handleChange}
            toggleAction={field.toggleAction}
            customAddressIcon={field.customAddressIcon}
            customLocationIcon={field.customLocationIcon}
        />
    );
};

export default renderLocationField;
