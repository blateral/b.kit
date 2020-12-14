import * as React from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
    display: block;
`;

const Twitter: React.FC<{ iconColor?: string; className?: string }> = ({
    iconColor = 'currentColor',
    className,
}) => (
    <SVG
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M26.6735 0H3.39742C1.56099 0 .07227 1.48872.07227 3.32515V26.6012c0 1.8364 1.48872 3.3252 3.32515 3.3252H26.6735c1.8364 0 3.3251-1.4888 3.3251-3.3252V3.32515C29.9986 1.48872 28.5099 0 26.6735 0zm.0131 8.17421c-.4157.88117-1.3467 1.6792-2.1448 2.34419-.1163 7.6811-5.0209 12.9349-12.3529 13.2674-3.02588.133-5.20385-.8313-7.11582-2.045 2.22785.3492 4.98772-.532 6.48402-1.7956-2.19457-.2327-3.47475-1.3466-4.08991-3.1256.63178.0998 1.29681.0665 1.89534-.0499-1.97847-.665-3.39166-1.8953-3.45816-4.4557.54865.266 1.13055.4988 1.89534.5487-1.4797-.8479-2.56037-3.9237-1.31344-5.95204 2.1946 2.41073 4.83813 4.37254 9.17743 4.63854-1.0973-4.65517 5.0708-7.18228 7.6478-4.07327 1.0973-.19951 1.9785-.59853 2.843-1.06405-.3491 1.06405-1.0308 1.84546-1.862 2.44399.8978-.11638 1.7124-.33252 2.3941-.68166z"
            fill={iconColor}
        />
    </SVG>
);

export default Twitter;
