import * as React from 'react';
import {
    getColors as color,
    getColors,
    getFonts as font,
    MediaQueryType,
    mq,
    spacings,
    withRange,
} from '../../../../utils/styles';
import styled from 'styled-components';
import { FC, forwardRef } from 'react';

type MenuActionType = 'desktop' | 'mobile';

const View = styled.a<{
    isInverted?: boolean;
    disable?: boolean;
}>`
    min-height: 3em;
    height: 3.8em;
    min-width: auto;
    padding: 0.1em 1em;

    display: inline-block;
    display: inline-flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
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
    box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.25);
    box-shadow: ${({ isInverted }) => isInverted && 'none'};
    user-select: none;
    cursor: pointer;

    pointer-events: ${({ disable }) => (disable ? 'none' : 'all')};
    opacity: ${({ disable }) => disable && 0.6};

    will-change: transform;

    background-color: ${({ theme, isInverted }) =>
        isInverted ? color(theme).black : color(theme).white};
    color: ${({ theme, isInverted }) =>
        isInverted ? color(theme).white : color(theme).black};
    text-align: left;

    transition: all ease-in-out 0.2s;

    & > * {
        color: ${({ theme, disable, isInverted }) =>
            disable &&
            (isInverted ? color(theme).white : color(theme).black) +
                '!important'};
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

    @media ${mq.semilarge} {
        min-width: 120px;
        padding: 0.1em 1.2em;
    }
`;

const ViewGhost = styled(View)`
    border: solid 1px
        ${({ theme, isInverted }) =>
            isInverted ? color(theme).white : color(theme).black};
    box-shadow: none;
    background-color: transparent;
    font-weight: 400;
    text-align: center;

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
    breakAt?: MediaQueryType;
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

const MenuAction: FC<BtnProps | LinkProps> = forwardRef((props, ref) => {
    const BtnView = props.type === 'ghost' ? ViewGhost : View;

    if (props.as === 'button') {
        return (
            <BtnView
                ref={ref}
                as={props.as as any}
                isInverted={props.isInverted}
                disable={props.isDisabled}
                onClick={props.onClick}
                breakAt={props.breakAt}
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
                target={(props as LinkProps).isExternal && '_blank'}
                rel={(props as LinkProps).isExternal && 'noopener noreferrer'}
                isInverted={props.isInverted}
                disable={props.isDisabled}
                onClick={props.onClick}
                breakAt={props.breakAt}
                className={props.className}
            >
                {props.children}
            </BtnView>
        );
    }
});

MenuAction.displayName = 'MenuAction';

const Icon = styled.div<{
    visibleOn?: MenuActionType;
    color?: string;
}>`
    display: ${({ visibleOn }) => (visibleOn === 'mobile' ? 'flex' : 'none')};
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 35px;
    height: 35px;

    color: ${({ theme, color }) => color || getColors(theme).primary.medium};

    transition: transform 0.2s ease-in-out, color 0.2s ease-in-out;
    will-change: transform, color;

    ${View}:hover > & {
        transform: translateX(3px);
    }

    @media ${mq.semilarge} {
        display: ${({ visibleOn }) =>
            visibleOn === 'mobile' ? 'none' : 'flex'};
        justify-content: flex-end;
    }
`;

const Label = styled.span<{ visibleOn?: MenuActionType }>`
    display: ${({ visibleOn }) => (visibleOn === 'mobile' ? 'block' : 'none')};
    width: 100%;

    @media ${mq.semilarge} {
        display: ${({ visibleOn }) =>
            visibleOn === 'mobile' ? 'none' : 'block'};
    }
`;

export default {
    View: MenuAction,
    Label: Label,
    Icon: Icon,
};
