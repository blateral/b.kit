import Copy from 'components/typography/Copy';
import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import {
    getColors as color,
    spacings,
    getGlobals as global,
} from 'utils/styles';

const View = styled(Copy)`
    display: block;
    text-align: left;
`;

const FieldHead = styled(Copy)`
    display: inline-flex;
    flex-direction: row;
    align-items: top;
    justify-content: space-between;
    padding-bottom: ${spacings.nudge}px;
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

const FieldMessage = styled(Copy)`
    margin-top: ${spacings.nudge}px;
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
        <View renderAs="label">
            {label && (
                <FieldHead
                    renderAs="span"
                    isInverted={isInverted}
                    textColor={
                        isDisabled ? color(theme).elementBg.medium : undefined
                    }
                    size="medium"
                    type="copy-b"
                >
                    {`${label}${isRequired ? ' *' : ''}`}
                </FieldHead>
            )}
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
            {infoMessage && (
                <FieldMessage
                    textColor={
                        isInverted
                            ? color(theme).text.inverted
                            : color(theme).text.default
                    }
                    size="small"
                    type="copy"
                >
                    {infoMessage}
                </FieldMessage>
            )}
            {errorMessage && (
                <FieldMessage
                    textColor={color(theme).text.error}
                    size="small"
                    type="copy"
                >
                    {errorMessage
                        ? errorMessage
                        : 'Bitte geben Sie einen gültigen Text ein'}
                </FieldMessage>
            )}
        </View>
    );
};

export default Textfield;
