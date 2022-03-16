import * as React from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
    display: block;
`;

const ExclamationMark: React.FC<{ iconColor?: string; className?: string }> = ({
    iconColor = 'currentColor',
    className,
}) => (
    <SVG
        width="48"
        height="48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        className={className}
    >
        <circle cx="24" cy="24" r="22" stroke={iconColor} strokeWidth="4" />
        <path
            d="M26.21 19.741h-5.1v15.592h5.1V19.741Zm0-5.136a2.605 2.605 0 1 0-5.21 0 2.605 2.605 0 0 0 5.21 0Z"
            fill={iconColor}
        />
    </SVG>
);

export default ExclamationMark;
