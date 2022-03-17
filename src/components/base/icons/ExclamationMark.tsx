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
        viewBox="0 0 48 48"
        width="48"
        height="48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm0 4c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24Z"
            fill={iconColor}
        />
        <path
            d="M26.21 19.741h-5.1v15.592h5.1V19.741Zm0-5.136a2.605 2.605 0 1 0-5.21 0 2.605 2.605 0 0 0 5.21 0"
            fill={iconColor}
        />
    </SVG>
);

export default ExclamationMark;
