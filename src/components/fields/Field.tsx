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

const Field: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <View renderAs="label">
            <span>{children}</span>
        </View>
    );
};

const Head: React.FC<{
    label?: string;
    isRequired?: boolean;
    isDisabled?: boolean;
    isInverted?: boolean;
}> = ({ label, isDisabled, isRequired, isInverted }) => {
    const { colors } = useLibTheme();

    return (
        <>
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
        </>
    );
};

const Messages: React.FC<{
    errorMessage?: string;
    infoMessage?: string;
    isInverted?: boolean;
}> = ({ errorMessage, infoMessage, isInverted }) => {
    const { colors } = useLibTheme();

    return (
        <>
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
        </>
    );
};

const Content: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <span>{children}</span>;
};

export default {
    View: Field,
    Head: Head,
    Messages: Messages,
    Content: Content,
};
