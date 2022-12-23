import styled from 'styled-components';
import { spacings, getColors as color } from 'utils/styles';

const Column = styled.div<{
    isInverted?: boolean;
    takeSpace?: boolean;
    vAlign?: 'top' | 'center' | 'bottom';
}>`
    flex: ${({ takeSpace }) => (takeSpace ? 1 : undefined)};

    padding: ${spacings.nudge}px 0;
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

    text-align: center;
    color: ${({ theme, isInverted }) =>
        isInverted ? color(theme).text.inverted : color(theme).text.inverted};

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

export default Column;
