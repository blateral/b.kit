import React, { FC, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

import Heading, { HeadlineTag } from 'components/typography/Heading';
import {
    spacings,
    withRange,
    getFonts as font,
    getColors as color,
} from 'utils/styles';

const View = styled.div<{ isCentered?: boolean }>`
    text-align: ${({ isCentered }) => (isCentered ? 'center' : 'left')};
`;

const SuperTitle = styled.div<{ textColor?: string }>`
    display: inline-block;
    ${withRange([spacings.nudge * 2, spacings.nudge * 3], 'padding-bottom')};

    font-family: ${({ theme }) => font(theme).super.family};
    font-weight: ${({ theme }) => font(theme).super.weight};
    font-style: ${({ theme }) => font(theme).super.style};
    ${({ theme }) => withRange(font(theme).super.size, 'font-size')}
    line-height: ${({ theme }) => font(theme).super.lineHeight};
    letter-spacing: ${({ theme }) => font(theme).super.letterSpacing};
    text-transform: ${({ theme }) => font(theme).super.textTransform};

    color: ${({ textColor }) => textColor || 'inherit'};
`;

const Title: FC<{
    superTitle?: string;
    superTitleAs?: HeadlineTag;
    title?: string;
    titleAs?: HeadlineTag;
    isInverted?: boolean;
    isCentered?: boolean;
    className?: string;
}> = ({
    superTitle,
    superTitleAs,
    title,
    titleAs,
    isInverted = false,
    isCentered = false,
    className,
}) => {
    const theme = useContext(ThemeContext);

    return (
        <View isCentered={isCentered} className={className}>
            {superTitle && (
                <SuperTitle
                    textColor={
                        isInverted ? color(theme).white : color(theme).black
                    }
                    as={superTitleAs}
                >
                    {superTitle}
                </SuperTitle>
            )}
            {title && (
                <Heading
                    size={2}
                    textColor={
                        isInverted ? color(theme).white : color(theme).black
                    }
                    as={titleAs}
                >
                    {title}
                </Heading>
            )}
        </View>
    );
};

export default Title;
