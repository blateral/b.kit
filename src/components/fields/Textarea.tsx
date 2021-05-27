import Copy from 'components/typography/Copy';
import * as React from 'react';
import styled, { ThemeContext } from 'styled-components';
import { getColors as color, spacings } from 'utils/styles';

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

const Textarea: React.FC<{
    label?: string;
    errorMessage?: string;
    infoMessage?: string;

    value?: string;
    name?: string;
    placeholder?: string;
    isRequired?: boolean;
    lightBg?: boolean;

    isInverted?: boolean;
    hasError?: boolean;
    isOptional?: boolean;
    isDisabled?: boolean;
}> = ({
    label,
    errorMessage,
    infoMessage,
    value,
    name,
    placeholder,
    isRequired,
    isDisabled,
    isInverted,
    hasError,
    isOptional,
    lightBg = true,
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
                        {label} {isRequired && '*'}
                    </Copy>
                )}
                {isOptional && (
                    <Copy textColor={color(theme).mono.dark} size="small">
                        Optional*
                    </Copy>
                )}
            </FieldHead>
            <Copy type="copy-b">
                <Area
                    value={value}
                    name={name}
                    placeholder={placeholder}
                    hasError={hasError}
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
            {hasError && (
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
