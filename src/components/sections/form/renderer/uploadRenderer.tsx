import FileUploadCmp from 'components/fields/FileUpload';
import React from 'react';

import { FileUpload, FieldGenerationProps } from '../DynamicForm';

const renderUploadField = ({
    field,
    key,
    error,
    isTouched,
    isInverted,
    setField,
}: FieldGenerationProps<FileUpload>) => (
    <FileUploadCmp
        key={key}
        label={`${key}${field.isRequired ? ' *' : ''}`}
        name={key}
        infoMessage={field.info}
        uploadLabel={field.addBtnLabel}
        errorMessage={error && isTouched ? error : undefined}
        acceptedFormats={field.acceptedFormats}
        onUploadFiles={(files) => {
            setField(key, files);
        }}
        customUploadIcon={field.customUploadIcon}
        customDeleteIcon={field.customDeleteIcon}
        isInverted={isInverted}
    />
);

export default renderUploadField;
