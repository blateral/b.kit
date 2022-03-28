import * as React from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
    display: block;
`;

const ArrowDown: React.FC<{ iconColor?: string; className?: string }> = ({
    iconColor = 'currentColor',
    className,
}) => (
    <SVG
        viewBox="0 0 9 15"
        width="9"
        height="15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4 12.96V0h1v12.96l2.688-2.15.624.78L4.5 14.64.688 11.59l.624-.78L4 12.96Z"
            fill={iconColor}
        />
    </SVG>
);

export default ArrowDown;
