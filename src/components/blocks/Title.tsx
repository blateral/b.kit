import React, { FC, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

import Heading, { HeadlineTag } from '../typography/Heading';
import { spacings, withRange, getFont, getColor } from '../../utils/styles';

const View = styled.div<{ isCentered?: boolean }>`
    text-align: ${({ isCentered }) => (isCentered ? 'center' : 'left')};
`;

const SuperTitle = styled.div<{ textColor?: string }>`
    display: inline-block;
    ${withRange([spacings.nudge * 2, spacings.nudge * 3], 'padding-bottom')};

    font-family: ${({ theme }) => getFont(theme, 'super', 'family')};
    font-weight: ${({ theme }) => getFont(theme, 'super', 'weight')};
    font-style: ${({ theme }) => getFont(theme, 'super', 'style')};
    ${({ theme }) => withRange(getFont(theme, 'super', 'size'), 'font-size')}
    line-height: ${({ theme }) => getFont(theme, 'super', 'lineHeight')};
    letter-spacing: ${({ theme }) => getFont(theme, 'super', 'letterSpacing')};
    text-transform: ${({ theme }) => getFont(theme, 'super', 'textTransform')};

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
                            ? getColor(theme, 'white')
                            : getColor(theme, 'black')
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
                            ? getColor(theme, 'white')
                            : getColor(theme, 'black')
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
