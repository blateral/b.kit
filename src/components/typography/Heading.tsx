import * as React from 'react';
import styled, { css, ThemeContext } from 'styled-components';
import { FontType, getFonts as font, mq, withRange } from 'utils/styles';

type HeadingType = Exclude<
    FontType,
    'copy' | 'copy-i' | 'copy-b' | 'label' | 'callout'
>;

// Styles
const BaseStyles = styled.h1<{
    hyphens?: boolean;
    hasShadow?: boolean;
    textColor?: string;
    type: HeadingType;
}>`
    margin: 0;
    padding: 0;
    color: ${({ textColor }) => textColor};

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
    font-family: ${({ type, theme }) => font(theme)[type].family};
    font-weight: ${({ type, theme }) => font(theme)[type].weight};
    font-style: ${({ type, theme }) => font(theme)[type].style};
    ${({ type, theme }) => withRange(font(theme)[type].size, 'font-size')}
    line-height: ${({ type, theme }) => font(theme)[type].lineHeight};
    letter-spacing: ${({ type, theme }) => font(theme)[type].letterSpacing};
    text-transform: ${({ type, theme }) => font(theme)[type].textTransform};
`;

export type HeadlineTag =
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'span'
    | 'div';

const Heading: React.FC<{
    as?: HeadlineTag;
    isInverted?: boolean;
    size?: HeadingType;
    textColor?: string;
    hyphens?: boolean;
    hasShadow?: boolean;

    className?: string;
}> = ({
    as,
    isInverted,
    className,
    size = 'heading-2',
    textColor,
    hyphens = false,
    hasShadow = false,
    children,
}) => {
    const theme = React.useContext(ThemeContext);
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
    const fontSettings = font(theme)?.[size];

    return (
        <View
            as={as || tag}
            type={size}
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

Heading.defaultProps = {
    as: 'h2',
    size: 'heading-2',
};

export default Heading;
