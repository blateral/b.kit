import * as React from 'react';
import styled, { css } from 'styled-components';
import { hexToRgba } from 'utils/hexRgbConverter';

import {
    getColors as color,
    getFonts as font,
    getGlobals as global,
    spacings,
    withRange,
} from 'utils/styles';

const View = styled.a<{
    inverted?: boolean;
    disable?: boolean;
    size?: 'default' | 'small';
}>`
    min-height: 3em;
    height: ${({ size }) => (size === 'default' ? '3.65em' : '3em')};
    min-width: ${({ size }) => (size === 'default' ? '240px' : '120px')};
    padding: 0.1em 1.2em;

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

    text-align: center;
    text-decoration: none;

    outline: none;
    box-shadow: none;
    border: solid 1px
        ${({ inverted, disable, theme }) =>
            disable
                ? color(theme).elementBg.medium
                : inverted
                ? color(theme).elementBg.light
                : color(theme).elementBg.dark};
    border-radius: ${({ theme }) => global(theme).sections.edgeRadius};
    user-select: none;
    cursor: pointer;

    pointer-events: ${({ disable }) => (disable ? 'none' : 'all')};

    background-color: transparent;
    color: ${({ theme, inverted, disable }) =>
        disable
            ? inverted
                ? hexToRgba(color(theme).text.inverted, 0.6)
                : hexToRgba(color(theme).text.default, 0.6)
            : inverted
            ? color(theme).text.inverted
            : color(theme).text.default};

    transition: all ease-in-out 0.2s;

    & > * {
        color: ${({ theme, inverted, disable }) =>
            disable
                ? inverted
                    ? hexToRgba(color(theme).text.inverted, 0.6)
                    : hexToRgba(color(theme).text.default, 0.6)
                : inverted
                ? color(theme).text.inverted
                : color(theme).text.default};
    }

    & > :not(:last-child) {
        padding-right: ${spacings.nudge}px;
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

                &:focus {
                    box-shadow: 0px 2px 6px
                        ${inverted
                            ? 'rgba(255, 255, 255, 0.25)'
                            : 'rgba(0, 0, 0, 0.3)'};
                }

                &:active {
                    box-shadow: 0px 2px 6px
                        ${inverted
                            ? 'rgba(255, 255, 255, 0.25)'
                            : 'rgba(0, 0, 0, 0.3)'};
                }
            `}
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

const ButtonGhost: React.FC<BtnProps | LinkProps> = React.forwardRef(
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

ButtonGhost.displayName = 'Button Ghost';

const Icon = styled.div<{ iconColor?: string }>`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
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

export default { View: ButtonGhost, Label: Label, Icon: Icon };
