import React from 'react';
import styled from 'styled-components';
import {
    getColors as color,
    spacings,
    getGlobals as global,
} from 'utils/styles';
import Field, { FieldProps } from './Field';

const InputField = styled.input<{
    isInverted?: boolean;
    hasError?: boolean;
    isDisabled?: boolean;
    hasBack?: boolean;
}>`
    display: block;
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

    &::placeholder {
        color: ${({ theme }) => color(theme).elementBg.medium};
    }
`;

export type FormProps = FieldProps & {
    value?: string;
    name?: string;
    placeholder?: string;
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
    isRequired,
    isDisabled,
    isInverted,
    placeholder,
    value,
    name,
    onChange,
    onBlur,
}) => {
    return (
        <Field.View>
            <Field.Head
                label={label}
                isRequired={isRequired}
                isDisabled={isDisabled}
            />
            <Field.Content>
                <InputField
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
            </Field.Content>
            <Field.Messages
                infoMessage={infoMessage}
                errorMessage={errorMessage}
                isInverted={isInverted}
            />
        </Field.View>
    );
};

export default Textfield;
