import * as React from 'react';
import styled from 'styled-components';
import {
    getColors as color,
    spacings,
    getGlobals as global,
} from 'utils/styles';
import Field from './Field';
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
    min-height: 60px;
    box-shadow: none;
    border-radius: 0px;
    -webkit-appearance: none;

    resize: none;
    width: 100%;
    min-height: 100px;

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

const Textarea: React.FC<
    FormProps & {
        onChange?: (ev: React.SyntheticEvent<HTMLTextAreaElement>) => void;
        onBlur?: (ev: React.SyntheticEvent<HTMLTextAreaElement>) => void;
    }
> = ({ field, placeholder, value, name, onChange, onBlur }) => {
    return (
        <Field {...field}>
            <Area
                value={value}
                name={name}
                placeholder={placeholder}
                hasError={!!field?.errorMessage}
                isDisabled={field?.isDisabled}
                isInverted={field?.isInverted}
                required={field?.isRequired}
                onChange={onChange}
                onBlur={onBlur}
            />
        </Field>
    );
};

export default Textarea;
