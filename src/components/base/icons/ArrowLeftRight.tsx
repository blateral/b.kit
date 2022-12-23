import * as React from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
    display: block;
`;

const ArrowLeftRight: React.FC<{
    iconColor?: string;
    className?: string;
    ariaHidden?: boolean;
}> = ({ iconColor = 'currentColor', className, ariaHidden = true }) => (
    <SVG
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden={ariaHidden}
    >
        <path d="M17.01 11H5v2h12.01v3L21 12l-3.99-4v3Z" fill={iconColor} />
        <g clipPath="url(#a)">
            <path d="M7.99 13H20v-2H7.99V8L4 12l3.99 4v-3Z" fill={iconColor} />
        </g>
    </SVG>
);

export default ArrowLeftRight;
