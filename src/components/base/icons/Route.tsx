import * as React from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
    display: block;
`;

const Route: React.FC<{ iconColor?: string; className?: string }> = ({
    iconColor = 'currentColor',
    className,
}) => (
    <SVG
        width="29"
        height="30"
        viewBox="0 0 29 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path
            d="M28.629 13.5725L15.4275.371C15.1802.12367 14.871 0 14.5 0s-.6802.12367-.9275.371L.371 13.5725c-.24733.2679-.371.5823-.371.943 0 .3607.12367.6647.371.912L13.5725 28.629c.2473.2679.5565.4019.9275.4019s.6802-.134.9275-.4019L28.629 15.4275c.2473-.2473.371-.5513.371-.912s-.1237-.6751-.371-.943zm-11.5011 4.2356V14.5h-6.5853v3.9574H7.91471v-5.2559c0-.371.12882-.6853.38646-.943.25765-.2576.56166-.3864.91205-.3864h7.91468V8.56397l4.6376 4.63753-4.6376 4.6066z"
            fill={iconColor}
        />
    </SVG>
);

export default Route;
