import * as React from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
    display: block;
`;

const Map: React.FC<{ iconColor?: string; className?: string }> = ({
    iconColor = 'currentColor',
    className,
}) => (
    <SVG
        viewBox="0 0 18 18"
        width="18"
        height="18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path
            d="m17.5 0-.16.03L12 2.1 6 0 .36 1.9c-.21.07-.36.25-.36.48V17.5c0 .28.22.5.5.5l.16-.03L6 15.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V.5c0-.28-.22-.5-.5-.5ZM7 2.47l4 1.4v11.66l-4-1.4V2.47Zm-5 .99 3-1.01v11.7l-3 1.16V3.46Zm14 11.08-3 1.01V3.86l3-1.16v11.84Z"
            fill={iconColor}
        />
    </SVG>
);

export default Map;
