import * as React from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
    display: block;
`;

const Category: React.FC<{
    iconColor?: string;
    ariaHidden?: boolean;
    className?: string;
}> = ({ ariaHidden = true, iconColor = 'currentColor', className }) => (
    <SVG
        viewBox="0 0 19 20"
        width="19"
        height="20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden={ariaHidden}
        className={className}
    >
        <path
            d="M9 0 3.5 9h11L9 0Zm0 3.84L10.93 7H7.06L9 3.84ZM14.5 11c-2.49 0-4.5 2.01-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.01 4.5-4.5-2.01-4.5-4.5-4.5Zm0 7a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5ZM0 19.5h8v-8H0v8Zm2-6h4v4H2v-4Z"
            fill={iconColor}
        />
    </SVG>
);

export default Category;
