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
        width="8"
        height="11"
        viewBox="0 0 8 11"
        fill="none"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden={ariaHidden}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.104 5.553 1.801.25.74 1.31l4.242 4.243L.74 9.796l1.06 1.06 5.304-5.303Z"
            fill={iconColor}
        />
    </SVG>
);

export default AngleRight;
