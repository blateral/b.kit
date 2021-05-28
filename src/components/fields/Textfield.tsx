import Copy from 'components/typography/Copy';
import * as React from 'react';
import styled, { ThemeContext } from 'styled-components';
import { getColors as color, spacings } from 'utils/styles';

const View = styled.div``;

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

    /* border: ${({ isInverted, theme }) =>
        isInverted
            ? '2px solid transparent'
            : `2px solid ${color(theme).mono.medium}`}; */
    border: ${({ hasError }) =>
        hasError ? '2px solid #ff0000' : '2px solid transparent'};
    background-color: ${({ isInverted, hasBack, theme }) =>
        isInverted || !hasBack ? color(theme).light : color(theme).mono.light};

    font-weight: inherit;
    font-family: inherit;
    font-size: inherit;
    color: ${({ hasError }) => (hasError ? '#ff0000' : 'inherit')};

    pointer-events: ${({ isDisabled }) => isDisabled && 'none'};

    &:active {
        border: ${({ theme }) => `2px solid ${color(theme).primary.medium}`};
    }

    &:focus {
        border: ${({ theme }) => `2px solid ${color(theme).primary.medium}`};
    }

    ::placeholder {
        color: ${({ theme }) => color(theme).secondary.light};
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

const OptionalLabel = styled(Copy)`
    margin-left: auto;
`;

export type FormProps = {
    label?: string;
    optionalLabel?: string;
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
        type?: 'text' | 'email' | 'tel';
        isInverted?: boolean;
        lightBg?: boolean;
        onChange?: (ev: React.SyntheticEvent<HTMLInputElement>) => void;
    }
> = ({
    lightBg,
    type = 'text',
    label,
    optionalLabel = 'Optional*',
    errorMessage,
    infoMessage,
    placeholder,
    value,
    name,
    isInverted,
    isDisabled,
    isRequired,
    onChange,
}) => {
    const theme = React.useContext(ThemeContext);
    return (
        <View>
            <FieldHead>
                {label && (
                    <Copy
                        textColor={
                            isDisabled
                                ? color(theme).mono.dark
                                : color(theme).primary.medium
                        }
                        size="small"
                    >
                        {label}
                    </Copy>
                )}
                {!isRequired && optionalLabel && (
                    <OptionalLabel
                        textColor={color(theme).mono.dark}
                        size="small"
                    >
                        {optionalLabel}
                    </OptionalLabel>
                )}
            </FieldHead>
            <Copy textColor={color(theme).secondary.dark} type="copy-b">
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
                />
            </Copy>
            {infoMessage && (
                <InfoMessage textColor={color(theme).mono.dark} size="small">
                    {infoMessage}
                </InfoMessage>
            )}
            {errorMessage && (
                <ErrorMessage textColor="#ff0000" size="small" type="copy-i">
                    {errorMessage
                        ? errorMessage
                        : 'Bitte geben Sie einen gültigen Text ein'}
                </ErrorMessage>
            )}
        </View>
    );
};

export default Textfield;
