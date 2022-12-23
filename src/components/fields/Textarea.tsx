import { copyStyle } from 'components/typography/Copy';
import React from 'react';
import styled from 'styled-components';
import { getFormFieldTextSize } from 'utils/formFieldText';
import {
    getColors as color,
    getFonts as font,
    spacings,
    getGlobals as global,
    withRange,
} from 'utils/styles';
import FieldWrapper from './FormField';
import { FormProps } from './Textfield';

const Area = styled.textarea<{
    isInverted?: boolean;
    hasError?: boolean;
    isDisabled?: boolean;
    hasBack?: boolean;
}>`
    display: block;
    outline: none;
    width: 100%;
    min-height: 100px;
    box-shadow: none;
    border-radius: 0px;
    -webkit-appearance: none;

    resize: none;

    padding: ${spacings.nudge}px;

    border: 1px solid
        ${({ theme, isInverted, hasError }) => {
            if (isInverted) {
                return hasError
                    ? color(theme).errorInverted
                    : color(theme).elementBg.light;
            }
            return hasError ? color(theme).error : color(theme).elementBg.dark;
        }};
    border-radius: ${({ theme }) => global(theme).sections.edgeRadius};

    background: transparent;

    ${copyStyle('copy', 'small')}
    /** Clamping min font size to 16px to prevent browser zooming */
    ${({ theme }) => withRange(getFormFieldTextSize(theme), 'font-size')}
    
    color: ${({ theme, isInverted, hasError }) => {
        if (isInverted) {
            return hasError
                ? color(theme).text.errorInverted
                : font(theme).copy.small.colorInverted;
        }
        return hasError
            ? color(theme).text.error
            : font(theme).copy.small.color;
    }};

    &:active {
        border: ${({ theme, isInverted }) =>
            `1px solid ${
                isInverted
                    ? color(theme).primary.inverted
                    : color(theme).primary.default
            }`};
    }

    &:focus {
        outline: ${({ theme, isInverted }) =>
            `1px solid ${
                isInverted
                    ? color(theme).primary.inverted
                    : color(theme).primary.default
            }`};
        outline-offset: 0;
    }

    &:focus:not(:focus-visible) {
        outline: none;
    }

    &::placeholder {
        color: ${({ theme, isInverted }) =>
            isInverted
                ? color(theme).text.subtileInverted
                : color(theme).text.subtile};
    }
`;

export type TextareaProps = FormProps & {
    enableMemo?: boolean;
    onChange?: (ev: React.SyntheticEvent<HTMLTextAreaElement>) => void;
    onBlur?: (ev: React.SyntheticEvent<HTMLTextAreaElement>) => void;
};

const Textarea: React.FC<TextareaProps> = ({
    label,
    isRequired,
    errorMessage,
    infoMessage,
    isDisabled,
    isInverted,
    placeholder,
    value,
    name,
    onChange,
    onBlur,
}) => {
    if (isDisabled) {
        errorMessage = '';
    }

    return (
        <FieldWrapper.View isDisabled={isDisabled}>
            <FieldWrapper.Head
                label={label}
                isRequired={isRequired}
                isInverted={isInverted}
            />
            <FieldWrapper.Content>
                <Area
                    value={value}
                    name={name}
                    placeholder={placeholder}
                    hasError={!!errorMessage}
                    isDisabled={isDisabled}
                    isInverted={isInverted}
                    required={isRequired}
                    onChange={onChange}
                    onBlur={onBlur}
                />
            </FieldWrapper.Content>
            <FieldWrapper.Messages
                infoMessage={infoMessage}
                errorMessage={errorMessage}
                isInverted={isInverted}
            />
        </FieldWrapper.View>
    );
};

/**
 * Function to compare both field prop states
 * @param prev Previous props
 * @param next Next props
 * @returns
 */
const areEqual = (prev: TextareaProps, next: TextareaProps) => {
    // only apply logic if memo functionality is enabled
    if (!prev.enableMemo) return false;

    if (prev.value !== next.value) return false;
    if (prev.errorMessage !== next.errorMessage) return false;
    if (prev.infoMessage !== next.infoMessage) return false;
    if (prev.label !== next.label) return false;
    if (prev.placeholder !== next.placeholder) return false;

    return true;
};

export default React.memo(Textarea, areEqual);
