import React from 'react';
import styled, { css } from 'styled-components';
import { hexToRgba } from 'utils/hexRgbConverter';

import {
    getColors as color,
    getFonts as font,
    getGlobals as global,
    mq,
    spacings,
    withRange,
} from 'utils/styles';

const View = styled.a<{
    inverted?: boolean;
    isDisabled?: boolean;
    size?: 'default' | 'small';
}>`
    min-height: 3em;
    height: ${({ size }) => (size === 'default' ? '3.5em' : '3em')};
    min-width: ${({ size }) => (size === 'default' ? '200px' : '120px')};
    padding: 0.1em 1.2em;

    max-width: calc(100% - ${spacings.spacer}px);

    display: inline-flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;

    vertical-align: middle;

    font-family: ${({ theme }) => font(theme).copy.medium.family};
    ${({ theme }) => withRange(font(theme).copy.medium.size, 'font-size')}
    font-weight: ${({ theme }) => font(theme).copy.medium.weight};
    line-height: 1;
    letter-spacing: ${({ theme }) => font(theme).copy.medium.letterSpacing};
    text-decoration: none;

    outline: none;
    border: 1px solid transparent;
    border-radius: ${({ theme }) => global(theme).sections.edgeRadius};
    user-select: none;
    cursor: pointer;

    pointer-events: ${({ isDisabled }) => (isDisabled ? 'none' : 'all')};

    background-color: ${({ theme, inverted, isDisabled }) =>
        isDisabled
            ? color(theme).elementBg.medium
            : inverted
            ? color(theme).primary.inverted
            : color(theme).primary.default};
    color: ${({ theme, inverted, isDisabled }) =>
        isDisabled
            ? hexToRgba(color(theme).text.default, 0.4)
            : !inverted
            ? color(theme).text.inverted
            : color(theme).text.default};
    text-align: left;

    transition: color ease-in-out 0.2s, background-color ease-in-out 0.2s;

    & > * {
        color: ${({ theme, inverted, isDisabled }) =>
            isDisabled
                ? hexToRgba(color(theme).text.default, 0.4)
                : !inverted
                ? color(theme).text.inverted
                : color(theme).text.default};
    }

    & > * + * {
        margin-left: ${spacings.nudge}px;
    }
    & > *[data-btn-desktop] + *[data-btn-mobile] {
        margin-left: 0;
    }
    & > *[data-btn-mobile] + *[data-btn-desktop] {
        margin-left: 0;
    }
    & > *[data-btn-desktop] {
        display: none;
    }
    & > *:not([data-btn-desktop]) + * {
        margin-left: 0;
    }

    @media (hover: hover) and (pointer: fine) {
        &:hover {
            background-color: ${({ theme, isDisabled, inverted }) =>
                isDisabled
                    ? color(theme).elementBg.medium
                    : inverted
                    ? color(theme).primary.invertedHover
                    : color(theme).primary.hover};
        }
    }

    ${({ isDisabled, inverted, theme }) =>
        !isDisabled &&
        css`
            &:focus-visible {
                outline: 2px solid
                    ${isDisabled
                        ? color(theme).elementBg.medium
                        : inverted
                        ? color(theme).primary.inverted
                        : color(theme).primary.default};

                outline-offset: 2px;
            }

            @media (hover: none) {
                &:active:not(:focus-visible) {
                    text-decoration: none;
                    outline: none;

                    background-color: ${inverted
                        ? color(theme).primary.invertedHover
                        : color(theme).primary.hover};

                    transition: 0.2s background-color ease-in-out;
                    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
                    -webkit-tap-highlight-color: transparent;
                }
            }
        `}

    @media ${mq.semilarge} {
        & > *[data-btn-desktop='true'] {
            display: inherit;
        }
        & > *[data-btn-mobile='true'] {
            display: none;
        }
        & > *:not([data-btn-mobile='true']) + * {
            margin-left: 0;
        }
    }
`;

interface Props {
    size?: 'default' | 'small';
    isInverted?: boolean;
    isDisabled?: boolean;
    ariaLabel?: string;
    className?: string;
    children?: React.ReactNode;
}

export type BtnProps = Props & {
    as?: 'button';
    onClick?: (ev: React.SyntheticEvent<HTMLButtonElement>) => void;
};

export type LinkProps = Props & {
    as?: 'a';
    href?: string;
    onClick?: (ev: React.SyntheticEvent<HTMLAnchorElement>) => void;
    isExternal?: boolean;
};

export type DecoratorProps = Props & {
    as?: 'decorator';
    onClick?: (ev: React.SyntheticEvent<HTMLSpanElement>) => void;
};

const Button = React.forwardRef<
    HTMLElement,
    BtnProps | LinkProps | DecoratorProps
>(
    (
        {
            as = 'a',
            size = 'default',
            isInverted,
            isDisabled,
            ariaLabel,
            onClick,
            className,
            children,
            ...rest
        },
        ref
    ) => {
        switch (as) {
            case 'button': {
                return (
                    <View
                        ref={ref as React.RefObject<HTMLButtonElement>}
                        as="button"
                        tabIndex={isDisabled ? -1 : 0}
                        size={size}
                        inverted={isInverted}
                        aria-label={ariaLabel}
                        disabled={isDisabled}
                        isDisabled={isDisabled}
                        onClick={
                            onClick as (
                                ev: React.SyntheticEvent<HTMLButtonElement>
                            ) => void
                        }
                        className={className}
                        {...rest}
                    >
                        {children}
                    </View>
                );
            }

            case 'a': {
                return (
                    <View
                        ref={ref as React.RefObject<HTMLAnchorElement>}
                        as={as}
                        tabIndex={isDisabled ? -1 : 0}
                        aria-disabled={isDisabled}
                        aria-label={ariaLabel}
                        size={size}
                        href={(rest as LinkProps).href}
                        target={
                            (rest as LinkProps).isExternal
                                ? '_blank'
                                : undefined
                        }
                        rel={
                            (rest as LinkProps).isExternal
                                ? 'noopener'
                                : undefined
                        }
                        inverted={isInverted}
                        isDisabled={isDisabled}
                        onClick={
                            onClick as (
                                ev: React.SyntheticEvent<HTMLAnchorElement>
                            ) => void
                        }
                        className={className}
                        {...rest}
                    >
                        {children}
                    </View>
                );
            }

            default: {
                return (
                    <View
                        ref={ref as React.RefObject<HTMLSpanElement>}
                        as="span"
                        tabIndex={isDisabled ? -1 : 0}
                        size={size}
                        inverted={isInverted}
                        isDisabled={isDisabled}
                        aria-disabled={isDisabled}
                        aria-label={ariaLabel}
                        onClick={
                            onClick as (
                                ev: React.SyntheticEvent<HTMLSpanElement>
                            ) => void
                        }
                        className={className}
                        {...rest}
                    >
                        {children}
                    </View>
                );
            }
        }
    }
);

Button.displayName = 'Button';

const Icon = styled.div<{ iconColor?: string }>`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 35px;
    height: 35px;

    color: ${({ iconColor }) => iconColor || 'inherit'};

    transition: transform 0.2s ease-in-out;

    ${View}:hover > & {
        transform: translateX(3px);
    }
`;

const Label = styled.span`
    display: inline-block;

    max-width: 100%;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;

export default { View: Button, Label: Label, Icon: Icon };
