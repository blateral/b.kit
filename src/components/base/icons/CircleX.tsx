import * as React from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
    display: block;
`;

const CircleX: React.FC<{
    iconColor?: string;
    ariaHidden?: boolean;
    className?: string;
    width?: number;
    height?: number;
}> = ({
    iconColor = 'currentColor',
    ariaHidden = true,
    width = 40,
    height = 40,
    className,
}) => (
    <SVG
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={iconColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden={ariaHidden}
        className={className}
    >
        <circle cx="12" cy="12" r="10" />
        <path d="m15 9-6 6" />
        <path d="m9 9 6 6" />
    </SVG>
);

export default CircleX;
