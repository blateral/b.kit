import React, { FC } from 'react';
import styled from 'styled-components';

import Heading, { HeadlineTag } from 'components/typography/Heading';
import { spacings, withRange } from 'utils/styles';

const View = styled.div<{ isCentered?: boolean }>`
    text-align: ${({ isCentered }) => (isCentered ? 'center' : 'left')};

    & > * + * {
        ${withRange([spacings.nudge * 2, spacings.nudge * 3], 'padding-top')};
    }
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
    return (
        <View isCentered={isCentered} className={className}>
            {superTitle && (
                <Heading as={superTitleAs} size="super" isInverted={isInverted}>
                    {superTitle}
                </Heading>
            )}
            {title && (
                <Heading as={titleAs} size="heading-2" isInverted={isInverted}>
                    {title}
                </Heading>
            )}
        </View>
    );
};

export default Title;
