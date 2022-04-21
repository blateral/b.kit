import Copy from 'components/typography/Copy';
import * as React from 'react';
import styled, { ThemeContext } from 'styled-components';
import { hexToRgba } from 'utils/hexRgbConverter';
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

    @media ${mq.semilarge} {
        min-height: 185px;
    }

    padding: ${spacings.nudge * 3}px ${spacings.spacer}px;

    border: ${({ hasError, theme }) =>
        hasError
            ? `2px solid ${color(theme).new.error}`
            : '2px solid transparent'};
    border-radius: ${({ theme }) => global(theme).sections.edgeRadius};
    background-color: ${({ isInverted, hasBack, theme }) =>
        isInverted || !hasBack
            ? color(theme).new.elementBg.light
            : color(theme).new.elementBg.medium};

    font-weight: inherit;
    font-family: inherit;
    font-size: inherit;
    color: ${({ hasError, theme }) =>
        hasError ? color(theme).new.text.error : 'inherit'};

    pointer-events: ${({ isDisabled }) => isDisabled && 'none'};

    &:active {
        border: ${({ theme }) =>
            `2px solid ${hexToRgba(color(theme).new.elementBg.dark, 0.2)}`};
    }

    &:focus {
        border: ${({ theme }) =>
            `2px solid ${hexToRgba(color(theme).new.elementBg.dark, 0.2)}`};
    }

    &::placeholder {
        color: ${({ theme }) =>
            hexToRgba(color(theme).new.elementBg.dark, 0.4)};
    }
`;

const InfoMessage = styled(Copy)`
    margin-top: ${spacings.nudge * 2}px;
`;

const ErrorMessage = styled(Copy)`
    margin-top: ${spacings.nudge * 2}px;
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
                        isDisabled
                            ? color(theme).new.elementBg.medium
                            : undefined
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
                <InfoMessage
                    textColor={color(theme).new.text.copy}
                    size="small"
                >
                    {infoMessage}
                </InfoMessage>
            )}
            {errorMessage && (
                <ErrorMessage
                    textColor={color(theme).new.error}
                    size="small"
                    type="copy-i"
                >
                    {errorMessage
                        ? errorMessage
                        : 'Bitte geben Sie einen gültigen Text ein'}
                </ErrorMessage>
            )}
        </View>
    );
};

export default Textarea;
