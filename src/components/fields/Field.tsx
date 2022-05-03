import Copy from 'components/typography/Copy';
import * as React from 'react';
import styled from 'styled-components';
import { useLibTheme } from 'utils/LibThemeProvider';
import { spacings } from 'utils/styles';

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

const FieldMessage = styled(Copy)`
    margin-top: ${spacings.nudge}px;
`;

export interface FieldProps {
    label?: string;
    errorMessage?: string;
    infoMessage?: string;
    isRequired?: boolean;
    isDisabled?: boolean;
    isInverted?: boolean;
}

const Field: React.FC<FieldProps & { children: React.ReactNode }> = ({
    label,
    children,
    errorMessage,
    infoMessage,
    isDisabled,
    isRequired,
    isInverted,
}) => {
    const { colors } = useLibTheme();

    return (
        <View renderAs="label">
            {label && (
                <FieldHead
                    renderAs="span"
                    isInverted={isInverted}
                    textColor={isDisabled ? colors.elementBg.medium : undefined}
                    size="medium"
                    type="copy-b"
                >
                    {`${label}${isRequired ? ' *' : ''}`}
                </FieldHead>
            )}
            <span>{children}</span>
            {infoMessage && (
                <FieldMessage
                    textColor={
                        isInverted ? colors.text.inverted : colors.text.default
                    }
                    size="small"
                    type="copy"
                >
                    {infoMessage}
                </FieldMessage>
            )}
            {errorMessage && (
                <FieldMessage
                    textColor={colors.text.error}
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

export default Field;
