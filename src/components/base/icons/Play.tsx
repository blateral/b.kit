import * as React from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
    display: block;
`;

const Play: React.FC<{ iconColor?: string; className?: string }> = ({
    iconColor = 'currentColor',
    className,
}) => (
    <SVG
        width="67"
        height="67"
        viewBox="0 0 67 67"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path
            d="M26.5625 48.2812l20-15-20-15v30zM33.2812 0c9.1668 0 17.0052 3.25518 23.5157 9.76562 6.5104 6.51048 9.7656 14.34888 9.7656 23.51558 0 9.1668-3.2552 17.0052-9.7656 23.5157-6.5105 6.5104-14.3489 9.7656-23.5157 9.7656-9.1667 0-17.0051-3.2552-23.51558-9.7656C3.25518 50.2864 0 42.448 0 33.2812c0-9.1667 3.25518-17.0051 9.76562-23.51558C16.2761 3.25518 24.1145 0 33.2812 0z"
            fill={iconColor}
        />
    </SVG>
);

export default Play;
