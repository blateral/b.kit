import * as React from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
    display: block;
`;

const Facebook: React.FC<{
    iconColor?: string;
    className?: string;
    ariaHidden?: boolean;
}> = ({ iconColor = 'currentColor', className, ariaHidden = true }) => (
    <SVG
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden={ariaHidden}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M26.6012 0H3.32515C1.48872 0 0 1.48872 0 3.32515V26.6012c0 1.8364 1.48872 3.3252 3.32515 3.3252H14.9832v.0053h4.9877v-.0053h6.6303c1.8364 0 3.3252-1.4888 3.3252-3.3252V3.32515C29.9264 1.48872 28.4376 0 26.6012 0zm-6.6303 29.9264V18.2937h4.9877V13.306h-4.9877V9.98081c0-.91821.7444-1.66257 1.6626-1.66257h3.3251V3.33051h-4.1564c-3.2138 0-5.819 2.60526-5.819 5.81902V13.306H11.658v4.9877h3.3252v11.6327h4.9877z"
            fill={iconColor}
        />
    </SVG>
);

export default Facebook;
