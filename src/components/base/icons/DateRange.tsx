import * as React from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
    display: block;
`;

const DateRange: React.FC<{ iconColor?: string; className?: string }> = ({
    iconColor = 'currentColor',
    className,
}) => (
    <SVG
        viewBox="0 0 18 20"
        width="18"
        height="20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path
            d="M4 9h2v2H4V9Zm14-5v14c0 1.1-.9 2-2 2H2a2 2 0 0 1-2-2L.01 4C.01 2.9.89 2 2 2h1V0h2v2h8V0h2v2h1c1.1 0 2 .9 2 2ZM2 6h14V4H2v2Zm14 12V8H2v10h14Zm-4-7h2V9h-2v2Zm-4 0h2V9H8v2Z"
            fill={iconColor}
        />
    </SVG>
);

export default DateRange;
