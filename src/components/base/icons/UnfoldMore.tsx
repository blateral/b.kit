import * as React from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
    display: block;
`;

const UnfoldMore: React.FC<{
    iconColor?: string;
    className?: string;
    ariaHidden?: boolean;
}> = ({ iconColor = 'currentColor', className, ariaHidden = true }) => (
    <SVG
        viewBox="0 0 10 18"
        xmlns="http://www.w3.org/2000/svg"
        width="10"
        height="18"
        fill="none"
        aria-hidden={ariaHidden}
        className={className}
    >
        <path
            fill={iconColor}
            d="M5 2.83 8.17 6l1.41-1.41L5 0 .41 4.59 1.83 6 5 2.83Zm0 12.34L1.83 12 .42 13.41 5 18l4.59-4.59L8.17 12 5 15.17Z"
        />
    </SVG>
);

export default UnfoldMore;
