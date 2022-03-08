/* eslint-disable react/jsx-no-target-blank */
import React, { forwardRef } from 'react';

export interface LinkProps {
    isExternal?: boolean;
    href?: string;
}

const Link = forwardRef<
    HTMLAnchorElement,
    LinkProps & {
        ariaLabel?: string;
        className?: string;
        children?: React.ReactNode;
    }
>(({ isExternal = false, href, ariaLabel, children, className }, ref) => {
    return (
        <a
            ref={ref}
            href={href}
            target={isExternal ? '_blank' : undefined}
            rel={isExternal ? 'noopener noreferrer' : undefined}
            aria-label={ariaLabel}
            className={className}
        >
            {children}
        </a>
    );
});

Link.displayName = 'Link';

export default Link;
