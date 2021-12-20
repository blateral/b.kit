import Copy from 'components/typography/Copy';
import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { hexToRgba } from 'utils/hexRgbConverter';
import { getColors as color, spacings } from 'utils/styles';

const View = styled.div`
    text-align: left;
`;

const FieldHead = styled.div`
    display: flex;
    flex-direction: row;
    align-items: top;
    justify-content: space-between;
    padding-bottom: ${spacings.nudge * 3}px;
    padding-left: ${spacings.nudge}px;
    padding-right: ${spacings.nudge}px;
`;

const Field = styled.input<{
    isInverted?: boolean;
    hasError?: boolean;
    isDisabled?: boolean;
    hasBack?: boolean;
}>`
    display: block;
    outline: none;
    width: 100%;
    min-height: 60px;
    box-shadow: none;
    border: none;
    border-radius: 0px;
    outline: none;
    -webkit-appearance: none;

    padding: ${spacings.nudge * 2}px ${spacings.spacer}px;
    border: ${({ hasError, theme }) =>
        hasError ? `2px solid ${color(theme).error}` : '2px solid transparent'};
    background-color: ${({ isInverted, hasBack, theme }) =>
        isInverted || !hasBack ? color(theme).light : color(theme).mono.light};

    font-weight: inherit;
    font-family: inherit;
    font-size: inherit;
    color: ${({ hasError, theme }) =>
        hasError ? color(theme).error : 'inherit'};

    pointer-events: ${({ isDisabled }) => isDisabled && 'none'};

    &:active {
        border: ${({ theme }) =>
            `2px solid ${hexToRgba(color(theme).dark, 0.2)}`};
    }

    &:focus {
        border: ${({ theme }) =>
            `2px solid ${hexToRgba(color(theme).dark, 0.2)}`};
    }

    &::placeholder {
        color: ${({ theme }) => hexToRgba(color(theme).dark, 0.4)};
    }
`;

const InfoMessage = styled(Copy)`
    margin-top: ${spacings.nudge * 2}px;
    padding-left: ${spacings.nudge}px;
`;

const ErrorMessage = styled(Copy)`
    margin-top: ${spacings.nudge * 2}px;
    padding-left: ${spacings.nudge}px;
`;

export type FormProps = {
    label?: string;
    errorMessage?: string;
    infoMessage?: string;

    value?: string;
    name?: string;
    placeholder?: string;
    isRequired?: boolean;
    isDisabled?: boolean;
};

const Textfield: React.FC<
    FormProps & {
        type?: 'number' | 'text' | 'tel' | 'email' | 'password';
        isInverted?: boolean;
        lightBg?: boolean;
        onChange?: (ev: React.SyntheticEvent<HTMLInputElement>) => void;
        onBlur?: (ev: React.SyntheticEvent<HTMLInputElement>) => void;
    }
> = ({
    lightBg,
    type = 'text',
    label,
    errorMessage,
    infoMessage,
    placeholder,
    value,
    name,
    isInverted,
    isDisabled,
    isRequired,
    onChange,
    onBlur,
}) => {
    const theme = useContext(ThemeContext);

    return (
        <View>
            <FieldHead>
                {label && (
                    <Copy
                        isInverted={isInverted}
                        textColor={
                            isDisabled ? color(theme).mono.dark : undefined
                        }
                        size="medium"
                        type="copy-b"
                    >
                        {`${label}${isRequired ? ' *' : ''}`}
                    </Copy>
                )}
            </FieldHead>
            <Copy type="copy">
                <Field
                    hasBack={!lightBg}
                    placeholder={placeholder}
                    hasError={!!errorMessage}
                    type={type}
                    isInverted={isInverted}
                    isDisabled={isDisabled}
                    name={name}
                    value={value}
                    required={isRequired}
                    onChange={onChange}
                    onBlur={onBlur}
                />
            </Copy>
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

export default Textfield;
