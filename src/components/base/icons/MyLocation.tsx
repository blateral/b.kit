import * as React from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
    display: block;
`;

const MyLocation: React.FC<{
    iconColor?: string;
    ariaHidden?: boolean;
    className?: string;
}> = ({ iconColor = 'currentColor', ariaHidden = true, className }) => (
    <SVG
        viewBox="0 0 22 22"
        width="22"
        height="22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden={ariaHidden}
        className={className}
    >
        <path
            d="M11 7c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4Zm8.94 3A8.994 8.994 0 0 0 12 2.06V0h-2v2.06A8.994 8.994 0 0 0 2.06 10H0v2h2.06A8.994 8.994 0 0 0 10 19.94V22h2v-2.06A8.994 8.994 0 0 0 19.94 12H22v-2h-2.06ZM11 18c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7Z"
            fill={iconColor}
        />
    </SVG>
);

export default MyLocation;
