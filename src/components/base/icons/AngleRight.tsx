import * as React from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
    display: block;
`;

const AngleRight: React.FC<{ iconColor?: string; className?: string }> = ({
    iconColor = 'currentColor',
    className,
}) => (
    <SVG
        viewBox="0 0 13 18"
        width="11"
        height="15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path
            d="M3.601 0 0 3.601l5.392 5.392L0 14.386l3.601 3.6 8.994-8.993L3.6 0Z"
            fill={iconColor}
        />
    </SVG>
);

export default AngleRight;
