import * as React from 'react';
import styled, { css } from 'styled-components';
import { mq, spacings, withRange } from '../../utils/styles';
import { FontOptionType, fonts, FontType } from '../../theme';

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
    font-family: ${({ type, size }) => fonts[type][size].family};
    font-weight: ${({ type, size }) => fonts[type][size].weight};
    font-style: ${({ type, size }) => fonts[type][size].style};
    ${({ type, size }) => withRange(fonts[type][size].size, 'font-size')}
    line-height: ${({ type, size }) => fonts[type][size].lineHeight};
    letter-spacing: ${({ type, size }) => fonts[type][size].letterSpacing};
    text-transform: ${({ type, size }) => fonts[type][size].textTransform};
`;

const Copy: React.FC<{
    textColor?: string;
    type?: CopyType;
    size?: FontOptionType;
    columns?: boolean;
    className?: string;
}> = ({
    type = 'copy',
    size = 'medium',
    textColor,
    columns,
    className,
    children,
}) => {
    return (
        <View
            type={type}
            size={size}
            textColor={textColor}
            columns={columns}
            className={className}
        >
            {children}
        </View>
    );
};

Copy.defaultProps = { type: 'copy', size: 'medium' };

export default Copy;
