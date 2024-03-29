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
    border: solid 1px
        ${({ theme, isInverted }) =>
            isInverted
                ? color(theme).elementBg.light
                : color(theme).elementBg.dark};

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

const SearchIcon = styled.div`
    display: flex;
    align-items: center;
    padding-right: ${spacings.nudge * 2}px;
    padding-left: ${spacings.nudge * 2}px;
    color: inherit;

    transition: transform 0.2s ease-in-out;
`;

const ClearBtn = styled.button<{ isInverted?: boolean }>`
    display: flex;
    align-items: center;
    background: none;
    border: none;
    cursor: pointer;

    padding-right: ${spacings.nudge * 2}px;
    padding-left: ${spacings.nudge * 2}px;
    color: inherit;

    transition: transform 0.2s ease-in-out;

    &:focus {
        text-decoration: underline;
        transform: scale(1.012);

        outline: ${({ theme, isInverted }) =>
            `2px solid ${
                isInverted
                    ? color(theme).primary.inverted
                    : color(theme).primary.default
            }`};
        outline-offset: -4px;
        outline-style: dashed;
    }

    &:focus:not(:focus-visible) {
        text-decoration: none;
        outline: none;
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
    initialValue?: string;
    placeholder?: string;
    onSubmit?: (value: string) => void;
    onBlur?: (ev: React.SyntheticEvent<HTMLInputElement>) => void;
    submitIcon?: (isInverted?: boolean) => React.ReactNode;
    clearIcon?: (isInverted?: boolean) => React.ReactNode;
    className?: string;
}> = ({
    isInverted,
    value,
    initialValue,
    placeholder,
    onSubmit,
    onBlur,
    submitIcon,
    clearIcon,
    className,
}) => {
    const {
        update,
        value: getValue,
        forceUpdate,
    } = useLazyInput((value) => {
        onSubmit?.(value);
    }, initialValue || '');

    useEffect(() => {
        if (value !== undefined) {
            update(value);
        }
    }, [update, value]);

    return (
        <View isInverted={isInverted} className={className}>
            <Field
                type="text"
                isInverted={isInverted}
                value={getValue}
                placeholder={placeholder}
                onChange={(ev) => {
                    const newValue = ev?.currentTarget?.value;
                    if (newValue !== undefined) {
                        update(newValue, newValue === '');
                    }
                }}
                onBlur={onBlur}
                onKeyDown={(ev) => {
                    if (ev.key === 'Enter') {
                        forceUpdate();
                    }
                }}
            />
            {getValue === '' && (
                <SearchIcon>
                    {submitIcon ? submitIcon(isInverted) : <Magnifier />}
                </SearchIcon>
            )}
            {getValue !== '' && (
                <ClearBtn
                    isInverted={isInverted}
                    aria-label="clear filter"
                    onClick={() => {
                        update('', true);
                    }}
                >
                    {clearIcon ? clearIcon(isInverted) : <Cross />}
                </ClearBtn>
            )}
        </View>
    );
};

export default FilterField;
