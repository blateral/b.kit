import * as React from 'react';
import styled, { css, ThemeContext } from 'styled-components';
import {
    FontOptionType,
    getFonts as font,
    mq,
    styleTextColor,
    withRange,
} from 'utils/styles';

// Styles
const BaseStyles = styled.h1<{
    size: FontOptionType;
    hyphens?: boolean;
    hasShadow?: boolean;
    textColor?: string;
    textGradient?: string;
}>`
    margin: 0;
    padding: 0;
    ${({ textColor, textGradient }) => styleTextColor(textColor, textGradient)}

    hyphens: auto;
    /* -webkit-hyphens: auto; */
    /* overflow-wrap: break-word; */

    ${(props: { hyphens?: boolean }) =>
        !props.hyphens &&
        css`
            @media ${mq.large} {
                hyphens: none;
            }
        `}

    text-shadow: ${({ hasShadow }) =>
        hasShadow && '1px 2px 8px rgba(0, 0, 0, 0.25)'};

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin: 0;
        padding: 0;
        border: 0;
        outline: 0;
        font-weight: inherit;
        font-style: inherit;
        font-size: 100%;
        font-family: inherit;
        vertical-align: baseline;
    }
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
    | 'div'
    | 'blockquote';

const Callout: React.FC<{
    isInverted?: boolean;
    renderAs?: CalloutTag;
    size?: FontOptionType;
    textColor?: string;
    textGradient?: string;
    hyphens?: boolean;
    hasShadow?: boolean;
    innerHTML?: string;

    className?: string;
}> = ({
    isInverted,
    renderAs = 'h2',
    className,
    size = 'medium',
    textColor,
    textGradient,
    hyphens = false,
    hasShadow = false,
    innerHTML,
    children,
    ...rest
}) => {
    const theme = React.useContext(ThemeContext);
    const fontSettings = font(theme)?.callout?.[size];

    return (
        <View
            as={renderAs}
            size={size}
            textColor={
                textColor ||
                (isInverted ? fontSettings.colorInverted : fontSettings.color)
            }
            textGradient={
                textGradient ||
                (!textColor
                    ? isInverted
                        ? fontSettings.colorGradientInverted
                        : fontSettings.colorGradient
                    : undefined)
            }
            hyphens={hyphens}
            hasShadow={hasShadow}
            dangerouslySetInnerHTML={
                innerHTML && !children ? { __html: innerHTML } : undefined
            }
            className={className}
            {...rest}
        >
            {children}
        </View>
    );
};

Callout.defaultProps = {
    renderAs: 'h1',
    size: 'medium',
};

export default Callout;
