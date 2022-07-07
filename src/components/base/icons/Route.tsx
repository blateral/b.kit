import * as React from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
    display: block;
`;

const Route: React.FC<{
    iconColor?: string;
    className?: string;
    ariaHidden?: boolean;
}> = ({ iconColor = 'currentColor', className, ariaHidden = true }) => (
    <SVG
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden={ariaHidden}
    >
        <path
            d="M14 10H9c-.6 0-1 .4-1 1v4h2v-3h4v2.5l3.5-3.5L14 7.5V10Zm-2-9C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1Zm7.73 11.58-7.19 7.22c-.35.27-.79.27-1.15 0L4.2 12.58a.932.932 0 0 1 0-1.16l7.19-7.22c.35-.27.79-.27 1.15 0l7.19 7.22c.36.27.36.8 0 1.16Z"
            fill={iconColor}
        />
    </SVG>
);

export default Route;
