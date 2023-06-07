import * as React from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
    display: block;
`;

const ButtonRight: React.FC<{
    key?: string;
    iconColor?: string;
    className?: string;
    ariaHidden?: boolean;
}> = ({ key, className, ariaHidden = true }) => (
    <SVG
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden={ariaHidden}
    >
        <circle cx="24" cy="24" r="24" fill="#000" fillOpacity=".4" />
        <g clipPath={`url(#button-right-path-${key})`}>
            <path
                d="m18.49 32.13 1.77 1.77 9.9-9.9-9.9-9.9-1.77 1.77L26.62 24l-8.13 8.13Z"
                fill="#fff"
            />
        </g>
        <defs>
            <clipPath id={`#button-right-path-${key}`}>
                <path fill="#fff" d="M12 12h24v24H12z" />
            </clipPath>
        </defs>
    </SVG>
);

export default ButtonRight;
