import * as React from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
    display: block;
`;

const CalendarToday: React.FC<{
    iconColor?: string;
    className?: string;
    ariaHidden?: boolean;
}> = ({ iconColor = 'currentColor', className, ariaHidden = true }) => (
    <SVG
        viewBox="0 0 20 22"
        width="20"
        height="22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden={ariaHidden}
    >
        <path
            d="M18 2h-1V0h-2v2H5V0H3v2H2C.9 2 0 2.9 0 4v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2Zm0 18H2V9h16v11Zm0-13H2V4h16v3Z"
            fill={iconColor}
        />
    </SVG>
);

export default CalendarToday;
