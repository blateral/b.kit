import * as React from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
    display: block;
`;

const Clock: React.FC<{ iconColor?: string; className?: string }> = ({
    iconColor = 'currentColor',
    className,
}) => (
    <SVG
        width="32"
        height="32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className={className}
    >
        <path
            d="M16 2.667c-7.333 0-13.333 6-13.333 13.333s6 13.333 13.333 13.333 13.333-6 13.333-13.333S23.333 2.667 16 2.667ZM21.6 21.6l-6.933-4.267v-8h2v6.934l6 3.6L21.6 21.6Z"
            fill={iconColor}
        />
    </SVG>
);

export default Clock;
