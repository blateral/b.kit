import * as React from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
    display: block;
`;

const Pdf: React.FC<{ className?: string; iconColor?: string }> = ({
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
                d="M19.66 5.09c.25.25.465.589.644 1.017.178.429.267.822.267 1.179v15.428c0 .357-.125.661-.375.911a1.24 1.24 0 0 1-.91.375h-18a1.24 1.24 0 0 1-.911-.375 1.24 1.24 0 0 1-.375-.91V1.284C0 .93.125.626.375.376S.929 0 1.285 0h12c.358 0 .75.09 1.18.268.428.178.767.393 1.017.643l4.179 4.178ZM13.715 1.82v5.036h5.036c-.09-.259-.188-.442-.295-.549l-4.192-4.192c-.107-.107-.29-.205-.549-.295Zm5.143 20.465V8.57h-5.571a1.24 1.24 0 0 1-.911-.375 1.24 1.24 0 0 1-.375-.91V1.714H1.714v20.572h17.143Zm-6.884-7.942c.295.232.67.482 1.125.75A13.27 13.27 0 0 1 14.665 15c1.313 0 2.103.219 2.37.656.144.197.152.429.027.697 0 .009-.004.017-.013.026l-.027.027v.014c-.053.339-.37.509-.95.509-.43 0-.942-.09-1.54-.268a9.767 9.767 0 0 1-1.742-.71c-1.973.214-3.723.585-5.25 1.111-1.366 2.34-2.446 3.51-3.24 3.51a.779.779 0 0 1-.376-.094l-.321-.161a1.389 1.389 0 0 0-.08-.067c-.09-.09-.117-.25-.081-.482.08-.357.33-.766.75-1.226.42-.46 1.009-.89 1.768-1.292.125-.08.228-.054.308.08.018.018.027.036.027.054.464-.759.942-1.639 1.433-2.639.607-1.214 1.071-2.383 1.393-3.508A10.826 10.826 0 0 1 8.712 9.1c-.058-.692-.029-1.26.087-1.707.098-.357.286-.536.563-.536H9.656c.206 0 .362.067.469.201.16.188.2.491.12.91a.29.29 0 0 1-.053.108.35.35 0 0 1 .013.107v.402c-.018 1.098-.08 1.955-.187 2.571.49 1.464 1.143 2.527 1.955 3.188ZM4.26 19.848c.464-.214 1.076-.92 1.835-2.116a7.64 7.64 0 0 0-1.172 1.125c-.326.393-.547.723-.663.991Zm5.33-12.321c-.134.375-.143.964-.027 1.768.01-.063.04-.26.094-.59 0-.026.031-.218.094-.576a.302.302 0 0 1 .054-.107c-.01-.009-.014-.018-.014-.026a.103.103 0 0 1-.013-.04.771.771 0 0 0-.174-.483c0 .01-.005.018-.014.027v.027Zm-1.66 8.852a19.643 19.643 0 0 1 3.803-1.084 2.036 2.036 0 0 1-.174-.128 2.378 2.378 0 0 1-.214-.18c-.679-.599-1.246-1.384-1.701-2.357-.241.767-.612 1.647-1.112 2.638-.268.5-.469.87-.602 1.111Zm8.651-.214c-.214-.214-.839-.321-1.875-.321.679.25 1.232.375 1.661.375a1.3 1.3 0 0 0 .241-.014c0-.009-.009-.022-.027-.04Z"
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

export default Pdf;
