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
}: FieldGenerationProps<Location>) => {
    const locationData = value as LocationData;
    const mappedData = {
        ...locationData,
        position:
            !locationData?.position?.[0] && !locationData?.position?.[1]
                ? undefined
                : locationData.position,
    };

    const handleChange = (location: LocationData) => {
        // https://github.com/jaredpalmer/formik/issues/2083
        setTouched(key, true, false);
        setField({
            key,
            value: { ...location },
            shouldValidate: true,
        });
    };

    return (
        <LocationField
            key={key}
            enableMemo
            name={`['${key}']`}
            label={`${key}${field.isRequired ? ' *' : ''}`}
            placeholder={field.placeholder}
            initialMapCenter={field.initialMapCenter}
            zoom={field.zoom}
            isInverted={isInverted}
            infoMessage={field.info}
            errorMessage={error && isTouched ? error : undefined}
            value={mappedData}
            onChange={handleChange}
            customLocationControl={field.customLocationControl}
            customToggle={field.customToggle}
            customResetControl={field.customResetControl}
            toggleLabel={field.toggleLabel}
            trackLocationLabel={field.trackLocationLabel}
        />
    );
};

export default renderLocationField;
