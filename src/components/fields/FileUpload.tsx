import Copy, { copyStyle } from 'components/typography/Copy';
import React, { FC, useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import {
    getColors as color,
    getFonts as font,
    spacings,
    getGlobals as global,
} from 'utils/styles';
import FieldWrapper from './FormField';
import { FormProps } from './Textfield';

const FieldMain = styled.button<{
    isInverted?: boolean;
    hasError?: boolean;
    isDisabled?: boolean;
}>`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    & > * + * {
        margin-left: ${spacings.spacer}px;
    }

    outline: none;
    width: 100%;
    min-height: 36px;
    box-shadow: none;

    border-radius: 0px;
    -webkit-appearance: none;

    padding: ${spacings.nudge}px;

    border: 1px solid
        ${({ theme, isInverted, hasError }) => {
            if (isInverted) {
                return hasError
                    ? color(theme).errorInverted
                    : color(theme).elementBg.light;
            }
            return hasError ? color(theme).error : color(theme).elementBg.dark;
        }};
    border-radius: ${({ theme }) => global(theme).sections.edgeRadius};

    background: transparent;

    ${copyStyle('copy', 'small')}
    color: ${({ theme, isInverted, hasError }) => {
        if (isInverted) {
            return hasError
                ? color(theme).text.errorInverted
                : color(theme).text.subtileInverted;
        }
        return hasError ? color(theme).text.error : color(theme).text.subtile;
    }};

    &:active {
        border: ${({ theme, isInverted }) =>
            `1px solid ${
                isInverted
                    ? color(theme).primary.inverted
                    : color(theme).primary.default
            }`};
    }

    &:focus {
        outline: ${({ theme, isInverted }) =>
            `1px solid ${
                isInverted
                    ? color(theme).primary.inverted
                    : color(theme).primary.default
            }`};
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

const Delete = styled.span<{ isInverted?: boolean }>`
    cursor: pointer;

    color: ${({ theme, isInverted }) =>
        isInverted ? color(theme).text.errorInverted : color(theme).text.error};

    @media (hover: hover) and (pointer: fine) {
        &:hover {
            text-decoration: underline;
        }
    }
`;

const Icon = styled.div<{ isInverted?: boolean }>`
    height: 100%;
    color: ${({ theme, isInverted }) =>
        isInverted
            ? font(theme).copy.small.colorInverted
            : font(theme).copy.small.color};

    & > * {
        height: 25px;
        width: 30px;
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
        customIcon?: (isInverted?: boolean) => React.ReactNode;
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
    customIcon,
}) => {
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const [previews, setPreviews] = useState<Preview[]>([]);

    if (isDisabled) {
        errorMessage = '';
    }

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
        <FieldWrapper.View isDisabled={isDisabled}>
            <FieldWrapper.Head
                label={label}
                isRequired={isRequired}
                isInverted={isInverted}
            />
            <FieldWrapper.Content>
                <FieldMain
                    isInverted={isInverted}
                    isDisabled={isDisabled}
                    hasError={!!errorMessage}
                    onClick={(ev) => {
                        ev.preventDefault();
                        handleClick && handleClick(ev);
                    }}
                >
                    {previews.length <= 0 && <span>{uploadLabel}</span>}
                    {previews.length > 0 && (
                        <Delete
                            isInverted={isInverted}
                            onClick={(ev) => {
                                ev.preventDefault();
                                ev.stopPropagation();

                                if (fileInputRef && fileInputRef.current) {
                                    fileInputRef.current.value = '';
                                    setSelectedFiles([]);
                                    setPreviews([]);
                                }
                            }}
                        >
                            {removeUploadLabel || 'Clear selection'}
                        </Delete>
                    )}
                    {customIcon && (
                        <Icon isInverted={isInverted}>
                            {customIcon(isInverted)}
                        </Icon>
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
