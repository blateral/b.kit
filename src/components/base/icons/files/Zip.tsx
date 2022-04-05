import * as React from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
    display: block;
`;

const Zip: React.FC<{ className?: string; iconColor?: string }> = ({
    className,
    iconColor = 'currentColor',
}) => (
    <SVG
        viewBox="0 0 21 24"
        className={className}
        width="21"
        height="24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g clipPath="url(#a)">
            <path
                d="M6.857 5.143V3.429h1.714v1.714H6.857Zm1.714 1.714V5.143h1.715v1.714H8.57ZM6.857 8.571V6.857h1.714v1.714H6.857Zm1.714 1.715V8.57h1.715v1.715H8.57Zm11.09-5.197c.25.25.464.59.643 1.018.178.429.267.822.267 1.179v15.428c0 .357-.125.661-.375.911a1.24 1.24 0 0 1-.91.375h-18a1.24 1.24 0 0 1-.911-.375 1.24 1.24 0 0 1-.375-.91V1.284C0 .93.125.626.375.376S.929 0 1.285 0h12c.358 0 .75.09 1.18.268.428.178.767.393 1.017.643l4.179 4.178Zm-5.947-3.268v5.036h5.036c-.09-.259-.188-.442-.295-.549l-4.192-4.192c-.107-.107-.29-.205-.549-.295Zm5.143 20.465V8.57h-5.571a1.24 1.24 0 0 1-.911-.375 1.24 1.24 0 0 1-.375-.91V1.714h-1.714V3.43H8.57V1.714H1.714v20.572h17.143Zm-8.397-9.657 1.433 4.675c.071.24.107.473.107.696 0 .741-.324 1.355-.971 1.841-.647.487-1.466.73-2.458.73-.99 0-1.81-.243-2.457-.73-.647-.486-.971-1.1-.971-1.841 0-.223.036-.455.107-.696.188-.563.723-2.33 1.607-5.304v-1.714h1.714V12H9.63a.853.853 0 0 1 .83.63Zm-3.107 5.974c.339.17.745.254 1.218.254.474 0 .878-.085 1.212-.254.335-.17.503-.37.503-.603 0-.232-.168-.433-.503-.603-.334-.17-.738-.254-1.212-.254-.473 0-.877.085-1.212.254-.334.17-.502.37-.502.603 0 .232.165.433.496.603Z"
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

export default Zip;
