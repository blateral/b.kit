import * as React from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
    display: block;
`;

const LanguageIcon: React.FC<{
    iconColor?: string;
    className?: string;
    ariaHidden?: boolean;
}> = ({ iconColor = 'currentColor', className, ariaHidden = true }) => (
    <SVG
        width="16"
        height="16"
        viewBox="0 0 16 16"
        className={className}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden={ariaHidden}
    >
        <path
            d="M7.994 1.333A6.663 6.663 0 0 0 1.333 8c0 3.68 2.98 6.667 6.66 6.667A6.67 6.67 0 0 0 14.666 8a6.67 6.67 0 0 0-6.673-6.667Zm4.62 4h-1.967a10.432 10.432 0 0 0-.92-2.373 5.353 5.353 0 0 1 2.886 2.373ZM8 2.693c.553.8.987 1.687 1.274 2.64H6.726c.286-.953.72-1.84 1.273-2.64Zm-5.16 6.64A5.495 5.495 0 0 1 2.667 8c0-.46.067-.907.173-1.333h2.253C5.04 7.107 5 7.547 5 8c0 .454.04.893.093 1.334H2.84Zm.547 1.334h1.967c.213.833.52 1.633.92 2.373a5.325 5.325 0 0 1-2.887-2.373Zm1.967-5.333H3.387A5.325 5.325 0 0 1 6.274 2.96c-.4.74-.707 1.54-.92 2.373ZM8 13.306a9.39 9.39 0 0 1-1.273-2.64h2.546A9.39 9.39 0 0 1 8 13.307Zm1.56-3.973H6.44c-.06-.44-.107-.88-.107-1.334 0-.453.047-.9.107-1.333h3.12c.06.433.107.88.107 1.333 0 .454-.047.893-.107 1.334Zm.167 3.706c.4-.74.707-1.54.92-2.373h1.966a5.353 5.353 0 0 1-2.886 2.373Zm1.18-3.706C10.96 8.894 11 8.454 11 8c0-.453-.04-.893-.093-1.333h2.253c.107.426.174.873.174 1.333 0 .46-.067.907-.174 1.334h-2.253Z"
            fill={iconColor}
        />
    </SVG>
);

export default LanguageIcon;
