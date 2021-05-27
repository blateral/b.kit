import Copy from 'components/typography/Copy';
import * as React from 'react';
import styled, { ThemeContext } from 'styled-components';
import { getColors, spacings } from 'utils/styles';

const FieldHead = styled.div`
    display: flex;
    flex-direction: row;
    align-items: top;
    justify-content: space-between;
    padding-bottom: ${spacings.nudge * 3}px;
`;

const Area = styled.textarea<{
    isInverted?: boolean;
    hasError?: boolean;
    isDisabled?: boolean;
}>`
    outline: none;
    resize: none;
    width: 100%;
    min-height: 120px;

    padding: ${spacings.nudge * 2}px ${spacings.spacer}px;

    border: ${({ isInverted, theme }) =>
        isInverted
            ? '2px solid transparent'
            : `2px solid ${getColors(theme).mono.medium}`};
    border: ${({ hasError }) => hasError && '2px solid #ff0000'};

    font-family: inherit;
    font-weight: inherit;
    font-size: inherit;

    color: ${({ hasError }) => (hasError ? '#ff0000' : 'inherit')};

    pointer-events: ${({ isDisabled }) => isDisabled && 'none'};

    &:active {
        border: ${({ theme }) =>
            `2px solid ${getColors(theme).primary.medium}`};
    }

    &:focus {
        border: ${({ theme }) =>
            `2px solid ${getColors(theme).primary.medium}`};
    }

    ::placeholder {
        color: ${({ isDisabled }) => (isDisabled ? '#999999' : '#383838')};
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
}) => {
    const theme = React.useContext(ThemeContext);
    return (
        <div>
            <FieldHead>
                {label && (
                    <Copy
                        textColor={
                            isDisabled
                                ? getColors(theme).mono.dark
                                : getColors(theme).primary.medium
                        }
                        size="small"
                    >
                        {label} {isRequired && '*'}
                    </Copy>
                )}
                {isOptional && (
                    <Copy textColor={getColors(theme).mono.dark} size="small">
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
                />
            </Copy>
            {infoMessage && (
                <InfoMessage
                    textColor={getColors(theme).mono.dark}
                    size="small"
                >
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
