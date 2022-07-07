import * as React from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
    display: block;
`;

const LocationPin: React.FC<{
    iconColor?: string;
    className?: string;
    ariaHidden?: boolean;
}> = ({ iconColor = 'currentColor', className, ariaHidden = true }) => (
    <SVG
        viewBox="0 0 24 24"
        width="24"
        height="24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden={ariaHidden}
    >
        <path
            d="M12 2C8.13 2 5 5.13 5 9c0 1.74.5 3.37 1.41 4.84.95 1.54 2.2 2.86 3.16 4.4.47.75.81 1.45 1.17 2.26.26.55.47 1.5 1.26 1.5s1-.95 1.25-1.5c.37-.81.7-1.51 1.17-2.26.96-1.53 2.21-2.85 3.16-4.4C18.5 12.37 19 10.74 19 9c0-3.87-3.13-7-7-7Zm0 9.75a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5Z"
            fill={iconColor}
        />
    </SVG>
);

export default LocationPin;
