import * as React from 'react';
import styled from 'styled-components';

import {
    getColors as color,
    getFonts as font,
    spacings,
    withRange,
} from 'utils/styles';

const View = styled.a<{ inverted?: boolean; disable?: boolean }>`
    min-height: 3em;
    height: 3.65em;
    min-width: 210px;
    padding: 0.1em 1.2em;

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
    text-decoration: none;
    line-height: 1;
    letter-spacing: ${({ theme }) => font(theme).copy.medium.letterSpacing};

    outline: none;
    box-shadow: none;
    border: solid 1px
        ${({ theme, inverted, disable }) =>
            disable
                ? color(theme).mono.medium
                : inverted
                ? color(theme).light
                : color(theme).dark};
    user-select: none;
    cursor: pointer;

    pointer-events: ${({ disable }) => (disable ? 'none' : 'all')};

    will-change: transform;

    background-color: transparent;
    color: ${({ theme, inverted, disable }) =>
        disable
            ? color(theme).mono.medium
            : inverted
            ? color(theme).light
            : color(theme).dark};
    text-align: center;

    transition: all ease-in-out 0.2s;

    & > * {
        color: ${({ theme, inverted, disable }) =>
            disable
                ? color(theme).mono.medium
                : inverted
                ? color(theme).light
                : color(theme).dark};
    }

    & > :not(:last-child) {
        padding-right: ${spacings.nudge}px;
    }

    &:hover {
        transform: scale(1.04);
    }

    &:focus {
        text-decoration: underline;
        transform: scale(1.012);
    }

    &:active {
        transform: scale(0.95);
    }
`;

interface Props {
    isInverted?: boolean;
    isDisabled?: boolean;
    onClick?: () => void;
    className?: string;
}

export type BtnProps = Props & {
    as?: 'button';
};

export type LinkProps = Props & {
    as?: 'a';
    href?: string;
    isExternal?: boolean;
};

const ButtonGhost: React.FC<BtnProps | LinkProps> = React.forwardRef(
    (
        { as, isInverted, isDisabled, onClick, className, children, ...rest },
        ref
    ) => {
        if (as === 'button') {
            return (
                <View
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
                    ref={ref}
                    as={as as any}
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

    color: ${({ theme, iconColor }) =>
        iconColor || color(theme).primary.medium};

    transition: transform 0.2s ease-in-out;

    ${View}:hover > & {
        transform: translateX(3px);
    }
`;

const Label = styled.span`
    display: inline-block;
`;

export default { View: ButtonGhost, Label: Label, Icon: Icon };
