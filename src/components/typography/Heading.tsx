import * as React from 'react';
import styled, { css } from 'styled-components';
import { mq, withRange } from 'utils/styles';
import { fonts, FontType } from '../../../theme';

type HeadingType = Exclude<
    FontType,
    'copy' | 'copy-i' | 'copy-b' | 'super' | 'label' | 'callout'
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
    font-family: ${({ type }) => fonts[type].family};
    font-weight: ${({ type }) => fonts[type].weight};
    font-style: ${({ type }) => fonts[type].style};
    ${({ type }) => withRange(fonts[type].size, 'font-size')}
    line-height: ${({ type }) => fonts[type].lineHeight};
    letter-spacing: ${({ type }) => fonts[type].letterSpacing};
    text-transform: ${({ type }) => fonts[type].textTransform};
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

export type HeadlineSize = 1 | 2 | 3 | 4 | 5;

const Heading: React.FC<{
    as?: HeadlineTag;
    size?: HeadlineSize;
    textColor?: string;
    hyphens?: boolean;
    hasShadow?: boolean;

    className?: string;
}> = ({ as, className, size, textColor, hyphens, hasShadow, children }) => {
    let tag: HeadlineTag = 'h1';
    let type: HeadingType = 'heading-1';

    switch (size) {
        default:
        case 1:
            tag = 'h1';
            type = 'heading-1';
            break;
        case 2:
            tag = 'h2';
            type = 'heading-2';
            break;
        case 3:
            tag = 'h3';
            type = 'heading-3';
            break;
        case 4:
            tag = 'h4';
            type = 'heading-4';
            break;
    }

    return (
        <View
            as={as || tag}
            type={type}
            textColor={textColor}
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
    size: 2,
};

export default Heading;
