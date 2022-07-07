import * as React from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
    display: block;
`;

const ClockFilled: React.FC<{
    iconColor?: string;
    className?: string;
    ariaHidden?: boolean;
}> = ({ iconColor = 'currentColor', className, ariaHidden = true }) => (
    <SVG
        viewBox="0 0 28 28"
        width="28"
        height="28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden={ariaHidden}
    >
        <path
            d="M14 .667C6.667.667.667 6.667.667 14s6 13.333 13.333 13.333 13.333-6 13.333-13.333S21.333.667 14 .667ZM19.6 19.6l-6.933-4.267v-8h2v6.934l6 3.6L19.6 19.6Z"
            fill={iconColor}
        />
    </SVG>
);

export default ClockFilled;
