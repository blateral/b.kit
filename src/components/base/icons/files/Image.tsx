import * as React from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
    display: block;
`;

const Image: React.FC<{
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
                d="M19.66 5.09c.25.25.465.589.644 1.017.178.429.267.822.267 1.179v15.428c0 .357-.125.661-.375.911a1.24 1.24 0 0 1-.91.375h-18a1.24 1.24 0 0 1-.911-.375 1.24 1.24 0 0 1-.375-.91V1.284C0 .93.125.626.375.376S.929 0 1.285 0h12c.358 0 .75.09 1.18.268.428.178.767.393 1.017.643l4.179 4.178ZM13.715 1.82v5.036h5.036c-.09-.259-.188-.442-.295-.549l-4.192-4.192c-.107-.107-.29-.205-.549-.295Zm5.143 20.465V8.57h-5.571a1.24 1.24 0 0 1-.911-.375 1.24 1.24 0 0 1-.375-.91V1.714H1.714v20.572h17.143Zm-1.714-6v4.285H3.429V18L6 15.429l1.714 1.714L12.857 12l4.286 4.286ZM7.82 12.964c-.5.5-1.107.75-1.821.75a2.48 2.48 0 0 1-1.821-.75 2.48 2.48 0 0 1-.75-1.821c0-.714.25-1.322.75-1.822s1.107-.75 1.821-.75 1.321.25 1.821.75.75 1.108.75 1.822a2.48 2.48 0 0 1-.75 1.821Z"
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

export default Image;
