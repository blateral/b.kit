import * as React from 'react';
import styled, { css } from 'styled-components';
import { spacings, mq } from '../../utils/styles';

export interface ColPropsSettings {
    /** Normalisierte Werte zwischen 0 und 1: z.B.  12 von 28 Spalten (12 / 28) */
    span?: number;
    /** Normalisierte Werte zwischen -1 und 1: z.B. -12 von 28 Spalten (-12 / 28) */
    move?: number;
    valign?: VerticalAlign;
}

type VerticalAlign = 'top' | 'center' | 'bottom';

interface ColProps extends ColPropsSettings {
    medium?: ColPropsSettings;
    semilarge?: ColPropsSettings;
    large?: ColPropsSettings;
    xlarge?: ColPropsSettings;
}

const gridSettings = {
    cols: 28,
    gutter: spacings.spacer,
};

const getWidth = (props: ColProps) => {
    const mediumSpan = props.medium ? props.medium.span : 1;
    const semilargeSpan = props.semilarge ? props.semilarge.span : 1;
    const largeSpan = props.large ? props.large.span : 1;
    const xlargeSpan = props.xlarge ? props.xlarge.span : 1;

    return css`
        width: ${(props.span || 1) * 100}%;

        ${(props: ColProps) => {
            return props.medium
                ? css`
                      @media ${mq.medium} {
                          width: ${(mediumSpan || 1) * 100}%;
                      }
                  `
                : '';
        }}

        ${(props: ColProps) => {
            return props.semilarge
                ? css`
                      @media ${mq.semilarge} {
                          width: ${(semilargeSpan || 1) * 100}%;
                      }
                  `
                : '';
        }}

        ${(props: ColProps) => {
            return props.large
                ? css`
                      @media ${mq.large} {
                          width: ${(largeSpan || 1) * 100}%;
                      }
                  `
                : '';
        }}

        ${(props: ColProps) => {
            return props.xlarge
                ? css`
                      @media ${mq.xlarge} {
                          width: ${(xlargeSpan || 1) * 100}%;
                      }
                  `
                : '';
        }}
    `;
};

const getLeftRight = (props: ColProps) => {
    const mediumMove = props.medium ? props.medium.move : 0;
    const semilargeMove = props.semilarge ? props.semilarge.move : 0;
    const largeMove = props.large ? props.large.move : 0;
    const xlargeMove = props.xlarge ? props.xlarge.move : 0;

    return css`
        left: ${props.move && props.move > 0 ? props.move * 100 + '%' : 'auto'};
        right: ${props.move && props.move < 0
            ? props.move * -100 + '%'
            : 'auto'};

        ${(props: ColProps) => {
            return props.medium
                ? css`
                      @media ${mq.medium} {
                          left: ${mediumMove && mediumMove > 0
                              ? mediumMove * 100 + '%'
                              : 'auto'};
                          right: ${mediumMove && mediumMove < 0
                              ? mediumMove * -100 + '%'
                              : 'auto'};
                      }
                  `
                : '';
        }}

        ${(props: ColProps) => {
            return props.semilarge
                ? css`
                      @media ${mq.semilarge} {
                          left: ${semilargeMove && semilargeMove > 0
                              ? semilargeMove * 100 + '%'
                              : 'auto'};
                          right: ${semilargeMove && semilargeMove < 0
                              ? semilargeMove * -100 + '%'
                              : 'auto'};
                      }
                  `
                : '';
        }}

        ${(props: ColProps) => {
            return props.large
                ? css`
                      @media ${mq.large} {
                          left: ${largeMove && largeMove > 0
                              ? largeMove * 100 + '%'
                              : 'auto'};
                          right: ${largeMove && largeMove < 0
                              ? largeMove * -100 + '%'
                              : 'auto'};
                      }
                  `
                : '';
        }}

        ${(props: ColProps) => {
            return props.xlarge
                ? css`
                      @media ${mq.xlarge} {
                          left: ${xlargeMove && xlargeMove > 0
                              ? xlargeMove * 100 + '%'
                              : 'auto'};
                          right: ${xlargeMove && xlargeMove < 0
                              ? xlargeMove * -100 + '%'
                              : 'auto'};
                      }
                  `
                : '';
        }}
    `;
};

const StyledCol = styled.div<GridProps & ColProps>`
    ${getWidth};
    ${getLeftRight};
    padding-top: ${({ gutter }) => gutter || 0}px;
    padding-left: ${({ gutter }) => gutter || 0}px;
    display: block;
    position: relative;

    align-self: ${({ valign }) => {
        switch (valign) {
            case 'top':
                return 'flex-start';
            case 'center':
                return 'center';
            case 'bottom':
                return 'flex-end';
            default:
                return undefined;
        }
    }};
`;

const Col: React.FC<ColProps> = (props) => {
    return <React.Fragment>{props.children}</React.Fragment>;
};

interface GridProps {
    gutter?: number;
    valign?: VerticalAlign;
}

const StyledGrid = styled.div<GridProps>`
    margin-top: -${({ gutter }) => gutter || 0}px;
    margin-left: -${({ gutter }) => gutter || 0}px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    align-items: ${({ valign }) => {
        switch (valign) {
            case 'top':
                return 'flex-start';
            case 'center':
                return 'center';
            case 'bottom':
                return 'flex-end';
            default:
                return undefined;
        }
    }};
`;

const Grid: React.FC<GridProps> = ({ gutter, valign, children }) => {
    return (
        <StyledGrid gutter={gutter} valign={valign}>
            {React.Children.map(children, (comp: any) => {
                return <StyledCol {...comp.props} gutter={gutter} />;
            })}
        </StyledGrid>
    );
};

Grid.defaultProps = {
    gutter: gridSettings.gutter,
};

export default {
    Row: Grid,
    Col,
};
