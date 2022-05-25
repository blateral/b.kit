import * as React from 'react';
import styled from 'styled-components';

import {
    getColors as color,
    getFonts as font,
    spacings,
    withRange,
} from 'utils/styles';

const View = styled.a<{
    inverted?: boolean;
    disable?: boolean;
    textDecoration?: 'none' | 'underline';
}>`
    padding: 0.2em;

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
    text-decoration: ${({ textDecoration }) =>
        textDecoration ? textDecoration : 'underline'};
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

    pointer-events: ${({ disable }) => (disable ? 'none' : 'all')};

    background: none;
    color: ${({ theme, inverted, disable }) =>
        disable
            ? color(theme).elementBg.medium
            : inverted
            ? color(theme).text.copyInverted
            : color(theme).text.copy};

    & > * {
        color: ${({ theme, inverted, disable }) =>
            disable
                ? color(theme).elementBg.medium
                : inverted
                ? color(theme).text.copyInverted
                : color(theme).text.copy};
    }

    & > * + * {
        margin-left: ${spacings.nudge}px;
    }

    & > :not(:last-child) {
        padding-right: ${spacings.nudge}px;
    }

    &:hover {
        opacity: 0.6;
    }

    &:focus {
        outline: 2px solid ${({ theme }) => color(theme).primary.default};
    }

    &:focus:not(:focus-visible) {
        outline: none;
    }

    &:active {
        opacity: 0.6;
    }
`;

interface Props {
    isInverted?: boolean;
    isDisabled?: boolean;
    onClick?: () => void;
    textDecoration?: 'none' | 'underline';
    className?: string;
    children?: React.ReactNode;
}

export type BtnProps = Props & {
    as?: 'button';
};

export type LinkProps = Props & {
    as?: 'a';
    href?: string;
    isExternal?: boolean;
};

const Pointer: React.FC<BtnProps | LinkProps> = React.forwardRef(
    (
        {
            as,
            isInverted,
            isDisabled,
            onClick,
            className,
            textDecoration,
            children,
            ...rest
        },
        ref
    ) => {
        if (as === 'button') {
            return (
                <View
                    textDecoration={textDecoration}
                    ref={ref}
                    as={as as any}
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
                    textDecoration={textDecoration}
                    ref={ref}
                    as={as as any}
                    href={(rest as LinkProps).href}
                    data-disabled={isDisabled}
                    data-inverted={isInverted}
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
