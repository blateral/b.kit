import * as React from 'react';
import styled, { css } from 'styled-components';
import { useLibTheme } from 'utils/LibThemeProvider';
import {
    styleTextColor,
    FontType,
    getFonts as font,
    mq,
    withRange,
    FontProps,
} from 'utils/styles';

type HeadingType = Exclude<FontType, 'copy' | 'copy-i' | 'copy-b' | 'callout'>;

const base = css<{
    hyphens?: boolean;
    hasShadow?: boolean;
    textColor?: string;
    textGradient?: string;
}>`
    display: block;
    margin: 0;
    padding: 0;
    ${({ textColor, textGradient }) => styleTextColor(textColor, textGradient)}

    hyphens: auto;
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

export const headingStyle = (type: HeadingType) => css`
    ${base};
    font-family: ${({ theme }) => (font(theme)[type] as FontProps).family};
    font-weight: ${({ theme }) => (font(theme)[type] as FontProps).weight};
    font-style: ${({ theme }) => (font(theme)[type] as FontProps).style};
    ${({ theme }) =>
        withRange((font(theme)[type] as FontProps).size, 'font-size')}
    line-height: ${({ theme }) => (font(theme)[type] as FontProps).lineHeight};
    letter-spacing: ${({ theme }) =>
        (font(theme)[type] as FontProps).letterSpacing};
    text-transform: ${({ theme }) =>
        (font(theme)[type] as FontProps).textTransform};
`;

const View = styled.h1<{
    hyphens?: boolean;
    hasShadow?: boolean;
    textColor?: string;
    textGradient?: string;
    headingType: HeadingType;
}>`
    ${({ headingType }) => headingStyle(headingType)}
`;

export type HeadlineTag =
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'span'
    | 'div'
    | 'blockquote';

const Heading: React.FC<{
    renderAs?: HeadlineTag;
    isInverted?: boolean;
    size?: HeadingType;
    textColor?: string;
    textGradient?: string;
    hyphens?: boolean;
    hasShadow?: boolean;
    innerHTML?: string;

    className?: string;
}> = ({
    renderAs,
    isInverted,
    className,
    size = 'heading-2',
    textColor,
    textGradient,
    hyphens = false,
    hasShadow = false,
    innerHTML,
    children,
    ...rest
}) => {
    const { fonts } = useLibTheme();
    let tag: HeadlineTag = 'h2';

    switch (size) {
        default:
        case 'heading-1':
            tag = 'h1';
            break;
        case 'heading-2':
            tag = 'h2';
            break;
        case 'heading-3':
            tag = 'h3';
            break;
        case 'heading-4':
            tag = 'h4';
            break;
        case 'super':
            tag = 'div';
            break;
    }

    // get font settings from global context
    const fontSettings = fonts?.[size] as FontProps;

    return (
        <View
            lang="de"
            as={renderAs || tag}
            headingType={size}
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

Heading.defaultProps = {
    renderAs: 'h2',
    size: 'heading-2',
};

export default Heading;
