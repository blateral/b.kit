import { copyStyle } from 'components/typography/Copy';
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
import * as Icons from 'components/base/icons/Icons';

const FieldView = styled(FieldWrapper.View)`
    pointer-events: none;
`;

const FieldMain = styled.div<{
    isInverted?: boolean;
    hasError?: boolean;
    isDisabled?: boolean;
}>`
    display: flex;
    flex-direction: column;
    justify-content: center;

    outline: none;
    width: 100%;
    min-height: 40px;
    box-shadow: none;

    border-radius: 0px;
    -webkit-appearance: none;
    background: none;

    padding: 0 ${spacings.nudge}px;

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

    ${copyStyle('copy', 'small')}

    color: ${({ theme, isInverted }) =>
        isInverted
            ? font(theme).copy.small.colorInverted
            : font(theme).copy.small.color};

    &:focus-within {
        outline: ${({ theme, isInverted }) =>
            `1px solid ${
                isInverted
                    ? color(theme).primary.inverted
                    : color(theme).primary.default
            }`};
        outline-offset: 0;
    }
`;

const FileItem = styled.div<{ isInverted?: boolean }>`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    ${copyStyle('copy', 'small')}

    padding: ${spacings.nudge}px 0;
    width: 100%;

    * + & {
        border-top: 1px dashed
            ${({ theme, isInverted }) =>
                isInverted
                    ? color(theme).elementBg.light
                    : color(theme).elementBg.dark};
    }

    & > span {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`;

const UploadItem = styled.button<{ isInverted?: boolean }>`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    padding: ${spacings.nudge}px 0;
    background: none;
    outline: none;
    border: none;

    width: 100%;
    cursor: pointer;
    pointer-events: all;

    ${copyStyle('copy', 'small')}
    color: ${({ theme, isInverted }) =>
        isInverted
            ? color(theme).text.subtileInverted
            : color(theme).text.subtile};

    * + & {
        border-top: 1px dashed
            ${({ theme, isInverted }) =>
                isInverted
                    ? color(theme).elementBg.light
                    : color(theme).elementBg.dark};
    }

    & > span {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    &:focus {
        text-decoration: underline;
    }

    &:focus:not(:focus-visible) {
        text-decoration: none;
    }
`;

const Icon = styled.span<{ isInverted?: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 100%;
    min-width: 24px;
    margin-left: auto;

    color: ${({ theme, isInverted }) =>
        isInverted
            ? font(theme).copy.small.colorInverted
            : font(theme).copy.small.color};

    pointer-events: none;

    & > * {
        height: 20px;
    }
`;

const DeleteIcon = styled.button<{ isInverted?: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 100%;
    min-width: 24px;
    margin-left: auto;

    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    pointer-events: all;

    color: ${({ theme, isInverted }) =>
        isInverted
            ? font(theme).copy.small.colorInverted
            : font(theme).copy.small.color};

    transition: opacity 0.2s ease-in-out;

    & > * {
        height: 20px;
    }

    @media (hover: hover) and (pointer: fine) {
        &:hover {
            opacity: 0.8;
        }
    }

    &:focus {
        outline: solid 2px
            ${({ theme, isInverted }) =>
                isInverted
                    ? color(theme).primary.inverted
                    : color(theme).primary.default};
    }

    &:focus:not(:focus-visible) {
        outline: none;
    }
`;

const Original = styled.input`
    display: none;
`;

interface Preview {
    uid: string;
    type: string;
    url: string | null;
    isUploading?: boolean;
}

interface SelectedFile {
    uid: string;
    data: File;
}

const readFileAsync = (file: File, uid: string) =>
    new Promise<Preview>((resolve) => {
        resolve({
            uid: uid,
            type: file.type,
            url: file.name,
            isUploading: true,
        });

        const reader = new FileReader();

        reader.onload = () => {
            resolve({
                uid: uid,
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
        customDeleteIcon?: (isInverted?: boolean) => React.ReactNode;
        customUploadIcon?: (isInverted?: boolean) => React.ReactNode;
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
    customDeleteIcon,
    customUploadIcon,
}) => {
    const [selectedFiles, setSelectedFiles] = useState<SelectedFile[]>([]);
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const [previews, setPreviews] = useState<Preview[]>([]);

    if (isDisabled) {
        errorMessage = '';
    }

    useEffect(() => {
        if (selectedFiles) {
            onUploadFiles && onUploadFiles(selectedFiles.map((f) => f.data));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedFiles]);

    const handleClick = (ev: React.MouseEvent<HTMLButtonElement>) => {
        ev.preventDefault();

        fileInputRef.current?.click();
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.currentTarget.files) return;

        const newFiles = Array.from(e.currentTarget.files).map<SelectedFile>(
            (f, i) => ({
                uid: `${new Date().getTime().toString()}_${i}`,
                data: f,
            })
        );

        const promises = newFiles.map<Promise<Preview>>((file) => {
            return readFileAsync(file.data, file.uid);
        });

        Promise.all(promises).then((p) => {
            setPreviews((prev) => [...prev, ...p]);
        });

        setSelectedFiles((prev) => [...prev, ...newFiles]);
    };

    const handleDelete =
        (preview: Preview) => (ev: React.MouseEvent<HTMLButtonElement>) => {
            ev.preventDefault();
            ev.stopPropagation();

            if (!fileInputRef.current) return;
            fileInputRef.current.value = '';

            // remove element from previews
            setPreviews((prev) => {
                const index = prev.findIndex((p) => p.uid === preview.uid);
                if (index < 0) return prev;

                const copy = [...prev];
                copy.splice(index, 1);
                return copy;
            });

            // remove alement from selected files
            setSelectedFiles((prev) => {
                const index = prev.findIndex((p) => p.uid === preview.uid);
                if (index < 0) return prev;

                const copy = [...prev];
                copy.splice(index, 1);
                return copy;
            });
        };

    return (
        <FieldView isDisabled={isDisabled}>
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
                >
                    {previews.map((file) => {
                        const fileName =
                            (file.url && file.url.split('/')) || [];
                        return (
                            <FileItem key={file.uid} isInverted={isInverted}>
                                <span>{fileName}</span>
                                <DeleteIcon
                                    aria-label="remove file"
                                    type="button"
                                    isInverted={isInverted}
                                    onClick={handleDelete(file)}
                                >
                                    {customDeleteIcon ? (
                                        customDeleteIcon(isInverted)
                                    ) : (
                                        <Icons.DeleteForever />
                                    )}
                                </DeleteIcon>
                            </FileItem>
                        );
                    })}
                    <UploadItem
                        type="button"
                        isInverted={isInverted}
                        onClick={handleClick}
                    >
                        {uploadLabel && <span>{uploadLabel}</span>}
                        <Icon isInverted={isInverted}>
                            {customUploadIcon ? (
                                customUploadIcon(isInverted)
                            ) : (
                                <Icons.UploadFile />
                            )}
                        </Icon>
                    </UploadItem>
                </FieldMain>
                <Original
                    type="file"
                    onChange={handleChange}
                    ref={fileInputRef}
                    multiple
                    required={isRequired}
                    disabled={isDisabled}
                    accept={acceptedFormats}
                />
            </FieldWrapper.Content>
            <FieldWrapper.Messages
                infoMessage={infoMessage}
                errorMessage={errorMessage}
                isInverted={isInverted}
            />
        </FieldView>
    );
};

export default FileUpload;
