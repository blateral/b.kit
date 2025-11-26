import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { getFonts as font, getColors as color, withRange } from 'utils/styles';

export type PickerActionVariant = 'default' | 'ghost';

const View = styled.button<{ variant?: PickerActionVariant }>`
    background: none;
    border: none;
    padding: 0;
    margin: 0;

    display: inline-block;
    padding: 0.5em 0.8em;
    white-space: nowrap;

    font-family: ${({ theme }) => font(theme).copy.small.family};
    ${({ theme }) => withRange(font(theme).copy.small.size, 'font-size')}
    font-weight: ${({ theme }) => font(theme).copy.small.weight};
    line-height: 1;
    letter-spacing: ${({ theme }) => font(theme).copy.small.letterSpacing};
    text-decoration: none;

    background-color: ${({ theme, variant }) =>
        variant === 'ghost' ? 'transparent' : color(theme).primary.default};
    color: ${({ theme, variant }) =>
        variant === 'ghost'
            ? color(theme).text.default
            : color(theme).text.inverted};

    transition: background-color 0.2s ease-in-out;

    &:not(:disabled) {
        cursor: pointer;
    }

    @media (hover: hover) and (pointer: fine) {
        &:not(:disabled):hover {
            background-color: ${({ theme, variant }) =>
                variant === 'ghost'
                    ? color(theme).elementBg.medium
                    : color(theme).primary.hover};
        }
    }

    &:disabled {
        filter: grayscale(1);
        color: ${({ theme, variant }) =>
            variant === 'ghost'
                ? color(theme).text.disabled
                : color(theme).text.inverted};
    }

    &:not(:focus-visible):focus {
        background-color: ${({ theme, variant }) =>
            variant === 'ghost'
                ? color(theme).elementBg.medium
                : color(theme).primary.hover};
    }

    &:focus-visible {
        outline: 2px solid
            ${({ theme, variant }) =>
                variant === 'ghost'
                    ? color(theme).text.default
                    : color(theme).primary.default};
        outline-offset: 2px;
    }
`;

export interface PickerActionProps {
    variant?: PickerActionVariant;
    disabled?: boolean;
    ariaLabel?: string;
    onClick?: (ev: React.SyntheticEvent<HTMLButtonElement>) => void;
}

const PickerAction: FC<
    PickerActionProps & { className?: string; children?: ReactNode }
> = ({ variant, disabled, ariaLabel, onClick, children, className }) => {
    return (
        <View
            variant={variant}
            disabled={disabled}
            onClick={onClick}
            aria-label={ariaLabel}
            className={className}
        >
            {children}
        </View>
    );
};

export default PickerAction;
