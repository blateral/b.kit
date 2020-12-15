import * as React from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
    display: block;
`;

const Star: React.FC<{ iconColor?: string; className?: string }> = ({
    iconColor = 'currentColor',
    className,
}) => (
    <SVG
        width="34"
        height="32"
        viewBox="0 0 34 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path
            d="M33.9231 12.1154l-11.8504-1.5523L16.9615 0l-5.1111 10.5631L0 12.1154l8.70793 7.9128L6.47416 31.5l10.48734-5.6412L27.4489 31.5l-2.2338-11.4718 8.708-7.9128z"
            fill={iconColor}
        />
    </SVG>
);

export default Star;
