import * as React from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
    display: block;
`;

const MenuBurger: React.FC<{
    iconColor?: string;
    ariaHidden?: boolean;
    className?: string;
}> = ({ iconColor = 'currentColor', ariaHidden, className }) => (
    <SVG
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className={className}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden={ariaHidden}
    >
        <path
            d="M3 18h18v-2H3v2Zm0-5h18v-2H3v2Zm0-7v2h18V6H3Z"
            fill={iconColor}
        />
    </SVG>
);

export default MenuBurger;
