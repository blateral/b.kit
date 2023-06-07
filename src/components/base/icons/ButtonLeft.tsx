import * as React from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
    display: block;
`;

const ButtonLeft: React.FC<{
    id?: string;
    iconColor?: string;
    className?: string;
    ariaHidden?: boolean;
}> = ({ id, className, ariaHidden = true }) => (
    <SVG
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden={ariaHidden}
    >
        <circle
            cx="24"
            cy="24"
            r="24"
            transform="rotate(-180 24 24)"
            fill="#000"
            fillOpacity=".4"
        />
        <g clipPath={`url(#button-left-path-${id})`}>
            <path
                d="m29.51 15.87-1.77-1.77-9.9 9.9 9.9 9.9 1.77-1.77L21.38 24l8.13-8.13Z"
                fill="#fff"
            />
        </g>
        <defs>
            <clipPath id={`button-left-path-${id}`}>
                <path fill="#fff" d="M36 36H12V12h24z" />
            </clipPath>
        </defs>
    </SVG>
);

export default ButtonLeft;
