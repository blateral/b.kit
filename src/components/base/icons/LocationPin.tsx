import * as React from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
    display: block;
`;

const LocationPin: React.FC<{ iconColor?: string; className?: string }> = ({
    iconColor = 'currentColor',
    className,
}) => (
    <SVG
        className={className}
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M16 2.667A9.327 9.327 0 0 0 6.667 12C6.667 19 16 29.333 16 29.333S25.333 19 25.333 12A9.326 9.326 0 0 0 16 2.667Zm0 12.666A3.335 3.335 0 1 1 19.333 12 3.335 3.335 0 0 1 16 15.333Z"
            fill={iconColor}
        />
    </SVG>
);

export default LocationPin;
