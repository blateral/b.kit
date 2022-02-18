import * as React from 'react';
import styled, { css } from 'styled-components';
import { useLibTheme } from 'utils/LibThemeProvider';
import {
    FontType,
    mq,
    spacings,
    withRange,
    FontOptionType,
    getFonts as font,
    styleTextColor,
    FontOptions,
} from 'utils/styles';
import { headingStyle } from './Heading';

export type CopyType = Exclude<
    FontType,
    'heading-1' | 'heading-2' | 'heading-3' | 'heading-4' | 'callout' | 'super'
>;

export const copyStyle = (
    type: CopyType,
    size: keyof FontOptions = 'medium'
) => css`
    font-family: ${({ theme }) => font(theme)[type][size].family};
    font-weight: ${({ theme }) => font(theme)[type][size].weight};
    font-style: ${({ theme }) => font(theme)[type][size].style};
    ${({ theme }) => withRange(font(theme)[type][size].size, 'font-size')}
    line-height: ${({ theme }) => font(theme)[type][size].lineHeight};
    letter-spacing: ${({ theme }) => font(theme)[type][size].letterSpacing};
    text-transform: ${({ theme }) => font(theme)[type][size].textTransform};
`;

const base = css<{
    textColor?: string;
    textGradient?: string;
    columns?: boolean;
}>`
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

    hyphens: auto;
    ${({ textColor, textGradient }) => styleTextColor(textColor, textGradient)}

    /* @media ${mq.medium} {
        hyphens: none;
    } */

    a:not([class]) {
        color: currentColor;
        transition: color 0.25s;

        &:hover {
            opacity: 0.75;
        }
    }

    *:first-child {
        margin-top: 0;
    }

    *:last-child {
        margin-bottom: 0;
    }

    /* :not(li) > ul,
    :not(li) > ol {
        display: inline-block;
        padding-left: 0;
    }

    li > ul,
    li > ol {
        padding-left: 0;
    } */

    /* ul,
    ol li {
        list-style-position: outside;
        margin-left: 1.1em;
    } */

    & > p {
        margin-right: 0;
        margin-left: 0;
        padding: 0;
    }

    ${({ columns }) =>
        columns &&
        css`
            columns: 350px 2;
            column-gap: ${spacings.spacer}px;

            li {
                break-inside: avoid;
            }

            blockquote {
                break-inside: avoid;
            }
        `};

    h2 {
        ${headingStyle('heading-2')}
    }

    h3 {
        ${headingStyle('heading-3')}
    }

    h4 {
        ${headingStyle('heading-4')}
    }

    // classes for richtext

    /** DOM element with icon and/or label */
    .icon-label {
        display: inline-flex;
        align-items: center;
        margin: 0;
        padding-left: ${spacings.nudge}px;
        padding-right: ${spacings.nudge}px;
        ${copyStyle('copy', 'big')}
        vertical-align: middle;

        & > * + * {
            margin-left: ${spacings.nudge * 2}px;
        }

        svg {
            max-width: 30px;
            fill: currentColor;
        }
    }

    .icon-label--list {
        display: flex;
        align-items: center;
        margin: 0;
        padding: 0;
    }

    .icon-label--list + .icon-label--list {
        margin-top: ${spacings.nudge * 3}px;
    }
`;

const View = styled.div<{
    copyType: CopyType;
    size: FontOptionType;
    textColor?: string;
    textGradient?: string;
    columns?: boolean;
}>`
    ${base}
    ${({ copyType, size }) => copyStyle(copyType, size)}
`;

export type CopyTag =
    | 'label'
    | 'span'
    | 'div'
    | 'legend'
    | 'th'
    | 'td'
    | 'li'
    | 'caption';

const Copy: React.FC<{
    renderAs?: CopyTag;
    isInverted?: boolean;
    textColor?: string;
    textGradient?: string;
    type?: CopyType;
    size?: FontOptionType;
    columns?: boolean;
    innerHTML?: string;
    onClick?: (ev: React.SyntheticEvent<HTMLElement>) => void;
    className?: string;
}> = ({
    renderAs,
    isInverted,
    type = 'copy',
    size = 'medium',
    textColor,
    textGradient,
    columns = false,
    innerHTML,
    onClick,
    className,
    children,
    ...rest
}) => {
    const { fonts } = useLibTheme();
    const fontSettings = fonts?.[type]?.[size];

    return (
        <View
            as={renderAs}
            copyType={type}
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
            columns={columns}
            dangerouslySetInnerHTML={
                innerHTML && !children ? { __html: innerHTML } : undefined
            }
            onClick={onClick}
            className={className}
            {...rest}
        >
            {children}
        </View>
    );
};

Copy.defaultProps = { type: 'copy', size: 'medium' };

export default Copy;
