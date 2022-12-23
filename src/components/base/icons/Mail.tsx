import React from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
    display: block;
`;

const Mail: React.FC<{
    iconColor?: string;
    className?: string;
    ariaHidden?: boolean;
}> = ({ iconColor = 'currentColor', className, ariaHidden = true }) => (
    <SVG
        viewBox="0 0 20 16"
        width="21"
        height="24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden={ariaHidden}
    >
        <path
            d="M20 2c0-1.1-.9-2-2-2H2C.9 0 0 .9 0 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V2Zm-2 0-8 5-8-5h16Zm0 12H2V4l8 5 8-5v10Z"
            fill={iconColor}
        />
    </SVG>
);

export default Mail;
