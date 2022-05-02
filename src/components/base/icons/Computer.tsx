import * as React from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
    display: block;
`;

const Computer: React.FC<{ iconColor?: string; className?: string }> = ({
    iconColor = 'currentColor',
    className,
}) => (
    <SVG
        viewBox="0 0 24 16"
        width="24"
        height="16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path
            d="M20 14c1.1 0 1.99-.9 1.99-2L22 2c0-1.1-.9-2-2-2H4C2.9 0 2 .9 2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4ZM4 2h16v10H4V2Z"
            fill={iconColor}
        />
    </SVG>
);

export default Computer;
