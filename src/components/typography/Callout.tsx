import * as React from 'react';
import styled, { css, ThemeContext } from 'styled-components';
import { FontOptionType, getFonts as font, mq, withRange } from 'utils/styles';

// Styles
const BaseStyles = styled.h1<{
    size: FontOptionType;
    hyphens?: boolean;
    hasShadow?: boolean;
    textColor?: string;
}>`
    margin: 0;
    padding: 0;
    color: ${({ textColor }) => textColor || 'inherit'};

    hyphens: auto;
    overflow-wrap: break-word;

    ${(props: { hyphens?: boolean }) =>
        !props.hyphens &&
        css`
            @media ${mq.large} {
                hyphens: none;
            }
        `}

    text-shadow: ${({ hasShadow }) =>
        hasShadow && '1px 2px 8px rgba(0, 0, 0, 0.25)'};
`;

const View = styled(BaseStyles)`
    font-family: ${({ theme, size }) => font(theme).callout[size].family};
    font-weight: ${({ theme, size }) => font(theme).callout[size].weight};
    font-style: ${({ theme, size }) => font(theme).callout[size].style};
    ${({ theme, size }) =>
        withRange(font(theme).callout[size].size, 'font-size')}
    line-height: ${({ theme, size }) => font(theme).callout[size].lineHeight};
    letter-spacing: ${({ theme, size }) =>
        font(theme).callout[size].letterSpacing};
    text-transform: ${({ theme, size }) =>
        font(theme).callout[size].textTransform};
`;

export type CalloutTag =
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'span'
    | 'div';

const Callout: React.FC<{
    isInverted?: boolean;
    as?: CalloutTag;
    size?: FontOptionType;
    textColor?: string;
    hyphens?: boolean;
    hasShadow?: boolean;

    className?: string;
}> = ({
    isInverted,
    as = 'h2',
    className,
    size = 'medium',
    textColor,
    hyphens = false,
    hasShadow = false,
    children,
}) => {
    const theme = React.useContext(ThemeContext);
    const fontSettings = font(theme)?.callout?.[size];

    return (
        <View
            as={as}
            size={size}
            textColor={
                textColor || isInverted
                    ? fontSettings.colorInverted
                    : fontSettings.color
            }
            hyphens={hyphens}
            hasShadow={hasShadow}
            className={className}
        >
            {children}
        </View>
    );
};

export default Callout;
