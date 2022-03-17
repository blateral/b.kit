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
        width="11"
        height="15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 13 18"
        className={className}
    >
        <g clipPath="url(#a)">
            <path
                d="M3.601.007 0 3.607 5.392 9 0 14.392l3.601 3.601L12.595 9 3.6.007Z"
                fill={iconColor}
            />
        </g>
        <defs>
            <clipPath id="a">
                <path fill="transparent" d="M0 0h12.595v18H0z" />
            </clipPath>
        </defs>
    </SVG>
);

export default AngleRight;
