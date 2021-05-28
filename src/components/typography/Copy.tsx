import * as React from 'react';
import styled, { css, ThemeContext } from 'styled-components';
import {
    FontType,
    mq,
    spacings,
    withRange,
    FontOptionType,
    getFonts as font,
} from 'utils/styles';

type CopyType = Exclude<
    FontType,
    | 'heading-1'
    | 'heading-2'
    | 'heading-3'
    | 'heading-4'
    | 'callout'
    | 'super'
    | 'label'
>;

const BaseStyles = styled.div<{
    textColor?: string;
    columns?: boolean;
    type: CopyType;
    size: FontOptionType;
}>`
    hyphens: auto;
    color: ${({ textColor }) => textColor || 'inherit'};

    @media ${mq.medium} {
        hyphens: none;
    }

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

    // *:last-child {
    //     margin-bottom: 0;
    // }

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
`;

const View = styled(BaseStyles)`
    font-family: ${({ type, size, theme }) => font(theme)[type][size].family};
    font-weight: ${({ type, size, theme }) => font(theme)[type][size].weight};
    font-style: ${({ type, size, theme }) => font(theme)[type][size].style};
    ${({ type, size, theme }) =>
        withRange(font(theme)[type][size].size, 'font-size')}
    line-height: ${({ type, size, theme }) =>
        font(theme)[type][size].lineHeight};
    letter-spacing: ${({ type, size, theme }) =>
        font(theme)[type][size].letterSpacing};
    text-transform: ${({ type, size, theme }) =>
        font(theme)[type][size].textTransform};
`;

const Copy: React.FC<{
    isInverted?: boolean;
    textColor?: string;
    type?: CopyType;
    size?: FontOptionType;
    columns?: boolean;
    innerHTML?: string;
    className?: string;
}> = ({
    isInverted,
    type = 'copy',
    size = 'medium',
    textColor,
    columns = false,
    innerHTML,
    className,
    children,
    ...rest
}) => {
    const theme = React.useContext(ThemeContext);
    const fontSettings = font(theme)?.[type]?.[size];

    return (
        <View
            type={type}
            size={size}
            textColor={
                textColor ||
                (isInverted ? fontSettings.colorInverted : fontSettings.color)
            }
            columns={columns}
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

Copy.defaultProps = { type: 'copy', size: 'medium' };

export default Copy;
