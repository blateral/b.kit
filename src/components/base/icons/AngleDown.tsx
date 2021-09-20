import * as React from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
    display: block;
`;

const AngleDown: React.FC<{ iconColor?: string; className?: string }> = ({
    iconColor = 'currentColor',
    className,
}) => (
    <SVG
        width="18"
        height="10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 18 10"
        className={className}
    >
        <path
            d="M.461.519C.787.193 1.156.02 1.567 0c.412-.019.82.154 1.222.518l5.746 5.516L14.28.519c.402-.364.81-.537 1.221-.518.412.02.78.192 1.106.518.307.325.455.723.446 1.192-.01.47-.158.857-.446 1.164-.153.153-.598.584-1.336 1.293-.737.708-1.518 1.46-2.341 2.255-.824.795-1.57 1.508-2.241 2.14l-1.006.949a1.68 1.68 0 01-.531.359 1.554 1.554 0 01-1.236 0 1.681 1.681 0 01-.531-.36s-.336-.315-1.006-.948c-.67-.632-1.417-1.345-2.241-2.14-.824-.795-1.604-1.547-2.342-2.255C1.06 3.458.615 3.028.461 2.875.174 2.568.021 2.18.001 1.71c-.019-.47.135-.867.46-1.192z"
            fill={iconColor}
        />
    </SVG>
);

export default AngleDown;
