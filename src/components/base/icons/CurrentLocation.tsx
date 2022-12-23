import * as React from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
    display: block;
`;

const CurrentLocation: React.FC<{
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
        aria-hidden={ariaHidden}
        className={className}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm0 4c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z"
            fill={iconColor}
            fillOpacity=".5"
        />
        <path d="M18 12a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z" fill={iconColor} />
    </SVG>
);

export default CurrentLocation;
