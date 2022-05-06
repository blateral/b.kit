import React from 'react';
import styled from 'styled-components';

import Copy from 'components/typography/Copy';
import { useLibTheme } from 'utils/LibThemeProvider';
import { spacings } from 'utils/styles';

const View = styled(Copy)<{ isDisabled?: boolean }>`
    display: block;
    text-align: left;

    pointer-events: ${({ isDisabled }) => isDisabled && 'none'};
    user-select: ${({ isDisabled }) => isDisabled && 'none'};
    opacity: ${({ isDisabled }) => (isDisabled ? 0.3 : 1)};
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

const FieldWrapper: React.FC<{
    isDisabled?: boolean;
    onClick?: (ev: React.SyntheticEvent<HTMLLabelElement>) => void;
    className?: string;
    children: React.ReactNode;
}> = ({ isDisabled, onClick, className, children }) => {
    return (
        <View
            renderAs="label"
            onClick={onClick}
            isDisabled={isDisabled}
            className={className}
        >
            {children}
        </View>
    );
};

const Head: React.FC<{
    label?: string;
    isRequired?: boolean;
    isInverted?: boolean;
    className?: string;
}> = ({ label, isRequired, isInverted, className }) => {
    if (!label) return null;
    return (
        <FieldHead
            renderAs="span"
            isInverted={isInverted}
            size="small"
            type="copy-b"
            className={className}
        >
            {`${label}${isRequired ? ' *' : ''}`}
        </FieldHead>
    );
};

const Messages: React.FC<{
    errorMessage?: string;
    infoMessage?: string;
    isInverted?: boolean;
}> = ({ errorMessage, infoMessage, isInverted }) => {
    const { colors } = useLibTheme();

    return (
        <React.Fragment>
            {infoMessage && (
                <FieldMessage size="small" type="copy" isInverted={isInverted}>
                    {infoMessage}
                </FieldMessage>
            )}
            {errorMessage && (
                <FieldMessage
                    size="small"
                    type="copy"
                    textColor={
                        isInverted
                            ? colors.text.errorInverted
                            : colors.text.error
                    }
                >
                    {errorMessage
                        ? errorMessage
                        : 'Bitte geben Sie einen gültigen Text ein'}
                </FieldMessage>
            )}
        </React.Fragment>
    );
};

const Content: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const addWrapper =
        typeof children === 'string' || children instanceof String;

    if (addWrapper) return <span>{children}</span>;
    return <React.Fragment>{children}</React.Fragment>;
};

export default {
    View: FieldWrapper,
    Head: Head,
    Messages: Messages,
    Content: Content,
};
