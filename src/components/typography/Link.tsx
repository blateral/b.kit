import React, { FC } from 'react';

export interface LinkProps {
    isExternal?: boolean;
    href?: string;
}

const Link: FC<
    LinkProps & {
        className?: string;
    }
> = ({ isExternal, href, children, className }) => {
    return (
        <a
            href={href}
            target={isExternal ? '_blank' : undefined}
            rel={isExternal ? 'noopener noreferrer' : undefined}
            className={className}
        >
            {children}
        </a>
    );
};

export default Link;
