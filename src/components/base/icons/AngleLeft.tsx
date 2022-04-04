import * as React from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
    display: block;
`;

const AngleLeft: React.FC<{ iconColor?: string; className?: string }> = ({
    iconColor = 'currentColor',
    className,
}) => (
    <SVG
        viewBox="0 0 8 11"
        width="8"
        height="11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="m.74 5.553 5.303 5.303 1.061-1.06-4.242-4.243L7.104 1.31 6.044.25.74 5.553Z"
            fill={iconColor}
        />
    </SVG>
);

export default AngleLeft;
