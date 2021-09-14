import Copy from 'components/typography/Copy';
import * as React from 'react';
import styled, { ThemeContext } from 'styled-components';
import { hexToRgba } from 'utils/hexRgbConverter';
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

const FieldWrapper = styled.div<{ hasError?: boolean }>`
    background-color: ${({ theme }) => color(theme).light};
    padding: ${spacings.nudge * 3}px;
    border: 1px solid
        ${({ hasError }) => (hasError ? '#ff0000' : 'transparent')};

    &:focus-within {
        border: 1px solid
            ${({ hasError, theme }) =>
                hasError ? '#ff0000' : color(theme).primary.medium};
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
        background: ${({ theme }) =>
            hexToRgba(color(theme).primary.medium, 0.25)};
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

    &:hover {
        & > * {
            text-decoration: underline;
        }
    }
`;

const FileLabel = styled.div``;

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

const FileUpload: React.FC<
    FormProps & {
        onUploadFiles?: (files: FileList) => void;
    }
> = ({
    onUploadFiles,
    label,
    isDisabled,
    isRequired,
    errorMessage,
    infoMessage,
}) => {
    const theme = React.useContext(ThemeContext);
    const [selectedFiles, setSelectedFiles] = React.useState<FileList | null>(
        null
    );
    const fileInputRef = React.useRef<HTMLInputElement | null>(null);

    const [previews, setPreviews] = React.useState<Preview[]>([]);

    React.useEffect(() => {
        if (selectedFiles) {
            const promises = Array.from(selectedFiles).map((file) => {
                return readFileAsync(file);
            });

            Promise.all(promises).then((p) => {
                setPreviews([...previews, ...p]);
            });

            if (onUploadFiles) {
                onUploadFiles(selectedFiles);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedFiles]);

    return (
        <View>
            <FieldHead>
                {label && (
                    <Label
                        textColor={
                            isDisabled ? color(theme).mono.medium : 'inherit'
                        }
                        size="medium"
                        type="copy-b"
                    >
                        {label}
                        {isRequired && '*'}
                    </Label>
                )}
            </FieldHead>
            <FieldWrapper hasError={!!errorMessage}>
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
                                    : 'inherit'
                            }
                            size="medium"
                            type="copy-b"
                        >
                            Datei auswählen
                        </Copy>
                    </InputView>
                    {previews.length > 0 && (
                        <Delete
                            onClick={() => {
                                if (fileInputRef && fileInputRef.current) {
                                    fileInputRef.current.value = '';
                                    setSelectedFiles(null);
                                    setPreviews([]);
                                }
                            }}
                        >
                            <Copy
                                textColor={
                                    isDisabled
                                        ? color(theme).mono.medium
                                        : '#ff0000'
                                }
                                size="medium"
                                type="copy-b"
                            >
                                Auswahl löschen
                            </Copy>
                        </Delete>
                    )}
                </FieldMain>

                <Original
                    onChange={(e) => setSelectedFiles(e.currentTarget.files)}
                    type="file"
                    ref={fileInputRef}
                    multiple
                    required={isRequired}
                    disabled={isDisabled}
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
                <InfoMessage textColor={color(theme).dark} size="small">
                    {infoMessage}
                </InfoMessage>
            )}
            {errorMessage && (
                <ErrorMessage textColor={'#ff0000'} size="small">
                    {errorMessage
                        ? errorMessage
                        : 'Bitte geben Sie einen gültigen Text ein'}
                </ErrorMessage>
            )}
        </View>
    );
};

export default FileUpload;
