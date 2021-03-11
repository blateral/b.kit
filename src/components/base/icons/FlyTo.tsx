import * as React from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
    display: block;
`;

const FlyTo: React.FC<{ iconColor?: string; className?: string }> = ({
    iconColor = 'currentColor',
    className,
}) => (
    <SVG
        width="52"
        height="52"
        viewBox="0 0 52 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path
            d="M26 31.8229c1.5347 0 2.8889-.5868 4.0625-1.7604S31.8229 27.5347 31.8229 26s-.5868-2.8889-1.7604-4.0625S27.5347 20.1771 26 20.1771s-2.8889.5868-4.0625 1.7604S20.1771 24.4653 20.1771 26s.5868 2.8889 1.7604 4.0625S24.4653 31.8229 26 31.8229zm0-17.3333c3.1597 0 5.868 1.1284 8.125 3.3854 2.257 2.257 3.3854 4.9653 3.3854 8.125s-1.1284 5.868-3.3854 8.125c-2.257 2.257-4.9653 3.3854-8.125 3.3854s-5.868-1.1284-8.125-3.3854c-2.257-2.257-3.3854-4.9653-3.3854-8.125s1.1284-5.868 3.3854-8.125c2.257-2.257 4.9653-3.3854 8.125-3.3854zm20.1771 31.6875V34.6667H52v11.5104c0 1.5347-.5868 2.8889-1.7604 4.0625S47.7118 52 46.1771 52H34.6667v-5.8229h11.5104zm0-46.1771c1.5347 0 2.8889.5868 4.0625 1.76042C51.4132 2.93403 52 4.28819 52 5.82292V17.3333h-5.8229V5.82292H34.6667V0h11.5104zM5.82292 5.82292V17.3333H0V5.82292c0-1.53473.5868-2.88889 1.76042-4.0625C2.93403.5868 4.28819 0 5.82292 0H17.3333v5.82292H5.82292zm0 28.84378v11.5104H17.3333V52H5.82292c-1.53473 0-2.88889-.5868-4.0625-1.7604C.5868 49.066 0 47.7118 0 46.1771V34.6667h5.82292z"
            fill={iconColor}
        />
    </SVG>
);

export default FlyTo;
