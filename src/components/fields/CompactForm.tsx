import React, { FC } from 'react';
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

    color: ${({ theme }) => color(theme).text.default};

    @media ${mq.medium} {
        flex-direction: row;
    }
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

    background-color: ${({ theme }) => color(theme).primary.default};
    color: ${({ theme }) => color(theme).text.inverted};

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
    const bgColor =
        mode === 'default' ? colors.elementBg.medium : colors.elementBg.light;

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
