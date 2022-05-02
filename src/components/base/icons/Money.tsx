import React from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
    display: block;
`;

const Money: React.FC<{ iconColor?: string; className?: string }> = ({
    iconColor = 'currentColor',
    className,
}) => (
    <SVG
        viewBox="0 0 20 16"
        width="20"
        height="16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path
            d="M13 12h3c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1Zm1-6h1v4h-1V6Zm-7 6h3c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1Zm1-6h1v4H8V6ZM3 4h2v8H3V4ZM0 0v16h20V0H0Zm18 14H2V2h16v12Z"
            fill={iconColor}
        />
    </SVG>
);

export default Money;
