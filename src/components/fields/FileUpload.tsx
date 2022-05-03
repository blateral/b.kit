import Copy from 'components/typography/Copy';
import React, { FC, useEffect, useContext, useState, useRef } from 'react';
import styled, { ThemeContext } from 'styled-components';
import {
    getColors as color,
    spacings,
    getGlobals as global,
} from 'utils/styles';
import FieldWrapper from './Field';
import { FormProps } from './Textfield';

const FieldMain = styled.div<{
    isInverted?: boolean;
    hasError?: boolean;
    isDisabled?: boolean;
}>`
    display: flex;
    flex-direction: row;
    align-items: center;

    & > * + * {
        margin-left: ${spacings.spacer}px;
    }

    outline: none;
    width: 100%;
    min-height: 50px;
    box-shadow: none;

    border-radius: 0px;
    -webkit-appearance: none;

    padding: ${spacings.nudge}px;

    border: 1px solid
        ${({ theme, isInverted, hasError }) =>
            hasError
                ? color(theme).error
                : isInverted
                ? color(theme).elementBg.light
                : color(theme).elementBg.dark};
    border-radius: ${({ theme }) => global(theme).sections.edgeRadius};

    background: transparent;

    font-weight: inherit;
    font-family: inherit;
    font-size: inherit;
    color: ${({ hasError, theme, isInverted }) =>
        hasError
            ? color(theme).text.error
            : isInverted
            ? color(theme).text.inverted
            : color(theme).text.default};

    pointer-events: ${({ isDisabled }) => isDisabled && 'none'};

    &:active {
        border: ${({ theme }) => `1px solid ${color(theme).primary.default}`};
    }

    &:focus {
        outline: ${({ theme }) => `1px solid ${color(theme).primary.default}`};
        outline-offset: 0;
    }
`;

const Original = styled.input`
    display: none;
`;

const File = styled.div`
    margin-top: ${spacings.nudge * 2}px;
    margin-left: ${spacings.nudge * 3}px;

    display: flex;
    flex-direction: row;
    align-items: center;

    & > * + * {
        margin-left: ${spacings.nudge * 3}px;
    }
`;

const Delete = styled.div`
    cursor: pointer;

    & > * {
        color: ${({ theme }) => color(theme).text.error};
    }

    &:hover {
        & > * {
            text-decoration: underline;
        }
    }
`;

interface Preview {
    type: string;
    url: string | null;
    isUploading?: boolean;
}

const readFileAsync = (file: File) =>
    new Promise<Preview>((resolve) => {
        resolve({
            type: file.type,
            url: file.name,
            isUploading: true,
        });

        const reader = new FileReader();

        reader.onload = () => {
            resolve({
                type: file.type,
                url: file.name,
                isUploading: true,
            });
        };
        reader.readAsDataURL(file);
    });

const FileUpload: FC<
    Omit<FormProps, 'value' | 'placeholder'> & {
        onUploadFiles?: (files: File[]) => void;
        acceptedFormats?: string;
        uploadLabel?: string;
        removeUploadLabel?: string;
    }
> = ({
    onUploadFiles,
    label,
    isInverted,
    isDisabled,
    isRequired,
    infoMessage,
    errorMessage,
    acceptedFormats,
    uploadLabel,
    removeUploadLabel,
}) => {
    const theme = useContext(ThemeContext);
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const [previews, setPreviews] = useState<Preview[]>([]);

    useEffect(() => {
        if (selectedFiles) {
            onUploadFiles && onUploadFiles(selectedFiles);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedFiles]);

    const handleClick = (ev: React.MouseEvent<HTMLButtonElement>) => {
        ev.preventDefault();
        fileInputRef.current?.click();
    };

    return (
        <FieldWrapper.View>
            <FieldWrapper.Head
                label={label}
                isRequired={isRequired}
                isDisabled={isDisabled}
            />
            <FieldWrapper.Content>
                <FieldMain
                    isInverted={isInverted}
                    isDisabled={isDisabled}
                    onClick={() => handleClick}
                >
                    {previews.length < 0 && (
                        <Copy
                            textColor={color(theme).elementBg.medium}
                            size="medium"
                            type="copy"
                        >
                            {uploadLabel}
                        </Copy>
                    )}
                    {previews.length > 0 && (
                        <Delete
                            onClick={() => {
                                if (fileInputRef && fileInputRef.current) {
                                    fileInputRef.current.value = '';
                                    setSelectedFiles([]);
                                    setPreviews([]);
                                }
                            }}
                        >
                            <Copy
                                textColor={
                                    isDisabled
                                        ? color(theme).elementBg.medium
                                        : undefined
                                }
                                size="medium"
                                type="copy-b"
                            >
                                {removeUploadLabel || 'Clear selection'}
                            </Copy>
                        </Delete>
                    )}
                </FieldMain>

                <Original
                    onChange={(e) => {
                        if (e.currentTarget.files) {
                            const files = Array.from(e.currentTarget.files);

                            const promises = files.map((file) => {
                                return readFileAsync(file);
                            });

                            Promise.all(promises).then((p) => {
                                setPreviews((prev) => [...prev, ...p]);
                            });

                            setSelectedFiles((prev) => [...prev, ...files]);
                        }
                    }}
                    type="file"
                    ref={fileInputRef}
                    multiple
                    required={isRequired}
                    disabled={isDisabled}
                    accept={acceptedFormats}
                />
                {previews.map((file, i) => {
                    const fileName = (file.url && file.url.split('/')) || [];
                    return (
                        <File key={i}>
                            <Copy>{fileName}</Copy>
                        </File>
                    );
                })}
            </FieldWrapper.Content>
            <FieldWrapper.Messages
                infoMessage={infoMessage}
                errorMessage={errorMessage}
                isInverted={isInverted}
            />
        </FieldWrapper.View>
    );
};

export default FileUpload;
