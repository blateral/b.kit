import Copy from 'components/typography/Copy';
import * as React from 'react';
import styled, { ThemeContext } from 'styled-components';
import { getColors as color, spacings } from 'utils/styles';
import { FormProps } from './Textfield';

const FieldHead = styled.div`
    display: flex;
    flex-direction: row;
    align-items: top;
    justify-content: space-between;
    padding-bottom: ${spacings.nudge * 3}px;
    padding-left: ${spacings.nudge}px;
    padding-right: ${spacings.nudge}px;
`;

const Area = styled.textarea<{
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

    resize: none;
    width: 100%;
    min-height: 120px;

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
`;

const ErrorMessage = styled(Copy)`
    margin-top: ${spacings.nudge * 2}px;
`;

const OptionalLabel = styled(Copy)`
    margin-left: auto;
`;

const Textarea: React.FC<
    FormProps & {
        isInverted?: boolean;
        lightBg?: boolean;
    }
> = ({
    lightBg = true,
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
}) => {
    const theme = React.useContext(ThemeContext);
    return (
        <div>
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
            <Copy type="copy-b">
                <Area
                    value={value}
                    name={name}
                    placeholder={placeholder}
                    hasError={!!errorMessage}
                    isDisabled={isDisabled}
                    isInverted={isInverted}
                    required={isRequired}
                    hasBack={lightBg}
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
        </div>
    );
};

export default Textarea;
