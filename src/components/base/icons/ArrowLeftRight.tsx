import * as React from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
    display: block;
`;

const ArrowLeftRight: React.FC<{ iconColor?: string; className?: string }> = ({
    iconColor = 'currentColor',
    className,
}) => (
    <SVG
        width="36"
        height="17"
        viewBox="0 0 36 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.06818 7.42108H32.7534l-6.3638-5.86523c-.3753-.34588-.3753-.71337 0-1.10248.1641-.17293.3635-.2594.598-.2594.2346 0 .4457.08647.6333.2594l7.8808 7.29576c.1642.12971.2463.31345.2463.55124 0 .21617-.0821.39991-.2463.55123l-7.8808 7.2309c-.1642.1729-.3694.2594-.6157.2594-.2462 0-.4515-.0864-.6156-.2594-.3753-.3459-.3753-.7133 0-1.1025l6.3663-5.86748H3.0657L9.43204 14.98c.37527.3459.37527.7134 0 1.1025-.16419.1729-.36355.2594-.5981.2594-.23455 0-.44564-.0865-.63328-.2594L.31986 8.78675c-.1642-.1297-.24628-.31344-.24628-.55123 0-.21617.08209-.39992.24627-.55124L8.20066.45338c.16419-.17294.36942-.25941.61569-.25941.24628 0 .4515.08647.61569.2594.37528.34588.37528.71337 0 1.10248L3.06818 7.42108z"
            fill={iconColor}
        />
    </SVG>
);

export default ArrowLeftRight;
