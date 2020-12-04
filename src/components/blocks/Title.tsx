import React, { FC } from 'react';
import styled from 'styled-components';

import Heading, { HeadlineTag } from '../typography/Heading';
import { spacings, withRange, colors, fonts } from '../../utils/styles';

const View = styled.div<{ isCentered?: boolean }>`
    text-align: ${({ isCentered }) => (isCentered ? 'center' : 'left')};
`;

const SuperTitle = styled.div<{ textColor?: string }>`
    display: inline-block;
    ${withRange([spacings.nudge * 2, spacings.nudge * 3], 'padding-bottom')};

    font-family: ${fonts['super'].family};
    font-weight: ${fonts['super'].weight};
    font-style: ${fonts['super'].style};
    ${withRange(fonts['super'].size, 'font-size')}
    line-height: ${fonts['super'].lineHeight};
    letter-spacing: ${fonts['super'].letterSpacing};
    text-transform: ${fonts['super'].textTransform};

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
    return (
        <View isCentered={isCentered} className={className}>
            {superTitle && (
                <SuperTitle
                    textColor={isInverted ? colors.white : colors.black}
                >
                    {superTitle}
                </SuperTitle>
            )}
            {title && (
                <Heading
                    size={2}
                    textColor={isInverted ? colors.white : colors.black}
                    as={titleAs}
                >
                    {title}
                </Heading>
            )}
        </View>
    );
};

export default Title;
