import * as React from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
    display: block;
`;

const PowerPoint: React.FC<{
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
                d="M19.66 5.09c.25.25.465.589.644 1.017.178.429.267.822.267 1.179v15.428c0 .357-.125.661-.375.911a1.24 1.24 0 0 1-.91.375h-18a1.24 1.24 0 0 1-.911-.375 1.24 1.24 0 0 1-.375-.91V1.284C0 .93.125.626.375.376S.929 0 1.285 0h12c.358 0 .75.09 1.18.268.428.178.767.393 1.017.643l4.179 4.178ZM13.715 1.82v5.036h5.036c-.09-.259-.188-.442-.295-.549l-4.192-4.192c-.107-.107-.29-.205-.549-.295Zm5.143 20.465V8.57h-5.571a1.24 1.24 0 0 1-.911-.375 1.24 1.24 0 0 1-.375-.91V1.714H1.714v20.572h17.143ZM6.804 19.152v-7.433H5.57v-1.433H10.5c.732 0 1.313.085 1.741.254.563.241 1.009.63 1.34 1.165.33.536.495 1.165.495 1.889 0 .732-.176 1.384-.53 1.955-.352.572-.827.96-1.425 1.165-.376.134-.902.201-1.58.201H8.704v2.237h1.246v1.42H5.57v-1.42h1.233Zm3.495-3.75c.42 0 .768-.067 1.045-.201.553-.277.83-.813.83-1.607 0-.732-.25-1.246-.75-1.54-.277-.161-.647-.242-1.111-.242H8.704v3.59H10.3Z"
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

export default PowerPoint;
