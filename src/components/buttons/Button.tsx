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
    min-width: 123px;
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
    border: none;
    user-select: none;
    cursor: pointer;

    pointer-events: ${({ disable }) => (disable ? 'none' : 'all')};

    will-change: transform;

    background-color: ${({ theme, inverted, disable }) =>
        disable
            ? color(theme).mono.medium
            : inverted
            ? color(theme).white
            : color(theme).black};
    color: ${({ theme, inverted, disable }) =>
        disable
            ? color(theme).white
            : inverted
            ? color(theme).black
            : color(theme).white};
    text-align: left;

    transition: all ease-in-out 0.2s;

    & > * {
        color: ${({ theme, inverted, disable }) =>
            disable
                ? color(theme).white
                : inverted
                ? color(theme).black
                : color(theme).white};
    }

    & > :not(:last-child) {
        padding-right: ${spacings.nudge}px;
    }

    &:hover {
        transform: scale(1.02);
    }

    &:focus {
        text-decoration: underline;
        transform: scale(1.012);
    }

    &:active {
        transform: scale(0.95);
    }
`;

const ViewGhost = styled(View)`
    border: solid 1px
        ${({ theme, inverted, disable }) =>
            disable
                ? color(theme).mono.medium
                : inverted
                ? color(theme).white
                : color(theme).black};
    box-shadow: none;
    background-color: transparent;
    text-align: center;
    color: ${({ theme, inverted, disable }) =>
        disable
            ? color(theme).mono.medium
            : inverted
            ? color(theme).white
            : color(theme).black};

    & > * {
        color: ${({ theme, inverted, disable }) =>
            disable
                ? color(theme).mono.medium
                : inverted
                ? color(theme).white
                : color(theme).black};
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
    type?: 'default' | 'ghost';
    isInverted?: boolean;
    isDisabled?: boolean;
    onClick?: () => void;
    className?: string;
}

type BtnProps = Props & {
    as?: 'button';
};

type LinkProps = Props & {
    as?: 'a';
    href?: string;
    isExternal?: boolean;
};

const Button: React.FC<BtnProps | LinkProps> = React.forwardRef(
    (props, ref) => {
        const BtnView = props.type === 'ghost' ? ViewGhost : View;

        if (props.as === 'button') {
            return (
                <BtnView
                    ref={ref}
                    as={props.as as any}
                    inverted={props.isInverted}
                    disable={props.isDisabled}
                    onClick={props.onClick}
                    className={props.className}
                >
                    {props.children}
                </BtnView>
            );
        } else {
            return (
                <BtnView
                    ref={ref}
                    as={props.as as any}
                    href={(props as LinkProps).href}
                    target={(props as LinkProps).isExternal ? '_blank' : ''}
                    rel={
                        (props as LinkProps).isExternal
                            ? 'noopener noreferrer'
                            : ''
                    }
                    inverted={props.isInverted}
                    disable={props.isDisabled}
                    onClick={props.onClick}
                    className={props.className}
                >
                    {props.children}
                </BtnView>
            );
        }
    }
);

Button.displayName = 'Button';

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

export default { View: Button, Label: Label, Icon: Icon };
