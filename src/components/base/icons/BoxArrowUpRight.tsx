import * as React from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
    display: block;
`;

const BoxArrowUpRight: React.FC<{ iconColor?: string; className?: string }> = ({
    iconColor = 'currentColor',
    className,
}) => (
    <SVG
        viewBox="0 0 14 16"
        width="21"
        height="24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.556 3.063a.437.437 0 0 0-.437-.438H1.313A1.313 1.313 0 0 0 0 3.938v8.75A1.313 1.313 0 0 0 1.313 14h8.75a1.313 1.313 0 0 0 1.312-1.313V6.881a.438.438 0 0 0-.875 0v5.806a.438.438 0 0 1-.438.438h-8.75a.438.438 0 0 1-.437-.438v-8.75a.438.438 0 0 1 .438-.437h5.806a.437.437 0 0 0 .438-.438Z"
            fill={iconColor}
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14 .437A.438.438 0 0 0 13.562 0H9.189a.437.437 0 0 0 0 .875h3.319L5.378 8.002a.438.438 0 0 0 .62.62l7.127-7.128v3.318a.437.437 0 1 0 .875 0V.437Z"
            fill={iconColor}
        />
    </SVG>
);

export default BoxArrowUpRight;
