import React, { FC, useEffect } from 'react';
import styled from 'styled-components';

import { copyStyle } from 'components/typography/Copy';
import {
    spacings,
    getColors as color,
    getFonts as font,
    mq,
} from 'utils/styles';
import Magnifier from 'components/base/icons/Magnifier';
import useLazyInput from 'utils/useLazyInput';
import Cross from 'components/base/icons/Cross';

const View = styled.div<{ isInverted?: boolean }>`
    display: flex;
    min-height: 50px;
    border: solid 1px ${({ theme }) => color(theme).elementBg.dark};

    color: ${({ theme, isInverted }) =>
        isInverted
            ? font(theme).copy.medium.colorInverted
            : font(theme).copy.medium.color};

    &:focus-within {
        outline: ${({ theme, isInverted }) =>
            `1px solid ${
                isInverted
                    ? color(theme).primary.inverted
                    : color(theme).primary.default
            }`};
        outline-offset: 0;
    }

    &:focus-within & > input:not(:focus-visible) {
        outline: none;
    }

    @media ${mq.medium} {
        max-width: 400px;
    }
`;

const Field = styled.input<{ isInverted?: boolean }>`
    flex: 1 1 auto;
    background-color: transparent;
    box-shadow: none;
    border: none;
    border-right: none;
    border-radius: 0px;
    outline: none;
    -webkit-appearance: none;
    color: inherit;
    ${copyStyle('copy', 'medium')}
    line-height: 1;

    padding: ${spacings.nudge * 2}px;
    padding-right: ${spacings.nudge}px;

    &::placeholder {
        color: ${({ theme, isInverted }) =>
            isInverted
                ? color(theme).text.subtileInverted
                : color(theme).text.subtile};
    }
`;

const SubmitBtn = styled.button`
    background: none;
    border: none;
    cursor: pointer;

    padding: ${spacings.nudge * 2}px;
    padding-left: ${spacings.nudge}px;
    color: inherit;

    transition: transform 0.2s ease-in-out;

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

const ClearBtn = styled.button`
    background: none;
    border: none;
    cursor: pointer;

    padding: ${spacings.nudge * 2}px;
    padding-left: ${spacings.nudge}px;
    color: inherit;

    transition: transform 0.2s ease-in-out;

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

    & > * {
        height: 20px;
        width: 20px;
    }
`;

const FilterField: FC<{
    isInverted?: boolean;
    value?: string;
    placeholder?: string;
    onSubmit?: (value: string) => void;
    onBlur?: (ev: React.SyntheticEvent<HTMLInputElement>) => void;
    submitIcon?: (isInverted?: boolean) => React.ReactNode;
    clearIcon?: (isInverted?: boolean) => React.ReactNode;
    className?: string;
}> = ({
    isInverted,
    value,
    placeholder,
    onSubmit,
    onBlur,
    submitIcon,
    clearIcon,
    className,
}) => {
    const {
        setValue,
        value: getValue,
        forceUpdate,
    } = useLazyInput((value) => {
        onSubmit?.(value);
    }, value || '');

    useEffect(() => {
        if (value !== undefined) {
            setValue(value);
        }
    }, [setValue, value]);

    return (
        <View isInverted={isInverted} className={className}>
            <Field
                type="text"
                isInverted={isInverted}
                value={getValue}
                placeholder={placeholder}
                onChange={(ev) => {
                    const newValue = ev?.currentTarget?.value;
                    if (newValue !== undefined) setValue(newValue);
                }}
                onBlur={onBlur}
                onKeyDown={(ev) => {
                    if (ev.key === 'Enter') {
                        forceUpdate();
                    }
                }}
            />
            {getValue === '' && (
                <SubmitBtn aria-label="filter_submit" onClick={forceUpdate}>
                    {submitIcon ? submitIcon(isInverted) : <Magnifier />}
                </SubmitBtn>
            )}
            {getValue !== '' && (
                <ClearBtn onClick={() => setValue('')}>
                    {clearIcon ? clearIcon(isInverted) : <Cross />}
                </ClearBtn>
            )}
        </View>
    );
};

export default FilterField;
