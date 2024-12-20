import * as React from 'react';
import styled, { css } from 'styled-components';
import { clampValue } from 'utils/clamp';
import { useLibTheme } from 'utils/LibThemeProvider';
import {
    FontType,
    mq,
    spacings,
    withRange,
    FontOptionType,
    getFonts as font,
    getGlobals as global,
    styleTextColor,
    FontOptions,
    LinkUrlIcon,
    LinkFontIcon,
} from 'utils/styles';
import { headingStyle } from './Heading';

export type CopyType = Extract<FontType, 'copy-b' | 'copy-i' | 'copy'>;

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
    text-decoration: ${({ theme }) => font(theme)[type][size].textDecoration};
`;

const base = css<{
    textColor?: string;
    textGradient?: string;
    columns?: boolean;
    isInverted?: boolean;
    copyType: CopyType;
    size: FontOptionType;
    allowLinkIcons?: boolean;
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

    a {
        color: ${({ theme, isInverted }) =>
            isInverted
                ? font(theme).link.colorInverted
                : font(theme).link.color};
        text-transform: ${({ theme }) => font(theme).link.textTransform};
        text-decoration: ${({ theme }) => font(theme).link.textDecoration};

        transition: color 0.2s ease-in-out;
        outline: none;

        @media (hover: hover) and (pointer: fine) {
            &:hover {
                color: ${({ theme, isInverted }) =>
                    isInverted
                        ? font(theme).link.colorHoverInverted
                        : font(theme).link.colorHover};
            }
        }

        &:focus {
            outline: 1px dashed
                ${({ theme, isInverted }) =>
                    isInverted
                        ? font(theme).link.colorInverted
                        : font(theme).link.color};
            outline-offset: 1px;
        }

        &:focus:not(:focus-visible) {
            outline: none;
        }
    }

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

    h5 {
        ${headingStyle('super')}
    }

    h2,
    h3,
    h4,
    h5 {
        margin-top: ${spacings.nudge * 3}px;
        margin-bottom: ${spacings.nudge * 3}px;
    }

    h2 {
        margin-bottom: ${spacings.spacer}px;
    }

    *:not(h2, h3, h4, h5) + h2,
    *:not(h2, h3, h4, h5) + h3,
    *:not(h2, h3, h4, h5) + h4,
    *:not(h2, h3, h4, h5) + h5 {
        margin-top: ${spacings.nudge * 5}px;
    }

    *:is(h3, h4, h5) + h2 {
        margin-top: -${spacings.nudge * 1.5}px;
    }

    b,
    strong {
        font-weight: bold;
    }

    p,
    blockquote,
    ol,
    ul {
        margin-top: ${spacings.nudge * 3}px;
        margin-bottom: ${spacings.nudge * 3}px;
    }

    ol,
    ul {
        padding-left: ${spacings.nudge * 3}px;
    }

    li {
        & > * {
            vertical-align: top;
        }
    }

    ul ul li {
        list-style-type: disc;
    }

    ol ol li {
        list-style-type: lower-latin;
    }

    ol ol ol li {
        list-style-type: lower-roman;
    }

    // classes for richtext
    a {
        display: inline-block;
    }

    a[href] + br + a[href] {
        margin-top: ${spacings.nudge * 2}px;
    }

    /** add icons to anchor tags with matching href value */
    ${({ theme, isInverted, copyType, size, allowLinkIcons }) => {
        if (!allowLinkIcons) return '';
        return global(theme).icons.linkIcons.map((item) => {
            const iconChar = parseInt((item as LinkFontIcon).iconChar);
            const iconFont = (item as LinkFontIcon).iconFont;
            const iconUrl = (item as LinkUrlIcon).iconUrl?.(isInverted);
            const iconScale = clampValue(
                item.scale?.({ type: copyType, size }) || 1,
                0
            );
            const patterns = item.patterns;
            const isFontIcon = !!iconChar && !!iconFont;
            const isValidIconChar = iconChar && !isNaN(iconChar) ? true : false;
            const vAlign = item.vAlign || (isFontIcon ? 'text-top' : 'top');

            const externalFilter = item.isExternal ? '[target="_blank"]' : '';

            const selectors =
                patterns
                    .filter((p) => p)
                    .map((p) => `a[href*='${p}']${externalFilter}`)
                    .join(', ') || `a${externalFilter}`;
            const pseudoSelectors =
                patterns
                    .filter((p) => p)
                    .map((p) => `a[href*='${p}']${externalFilter}:after`)
                    .join(', ') || `a${externalFilter}:after`;

            let content = '';
            if (iconChar || iconUrl) {
                content = isValidIconChar
                    ? `"${String.fromCharCode(iconChar)}"`
                    : `url("${iconUrl}")`;
            }

            return selectors && pseudoSelectors
                ? css`
                      ${selectors} {
                          display: inline-block;
                          position: relative;
                      }

                      ${pseudoSelectors} {
                          content: ${content || undefined};

                          display: inline-block;
                          font-family: ${iconFont || 'inherit'} !important;
                          font-size: ${isFontIcon && `${iconScale}em`};
                          font-style: normal;
                          font-weight: normal !important;
                          font-variant: normal;
                          text-transform: none;
                          text-decoration: none;
                          vertical-align: ${vAlign};
                          line-height: 1;
                          -webkit-font-smoothing: antialiased;
                          -moz-osx-font-smoothing: grayscale;

                          transform: ${!iconFont && iconUrl
                              ? `scale(${iconScale})`
                              : undefined};

                          max-height: ${!isFontIcon && '1em'};
                          margin-left: 0.3em;
                          margin-right: 0.1em;
                      }
                  `
                : '';
        });
    }}

    /** DOM element with icon and/or label */
    .icon-label {
        display: inline-flex;
        align-items: center;
        margin: 0;
        ${copyStyle('copy', 'medium')}
        vertical-align: middle;

        & > a:after {
            content: none;
        }

        & > * + * {
            margin-left: ${spacings.nudge * 2}px;
        }

        svg {
            max-width: 30px;
            fill: currentColor;
        }
    }

    .icon-label--big {
        ${copyStyle('copy', 'big')}
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

    *:first-child {
        margin-top: 0;
    }

    *:last-child {
        margin-bottom: 0;
    }
`;

const View = styled.div<{
    copyType: CopyType;
    size: FontOptionType;
    textColor?: string;
    textGradient?: string;
    isInverted?: boolean;
    columns?: boolean;
    allowLinkIcons?: boolean;
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
    | 'p'
    | 'caption'
    | 'figcaption';

const Copy: React.FC<{
    renderAs?: CopyTag;
    isInverted?: boolean;
    textColor?: string;
    textGradient?: string;
    type?: CopyType;
    size?: FontOptionType;
    columns?: boolean;
    innerHTML?: string;
    allowLinkIcons?: boolean;
    onClick?: (ev: React.SyntheticEvent<HTMLElement>) => void;
    className?: string;
    children?: React.ReactNode;
}> = ({
    renderAs,
    isInverted,
    type = 'copy',
    size = 'medium',
    textColor,
    textGradient,
    columns = false,
    innerHTML,
    allowLinkIcons = true,
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
            isInverted={isInverted}
            columns={columns}
            allowLinkIcons={allowLinkIcons}
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
