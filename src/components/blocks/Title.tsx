import React, { FC, useContext } from 'react';
import styled, { css, ThemeContext } from 'styled-components';

import Heading, { HeadlineTag } from 'components/typography/Heading';
import { spacings, getColors as color } from 'utils/styles';

const View = styled.div<{ isCentered?: boolean }>`
    display: block;
    text-align: ${({ isCentered }) => (isCentered ? 'center' : 'left')};
    margin: ${({ isCentered }) => isCentered && '0 auto'};

    & > * + * {
        margin-top: ${spacings.nudge * 2}px;
    }
`;

const SuperTitle = styled(Heading)`
    display: block;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const MainTitle = styled(Heading)<{ maxLines?: number }>`
    display: block;

    ${({ maxLines }) =>
        maxLines &&
        maxLines > 0 &&
        css`
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: ${maxLines}; /* number of lines to show */
            line-clamp: ${maxLines};
            -webkit-box-orient: vertical;
        `}
`;

const Title: FC<{
    /**
     * Text color mode mostly background dependent.
     * The value onImage is used if the title is placed on an underlying image
     * */
    colorMode?: 'default' | 'inverted' | 'onImage';

    /** Superior title that stands above main title */
    superTitle?: string;

    /** Superior title HTML tag type (h3, h4 ...) */
    superTitleAs?: HeadlineTag;

    /** Main title text */
    title?: string;

    /** Main title HTML tag type (h2, h3, h4...) */
    titleAs?: HeadlineTag;

    /** Clamp lines of text to specific number */
    maxLines?: number;

    /** Center texts */
    isCentered?: boolean;
    className?: string;
}> = ({
    colorMode = 'default',
    superTitle,
    superTitleAs,
    title,
    titleAs,
    maxLines,
    isCentered = false,
    className,
}) => {
    const theme = useContext(ThemeContext);

    return (
        <View isCentered={isCentered} className={className}>
            {superTitle && (
                <SuperTitle
                    renderAs={superTitleAs || 'div'}
                    size="super"
                    textColor={
                        colorMode === 'onImage'
                            ? color(theme).text.inverted
                            : undefined
                    }
                    isInverted={colorMode === 'inverted'}
                    innerHTML={superTitle}
                />
            )}
            {title && (
                <MainTitle
                    renderAs={titleAs || 'h2'}
                    size="heading-2"
                    textColor={
                        colorMode === 'onImage'
                            ? color(theme).text.inverted
                            : undefined
                    }
                    isInverted={colorMode === 'inverted'}
                    innerHTML={title}
                    maxLines={maxLines}
                />
            )}
        </View>
    );
};

export default Title;
