import * as React from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
    display: block;
`;

const AngleUp: React.FC<{ iconColor?: string; className?: string }> = ({
    iconColor = 'currentColor',
    className,
}) => (
    <SVG
        width="18"
        height="10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 18 10"
        className={className}
    >
        <path
            d="M16.593 9.481c-.325.326-.694.498-1.106.518-.412.019-.819-.154-1.22-.518L8.52 3.965 2.774 9.48c-.403.364-.81.537-1.222.518-.411-.02-.78-.192-1.106-.518A1.624 1.624 0 01.001 8.29c.01-.47.158-.857.445-1.164.154-.153.599-.584 1.336-1.293.738-.708 1.518-1.46 2.342-2.255.824-.795 1.57-1.508 2.241-2.14L7.371.488c.153-.153.33-.273.531-.359a1.554 1.554 0 011.236 0c.2.086.378.206.531.36l1.006.948c.67.632 1.417 1.345 2.24 2.14.824.795 1.605 1.547 2.342 2.255.738.71 1.183 1.14 1.336 1.293.288.307.44.695.46 1.164.02.47-.134.867-.46 1.192z"
            fill={iconColor}
            fillOpacity=".94"
        />
    </SVG>
);

export default AngleUp;
