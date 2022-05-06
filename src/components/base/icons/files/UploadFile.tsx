import * as React from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
    display: block;
`;

const UploadFile: React.FC<{ iconColor?: string; className?: string }> = ({
    iconColor = 'currentColor',
    className,
}) => (
    <SVG
        viewBox="0 0 16 20"
        width="16"
        height="20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path
            d="M10 0H2C.9 0 .01.9.01 2L0 18c0 1.1.89 2 1.99 2H14c1.1 0 2-.9 2-2V6l-6-6Zm4 18H2V2h7v5h5v11ZM4 13.01l1.41 1.41L7 12.84V17h2v-4.16l1.59 1.59L12 13.01 8.01 9 4 13.01Z"
            fill={iconColor}
        />
    </SVG>
);

export default UploadFile;
