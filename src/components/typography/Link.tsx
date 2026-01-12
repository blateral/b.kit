/* eslint-disable react/jsx-no-target-blank */
import React, { forwardRef } from 'react';
import styled, { css } from 'styled-components';

import { getFonts as font } from 'utils/styles';

export interface LinkProps {
    isExternal?: boolean;
    href?: string;
}

export const linkStyles = (isInverted?: boolean) => css`
    color: ${({ theme }) =>
        isInverted ? font(theme).link.colorInverted : font(theme).link.color};
    text-transform: ${({ theme }) => font(theme).link.textTransform};
    text-decoration: ${({ theme }) => font(theme).link.textDecoration};

    transition: color 0.2s ease-in-out;

    outline: none;

    @media (hover: hover) and (pointer: fine) {
        &[href]:hover {
            color: ${({ theme }) =>
                isInverted
                    ? font(theme).link.colorHoverInverted
                    : font(theme).link.colorHover};
        }
    }

    &:focus:not(:focus-visible) {
        outline: none;
    }

    &:focus-visible {
        outline: 2px dotted
            ${({ theme }) =>
                isInverted
                    ? font(theme).link.colorInverted
                    : font(theme).link.color};
        outline-offset: 2px;
    }
`;

const View = styled.a<{ isInverted?: boolean }>`
    ${({ isInverted }) => linkStyles(isInverted)};
`;

const Link = forwardRef<
    HTMLAnchorElement,
    LinkProps & {
        id?: string;
        ariaLabel?: string;
        tabIndex?: number;
        dataSheet?: string;
        dataIdent?: string;
        isInverted?: boolean;
        onClick?: (ev?: React.SyntheticEvent<HTMLAnchorElement>) => void;
        className?: string;
        children?: React.ReactNode;
        ariaHidden?: boolean;
    }
>(
    (
        {
            id,
            isInverted = false,
            isExternal = false,
            onClick,
            href,
            ariaLabel,
            tabIndex,
            dataSheet,
            dataIdent,
            children,
            className,
            ariaHidden = false,
        },
        ref
    ) => {
        return (
            <View
                ref={ref}
                id={id}
                href={href}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener' : undefined}
                isInverted={isInverted}
                aria-label={ariaLabel}
                tabIndex={tabIndex}
                data-sheet={dataSheet}
                data-ident={dataIdent}
                onClick={onClick}
                className={className}
                aria-hidden={ariaHidden}
            >
                {children}
            </View>
        );
    }
);

Link.displayName = 'Link';

export default Link;
