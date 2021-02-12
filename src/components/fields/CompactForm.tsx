import React, { FC, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

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

    color: ${({ theme }) => color(theme).mono.dark};

    @media ${mq.medium} {
        flex-direction: row;
    }
`;

const InputField = styled.input<{ backColor?: string }>`
    display: block;
    width: 100%;
    height: 100%;
    max-height: 49px;
    padding: ${spacings.nudge * 3.5}px ${spacings.nudge * 3.5}px;
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

    margin-top: ${spacings.spacer * 0.5}px;

    background-color: ${({ theme, isInverted }) =>
        isInverted ? color(theme).light : color(theme).dark};
    color: ${({ theme, isInverted }) =>
        isInverted ? color(theme).dark : color(theme).light};

    outline: none;
    border: none;
    user-select: none;
    cursor: pointer;
    transition: all ease-in-out 0.2s;

    @media ${mq.medium} {
        width: 100px;
        margin-top: 0;
    }

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
    backgroundStyle?: 'white' | 'grey';
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
    backgroundStyle = 'grey',
    className,
}) => {
    const theme = useContext(ThemeContext);

    return (
        <View
            onSubmit={onSubmit}
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
                backColor={
                    backgroundStyle === 'grey' || isInverted
                        ? color(theme).mono.light
                        : color(theme).light
                }
            />
            {buttonIcon && (
                <SubmitBtn isInverted={isInverted}>{buttonIcon}</SubmitBtn>
            )}
        </View>
    );
};

export default CompactForm;
