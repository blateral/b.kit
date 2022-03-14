import * as React from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
    display: block;
`;

const Play: React.FC<{ iconColor?: string; className?: string }> = ({
    iconColor = '#000',
    className,
}) => (
    <SVG
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path
            d="M31.925 58.028 55.962 40 31.925 21.972v36.056ZM40 0c11.017 0 20.438 3.912 28.263 11.737C76.088 19.562 80 28.983 80 40c0 11.017-3.912 20.438-11.737 28.263C60.438 76.088 51.017 80 40 80c-11.017 0-20.438-3.912-28.263-11.737C3.912 60.438 0 51.017 0 40c0-11.017 3.912-20.438 11.737-28.263C19.562 3.912 28.983 0 40 0Z"
            fill={iconColor}
        />
        <path d="M31.925 58.028 55.962 40 31.925 21.972v36.056Z" fill="#fff" />
    </SVG>
);

export default Play;
