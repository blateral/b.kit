import * as React from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
    display: block;
`;

const CrossSmall: React.FC<{ iconColor?: string; className?: string }> = ({
    iconColor = 'currentColor',
    className,
}) => (
    <SVG
        width="15"
        height="15"
        viewBox="0 0 35 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path
            d="M35 2.77995L32.2201 0 17.5 14.7201 2.77995 0 0 2.77995 14.7201 17.5 0 32.2201 2.77995 35 17.5 20.2799 32.2201 35 35 32.2201 20.2799 17.5 35 2.77995z"
            fill={iconColor}
        />
    </SVG>
);

export default CrossSmall;
