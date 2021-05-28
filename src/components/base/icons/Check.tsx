import * as React from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
    display: block;
`;

const Check: React.FC<{ iconColor?: string; className?: string }> = ({
    iconColor = 'currentColor',
    className,
}) => (
    <SVG
        width="12"
        height="9"
        viewBox="0 0 12 9"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path
            d="M10.833 1.162A.512.512 0 0010.444 1a.512.512 0 00-.388.162L4.333 6.708 1.944 4.392a.512.512 0 00-.388-.161.512.512 0 00-.39.161A.482.482 0 001 4.77c0 .162.056.27.167.377l2.777 2.692c.056.054.112.108.167.108.056.054.167.054.222.054.111 0 .167 0 .223-.054.055 0 .11-.054.166-.108l6.111-5.923A.482.482 0 0011 1.538a.482.482 0 00-.167-.376z"
            fill="#fff"
            stroke="#fff"
        />
    </SVG>
);

export default Check;
