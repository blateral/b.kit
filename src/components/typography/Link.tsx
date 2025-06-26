/* eslint-disable react/jsx-no-target-blank */
import React, { FC } from 'react';

export interface LinkProps {
    isExternal?: boolean;
    href?: string;
    title?: string;
    ariaLabel?: string;
    ariaCurrent?: React.ComponentProps<'a'>['aria-current'];
}

const Link: FC<
    LinkProps & {
        className?: string;
    }
> = ({
    isExternal = false,
    href,
    title,
    ariaLabel,
    ariaCurrent,
    children,
    className,
}) => {
    return (
        <a
            href={href}
            target={isExternal ? '_blank' : undefined}
            rel={isExternal ? 'noopener noreferrer' : undefined}
            title={title}
            aria-label={ariaLabel}
            aria-current={ariaCurrent}
            className={className}
        >
            {children}
        </a>
    );
};

export default Link;
