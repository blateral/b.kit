import * as React from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
    display: block;
`;

const CrossBubble: React.FC<{
    iconColor?: string;
    ariaHidden?: boolean;
    className?: string;
}> = ({ iconColor = 'currentColor', ariaHidden = true, className }) => (
    <SVG
        width="20"
        height="20"
        viewBox="0 0 20 20"
        aria-hidden={ariaHidden}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path
            fill={iconColor}
            d="M10 0c5.53 0 10 4.47 10 10s-4.47 10-10 10S0 15.53 0 10 4.47 0 10 0Zm3.59 5L10 8.59 6.41 5 5 6.41 8.59 10 5 13.59 6.41 15 10 11.41 13.59 15 15 13.59 11.41 10 15 6.41 13.59 5Z"
        />
    </SVG>
);

export default CrossBubble;
