import * as React from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
    display: block;
`;

const Instagram: React.FC<{ iconColor?: string; className?: string }> = ({
    iconColor = 'currentColor',
    className,
}) => (
    <SVG
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.683 21.798C7.153 21.996 9.115 22 12 22c2.885 0 4.848-.004 6.317-.202 1.412-.19 2.066-.524 2.511-.97.446-.445.78-1.099.97-2.51.198-1.47.202-3.433.202-6.318s-.004-4.848-.202-6.317c-.19-1.412-.524-2.066-.97-2.511-.445-.446-1.099-.78-2.51-.97C16.847 2.004 14.884 2 12 2s-4.848.004-6.317.202c-1.412.19-2.066.524-2.511.97-.446.445-.78 1.099-.97 2.51C2.004 7.153 2 9.116 2 12s.004 4.848.202 6.317c.19 1.412.524 2.066.97 2.511.445.446 1.099.78 2.51.97ZM1.757 1.758C0 3.514 0 6.342 0 12c0 5.657 0 8.485 1.757 10.243C3.515 24 6.343 24 12 24s8.485 0 10.243-1.757C24 20.485 24 17.657 24 12s0-8.485-1.757-10.243C20.485 0 17.657 0 12 0S3.515 0 1.757 1.757Z"
            fill={iconColor}
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0 2a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"
            fill={iconColor}
        />
        <path
            d="M19.969 5.625a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
            fill={iconColor}
        />
    </SVG>
);

export default Instagram;
