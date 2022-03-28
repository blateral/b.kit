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

    @media (hover: hover) and (pointer: fine) {
        &:hover {
            color: ${({ theme }) =>
                isInverted
                    ? font(theme).link.colorHoverInverted
                    : font(theme).link.colorHover};
        }
    }
`;

const View = styled.a<{ isInverted?: boolean }>`
    ${({ isInverted }) => linkStyles(isInverted)};
`;

const Link = forwardRef<
    HTMLAnchorElement,
    LinkProps & {
        ariaLabel?: string;
        isInverted?: boolean;
        className?: string;
        children?: React.ReactNode;
    }
>(
    (
        {
            isInverted = false,
            isExternal = false,
            href,
            ariaLabel,
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
                className={className}
            >
                {children}
            </View>
        );
    }
);

Link.displayName = 'Link';

export default Link;
