import React, { FC, useId } from 'react';
import styled from 'styled-components';
import { useLibTheme } from 'utils/LibThemeProvider';

import {
    getColors as color,
    getFonts as font,
    mq,
    spacings,
    withRange,
} from 'utils/styles';

const View = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: ${spacings.nudge}px;

    color: ${({ theme }) => color(theme).text.default};

    @media ${mq.medium} {
        flex-direction: row;
        gap: 0;
    }
`;

const Label = styled.label`
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
`;

const InputField = styled.input<{ backColor?: string }>`
    display: block;
    width: 100%;
    height: 49px;
    max-height: 49px;
    padding: ${spacings.nudge}px ${spacings.nudge * 3}px;
    color: inherit;

    background-color: ${({ backColor }) => backColor && backColor};
    box-shadow: none;
    border: none;
    border-right: none;
    border-radius: 0px;
    outline: none;
    -webkit-appearance: none;

    font-family: ${({ theme }) => font(theme).copy.small.family};
    font-weight: ${({ theme }) => font(theme).copy.small.weight};
    ${({ theme }) => withRange(font(theme).copy.small.size, 'font-size')}
    line-height: ${({ theme }) => font(theme).copy.small.lineHeight};

    &:focus {
        outline: ${({ theme }) => `2px solid ${color(theme).primary.default}`};
        outline-offset: 0;
    }

    &:focus:not(:focus-visible) {
        outline: none;
    }

    &::placeholder {
        color: inherit;
    }
`;

const SubmitBtn = styled.button<{ isInverted?: boolean }>`
    display: inline-flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 49px;

    background-color: ${({ theme }) => color(theme).primary.default};
    color: ${({ theme }) => color(theme).text.inverted};

    outline: none;
    border: none;
    user-select: none;
    cursor: pointer;
    transition: background-color ease-in-out 0.2s;

    @media ${mq.medium} {
        width: 100px;
        margin-top: 0;
    }

    @media (hover: hover) and (pointer: fine) {
        &:hover {
            background-color: ${({ theme, isInverted }) =>
                isInverted
                    ? color(theme).primary.invertedHover
                    : color(theme).primary.hover};
        }
    }

    &:focus-visible {
        outline: 2px solid
            ${({ theme, isInverted }) =>
                isInverted
                    ? color(theme).primary.inverted
                    : color(theme).primary.default};

        outline-offset: 2px;
    }

    &:focus:not(:focus-visible) {
        background-color: ${({ theme, isInverted }) =>
            isInverted
                ? color(theme).primary.invertedHover
                : color(theme).primary.hover};
    }
`;

const CompactForm: FC<{
    mode?: 'onSoft' | 'onDark' | 'default';
    value?: string;
    placeholder?: string;
    method?: string;
    action?: string;
    buttonIcon?: React.ReactNode;
    onSubmit?: (ev: React.SyntheticEvent<HTMLFormElement>) => void;
    onClick?: (ev: React.SyntheticEvent<HTMLInputElement>) => void;
    onFocus?: (ev: React.SyntheticEvent<HTMLInputElement>) => void;
    onBlur?: (ev: React.SyntheticEvent<HTMLInputElement>) => void;
    className?: string;
}> = ({
    mode = 'default',
    value,
    placeholder,
    method,
    action,
    buttonIcon,
    onSubmit,
    onClick,
    onBlur,
    onFocus,
    className,
}) => {
    const { colors } = useLibTheme();
    const id = useId();

    const fieldId = `compact-form-${id}`;
    const bgColor =
        mode === 'default' ? colors.elementBg.medium : colors.elementBg.light;

    return (
        <View
            onSubmit={onSubmit}
            method={method}
            action={action}
            className={className}
        >
            <Label htmlFor={fieldId}>E-Mail</Label>
            <InputField
                id={fieldId}
                type="email"
                placeholder={placeholder}
                value={value}
                onClick={onClick}
                onBlur={onBlur}
                onFocus={onFocus}
                backColor={bgColor}
            />
            {buttonIcon && (
                <SubmitBtn isInverted={mode === 'onDark'}>
                    {buttonIcon}
                </SubmitBtn>
            )}
        </View>
    );
};

export default CompactForm;
