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
        &:hover {
            color: ${({ theme }) =>
                isInverted
                    ? font(theme).link.colorHoverInverted
                    : font(theme).link.colorHover};
        }
    }

    &:focus:not(:focus-visible) {
        outline: none;
    }

    &:focus {
        outline: 1px dashed
            ${({ theme }) =>
                isInverted
                    ? font(theme).link.colorInverted
                    : font(theme).link.color};
        outline-offset: 1px;
    }
`;

const View = styled.a<{ isInverted?: boolean }>`
    ${({ isInverted }) => linkStyles(isInverted)};
`;

const Link = forwardRef<
    HTMLAnchorElement,
    LinkProps & {
        ariaLabel?: string;
        tabIndex?: number;
        dataSheet?: string;
        isInverted?: boolean;
        onClick?: (ev?: React.SyntheticEvent<HTMLAnchorElement>) => void;
        className?: string;
        children?: React.ReactNode;
    }
>(
    (
        {
            isInverted = false,
            isExternal = false,
            onClick,
            href,
            ariaLabel,
            tabIndex,
            dataSheet,
            children,
            className,
        },
        ref
    ) => {
        return (
            <View
                ref={ref}
                href={href}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                isInverted={isInverted}
                aria-label={ariaLabel}
                tabIndex={tabIndex}
                data-sheet={dataSheet}
                onClick={onClick}
                className={className}
            >
                {children}
            </View>
        );
    }
);

Link.displayName = 'Link';

export default Link;
