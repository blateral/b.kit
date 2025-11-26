import * as React from 'react';
import styled, { css } from 'styled-components';

import {
    getColors as color,
    getFonts as font,
    spacings,
    withRange,
} from 'utils/styles';

const View = styled.a<{
    inverted?: boolean;
    isDisabled?: boolean;
    decoration?: 'none' | 'underline';
}>`
    padding: 0.2em 0;

    display: inline-block;
    display: inline-flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    vertical-align: middle;

    font-family: ${({ theme }) => font(theme).copy.medium.family};
    ${({ theme }) => withRange(font(theme).copy.medium.size, 'font-size')}
    font-weight: ${({ theme }) => font(theme).copy.medium.weight};
    text-align: center;
    text-decoration: ${({ decoration }) =>
        decoration ? decoration : 'underline'};
    line-height: 1;
    letter-spacing: ${({ theme }) => font(theme).copy.medium.letterSpacing};

    perspective: 1000;
    -webkit-font-smoothing: subpixel-antialiased;
    -webkit-perspective: 1000;
    -moz-osx-font-smoothing: grayscale;
    will-change: auto;

    outline-color: ${({ theme, inverted }) =>
        inverted
            ? color(theme).primary.inverted
            : color(theme).primary.default};
    border: none;
    cursor: pointer;

    pointer-events: ${({ isDisabled }) => (isDisabled ? 'none' : 'all')};

    background: none;
    color: ${({ theme, inverted, isDisabled }) =>
        isDisabled
            ? color(theme).elementBg.medium
            : inverted
            ? color(theme).text.copyInverted
            : color(theme).text.copy};

    transition: color 0.2s ease-in-out, opacity 0.2s ease-in-out;

    & > * {
        color: ${({ theme, inverted, isDisabled }) =>
            isDisabled
                ? color(theme).elementBg.medium
                : inverted
                ? color(theme).text.copyInverted
                : color(theme).text.copy};
    }

    & > * + * {
        margin-left: ${spacings.nudge}px;
    }

    @media (hover: hover) and (pointer: fine) {
        &:hover {
            opacity: 0.6;
        }
    }

    &:focus-visible {
        outline: none;
    }

    ${({ isDisabled, inverted, theme }) =>
        !isDisabled &&
        css`
            &:focus-visible {
                outline: 2px dotted
                    ${inverted
                        ? color(theme).primary.inverted
                        : color(theme).primary.default};
                outline-offset: 2px;
            }

            &:focus:not(:focus-visible) {
                outline: none;
                opacity: 0.6;
            }
        `}
`;

interface Props {
    isInverted?: boolean;
    isDisabled?: boolean;
    onClick?: () => void;
    decoration?: 'none' | 'underline';
    className?: string;
    children?: React.ReactNode;
    ariaLabel?: string;
}

export type BtnProps = Props & {
    as?: 'button';
};

export type LinkProps = Props & {
    as?: 'a';
    href?: string;
    isExternal?: boolean;
};

export type DecoratorProps = Props & {
    as?: 'decorator';
};

const Pointer = React.forwardRef<
    HTMLElement,
    BtnProps | LinkProps | DecoratorProps
>(
    (
        {
            as = 'a',
            isInverted,
            isDisabled,
            onClick,
            className,
            decoration = 'underline',
            children,
            ariaLabel,
            ...rest
        },
        ref
    ) => {
        switch (as) {
            case 'button': {
                return (
                    <View
                        ref={ref as React.RefObject<HTMLButtonElement>}
                        as={as}
                        tabIndex={isDisabled ? -1 : 0}
                        decoration={decoration}
                        inverted={isInverted}
                        disabled={isDisabled}
                        isDisabled={isDisabled}
                        onClick={onClick}
                        className={className}
                        aria-label={ariaLabel}
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
                        decoration={decoration}
                        href={(rest as LinkProps).href}
                        data-disabled={isDisabled}
                        data-inverted={isInverted}
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
                        onClick={onClick}
                        className={className}
                        aria-label={ariaLabel}
                        {...rest}
                    >
                        {children}
                    </View>
                );
            }

            default: {
                return (
                    <View
                        ref={ref}
                        as="span"
                        tabIndex={isDisabled ? -1 : 0}
                        decoration={decoration}
                        data-disabled={isDisabled}
                        data-inverted={isInverted}
                        inverted={isInverted}
                        isDisabled={isDisabled}
                        onClick={onClick}
                        className={className}
                        aria-label={ariaLabel}
                        {...rest}
                    >
                        {children}
                    </View>
                );
            }
        }
    }
);

Pointer.displayName = 'Button';

const Icon = styled.div<{ iconColor?: string }>`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;

    color: ${({ theme, iconColor }) => iconColor || color(theme).text.copy};

    transition: transform 0.2s ease-in-out;

    ${View}[data-inverted='true'] > & {
        color: ${({ theme, iconColor }) =>
            iconColor || color(theme).text.copyInverted};
    }

    ${View}[data-disabled='true'] > & {
        color: ${({ theme, iconColor }) =>
            iconColor || color(theme).elementBg.medium};
    }

    ${View}:hover > & {
        transform: translateX(3px);
    }
`;

const Label = styled.span`
    display: inline-block;
`;

export default { View: Pointer, Label: Label, Icon: Icon };
