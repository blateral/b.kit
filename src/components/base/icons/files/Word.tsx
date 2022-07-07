import * as React from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
    display: block;
`;

const Word: React.FC<{
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
                d="M19.66 5.09c.25.25.465.589.644 1.017.178.429.267.822.267 1.179v15.428c0 .357-.125.661-.375.911a1.24 1.24 0 0 1-.91.375h-18a1.24 1.24 0 0 1-.911-.375 1.24 1.24 0 0 1-.375-.91V1.284C0 .93.125.626.375.376S.929 0 1.285 0h12c.358 0 .75.09 1.18.268.428.178.767.393 1.017.643l4.179 4.178ZM13.715 1.82v5.036h5.036c-.09-.259-.188-.442-.295-.549l-4.192-4.192c-.107-.107-.29-.205-.549-.295Zm5.143 20.465V8.57h-5.571a1.24 1.24 0 0 1-.911-.375 1.24 1.24 0 0 1-.375-.91V1.714H1.714v20.572h17.143Zm-11.719-12v1.433H5.933l1.326 5.866c.045.178.076.384.094.616l.026.281h.054l.054-.281.046-.288c.023-.138.043-.248.06-.328l1.93-7.3h1.526l1.929 7.3c.018.08.04.192.067.335l.053.28a.46.46 0 0 0 .014.088l.02.107c.004.031.006.06.006.087h.054l.027-.281c.018-.232.049-.438.094-.616l1.325-5.866h-1.205v-1.433h4.018v1.433h-.938l-2.196 8.852h-2.13l-1.714-6.495a2.16 2.16 0 0 1-.073-.348 2.63 2.63 0 0 0-.047-.268l-.04-.322h-.054c0 .072-.009.179-.027.322a2.858 2.858 0 0 1-.134.616L8.384 20.57h-2.13L4.058 11.72h-.937v-1.433h4.017Z"
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

export default Word;
