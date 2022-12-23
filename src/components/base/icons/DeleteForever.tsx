import * as React from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
    display: block;
`;

const DeleteForever: React.FC<{
    iconColor?: string;
    ariaHidden?: boolean;
    className?: string;
}> = ({ iconColor = 'currentColor', ariaHidden = true, className }) => (
    <SVG
        viewBox="0 0 14 18"
        width="14"
        height="18"
        fill="none"
        aria-hidden={ariaHidden}
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path
            d="M9.12 7.47 7 9.59 4.87 7.47 3.46 8.88 5.59 11l-2.12 2.12 1.41 1.41L7 12.41l2.12 2.12 1.41-1.41L8.41 11l2.12-2.12-1.41-1.41ZM10.5 1l-1-1h-5l-1 1H0v2h14V1h-3.5ZM1 16c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V4H1v12ZM3 6h8v10H3V6Z"
            fill={iconColor}
        />
    </SVG>
);

export default DeleteForever;
