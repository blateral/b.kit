import * as React from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
    display: block;
`;

const External: React.FC<{ iconColor?: string; className?: string }> = ({
    iconColor = 'currentColor',
    className,
}) => (
    <SVG
        viewBox="0 0 24 24"
        width="24"
        height="24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <g
            clipPath="url(#linkIconPath)"
            fillRule="evenodd"
            clipRule="evenodd"
            fill={iconColor}
        >
            <path d="M13.954 5.25a.75.75 0 0 0-.75-.75H3.25A2.25 2.25 0 0 0 1 6.75v15A2.25 2.25 0 0 0 3.25 24h15a2.25 2.25 0 0 0 2.25-2.25v-9.954a.75.75 0 1 0-1.5 0v9.954a.75.75 0 0 1-.75.75h-15a.75.75 0 0 1-.75-.75v-15A.75.75 0 0 1 3.25 6h9.954a.75.75 0 0 0 .75-.75Z" />
            <path d="M24 .75a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 1 0 0 1.5h5.69L9.22 13.719a.75.75 0 1 0 1.061 1.062l12.22-12.22V8.25a.75.75 0 1 0 1.5 0V.75Z" />
        </g>
        <defs>
            <clipPath id="linkIconPath">
                <path fill="#fff" d="M0 0h24v24H0z" />
            </clipPath>
        </defs>
    </SVG>
);

export default External;
