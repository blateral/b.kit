import * as React from 'react';
import styled from 'styled-components';
import Link from 'components/typography/Link';

const bdotColor = '#1fc2f4';

const Dot = styled(Link)`
    width: 11px;
    height: 11px;

    display: inline-block;
    vertical-align: middle;
    border-radius: 50%;

    background: ${bdotColor};
    color: ${bdotColor};
    text-decoration: none;

    span {
        visibility: hidden;
        font-size: 0;
        color: transparent;
    }
`;

const Bdot: React.FC<{ className?: string }> = ({ className }) => {
    return (
        <Dot className={className} href="https://blateral.com" isExternal>
            <span>b.lateral - creative agency</span>
        </Dot>
    );
};

export default Bdot;
