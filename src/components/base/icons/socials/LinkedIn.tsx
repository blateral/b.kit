import * as React from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
    display: block;
`;

const LinkedIn: React.FC<{ iconColor?: string; className?: string }> = ({
    iconColor = 'currentColor',
    className,
}) => (
    <SVG
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M29.9752 3.32515C29.9752 1.48872 28.4865 0 26.65 0H3.37398C1.53755 0 .04883 1.48872.04883 3.32515V26.6012c0 1.8364 1.48872 3.3252 3.32515 3.3252H26.65c1.8365 0 3.3252-1.4888 3.3252-3.3252V3.32515zM25.7835 16.9523v8.8116h-4.6386v-8.1965c0-1.2855-1.0421-2.3276-2.3276-2.3276-1.2802 0-2.311 1.0475-2.311 2.3276v8.1965h-4.6386V11.8482h4.6386v1.8454c.7981-1.2968 2.444-2.1613 3.8572-2.1613 2.9934 0 5.42 2.4266 5.42 5.42zM6.487 9.24675c1.54261 0 2.79313-1.25053 2.79313-2.79313 0-1.54619-1.24693-2.80975-2.79313-2.80975-1.55178 0-2.80975 1.25797-2.80975 2.80975 0 1.5462 1.26356 2.79313 2.80975 2.79313zM8.77571 11.855v13.9157H4.17037V11.855h4.60534z"
            fill={iconColor}
        />
    </SVG>
);

export default LinkedIn;
