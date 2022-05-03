import Copy from 'components/typography/Copy';
import * as React from 'react';
import styled, { ThemeContext } from 'styled-components';
import {
    getColors as color,
    mq,
    spacings,
    getGlobals as global,
} from 'utils/styles';
import { FormProps } from './Textfield';

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
    border-radius: 0px;
    -webkit-appearance: none;

    resize: none;
    width: 100%;
    min-height: 100px;

    @media ${mq.semilarge} {
        min-height: 120px;
    }

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

const Textarea: React.FC<
    FormProps & {
        isInverted?: boolean;
        lightBg?: boolean;
        onChange?: (ev: React.SyntheticEvent<HTMLTextAreaElement>) => void;
        onBlur?: (ev: React.SyntheticEvent<HTMLTextAreaElement>) => void;
    }
> = ({
    lightBg,
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
    const theme = React.useContext(ThemeContext);
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
            <Area
                value={value}
                name={name}
                placeholder={placeholder}
                hasError={!!errorMessage}
                isDisabled={isDisabled}
                isInverted={isInverted}
                required={isRequired}
                hasBack={!lightBg}
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

export default Textarea;
