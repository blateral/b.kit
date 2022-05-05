import * as React from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
    display: block;
`;

const ArrowLeft: React.FC<{ iconColor?: string; className?: string }> = ({
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
        <path d="M7.99 13H20v-2H7.99V8L4 12l3.99 4v-3Z" fill={iconColor} />
    </SVG>
);

export default ArrowLeft;
