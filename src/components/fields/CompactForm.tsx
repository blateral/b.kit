import React, { FC } from 'react';
import styled from 'styled-components';

import {
    getColors as color,
    getFonts as font,
    spacings,
    withRange,
} from '../../utils/styles';

const View = styled.form<{ isInverted?: boolean }>`
    width: 100%;
    display: flex;
    flex-direction: row;

    border: solid 1px ${({ theme }) => color(theme).mono.light};
    color: ${({ theme, isInverted }) =>
        isInverted ? color(theme).white : color(theme).black};
`;

const InputField = styled.input`
    display: block;
    width: 100%;
    height: 100%;
    padding: ${spacings.nudge * 3}px ${spacings.nudge * 3.5}px;
    color: inherit;

    background-color: transparent;
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

    &::placeholder {
        color: inherit;
    }
`;

const SubmitBtn = styled.button<{ isInverted?: boolean }>`
    display: inline-flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 65px;

    margin: -2px;
    background-color: ${({ theme, isInverted }) =>
        isInverted ? color(theme).white : color(theme).black};
    color: ${({ theme, isInverted }) =>
        isInverted ? color(theme).black : color(theme).white};

    outline: none;
    border: none;
    user-select: none;
    cursor: pointer;
    /* transition: all ease-in-out 0.2s; */

    &:hover {
        transform: scale(1.05);
    }

    &:focus {
        text-decoration: underline;
        transform: scale(1.012);
    }

    &:active {
        transform: scale(0.95);
    }
`;

const CompactForm: FC<{
    isInverted?: boolean;
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
    isInverted = false,
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
    return (
        <View
            onSubmit={onSubmit}
            isInverted={isInverted}
            method={method}
            action={action}
            className={className}
        >
            <InputField
                placeholder={placeholder}
                value={value}
                onClick={onClick}
                onBlur={onBlur}
                onFocus={onFocus}
            />
            {buttonIcon && (
                <SubmitBtn isInverted={isInverted}>{buttonIcon}</SubmitBtn>
            )}
        </View>
    );
};

export default CompactForm;
