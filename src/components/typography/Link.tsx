/* eslint-disable react/jsx-no-target-blank */
import React, { forwardRef } from 'react';

export interface LinkProps {
    isExternal?: boolean;
    href?: string;
}

const Link = forwardRef<
    HTMLAnchorElement,
    LinkProps & {
        className?: string;
        children?: React.ReactNode;
    }
>(({ isExternal = false, href, children, className }, ref) => {
    return (
        <a
            ref={ref}
            href={href}
            target={isExternal ? '_blank' : undefined}
            rel={isExternal ? 'noopener noreferrer' : undefined}
            className={className}
        >
            {children}
        </a>
    );
});

Link.displayName = 'Link';

export default Link;
