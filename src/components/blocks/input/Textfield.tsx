import Copy from 'components/typography/Copy';
import * as React from 'react';
import styled, { ThemeContext } from 'styled-components';
import { getColors, spacings } from 'utils/styles';

const View = styled.div``;

const FieldHead = styled.div`
    display: flex;
    flex-direction: row;
    align-items: top;
    justify-content: space-between;
    padding-bottom: ${spacings.nudge * 3}px;
`;

const Field = styled.input<{
    isInverted?: boolean;
    hasError?: boolean;
    isDisabled?: boolean;
}>`
    outline: none;
    width: 100%;

    padding: ${spacings.nudge * 2}px ${spacings.spacer}px;

    border: ${({ isInverted, theme }) =>
        isInverted
            ? '2px solid transparent'
            : `2px solid ${getColors(theme).mono.medium}`};
    border: ${({ hasError }) => hasError && '2px solid #ff0000'};

    font-weight: inherit;
    font-family: inherit;
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

export type FormProps = {
    label?: string;
    errorMessage?: string;
    infoMessage?: string;

    value?: string;
    name?: string;
    placeholder?: string;
    isRequired?: boolean;

    hasError?: boolean;
    isOptional?: boolean;
    isDisabled?: boolean;
};

const Textfield: React.FC<
    FormProps & {
        type?: 'text' | 'email' | 'tel';
        isInverted?: boolean;
    }
> = ({
    type = 'text',
    label,
    errorMessage,
    infoMessage,
    placeholder,
    value,
    name,
    isInverted,
    hasError,
    isOptional,
    isDisabled,
    isRequired,
}) => {
    const theme = React.useContext(ThemeContext);
    return (
        <View>
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
            <Copy textColor="#383838" type="copy-b">
                <Field
                    placeholder={placeholder}
                    hasError={hasError}
                    type={type}
                    isInverted={isInverted}
                    isDisabled={isDisabled}
                    name={name}
                    value={value}
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
        </View>
    );
};

export default Textfield;
