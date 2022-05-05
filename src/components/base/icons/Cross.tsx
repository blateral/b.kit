import * as React from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
    display: block;
`;

const Cross: React.FC<{
    iconColor?: string;
    ariaHidden?: boolean;
    className?: string;
}> = ({ iconColor = 'currentColor', ariaHidden, className }) => (
    <SVG
        width="35"
        height="35"
        viewBox="0 0 24 24"
        aria-hidden={ariaHidden}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path
            d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41Z"
            fill={iconColor}
        />
    </SVG>
);

export default Cross;
