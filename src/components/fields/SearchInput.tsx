import React, { FC } from 'react';
import styled from 'styled-components';

import {
    getColors as color,
    getFonts as font,
    spacings,
    withRange,
} from 'utils/styles';

const View = styled.div<{ isInverted?: boolean }>`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: row;

    color: ${({ theme }) => color(theme).text.default};

    background-color: ${({ theme, isInverted }) =>
        isInverted
            ? color(theme).elementBg.light
            : color(theme).elementBg.medium};
`;

const InputField = styled.input<{
    hasLeftIcon?: boolean;
    hasRightIcon?: boolean;
}>`
    display: block;
    width: 100%;
    height: 100%;
    padding: ${spacings.nudge * 3}px ${spacings.nudge * 3.5}px;
    padding-left: ${({ hasLeftIcon }) =>
        hasLeftIcon && spacings.spacer * 2.5 + 'px'};
    padding-right: ${({ hasRightIcon }) =>
        hasRightIcon && spacings.spacer * 2.5 + 'px'};
    color: inherit;

    background-color: transparent;
    box-shadow: none;
    border: none;
    border-right: none;
    border-radius: 0px;
    outline: none;
    -webkit-appearance: none;

    font-family: ${({ theme }) => font(theme).copy.small.family};
    font-weight: 400;
    ${({ theme }) => withRange(font(theme).copy.small.size, 'font-size')}
    line-height: 1.25;

    &::placeholder {
        color: inherit;
    }

    &:focus {
        outline: ${({ theme }) => `2px solid ${color(theme).primary.default}`};
        outline-offset: 0;
    }

    &:focus:not(:focus-visible) {
        outline: none;
    }
`;

const ControlBtn = styled.button<{ isInverted?: boolean }>`
    display: inline-flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 53px;

    margin: -2px;
    background-color: transparent;
    color: ${({ theme }) => color(theme).text.default};

    outline: none;
    border: none;
    user-select: none;
    cursor: pointer;
    /* transition: all ease-in-out 0.2s; */

    &:hover {
        transform: scale(1.02);
    }

    &:focus {
        text-decoration: underline;
        transform: scale(1.012);
    }

    &:focus:not(:focus-visible) {
        text-decoration: none;
    }

    &:active {
        transform: scale(0.95);
    }
`;

const SubmitBtn = styled(ControlBtn)`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
`;

const ClearBtn = styled(ControlBtn)`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
`;

const SearchInput: FC<{
    isInverted?: boolean;
    value?: string;
    placeholder?: string;
    submitIcon?: React.ReactNode;
    clearIcon?: React.ReactNode;
    onSubmit?: () => void;
    onClear?: () => void;
    onClick?: (ev: React.SyntheticEvent<HTMLInputElement>) => void;
    onBlur?: (ev: React.SyntheticEvent<HTMLInputElement>) => void;
    onFocus?: (ev: React.SyntheticEvent<HTMLInputElement>) => void;
    className?: string;
}> = ({
    isInverted = false,
    value,
    placeholder,
    submitIcon,
    clearIcon,
    onSubmit,
    onClick,
    onClear,
    onBlur,
    onFocus,
    className,
}) => {
    const handleKeyDown = (ev: React.KeyboardEvent<HTMLInputElement>) => {
        if (ev.keyCode === 13) {
            onSubmit && onSubmit();
            ev.preventDefault();
        }
    };

    return (
        <View isInverted={isInverted} className={className}>
            {submitIcon && (
                <SubmitBtn
                    isInverted={isInverted}
                    onClick={() => onSubmit && onSubmit()}
                >
                    {submitIcon}
                </SubmitBtn>
            )}
            <InputField
                hasLeftIcon={submitIcon !== undefined}
                hasRightIcon={clearIcon !== undefined}
                placeholder={placeholder}
                value={value}
                onClick={onClick}
                onBlur={onBlur}
                onFocus={onFocus}
                onKeyDown={handleKeyDown}
            />
            {clearIcon && (
                <ClearBtn
                    isInverted={isInverted}
                    onClick={() => onClear && onClear()}
                >
                    {clearIcon}
                </ClearBtn>
            )}
        </View>
    );
};

export default SearchInput;
