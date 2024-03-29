import * as React from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
    display: block;
`;

const Excel: React.FC<{
    className?: string;
    iconColor?: string;
    ariaHidden?: boolean;
}> = ({ className, iconColor = 'currentColor', ariaHidden = true }) => (
    <SVG
        viewBox="0 0 21 24"
        className={className}
        width="21"
        height="24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden={ariaHidden}
    >
        <g clipPath="url(#a)">
            <path
                d="M19.66 5.09c.25.25.465.589.644 1.017.178.429.267.822.267 1.179v15.428c0 .357-.125.661-.375.911a1.24 1.24 0 0 1-.91.375h-18a1.24 1.24 0 0 1-.911-.375 1.24 1.24 0 0 1-.375-.91V1.284C0 .93.125.626.375.376S.929 0 1.285 0h12c.358 0 .75.09 1.18.268.428.178.767.393 1.017.643l4.179 4.178ZM13.715 1.82v5.036h5.036c-.09-.259-.188-.442-.295-.549l-4.192-4.192c-.107-.107-.29-.205-.549-.295Zm5.143 20.465V8.57h-5.571a1.24 1.24 0 0 1-.911-.375 1.24 1.24 0 0 1-.375-.91V1.714H1.714v20.572h17.143Zm-12.2-3.134 2.597-3.79-2.53-3.643h-.912v-1.433h3.884v1.433H8.68l1.42 2.13c.097.106.173.209.227.307a.464.464 0 0 1 .067.134h.027l.026-.04a6.027 6.027 0 0 0 .255-.402l1.38-2.13h-.992v-1.432h3.737v1.433h-.897l-2.612 3.777 2.571 3.656h.911v1.42h-3.897v-1.42h1.018l-1.433-2.157a8.961 8.961 0 0 0-.087-.113 3.315 3.315 0 0 1-.08-.107.76.76 0 0 1-.061-.1.461.461 0 0 1-.067-.135h-.027c-.009 0-.024.018-.047.054a3.125 3.125 0 0 0-.1.18c-.045.085-.09.159-.134.221l-1.38 2.157H9.51v1.42H5.746v-1.42h.91Z"
                fill={iconColor}
            />
        </g>
        <defs>
            <clipPath id="a">
                <path fill="#fff" d="M0 0h20.571v24H0z" />
            </clipPath>
        </defs>
    </SVG>
);

export default Excel;
