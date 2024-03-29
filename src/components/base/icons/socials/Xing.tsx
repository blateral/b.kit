import * as React from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
    display: block;
`;

const Xing: React.FC<{
    iconColor?: string;
    className?: string;
    ariaHidden?: boolean;
}> = ({ iconColor = 'currentColor', className, ariaHidden = true }) => (
    <SVG
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden={ariaHidden}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.04732 0C1.38475 0 .05469 1.33006.05469 2.99264V26.9337c0 1.6626 1.33006 2.9927 2.99263 2.9927H26.9884c1.6626 0 2.9926-1.3301 2.9926-2.9927V2.99264C29.981 1.33006 28.651 0 26.9884 0H3.04732zM21.782 3.33051h3.3917c.1995 0 .3657.06651.4323.21614.0997.14963.0997.33251 0 .5154L18.1742 17.2296l4.7384 8.6454c.0997.1829.0997.3658 0 .5154-.0831.133-.2328.2162-.4157.2162h-3.375c-.5154 0-.7814-.3492-.931-.6484l-4.7716-8.7452c.2327-.4156 7.4649-13.23408 7.4649-13.23408.1829-.33252.3991-.64841.8978-.64841zM10.1943 7.91799H6.85251c-.21613 0-.38239.08313-.46552.21614-.09975.18288-.0665.33251.01663.5154l2.2611 3.94027-3.55791 6.3012c-.0665.1829-.0665.3824 0 .5154.08313.1496.23276.2327.43227.2327h3.3584c.5154 0 .74816-.3325.93104-.6484 0 0 3.47478-6.1681 3.62438-6.4009L11.142 8.5664c-.1663-.31589-.4323-.64841-.9477-.64841z"
            fill={iconColor}
        />
    </SVG>
);

export default Xing;
