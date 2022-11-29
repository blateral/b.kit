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
    disable?: boolean;
    size?: 'default' | 'small';
}>`
    min-height: 3em;
    height: ${({ size }) => (size === 'default' ? '3.5em' : '3em')};
    min-width: ${({ size }) => (size === 'default' ? '200px' : '120px')};
    padding: 0.1em 1.2em;

    display: inline-flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    white-space: nowrap;

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

    pointer-events: ${({ disable }) => (disable ? 'none' : 'all')};

    background-color: ${({ theme, inverted, disable }) =>
        disable
            ? color(theme).elementBg.medium
            : inverted
            ? color(theme).primary.inverted
            : color(theme).primary.default};
    color: ${({ theme, inverted, disable }) =>
        disable
            ? hexToRgba(color(theme).text.default, 0.4)
            : !inverted
            ? color(theme).text.inverted
            : color(theme).text.default};
    text-align: left;

    transition: all ease-in-out 0.2s;

    & > * {
        color: ${({ theme, inverted, disable }) =>
            disable
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
        ${({ disable, inverted }) =>
            !disable &&
            css`
                &:hover {
                    box-shadow: 0px 8px 16px
                        ${inverted
                            ? 'rgba(255, 255, 255, 0.25)'
                            : 'rgba(0, 0, 0, 0.25)'};
                }
            `}
    }

    ${({ disable, inverted }) =>
        !disable &&
        css`
            &:focus {
                text-decoration: underline;
                box-shadow: 0px 8px 16px
                    ${inverted
                        ? 'rgba(255, 255, 255, 0.25)'
                        : 'rgba(0, 0, 0, 0.25)'};
            }

            &:focus:not(:focus-visible) {
                text-decoration: none;
                outline: none;
                box-shadow: none;
            }

            &:active {
                box-shadow: 0px 2px 6px
                    ${inverted
                        ? 'rgba(255, 255, 255, 0.25)'
                        : 'rgba(0, 0, 0, 0.3)'};
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

const Button: React.FC<BtnProps | LinkProps> = React.forwardRef(
    (
        {
            as,
            size = 'default',
            isInverted,
            isDisabled,
            onClick,
            className,
            children,
            ...rest
        },
        ref
    ) => {
        if (as === 'button') {
            return (
                <View
                    ref={ref}
                    as={as as any}
                    size={size}
                    inverted={isInverted}
                    disable={isDisabled}
                    onClick={onClick}
                    className={className}
                    {...rest}
                >
                    {children}
                </View>
            );
        } else {
            return (
                <View
                    ref={ref}
                    as={as as any}
                    aria-disabled={isDisabled}
                    size={size}
                    href={(rest as LinkProps).href}
                    target={
                        (rest as LinkProps).isExternal ? '_blank' : undefined
                    }
                    rel={
                        (rest as LinkProps).isExternal
                            ? 'noopener noreferrer'
                            : undefined
                    }
                    inverted={isInverted}
                    disable={isDisabled}
                    onClick={onClick}
                    className={className}
                    {...rest}
                >
                    {children}
                </View>
            );
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
`;

export default { View: Button, Label: Label, Icon: Icon };
