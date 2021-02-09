import * as React from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
    display: block;
`;

const Mail: React.FC<{ iconColor?: string; className?: string }> = ({
    iconColor = 'currentColor',
    className,
}) => (
    <SVG
        width="25"
        height="25"
        viewBox="0 0 25 25"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path
            fill={iconColor}
            d="M22.3988 2.6786c.61982 0 1.16669.24181 1.64061.72545.47402.48363.71098 1.0417.71098 1.6741v14.844c0 .6324-.23696 1.1905-.71098 1.6741-.47392.4836-1.0208.7255-1.64061.7255H2.60173c-.61979 0-1.16669-.2419-1.64061-.7255s-.71094-1.0417-.71094-1.6741v-14.844c0-.63244.23698-1.1905.71094-1.6741.47396-.48363 1.0208-.72545 1.64061-.72545zm-.27349 5.0781V5.3571l-9.62495 6.529-9.62504-6.529v2.3996l9.62504 6.529z"
        />
    </SVG>
);

export default Mail;
