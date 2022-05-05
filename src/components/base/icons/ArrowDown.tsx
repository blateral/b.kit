import * as React from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
    display: block;
`;

const ArrowDown: React.FC<{ iconColor?: string; className?: string }> = ({
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
        <path d="M13 16.01V4h-2v12.01H8L12 20l4-3.99h-3Z" fill={iconColor} />
    </SVG>
);

export default ArrowDown;
