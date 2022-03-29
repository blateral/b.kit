import styled from 'styled-components';

import Copy from 'components/typography/Copy';
import { spacings } from 'utils/styles';

const Column = styled(Copy)<{
    takeSpace?: boolean;
    vAlign?: 'top' | 'center' | 'bottom';
}>`
    text-align: center;
    min-width: -webkit-min-content;
    align-self: ${({ vAlign }) => {
        switch (vAlign) {
            case 'center':
                return 'center';

            case 'bottom':
                return 'flex-end';

            case 'top':
                return 'flex-start';

            default:
                return undefined;
        }
    }};

    flex: ${({ takeSpace }) => (takeSpace ? 1 : undefined)};

    &:first-child {
        text-align: left;
    }

    &:last-child {
        text-align: right;
    }

    &:not(:first-child):not(:last-child) {
        margin: 0 ${spacings.nudge * 2}px;
    }
`;

const Logo = styled.img`
    max-width: 100%;
    height: 100%;
    object-fit: contain;
`;

export default {
    Col: Column,
    Logo,
};
