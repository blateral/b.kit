import Copy from 'components/typography/Copy';
import React, { FC, useEffect, useContext, useState, useRef } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { getColors as color, spacings } from 'utils/styles';
import { FormProps } from './Textfield';

const View = styled.div`
    text-align: left;
`;

const Label = styled(Copy)``;

const FieldHead = styled.div`
    display: flex;
    flex-direction: row;
    align-items: top;
    justify-content: space-between;
    padding-bottom: ${spacings.nudge * 3}px;
    padding-left: ${spacings.nudge}px;
    padding-right: ${spacings.nudge}px;
`;

const FieldWrapper = styled.div<{ hasError?: boolean; hasBg?: boolean }>`
    border: ${({ hasError, theme }) =>
        hasError ? `2px solid ${color(theme).error}` : '2px solid transparent'};
    background: ${({ theme, hasBg }) =>
        hasBg ? color(theme).mono.light : color(theme).light};
    padding: ${spacings.nudge * 3}px;

    &:focus-within {
        border: ${({ hasError, theme }) =>
            hasError
                ? `2px solid ${color(theme).error}`
                : '2px solid transparent'};
    }

    & > * {
        flex: 1 1 auto;
    }
`;

const FieldMain = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    & > * + * {
        margin-left: ${spacings.spacer}px;
    }
`;

const Original = styled.input`
    display: none;
`;

const InputView = styled.div<{ isDisabled?: boolean }>`
    display: block;
    border: 1px solid
        ${({ isDisabled, theme }) =>
            isDisabled ? color(theme).mono.medium : 'rgba(56, 56, 56, 0.94)'};
    cursor: pointer;
    outline: none;
    width: 100%;
    max-height: 60px;
    max-width: max-content;
    box-shadow: none;
    outline: none;
    -webkit-appearance: none;

    padding: ${spacings.nudge}px ${spacings.nudge * 3}px;

    font-weight: inherit;
    font-family: inherit;
    font-size: inherit;

    pointer-events: ${({ isDisabled }) => isDisabled && 'none'};

    transition: all 0.2s ease-in-out;

    &:hover {
        border: 1px solid transparent;
        background: ${({ theme }) => color(theme).dark};

        & > * {
            color: ${({ theme }) => color(theme).light};
        }
    }

    &:active {
        color: ${({ theme }) => color(theme).dark};

        &::placeholder {
            color: ${({ theme }) => color(theme).dark};
        }
    }

    &:focus {
        color: ${({ theme }) => color(theme).dark};

        &::placeholder {
            color: ${({ theme }) => color(theme).dark};
        }
    }
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
        color: ${({ theme }) => color(theme).error};
    }

    &:hover {
        & > * {
            text-decoration: underline;
        }
    }
`;

const FileLabel = styled(Copy)``;

const InfoMessage = styled(Copy)`
    margin-top: ${spacings.nudge * 2}px;
    padding-left: ${spacings.nudge}px;
`;

const ErrorMessage = styled(Copy)`
    margin-top: ${spacings.nudge * 2}px;
    padding-left: ${spacings.nudge}px;
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
        isInverted?: boolean;
        hasBg?: boolean;
        addBtnLabel?: string;
        removeBtnLabel?: string;
        acceptedFormats?: string;
    }
> = ({
    onUploadFiles,
    label,
    isDisabled,
    isRequired,
    errorMessage,
    infoMessage,
    isInverted,
    hasBg,
    addBtnLabel,
    removeBtnLabel,
    acceptedFormats,
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

    return (
        <View>
            <FieldHead>
                {label && (
                    <Label
                        isInverted={isInverted}
                        textColor={
                            isDisabled ? color(theme).mono.medium : undefined
                        }
                        size="medium"
                        type="copy-b"
                    >
                        {label}
                        {isRequired && '*'}
                    </Label>
                )}
            </FieldHead>
            <FieldWrapper
                hasError={!!errorMessage}
                hasBg={hasBg && !isInverted}
            >
                <FieldMain>
                    <InputView
                        onClick={(event: any) => {
                            event.preventDefault();
                            fileInputRef.current?.click();
                        }}
                        isDisabled={isDisabled}
                    >
                        <Copy
                            textColor={
                                isDisabled
                                    ? color(theme).mono.medium
                                    : undefined
                            }
                            size="medium"
                            type="copy-b"
                        >
                            {addBtnLabel || 'Select file'}
                        </Copy>
                    </InputView>
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
                                        ? color(theme).mono.medium
                                        : undefined
                                }
                                size="medium"
                                type="copy-b"
                            >
                                {removeBtnLabel || 'Clear selection'}
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
                            <FileLabel>{fileName}</FileLabel>
                        </File>
                    );
                })}
            </FieldWrapper>
            {infoMessage && (
                <InfoMessage textColor={color(theme).mono.dark} size="small">
                    {infoMessage}
                </InfoMessage>
            )}
            {errorMessage && (
                <ErrorMessage
                    textColor={color(theme).error}
                    size="small"
                    type="copy-i"
                >
                    {errorMessage
                        ? errorMessage
                        : 'Bitte geben Sie einen gültigen Text ein'}
                </ErrorMessage>
            )}
        </View>
    );
};

export default FileUpload;
