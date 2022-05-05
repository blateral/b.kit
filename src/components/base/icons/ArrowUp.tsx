import * as React from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
    display: block;
`;

const ArrowUp: React.FC<{ iconColor?: string; className?: string }> = ({
    iconColor = 'currentColor',
    className,
}) => (
    <SVG
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className={className}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M11 7.99V20h2V7.99h3L12 4 8 7.99h3Z" fill={iconColor} />
    </SVG>
);

export default ArrowUp;
