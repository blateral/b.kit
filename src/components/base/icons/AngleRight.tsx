import * as React from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
    display: block;
`;

const AngleRight: React.FC<{
    iconColor?: string;
    ariaHidden?: boolean;
    className?: string;
}> = ({ iconColor = 'currentColor', ariaHidden, className }) => (
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
            d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6Z"
            fill={iconColor}
        />
    </SVG>
);

export default AngleRight;
