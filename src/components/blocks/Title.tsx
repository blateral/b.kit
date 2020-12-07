import React, { FC, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

import Heading, { HeadlineTag } from '../typography/Heading';
import { spacings, withRange, getColors, getFonts } from '../../utils/styles';

const View = styled.div<{ isCentered?: boolean }>`
    text-align: ${({ isCentered }) => (isCentered ? 'center' : 'left')};
`;

const SuperTitle = styled.div<{ textColor?: string }>`
    display: inline-block;
    ${withRange([spacings.nudge * 2, spacings.nudge * 3], 'padding-bottom')};

    font-family: ${({ theme }) => getFonts(theme)['super'].family};
    font-weight: ${({ theme }) => getFonts(theme)['super'].weight};
    font-style: ${({ theme }) => getFonts(theme)['super'].style};
    ${({ theme }) => withRange(getFonts(theme)['super'].size, 'font-size')}
    line-height: ${({ theme }) => getFonts(theme)['super'].lineHeight};
    letter-spacing: ${({ theme }) => getFonts(theme)['super'].letterSpacing};
    text-transform: ${({ theme }) => getFonts(theme)['super'].textTransform};

    color: ${({ textColor }) => textColor || 'inherit'};
`;

const Title: FC<{
    superTitle?: string;
    title?: string;
    titleAs?: HeadlineTag;
    isInverted?: boolean;
    isCentered?: boolean;
    className?: string;
}> = ({ superTitle, title, titleAs, isInverted, isCentered, className }) => {
    const theme = useContext(ThemeContext);

    return (
        <View isCentered={isCentered} className={className}>
            {superTitle && (
                <SuperTitle
                    textColor={
                        isInverted
                            ? getColors(theme).white
                            : getColors(theme).black
                    }
                >
                    {superTitle}
                </SuperTitle>
            )}
            {title && (
                <Heading
                    size={2}
                    textColor={
                        isInverted
                            ? getColors(theme).white
                            : getColors(theme).black
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
